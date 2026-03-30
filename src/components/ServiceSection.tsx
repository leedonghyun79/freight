"use client";

import { motion } from "framer-motion";
import { 
  Boxes, 
  Server, 
  Stethoscope, 
  Plane, 
  Paintbrush, 
  Microscope, 
  LayoutTemplate 
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "반도체 및 디스플레이 장비",
    description: "초정밀 노광장비, 세정장비, 검사장비류 등 미세 진동에 극도로 민감한 핵심 설비 전문 운송",
    clients: "삼성반도체, SK하이닉스 등 대기업 출입 요건 충족",
  },
  {
    icon: Server,
    title: "데이터센터 서버 및 IT 장비",
    description: "네이버, 카카오 등 대기업 서버 및 네트워크 정밀 기기 충격 방지 완벽 이송",
    clients: "데이터센터 보안 규정 준수 및 전담 인력 배치",
  },
  {
    icon: Stethoscope,
    title: "의료 및 바이오 정밀 기기",
    description: "MRI, CT, 분석 기기 등 억 단위 이상의 고가 병원 장비를 안전하게 목적지까지 안착",
    clients: "의료 장비 전담 상하차 가이드 적용",
  },
  {
    icon: Plane,
    title: "항공우주 및 방위산업",
    description: "항공기 부품, 정밀 레이더, 방산 전자 장비 등 국가핵심 전략 물자 특수 운송",
    clients: "LG넥스원, 한화에어로스페이스 협력 파트너",
  },
  {
    icon: Paintbrush,
    title: "문화예술품 및 수장고 이송",
    description: "박물관 유물, 미술관 회화 등 온습도 관리가 필수적인 예술적 가치 자산 전문 이동",
    clients: "예술의전당, 서울국립극장 전시물 운송 경력",
  },
  {
    icon: Microscope,
    title: "연구소 및 대학교 장비 이전",
    description: "기업 연구소 및 대학교(서울대, 카이스트 등) 정밀 분석 장비 패키징 및 운송",
    clients: "실험실 장비 셋업 전문 포장팀 운영",
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-4"
          >
            EXPERTISE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-black text-primary-navy"
          >
            주요 <span className="text-primary-orange">운송 분야</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-500 mt-6 max-w-2xl mx-auto"
          >
            프로텍스 특수운송은 다양한 산업 분야의 고부가가치 자산을 위해 <br className="hidden md:block" /> 
            분야별 최적화된 맞춤형 물류 솔루션을 제공합니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-3xl bg-surface border border-gray-100 hover:border-primary-orange/50 hover:shadow-2xl hover:shadow-primary-orange/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-orange/5 rounded-bl-full group-hover:bg-primary-orange/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-navy group-hover:bg-primary-orange group-hover:text-white mb-8 transition-colors shadow-sm">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-primary-orange transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-gray-100 flex items-start space-x-2">
                <LayoutTemplate size={16} className="text-primary-orange flex-shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-primary-navy/60 uppercase tracking-tighter">
                  {service.clients}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Experience Proof */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 p-10 rounded-[40px] bg-primary-navy text-center relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
           <h4 className="text-white text-2xl font-bold mb-4 z-10 relative">어떤 전문 장비라도 프로텍스라면 가능합니다.</h4>
           <p className="text-gray-400 text-sm mb-8 z-10 relative">
             전국 특수 무진동 차량 네트워크를 통해 가장 빠른 배차(1분 내)부터 설치 현장 리프트 조작까지 <br />
             원스톱으로 대행해 드립니다.
           </p>
           <button className="bg-primary-orange text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-primary-orange/30 relative z-10">
              전문 상담사 연결하기
           </button>
        </motion.div>
      </div>
    </section>
  );
}
