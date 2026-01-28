
import React, { useState } from 'react';
import { WHATSAPP_LINKS, SectionId } from '../constants';
import { MessageCircle, HardHat, Globe, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          {/* Branding */}
          <div className="flex flex-col gap-8">
            <a href={`#${SectionId.Hero}`} className="inline-block transition-transform hover:scale-105 group">
              <div className="flex flex-col leading-none">
                <span className="text-4xl font-black text-blue-950 tracking-tighter uppercase">ProWeb</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mt-1 group-hover:text-blue-600 transition-colors">Injiniru & Consulting</span>
              </div>
            </a>
            <div className="max-w-sm text-slate-600 text-sm leading-relaxed font-bold uppercase tracking-widest opacity-80">
              Consultoría de élite en ingeniería técnica y desarrollo de activos digitales inteligentes. Elevamos el estándar de su presencia empresarial en Áncash.
            </div>
          </div>

          {/* Contacto e Integración Dinámica */}
          <div className="flex flex-col gap-8 w-full md:w-auto min-w-[320px]">
            <span className="text-blue-900 font-black uppercase tracking-[0.3em] text-xs">Vínculo de Negocios</span>
            
            {!showContactOptions ? (
              <button
                onClick={() => setShowContactOptions(true)}
                className="w-full flex items-center gap-8 bg-white border-2 border-slate-200 text-slate-800 px-10 py-8 rounded-[2.5rem] hover:border-blue-600 hover:shadow-[0_25px_50px_rgba(37,99,235,0.15)] transition-all group text-left"
              >
                <div className="p-4 bg-green-50 rounded-3xl group-hover:bg-green-100 transition-colors">
                  <MessageCircle size={44} className="text-green-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Contacto Directo</span>
                  <span className="text-2xl font-black uppercase tracking-tight">WhatsApp Business</span>
                </div>
              </button>
            ) : (
              <div className="flex flex-col gap-4 animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white p-6 rounded-[2.5rem] border-2 border-blue-600 shadow-xl space-y-3">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Seleccione su área de interés</span>
                    <button onClick={() => setShowContactOptions(false)} className="text-slate-400 hover:text-red-500">
                      <X size={20} />
                    </button>
                  </div>
                  
                  <a
                    href={WHATSAPP_LINKS.ENGINEERING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a2b4c] text-white p-6 rounded-2xl flex items-center gap-4 hover:brightness-125 transition-all font-bold uppercase text-xs tracking-wider"
                  >
                    <HardHat size={24} />
                    Servicio de Ingeniería
                  </a>
                  
                  <a
                    href={WHATSAPP_LINKS.WEB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-white p-6 rounded-2xl flex items-center gap-4 hover:brightness-110 transition-all font-bold uppercase text-xs tracking-wider"
                  >
                    <Globe size={24} />
                    Páginas Web Profesionales
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} ProWeb Inginiru & Consulting – Perú. Excelencia Profesional en cada Proyecto.</p>
          <div className="flex gap-12">
            <span className="hover:text-blue-900 transition-colors cursor-default">Infraestructura</span>
            <span className="hover:text-blue-900 transition-colors cursor-default">Estrategia IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
