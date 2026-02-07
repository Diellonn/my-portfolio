import React from 'react';

// 1. We REMOVED: import { DATA } from '../data';
// 2. We ADDED: data to the props
export default function Contact({ isDark, data }) { 
  
  // 3. Safety Guard: If App.jsx hasn't passed data yet, don't crash
  if (!data || !data.socials) return null;

  return (
    <section className={`py-24 px-6 transition-colors duration-500 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className={`max-w-3xl mx-auto text-center border rounded-[3rem] p-16 transition-all duration-500 ${
        isDark 
          ? 'border-blue-500/20 bg-blue-500/5 shadow-2xl shadow-blue-900/10' 
          : 'border-blue-200 bg-white shadow-xl shadow-blue-100'
      }`}>
        
        {/* Title now uses the translated version from data */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {data.contactTitle || "Let's Work Together"}
        </h2>

        <p className={`mb-10 text-lg leading-relaxed ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>

        {/* 4. Changed DATA.contact.email to data.socials.email */}
        <a 
          href={`mailto:${data.socials.email}`} 
          className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}