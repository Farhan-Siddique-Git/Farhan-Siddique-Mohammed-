import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Trophy, TrendingUp, Target, Zap, BarChart } from "lucide-react";

const icons = [TrendingUp, Target, Zap, BarChart, Trophy];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 max-w-6xl mx-auto relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center">
          <Trophy className="mr-3 text-yellow-400" /> Key Achievements
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 hover:from-cyan-500/50 hover:to-indigo-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl rounded-2xl z-0" />

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:from-cyan-300 group-hover:to-indigo-300 transition-all">
                    {achievement.metric}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors mt-auto">
                  {achievement.context}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
