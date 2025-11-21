import React from 'react';
import { ServiceSection } from '../constants';

interface ServiceCardProps {
  service: ServiceSection;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-flexiit-dark py-4 px-6 flex items-center gap-3">
        <div className="text-white opacity-80">
            <service.icon size={24} />
        </div>
        <h3 className="text-white font-semibold text-lg md:text-xl tracking-wide">
          {service.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 bg-slate-50 flex-grow">
        <ul className="space-y-3">
          {service.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 bg-flexiit-dark rounded-full flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};