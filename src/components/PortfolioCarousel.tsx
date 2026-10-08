"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const cases = [
  {
    id: 1,
    title: "국가연구소 정밀 설비 이전",
    description: "국가 연구소 내 초정밀 실험 장비의 안전한 이전. 무진동 차량과 전문 인력을 통한 완벽한 운송 솔루션 제공.",
    category: "Precision Equipment",
    image: "/images/국가연구소.jpg",
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
    id: 5,
    title: "한화우주센터 레이더 운송",
    description: "항공우주 정밀 레이더 장비의 국가 전략 물자 특수 운송. 거대 중량물의 흔들림 없는 완벽 결박 및 실시간 보안 관제 시스템 가동.",
    category: "Aero & Defense",
    image: "/images/한화우주센터.jpg",
    specs: ["Strategic Cargo", "Security Control"],
  },
  {
    id: 6,
    title: "코엑스 기업전시물품 운송 및 철수",
    description: "연구 시설 내 다수의 분석 장비를 한 번에 안전하게 이동. 이중 밴드 결박 시스템과 전용 스펀지 완충제로 미세 흠집까지 방지.",
    category: "Bulk Transport",
    image: "/images/KakaoTalk_20241118_172833856_07.jpg",
    specs: ["Double Strapping", "Shock Absorption"],
  },
  {
    id: 7,
    title: "대형 기기 전면 완충 포장",
    description: "반도체 클린룸 내부 정밀 장비의 외부 반출 전 특수 포장. 정전기 방지 비닐과 전면 우레탄 완충제를 이용한 완벽한 외부 충격 차단.",
    category: "Safety Packing",
    image: "/images/KakaoTalk_20240925_171228899_09.jpg",
    specs: ["Anti-Static", "Padding"],
  },
  {
    id: 9,
    title: "1톤무진동 그림/미술품/문화재 포장 및 운송",
    description: "1톤 무진동차량 갤러리 그림을 포장하여 안전운송 및 갤러리 설치작업까지 완료!",
    category: "Art Transport",
    image: "/images/1톤무진동_그림_미술품.png",
    specs: ["Vibration Free", "Art Packing", "Installation"],
  },
];

// Fills its (relative) parent; shows a pulsing skeleton until the image has loaded.
function SkeletonImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 overflow-hidden bg-gray-200">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_1.4s_infinite]" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`${className ?? ""} ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}

export default function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : cases[selectedIndex];
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      else if (e.key === "ArrowLeft")
        setSelectedIndex((i) => (i === null ? i : (i - 1 + cases.length) % cases.length));
      else if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i === null ? i : (i + 1) % cases.length));
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Standardized Section Header with Navigation */}
        <div className="flex flex-row justify-between items-end mb-10 md:mb-16">
          <div className="flex-1">
            <span className="text-gray-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-[5px] md:mb-4 block">
              ACTUAL CASES
            </span>
            <h2 className="text-2xl md:text-[36px] font-black text-primary-navy tracking-tight whitespace-nowrap">
              실제 <span className="text-primary-orange">운송 사례</span>
            </h2>
          </div>

          {/* Header Navigation Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <button
              id="work-prev"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary-navy hover:text-white hover:border-primary-navy transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              id="work-next"
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary-navy hover:text-white hover:border-primary-navy transition-all duration-300 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView="auto" // Changed to auto to support fixed width slides
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              prevEl: "#work-prev",
              nextEl: "#work-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="w-full pb-10"
          >
            {cases.map((item) => (
              <SwiperSlide key={item.id} className="!w-[320px]">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedIndex(cases.indexOf(item))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedIndex(cases.indexOf(item));
                    }
                  }}
                  className="bg-white rounded-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl group/card h-[408px] flex flex-col cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SkeletonImage
                      src={item.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>
                  {/* Content Area */}
                  <div className="p-5 flex-grow border-t border-gray-50">
                    <h3 className="text-[20px] font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {/* Added description subtly for context */}
                    <p className="mt-3 text-[15px] text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && createPortal(
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="닫기"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <SkeletonImage
                key={selected.id}
                src={selected.image}
                alt={selected.title}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <span className="text-primary-orange font-bold text-xs tracking-widest uppercase">
                {selected.category}
              </span>
              <h3 className="mt-2 text-2xl font-black text-gray-900">{selected.title}</h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {selected.description}
              </p>
            </div>
            </div>

            {/* Prev / Next: vertically centered on the whole modal (image + text) */}
            <button
              type="button"
              onClick={() =>
                setSelectedIndex((i) => (i === null ? i : (i - 1 + cases.length) % cases.length))
              }
              aria-label="이전 사례"
              className="absolute left-2 md:-left-[72px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 text-gray-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              type="button"
              onClick={() =>
                setSelectedIndex((i) => (i === null ? i : (i + 1) % cases.length))
              }
              aria-label="다음 사례"
              className="absolute right-2 md:-right-[72px] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 text-gray-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
