import React from 'react';
// Remove the direct import of { DATA } from '../data' 
// because we are getting it from props now!
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ isDark, data }) {
  // Safe check: if data hasn't arrived yet, show nothing or a loader
  if (!data) return null;

  return (
    <section 
      id="projects" 
      className={`py-24 px-6 transition-colors duration-500 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* SECTION TITLE - Now uses data.projectsTitle */}
        <h2 className={`text-4xl font-bold mb-16 flex items-center gap-4 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          <span className="text-blue-500 text-xl font-mono">01.</span> 
          {data.projectsTitle || "Featured Work"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FIX: Use data.projects instead of DATA.projects */}
          {data.projects?.map((project, index) => (
            <div 
              key={index} 
              className={`group p-10 border rounded-3xl transition-all duration-500 hover:-translate-y-3 shadow-2xl ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/50 shadow-black/40' 
                  : 'bg-white border-slate-200 hover:border-blue-500/50 shadow-slate-200'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl transition-colors ${
                  isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Github size={28} />
                </div>
                <div className="flex gap-5 text-slate-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                {project.title}
              </h3>
              
              <p className={`mb-8 leading-relaxed text-lg font-light ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className={`text-xs font-mono font-bold px-4 py-1.5 rounded-full border transition-all ${
                      isDark 
                        ? 'bg-slate-900 text-blue-300 border-white/5' 
                        : 'bg-blue-50 text-blue-700 border-blue-100'
                    }`}
                  >
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