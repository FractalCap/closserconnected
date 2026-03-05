import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michelle R.',
      role: 'Directora de Ventas',
      content: 'Closer Connected nos ayudó a encontrar un profesional de ventas altamente capacitado que estuvo listo para rendir desde el primer día. El proceso de incorporación fue fluido.',
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20business%20woman%20portrait%20smiling%20office%20headshot&image_size=square',
    },
    {
      name: 'Carlos M.',
      role: 'CEO, TechStart',
      content: 'Gracias a Closer Connected, hemos construido un equipo de ventas más fuerte. Su compromiso con el desarrollo marca una gran diferencia en los resultados mensuales.',
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20business%20man%20portrait%20smiling%20office%20headshot&image_size=square',
    },
    {
      name: 'Laura G.',
      role: 'VP de Crecimiento',
      content: 'El talento que Closer Connected incorporó a nuestro equipo superó las expectativas. Sus agentes están preparados, seguros y motivados para obtener resultados.',
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20executive%20woman%20portrait%20smiling%20office%20headshot&image_size=square',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-xs mb-3">Testimonios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6 tracking-tight">Lo que dicen las empresas</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            Resultados reales de clientes que confiaron en nuestro proceso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-soft transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-brand-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gray-100 -z-10 transform -scale-x-100" />
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
