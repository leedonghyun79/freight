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
    <footer className="bg-[#0f1115] text-white pt-20 pb-12 overflow-hidden relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-orange/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
          {/* Brand & Mission */}
          <div className="lg:w-1/3">
            <div className="mb-8">
              <Image
                src="/images/로고_w.png"
                alt="PROTEX Logo"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 break-keep">
              프로펙스 특수운송은 반도체, 의료기기, 전산장비 등 고가의 정밀 자산을 현지 기술 인력과 실시간 관제 시스템을 통해 <br />가장 안전하게 운송합니다.
            </p>
            <div className="flex space-x-4">
              {/* Other social icons if needed */}
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8 flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-orange mr-3"></span>
                Contact Information
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-primary-orange"><Phone size={18} /></div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Representative Number</div>
                    <div className="text-lg font-black text-white">1833-6362</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-primary-orange"><Mail size={18} /></div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email Support</div>
                    <div className="text-sm font-bold text-gray-300">protexmove@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8 flex items-center">
                <span className="w-2 h-2 rounded-full bg-primary-orange mr-3"></span>
                Business Center
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-primary-orange"><MapPin size={18} /></div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Office Location</div>
                    <div className="text-sm font-bold text-gray-300 leading-relaxed">
                      본사: 경기도 안산시 단원구 시화호수로 835 <br />
                      사업소(고덕): 경기도 평택시 고덕면 1234-5
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-primary-orange"><Building2 size={18} /></div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Registration Details</div>
                    <div className="text-sm font-bold text-gray-300">
                      대표: 김태호 | 사업자번호: 000-00-00000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-primary-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-orange transition-colors">Customer Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <span>© 2026 PROTEX Special Cargo. <br className="md:hidden" /> ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
