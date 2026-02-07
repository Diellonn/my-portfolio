import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, GraduationCap, FileText, Circle, X, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

// REMOVED: import { DATA } from '../data';
// ADDED: { data } to the props
export default function Hero({ isDark, data }) {
  const [isOpen, setIsOpen] = useState(false);

  // Guard to prevent white screen
  if (!data || !data.socials) return null;

  const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: THE HOOK */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Hi, I'm <span className="text-blue-500">{data.name}</span>.
          </h1>
          <p className={`mt-8 text-xl md:text-2xl max-w-xl leading-relaxed font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {data.description}
          </p>
          
          <div className="mt-12 flex flex-wrap gap-5">
            <a href="#projects" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-lg">
              {data.projectsTitle || "View Projects"}
            </a>
            <button 
              onClick={() => setIsOpen(true)}
              className={`px-10 py-5 border rounded-2xl font-bold transition-all flex items-center gap-2 active:scale-95 text-lg cursor-pointer ${
                isDark ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {data.contactTitle || "Contact Me"} <Send size={20} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: PROFILE BOX */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className={`w-full max-w-md backdrop-blur-3xl border rounded-[3rem] p-10 shadow-2xl relative transition-all duration-500 ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-slate-200 shadow-slate-200'
          }`}>
            <div className="relative w-full aspect-square mb-10">
              <div className="absolute -inset-6 bg-blue-500/10 rounded-full blur-3xl"></div>
              <img 
                src="/profile.jpg" 
                alt={data.name} 
                className="relative w-full h-full rounded-[2.5rem] object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-10 text-slate-300">
              <div className={`flex items-center gap-5 p-5 rounded-3xl border ${isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400"><MapPin size={22} /></div>
                <div className="text-base font-medium">Based in <span className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold text-lg`}>Kosovo</span></div>
              </div>
              
              <div className={`flex items-center gap-5 p-5 rounded-3xl border ${isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400"><GraduationCap size={22} /></div>
                <div className="text-base font-medium">Final Year <span className={`${isDark ? 'text-white' : 'text-slate-900'} font-bold text-lg`}>CS Student</span></div>
              </div>

              <div className="flex items-center justify-center pt-2">
                <div className="flex items-center gap-3 bg-green-500/10 px-5 py-2 rounded-full border border-green-500/20">
                   <Circle size={10} className="fill-green-500 text-green-500 animate-pulse" />
                   <span className="text-green-400 text-xs font-black uppercase tracking-[0.2em]">Active Now</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleDownload}
              className={`w-full py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.25em] transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 ${
                isDark ? 'bg-white text-slate-900 hover:bg-blue-50' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <FileText size={20} /> Download CV
            </button>
          </div>
        </motion.div>
      </div>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`relative w-full max-w-lg border rounded-[2.5rem] p-10 shadow-2xl ${
                isDark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
              }`}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-bold mb-2">{data.contactTitle || "Let's Connect"}</h3>
              <p className="text-slate-400 mb-8 font-light">Choose your preferred way to reach out.</p>
              
              <div className="space-y-4">
                <a href={`mailto:${data.socials.email}`} className="flex items-center gap-4 p-5 bg-blue-600 rounded-2xl text-white hover:bg-blue-700 transition-all font-bold group">
                  <div className="p-2 bg-white/20 rounded-xl group-hover:scale-110 transition-transform"><Send size={20} /></div>
                  Send an Email
                </a>
                
                <div className="grid grid-cols-2 gap-4">
                  <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 p-5 rounded-2xl border font-bold transition-all ${
                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'
                  }`}>
                    <Linkedin size={20} className="text-blue-400" /> LinkedIn
                  </a>
                  <a href={data.socials.github} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 p-5 rounded-2xl border font-bold transition-all ${
                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'
                  }`}>
                    <Github size={20} /> GitHub
                  </a>
                  <a href={data.socials.instagram} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 p-5 rounded-2xl border font-bold transition-all ${
                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'
                  }`}>
                    <Instagram size={20} className='text-red-500' /> Instagram
                  </a>
                  <a href={data.socials.facebook} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-3 p-5 rounded-2xl border font-bold transition-all ${
                    isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'
                  }`}>
                    <Facebook size={20} className='text-blue-400' /> Facebook
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