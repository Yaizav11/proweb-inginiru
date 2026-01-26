
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SectionId } from '../constants';
import ActionButton from './ActionButton';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-xl py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo en Texto */}
          <div className="flex-shrink-0">
            <a 
              href={`#${SectionId.Hero}`} 
              className="flex flex-col leading-none transition-all duration-300 hover:scale-105 active:scale-95 group"
              onClick={() => setIsOpen(false)}
            >
              <span className={`font-black uppercase tracking-tighter transition-all duration-500 ${scrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} text-blue-950`}>
                ProWeb
              </span>
              <span className={`font-bold uppercase tracking-[0.3em] transition-all duration-500 ${scrolled ? 'text-[7px] md:text-[8px]' : 'text-[9px] md:text-[10px]'} text-slate-500 mt-0.5 group-hover:text-blue-600`}>
                Injiniru & Consulting
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-12 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 ${scrolled ? 'text-blue-950 hover:text-blue-600' : 'text-slate-900 hover:text-blue-700 hover:drop-shadow-sm'}`}
              >
                {link.name}
              </a>
            ))}
            <ActionButton 
              label="Contactar" 
              className="bg-gradient-to-r from-blue-950 to-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10"
            />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-blue-600 p-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/50 shadow-lg transition-transform active:scale-90"
              aria-label="Menú"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="px-8 pt-6 pb-16 space-y-3 border-t border-slate-100/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-6 text-xl font-black text-slate-800 hover:text-blue-600 border-b border-slate-100/50 uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-10 flex flex-col items-center">
            <ActionButton 
              label="Asesoría Directa" 
              isFullWidth={true}
              className="w-full bg-gradient-to-r from-blue-950 to-blue-600 text-white px-8 py-6 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl shadow-blue-900/40"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
