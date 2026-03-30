"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  PhoneCall, 
  Mail, 
  Smartphone, 
  ChevronRight, 
  CheckCheck 
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    startLoc: "",
    endLoc: "",
    item: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In real app, send email or push to DB here
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
          {/* Left Info Area */}
          <div className="lg:w-5/12 bg-primary-navy p-12 md:p-16 relative overflow-hidden flex flex-col justify-between">
            {/* Visual Background Accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-6 block">
                CONTACT US
              </span>
              <h2 className="text-4xl font-outfit font-black text-white mb-8">
                견적 및 <br />
                운송 문의
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-xs">
                365일 언제든 친절하게 상담해 드립니다. <br />
                세금 계산서 발행 관련 문의도 환영합니다.
              </p>
              
              <div className="space-y-10">
                <div className="group flex items-center space-x-6 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xl">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Office Line</div>
                    <div className="text-white text-xl font-bold tracking-tight">1588-0000</div>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xl">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Direct Mobile</div>
                    <div className="text-white text-xl font-bold tracking-tight">010-8964-8989</div>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Inquiry</div>
                    <div className="text-white text-lg font-bold tracking-tight">protexmove@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/10 mt-20 relative z-10 flex items-center space-x-4">
               <div className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></div>
               <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Available 24/7 Support</span>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-7/12 p-12 md:p-20 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                   key="form"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-primary-navy mb-10">간편 온라인 견적 의뢰</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">성함 / 업체명 *</label>
                        <input 
                           type="text" 
                           required 
                           placeholder="홍길동 (프로텍스)" 
                           className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">연락처 *</label>
                        <input 
                           type="tel" 
                           required 
                           placeholder="010-0000-0000" 
                           className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">상차지 (출발지)</label>
                        <input 
                           type="text" 
                           placeholder="서울특별시 강남구..." 
                           className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold"
                           value={formData.startLoc}
                           onChange={(e) => setFormData({...formData, startLoc: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">하차지 (도착지)</label>
                        <input 
                           type="text" 
                           placeholder="경기도 평택시..." 
                           className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold"
                           value={formData.endLoc}
                           onChange={(e) => setFormData({...formData, endLoc: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">운송 품목 및 수량</label>
                      <input 
                         type="text" 
                         placeholder="반도체 노광장비 1대, 서버랙 4개 등" 
                         className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold"
                         value={formData.item}
                         onChange={(e) => setFormData({...formData, item: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">상세 문의 내용</label>
                      <textarea 
                        rows={3}
                        placeholder="희망 운송 시간, 장비 크기, 특이사항(리프트 사용여부 등)" 
                        className="w-full bg-surface border-b border-gray-200 py-3 focus:outline-none focus:border-primary-orange transition-colors text-primary-navy font-bold resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-gray-500 pt-4">
                      <input type="checkbox" required className="w-4 h-4 rounded text-primary-orange border-gray-300 focus:ring-primary-orange" />
                      <span>개인정보 수집 및 상담 이용에 동의합니다.</span>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-primary-navy text-white py-5 rounded-2xl font-bold flex items-center justify-center group hover:bg-blue-900 transition-all shadow-xl shadow-primary-navy/20"
                    >
                      상담 예약 및 견적 신청하기
                      <ChevronRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                   key="success"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-6">
                    <CheckCheck size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-primary-navy">신청이 완료되었습니다!</h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed">
                    접수해주신 내용은 담당자가 즉시 확인 중입니다. <br />
                    통상 30분 이내로 전문 상담사가 연락을 드립니다.
                  </p>
                  <button 
                     onClick={() => setIsSubmitted(false)}
                     className="text-primary-orange font-bold text-sm tracking-widest border-b-2 border-primary-orange pb-1"
                  >
                     다른 문의 접수하기
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
