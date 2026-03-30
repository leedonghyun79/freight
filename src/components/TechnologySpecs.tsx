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
    <section id="technology" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-outfit font-black text-primary-navy mb-6 tracking-tight uppercase"
          >
            TECHNOLOGY <span className="font-light text-primary-orange">& SPEC</span>
          </motion.h2>
          <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">보유차량 제원 및 핵심기술</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left: Specs Grid */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {techSpecs.map((tech, idx) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#f8f9fa] border border-gray-100 flex items-center justify-center text-primary-navy group-hover:bg-primary-orange group-hover:text-white transition-all shadow-sm shrink-0">
                      <tech.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-primary-navy text-lg font-bold mb-2 group-hover:text-primary-orange transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Featured Vehicle Card */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8f9fa] rounded-[40px] p-10 border border-gray-100 shadow-xl relative h-full flex flex-col"
            >
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 shadow-lg">
                <Image
                  src="/images/hero.png"
                  alt="Professional Logistics Truck"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                   <div className="bg-primary-orange text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
                     Main Fleet
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 flex-grow">
                 {[
                   { label: "적재함폭", value: "2,400mm" },
                   { label: "적재함길이", value: "6,200mm" },
                   { label: "최대높이", value: "2,500mm" },
                   { label: "배차 네트워크", value: "25톤 전담망" }
                 ].map((spec) => (
                   <div key={spec.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-2">{spec.label}</div>
                      <div className="text-primary-navy text-xl font-outfit font-black">{spec.value}</div>
                   </div>
                 ))}
                 <div className="bg-primary-navy p-6 rounded-2xl col-span-2 flex items-center justify-between group cursor-pointer hover:bg-black transition-colors">
                    <div>
                       <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">인증 현황</div>
                       <div className="text-white text-sm font-bold">삼성·SK 하이닉스 공식 출입 인증 차량</div>
                    </div>
                    <div className="text-primary-orange group-hover:translate-x-2 transition-transform">
                       <ArrowUpCircle size={28} />
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
