"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { pricedown } from "@/lib/fonts";
import {
  Zap,
  Hourglass,
  Search,
  Rocket,
  Code2,
  Trophy,
} from "lucide-react";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  const timelineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const timelineEvents = [
    {
      phase: "PHASE 01",
      date: "01 SEP 2026",
      title: "Registration Opens",
      description: "Applications open nationwide. Ready, set, assemble your squad!",
      accentColor: "#ff00aa", // Neon Pink
      icon: Zap,
    },
    {
      phase: "PHASE 02",
      date: "01 OCT 2026",
      title: "Registration Closes",
      description: "Final deadline for all team submissions and ideas.",
      accentColor: "#a200ff", // Neon Purple
      icon: Hourglass,
    },
    {
      phase: "PHASE 03",
      date: "05 OCT 2026",
      title: "Screening Results",
      description: "Announcement of shortlisted teams selected for the onsite hackathon.",
      accentColor: "#ff00aa",
      icon: Search,
    },
    {
      phase: "PHASE 04",
      date: "09 OCT 2026",
      title: "Day 0 Kickoff",
      description: "Arrival on campus, check-in, networking & Grand Opening Ceremony.",
      accentColor: "#a200ff",
      icon: Rocket,
    },
    {
      phase: "PHASE 05",
      date: "10 OCT 2026",
      title: "Day 1 Hackathon",
      description: "48-hour sprint begins: intense building, mentorship rounds & midnight snacks.",
      accentColor: "#ff00aa",
      icon: Code2,
    },
    {
      phase: "PHASE 06",
      date: "11 OCT 2026",
      title: "Day 2 Grand Finale",
      description: "Project submissions, live jury pitching & the Grand Award Ceremony.",
      accentColor: "#a200ff",
      icon: Trophy,
    },
  ];

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 md:px-8 bg-[#030008] text-white select-none overflow-hidden">
      
      {/* Subtle Background Grid for Cyberpunk Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* FAR LEFT GLITCH HAND */}
      <div className="absolute left-0 top-1/4 -translate-x-8 sm:-translate-x-4 md:translate-x-0 lg:left-0 xl:left-4 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [-18, 18, -18],
            x: [0, -5, 5, -2, 0, 4, -3, 0],
            skewX: [0, -3, 4, -1, 0],
            filter: [
              "drop-shadow(0 0 25px rgba(255,0,170,0.5))",
              "drop-shadow(-4px 2px 35px rgba(0,240,255,0.65))",
              "drop-shadow(4px -2px 35px rgba(162,0,255,0.6))",
              "drop-shadow(0 0 25px rgba(255,0,170,0.5))",
            ],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.35, 0.5, 0.7, 0.85, 0.95, 1] },
            skewX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative w-52 h-72 sm:w-64 sm:h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[520px] xl:w-[440px] xl:h-[580px] opacity-40 sm:opacity-55 lg:opacity-75"
        >
          <Image
            src="/timeline/5.svg"
            alt="Cyberpunk Hand Left"
            fill
            className="object-contain object-left-center select-none"
            priority={false}
          />
        </motion.div>
      </div>

      {/* FAR RIGHT GLITCH HAND */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-4 md:translate-x-0 lg:right-0 xl:right-4 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [18, -18, 18],
            x: [0, 5, -5, 2, 0, -4, 3, 0],
            skewX: [0, 3, -4, 1, 0],
            filter: [
              "drop-shadow(0 0 25px rgba(0,240,255,0.5))",
              "drop-shadow(4px -2px 35px rgba(255,0,170,0.65))",
              "drop-shadow(-4px 2px 35px rgba(162,0,255,0.6))",
              "drop-shadow(0 0 25px rgba(0,240,255,0.5))",
            ],
          }}
          transition={{
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 3.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.35, 0.5, 0.7, 0.85, 0.95, 1] },
            skewX: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative w-52 h-72 sm:w-64 sm:h-96 md:w-80 md:h-[440px] lg:w-96 lg:h-[520px] xl:w-[440px] xl:h-[580px] opacity-40 sm:opacity-55 lg:opacity-75"
        >
          <Image
            src="/timeline/6.svg"
            alt="Cyberpunk Hand Right"
            fill
            className="object-contain object-right-center select-none"
            priority={false}
          />
        </motion.div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* GTA STYLE HEADER & EXTENDING LINE */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <h2
              className={`
                text-4xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-pricedown
                tracking-tight
                text-white
                ${pricedown.className}
                [-webkit-text-stroke:2px_#000000]
                sm:[-webkit-text-stroke:3px_#000000]
                drop-shadow-[4px_4px_0px_rgba(0,0,0,0.9)]
                select-none
                whitespace-nowrap
              `}
            >
              EVENT <span className="text-[#a200ff]">TIMELINE</span>
            </h2>
          </motion.div>

          {/* PLAIN LINE EXTENDING ON THE SAME ROW */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="flex-1 h-[2px] bg-white"
          />
        </div>

        {/* TIMELINE TRACK & CARDS */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-4">
          {/* Static thin background track */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 z-10" />

          {/* Sleek Animated Glowing Progress Line */}
          <motion.div
            className="absolute left-4 sm:left-6 md:left-1/2 top-4 w-[2px] rounded-full bg-gradient-to-b from-[#ff00aa] via-[#a200ff] to-[#ff00aa] origin-top z-10 -translate-x-1/2 shadow-[0_0_15px_#ff00aa]"
            style={{ height: timelineHeight }}
          >
            {/* Minimalist Glowing Tip indicator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white rounded-full shadow-[0_0_10px_white,0_0_20px_#ff00aa]" />
          </motion.div>

          {/* Events List */}
          <div className="space-y-12 sm:space-y-20 relative z-20">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={event.phase} className="relative flex items-center group">
                  {/* Pulsing Timeline Node */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    {/* Outer pulse */}
                    <motion.div 
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      style={{ backgroundColor: event.accentColor }}
                      className="absolute w-6 h-6 rounded-full blur-md"
                    />
                    {/* Core diamond */}
                    <div
                      style={{ borderColor: event.accentColor, boxShadow: `0 0 15px ${event.accentColor}` }}
                      className="w-5 h-5 bg-[#030008] border-[3px] rotate-45 flex items-center justify-center z-10"
                    >
                      <div style={{ backgroundColor: event.accentColor }} className="w-1.5 h-1.5" />
                    </div>
                  </div>

                  {/* Card Content Grid */}
                  <div
                    className={`w-full flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Event Card Wrapper for Gradient Border */}
                    <div
                      className={`w-full md:w-1/2 pl-16 sm:pl-20 md:pl-0 ${
                        isEven ? "md:pr-14" : "md:pl-14"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 * index, type: "spring", stiffness: 100 }}
                        className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/5 hover:from-white/40 transition-colors duration-500"
                      >
                        <div
                          className="
                            relative
                            h-full
                            w-full
                            overflow-hidden
                            bg-gradient-to-br from-[#0c0517]/90 to-[#05010a]/90
                            backdrop-blur-xl
                            rounded-2xl
                            p-6
                            sm:p-8
                            transition-all
                            duration-300
                            group-hover:-translate-y-2
                            group-hover:scale-[1.03]
                          "
                          style={{ 
                            boxShadow: `0 15px 35px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.02), 0 0 0 transparent`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.9), inset 0 0 30px ${event.accentColor}20, 0 10px 40px ${event.accentColor}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 15px 35px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.02), 0 0 0 transparent`;
                          }}
                        >
                          {/* Inner Ambient Top Glow */}
                          <div
                            style={{ backgroundImage: `radial-gradient(ellipse at top, ${event.accentColor}60, transparent 70%)` }}
                            className="absolute inset-x-0 -top-10 h-20 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                          />

                          {/* Dynamic Glass Reflection */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          {/* Meta Bar */}
                          <div className="relative flex items-center justify-between gap-3 mb-5 z-10">
                            <div className="flex items-center gap-3">
                              <div style={{ backgroundColor: `${event.accentColor}20`, color: event.accentColor }} className="p-2 rounded-lg border border-white/5 shadow-inner">
                                <Icon className="w-5 h-5" />
                              </div>
                              <span
                                style={{ color: event.accentColor }}
                                className="font-mono text-sm font-bold tracking-widest uppercase drop-shadow-[0_0_8px_currentColor]"
                              >
                                {event.phase}
                              </span>
                            </div>

                            <span className="text-xs font-mono font-bold text-[#e0e0e0] bg-black/60 border border-white/10 px-3 py-1.5 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] backdrop-blur-md">
                              {event.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 
                            className={`relative text-2xl sm:text-3xl font-pricedown tracking-wide text-white mb-3 transition-all duration-300 ${pricedown.className}`}
                            style={{ 
                              textShadow: "2px 2px 0px rgba(0,0,0,0.8)" 
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.textShadow = `0 0 15px ${event.accentColor}, 2px 2px 0px rgba(0,0,0,1)`}
                            onMouseLeave={(e) => e.currentTarget.style.textShadow = `2px 2px 0px rgba(0,0,0,0.8)`}
                          >
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="relative text-sm sm:text-base text-gray-400/90 leading-relaxed font-sans z-10 group-hover:text-gray-200 transition-colors duration-300">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Empty Space for opposite column */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}