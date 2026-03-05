import React from 'react';
import { Users, Target, Briefcase, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo de Talento',
      description: 'Transformamos vendedores en profesionales orientados a resultados mediante programas intensivos de capacitación.',
      icon: Users,
    },
    {
      title: 'Coaching y Mentoría',
      description: 'Acompañamiento personalizado para potenciar habilidades, superar bloqueos y maximizar el rendimiento comercial.',
      icon: Target,
    },
    {
      title: 'Inserción Directa',
      description: 'Conectamos a los mejores talentos con empresas líderes que valoran la preparación y buscan crecimiento inmediato.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-xs mb-3">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight">Soluciones integrales para el <br/> éxito comercial</h3>
          </div>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            No solo capacitamos, gestionamos y conectamos el talento con las empresas que lo necesitan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-brand-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-gray-100 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-white rounded-lg border border-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors duration-300" />
              </div>
              
              <h4 className="text-xl font-bold text-brand-900 mb-4">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
