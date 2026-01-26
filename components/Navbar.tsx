
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK, NAV_LINKS, SectionId } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg py-1' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Oficial - Top Left */}
          <div className="flex-shrink-0">
            <a 
              href={`#${SectionId.Hero}`} 
              className="flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="logo.png" 
                alt="ProWeb Inginiru & Consulting" 
                className={`transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-20 md:h-24'} w-auto object-contain`}
                style={{ 
                  filter: scrolled ? 'none' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' 
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 ${scrolled ? 'text-blue-950 hover:text-blue-600' : 'text-slate-900 hover:text-blue-700'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-950 to-blue-600 text-white px-8 py-3 rounded-xl flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 font-black text-xs uppercase tracking-widest"
            >
              <MessageCircle size={18} className="text-green-400" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-blue-600 p-2 transition-transform active:scale-90"
              aria-label="Menú"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu con Glassmorphism */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pt-4 pb-12 space-y-2 border-t border-slate-100/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-6 text-lg font-black text-slate-800 hover:text-blue-600 border-b border-slate-100/50 uppercase tracking-[0.15em]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white px-6 py-6 rounded-2xl flex items-center justify-center gap-4 hover:brightness-110 transition-all shadow-xl shadow-blue-900/40"
            >
              <MessageCircle size={28} className="text-green-400" />
              <span className="font-black text-xl uppercase tracking-wider">Asesoría Directa</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
