"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Gift,
  Lightbulb,
  Hexagon,
  Gem,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { pricedown } from "@/lib/fonts";

export default function PrizeSection() {
  const trackPrizes = [
    {
      id: "track-aiml",
      icon: Lightbulb,
      title: "AI / ML Track",
      totalAmount: "₹30,000",
      accentColor: "#00f0ff",
      description: "Breakthrough machine learning models, autonomous systems & neural innovations.",
      distribution: [
        { rank: "1st", amount: "₹15,000" },
        { rank: "2nd", amount: "₹10,000" },
        { rank: "3rd", amount: "₹5,000" },
      ],
    },
    {
      id: "track-blockchain",
      icon: Hexagon,
      title: "Blockchain & Web3",
      totalAmount: "₹30,000",
      accentColor: "#ff2a85",
      description: "Decentralized architecture, smart contracts, and Web3 ecosystem utilities.",
      distribution: [
        { rank: "1st", amount: "₹15,000" },
        { rank: "2nd", amount: "₹10,000" },
        { rank: "3rd", amount: "₹5,000" },
      ],
    },
    {
      id: "track-open",
      icon: Gem,
      title: "Open Innovation",
      totalAmount: "₹30,000",
      accentColor: "#00f0ff",
      description: "Visionary multidisciplinary hacks, hardware integration & wild ideas.",
      distribution: [
        { rank: "1st", amount: "₹15,000" },
        { rank: "2nd", amount: "₹10,000" },
        { rank: "3rd", amount: "₹5,000" },
      ],
    },
  ];

  const specialCategories = [
    {
      id: "special-girls",
      icon: Gift,
      title: "All-Girls Squad",
      amount: "₹10,000",
      accentColor: "#ff2a85",
      description: "Top-scoring project built by an all-female innovator team.",
    },
    {
      id: "special-beginners",
      icon: GraduationCap,
      title: "Best Freshers Hack",
      amount: "₹10,000",
      accentColor: "#00f0ff",
      description: "Most outstanding project presented by a 1st year beginner team.",
    },
  ];

  return (
    <section id="prizes" className="relative py-20 px-4 sm:px-6 md:px-8 bg-black text-white select-none">
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
              PRIZE <span className="text-[#ff2a85]">POOL</span>
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

        {/* PRIZES GRID */}
        <div className="space-y-8">
          {/* FEATURED: GRAND CHAMPION PRIZE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative
              group
              overflow-hidden
              bg-gradient-to-b from-[#16062b]/95 via-[#0e0419]/98 to-[#06020c]
              backdrop-blur-xl
              border
              border-[#ff2a85]/50
              hover:border-[#ff2a85]
              rounded-3xl
              p-6
              sm:p-10
              transition-all
              duration-300
              shadow-[0_12px_40px_rgba(0,0,0,0.9),_4px_4px_0px_#ff2a85]
              hover:shadow-[0_20px_50px_rgba(255,42,133,0.4),_6px_6px_0px_#00f0ff]
              hover:-translate-y-1
            "
          >
            {/* Top Ambient Glow Line */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff2a85] to-transparent" />

            {/* Shimmer Light Sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* Trophy Badge */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#ff2a85] to-[#7928ca] p-0.5 shadow-[0_0_20px_rgba(255,42,133,0.6)] flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-[#0a0314] rounded-[14px] flex items-center justify-center">
                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#00f0ff] drop-shadow-[0_0_10px_#00f0ff]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#ff2a85] uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                      OVERALL WINNER
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl md:text-4xl font-pricedown tracking-tight text-white ${pricedown.className}`}>
                    GRAND CHAMPION
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mt-1 font-sans">
                    Awarded to the most exceptional, high-impact project across technical difficulty, UI/UX, and execution.
                  </p>
                </div>
              </div>

              {/* Grand Prize Number */}
              <div className="flex flex-col items-center md:items-end shrink-0">
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-1">
                  BOUNTY VALUE
                </span>
                <div className={`text-5xl sm:text-6xl md:text-7xl font-pricedown tracking-tight text-[#00f0ff] drop-shadow-[0_2px_12px_rgba(0,240,255,0.7)] ${pricedown.className}`}>
                  ₹40,000
                </div>
              </div>
            </div>
          </motion.div>

          {/* TRACK PRIZES: 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {trackPrizes.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="
                    relative
                    group
                    overflow-hidden
                    bg-[#0c0517]/95
                    backdrop-blur-xl
                    border
                    border-white/15
                    hover:border-[#00f0ff]/60
                    rounded-2xl
                    p-5
                    sm:p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    shadow-[0_8px_25px_rgba(0,0,0,0.8),_3px_3px_0px_#00f0ff]
                    hover:shadow-[0_12px_35px_rgba(0,240,255,0.3),_4px_4px_0px_#ff2a85]
                    flex
                    flex-col
                    justify-between
                  "
                >
                  {/* Top Ambient Line */}
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${track.accentColor}, transparent)`,
                    }}
                    className="absolute inset-x-0 top-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Shimmer Sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                  <div>
                    {/* Header Icon + Total Pool */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        style={{
                          borderColor: track.accentColor,
                          boxShadow: `0 0 10px ${track.accentColor}40`,
                        }}
                        className="w-10 h-10 rounded-xl bg-black border flex items-center justify-center shrink-0"
                      >
                        <Icon className="w-5 h-5" style={{ color: track.accentColor }} />
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                          TRACK POOL
                        </span>
                        <span className={`text-xl sm:text-2xl font-pricedown tracking-tight text-white ${pricedown.className}`}>
                          {track.totalAmount}
                        </span>
                      </div>
                    </div>

                    <h4 className={`text-xl sm:text-2xl font-pricedown tracking-tight text-white mb-2 group-hover:text-[#00f0ff] transition-colors ${pricedown.className}`}>
                      {track.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-5">
                      {track.description}
                    </p>
                  </div>

                  {/* Distribution Pills */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-1.5 text-center">
                    {track.distribution.map((d) => (
                      <div key={d.rank} className="bg-white/5 border border-white/10 rounded-lg py-1 px-1">
                        <span className="block text-[9px] font-mono text-gray-400">{d.rank}</span>
                        <span className="block text-xs font-mono font-bold text-white">{d.amount}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SPECIAL CATEGORIES: 2-COLUMN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2">
            {specialCategories.map((spec, index) => {
              const Icon = spec.icon;

              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + 0.1 * index }}
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
                    hover:-translate-y-1
                    shadow-[0_8px_25px_rgba(0,0,0,0.8),_3px_3px_0px_#ff2a85]
                    hover:shadow-[0_12px_35px_rgba(255,42,133,0.3),_4px_4px_0px_#00f0ff]
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {/* Top Line */}
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${spec.accentColor}, transparent)`,
                    }}
                    className="absolute inset-x-0 top-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Shimmer Sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                  <div className="flex items-center gap-4">
                    <div
                      style={{
                        borderColor: spec.accentColor,
                        boxShadow: `0 0 10px ${spec.accentColor}40`,
                      }}
                      className="w-12 h-12 rounded-xl bg-black border flex items-center justify-center shrink-0"
                    >
                      <Icon className="w-6 h-6" style={{ color: spec.accentColor }} />
                    </div>

                    <div>
                      <h4 className={`text-xl sm:text-2xl font-pricedown tracking-tight text-white mb-0.5 group-hover:text-[#ff2a85] transition-colors ${pricedown.className}`}>
                        {spec.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-sans">
                        {spec.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                      BOUNTY
                    </span>
                    <span className={`text-2xl sm:text-3xl font-pricedown tracking-tight text-white ${pricedown.className}`}>
                      {spec.amount}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
