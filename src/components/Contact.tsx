import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white via-primary-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-primary-900 tracking-tight mb-6">
            Contact
          </h2>
          <div className="divider-accent mx-auto mb-8"></div>
          <p className="text-base text-primary-600 font-light leading-relaxed max-w-2xl mx-auto">
            Je suis disponible pour échanger, partager mon expertise et explorer de nouvelles
            opportunités dans le développement et l'analyse de données.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:dalilaadedjouma2005@gmail.com"
            className="group p-8 bg-white border-2 border-primary-100 hover:border-accent-teal shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent-teal/10 border-2 border-accent-teal/30 group-hover:border-accent-teal transition-all duration-300 rounded-sm">
                <Mail size={20} strokeWidth={1.5} className="text-accent-teal" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs uppercase tracking-widest text-primary-600 mb-2 font-light">Email</h3>
                <p className="text-base text-primary-900 font-light break-all group-hover:text-accent-teal transition-colors duration-300">
                  dalilaadedjouma2005@gmail.com
                </p>
              </div>
            </div>
          </a>

          <a
            href="tel:8732557383"
            className="group p-8 bg-white border-2 border-primary-100 hover:border-accent-blue shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent-blue/10 border-2 border-accent-blue/30 group-hover:border-accent-blue transition-all duration-300 rounded-sm">
                <Phone size={20} strokeWidth={1.5} className="text-accent-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs uppercase tracking-widest text-primary-600 mb-2 font-light">Téléphone</h3>
                <p className="text-base text-primary-900 font-light group-hover:text-accent-blue transition-colors duration-300">873 255 7383</p>
              </div>
            </div>
          </a>
        </div>

        <div className="border-t-2 border-primary-200 pt-12">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-xl font-light text-primary-900 mb-4 tracking-wide">
                Ouvert aux opportunités
              </h3>
              <p className="text-sm text-primary-600 font-light max-w-xl mx-auto leading-relaxed">
                Stages, collaborations ou projets freelance dans le domaine de la data science et du
                développement web
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="mailto:dalilaadedjouma2005@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-accent-teal to-accent-teal-light text-white text-sm font-light tracking-wide hover:shadow-lg hover:shadow-accent-teal/30 transition-all duration-300 rounded-sm inline-flex items-center gap-2"
              >
                <Send size={16} strokeWidth={2} />
                Envoyer un message
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t-2 border-primary-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-primary-600 font-light tracking-widest">
              © 2025 Dalila ADEDJOUMA. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-accent-teal transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-accent-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
