import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background with abstract overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Structure" 
          className="w-full h-full object-cover grayscale brightness-[0.6]"
        />
        {/* Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07283B]/90 via-[#07283B]/60 to-[#07283B]/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-10 inline-block">
          <span className="py-2 px-6 border border-[#A88659]/50 text-[#A88659] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase bg-[#07283B]/50 backdrop-blur-md rounded-sm">
            Private Credit & Real Estate Debt
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[1.05] mb-8 tracking-tight">
          Strategic <br />
          <span className="text-white font-light italic relative">
            Capital
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00A0DF] opacity-40"></span>
          </span>
        </h1>

        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed antialiased">
          We employ a credit-intensive, loss-avoidance philosophy that strives for consistent performance and the rigorous preservation of capital.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#strategy" className="min-w-[220px] px-8 py-5 bg-[#A88659] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#96764d] transition-all duration-300 shadow-2xl shadow-black/20">
            Our Strategy
          </a>
          <a href="#contact" className="min-w-[220px] px-8 py-5 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#07283B] transition-all duration-300">
            Request Access
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};