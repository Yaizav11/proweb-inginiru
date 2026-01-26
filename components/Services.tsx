
import React from 'react';
import { SectionId, WHATSAPP_LINK } from '../constants';
import { HardHat, Globe, FileText, BarChart3, Search, Zap, MousePointer2, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id={SectionId.Services} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Áreas de Servicio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Soluciones integrales que combinan soporte técnico profesional con herramientas digitales modernas.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Engineering Services */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-900 rounded-2xl text-white">
                <HardHat size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Ingeniería y Soporte Técnico</h3>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Elaboración de Expedientes", desc: "Apoyo técnico especializado en la conformación de documentación técnica.", icon: FileText },
                { title: "Evaluación de Proyectos", desc: "Análisis técnico de viabilidad y revisión de estándares constructivos.", icon: Search },
                { title: "Apoyo en PIP (Inversión Pública)", desc: "Soporte en la fase de formulación y evaluación de proyectos de inversión.", icon: BarChart3 },
                { title: "Supervisión y Revisión Técnica", desc: "Verificación de cumplimiento de normas y calidad de ejecución.", icon: HardHat },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 p-1 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-100 text-center lg:text-left">
               <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
               >
                 Consultar por Ingeniería <Zap size={18} />
               </a>
            </div>
          </div>

          {/* Tech Services */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-slate-900 rounded-2xl text-white">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Tecnología y Páginas Web</h3>
            </div>
            
            <div className="grid gap-6">
              {[
                { title: "Desarrollo con IA", desc: "Sitios inteligentes con copy comercial optimizado mediante IA.", icon: Zap },
                { title: "Landing Pages Comerciales", desc: "Páginas de aterrizaje diseñadas exclusivamente para convertir visitas en ventas.", icon: MousePointer2 },
                { title: "Optimización para WhatsApp", desc: "Integración directa para contacto inmediato y flujo de ventas ágil.", icon: Smartphone },
                { title: "Diseño Adaptable (Mobile-First)", desc: "Visualización perfecta en celulares, tablets y computadoras.", icon: Smartphone },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 p-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center lg:text-left">
               <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-4 transition-all"
               >
                 Consultar por Web <Zap size={18} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
