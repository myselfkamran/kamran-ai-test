import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#07283B] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Text Side */}
          <div className="p-12 md:p-20 md:w-1/2 flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#A88659]/30 m-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Investment <br/> Inquiries</h2>
            <p className="text-slate-300 mb-10 font-light leading-relaxed text-lg">
              We invite accredited investors and institutional partners to review our current offerings. Schedule a call with our Investor Relations team to access our data room.
            </p>
            <div className="space-y-6 text-sm text-slate-300">
               <div className="flex items-center gap-4">
                 <div className="w-1 h-1 bg-[#00A0DF] rounded-full"></div>
                 <span className="uppercase tracking-widest text-[10px] font-bold">Min. Investment: $1,000,000</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-1 h-1 bg-[#00A0DF] rounded-full"></div>
                 <span className="uppercase tracking-widest text-[10px] font-bold">Accredited Investors Only</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 md:p-20 md:w-1/2 border-l border-[#07283B]/10">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#07283B] mb-3">Full Name</label>
                <input type="text" className="w-full bg-[#F8FAFC] border-b border-slate-200 text-[#07283B] px-4 py-4 focus:outline-none focus:border-[#00A0DF] focus:bg-white transition-colors placeholder-slate-300" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#07283B] mb-3">Email Address</label>
                <input type="email" className="w-full bg-[#F8FAFC] border-b border-slate-200 text-[#07283B] px-4 py-4 focus:outline-none focus:border-[#00A0DF] focus:bg-white transition-colors placeholder-slate-300" placeholder="email@company.com" />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="accredited" className="w-4 h-4 rounded border-slate-300 text-[#07283B] focus:ring-[#07283B]" />
                <label htmlFor="accredited" className="text-xs text-slate-500">I confirm I am an accredited investor</label>
              </div>
              <button className="w-full bg-[#A88659] text-white py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-[#07283B] transition-all mt-6 shadow-xl hover:shadow-2xl">
                Request Investor Access
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};