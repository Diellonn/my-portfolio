import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isDark, setIsDark, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'en' ? 'Projects' : 'Projektet', href: '#projects' },
    { name: lang === 'en' ? 'Skills' : 'Aftësitë', href: '#skills' },
    { name: lang === 'en' ? 'About' : 'Rreth meje', href: '#about' },
  ];

  // Funksioni për ndërrimin e gjuhës dhe ruajtjen në memorje
  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'sq' : 'en';
    setLang(nextLang);
    localStorage.setItem('preferredLang', nextLang); // KJO ËSHTË E RËNDËSISHME
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[200]">
      <div className={`backdrop-blur-xl border rounded-[2rem] px-6 md:px-8 py-4 flex justify-between items-center shadow-2xl transition-all duration-500 ${
        isDark 
          ? 'bg-white/5 border-white/10 shadow-black/20' 
          : 'bg-white/70 border-slate-200 shadow-slate-200'
      }`}>
        
        {/* LOGO & NAME SECTION */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-500/40 transition-all"></div>
            <img 
              src="/diellonlogo.png" 
              alt="Logo" 
              className="relative w-full h-full object-contain rounded-lg"
            />
          </div>
          <span className={`font-black tracking-[0.2em] text-sm md:text-xl uppercase italic transition-colors duration-500 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <a href="#">Diellon Haxhaj</a>
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-sm tracking-widest uppercase transition-colors ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-blue-600'}`}>
              {link.name}
            </a>
          ))}
        </div>
        

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-2">
          {/* LANGUAGE TOGGLE */}
          <button 
            onClick={toggleLanguage}
            className={`px-3 py-1.5 rounded-xl border font-black text-[10px] tracking-tighter transition-all ${
              isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
            }`}
          >
            {lang === 'en' ? 'SQ' : 'EN'}
          </button>

          {/* DARK MODE TOGGLE */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-3 border rounded-full transition-all cursor-pointer group ${
              isDark 
                ? 'bg-white/5 border-white/10 text-blue-400 hover:bg-white/10' 
                : 'bg-slate-100 border-slate-300 text-indigo-600 hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-3 border rounded-full transition-all ${
              isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
            }`}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`absolute top-24 left-0 right-0 border rounded-[2.5rem] p-6 shadow-2xl md:hidden overflow-hidden ${
              isDark ? 'bg-slate-900/95 border-white/10' : 'bg-white/95 border-slate-200'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)}
                  className={`text-center py-4 rounded-2xl text-lg font-bold tracking-widest uppercase transition-all ${
                    isDark 
                      ? 'text-white hover:bg-white/5' 
                      : 'text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}