import React from 'react';
import { MapPin, DollarSign, Clock, Building, CheckCircle } from 'lucide-react';

export const LoanCriteria: React.FC = () => {
  return (
    <section id="criteria" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E2E8F0]/30 -skew-x-12 transform translate-x-32 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Header & Context */}
          <div className="lg:w-1/3 sticky top-32">
             <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[1px] bg-[#A88659]"></div>
                <span className="text-[#A88659] text-xs font-bold tracking-[0.2em] uppercase">Lending Parameters</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-serif text-[#07283B] mb-8 leading-[1.15]">
               Tailored Debt <br/>
               <span className="italic text-[#00A0DF]">Solutions.</span>
             </h2>
             
             <p className="text-slate-600 text-sm leading-relaxed mb-10 font-light">
               We offer flexible, reliable capital for complex situations. Our flat structure allows for rapid decision-making and certainty of execution for our borrowers.
             </p>

             <div className="relative group overflow-hidden rounded-sm shadow-2xl">
                <div className="absolute inset-0 bg-[#07283B]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Architecture Detail" 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#07283B] to-transparent z-20">
                    <div className="flex items-center gap-3 text-white">
                        <CheckCircle className="w-5 h-5 text-[#A88659]" />
                        <span className="font-serif text-lg tracking-wide">Certainty of Close</span>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Column: Staggered Grid of Cards */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-t-4 border-transparent hover:border-[#A88659] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#07283B] transition-colors duration-300">
                    <DollarSign className="w-6 h-6 text-[#07283B] group-hover:text-[#A88659] transition-colors" />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Loan Size</h4>
                <div className="text-3xl font-serif text-[#07283B] mb-3">$750k - $10M</div>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Targeting middle-market assets where our capital can provide meaningful leverage without bureaucratic delays.
                </p>
            </div>

            {/* Card 2 - Offset Top Margin on Desktop */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-t-4 border-transparent hover:border-[#00A0DF] transition-all duration-300 hover:-translate-y-2 group md:mt-12">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#07283B] transition-colors duration-300">
                    <Clock className="w-6 h-6 text-[#07283B] group-hover:text-[#00A0DF] transition-colors" />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Term Length</h4>
                <div className="text-3xl font-serif text-[#07283B] mb-3">12 - 36 Months</div>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Short-term bridge, value-add, and transitional loans designed to support business plan execution.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-t-4 border-transparent hover:border-[#00A0DF] transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#07283B] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#07283B] group-hover:text-[#00A0DF] transition-colors" />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Geography</h4>
                <div className="text-3xl font-serif text-[#07283B] mb-3">Nationwide</div>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Focus on primary MSAs and strong secondary markets with diverse demand drivers and positive demographics.
                </p>
            </div>

            {/* Card 4 - Offset Top Margin on Desktop */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border-t-4 border-transparent hover:border-[#A88659] transition-all duration-300 hover:-translate-y-2 group md:mt-12">
                <div className="w-12 h-12 bg-[#F1F5F9] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#07283B] transition-colors duration-300">
                    <Building className="w-6 h-6 text-[#07283B] group-hover:text-[#A88659] transition-colors" />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Asset Classes</h4>
                <div className="text-3xl font-serif text-[#07283B] mb-3">Commercial</div>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                    Multifamily, Industrial, Self-Storage, Retail, Mixed-Use, and Light Manufacturing facilities.
                </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};