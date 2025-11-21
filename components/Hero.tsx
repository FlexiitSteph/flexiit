import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="flex-1 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-300 leading-tight">
          Un accompagnement <br/>
          <span className="text-flexiit-dark">sur mesure</span> pour des <br/>
          <span className="text-flexiit-dark">projets</span> <span className="text-flexiit-dark">maîtrisés</span>
        </h2>
      </div>

      {/* Right Content / Visual */}
      <div className="flex-1 relative flex flex-col items-center md:items-end">
        {/* Background shape simulation */}
        <div className="absolute top-0 right-0 w-full h-full bg-flexiit-dark rounded-tl-[100px] rounded-br-[50px] opacity-90 z-0 transform scale-110 md:translate-x-10 -translate-y-10 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                 {/* Abstract charts lines */}
                 <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 80 Q 25 70 50 40 T 100 20" fill="none" stroke="white" strokeWidth="1" />
                    <path d="M0 90 Q 25 80 50 60 T 100 50" fill="none" stroke="white" strokeWidth="1" />
                 </svg>
            </div>
        </div>

        {/* Badge Experience */}
        <div className="relative z-20 bg-white/90 backdrop-blur-sm shadow-xl p-6 rounded-xl max-w-xs text-center md:mr-12 mt-32 md:mt-48 border-b-4 border-flexiit-dark">
            <p className="text-sm font-semibold text-slate-800">
                {COMPANY_INFO.experience}
            </p>
        </div>

        {/* Circular Image (Cereal Field) */}
        <div className="absolute top-0 right-10 md:right-20 w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white bg-yellow-100 overflow-hidden shadow-2xl z-10 flex items-center justify-center">
            <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" 
                alt="Champs de blé - Agriculture"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Compass Icon Overlay */}
        <div className="absolute top-4 right-4 md:right-12 z-10 text-white opacity-80">
            <Compass size={64} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
};