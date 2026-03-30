"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Truck, Thermometer, FileText } from "lucide-react";

const stats = [
  { icon: Shield, label: "적재물 보험", value: "10억+" },
  { icon: Truck, label: "무진동 배차", value: "1분 내" },
  { icon: Thermometer, label: "항온항습", value: "24/7" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.section 
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-primary-navy"
    >
      {/* Background Image with Overlay */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/메인트럭사진.jpg"
          alt="PROTEX Professional Special Cargo Truck"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary-navy/90"></div>
      </motion.div>

      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            SPECIAL CARGO TRANSPORT
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black text-white leading-[1.2] mb-8 tracking-tight drop-shadow-2xl">
            특수 무진동 <br />
            <span className="text-primary-orange">운송의 새로운 기준</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            고가의 반도체, 의료장비, 고부가가치 화물을 가치 그대로 안전하게 전합니다.<br />
            프로텍스만의 전담팀과 정밀 관제 시스템으로 완벽한 이동을 경험하세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-4 bg-primary-orange text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-primary-orange/20 uppercase tracking-wider">
              빠른 견적 문의
            </button>
            <button className="px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-primary-navy transition-all duration-300 backdrop-blur-sm group">
              1588-0000
            </button>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-[10px] text-white font-bold tracking-[0.2em] mb-2 uppercase">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </motion.section>
  );
}
