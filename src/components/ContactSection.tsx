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
    <section id="contact" className="py-24 bg-[#f8f9fa] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[750px] border border-gray-100">
          {/* Left Info Area */}
          <div className="lg:w-5/12 bg-primary-navy p-12 md:p-20 relative overflow-hidden flex flex-col justify-between text-white">
            {/* Visual Background Accent */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="text-primary-orange font-bold text-sm tracking-widest uppercase mb-6 block">
                CONTACT US
              </span>
              <h2 className="text-4xl lg:text-5xl font-outfit font-black mb-8 leading-tight tracking-tight">
                고객 맞춤 <br />
                <span className="text-primary-orange">운송 솔루션</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-12 max-w-xs font-medium">
                365일 24시간 실시간 관제 시스템 가동. <br />
                지금 바로 전문가와 상담하세요.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xl">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Company Representative</div>
                    <div className="text-white text-xl font-bold tracking-tight group-hover:text-primary-orange transition-colors">1588-0000</div>
                  </div>
                </div>

                <div className="group flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Inquiry</div>
                    <div className="text-white text-lg font-bold tracking-tight group-hover:text-primary-orange transition-colors">protex@protex.pro.kr</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Business Details (Enhanced Density) */}
            <div className="relative z-10 pt-12 border-t border-white/10 mt-12 grid grid-cols-1 gap-6">
               <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Office Address</span>
                    <span className="text-xs text-gray-300 leading-relaxed font-medium">경기도 평택시 고덕동 1234-5 프로젝트 타워 801호</span>
                  </div>
                  <div className="flex justify-between items-center pr-12">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Business No.</span>
                        <span className="text-xs text-gray-300 font-medium">123-45-67890</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">CEO</span>
                        <span className="text-xs text-gray-300 font-medium">홍길동</span>
                     </div>
                  </div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-primary-orange animate-pulse"></div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Available 24/7 National Wide Support</span>
               </div>
            </div>
          </div>

          {/* Right Form Area */}
          <div className="lg:w-7/12 p-12 md:p-20 relative bg-white">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                   key="form"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-12">
                    <h3 className="text-3xl font-black text-primary-navy mb-3">익스프레스 견적 신청</h3>
                    <p className="text-gray-400 text-sm font-medium">필수 정보(*)를 입력하시면 30분 이내에 답변 드립니다.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2 group">
                        <label className="text-xs font-black text-primary-navy flex items-center">
                          성함 / 업체명 <span className="text-primary-orange ml-1">*</span>
                        </label>
                        <input 
                           type="text" 
                           required 
                           autoComplete="off"
                           placeholder="담당자명 또는 회사명을 입력하세요" 
                           className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold placeholder:text-gray-300 placeholder:font-normal"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-xs font-black text-primary-navy flex items-center">
                          연락처 <span className="text-primary-orange ml-1">*</span>
                        </label>
                        <input 
                           type="tel" 
                           required 
                           placeholder="010-0000-0000" 
                           className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold placeholder:text-gray-300 placeholder:font-normal"
                           value={formData.phone}
                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-primary-navy">상차지 (출발지)</label>
                        <input 
                           type="text" 
                           placeholder="지역명 또는 상세주소" 
                           className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold placeholder:text-gray-300 placeholder:font-normal"
                           value={formData.startLoc}
                           onChange={(e) => setFormData({...formData, startLoc: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-primary-navy">하차지 (도착지)</label>
                        <input 
                           type="text" 
                           placeholder="지역명 또는 상세주소" 
                           className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold placeholder:text-gray-300 placeholder:font-normal"
                           value={formData.endLoc}
                           onChange={(e) => setFormData({...formData, endLoc: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary-navy">운송 품목 및 수량</label>
                      <input 
                         type="text" 
                         placeholder="배송 화물의 상세 정보 (예: 서버랙 2개, 반도체 장비 2대 등)" 
                         className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold placeholder:text-gray-300 placeholder:font-normal"
                         value={formData.item}
                         onChange={(e) => setFormData({...formData, item: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary-navy">상세 문의 내용</label>
                      <textarea 
                        rows={2}
                        placeholder="기타 요청사항이나 특이사항을 적어주세요." 
                        className="w-full bg-gray-50 border-b-2 border-gray-100 py-4 px-1 focus:outline-none focus:border-primary-orange transition-all text-primary-navy font-bold resize-none placeholder:text-gray-300 placeholder:font-normal"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative">
                          <input type="checkbox" required className="peer sr-only" />
                          <div className="w-5 h-5 border-2 border-gray-200 rounded-md bg-white peer-checked:bg-primary-orange peer-checked:border-primary-orange transition-all flex items-center justify-center">
                            <CheckCheck size={14} className="text-white scale-0 peer-checked:scale-100 transition-transform" />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-500 group-hover:text-primary-navy transition-colors">개인정보 수집 및 이용 동의</span>
                        <button type="button" className="text-[11px] font-bold text-gray-300 border-b border-gray-200 hover:text-primary-orange hover:border-primary-orange transition-all ml-2">전문보기</button>
                      </label>

                      <button 
                        type="submit" 
                        className="px-10 py-5 bg-primary-navy text-white rounded-2xl font-black flex items-center justify-center group hover:bg-black transition-all shadow-xl shadow-primary-navy/20"
                      >
                        신청하기
                        <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                   key="success"
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-primary-navy mb-6">
                    <CheckCheck size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-primary-navy">문의가 접수되었습니다!</h3>
                  <p className="text-gray-400 font-medium max-w-sm leading-relaxed">
                    접수해주신 내용은 담당자가 즉시 확인 중입니다. <br />
                    빠른 시간 내에 전문 상담사가 연락을 드립니다.
                  </p>
                  <button 
                     onClick={() => setIsSubmitted(false)}
                     className="px-8 py-3 bg-gray-100 text-gray-500 font-black rounded-xl hover:bg-gray-200 transition-colors"
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
