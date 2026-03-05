import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-brand-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20business%20person%20working%20on%20laptop%20in%20modern%20glass%20corporate%20office%20with%20city%20view%20blue%20tones%20high%20quality%204k&image_size=landscape_16_9"
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Enterprise Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-900/80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        
        {/* Subtle animated blobs for depth */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pt-20">
        <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-10 fade-in duration-700">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-100 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
            </span>
            Talento certificado de alto rendimiento
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 drop-shadow-2xl text-white">
            Conecta con talento <br/>
            <span className="text-white drop-shadow-md">élite en ventas</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
            Especialistas en formar y conectar agentes de ventas listos para generar resultados inmediatos en tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 min-w-[200px] justify-center"
            >
              Comenzar Ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-full text-base font-semibold transition-all min-w-[200px] flex justify-center hover:border-white/20"
            >
              Cómo Funciona
            </a>
          </div>

          <div className="border-t border-white/10 pt-10 backdrop-blur-sm bg-white/5 rounded-2xl p-8 mt-8 border border-white/5">
            <p className="text-sm text-gray-400 font-medium mb-6 uppercase tracking-wider">Confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos, using text for minimal look if images aren't available */}
               <span className="text-xl font-bold text-white tracking-tight">TechFlow</span>
               <span className="text-xl font-bold text-white tracking-tight">GlobalScale</span>
               <span className="text-xl font-bold text-white tracking-tight">VentureCorp</span>
               <span className="text-xl font-bold text-white tracking-tight">SalesPro</span>
               <span className="text-xl font-bold text-white tracking-tight">GrowthX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
