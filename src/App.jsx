import React, { useState, useEffect } from 'react';
import { DATA } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');

  const currentData = { ...DATA.common, ...DATA[lang] };

  // Sync the body background so there is no white/dark "gap" when scrolling
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#020617' : '#f8fafc';
  }, [isDark]);

  return (
    // Only one wrapper needed here
    <div className={`${isDark ? 'dark bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 selection:bg-blue-500/30`}>
      
      <Navbar isDark={isDark} setIsDark={setIsDark}
      lang={lang} 
        setLang={setLang} />
      
      <main>
        <Hero isDark={isDark} data={currentData}/>
        <About isDark={isDark} data={currentData}/>
        <Projects isDark={isDark} data={currentData}/>
        <Skills isDark={isDark} data={currentData}/>
        <Contact isDark={isDark} data={currentData}/>
      </main>

      <footer className={`py-12 text-center transition-colors duration-500 border-t ${
        isDark 
          ? 'bg-slate-950 text-slate-500 border-slate-800' 
          : 'bg-slate-50 text-slate-600 border-slate-200'
      }`}>
        <p className="font-medium tracking-wide">
          © {new Date().getFullYear()} — Built with passion by 
          <span className={`ml-1 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {DATA.name}
          </span>
        </p>
      </footer>
    </div>
  );
}