
import React from 'react';
import { WHATSAPP_LINK, SectionId } from '../constants';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">
          {/* Logo and About Section */}
          <div className="flex flex-col gap-6">
            <a href={`#${SectionId.Hero}`} className="inline-block transition-transform hover:scale-105">
              <img 
                src="logo.png" 
                alt="ProWeb Inginiru & Consulting Logo" 
                className="h-24 md:h-28 w-auto object-contain brightness-95 hover:brightness-100 transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </a>
            <div className="max-w-sm text-slate-600 text-xs leading-relaxed font-medium uppercase tracking-wider">
              Consultoría de élite en ingeniería técnica y desarrollo de ecosistemas digitales inteligentes. Elevamos la presencia de su marca con rigor profesional.
            </div>
          </div>

          {/* Contact & Support Section */}
          <div className="flex flex-col gap-5 w-full md:w-auto">
            <span className="text-blue-900 font-black uppercase tracking-[0.3em] text-[10px]">Vínculo de Negocios</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-white border border-slate-200 text-slate-800 px-7 py-5 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all group"
            >
              <div className="p-2.5 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors">
                <MessageCircle size={30} className="text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Consulta Gratuita</span>
                <span className="text-lg font-black uppercase tracking-tight">WhatsApp Business</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-200 text-slate-400 text-[9px] font-black uppercase tracking-[0.25em]">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} ProWeb Inginiru & Consulting – Perú. Excelencia en Ingeniería y Desarrollo.</p>
          <div className="flex gap-8">
            <span className="hover:text-blue-900 transition-colors cursor-default">Soporte Técnico</span>
            <span className="hover:text-blue-900 transition-colors cursor-default">Soluciones IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
