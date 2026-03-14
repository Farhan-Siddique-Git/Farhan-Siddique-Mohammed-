import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Trophy, Code2, Lightbulb } from "lucide-react";

const navItems = [
  { id: "hero", icon: User, label: "Profile" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "achievements", icon: Trophy, label: "Achievements" },
  { id: "projects", icon: Code2, label: "Projects" },
  { id: "skills", icon: Lightbulb, label: "Skills" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group
                ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`}
              aria-label={item.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />

              {/* Tooltip */}
              <div className="absolute -top-10 px-2 py-1 text-xs font-medium text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
