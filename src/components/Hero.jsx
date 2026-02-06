import React, { useState } from 'react'; // Added useState
import { DATA } from '../data';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smooth exit
import { FileText, MapPin, Circle, GraduationCap, Send, Linkedin, Github, X, Instagram } from 'lucide-react';

export default function Hero() {
  // 1. Logic for Modal State
  const [isOpen, setIsOpen] = useState(false);

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
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter">
            Hi, I'm <span className="text-blue-500">{DATA.name}</span>.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed font-light">
            I’m a software engineering student dedicated to building <span className="text-white font-medium">clean, functional code</span> and solving real-world problems.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-5">
            <a 
              href="#projects" 
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-lg"
            >
              View Projects
            </a>
            
            {/* CONTACT BUTTON TRIGGERS MODAL */}
            <button 
              onClick={() => setIsOpen(true)}
              className="px-10 py-5 bg-slate-800 text-white border border-slate-700 rounded-2xl font-bold hover:bg-slate-700 transition-all flex items-center gap-2 active:scale-95 text-lg cursor-pointer"
            >
              Contact Me <Send size={20} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE WIDER PROFILE BOX */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative">
            <div className="relative w-full aspect-square mb-10">
              <div className="absolute -inset-6 bg-blue-500/10 rounded-full blur-3xl"></div>
              <img 
                src="/profile.jpg" 
                alt={DATA.name} 
                className="relative w-full h-full rounded-[2.5rem] object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-10 text-slate-300">
              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-3xl border border-white/5">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                  <MapPin size={22} />
                </div>
                <div className="text-base font-medium">Based in <span className="text-white font-bold text-lg">Kosovo</span></div>
              </div>
              
              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-3xl border border-white/5">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                  <GraduationCap size={22} />
                </div>
                <div className="text-base font-medium">Final Year <span className="text-white font-bold text-lg">CS Student</span></div>
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
              className="w-full py-6 bg-white text-slate-900 rounded-[2rem] font-black text-sm uppercase tracking-[0.25em] hover:bg-blue-50 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
            >
              <FileText size={20} />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>

      {/* 2. THE CONTACT MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden"
            >
              {/* Background Glow inside Modal */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">Let's Talk</h3>
                  <p className="text-slate-400">I'm currently open to new opportunities and collaborations.</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the click from bubbling
                    setIsOpen(false);
                  }}
                  className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white transition-all cursor-pointer z-[110] active:scale-90 group"
                  aria-label="Close"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:diellon.haxhaj.com@gmail.com" 
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-blue-600 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-white/20 group-hover:text-white">
                      <Send size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Email Me</span>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/diellon-haxhaj-31454a3a3/" 
                  target="_blank"
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-[#0077b5] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-white/20 group-hover:text-white">
                      <Linkedin size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">LinkedIn</span>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com//haxhajdiellon_" 
                  target="_blank"
                  className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-[#0077b5] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:bg-white/20 group-hover:text-white">
                      <Instagram size={24} />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Instagram</span>
                  </div>
                </a>
              </div>

              <p className="mt-8 text-center text-slate-500 text-sm">
                Or find me on <a href="#" className="text-white hover:underline">GitHub</a>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}