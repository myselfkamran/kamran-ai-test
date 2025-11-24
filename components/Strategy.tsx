import React from 'react';
import { Target, Shield, Briefcase, TrendingUp } from 'lucide-react';

const Card: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-10 border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(7,40,59,0.05)] hover:shadow-[0_20px_40px_-4px_rgba(7,40,59,0.1)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-0 bg-[#00A0DF] group-hover:h-full transition-all duration-500"></div>
    <div className="mb-8 text-[#A88659] group-hover:text-[#07283B] transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-serif text-[#07283B] mb-4">{title}</h3>
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-end mb-24">
          <div>
             <h4 className="text-[#00A0DF] text-xs font-bold tracking-[0.25em] uppercase mb-6">Our Thesis</h4>
             <h2 className="text-5xl md:text-6xl font-serif text-[#07283B] mb-8 leading-[1.1]">
               Sophisticated <br/> <span className="italic text-slate-400">Debt Structures.</span>
             </h2>
             <div className="h-[1px] w-24 bg-[#A88659]"></div>
          </div>
          <div>
            <p className="text-slate-600 text-lg leading-relaxed font-light mb-8">
              Spectra Capital focuses on niche private commercial real estate credit opportunities. We leverage deep expertise in underwriting to secure first-position mortgages that offer attractive risk-adjusted returns.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            icon={<Target className="w-8 h-8 stroke-1"/>}
            title="Aligned Interests"
            desc="We require significant sponsor equity to ensure borrower alignment through every stage of the lifecycle."
          />
          <Card 
            icon={<Shield className="w-8 h-8 stroke-1"/>}
            title="Downside Protection"
            desc="Strict first-lien security positions and conservative loan-to-value ratios protect capital."
          />
          <Card 
            icon={<TrendingUp className="w-8 h-8 stroke-1"/>}
            title="Reliable Income"
            desc="Strategies designed to produce stable, predictable distributions for our limited partners."
          />
          <Card 
            icon={<Briefcase className="w-8 h-8 stroke-1"/>}
            title="Financial Prudence"
            desc="A philosophy of low leverage utilization and conservative liability management."
          />
        </div>
      </div>
    </section>
  );
};