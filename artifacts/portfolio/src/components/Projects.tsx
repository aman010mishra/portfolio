import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Eclipse-Project",
    date: "Sept 2025",
    description: "Appium + TestNG automation framework with Maven for Sauce Labs MyDemoAppRN Android app. Emulator boot automation, driver setup, APK install. Test scripts for app launch, login, UI interactions, validation via XPath and accessibility IDs.",
    tech: ["Java", "Appium", "TestNG", "Maven", "Android Emulator", "UIAutomator2"],
    github: "https://github.com/aman010mishra"
  },
  {
    title: "Mern-chat-app",
    date: "March 2025",
    description: "Real-time chat app with React, Node, Express, MongoDB, Socket.IO. JWT auth, cookies, REST. Tailwind + DaisyUI. Containerized with Jenkins + GitHub Actions CI/CD.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Tailwind", "Docker"],
    github: "https://github.com/aman010mishra"
  },
  {
    title: "Healthcare-Backend-API",
    date: "Feb 2025",
    description: "Secure RESTful API in Node.js + Express for patients, doctors, doctor-patient mappings. JWT auth, PostgreSQL schemas, modular routes/controllers.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "REST", "Postman"],
    github: "https://github.com/aman010mishra"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4">
            <span className="text-cyan-500 font-mono text-sm">04.</span>
            SYSTEM_PROJECTS
          </h2>
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-lg flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 border-t-2 border-t-white/5 hover:border-t-cyan-500/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-xs border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              <p className="font-mono text-xs text-cyan-500/70 mb-4">{project.date}</p>
              
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-violet-400/80 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}