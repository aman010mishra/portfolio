import React from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from './Scene';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <HeroScene />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-cyan-500 glow-cyan"></div>
            <span className="font-mono text-cyan-400 tracking-widest text-sm uppercase">System Initialization Complete</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-4"
          >
            AMAN MISHRA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl font-light text-muted-foreground mb-8 max-w-2xl"
          >
            Full-Stack + 3D Web + DevOps. <br/>
            <span className="text-cyan-300 glow-cyan-text font-medium">Building drone simulators with shaders.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#projects" className="px-8 py-3 bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-mono text-sm uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all duration-300 glow-cyan">
              View Logs // Projects
            </a>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/aman010mishra" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 text-muted-foreground hover:text-white hover:border-cyan-500 hover:glow-cyan transition-all duration-300 rounded-sm glass-panel">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mishra-aman-" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 text-muted-foreground hover:text-white hover:border-cyan-500 hover:glow-cyan transition-all duration-300 rounded-sm glass-panel">
                <Linkedin size={20} />
              </a>
              <a href="mailto:amanmishra9704@gmail.com" className="p-3 border border-white/10 text-muted-foreground hover:text-white hover:border-cyan-500 hover:glow-cyan transition-all duration-300 rounded-sm glass-panel">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-cyan-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}