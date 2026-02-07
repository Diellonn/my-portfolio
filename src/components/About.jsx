import React from 'react';
import { DATA } from '../data';

export default function About({ isDark }) {
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
              {/* Replace with your actual photo or an avatar */}
              <img 
                src="/profile.jpg" 
                alt="Dielli" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="w-full md:w-1/2">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              A bit <span className="text-blue-500">about me</span>
            </h2>
            
            <div className={`space-y-6 text-lg leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <p>
                Hello! I'm <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Dielli</span>, 
                a developer who loves building digital products that are as functional as they are beautiful. 
                My journey into tech started with a curiosity for how things work on the internet.
              </p>
              
              <p>
                Today, I focus on creating fast, responsive, and user-centric web applications. 
                I enjoy the challenge of turning complex problems into simple, intuitive designs.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Location</h4>
                  <p className="text-sm">Kosovo, EU</p>
                </div>
                <div>
                  <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Experience</h4>
                  <p className="text-sm">Building since 2023</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}