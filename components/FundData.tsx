import React from 'react';
import { FUND_METRICS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const FundData: React.FC = () => {
  return (
    <section id="structure" className="py-32 bg-[#F9FAFB] border-y border-slate-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif text-[#07283B] mb-6">The Structure</h2>
                <p className="text-slate-600 text-lg font-light leading-relaxed">
                    Institutional-grade transparency designed for liquidity and alignment.
                </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-[#07283B] hover:text-[#00A0DF] text-xs font-bold uppercase tracking-widest transition-colors mt-6 md:mt-0 pb-1 border-b border-[#07283B]/20 hover:border-[#00A0DF]">
                Request Offering Docs <ArrowRight className="w-3 h-3" />
            </a>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
          {FUND_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col justify-center p-12 bg-white hover:bg-[#07283B] group transition-colors duration-500">
              <span className="text-slate-400 group-hover:text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 h-8 transition-colors">{metric.label}</span>
              <span className="text-4xl lg:text-5xl font-serif text-[#07283B] group-hover:text-white transition-colors">{metric.value}</span>
              <div className="w-0 group-hover:w-full h-[2px] bg-[#A88659] mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                 * Returns are net of fees. Past performance does not guarantee future results.
             </p>
             <a href="#contact" className="md:hidden text-[#A88659] text-xs font-bold uppercase tracking-widest">
                 View Full Performance
             </a>
        </div>
      </div>
    </section>
  );
};