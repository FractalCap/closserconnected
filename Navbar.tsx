import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from './utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Cómo Funciona', href: '#process' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            scrolled ? "bg-brand-50 text-brand-900" : "bg-white/10 text-white backdrop-blur-sm"
          )}>
            <Rocket className="h-5 w-5" />
          </div>
          <span className={cn("text-lg font-bold tracking-tight", scrolled ? "text-brand-900" : "text-white")}>
            Closer Connected
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-gray-600" : "text-gray-200"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md",
              scrolled 
                ? "bg-brand-900 text-white hover:bg-brand-800" 
                : "bg-white text-brand-900 hover:bg-gray-100"
            )}
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-gray-800" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-gray-800" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-brand-900 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4 pb-2">
              <a
                href="#contact"
                className="block w-full text-center bg-brand-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
