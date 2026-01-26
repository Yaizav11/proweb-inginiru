
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - Top Left */}
          <div className="flex-shrink-0">
            <a 
              href={`#${SectionId.Hero}`} 
              className="flex items-center transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              <img 
                src="logo.png" 
                alt="ProWeb Inginiru & Consulting" 
                className={`transition-all duration-500 ${scrolled ? 'h-14 md:h-16' : 'h-20 md:h-24'} w-auto object-contain`}
                style={{ 
                  filter: scrolled ? 'none' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' 
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-brand')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-brand flex flex-col items-start leading-none py-2';
                    fallback.innerHTML = `<span class="text-xl font-black text-blue-900 tracking-tighter uppercase">ProWeb</span><span class="text-[7px] font-bold text-slate-500 uppercase tracking-widest">Injiniru & Consulting</span>`;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-300 ${scrolled ? 'text-slate-700 hover:text-blue-900' : 'text-slate-900 hover:text-blue-700'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl flex items-center gap-2.5 hover:bg-blue-800 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-900/20 font-black text-[10px] uppercase tracking-widest"
            >
              <MessageCircle size={16} className="text-green-400" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-blue-900 p-2 transition-transform active:scale-90"
              aria-label="Menú"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pt-2 pb-10 space-y-1 border-t border-slate-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-5 text-sm font-black text-slate-800 hover:text-blue-900 border-b border-slate-50 uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-900 text-white px-6 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-950 transition-all shadow-xl shadow-blue-900/30"
            >
              <MessageCircle size={22} className="text-green-400" />
              <span className="font-black text-base uppercase tracking-widest">Asesoría Directa</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
