
import React from 'react';
import { MessageCircle, ShieldCheck, Cpu } from 'lucide-react';
import { WHATSAPP_LINK, SectionId } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.Hero} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 opacity-90" />
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-400/10 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/50 px-5 py-2 rounded-full text-blue-950 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Ingeniería + Desarrollo Web IA
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
              INGENIERÍA QUE <br />
              <span className="text-blue-500 inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transform hover:scale-105 transition-transform duration-300">RESPALDA</span>. <br />
              TECNOLOGÍA QUE <br />
              <span className="text-blue-500 inline-block drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transform hover:scale-105 transition-transform duration-300">GENERA CLIENTES</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed opacity-90">
              Fusionamos el rigor técnico con desarrollo web inteligente para transformar proyectos en resultados reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-950 to-blue-600 text-white px-12 py-6 rounded-2xl flex items-center justify-center gap-4 hover:brightness-110 transition-all transform hover:scale-105 hover:rotate-1 shadow-[0_20px_40px_rgba(30,58,138,0.3)] font-black text-xl uppercase tracking-wider"
              >
                <MessageCircle size={28} />
                Asesoría Gratuita
              </a>
              
              <div className="flex items-center justify-center gap-8 px-8 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl shadow-slate-200/50">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-blue-950 font-black text-2xl tracking-tighter">+100</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Proyectos</span>
                </div>
                <div className="w-px h-10 bg-slate-300/50 hidden sm:block"></div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-blue-950 font-black text-2xl tracking-tighter">100%</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Eficacia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element con Glassmorphism */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-[3rem] p-5 border border-white/30 shadow-2xl overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Consultoría de Ingeniería y Tecnología"
                className="rounded-[2.5rem] w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
               />
               
               {/* Tarjetas Flotantes Glassmorphism */}
               <div className="absolute bottom-10 -left-6 bg-white/80 backdrop-blur-xl p-7 rounded-3xl shadow-2xl max-w-[220px] border border-white/60 animate-float">
                  <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg">
                    <ShieldCheck size={28} />
                  </div>
                  <p className="text-base font-black text-blue-950 uppercase tracking-tighter leading-tight">Seguridad Técnica</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Calidad Certificada</p>
               </div>
               
               <div className="absolute top-10 -right-4 bg-blue-950/90 backdrop-blur-xl p-7 rounded-3xl shadow-2xl max-w-[220px] text-white border border-blue-400/30 animate-float-delayed">
                  <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-500/40">
                    <Cpu size={28} />
                  </div>
                  <p className="text-base font-black uppercase tracking-tighter leading-tight">IA Aplicada</p>
                  <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mt-1">Conversión Máxima</p>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(15px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
