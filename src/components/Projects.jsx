import { DATA } from '../data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-500 text-xl font-mono">01.</span> Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DATA.projects.map((project, index) => (
            <div key={index} className="group p-8 bg-slate-800/40 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Github size={24} />
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-slate-900 text-blue-300 px-3 py-1 rounded-full border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}