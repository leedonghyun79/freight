"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Controller } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const cases = [
  {
    id: 1,
    title: "국가연구소 정밀 설비 이전",
    description: "국가 연구소 내 초정밀 실험 장비의 안전한 이전. 무진동 차량과 전문 인력을 통한 완벽한 운송 솔루션 제공.",
    category: "Precision Equipment",
    image: "/images/20260311_102859.jpg",
    specs: ["Air Suspension", "Power Lift", "Clean Room"],
  },
  {
    id: 2,
    title: "대기업 반도체 라인 증설 운송",
    description: "S사 평택 캠퍼스 신규 라인 도입을 위한 진동 흡수 시스템 가동. 수백억 원대 초정밀 장비를 완벽하게 안착.",
    category: "Semiconductor",
    image: "/images/20260311_102924.jpg",
    specs: ["Constant Temp", "Vibration Free", "Security"],
  },
  {
    id: 3,
    title: "종합병원 MRI 검진 장비 반입",
    description: "K대학교 병원 MRI실 이전 및 정밀 설치. 외부 날씨와 상관없는 항온항습 시스템 유지를 통한 장비 보호.",
    category: "Medical Device",
    image: "/images/20260313_072759.jpg",
    specs: ["Heavy Duty Lift", "Precision Setup"],
  },
  {
    id: 4,
    title: "전국 공공기관 서버센터 통합 이전",
    category: "Data Center",
    image: "/images/20260316_095955.jpg",
    specs: ["Multiple Trucks", "Safety Check"],
  },
];

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-black text-primary-navy tracking-tight">
              실제 <span className="text-primary-orange">운송 사례</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="portfolio-prev"
              className="w-12 h-12 rounded-full border border-primary-navy/20 flex items-center justify-center hover:bg-primary-navy hover:text-white transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              id="portfolio-next"
              className="w-12 h-12 rounded-full border border-primary-navy/20 flex items-center justify-center hover:bg-primary-navy hover:text-white transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
          {/* Main Display Area (Left Focus) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl group">
            <Swiper
              modules={[Navigation, Autoplay, EffectFade, Controller]}
              effect="fade"
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                prevEl: "#portfolio-prev",
                nextEl: "#portfolio-next",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              {cases.map((item) => (
                <SwiperSlide key={item.id} className="relative h-full min-h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent flex flex-col justify-end p-10 md:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="bg-primary-orange text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-[0.2em] uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 max-w-lg mb-8 text-sm md:text-base leading-relaxed hidden sm:block">
                        {item.description}
                      </p>
                      <button className="inline-flex items-center text-white font-bold text-sm tracking-wider border-b-2 border-primary-orange pb-2 hover:border-white transition-all group">
                        DETAIL VIEW
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Pagination Counter (LX Style) */}
            <div className="absolute bottom-10 right-10 z-10 hidden sm:flex items-center space-x-6">
               <div className="h-0.5 w-12 bg-white/20 relative overflow-hidden">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-y-0 left-0 bg-primary-orange"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
               </div>
               <div className="text-white font-outfit font-bold tracking-widest flex items-center space-x-2">
                  <span className="text-lg">0{activeIndex + 1}</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/40 text-xs">0{cases.length}</span>
               </div>
            </div>
          </div>

          {/* Sub Thumbnails List (Right Side) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {cases.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => mainSwiper?.slideTo(idx)}
                className={`flex items-center p-4 rounded-2xl transition-all text-left group ${
                  activeIndex === idx
                    ? "bg-primary-navy text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-opacity ${activeIndex === idx ? "bg-primary-navy/40" : "bg-transparent"}`}></div>
                </div>
                <div className="ml-4 truncate">
                  <div className={`text-[10px] font-bold tracking-wider mb-1 uppercase ${activeIndex === idx ? "text-primary-orange" : "text-gray-400"}`}>
                    Project 0{idx + 1}
                  </div>
                  <div className="font-bold text-sm truncate">{item.title}</div>
                </div>
                {activeIndex === idx && (
                   <motion.div layoutId="active-indicator" className="ml-auto">
                      <ArrowRight size={18} className="text-primary-orange" />
                   </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
