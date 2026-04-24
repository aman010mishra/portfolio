import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 dark">
      <AudioPlayer />

      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 glass-panel border-x-0 border-t-0 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
          <span className="text-cyan-500">AM</span>
          <span className="text-white/50">///</span>
          <span className="text-sm font-mono text-cyan-500/50">SYS_ONLINE</span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm font-mono text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Aman Mishra. Built with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
