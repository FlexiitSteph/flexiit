
import React from 'react';
import { Mail, Linkedin, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface ContactSectionProps {
  onContactClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onContactClick }) => {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 mt-16 mb-12">
      
      {/* CTA Label / Button */}
      <div className="absolute -top-5 left-8 md:left-12 z-10">
        <button 
          onClick={onContactClick}
          className="bg-flexiit-dark text-white px-6 py-2 rounded-t-lg font-semibold text-lg shadow-md hover:bg-blue-800 transition-colors flex items-center gap-2 group"
        >
          <span>Parlons-en</span>
          <MessageSquare size={18} className="group-hover:animate-bounce" />
        </button>
      </div>

      {/* Blue Bar */}
      <div className="bg-flexiit-light rounded-xl shadow-lg px-6 py-10 md:py-8 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4 border border-blue-200">
        
        {/* Email */}
        <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="bg-flexiit-dark p-2 rounded-full text-white shadow-sm">
                <Mail size={20} />
            </div>
            <span className="font-semibold text-flexiit-dark text-lg break-all md:break-normal">{COMPANY_INFO.email}</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
        >
            <div className="bg-flexiit-dark p-2 rounded-full text-white shadow-sm">
                <Linkedin size={20} />
            </div>
            <span className="font-semibold text-flexiit-dark text-lg underline decoration-flexiit-dark underline-offset-4">
                {COMPANY_INFO.linkedin}
            </span>
        </a>

        {/* Phone */}
        <a href={`tel:${COMPANY_INFO.phone.replace(/\./g, '')}`} className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="bg-flexiit-dark p-2 rounded-full text-white shadow-sm">
                <Phone size={20} />
            </div>
            <span className="font-semibold text-flexiit-dark text-lg">{COMPANY_INFO.phone}</span>
        </a>

      </div>
    </section>
  );
};
