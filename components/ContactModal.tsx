
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Modal Header */}
        <div className="bg-flexiit-dark px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Send size={20} />
            Contactez-nous
          </h3>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Nom complet
            </label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-flexiit-accent focus:border-flexiit-accent outline-none transition-all"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-flexiit-accent focus:border-flexiit-accent outline-none transition-all"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea 
              id="message" 
              rows={4}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-flexiit-accent focus:border-flexiit-accent outline-none transition-all resize-none"
              placeholder="Comment pouvons-nous vous aider ?"
            ></textarea>
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full bg-flexiit-dark hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Envoyer le message
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
