import React from 'react';
import { Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between bg-white relative overflow-hidden gap-4 md:gap-0">
      <div className="flex flex-col z-10 items-center md:items-start">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 border-2 border-flexiit-light rounded-lg shadow-sm bg-white">
            {/* Paper plane logo oriented top-right */}
            <Send className="w-8 h-8 text-flexiit-dark transform -rotate-45 translate-x-1 -translate-y-0.5" strokeWidth={2} />
          </div>
          <h1 className="text-4xl font-bold tracking-wide flex items-baseline">
            <span className="text-flexiit-dark">FLEXI</span>
            <span className="text-[#5eaae5]">IT</span>
          </h1>
        </div>
        <p className="text-slate-500 font-medium italic md:pl-1 text-center md:text-left text-sm md:text-base">
          {COMPANY_INFO.tagline}
        </p>
      </div>
      
      {/* Decorative curve top right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-flexiit-light/20 rounded-bl-full -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
    </header>
  );
};
