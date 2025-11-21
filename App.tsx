
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { SERVICES, COMPANY_INFO } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Header Section */}
      <Header onContactClick={openModal} />

      <main className="flex-grow flex flex-col items-center w-full">
        
        {/* Hero Banner */}
        <Hero />

        {/* Services Grid */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {SERVICES.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>

        {/* Contact Section */}
        <ContactSection onContactClick={openModal} />

      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-50 py-6 text-center border-t border-slate-200 mt-auto">
        <div className="container mx-auto px-4">
            <p className="text-slate-500 text-sm">
                {COMPANY_INFO.legal}
            </p>
            <p className="text-slate-400 text-xs mt-2">
                © {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.
            </p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
