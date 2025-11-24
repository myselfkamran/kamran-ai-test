import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine styles based on scroll OR if menu is open (for visibility)
  const isSolid = isScrolled || isMenuOpen;
  
  const navTextColor = isSolid ? 'text-[#07283B]' : 'text-white';
  const logoMainColor = isSolid ? 'text-[#07283B]' : 'text-white';
  const navBackground = isSolid ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const borderColor = isSolid ? 'border-slate-100' : 'border-white/10';
  const diamondInnerColor = isSolid ? 'bg-white' : 'bg-[#07283B]';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground} ${borderColor} border-b py-4`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#A88659] rounded-sm transform rotate-45 flex items-center justify-center shadow-lg">
             <div className={`w-4 h-4 transform -rotate-45 ${diamondInnerColor}`}></div>
          </div>
          <span className={`text-2xl font-serif tracking-widest uppercase ${logoMainColor}`}>
            Redemptive <span className="text-[#A88659] text-sm align-top font-sans font-medium tracking-normal">Capital</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {['Strategy', 'Structure', 'Criteria', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`${navTextColor} hover:text-[#00A0DF] text-[11px] font-bold tracking-[0.2em] uppercase transition-colors`}>
              {item}
            </a>
          ))}
        </div>

        {/* CTA - Solid Gold Button */}
        <div className="hidden md:block">
           <a 
             href="#contact" 
             className="inline-flex items-center gap-2 px-8 py-3 bg-[#A88659] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#07283B] transition-colors duration-300 shadow-md hover:shadow-xl"
           >
             Investor Access <ArrowRight className="w-3 h-3" />
           </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${navTextColor} hover:text-[#A88659] transition-colors`}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 md:hidden flex flex-col items-center py-12 space-y-8 shadow-2xl h-screen">
          {['Strategy', 'Structure', 'Criteria', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#07283B] hover:text-[#A88659] text-2xl font-serif tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
          <a 
             href="#contact" 
             onClick={() => setIsMenuOpen(false)}
             className="inline-flex items-center gap-2 px-8 py-3 bg-[#A88659] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#07283B] transition-colors duration-300 shadow-md"
           >
             Investor Access <ArrowRight className="w-3 h-3" />
           </a>
        </div>
      )}
    </nav>
  );
};
