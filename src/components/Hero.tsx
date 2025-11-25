import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8 flex flex-col justify-center order-2 md:order-1">
            <div className="space-y-4 animate-float-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-primary-900 tracking-tight leading-tight">
                Dalila ADEDJOUMA
              </h1>

              <div className="flex md:justify-start justify-center">
                <div className="h-1.5 bg-gradient-to-r from-accent-teal via-accent-teal-light to-accent-blue w-32"></div>
              </div>
            </div>

            <div className="space-y-6 animate-float-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg md:text-xl font-light text-accent-slate leading-relaxed tracking-wide">
                Étudiante en Science des données
              </p>

              <p className="text-base font-light text-primary-600 leading-relaxed">
                Passionnée par le développement, l'analyse de données et la visualisation, je transforme
                les données en insights clairs et exploitables à travers des solutions intelligentes et
                interactives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-float-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary-900 to-primary-800 text-white text-sm font-light tracking-wide hover:shadow-lg hover:shadow-accent-teal/20 transition-all duration-300 rounded-sm hover:from-accent-teal hover:to-accent-teal-light text-center"
              >
                Découvrir mes projets
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-900 text-primary-900 text-sm font-light tracking-wide hover:bg-primary-900 hover:text-white transition-all duration-300 rounded-sm hover:shadow-lg hover:shadow-primary-900/20 text-center"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-float-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-accent-blue/20 to-accent-teal/20 rounded-3xl blur-2xl -z-10 animate-pulse-subtle"></div>

              <div className="relative bg-white rounded-3xl p-1 border-2 border-accent-teal/50 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-blue/10 pointer-events-none"></div>

                <div className="relative rounded-3xl overflow-hidden aspect-[9/12] bg-gray-200">
                  <img
                    src="/WhatsApp Image 2025-10-26 à 11.30.20_34ba63a5.jpg"
                    alt="Dalila ADEDJOUMA"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-teal/15 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-accent-blue/15 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-teal hover:text-accent-teal-light transition-colors animate-pulse-subtle"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} strokeWidth={2} />
      </button>
    </section>
  );
}
