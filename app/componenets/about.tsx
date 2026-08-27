"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { pricedown } from "@/lib/fonts";

// Cyberpunk Mech HUD Corner Bracket
const CyberCorner = ({
  position,
  color = "#ffffff",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
}) => {
  const transformMap = {
    "top-left": "",
    "top-right": "scale-x-[-1]",
    "bottom-left": "scale-y-[-1]",
    "bottom-right": "scale-[-1]",
  };

  return (
    <div
      className={`absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 pointer-events-none z-20 ${
        position === "top-left"
          ? "top-0 left-0"
          : position === "top-right"
          ? "top-0 right-0"
          : position === "bottom-left"
          ? "bottom-0 left-0"
          : "bottom-0 right-0"
      }`}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${transformMap[position]} drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]`}
      >
        {/* Outer Heavy Angular Bracket */}
        <path
          d="M 5 150 L 5 45 L 45 5 L 150 5 L 135 15 L 50 15 L 15 50 L 15 135 Z"
          fill={color}
        />
        {/* Secondary Tech Track */}
        <path
          d="M 22 120 L 22 60 L 60 22 L 120 22 L 110 30 L 65 30 L 30 65 L 30 110 Z"
          fill={color}
          opacity="0.8"
        />
        {/* Chamfered Edge Spike */}
        <polygon points="0,55 0,110 8,100 8,65" fill={color} />
        <polygon points="55,0 110,0 100,8 65,8" fill={color} />

        {/* Tech Data Slot Cutouts */}
        <rect x="68" y="24" width="8" height="4" fill="#000000" />
        <rect x="80" y="24" width="8" height="4" fill="#000000" />
        <rect x="92" y="24" width="8" height="4" fill="#000000" />

        <rect x="24" y="68" width="4" height="8" fill="#000000" />
        <rect x="24" y="80" width="4" height="8" fill="#000000" />
        <rect x="24" y="92" width="4" height="8" fill="#000000" />

        {/* Diagonal Tech Notch */}
        <polygon points="40,40 48,40 40,48" fill={color} />
      </svg>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 md:px-8 bg-black text-white select-none overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Small Decorative Ambient Background Graphic Left */}
      <div className="absolute -left-8 sm:-left-4 lg:left-2 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 opacity-25 sm:opacity-40"
        >
          <Image
            src="/about/CSEC (1).svg"
            alt="CSEC Decor Left"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(255,42,133,0.4)]"
            priority={false}
          />
        </motion.div>
      </div>

      {/* Small Decorative Ambient Background Graphic Right */}
      <div className="absolute -right-8 sm:-right-4 lg:right-2 top-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
          className="relative w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 opacity-25 sm:opacity-40"
        >
          <Image
            src="/about/CSEC (2).svg"
            alt="CSEC Decor Right"
            fill
            className="object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            priority={false}
          />
        </motion.div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* CYBERPUNK MECH HUD ENCLOSED FRAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="
            relative
            p-8
            sm:p-12
            md:p-16
            bg-[#080210]/85
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(0,0,0,0.9)]
          "
        >
          {/* Cyberpunk Mech HUD Corner Brackets in Pure White */}
          <CyberCorner position="top-left" color="#ffffff" />
          <CyberCorner position="top-right" color="#ffffff" />
          <CyberCorner position="bottom-left" color="#ffffff" />
          <CyberCorner position="bottom-right" color="#ffffff" />

          {/* GTA STYLE HEADER & EXTENDING LINE ON THE SAME ROW */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                ABOUT <span className="text-[#ff2a85]">HACK 6.0</span>
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

          {/* PLAIN TEXT CONTENT - LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans text-left relative z-10"
          >
            <p>
              <strong className="text-white font-bold">HACK 6.0</strong> is the sixth edition of the premier national-level onsite hackathon organized by the{" "}
              <span className="text-[#00f0ff] font-semibold">Computer Science Engineers&apos; Community (CSEC)</span> of the Department of Computer Science & Engineering at National Institute of Technology, Hamirpur.
            </p>

            <p>
              Over <strong className="text-[#ff2a85] font-semibold">48 continuous hours</strong>, over 500+ builders, developers, designers, and innovators from across the country gather on campus to ideate, architect, and construct cutting-edge solutions across multiple domain tracks.
            </p>

            <p>
              With an attractive prize pool of <strong className="text-white font-semibold">₹1,50,000+</strong>, direct mentorship from industry leaders, and live evaluations by expert juries, HACK 6.0 offers developers the ultimate proving ground to push their limits and turn ambitious ideas into reality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
