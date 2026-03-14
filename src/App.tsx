/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import SkillsExtras from "./components/SkillsExtras";
import Navbar from "./components/Navbar";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        ) : (
          <main
            key="main"
            className="relative z-10 flex flex-col min-h-screen pb-32"
          >
            <Navbar />
            <Hero />
            <Experience />
            <Achievements />
            <Projects />
            <SkillsExtras />

            <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50 mt-12">
              <p>
                © {new Date().getFullYear()} Farhan Mohammed. All rights
                reserved.
              </p>
            </footer>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
