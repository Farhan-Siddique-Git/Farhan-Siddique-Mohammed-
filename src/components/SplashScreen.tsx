import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5s
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // slight delay after reaching 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        {/* Monogram */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center w-24 h-24 mb-8"
        >
          <div
            className="absolute inset-0 border border-cyan-500/30 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          />
          <div className="absolute inset-0 border border-cyan-400/50 rounded-full" />
          <span className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-400">
            FM
          </span>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-64 h-1 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest"
        >
          Initializing Data... {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
}
