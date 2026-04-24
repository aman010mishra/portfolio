import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4">
              <span className="text-cyan-500 font-mono text-sm">01.</span>
              ABOUT_ME
            </h2>
            <div className="w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent mb-8"></div>
          </div>
          
          <div className="md:w-2/3 glass-panel p-8 rounded-lg border-l-2 border-l-cyan-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-violet-500/10 transition-colors duration-500"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 relative z-10">
              I'm a Computer Science student at Lovely Professional University and a Software Developer Intern at Sagar Defence Engineering. My passion lies at the intersection of <span className="text-cyan-300">high-performance backend systems</span> and <span className="text-violet-400">immersive 3D visualizations</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              Whether I'm writing GLSL shaders for physics-based drone simulations, architecting secure RESTful APIs, or setting up automated CI/CD pipelines, I thrive on solving complex technical challenges across the entire stack.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm relative z-10">
              <div className="flex flex-col">
                <span className="text-cyan-500 mb-1">LOCATION</span>
                <span className="text-foreground">Pune, India</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-cyan-500 mb-1">EDUCATION</span>
                <span className="text-foreground">B.Tech CSE, LPU (CGPA: 7.1)</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-cyan-500 mb-1">INTERESTS</span>
                <span className="text-foreground">Shaders, DevOps, Algorithms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}