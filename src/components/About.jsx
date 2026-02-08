import React from 'react';

// 1. Heqim import { DATA }...
// 2. Shtojmë 'data' te props
export default function About({ isDark, data }) {
  
  // Guard clause që të mos crasht-ojë nëse data nuk është gati
  if (!data) return null;

  return (
    <section id="about" className={`py-24 px-6 transition-colors duration-500 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* IMAGE SIDE */}
          <div className="relative group w-full md:w-1/2 max-w-md">
            <div className={`absolute -inset-4 rounded-[3rem] blur-2xl opacity-20 transition-all group-hover:opacity-40 ${
              isDark ? 'bg-blue-500' : 'bg-blue-400'
            }`}></div>
            
            <div className={`relative aspect-square rounded-[2.5rem] overflow-hidden border-2 transition-colors ${
              isDark ? 'border-white/10 bg-slate-900' : 'border-slate-200 bg-white'
            }`}>
              <img 
                src="/profile.jpg" 
                alt={data.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="w-full md:w-1/2">
            {/* 3. Përdorim data.aboutTitle nga data.js */}
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {data.aboutTitle || "A bit about me"}
            </h2>
            
            <div className={`space-y-6 text-lg leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {/* 4. Përdorim përshkrimin dinamik */}
              <p>
                {data.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {data.projectsTitle === "Punët e Fundit" ? "Vendndodhja" : "Location"}
                  </h4>
                  <p className="text-sm">Kosovo, EU</p>
                </div>
                <div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {data.projectsTitle === "Punët e Fundit" ? "Përvoja" : "Experience"}
                  </h4>
                  <p className="text-sm">
                    {data.projectsTitle === "Punët e Fundit" ? "Duke ndërtuar që nga 2023" : "Building since 2023"}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}