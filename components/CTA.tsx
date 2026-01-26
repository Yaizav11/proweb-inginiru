
import React from 'react';
import ActionButton from './ActionButton';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-600/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">¿Listo para elevar el estándar de tu proyecto?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
              Solicita hoy mismo una asesoría personalizada. Sea ingeniería o desarrollo web, tenemos la solución que necesitas.
            </p>
            
            <div className="flex justify-center">
              <ActionButton 
                label="Hablar con un Consultor" 
                className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
              />
            </div>
            
            <p className="mt-8 text-blue-200 text-sm font-medium">Respuesta rápida y personalizada por WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
