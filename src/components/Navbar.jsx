import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-white tracking-tighter">PORTFOLIO.</span>
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/diellon-haxhaj-31454a3a3/" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          <a href="diellon.haxhaj.com@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </nav>
  );
}