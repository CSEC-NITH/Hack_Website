"use client";

import React from "react";
import { motion } from "framer-motion";
import { pricedown } from "@/lib/fonts";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 md:px-8 bg-black text-white select-none">
      <div className="container max-w-5xl mx-auto">
        {/* GTA STYLE HEADER & EXTENDING LINE ON THE SAME ROW */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans text-left"
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
      </div>
    </section>
  );
}
