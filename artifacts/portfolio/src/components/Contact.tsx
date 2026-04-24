import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-cyan-500 tracking-widest block mb-4">06. WHAT'S_NEXT</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Initialize Connection</h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, 
            my inbox is always open. Let's build something immersive together.
          </p>
          
          <a 
            href="mailto:amanmishra9704@gmail.com" 
            className="inline-block px-10 py-4 bg-cyan-500/10 border-2 border-cyan-500 text-cyan-400 font-mono text-sm uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all duration-300 glow-cyan rounded-sm mb-16"
          >
            Transmit Message
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-panel p-6 flex flex-col items-center justify-center gap-3 rounded-lg hover:border-cyan-500/50 transition-colors">
              <Mail className="text-cyan-500" />
              <a href="mailto:amanmishra9704@gmail.com" className="text-sm hover:text-cyan-400 transition-colors">amanmishra9704@gmail.com</a>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center gap-3 rounded-lg hover:border-violet-500/50 transition-colors">
              <Phone className="text-violet-500" />
              <a href="tel:+919704091163" className="text-sm hover:text-violet-400 transition-colors">+91-9704091163</a>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center gap-3 rounded-lg hover:border-cyan-500/50 transition-colors">
              <MapPin className="text-cyan-500" />
              <span className="text-sm">Pune, India</span>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center gap-6">
            <a href="https://github.com/aman010mishra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors hover:glow-cyan-text">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mishra-aman-" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cyan-400 transition-colors hover:glow-cyan-text">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}