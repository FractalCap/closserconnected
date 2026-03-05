import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, ArrowRight } from 'lucide-react';
import { cn } from './utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      alert("Falta configurar VITE_FORMSPREE_ENDPOINT en .env.local");
      return;
    }

    try {
      const payload = {
        formType: "Contacto web - Closer Connected",
        submittedAt: new Date().toISOString(),
        ...formData,
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Formspree submission failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("No pudimos enviar tu mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content & Info */}
          <div className="max-w-xl pt-4">
            <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Contáctanos
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 tracking-tight leading-tight">
              Hablemos de tu <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent">siguiente nivel</span>
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Ya seas un agente buscando crecimiento profesional o una empresa en busca de resultados inmediatos, estamos aquí para conectar contigo.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg mb-1">Correo Electrónico</h4>
                  <p className="text-gray-500 text-sm mb-1">Para consultas generales y soporte</p>
                  <a href="mailto:closerconnected12345@gmail.com" className="text-brand-700 font-semibold hover:text-accent transition-colors">
                    closerconnected12345@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900 text-lg mb-1">Teléfono</h4>
                  <p className="text-gray-500 text-sm mb-1">Atención personalizada</p>
                  <a href="tel:+15856766514" className="text-brand-700 font-semibold hover:text-accent transition-colors">
                    +1 585-676-6514
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-900/5 border border-gray-100 relative overflow-hidden">
             {/* Decorative corner */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-50 to-transparent -z-0 rounded-bl-3xl" />
             
             <div className="relative z-10">
                <h4 className="text-2xl font-bold text-brand-900 mb-2">Envíanos un mensaje</h4>
                <p className="text-gray-500 mb-8 text-sm">Completa el formulario y te responderemos a la brevedad.</p>
                
                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-900 mb-3">¡Mensaje Enviado!</h4>
                    <p className="text-gray-500 mb-8 max-w-xs mx-auto">Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo pronto.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-accent font-semibold hover:text-accent-hover transition-colors flex items-center gap-2 group"
                    >
                      Enviar otro mensaje
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-accent/10 focus:border-accent outline-none transition-all text-brand-900 placeholder-gray-400"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-brand-900 mb-2">Teléfono</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-accent/10 focus:border-accent outline-none transition-all text-brand-900 placeholder-gray-400"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-2">Correo corporativo</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-accent/10 focus:border-accent outline-none transition-all text-brand-900 placeholder-gray-400"
                          placeholder="nombre@empresa.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-brand-900 mb-2">¿Cuál es tu perfil?</label>
                      <div className="relative">
                        <select
                          id="role"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-accent/10 focus:border-accent outline-none transition-all text-brand-900 appearance-none"
                        >
                          <option value="" disabled>Selecciona una opción</option>
                          <option value="agent">Soy Agente de Ventas</option>
                          <option value="company">Soy Empresa / Busco Talento</option>
                          <option value="other">Otro / Consulta General</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <div className="flex items-center h-5">
                        <input 
                          type="checkbox" 
                          required 
                          id="terms" 
                          className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" 
                        />
                      </div>
                      <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
                        He leído y acepto la <a href="#" className="text-accent hover:underline">Política de Privacidad</a>. Acepto recibir comunicaciones de Closer Connected.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-brand-900/10 flex items-center justify-center gap-2 mt-2 group"
                    >
                      <span>Enviar Solicitud</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
