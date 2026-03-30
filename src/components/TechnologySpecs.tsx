"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Truck } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techFeatures = [
  {
    number: "01",
    title: "무진동 에어서스펜션",
    engTitle: "Vibration-Free",
    description: "도로의 충격을 공기압으로 흡수하여 적재물에 가해지는 충격을 제로에 가깝게 최소화합니다.",
  },
  {
    number: "02",
    title: "항온·항습 시스템",
    engTitle: "Climate Control",
    description: "365일 실시간 온도 및 습도 모니터링 시스템을 가동하여 외부 날씨와 상관없이 적재함 내부 환경을 일정하게 유지합니다.",
  },
  {
    number: "03",
    title: "대형 파워리프트",
    engTitle: "Heavy Duty Lift",
    description: "고중량 장비도 지게차 없이 안전하고 신속하게 상하차 작업이 가능합니다.",
  },
  {
    number: "04",
    title: "제품안전포장 및 완충시스템",
    description: "정전기 방지 포장 및 진동방지 전면 완충재(스펀지) 포장으로 안전성을 극대화하며, 적재함 내부 CCTV로 실시간 모니터링을 진행합니다.",
  },
];

export default function TechnologySpecs() {
  return (
    <section id="technology" className="py-24 bg-[#f8f9fa] overflow-hidden relative">
      {/* Background Watermark Icon */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] select-none pointer-events-none z-0">
        <Truck size={800} strokeWidth={1} className="text-primary-navy" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-4 block">
            TECHNOLOGY & SPEC
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] font-outfit font-black text-primary-navy tracking-tight"
          >
            보유차량 <span className="text-primary-orange">제원 및 핵심기술</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 items-stretch"
        >
          {/* Left: Simplified Information Column (Direct Specs) */}
          <div className="lg:w-[500px] flex-shrink-0 flex flex-col space-y-12">
            {/* Text Area */}
            <div className="space-y-6 pr-6">
              <div className="bg-primary-orange/10 text-primary-orange px-4 py-1.5 rounded-lg text-[11px] font-bold tracking-widest uppercase inline-block font-inter">
                주력 차량 전문 수송
              </div>
              <h3 className="text-2xl lg:text-[28px] font-black text-primary-navy leading-[1.3] tracking-tighter">
                최신 독일제 MAN트럭 & 1톤 <br />
                <span className="text-primary-orange">무진동 부터 25톤무진동 화물차</span>
              </h3>
              <p className="text-gray-500 text-sm lg:text-base font-bold leading-relaxed font-inter opacity-90">
                4.2톤 대형 파워 리프트 장착 <br />
                <span className="text-[15px] font-medium text-gray-400">(폭 2,400 / 길이 6,200 / 높이 2,500 이상)</span>
              </p>
            </div>

            {/* Truck Image Block */}
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl group border border-gray-100">
              <Image
                src="/images/20260127_074853.jpg"
                alt="PROTEX Professional Fleet"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right: 2-Column Staggered Grid of Features */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 lg:pb-[80px]">
            {techFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "bg-white rounded-[32px] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group/card flex flex-col h-full",
                  /* Stagger the second column (idx 1 and 3) as requested */
                  (idx % 2 === 1) ? "lg:translate-y-[80px]" : ""
                )}
              >
                <h4 className="text-lg lg:text-xl font-black text-primary-navy mb-4 group-hover/card:text-primary-orange transition-colors tracking-tight whitespace-nowrap">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
