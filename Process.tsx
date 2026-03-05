import React from 'react';
import { Search, GraduationCap, Handshake } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Estrategia y Selección',
      description: 'Analizamos las necesidades específicas y seleccionamos perfiles con alto potencial.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Formación Intensiva',
      description: 'Capacitamos y certificamos a los candidatos en técnicas de cierre y ventas modernas.',
      icon: GraduationCap,
    },
    {
      number: '03',
      title: 'Conexión y Éxito',
      description: 'Vinculamos el talento preparado con tu empresa y damos seguimiento al rendimiento.',
      icon: Handshake,
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-xs mb-3">Cómo Funciona</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 tracking-tight">Nuestro Proceso Estratégico</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            Un sistema probado que garantiza calidad y resultados desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative bg-brand-50 pt-8 md:pt-0">
              <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto md:mx-0 z-10">
                <span className="font-bold text-accent text-xl">{step.number}</span>
              </div>
              
              <div className="md:pr-8 text-center md:text-left">
                <h4 className="text-xl font-bold text-brand-900 mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
