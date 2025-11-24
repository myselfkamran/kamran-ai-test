import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Strategy } from './components/Strategy';
import { FundData } from './components/FundData';
import { LoanCriteria } from './components/LoanCriteria';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#07283B]">
      <Navbar />
      <main>
        <Hero />
        <Strategy />
        <FundData />
        <LoanCriteria />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;