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
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-primary-navy z-0"
    >
      {/* Background Image with Dynamic Overlay */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image
          src="/images/메인트럭사진.jpg"
          alt="PROTEX Professional Special Cargo Truck"
          fill
          priority
          className="object-cover"
        />
        {/* Adjusted Gradients to Reveal the Truck Brand (MAN Logo Area) while protecting text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-primary-navy/80"></div>
      </motion.div>

      <motion.div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-primary-orange text-sm font-black tracking-[0.4em] uppercase mb-6 block drop-shadow-md">
            SPECIAL CARGO TRANSPORT
          </span>

          <h1 className="text-4xl md:text-5xl font-outfit font-black text-white leading-[1.2] mb-8 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            프로텍스가 제안하는<br />
            <span className="text-primary-orange">운송의 새로운 기준</span>
          </h1>

          <p className="text-lg md:text-[22px] text-gray-100 font-medium mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] opacity-90">
            고가의 반도체, 의료장비, 고부가가치 화물을 가치 그대로 안전하게 전합니다.<br className="hidden md:block" />
            프로텍스만의 전담팀과 정밀 관제 시스템으로 처음부터 끝까지 책임집니다.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-primary-orange text-white font-normal rounded-full hover:bg-orange-600 transition-all duration-300 shadow-2xl shadow-primary-orange/40 uppercase tracking-widest text-[15px] flex items-center justify-center cursor-pointer"
            >
              빠른 견적 문의
            </a>
            <button className="px-10 py-5 border-2 border-white/50 text-white font-normal rounded-full hover:bg-white hover:text-primary-navy transition-all duration-300 backdrop-blur-md group text-[15px] uppercase tracking-widest">
              고객센터 1588-0000
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer">
        <span className="text-[10px] text-white/50 font-bold tracking-[0.3em] mb-4 uppercase group-hover:text-primary-orange transition-colors">DISCOVER MORE</span>
        <div className="w-[26px] h-[44px] border-2 border-white/30 rounded-full flex justify-center p-1.5 transition-colors group-hover:border-primary-orange">
           <motion.div 
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-primary-orange rounded-full"
           />
        </div>
      </div>
    </section>
  );
}
