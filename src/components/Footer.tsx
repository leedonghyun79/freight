"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Info, 
  ChevronUp 
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Left: Company Info */}
          <div>
            <div className="mb-12">
               <Image 
                 src="/images/tempFileForShare_20260322-181406.jpg" 
                 alt="PROTEX Logo" 
                 width={200} 
                 height={60} 
                 className="object-contain mix-blend-screen"
               />
            </div>
            
            <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
               <p>본사 : 경기도 안산시 단원구 시화호수로 835</p>
               <p>사업자등록번호 : 000-00-00000 | 대표이사 : 홍길동</p>
               <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center space-x-4">
                     <span className="text-white font-bold w-20 tracking-widest">TEL</span>
                     <span className="text-lg text-white">1588-0000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                     <span className="text-white font-bold w-20 tracking-widest">FAX</span>
                     <span>031-000-0001</span>
                  </div>
                  <div className="flex items-center space-x-4">
                     <span className="text-white font-bold w-20 tracking-widest">E-MAIL</span>
                     <span>protexmove@gmail.com</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-12">
               <div className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">
                  © 2026 PROTEX Special Cargo. ALL RIGHTS RESERVED.
               </div>
            </div>
          </div>

          {/* Right: Quick Inquiry Form (Protex-six Content + TopLogis Style) */}
          <div className="bg-[#222] p-10 rounded-2xl shadow-2xl border border-white/5">
            <h3 className="text-xl font-bold mb-8">
               견적 및 운송문의
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="성함/업체명" 
                  className="bg-[#333] border-none text-white text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all placeholder:text-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="연락처" 
                  className="bg-[#333] border-none text-white text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all placeholder:text-gray-500"
                />
              </div>
              
              <select className="bg-[#333] border-none text-gray-400 text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all appearance-none cursor-pointer">
                <option value="">운송구분 (반도체/의료기기/전산장비 등)</option>
                <option value="semiconductor">반도체 및 디스플레이</option>
                <option value="medical">의료 및 정밀 기기</option>
                <option value="datacenter">전산/데이터센터 이전</option>
                <option value="art">예술품 및 문화재</option>
                <option value="other">기타 특수 화물</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="출발지 (지역)" 
                  className="bg-[#333] border-none text-white text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all placeholder:text-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="목적지 (지역)" 
                  className="bg-[#333] border-none text-white text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all placeholder:text-gray-500"
                />
              </div>

              <textarea 
                rows={3} 
                placeholder="상세 내용을 입력해 주세요."
                className="bg-[#333] border-none text-white text-sm p-4 w-full focus:ring-1 focus:ring-primary-orange outline-none transition-all placeholder:text-gray-500"
              ></textarea>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <label className="flex items-center space-x-3 text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors group self-start sm:self-center">
                  <div className="relative">
                    <input type="checkbox" className="peer hidden" />
                    <div className="w-5 h-5 border-2 border-primary-navy/20 bg-white/5 rounded-md peer-checked:bg-primary-orange peer-checked:border-primary-orange transition-all"></div>
                  </div>
                  <span className="group-hover:text-primary-orange transition-colors">개인정보 수집 및 이용 동의 (필수)</span>
                </label>
                <button className="bg-primary-orange text-white px-12 py-4 font-black hover:bg-accent-orange transition-all rounded-sm text-sm tracking-widest w-full sm:w-auto uppercase">
                   신청하기
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold tracking-widest uppercase">
           <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors text-gray-400">개인정보처리방침</a>
           </div>
           <div className="flex items-center space-x-2">
              <span className="w-1 h-1 rounded-full bg-gray-700"></span>
              <span>Site by Antigravity Digital</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
