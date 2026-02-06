import { DATA } from './data'; // <--- Add this line
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>© {new Date().getFullYear()} — Built by {DATA.name}</p>
      </footer>
    </div>
  );
}