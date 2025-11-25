import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-light tracking-tight text-primary-900 hover:text-accent-teal transition-colors duration-300"
          >
            DA
          </button>

          <button
            className="md:hidden p-2 text-primary-900 hover:text-accent-teal transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['about', 'skills', 'projects', 'contact'][index])}
                className="text-sm font-light text-primary-600 hover:text-accent-teal transition-colors duration-300 tracking-wide relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-teal group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-100 pt-4 space-y-4 animate-fade-in-down">
            {['À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['about', 'skills', 'projects', 'contact'][index])}
                className="block w-full text-left text-base font-light text-primary-600 hover:text-accent-teal transition-colors duration-300 tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
