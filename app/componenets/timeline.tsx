"use client";

import React, { useRef } from "react";
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
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
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
      accentColor: "#00f0ff",
      icon: Zap,
    },
    {
      phase: "PHASE 02",
      date: "01 OCT 2026",
      title: "Registration Closes",
      description: "Final deadline for all team submissions and ideas.",
      accentColor: "#ff2a85",
      icon: Hourglass,
    },
    {
      phase: "PHASE 03",
      date: "05 OCT 2026",
      title: "Screening Results",
      description: "Announcement of shortlisted teams selected for the onsite hackathon.",
      accentColor: "#00f0ff",
      icon: Search,
    },
    {
      phase: "PHASE 04",
      date: "09 OCT 2026",
      title: "Day 0 Kickoff",
      description: "Arrival on campus, check-in, networking & Grand Opening Ceremony.",
      accentColor: "#ff2a85",
      icon: Rocket,
    },
    {
      phase: "PHASE 05",
      date: "10 OCT 2026",
      title: "Day 1 Hackathon",
      description: "48-hour sprint begins: intense building, mentorship rounds & midnight snacks.",
      accentColor: "#00f0ff",
      icon: Code2,
    },
    {
      phase: "PHASE 06",
      date: "11 OCT 2026",
      title: "Day 2 Grand Finale",
      description: "Project submissions, live jury pitching & the Grand Award Ceremony.",
      accentColor: "#ff2a85",
      icon: Trophy,
    },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 sm:px-6 md:px-8 bg-black text-white select-none">
      <div className="container max-w-5xl mx-auto">
        {/* GTA STYLE HEADER & EXTENDING LINE ON THE SAME ROW */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
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
              EVENT <span className="text-[#00f0ff]">TIMELINE</span>
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

        {/* TIMELINE TRACK */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-4">
          {/* Central Track Line Backing */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/15 -translate-x-1/2" />

          {/* Animated Glowing Progress Line */}
          <motion.div
            className="absolute left-4 sm:left-6 md:left-1/2 top-4 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#ff2a85] to-[#00f0ff] origin-top z-10 -translate-x-1/2 shadow-[0_0_12px_#00f0ff]"
            style={{ height: timelineHeight }}
          />

          {/* Events List */}
          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={event.phase} className="relative flex items-center">
                  {/* Timeline Node Diamond Marker */}
                  <div
                    style={{
                      borderColor: event.accentColor,
                      boxShadow: `0 0 12px ${event.accentColor}`,
                    }}
                    className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 rotate-45 z-20 flex items-center justify-center"
                  >
                    <div
                      style={{ backgroundColor: event.accentColor }}
                      className="w-1.5 h-1.5"
                    />
                  </div>

                  {/* Card Content Grid */}
                  <div
                    className={`w-full flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Event Card */}
                    <div
                      className={`w-full md:w-1/2 pl-10 sm:pl-14 md:pl-0 ${
                        isEven ? "md:pr-10" : "md:pl-10"
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 25, x: isEven ? -15 : 15 }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: 0.05 * index }}
                        className="
                          relative
                          group
                          overflow-hidden
                          bg-[#0c0517]/95
                          backdrop-blur-xl
                          border
                          border-white/15
                          hover:border-[#ff2a85]/60
                          rounded-2xl
                          p-5
                          sm:p-6
                          transition-all
                          duration-300
                          hover:-translate-y-1.5
                          shadow-[0_10px_30px_rgba(0,0,0,0.8),_3px_3px_0px_#00f0ff]
                          hover:shadow-[0_15px_40px_rgba(255,42,133,0.35),_4px_4px_0px_#ff2a85]
                        "
                      >
                        {/* Top Ambient Glow Line */}
                        <div
                          style={{
                            backgroundImage: `linear-gradient(to right, transparent, ${event.accentColor}, transparent)`,
                          }}
                          className="absolute inset-x-0 top-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />

                        {/* Subtle Shimmer Sweep */}
                        <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            style={{ color: event.accentColor }}
                            className="font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                          >
                            <span className="relative flex h-2 w-2">
                              <span
                                style={{ backgroundColor: event.accentColor }}
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                              />
                              <span
                                style={{ backgroundColor: event.accentColor }}
                                className="relative inline-flex rounded-full h-2 w-2"
                              />
                            </span>
                            <Icon className="w-3.5 h-3.5" />
                            {event.phase}
                          </span>

                          <span className="text-xs font-mono font-bold text-white bg-white/10 border border-white/15 px-3 py-1 rounded-md shadow-sm">
                            {event.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl sm:text-2xl font-pricedown tracking-tight text-white mb-2 group-hover:text-[#00f0ff] transition-colors drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] ${pricedown.className}`}>
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Empty Space for the opposite column in desktop */}
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
