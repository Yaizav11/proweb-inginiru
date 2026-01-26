
import React from 'react';
import { MessageCircle, ShieldCheck, Cpu } from 'lucide-react';
import { WHATSAPP_LINK, SectionId } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.Hero} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-80" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-200/40 rounded-full blur-3xl -ml-20 -mb-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 px-4 py-1.5 rounded-full text-blue-900 font-bold text-xs uppercase tracking-widest shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Ingeniería + Desarrollo Web IA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 leading-[1.1]">
              Ingeniería que <span className="text-blue-600 underline decoration-blue-200">respalda</span>,<br />
              tecnología que <span className="text-slate-600 italic">vende</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              En ProWeb Inginiru & Consulting fusionamos el rigor técnico de la ingeniería con el poder del desarrollo web inteligente para transformar proyectos en resultados tangibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-800 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/30 font-bold text-lg"
              >
                <MessageCircle size={24} />
                Asesoría Gratuita
              </a>
              <div className="flex items-center justify-center gap-6 px-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-blue-900 font-black text-xl">+100</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Proyectos</span>
                </div>
                <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-blue-900 font-black text-xl">100%</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Eficacia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-4 transform rotate-1 hover:rotate-0 transition-transform duration-700 overflow-hidden border border-slate-100">
               <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Consultoría de Ingeniería y Tecnología"
                className="rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
               />
               <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-[200px] border border-blue-50 animate-bounce-slow">
                  <ShieldCheck className="text-blue-600 mb-2" size={32} />
                  <p className="text-sm font-bold text-blue-950">Seguridad Técnica</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">Calidad Certificada</p>
               </div>
               <div className="absolute top-10 -right-6 bg-blue-900 p-6 rounded-2xl shadow-2xl max-w-[200px] text-white">
                  <Cpu className="text-blue-400 mb-2" size={32} />
                  <p className="text-sm font-bold">IA Aplicada</p>
                  <p className="text-[10px] text-blue-100/70 uppercase tracking-wide">Conversión Máxima</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
