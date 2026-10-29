import { NextResponse } from 'next/server';
import { SolapiMessageService } from 'solapi';

/**
 * 솔라피 API를 사용하여 알림톡/SMS를 전송하는 경로입니다.
 * 반드시 .env.local 또는 환경 변수에 다음 키들이 설정되어 있어야 합니다:
 * SOLAPI_API_KEY, SOLAPI_API_SECRET, SOLAPI_SENDER_NUMBER, ADMIN_RECEIVE_NUMBER
 */

const API_KEY = process.env.SOLAPI_API_KEY || '';
const API_SECRET = process.env.SOLAPI_API_SECRET || '';
const SENDER_NUMBER = process.env.SOLAPI_SENDER_NUMBER || '';
const ADMIN_RECEIVE_NUMBER = process.env.ADMIN_RECEIVE_NUMBER || '';

// 인터페이스 정의 (필요에 따라 더 상세하게 정의 가능)
interface ContactFormData {
  name: string;
  phone: string;
  startLoc?: string;
  endLoc?: string;
  item?: string;
  quantity?: string;
  message?: string;
}

// 간단한 인메모리 rate limit (IP당 10분에 5회). 서버리스 환경에서는 인스턴스별로 동작합니다.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const MAX_LEN: Record<keyof ContactFormData, number> = {
  name: 50,
  phone: 20,
  startLoc: 100,
  endLoc: 100,
  item: 100,
  quantity: 50,
  message: 1000,
};

export async function POST(request: Request) {
  try {
    // 키 설정 여부 확인
    if (!API_KEY || !API_SECRET || !SENDER_NUMBER || !ADMIN_RECEIVE_NUMBER) {
      console.error('Solapi configuration missing in environment variables.');
      return NextResponse.json(
        { success: false, error: '서버 설정 오류입니다.' },
        { status: 500 }
      );
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.' },
        { status: 429 }
      );
    }

    const raw = await request.json().catch(() => null);
    if (!raw || typeof raw !== 'object') {
      return NextResponse.json({ success: false, error: '잘못된 요청입니다.' }, { status: 400 });
    }

    // 문자열 타입/길이 검증
    const clean: Partial<Record<keyof ContactFormData, string>> = {};
    for (const key of Object.keys(MAX_LEN) as (keyof ContactFormData)[]) {
      const v = (raw as Record<string, unknown>)[key];
      if (v === undefined || v === null || v === '') continue;
      if (typeof v !== 'string' || v.length > MAX_LEN[key]) {
        return NextResponse.json(
          { success: false, error: '입력값이 올바르지 않습니다.' },
          { status: 400 }
        );
      }
      clean[key] = v.trim();
    }
    if (!clean.name || !clean.phone || !/^[0-9+\-\s()]{7,20}$/.test(clean.phone)) {
      return NextResponse.json(
        { success: false, error: '성함과 올바른 연락처를 입력해주세요.' },
        { status: 400 }
      );
    }
    const { name, phone, startLoc, endLoc, item, quantity, message } = clean;

    // 메시지 서비스 초기화 (POST 핸들러 내부에서 호출 시 매번 초기화되지만 보통 큰 무리는 없습니다)
    const messageService = new SolapiMessageService(API_KEY, API_SECRET);

    // 관리자 알림 메시지 포맷팅
    const textMessage = [
      '[프로텍스] 새 견적 문의가 도착했습니다.',
      '',
      `👤 성함: ${name}`,
      `📞 연락처: ${phone}`,
      `📍 출발 → 도착: ${startLoc || '미입력'} → ${endLoc || '미입력'}`,
      `📦 품목: ${item || '미입력'} / 수량: ${quantity || '미입력'}`,
      `💬 내용: ${message || '내용 없음'}`,
      '',
      '* 빠른 답변 부탁드립니다.',
    ].join('\n');



    // 단일 메시지 전송 (SMS/LMS 기준)
    const result = await messageService.sendOne({
      to: ADMIN_RECEIVE_NUMBER,
      from: SENDER_NUMBER,
      text: textMessage,
    });

    console.log(`[Notification SUCCESS] To: ${ADMIN_RECEIVE_NUMBER}, Message ID: ${result.messageId}`);

    return NextResponse.json({ success: true, messageId: result.messageId });
  } catch (error: any) {
    console.error('[Solapi Error]:', error);

    // 솔라피 에러 객체에서 구체적인 메시지 추출 시도
    const errorMessage = error?.response?.data?.errorMessage || error.message || 'SMS 발송 중 알 수 없는 오류가 발생했습니다.';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
