import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Sagar Defence Engineering",
    location: "Pune",
    period: "March 2026 – Present",
    description: "Built a real-time drone simulation system with physics-based movement and 3D visualization. Designed and integrated GLSL shaders for rendering quality, lighting, and realism.",
    tech: ["React", "Three.js", "Cannon.js", "Node.js", "MySQL", "GLSL Shaders"],
    active: true
  },
  {
    role: "Web Development Intern",
    company: "Learn Fusion",
    location: "Lucknow",
    period: "September 2024",
    description: "Built and optimized responsive websites with interactive features. Led debugging, performance tuning, and API optimization.",
    tech: ["HTML", "CSS", "MERN Stack"],
    active: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4">
            <span className="text-cyan-500 font-mono text-sm">03.</span>
            EXPERIENCE_LOG
          </h2>
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 top-6 bg-background z-10 ${
                  exp.active ? 'border-cyan-500 glow-cyan' : 'border-muted-foreground'
                }`}>
                  {exp.active && (
                    <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                <div className="md:w-1/2 flex flex-col">
                  {/* Content card */}
                  <div className={`glass-panel p-6 rounded-lg relative group ${
                    idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:text-right'
                  } ${exp.active ? 'border-l-2 border-l-cyan-500 md:border-l-0 md:border-r-2 md:border-r-cyan-500' : ''}`}>
                    
                    {/* Connecting line to timeline for desktop */}
                    <div className={`hidden md:block absolute top-8 w-12 h-[1px] bg-white/10 ${
                      idx % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                    }`}></div>

                    <div className="mb-2">
                      <span className="font-mono text-xs text-cyan-400 mb-2 block">{exp.period}</span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                      <div className="text-lg text-muted-foreground font-display">
                        {exp.company} <span className="text-sm opacity-60 font-sans">— {exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className={`mt-6 flex flex-wrap gap-2 ${idx % 2 !== 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono text-cyan-400/80 bg-cyan-500/10 border border-cyan-500/20 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}