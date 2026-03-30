"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Truck, Thermometer, FileText } from "lucide-react";

const stats = [
  { icon: Shield, label: "적재물 보험", value: "10억+" },
  { icon: Truck, label: "무진동 배차", value: "1분 내" },
  { icon: Thermometer, label: "항온항습", value: "24/7" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="PROTEX Professional Freight"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-orange/20 border border-primary-orange/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></span>
            <span className="text-primary-orange text-xs font-bold tracking-wider">
              SPECIAL CARGO TRANSPORT SOLUTION
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-outfit font-black text-white leading-[1.1] mb-6 tracking-tight">
            특수 무진동 <br />
            <span className="text-primary-orange">운송의 새로운 기준</span>
          </h1>
          
          <p className="text-xl text-gray-300 font-light mb-10 max-w-lg leading-relaxed">
            고가의 반도체, 의료장비, 고부가가치 화물을 가치 그대로 안전하게 전합니다. 
            프로텍스만의 에어서스펜션과 실시간 관제 시스템으로 완벽한 이동을 경험하세요.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-primary-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-orange/20 flex items-center group">
              <FileText className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
              간편 견적 문의하기
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              보유 장비 제원 보기
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              >
                <div className="text-primary-orange mb-2">
                  <stat.icon size={24} />
                </div>
                <div className="text-2xl font-outfit font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Graphics/Details - Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* Animated Circles/Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-white/5 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-primary-orange/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Featured Visual Element (Glass Panel with Tech Detail) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass p-8 rounded-3xl w-full max-w-[320px] shadow-2xl">
                <div className="text-primary-orange text-sm font-bold mb-4">TECHNOLOGY PROOF</div>
                <h3 className="text-white text-xl font-bold mb-4 leading-snug">
                  에어 서스펜션 <br /> 실시간 충격 제로화
                </h3>
                <div className="h-1 w-full bg-white/10 rounded-full mb-6 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary-orange"
                    initial={{ width: "0%" }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  ></motion.div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange mr-2"></span>
                    독일 MAN 최신형 트럭 엔진
                  </li>
                  <li className="flex items-center text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange mr-2"></span>
                    실시간 항온/항습 모니터링
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] text-white font-bold tracking-[0.2em] mt-2 uppercase">SCROLL</span>
      </div>
    </section>
  );
}
