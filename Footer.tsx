import React from 'react';
import { Rocket, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10 border-t border-brand-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-6 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Closer Connected</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Transformando vendedores en profesionales y conectando talento de élite con empresas líderes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Desarrollo de Talento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Coaching Ejecutivo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Reclutamiento</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Consultoría de Ventas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Compañía</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">Términos y Condiciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4 font-light">Recibe las últimas novedades y consejos de ventas.</p>
            <form className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="Tu email" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent w-full"
                />
                <button type="submit" className="bg-accent hover:bg-accent-hover text-white px-3 py-2 rounded-lg transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Closer Connected. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
