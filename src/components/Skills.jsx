import { DATA } from '../data';

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Technical Toolkit</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {DATA.skills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 font-medium hover:border-blue-500 hover:text-white transition-all cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}