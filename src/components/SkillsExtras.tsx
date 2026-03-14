import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Award, BookOpen, Heart, Languages, Lightbulb } from "lucide-react";

export default function SkillsExtras() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Skills & Languages */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Lightbulb className="mr-3 text-cyan-400" /> Key Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills[0].items.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 font-medium shadow-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Languages className="mr-3 text-indigo-400" /> Languages
            </h2>
            <div className="flex gap-4">
              {resumeData.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-300"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2" />
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Certs, Awards, Extras */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <BookOpen className="mr-3 text-emerald-400" /> Certifications
            </h2>
            <ul className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:bg-slate-800/40 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 shrink-0" />
                  <span className="text-slate-300">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Award className="mr-3 text-yellow-400" /> Awards & Achievements
            </h2>
            <ul className="space-y-4">
              {resumeData.awards.map((award, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-slate-900/40 border border-slate-800/50 rounded-2xl hover:bg-slate-800/40 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 shrink-0" />
                  <span className="text-slate-300">{award}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center">
              <Heart className="mr-3 text-rose-400" /> Extra-Curriculars
            </h2>
            <div className="space-y-4">
              {resumeData.extra.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-slate-900/40 border border-slate-800/50 rounded-2xl"
                >
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <div className="text-sm text-slate-500 font-mono mb-3">
                    {item.dates}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
