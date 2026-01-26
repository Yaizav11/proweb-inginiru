
import React from 'react';
import { WHATSAPP_LINK, SectionId } from '../constants';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Logo and Branding Consistency */}
          <div className="flex flex-col gap-6">
            <a href={`#${SectionId.Hero}`} className="inline-block transition-transform hover:scale-105">
              <img 
                src="logo.png" 
                alt="ProWeb Inginiru & Consulting Logo" 
                className="h-32 w-auto object-contain brightness-95 hover:brightness-100 transition-all"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </a>
            <div className="max-w-sm text-slate-600 text-sm leading-relaxed font-medium uppercase tracking-wider">
              Consultoría de élite en ingeniería técnica y desarrollo de activos digitales inteligentes. Elevamos el estándar de su presencia empresarial.
            </div>
          </div>

          {/* Contact Integration */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <span className="text-blue-900 font-black uppercase tracking-[0.25em] text-[10px]">Vínculo de Negocios</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-white border border-slate-200 text-slate-800 px-8 py-6 rounded-[2rem] hover:border-blue-600 hover:shadow-2xl transition-all group"
            >
              <div className="p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                <MessageCircle size={36} className="text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Escríbenos</span>
                <span className="text-xl font-black uppercase">WhatsApp Business</span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-10 border-t border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em]">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} ProWeb Inginiru & Consulting – Perú. Excelencia Profesional en cada Proyecto.</p>
          <div className="flex gap-10">
            <span className="hover:text-blue-900 transition-colors cursor-default">Infraestructura</span>
            <span className="hover:text-blue-900 transition-colors cursor-default">Desarrollo IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
