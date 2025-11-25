import { Code2, Database, BarChart3, Layout } from 'lucide-react';

interface SkillCategory {
  icon: typeof Code2;
  title: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      icon: Layout,
      title: 'Développement Web & Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design']
    },
    {
      icon: Code2,
      title: 'Data Science & Analyse',
      skills: [
        'Python (pandas, numpy)',
        'matplotlib, seaborn',
        'Statistiques descriptives',
        'Machine Learning'
      ]
    },
    {
      icon: BarChart3,
      title: 'Visualisation & BI',
      skills: ['Excel avancé', 'Power BI', 'Dashboards interactifs', 'Storytelling avec données']
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: [
        'SQL (MySQL, PostgreSQL)',
        'NoSQL (MongoDB)',
        'Modélisation de données',
        'Requêtes complexes'
      ]
    }
  ];

  const tools = [
    'Git/GitHub',
    'VS Code',
    'Vercel',
    'Gestion Agile',
    'Nettoyage de données',
    'Optimisation UX/UI'
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-primary-900 tracking-tight mb-6">
            Compétences
          </h2>
          <div className="divider-accent mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = [
              { icon: 'text-accent-teal', border: 'border-accent-teal/30 hover:border-accent-teal' },
              { icon: 'text-accent-blue', border: 'border-accent-blue/30 hover:border-accent-blue' },
              { icon: 'text-accent-teal', border: 'border-accent-teal/30 hover:border-accent-teal' },
              { icon: 'text-accent-blue', border: 'border-accent-blue/30 hover:border-accent-blue' }
            ];
            const color = colors[index];
            return (
              <div
                key={index}
                className="group p-8 bg-white border-2 border-primary-100 hover:border-accent-teal/50 transition-all duration-300 shadow-sm hover:shadow-lg rounded-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-white border-2 ${color.border} transition-all duration-300 rounded-sm`}>
                    <Icon size={20} strokeWidth={1.5} className={color.icon} />
                  </div>
                  <h3 className="text-lg font-light text-primary-900 tracking-wide group-hover:text-accent-teal transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-primary-700 font-light flex items-center gap-3 group/item"
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-accent-teal to-accent-blue rounded-full group-hover/item:shadow-lg transition-all duration-300"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t-2 border-primary-200 pt-12">
          <h3 className="text-xl font-light text-primary-900 text-center mb-8 tracking-wide">
            Outils & Compétences complémentaires
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 text-xs font-light text-primary-700 bg-white border-2 border-primary-200 hover:border-accent-teal hover:shadow-md hover:shadow-accent-teal/10 transition-all duration-300 tracking-wide rounded-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
