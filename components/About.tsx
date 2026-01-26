
import React from 'react';
import { SectionId } from '../constants';
import { Briefcase, UserCheck, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6 uppercase tracking-tight">¿Quiénes Somos?</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 leading-relaxed italic font-light">
            "ProWeb Inginiru & Consulting nace de la necesidad de integrar la rigurosidad del análisis técnico de ingeniería con la agilidad de la era digital."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-slate-700 leading-relaxed text-lg">
              Somos un equipo multidisciplinario liderado por profesionales en ingeniería y expertos en tecnología. Nuestro perfil institucional se basa en la excelencia técnica y la transparencia operativa. Nos especializamos en brindar soporte técnico especializado y en la creación de activos digitales de alto rendimiento.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Actuamos bajo principios éticos sólidos, enfocándonos en la calidad de la consultoría y la eficiencia en la ejecución. No somos simplemente una agencia de desarrollo; somos consultores que entienden la estructura técnica y el modelo de negocio de nuestros clientes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <UserCheck className="text-blue-600" size={28} />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">Ética Profesional</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="text-blue-600" size={28} />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">Enfoque Técnico</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/40 p-10 rounded-[2.5rem] border border-blue-100 shadow-inner">
            <h3 className="text-2xl font-black text-blue-900 mb-8 uppercase tracking-wide">Nuestra Filosofía</h3>
            <ul className="space-y-8">
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-lg shadow-lg transition-transform group-hover:scale-110">1</div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg uppercase mb-1">Precisión Técnica</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">Cada solución web o de ingeniería es validada bajo estándares rigurosos y criterios de eficiencia comprobados.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-lg shadow-lg transition-transform group-hover:scale-110">2</div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg uppercase mb-1">Innovación Inteligente</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">Implementamos Inteligencia Artificial para optimizar procesos técnicos y maximizar la captación de clientes cualificados.</p>
                </div>
              </li>
              <li className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-lg shadow-lg transition-transform group-hover:scale-110">3</div>
                <div>
                  <h4 className="font-black text-slate-800 text-lg uppercase mb-1">Resultados Tangibles</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">Nuestra consultoría está orientada a la rentabilidad y al cumplimiento estricto de metas operativas y comerciales.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
