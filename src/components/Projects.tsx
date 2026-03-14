import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Code2, Database, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
          <Code2 className="mr-3 text-indigo-400" /> Academic Projects &
          Training
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 backdrop-blur-sm transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10 group-hover:bg-indigo-500/20 transition-colors" />

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center"
                >
                  <Terminal className="w-3 h-3 mr-1" />
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3">
              {project.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start text-slate-300 leading-relaxed"
                >
                  <Database className="w-4 h-4 mr-3 mt-1 text-slate-500 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
