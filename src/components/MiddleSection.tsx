"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "10억 보험가입",
    description: "적재물 배상책임보험 10억 가입으로 사고 발생 시 완벽한 보상을 보장합니다.",
  },
  {
    title: "25톤 네트워크",
    description: "전국 무진동 특수차 25톤 네트워크를 통해 전국 어디든 신속한 배차가 가능합니다.",
  },
  {
    title: "특수 교육 이수",
    description: "반도체, 의료장비 등 정밀 기기 취급에 대한 전문 기술 및 보안 교육을 이수 완료하였습니다.",
  },
  {
    title: "전문 포장팀",
    description: "문화재, 예술품 등 온도와 습도에 민감한 특수 화물을 위한 전담 포장 및 운송팀을 운영합니다.",
  },
];

export default function MiddleSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden scroll-mt-24">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0 scale-110">
        <Image
          src="/images/메인대표사진1.jpg"
          alt="Company Scale Representation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-navy/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-gray-300 font-bold text-sm tracking-widest uppercase mb-4 block">
            WHY PROTEX
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] font-outfit font-black text-white mb-8 tracking-tight"
          >
            프로텍스를 <span className="text-primary-orange">선택해야 하는 이유</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="border-l border-white/20 pl-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
