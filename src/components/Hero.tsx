import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";

export default function Hero() {
  const { basics } = resumeData;

  const handleDownload = () => {
    // Generate a simple text blob or trigger print for resume download
    window.print();
  };

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium border rounded-full text-cyan-300 border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 mr-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-4 text-5xl font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b from-white to-slate-400"
        >
          {basics.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-6 text-xl font-medium md:text-2xl text-indigo-300/80"
        >
          {basics.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mb-10 text-base leading-relaxed text-slate-400 md:text-lg"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-slate-400"
        >
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> {basics.location}
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-2" /> {basics.email}
          </span>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" /> {basics.phone}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={handleScrollToExperience}
            className="flex items-center justify-center px-8 py-3 font-medium text-white transition-all rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
          >
            View Experience
            <ArrowDown className="w-4 h-4 ml-2" />
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center px-8 py-3 font-medium transition-all border rounded-full text-slate-300 border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-95"
          >
            Download Resume
            <Download className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
