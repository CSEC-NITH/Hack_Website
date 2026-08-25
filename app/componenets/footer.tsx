"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
  CheckCircle2,
  Send,
  Heart,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { scrollToSection } from "@/lib/scroll-utils";
import { pricedown } from "@/lib/fonts";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1000);
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Timeline", href: "#timeline" },
    { label: "Prizes", href: "#prizes" },
    { label: "Judges", href: "#judges" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Organizers", href: "#team-section" },
    { label: "Team", href: "#team" },
  ];

  const resourceLinks = [
    {
      label: "Venue Guide",
      href: "https://dot-puma-97f.notion.site/Hack-6-0-Venue-19f095b2daf9809e86e5f0a3fcb7d3df",
      isExternal: true,
    },
    {
      label: "Hacker's Guide",
      href: "https://dot-puma-97f.notion.site/Hack-6-0-Hacker-s-Guide-19f095b2daf980058a2de1c0691aef59?pvs=74",
      isExternal: true,
    },
    {
      label: "Community Discord",
      href: "https://discord.com/invite/kneqCFxKHY",
      isExternal: true,
    },
    {
      label: "FAQ Matrix",
      href: "#faq",
      isExternal: false,
    },
  ];

  const socialLinks = [
    {
      label: "Discord",
      href: "https://discord.com/invite/kneqCFxKHY",
      icon: FaDiscord,
      hoverClass:
        "hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 hover:shadow-[0_0_15px_rgba(88,101,242,0.4)]",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/csec_nith/",
      icon: Instagram,
      hoverClass:
        "hover:text-[#ff2a85] hover:border-[#ff2a85]/50 hover:bg-[#ff2a85]/10 hover:shadow-[0_0_15px_rgba(255,42,133,0.4)]",
    },
    {
      label: "Twitter / X",
      href: "https://x.com/csec_nith?t=Ubyv6_7SLUkdaxtBS8MUew&s=09",
      icon: Twitter,
      hoverClass:
        "hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/nith-csec/",
      icon: Linkedin,
      hoverClass:
        "hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]",
    },
  ];

  return (
    <footer className="relative w-full border-t border-white/15 bg-black text-white select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* 4 Column Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12">
          {/* Col 1: CSEC Brand & Description */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo & Name in Pricedown */}
              <div className="flex items-center gap-3">
                <Link
                  href="https://csec.nith.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0c0517] border border-white/20 p-2 transition-all duration-300 hover:scale-105 hover:border-[#ff2a85] hover:shadow-[0_0_15px_rgba(255,42,133,0.5)]"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                    alt="CSEC Logo"
                    width={36}
                    height={36}
                    className="h-full w-full object-contain"
                  />
                </Link>

                <div>
                  <h3
                    className={`text-3xl font-pricedown tracking-tight text-white ${pricedown.className} [-webkit-text-stroke:1px_#000000] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.9)]`}
                  >
                    HACK <span className="text-[#ff2a85]">6.0</span>
                  </h3>
                  <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00f0ff]">
                    CSEC <span className="text-white/30">•</span> NIT HAMIRPUR
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400 font-sans">
                Empowering student innovation through code, creativity, and collaboration in the hills of Himachal Pradesh.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c0517] border border-white/15 text-gray-300 transition-all duration-200 ${social.hoverClass}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
            <h4
              className={`flex items-center gap-2 text-xl font-pricedown tracking-wider text-white ${pricedown.className}`}
            >
              <Sparkles className="h-4 w-4 text-[#ff2a85] shrink-0" />
              <span>QUICK LINKS</span>
            </h4>

            <ul className="space-y-2.5 text-sm font-sans">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group inline-flex items-center gap-1.5 text-gray-400 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gray-600 transition-colors duration-200 group-hover:text-[#ff2a85]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="lg:col-span-3 sm:col-span-1 space-y-4">
            <h4
              className={`flex items-center gap-2 text-xl font-pricedown tracking-wider text-white ${pricedown.className}`}
            >
              <Sparkles className="h-4 w-4 text-[#00f0ff] shrink-0" />
              <span>RESOURCES</span>
            </h4>

            <ul className="space-y-2.5 text-sm font-sans">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!item.isExternal && item.href.startsWith("#")) {
                        handleLinkClick(e, item.href);
                      }
                    }}
                    className="group inline-flex items-center gap-1.5 text-gray-400 transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gray-600 transition-colors duration-200 group-hover:text-[#00f0ff]" />
                    <span className="truncate">{item.label}</span>
                    {item.isExternal && (
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-[#00f0ff]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Updated */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className={`text-xl font-pricedown tracking-wider text-white ${pricedown.className}`}
            >
              STAY UPDATED
            </h4>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 font-sans">
              Subscribe to the HACK 6.0 newsletter for updates, schedule releases, and announcements.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-[#0c0517] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-[#ff2a85] focus:shadow-[0_0_15px_rgba(255,42,133,0.3)] font-sans"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  relative group overflow-hidden
                  flex w-full cursor-pointer items-center justify-center gap-2
                  rounded-xl
                  bg-gradient-to-r from-[#ff2a85] via-[#ff007f] to-[#7928ca]
                  py-3
                  text-lg font-pricedown uppercase tracking-wider text-white
                  border border-[#ff75c3]/60
                  shadow-[0_0_15px_rgba(255,42,133,0.4),_2px_2px_0px_#00f0ff]
                  hover:shadow-[0_0_25px_rgba(255,42,133,0.7),_3px_3px_0px_#00f0ff]
                  hover:-translate-y-0.5
                  active:translate-y-0.5
                  transition-all duration-200
                  disabled:opacity-60
                  select-none
                "
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>SUBSCRIBING...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-[#00f0ff]" />
                    <span>SUBSCRIBE</span>
                  </>
                )}
              </button>
            </form>

            {isSubscribed && (
              <div className="mt-2 flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                <CheckCircle2 size={14} className="shrink-0 text-emerald-400" />
                <span>THANK YOU! TRANSMISSION RECEIVED.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Horizontal Rule & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 font-sans">
          <p>© 2026 CSEC, NIT Hamirpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
