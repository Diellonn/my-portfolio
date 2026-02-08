import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects({ isDark, data }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  if (!data) return null;

  // Slideshow Logic
  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <section id="projects" className={`py-24 px-6 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-16 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <span className="text-blue-500 text-xl font-mono">01.</span> 
          {data.projectsTitle || "Featured Work"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.projects?.map((project, index) => (
            <motion.div 
              key={index} 
              layoutId={`card-${index}`}
              onClick={() => { setSelectedProject(project); setCurrentImg(0); }}
              className={`group cursor-pointer p-8 border rounded-3xl transition-all duration-500 shadow-2xl ${
                isDark ? 'bg-white/5 border-white/10 shadow-black/40' : 'bg-white border-slate-200 shadow-slate-200'
              }`}
            >
              {/* Thumbnail / First Image Preview */}
              {project.images && (
                <div className="mb-6 overflow-hidden rounded-2xl aspect-video">
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
              <p className={`mb-6 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg">{t}</span>
                ))}
              </div>
              <span className="text-blue-500 font-bold text-sm">View Details →</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border ${
                isDark ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-10 p-3 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors">
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT SIDE: SLIDESHOW */}
                <div className="relative aspect-video lg:aspect-square bg-black flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImg}
                      src={selectedProject.images[currentImg]}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                  
                  {selectedProject.images.length > 1 && (
                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                      <button onClick={prevImg} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"><ChevronLeft size={24} /></button>
                      <button onClick={nextImg} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white"><ChevronRight size={24} /></button>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${currentImg === i ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/30'}`} />
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE: INFO */}
                <div className="p-8 md:p-12">
                  <h2 className="text-4xl font-black mb-6">{selectedProject.title}</h2>
                  <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {selectedProject.longDesc || selectedProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-sm font-bold border border-blue-500/20">{t}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                      <Github size={20} /> View Source
                    </a>
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 px-8 py-4 border rounded-2xl font-bold transition-all ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'}`}>
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}