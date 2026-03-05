import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from './utils';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Con qué tipo de empresas trabajan?',
      answer: 'Trabajamos con empresas que buscan profesionales de ventas de alto rendimiento listos para ofrecer resultados inmediatos, desde startups en crecimiento hasta corporaciones establecidas.',
    },
    {
      question: '¿Solo capacitan a agentes de ventas?',
      answer: 'No, no solo capacitamos. Gestionamos, guiamos y también conectamos directamente el talento certificado con empresas que lo necesitan.',
    },
    {
      question: '¿Cuánto tiempo tarda el proceso de colocación?',
      answer: 'El tiempo varía según la empresa y la preparación del agente, pero priorizamos colocaciones rápidas y efectivas, a menudo en cuestión de semanas.',
    },
    {
      question: '¿Puedo agendar una consulta aunque no sepa en qué encajo?',
      answer: '¡Claro que sí! Te guiaremos en el proceso y te ayudaremos a encontrar el mejor camino según tus habilidades y objetivos.',
    },
    {
      question: '¿Qué hace diferente a Closer Connected?',
      answer: 'No solo reclutamos; también gestionamos, guiamos y aseguramos desarrollo e integración continua, garantizando resultados a largo plazo.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-accent font-semibold tracking-wide uppercase text-xs mb-3">Preguntas Frecuentes</h2>
            <h3 className="text-3xl font-bold text-brand-900 mb-6 tracking-tight">Resolvemos tus dudas</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              ¿No encuentras la respuesta que buscas? Contáctanos directamente y te ayudaremos.
            </p>
            <a href="#contact" className="text-accent font-semibold text-sm hover:underline">
              Ir a contacto &rarr;
            </a>
          </div>

          <div className="md:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors duration-200"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={cn(
                    "font-medium text-base transition-colors duration-200",
                    openIndex === index ? "text-accent" : "text-brand-900 group-hover:text-brand-700"
                  )}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600 shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "px-6 transition-all duration-300 ease-in-out overflow-hidden",
                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
