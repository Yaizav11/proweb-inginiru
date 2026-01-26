
import React from 'react';
import { SectionId } from '../constants';
import { CheckCircle2, Zap, Layout, Shield } from 'lucide-react';

const ValueProp: React.FC = () => {
  const benefits = [
    {
      title: "Enfoque Técnico Real",
      desc: "No diseñamos al azar; cada línea de código y cada plan técnico tiene sustento en ingeniería.",
      icon: Shield
    },
    {
      title: "Webs de Conversión",
      desc: "Diseñadas específicamente para que tus clientes den el primer paso por WhatsApp.",
      icon: Layout
    },
    {
      title: "Entrega Veloz",
      desc: "Procesos optimizados para que tu presencia digital esté lista en tiempo récord.",
      icon: Zap
    },
    {
      title: "Atención Directa",
      desc: "Personalización total y respuesta rápida para clientes en Huari, Huaraz, Caraz y todo Áncash. Sin intermediarios, trato directo con ingenieros expertos.",
      icon: CheckCircle2
    }
  ];

  return (
    <section id={SectionId.ValueProp} className="py-24 bg-blue-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Propuesta de Valor</h2>
          <p className="text-blue-200/70 max-w-2xl mx-auto">¿Por qué elegir a ProWeb Inginiru & Consulting?</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
              <benefit.icon className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-blue-100/60 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
