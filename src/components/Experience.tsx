import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resume";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-5xl mx-auto relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center">
          <Briefcase className="mr-3 text-cyan-400" /> Professional Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
      </motion.div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:pl-8 space-y-8">
        {resumeData.experience.map((exp, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[41px] top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 z-10" />

              <div
                className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                  ${
                    isExpanded
                      ? "bg-slate-900/80 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                      : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"
                  } backdrop-blur-md`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-6 md:p-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-indigo-300 mb-2">
                      {exp.company}
                    </div>
                    <div className="text-sm text-slate-500 font-mono">
                      {exp.dates}
                    </div>
                  </div>
                  <div className="text-slate-500">
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 border-t border-slate-800/50 pt-6">
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet, i) => {
                            // Highlight numbers and percentages
                            const highlightedBullet = bullet.replace(
                              /(\d+%|\d+[KMB]?\+?|~\d+%?)/g,
                              '<span class="text-cyan-300 font-semibold bg-cyan-500/10 px-1 rounded">$1</span>',
                            );

                            return (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start text-slate-300 leading-relaxed"
                              >
                                <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: highlightedBullet,
                                  }}
                                />
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
