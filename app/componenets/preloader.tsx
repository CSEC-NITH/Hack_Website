"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricedown, signatur } from "@/lib/fonts";

const GTA_TIPS = [
  {
    title: "MISSION BRIEFING",
    text: "48 hours of non-stop hacking, caffeine, and building the future. Form your crew and claim the bounty.",
  },
  {
    title: "PRO TIP: REPO HYGIENE",
    text: "Commit early and push often. Even the best hackers can't save a merge conflict at 3:00 AM.",
  },
  {
    title: "WANTED LEVEL",
    text: "5-Star Innovation detected. High-voltage prototypes are heavily monitored by the judges.",
  },
  {
    title: "LOCATION",
    text: "National Institute of Technology, Hamirpur // Obsidian Territory // North Coordinates.",
  },
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.max(2, Math.floor(Math.random() * 9) + 4);
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle GTA tips as progress increments
    if (progress < 30) setTipIndex(0);
    else if (progress < 60) setTipIndex(1);
    else if (progress < 85) setTipIndex(2);
    else setTipIndex(3);

    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => setShouldRender(false), 700);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-4 sm:p-8 md:p-12 bg-[#0a0212] text-white select-none overflow-hidden"
        >
          {/* GTA Artwork Atmospheric Background */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,2,28,0.4)_0%,rgba(5,0,10,0.95)_85%,#05000a_100%)] z-10" />

            {/* Neon Sunset Ambient Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ff2a85]/25 blur-[90px]" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#00f0ff]/20 blur-[90px]" />
            <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-[#8a2be2]/25 blur-[100px]" />

            {/* Retro Scanlines */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px)",
              }}
            />
          </div>

          {/* TOP BAR: GTA Logo + Wanted Stars */}
          <div className="relative z-20 flex items-start justify-between w-full">
            {/* GTA Iconic Title Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <div className="relative inline-block">
                <h1
                  className={`text-5xl sm:text-7xl md:text-8xl tracking-tight text-white ${pricedown.className} drop-shadow-[4px_4px_0_#000] [-webkit-text-stroke:2px_#000]`}
                  style={{ textShadow: "0 0 20px rgba(255,255,255,0.4)" }}
                >
                  hack 6.0
                </h1>

                {/* Vice City / GTA Script Overlay */}
                <span
                  className={`absolute -bottom-3 sm:-bottom-4 left-6 sm:left-10 text-3xl sm:text-5xl md:text-6xl text-[#ff2a85] ${signatur.className} -rotate-6 drop-shadow-[0_0_12px_rgba(255,42,133,0.9)] whitespace-nowrap`}
                >
                  Vapour Waves
                </span>
              </div>

              <span className="font-mono text-[10px] sm:text-xs tracking-[0.35em] text-[#00f0ff] uppercase font-bold mt-5 sm:mt-6 drop-shadow-[0_0_6px_#00f0ff]">
                CSEC NITH PRESENTS // EDITION VI
              </span>
            </motion.div>

            {/* GTA 5-Star Wanted Level */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-end gap-1"
            >
              <div className="flex items-center gap-1 sm:gap-1.5 bg-black/60 px-2.5 sm:px-3 py-1 rounded border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-lg sm:text-2xl text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] animate-pulse"
                    style={{ animationDelay: `${star * 150}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#ffd700] font-bold uppercase">
                INNOVATION LEVEL: MAX
              </span>
            </motion.div>
          </div>

          {/* BOTTOM SECTION: GTA Tip Box (Left) & GTA Loading Spinner/Bar (Right) */}
          <div className="relative z-20 flex flex-col md:flex-row items-end justify-between gap-6 w-full mt-auto">
            {/* GTA Style Tip / Hint Box */}
            <motion.div
              key={tipIndex}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg w-full bg-black/75 backdrop-blur-md border-l-4 border-[#ff2a85] p-3.5 sm:p-4 shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#00f0ff]">
                  {GTA_TIPS[tipIndex].title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans font-medium">
                {GTA_TIPS[tipIndex].text}
              </p>
            </motion.div>

            {/* GTA Loading Widget (Spinner + Progress Bar) */}
            <div className="flex flex-col items-end w-full md:w-80 shrink-0">
              <div className="flex items-center gap-3 mb-2">
                {/* Rotating GTA Loader Disc */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-t-[#ff2a85] border-r-[#00f0ff] border-b-[#ffd700] border-l-transparent drop-shadow-[0_0_8px_#ff2a85]"
                />

                <span
                  className={`text-xl sm:text-2xl text-white tracking-wide uppercase ${pricedown.className} drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]`}
                >
                  LOADING...
                </span>

                <span className="font-mono text-sm sm:text-base font-bold text-[#00f0ff] drop-shadow-[0_0_6px_#00f0ff]">
                  {progress}%
                </span>
              </div>

              {/* Classic Neon Progress Bar */}
              <div className="w-full h-2.5 bg-black/90 rounded-none border border-white/20 p-0.5 overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.9)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ff2a85] via-[#a855f7] to-[#00f0ff] shadow-[0_0_12px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>

              <span className="font-mono text-[9px] text-white/50 tracking-wider mt-1.5">
                INITIALIZING ASSETS & GRAPHICS ENGINE
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
