import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const certs = [
  "Cloud Computing (NPTEL-IIT Kharagpur, April 2025)",
  "DevOps Engineering: Planning to Production (GFG, August 2024)",
  "Data Structures and Algorithms (Udemy, November 2023)",
  "C++ basic to advance (Udemy, September 2023)"
];

const achievements = [
  "Represented university at AIU national Quiz Competition (Jan 2024)",
  "Won Inter-University Quiz (April 2023)",
  "289 problems on CodeChef, current rating 1100+ (Nov 2023)"
];

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4">
            <span className="text-violet-500 font-mono text-sm">05.</span>
            ACADEMIC_DATA
          </h2>
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <BookOpen className="text-cyan-500" />
              Education
            </h3>
            
            <div className="space-y-8 relative pl-6 border-l border-white/10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-cyan-500 glow-cyan"></div>
                <span className="font-mono text-xs text-cyan-400 mb-1 block">Aug 2022 - Present</span>
                <h4 className="text-lg font-bold">B.Tech Computer Science</h4>
                <p className="text-muted-foreground font-display">Lovely Professional University, Phagwara, Punjab</p>
                <p className="text-sm mt-2 text-violet-300 font-mono">CGPA: 7.1</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/50"></div>
                <span className="font-mono text-xs text-cyan-400 mb-1 block">2020 - 2021</span>
                <h4 className="text-lg font-bold">Intermediate</h4>
                <p className="text-muted-foreground font-display">Bhavans JR College, Secunderabad</p>
                <p className="text-sm mt-2 text-violet-300 font-mono">65%</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/50"></div>
                <span className="font-mono text-xs text-cyan-400 mb-1 block">2018 - 2019</span>
                <h4 className="text-lg font-bold">Matriculation</h4>
                <p className="text-muted-foreground font-display">Bhavans Shri Ramakrishna Vidyalaya, Secunderabad</p>
                <p className="text-sm mt-2 text-violet-300 font-mono">77%</p>
              </motion.div>
            </div>
          </div>
          
          {/* Certs & Achievements */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <Award className="text-violet-500" />
              Certifications & Achievements
            </h3>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-lg border-l-2 border-l-violet-500">
                <h4 className="font-mono text-sm text-violet-400 mb-4 uppercase">Certifications</h4>
                <ul className="space-y-3">
                  {certs.map((cert, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-sm flex items-start gap-2"
                    >
                      <span className="text-violet-500 mt-1">▹</span>
                      <span className="text-muted-foreground">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-panel p-6 rounded-lg border-l-2 border-l-cyan-500">
                <h4 className="font-mono text-sm text-cyan-400 mb-4 uppercase">Achievements</h4>
                <ul className="space-y-3">
                  {achievements.map((ach, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-sm flex items-start gap-2"
                    >
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span className="text-muted-foreground">{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}