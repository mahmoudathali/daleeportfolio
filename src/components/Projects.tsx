import { ExternalLink, ShoppingBag, LineChart, CloudRain } from 'lucide-react';

interface Project {
  icon: typeof ShoppingBag;
  title: string;
  description: string;
  tech: string[];
  url: string;
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      icon: ShoppingBag,
      title: 'Boutique en ligne',
      description:
        'Application e-commerce complète avec interface responsive et navigation fluide, démontrant une maîtrise du développement frontend moderne.',
      tech: ['React', 'JavaScript', 'UX Design'],
      url: 'https://boutiquepro.vercel.app',
      highlights: ['Interface responsive', 'Navigation fluide', 'Expérience utilisateur optimale']
    },
    {
      icon: LineChart,
      title: 'Dashboard interactif d\'analyse de données',
      description:
        'Tableau de bord permettant d\'uploader des fichiers CSV, visualiser des statistiques, générer des graphiques dynamiques et accéder à un module de prédiction intégré.',
      tech: ['Python', 'React', 'Data Science', 'Machine Learning'],
      url: 'https://daleechart-canvas.vercel.app',
      highlights: [
        'Upload CSV',
        'Statistiques en temps réel',
        'Graphiques dynamiques',
        'Module de prédiction'
      ]
    },
    {
      icon: CloudRain,
      title: 'Visualiseur de tendances météo',
      description:
        'Application interactive pour explorer les tendances météo d\'une ville avec graphiques dynamiques et statistiques clés, illustrant le sens de la visualisation de données.',
      tech: ['React', 'API Integration', 'Data Visualization'],
      url: 'https://daleeweather-insights-hub.vercel.app',
      highlights: [
        'Graphiques dynamiques',
        'Statistiques clés',
        'Interface ergonomique',
        'Données en temps réel'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-primary-50 via-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-primary-900 tracking-tight mb-6">
            Projets
          </h2>
          <div className="divider-accent mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const iconColors = [
              { bg: 'bg-accent-teal/10', icon: 'text-accent-teal', border: 'border-accent-teal/30' },
              { bg: 'bg-accent-blue/10', icon: 'text-accent-blue', border: 'border-accent-blue/30' },
              { bg: 'bg-accent-teal/10', icon: 'text-accent-teal', border: 'border-accent-teal/30' }
            ];
            const colors = iconColors[index];
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary-100 hover:border-accent-teal/50 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-lg rounded-sm"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-sm border-2 ${colors.border} transition-all duration-300 ${colors.bg}`}>
                      <Icon size={24} strokeWidth={1.5} className={colors.icon} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-light text-primary-900 tracking-wide group-hover:text-accent-teal transition-colors duration-300">
                          {project.title}
                        </h3>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-accent-teal hover:text-accent-teal-light font-light transition-all group-hover:gap-3 duration-300 hover:shadow-md hover:shadow-accent-teal/20 px-3 py-1.5"
                        >
                          Voir le projet
                          <ExternalLink size={16} strokeWidth={2} />
                        </a>
                      </div>

                      <p className="text-sm text-primary-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-primary-600 font-light mb-3">
                          Points clés
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-primary-700">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-accent-teal to-accent-blue rounded-full"></span>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs font-light text-primary-700 bg-white border-2 border-primary-200 hover:border-accent-teal hover:shadow-sm hover:shadow-accent-teal/10 transition-all duration-300 rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-primary-600 font-light">
            Tous les projets sont déployés et accessibles en ligne pour démonstration
          </p>
        </div>
      </div>
    </section>
  );
}
