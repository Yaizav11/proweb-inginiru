
import React from 'react';
import { SectionId } from '../constants';

const Process: React.FC = () => {
  const steps = [
    { number: "01", title: "Contacto", desc: "Cuéntanos tus necesidades de ingeniería o tecnología vía WhatsApp." },
    { number: "02", title: "Evaluación", desc: "Analizamos tu requerimiento y proponemos la mejor solución técnica." },
    { number: "03", title: "Ejecución", desc: "Manos a la obra con rigor profesional y enfoque comercial." },
    { number: "04", title: "Entrega", desc: "Recibes resultados listos para operar y escalar tu negocio." },
  ];

  return (
    <section id={SectionId.Process} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Nuestro Proceso</h2>
          <p className="text-slate-600">Simplicidad, rigor y eficiencia en cada etapa.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 text-center group">
                <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-100 text-blue-900 flex items-center justify-center text-2xl font-black mb-6 mx-auto group-hover:bg-blue-900 group-hover:text-white group-hover:border-blue-900 transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
