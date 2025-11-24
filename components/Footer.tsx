import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07283B] pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 pr-12">
            <span className="text-2xl font-serif text-white tracking-widest uppercase block mb-8">
                Redemptive <span className="text-[#A88659]">Capital</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                A private investment firm dedicated to preserving capital and generating consistent income through secured real estate debt strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs text-slate-400 font-light uppercase tracking-wide">
                <li><a href="#" className="hover:text-[#00A0DF] transition-colors">Home</a></li>
                <li><a href="#strategy" className="hover:text-[#00A0DF] transition-colors">Strategy</a></li>
                <li><a href="#structure" className="hover:text-[#00A0DF] transition-colors">Structure</a></li>
                <li><a href="#contact" className="hover:text-[#00A0DF] transition-colors">Investor Login</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-8">Contact</h4>
             <ul className="space-y-4 text-sm text-slate-400 font-light">
                <li>116 Calle Manuel Domenech</li>
                <li>San Juan, PR 00918</li>
                <li className="pt-4"><a href="mailto:ir@redemptive.capital" className="text-[#A88659] hover:text-[#00A0DF]">ir@redemptive.capital</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-10 text-[10px] text-slate-500 text-justify leading-relaxed font-light">
            <p className="mb-4">
                This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to purchase interests in any security. Any prospective investor is advised to carefully review all of the private placement memorandum, limited partnership agreement or operating agreement.
            </p>
            <p className="mb-4">
                Past performance is not indicative of future results. Investments in private debt involve a high degree of risk, including the possible loss of principal.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
                <span>&copy; {new Date().getFullYear()} Redemptive Capital. All Rights Reserved.</span>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};