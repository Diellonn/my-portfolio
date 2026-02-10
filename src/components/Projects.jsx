import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

export default function Projects({ isDark, data }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const isAlbanian = data?.projectsTitle?.includes("Punët") || data?.projectsTitle?.includes("Projektet");

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  if (!data) return null;

  return (
    <section id="projects" className={`py-24 px-6 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <span className="text-blue-500 text-xl font-mono">01.</span> 
          {data.projectsTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects?.map((project, index) => (
            <div 
              key={index}
              onClick={() => { setSelectedProject(project); setCurrentImg(0); }}
              className={`group cursor-pointer p-8 border rounded-[2rem] transition-all duration-500 shadow-xl relative ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'
              } hover:-translate-y-2`}
            >
              {project.video && (
                <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <PlayCircle size={12} /> VIDEO
                </div>
              )}
              <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                <img src={project.images?.[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-1 bg-blue-500/10 text-blue-400 rounded">{t}</span>
                ))}
              </div>
              <span className="text-blue-500 font-bold text-sm">
                {isAlbanian ? "Shiko Detajet →" : "View Details →"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border flex flex-col lg:flex-row ${
                isDark ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()} 
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-red-500 rounded-full text-white transition-all"
              >
                <X size={24} />
              </button>

              <div className="w-full lg:w-1/2 bg-black aspect-video lg:aspect-auto flex items-center justify-center relative min-h-[300px]">
                <img 
                  src={selectedProject.images[currentImg]} 
                  className="w-full h-full object-contain p-4" 
                  alt="Project"
                />
                {selectedProject.images?.length > 1 && (
                  <div className="absolute inset-x-4 flex justify-between pointer-events-none">
                    <button 
                       onClick={(e) => { e.stopPropagation(); setCurrentImg((currentImg - 1 + selectedProject.images.length) % selectedProject.images.length); }} 
                       className="p-2 bg-black/50 rounded-full text-white pointer-events-auto hover:bg-blue-600 transition-colors"
                    >
                      <ChevronLeft />
                    </button>
                    <button 
                       onClick={(e) => { e.stopPropagation(); setCurrentImg((currentImg + 1) % selectedProject.images.length); }} 
                       className="p-2 bg-black/50 rounded-full text-white pointer-events-auto hover:bg-blue-600 transition-colors"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col">
                <h2 className="text-3xl md:text-4xl font-black mb-6">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-bold">{t}</span>
                  ))}
                </div>

                <p className={`text-base leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {selectedProject.longDesc || selectedProject.desc}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.github || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
                  >
                    <Github size={20} /> {isAlbanian ? "Kodi" : "Source Code"}
                  </a>
                  
                  <a 
                    href={selectedProject.video 
                      ? `/video-demo.html?v=${selectedProject.video.split('/').pop()}&lang=${isAlbanian ? 'sq' : 'en'}` 
                      : (selectedProject.link || "/perpunim.html")} 
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    <ExternalLink size={20} /> 
                    {isAlbanian 
                      ? (selectedProject.video ? "Shiko Videon" : "Demo Live") 
                      : (selectedProject.video ? "Watch Video" : "Live Demo")
                    }
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}