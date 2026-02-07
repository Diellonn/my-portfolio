import React from 'react';
import { motion } from 'framer-motion';

// 1. Remove the import { DATA } line entirely
// 2. Add 'data' to the props here
export default function Skills({ isDark, data }) {
  
  // 3. Safety Check: If data hasn't loaded, don't crash
  if (!data || !data.skills) return null;

  return (
    <section id='skills' className={`py-24 px-6 transition-colors duration-500 ${
      isDark ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* 4. Use translated title from data */}
        <h2 className={`text-4xl font-bold mb-16 transition-colors ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {data.skillsTitle || "Technical Toolkit"}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {/* 5. Change DATA.skills.map to data.skills.map */}
          {data.skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`px-8 py-4 border rounded-2xl font-bold transition-all cursor-default shadow-sm ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600 shadow-slate-200'
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}