import React from 'react';
import { motion } from 'framer-motion';
import { SiCplusplus, SiJavascript, SiHtml5, SiCss, SiReact, SiExpress, SiNodedotjs, SiMongodb, SiMysql, SiDocker, SiJenkins, SiTerraform, SiGit, SiGithub } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Three.js", icon: null, color: "#ffffff", isText: true },
      { name: "Cannon.js", icon: null, color: "#ffffff", isText: true },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Nagios", icon: null, color: "#ffffff", isText: true }
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-4">
            <span className="text-violet-500 font-mono text-sm">02.</span>
            SKILLS_MATRIX
          </h2>
          <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel p-6 rounded-lg border-t-2 border-t-white/10 hover:border-t-violet-500/50 transition-colors duration-300"
            >
              <h3 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2 px-3 py-2 bg-background/50 border border-white/5 rounded-md hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 group cursor-default"
                  >
                    {skill.icon ? (
                      <skill.icon className="text-muted-foreground group-hover:text-white transition-colors" style={{ '--hover-color': skill.color } as any} />
                    ) : (
                      <div className="w-4 h-4 rounded-sm border border-muted-foreground group-hover:border-white transition-colors flex items-center justify-center">
                        <div className="w-1 h-1 bg-muted-foreground group-hover:bg-white rounded-full transition-colors"></div>
                      </div>
                    )}
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}