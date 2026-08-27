"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Trophy,
  Gift,
  Lightbulb,
  Hexagon,
  Gem,
  GraduationCap,
  Star,
} from "lucide-react";
import { pricedown } from "@/lib/fonts"; 

export default function PrizeSection() {
  const trackPrizes = [
    {
      id: "track-aiml",
      icon: Lightbulb,
      title: "AI / ML Track",
      totalAmount: "₹30,000",
      accent: "#00ffff", // Neon Cyan
      bgAccent: "bg-[#00ffff]",
      textAccent: "text-[#00ffff]",
      description: "Breakthrough machine learning models & neural innovations.",
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
      accent: "#ff00aa", // Hot Pink
      bgAccent: "bg-[#ff00aa]",
      textAccent: "text-[#ff00aa]",
      description: "Decentralized architecture and Web3 ecosystem utilities.",
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
      accent: "#a200ff", // Vaporwave Violet
      bgAccent: "bg-[#a200ff]",
      textAccent: "text-[#a200ff]",
      description: "Visionary multidisciplinary hacks & wild hardware ideas.",
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
      bgAccent: "bg-[#ff00aa]",
      accent: "#ff00aa",
      description: "Top-scoring project built by an all-female innovator team.",
    },
    {
      id: "special-beginners",
      icon: GraduationCap,
      title: "Best Freshers Hack",
      amount: "₹10,000",
      bgAccent: "bg-[#00ffff]",
      accent: "#00ffff",
      description: "Most outstanding project presented by a 1st year beginner team.",
    },
  ];

  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6 md:px-8 bg-transparent text-white select-none overflow-hidden">
      {/* Responsive Background Images for Web & Mobile */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Desktop / Web Banner Background */}
        <div className="hidden sm:block absolute inset-0 opacity-20">
          <Image
            src="/prizes/hack6.0 banner (1).svg"
            alt="Prizes Background Web"
            fill
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        </div>

        {/* Mobile Artwork Background */}
        <div className="block sm:hidden absolute inset-0 opacity-25">
          <Image
            src="/prizes/CSEC (3).svg"
            alt="Prizes Background Mobile"
            fill
            className="object-contain object-center scale-110"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
        </div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* GTA STYLE HEADER & EXTENDING LINE */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
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
        <div className="space-y-10">

          {/* FEATURED: GRAND CHAMPION (VICE CITY MISSION PASSED VIBE) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              group
              bg-[#0a0a0a]
              border-4
              border-black
              p-6
              sm:p-10
              transition-transform
              duration-200
              shadow-[0_10px_35px_rgba(0,0,0,0.8)]
              hover:shadow-[0_15px_45px_rgba(0,0,0,0.9)]
              hover:-translate-y-1
              hover:-translate-x-1
            "
          >
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#00ffff] via-[#ff00aa] to-[#a200ff] border-b-4 border-black" />

            {/* 5-Star Wanted Level Indicator */}
            <div className="absolute -top-6 right-6 flex gap-1 bg-[#1a1a1a] px-4 py-2 border-4 border-black shadow-md rotate-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-[#00ffff] fill-[#00ffff] animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mt-2">
              <div className="flex flex-col sm:flex-row items-center gap-6">

                {/* Thick Icon Block */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#00ffff] border-4 border-black shadow-md flex items-center justify-center shrink-0 -rotate-3 group-hover:rotate-0 transition-transform">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-black" strokeWidth={2.5} />
                </div>

                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <span className="font-sans text-xs font-black text-[#00ffff] uppercase tracking-[0.2em] bg-[#1a1a1a] px-3 py-1 border-2 border-black shadow-sm">
                      RESPECT +
                    </span>
                  </div>

                  <h3 className={`text-3xl sm:text-4xl md:text-5xl font-pricedown tracking-wide text-white [-webkit-text-stroke:2px_#000000] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-2 ${pricedown.className}`}>
                    MISSION PASSED!
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 font-bold max-w-md mt-2 leading-snug border-l-4 border-[#00ffff] pl-3 text-left">
                    Awarded to the ultimate heist crew. Top execution across technical difficulty, UI/UX, and raw impact.
                  </p>
                </div>
              </div>

              {/* Grand Prize Number */}
              <div className="flex flex-col items-center md:items-end shrink-0 bg-[#1a1a1a] border-4 border-black p-4 sm:p-5 shadow-md rotate-2 group-hover:rotate-0 transition-transform">
                <span className="text-xs font-black tracking-widest text-[#00ffff] uppercase mb-1">
                  PAYOUT
                </span>
                <div className={`text-5xl sm:text-6xl md:text-7xl font-pricedown tracking-tight text-white [-webkit-text-stroke:2px_#000000] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] ${pricedown.className}`}>
                  ₹40,000
                </div>
              </div>
            </div>
          </motion.div>

          {/* TRACK PRIZES: 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {trackPrizes.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="
                    relative
                    group
                    bg-[#0a0a0a]
                    border-4
                    border-black
                    p-5
                    sm:p-6
                    transition-transform
                    duration-200
                    shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.9)]
                    hover:-translate-y-1
                    hover:-translate-x-1
                    flex
                    flex-col
                    justify-between
                  "
                >
                  {/* Colored Header Block */}
                  <div className={`absolute top-0 left-0 right-0 h-3 ${track.bgAccent} border-b-4 border-black`} />

                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {/* Chunky Icon */}
                      <div className={`w-12 h-12 ${track.bgAccent} border-4 border-black shadow-md flex items-center justify-center shrink-0`}>
                        <Icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
                          TRACK BOUNTY
                        </span>
                        <span className={`text-2xl sm:text-3xl font-pricedown tracking-wide text-white [-webkit-text-stroke:1.5px_#000000] drop-shadow-[3px_3px_0px_${track.accent}] ${pricedown.className}`}>
                          {track.totalAmount}
                        </span>
                      </div>
                    </div>

                    <h4 className={`text-2xl sm:text-3xl font-pricedown tracking-wide ${track.textAccent} [-webkit-text-stroke:1.5px_#000000] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-2 ${pricedown.className}`}>
                      {track.title}
                    </h4>

                    <p className="text-sm text-gray-300 font-bold leading-snug mb-6 border-l-4 pl-3" style={{ borderColor: track.accent }}>
                      {track.description}
                    </p>
                  </div>

                  {/* Distribution Pills (Weapon Wheel Style) */}
                  <div className="pt-4 border-t-4 border-[#222] grid grid-cols-3 gap-2 text-center">
                    {track.distribution.map((d) => (
                      <div key={d.rank} className="bg-[#1a1a1a] border-2 border-black py-1 px-1 shadow-sm">
                        <span className="block text-[10px] font-black text-gray-500 uppercase">{d.rank}</span>
                        <span className={`block text-sm font-pricedown tracking-wide ${track.textAccent} [-webkit-text-stroke:1px_#000000] ${pricedown.className}`}>{d.amount}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SPECIAL CATEGORIES: 2-COLUMN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
            {specialCategories.map((spec, index) => {
              const Icon = spec.icon;

              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + 0.1 * index }}
                  className="
                    relative
                    group
                    bg-[#0a0a0a]
                    border-4
                    border-black
                    p-5
                    sm:p-6
                    transition-transform
                    duration-200
                    shadow-[0_8px_30px_rgba(0,0,0,0.7)]
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.9)]
                    hover:-translate-y-1
                    hover:-translate-x-1
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {/* Left Color Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-3 ${spec.bgAccent} border-r-4 border-black`} />

                  <div className="flex items-center gap-4 pl-4">
                    <div className={`w-14 h-14 ${spec.bgAccent} border-4 border-black shadow-md flex items-center justify-center shrink-0`}>
                      <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>

                    <div>
                      <h4 className={`text-xl sm:text-2xl font-pricedown tracking-wide text-white [-webkit-text-stroke:1.5px_#000000] drop-shadow-[2px_2px_0px_${spec.accent}] mb-1 ${pricedown.className}`}>
                        {spec.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-bold leading-snug">
                        {spec.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0 bg-[#1a1a1a] border-4 border-black p-2 shadow-sm -rotate-2 group-hover:rotate-0 transition-transform">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-0.5">
                      CUT
                    </span>
                    <span className={`text-2xl sm:text-3xl font-pricedown tracking-wide text-white [-webkit-text-stroke:1.5px_#000000] drop-shadow-[2px_2px_0px_${spec.accent}] ${pricedown.className}`}>
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