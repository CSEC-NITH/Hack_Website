"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { pricedown } from "@/lib/fonts";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3fa442a1-9ac9-4751-ab62-8716bc1c6c8b",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "HACK 6.0 Contact Dispatcher",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactChannels = [
    {
      id: "email",
      icon: Mail,
      title: "Email Dispatch",
      subtitle: "Questions, partnerships & sponsor inquiries",
      value: "csec@nith.ac.in",
      href: "mailto:csec@nith.ac.in",
      accentColor: "#00f0ff",
    },
    {
      id: "location",
      icon: MapPin,
      title: "Onsite Arena Venue",
      subtitle: "Join us in person at NIT Hamirpur campus",
      value: "NIT Hamirpur, HP - 177005",
      href: "https://www.google.com/maps/search/?api=1&query=National+Institute+of+Technology+Hamirpur",
      accentColor: "#ff2a85",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Helpline & Lead Comms",
      subtitle: "Student & Team Lead Coordinators",
      value: "+91 62306 46657 / +91 93582 57509",
      href: "tel:+916230646657",
      accentColor: "#00f0ff",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 md:px-8 bg-black text-white select-none">
      <div className="container max-w-5xl mx-auto">

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
              GET IN <span className="text-[#00f0ff]">TOUCH</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="flex-1 h-[2px] bg-white"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              lg:col-span-7
              relative
              group
              overflow-hidden
              bg-[#0c0517]/95
              backdrop-blur-xl
              border
              border-white/15
              hover:border-[#ff2a85]/60
              rounded-3xl
              p-6
              sm:p-8
              transition-all
              duration-300
              shadow-[0_12px_40px_rgba(0,0,0,0.8),_3px_3px_0px_#00f0ff]
            "
          >

            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a85] to-transparent" />

            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]" />
              </span>
              <h3 className={`text-2xl sm:text-3xl font-pricedown tracking-tight text-white ${pricedown.className}`}>
                DISPATCH MESSAGE
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#140a24]/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#140a24]/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-[#ff2a85] focus:shadow-[0_0_15px_rgba(255,42,133,0.3)] font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 block">
                  Subject Header
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Track Query / Partnership Proposal"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-[#140a24]/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.3)] font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 block">
                  Message Payload
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your transmission here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none bg-[#140a24]/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-[#ff2a85] focus:shadow-[0_0_15px_rgba(255,42,133,0.3)] font-sans"
                />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-3.5 text-xs font-mono font-bold text-emerald-300"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  <span>TRANSMISSION DISPATCHED SUCCESSFULLY! WE WILL CONNECT SHORTLY.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 bg-rose-950/80 border border-rose-500/50 rounded-xl p-3.5 text-xs font-mono font-bold text-rose-300"
                >
                  <AlertCircle size={18} className="shrink-0 text-rose-400" />
                  <span>TRANSMISSION FAILED. PLEASE VERIFY DETAILS AND RETRY.</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  relative group overflow-hidden
                  w-full
                  py-3.5
                  rounded-xl
                  bg-gradient-to-r from-[#ff2a85] via-[#ff007f] to-[#7928ca]
                  text-white
                  font-pricedown
                  text-xl md:text-2xl
                  tracking-wider
                  uppercase
                  border border-[#ff75c3]/60
                  shadow-[0_0_20px_rgba(255,42,133,0.5),_3px_3px_0px_#00f0ff]
                  hover:shadow-[0_0_30px_rgba(255,42,133,0.8),_4px_4px_0px_#00f0ff]
                  hover:-translate-y-0.5
                  active:translate-y-0.5
                  transition-all duration-300
                  flex items-center justify-center gap-3
                  cursor-pointer
                  disabled:opacity-60
                  select-none
                "
              >

                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND TRANSMISSION</span>
                    <Send className="w-4 h-4 text-[#00f0ff] transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <div className="lg:col-span-5 space-y-4">
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.a
                  key={channel.id}
                  href={channel.href}
                  target={channel.id === "location" ? "_blank" : undefined}
                  rel={channel.id === "location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
                    hover:-translate-y-1
                    shadow-[0_8px_25px_rgba(0,0,0,0.8),_3px_3px_0px_#ff2a85]
                    hover:shadow-[0_12px_35px_rgba(0,240,255,0.3),_4px_4px_0px_#00f0ff]
                    block
                  "
                >

                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, transparent, ${channel.accentColor}, transparent)`,
                    }}
                    className="absolute inset-x-0 top-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                  <div className="flex items-start gap-4">
                    <div
                      style={{
                        borderColor: channel.accentColor,
                        boxShadow: `0 0 12px ${channel.accentColor}40`,
                      }}
                      className="w-12 h-12 rounded-xl bg-black border flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <Icon className="w-5 h-5" style={{ color: channel.accentColor }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xl sm:text-2xl font-pricedown tracking-tight text-white mb-0.5 group-hover:text-[#00f0ff] transition-colors ${pricedown.className}`}>
                        {channel.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans mb-1.5">
                        {channel.subtitle}
                      </p>
                      <p className="text-sm font-mono font-bold text-white group-hover:text-[#ff2a85] transition-colors truncate">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
