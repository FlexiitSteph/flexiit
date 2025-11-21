
import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="w-full py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between bg-white relative overflow-hidden border-b border-slate-100 md:border-none">
      <div className="flex flex-col z-10 items-center md:items-start text-center md:text-left mb-4 md:mb-0">
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 bg-flexiit-light rounded-lg shadow-sm">
            {/* Simulating the paper plane logo */}
            <Send className="w-8 h-8 text-flexiit-dark transform -rotate-45 translate-x-1" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-bold text-flexiit-dark tracking-wide">
            {COMPANY_INFO.name}
          </h1>
        </div>
        <p className="text-slate-500 font-medium italic md:pl-14">
          {COMPANY_INFO.tagline}
        </p>
      </div>
      
      {/* Contact Button (Visible on all screens, positioned relative to flow) */}
      <div className="z-10 mt-2 md:mt-0">
        <button 
          onClick={onContactClick}
          className="group flex items-center gap-2 bg-flexiit-accent hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <span>Contactez-nous</span>
          <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Decorative curve top right */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-flexiit-light/20 rounded-bl-full -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
    </header>
  );
};
