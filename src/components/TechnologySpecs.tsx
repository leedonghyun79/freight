"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Wind, 
  Thermometer, 
  ArrowUpCircle, 
  ShieldCheck, 
  Search, 
  Video 
} from "lucide-react";

const techSpecs = [
  {
    icon: Wind,
    title: "무진동 에어서스펜션",
    detail: "Vibration-Free System",
    description: "도로의 충격을 공기압으로 흡수하여 적재물에 가해지는 상하 전후 충격을 제로에 가깝게 최소화합니다.",
  },
  {
    icon: Thermometer,
    title: "항온·항습 시스템",
    detail: "Climate Control",
    description: "365일 실시간 온도 및 습도 모니터링 시스템을 가동하여 외부 날씨와 상관없이 적재함 내부 환경을 일정하게 유지합니다.",
  },
  {
    icon: ArrowUpCircle,
    title: "대형 파워리프트",
    detail: "Heavy Duty Lift",
    description: "고중량 장비도 지게차 없이 안전하고 신속하게 상하차 작업이 가능한 최신형 4.2톤 대형 리프트 장착.",
  },
  {
    icon: ShieldCheck,
    title: "적재물 배상보험 10억",
    detail: "1B KRW Insurance",
    description: "고가 장비의 만일의 경우를 대비하여 전 차량 적재물 파손 보상 보험 10억에 의무 가입되어 있습니다.",
  },
  {
    icon: Search,
    title: "안전 포장 및 완충 시스템",
    detail: "Shock-proof Packaging",
    description: "정전기 방지 포장 및 전면 완충재(스펀지) 포장 서비스와 함께 전문 포장 팀을 상시 운영합니다.",
  },
  {
    icon: Video,
    title: "실시간 CCTV 모니터링",
    detail: "Real-time Supervision",
    description: "적재함 내부에 설치된 CCTV를 통해 이동 중에도 화물의 상태를 실시간으로 모니터링하여 안전을 보장합니다.",
  },
];

export default function TechnologySpecs() {
  return (
    <section id="technology" className="py-24 bg-primary-navy relative overflow-hidden">
      {/* Visual Accent Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              CORE TECHNOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-12">
              가치 있는 장비를 위한 <br />
              <span className="text-primary-orange">특수 기술력</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {techSpecs.map((tech, idx) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-lg shrink-0">
                      <tech.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-white text-base font-bold mb-1">
                        {tech.title}
                      </h3>
                      <div className="text-[10px] text-primary-orange/60 uppercase tracking-widest mb-2 font-bold">
                        {tech.detail}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Vehicle Image Area */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[40px] bg-white/5 border border-white/10 overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-primary-orange text-white px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                  Main Vessel
                </div>
              </div>
              
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-8">
                 <Image
                    src="/images/hero.png" // Re-using the professional truck image
                    alt="Latest MAN Truck Spec"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white text-xl font-bold mb-1">최신 독일제 MAN 트럭</h4>
                    <p className="text-gray-300 text-xs font-medium">4.2톤 대형 파워 리프트 & 무진동 시스템 장착</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">적재함 사이즈</div>
                    <div className="text-white text-sm font-bold tracking-tighter">폭 2,400 / 길이 6,200</div>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">최대 높이</div>
                    <div className="text-primary-orange text-sm font-bold tracking-tighter">2,500mm 이상 보장</div>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">특이 사양</div>
                    <div className="text-white text-xs font-bold leading-tight">삼성·SK 하이닉스 출입용 안전난간대 완비</div>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">적재 위치</div>
                    <div className="text-white text-xs font-bold leading-tight">상습 탬버린 적재함 내부 높이 조절가능</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
