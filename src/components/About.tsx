import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white via-accent-teal-pale to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-primary-900 tracking-tight mb-6">
            Parcours
          </h2>
          <div className="divider-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white rounded-sm border-2 border-accent-teal/30 group-hover:border-accent-teal transition-all duration-300 shadow-sm">
                  <GraduationCap size={20} strokeWidth={1.5} className="text-accent-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-primary-900 mb-4 tracking-wide">
                    Formation académique
                  </h3>
                  <div className="space-y-5">
                    <div className="space-y-1.5 p-4 bg-white rounded-sm border border-primary-100 hover:border-accent-teal/50 transition-colors">
                      <p className="font-light text-accent-teal text-sm">2024 - Présent</p>
                      <p className="text-sm font-light text-primary-900">Science des données</p>
                      <p className="text-xs text-primary-600">
                        Université du Québec à Trois-Rivières
                      </p>
                    </div>
                    <div className="space-y-1.5 p-4 bg-white rounded-sm border border-primary-100 hover:border-accent-teal/50 transition-colors">
                      <p className="font-light text-accent-teal text-sm">2023 - 2024</p>
                      <p className="text-sm font-light text-primary-900">Licence 1 en Informatique Réseaux et Télécommunication</p>
                      <p className="text-xs text-primary-600">ESGIS Bénin</p>
                    </div>
                    <div className="space-y-1.5 p-4 bg-white rounded-sm border border-primary-100 hover:border-accent-teal/50 transition-colors">
                      <p className="font-light text-accent-teal text-sm">2022</p>
                      <p className="text-sm font-light text-primary-900">Baccalauréat</p>
                      <p className="text-xs text-primary-600">
                        Complexe Scolaire Catholique Père Planque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white rounded-sm border-2 border-accent-blue/30 group-hover:border-accent-blue transition-all duration-300 shadow-sm">
                  <BookOpen size={20} strokeWidth={1.5} className="text-accent-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-primary-900 mb-4 tracking-wide">
                    Approche et vision
                  </h3>
                  <div className="card-subtle hover:shadow-lg transition-all duration-300 border-2 border-primary-100 hover:border-accent-blue/50">
                    <p className="text-sm font-light text-primary-700 leading-relaxed">
                      Mon parcours m'a permis de développer une forte capacité d'analyse, un sens de la
                      logique appliqué aux données et une maîtrise des outils et langages modernes du
                      développement et de la data science.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-white rounded-sm border-2 border-accent-teal/30 group-hover:border-accent-teal transition-all duration-300 shadow-sm">
                  <Sparkles size={20} strokeWidth={1.5} className="text-accent-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-primary-900 mb-4 tracking-wide">
                    Objectifs professionnels
                  </h3>
                  <div className="card-subtle hover:shadow-lg transition-all duration-300 border-2 border-primary-100 hover:border-accent-teal/50">
                    <p className="text-sm font-light text-primary-700 leading-relaxed">
                      Je suis motivée pour travailler sur des projets qui combinent développement,
                      analyse et visualisation de données. Je cherche à contribuer à des solutions qui
                      apportent une réelle valeur ajoutée et je suis ouverte à stages, collaborations ou
                      projets freelance dans le domaine de la data science et du développement web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
