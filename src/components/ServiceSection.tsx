"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Server, 
  Stethoscope, 
  Plane, 
  Paintbrush, 
  Microscope,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    icon: Cpu,
    title: "반도체 및 디스플레이",
    description: "초정밀 노광, 세정 장비 등 미세 진동에 민감한 핵심 설비 전문 운송",
    longDesc: "반도체 8대 공정 핵심 장비부터 대형 디스플레이 패널까지, 수백억 원대 초정밀 장비를 위해 프로텍스만의 특수 에어서스펜션 차량과 숙련된 전담 엔지니어가 투입됩니다.",
    image: "/images/특수화물사진/정밀장비1.jpg",
  },
  {
    icon: Server,
    title: "데이터센터 서버",
    description: "대규모 서버 및 네트워크 장비의 체계적인 해체, 이전, 재설치 서비스",
    longDesc: "클라우드 및 AI 데이터센터의 무중단 이전을 위해 기술 인력이 장비의 무선 정전기 방지 포장부터 서버랙 단위의 충격 방지 이동까지 전 과정을 밀착 관리합니다.",
    image: "/images/특수화물사진/데이터센터 서버이전.jpg",
  },
  {
    icon: Stethoscope,
    title: "의료 및 바이오 기기",
    description: "MRI, CT 등 고가 병원 장비를 안전하게 목적지까지 안착시키는 정밀 물류",
    longDesc: "MRI, CT, 수술용 로봇 등 초정밀 의료 기기를 안전하게 배송합니다. 외부 환경 변화에 민감한 바이오 냉동고 등을 위한 완벽한 온습도 조절 시스템을 제공합니다.",
    image: "/images/특수화물사진/정밀장비2.jpg",
  },
  {
    icon: Plane,
    title: "항공우주 및 방위산업",
    description: "항공기 부품, 정밀 레이더 등 국가 전략 물자에 특화된 보안 운송",
    longDesc: "복잡한 형상의 항공기 엔진부품부터 거대 지상 레이더까지, 국가 자산의 안전한 이동을 위해 특화된 결박 시스템과 24시간 실시간 위치 관제 서비스를 지원합니다.",
    image: "/images/특수화물사진/레이더장비항온항습운송.jpg",
  },
  {
    icon: Paintbrush,
    title: "문화예술품 및 전시",
    description: "박물관 유물, 미술관 회화 등 온습도 관리가 필수적인 자산 전문 이동",
    longDesc: "국가의 보물과 세계적인 미술품을 위해 박물관급 항온항습 무진동 차량을 투입합니다. 전문 아트 핸들러가 포장부터 전시 배치까지 전 과정을 책임집니다.",
    image: "/images/특수화물사진/스펀지안전포장및결박.jpg",
  },
  {
    icon: Microscope,
    title: "연구소 및 실험 장비",
    description: "대학 및 기업 연구소의 정밀 분석 장비 패키징 및 셋업 지원 운송",
    longDesc: "전자현미경, 정밀 계측기 등 섬세한 실험실 장비를 연구 환경 손상 없이 신속하게 이동합니다. 해체부터 도착지 셋업 보조까지 통합 서비스를 제공합니다.",
    image: "/images/특수화물사진/국가시설 설비이동.jpg",
  },
];

export default function ServiceSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-0">
        <div className="text-center mb-16 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-black text-primary-navy tracking-tight uppercase"
          >
            MAJOR <span className="font-light text-primary-orange">TRANSPORT FIELDS</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-sm tracking-widest uppercase font-bold">프로텍스 주요 운송 분야</p>
        </div>

        <div className="flex flex-col lg:flex-row h-[600px] lg:h-[750px] w-full gap-1 lg:gap-0 bg-primary-navy">
          {services.map((service, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={service.title}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                animate={{
                  flex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden group cursor-pointer h-full border-r border-white/5"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ${
                      isActive ? "scale-110" : "scale-100 grayscale-[0.7] brightness-[0.6]"
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive 
                        ? "bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" 
                        : "bg-black/60 group-hover:bg-black/40 opacity-100"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full text-white z-10 overflow-hidden px-8 lg:px-14 pointer-events-none">
                  <motion.div 
                    initial={false}
                    animate={{ 
                      y: 0,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "circOut"
                    }}
                    className="absolute bottom-[10%] left-8 lg:left-14 right-8 lg:right-14"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl transition-all duration-300 ${
                        isActive ? "bg-primary-orange text-white" : "bg-white/10 text-white"
                      }`}>
                        <service.icon size={28} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="relative">
                      <motion.h3 
                        animate={{ 
                          scale: isActive ? 1.2 : activeIdx !== null ? 0.7 : 1,
                          color: isActive ? "#E87C00" : "#FFFFFF",
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="font-black mb-6 leading-none tracking-tighter origin-left text-[24px]"
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 30,
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: isActive ? 0.1 : 0,
                          ease: "easeOut"
                        }}
                        style={{ display: isActive ? "block" : "none" }}
                        className="max-w-xl"
                      >
                        <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-6 font-medium">
                          {service.longDesc}
                        </p>
                        <div className="flex items-center space-x-3 text-primary-orange font-bold text-xs uppercase tracking-[0.3em] group/btn">
                          <span>LEARN MORE</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Index Number */}
                <div className={`absolute top-12 right-12 text-5xl font-outfit font-black text-white/10 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}>
                  0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
