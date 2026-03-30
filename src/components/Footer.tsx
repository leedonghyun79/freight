"use client";

import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Info, 
  ChevronUp 
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050B1D] py-20 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary-navy/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 pb-20 border-b border-white/5">
          {/* Logo & About */}
          <div className="md:col-span-4 max-w-sm">
            <Link href="/" className="inline-flex items-center space-x-2 mb-8">
               <div className="w-10 h-10 bg-primary-navy rounded-lg flex items-center justify-center">
                  <span className="text-white font-outfit font-bold text-xl">P</span>
               </div>
               <span className="font-outfit font-bold text-2xl tracking-tighter text-white">PROTEX</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              고객님의 소중한 화물을 위해 항온/항습 및 무진동 시스템을 완비한 전문 운송 파트너입니다. 
              최상의 장비와 전문 인력으로 안전한 이동의 기준이 되어 드리겠습니다.
            </p>
            <div className="flex items-center space-x-2">
               <div className="w-1.5 h-1.5 rounded-full bg-primary-orange animate-pulse"></div>
               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Insurance Coverage 1B KRW</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-10">Quick Menu</h4>
            <ul className="space-y-6">
              {["회사 소개", "서비스 섹션", "기술 정보", "운송 사례"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-primary-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-3">
             <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-10">Connect</h4>
             <ul className="space-y-8">
                <li className="flex items-start space-x-4 group cursor-pointer">
                   <div className="p-3 rounded-xl bg-white/5 text-gray-500 group-hover:text-primary-orange transition-colors">
                      <Phone size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-600 mb-1">고객센터</div>
                      <div className="text-white text-base font-bold">1588-0000</div>
                   </div>
                </li>
                <li className="flex items-start space-x-4 group cursor-pointer">
                   <div className="p-3 rounded-xl bg-white/5 text-gray-500 group-hover:text-primary-orange transition-colors">
                      <Mail size={18} />
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-600 mb-1">사업문의</div>
                      <div className="text-white text-base font-bold">protexmove@gmail.com</div>
                   </div>
                </li>
                <li className="flex items-start space-x-4 group">
                   <div className="p-3 rounded-xl bg-white/5 text-gray-500 group-hover:text-primary-orange transition-colors">
                      <MapPin size={18} />
                   </div>
                   <div className="max-w-[200px]">
                      <div className="text-[10px] text-gray-600 mb-1">사무소</div>
                      <div className="text-white text-xs font-bold leading-relaxed">경기도 평택시 일원 및 상암 데이터센터 협력사무소</div>
                   </div>
                </li>
             </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
             <button 
                onClick={scrollToTop}
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary-orange transition-all group shadow-2xl"
             >
                <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
             </button>
             <span className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] mt-4">TOP</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
           <div className="mb-6 md:mb-0">
              © 2026 PROTEX Special Cargo. All Rights Reserved.
           </div>
           <div className="flex items-center space-x-8">
              <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
              <Link href="#" className="hover:text-white transition-colors font-bold text-gray-400">개인정보처리방침</Link>
              <Link href="#" className="hover:text-white transition-colors">관리자 로그인</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
