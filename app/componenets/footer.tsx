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
  MapPin,
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

      <div className="absolute -bottom-8 -right-8 sm:right-4 sm:bottom-0 pointer-events-none z-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-90 sm:opacity-85 transition-opacity">
        <Image
          src="/footer/CSEC (5).svg"
          alt="CSEC Footer Graphic"
          fill
          className="object-contain object-bottom-right drop-shadow-[0_0_20px_rgba(255,42,133,0.3)]"
          priority={false}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.5)_95%)]" />
      </div>

      <div className="relative z-10 mx-10   px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12">

          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>

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

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400 font-sans">
                Empowering student innovation through code, creativity, and collaboration in the hills of Himachal Pradesh.
              </p>
            </div>

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

          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
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

          <div className="lg:col-span-4 sm:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h4
                className={`flex items-center gap-2 text-xl font-pricedown tracking-wider text-white ${pricedown.className}`}
              >
                <MapPin className="h-4 w-4 text-[#ff2a85] shrink-0" />
                <span>VENUE LOCATION</span>
              </h4>

            </div>

            <p className="text-xs text-gray-400 font-sans">
              National Institute of Technology, Hamirpur, HP — 177005
            </p>

            <a
              href="https://maps.google.com/?q=National+Institute+of+Technology+Hamirpur,+Himachal+Pradesh+177005"
              target="_blank"
              rel="noopener noreferrer"
              title="Open NIT Hamirpur in Google Maps"
              className="relative block w-full max-w-sm h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/20 bg-[#0c0517] shadow-[0_0_15px_rgba(0,240,255,0.15)] group hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
            >
              <iframe
                title="NIT Hamirpur Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.993427958971!2d76.52220497585098!3d31.708307974728564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d44081c7e997%3A0x7d6f51be7612f0a!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-1.5 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/90 border-2 border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.5),_3px_3px_0px_#ff2a85] group-hover:scale-105 transition-transform duration-200">
                  <MapPin className="w-4 h-4 text-[#ff2a85] fill-[#ff2a85]/40 animate-pulse shrink-0" />
                  <span className={`text-sm sm:text-base font-pricedown tracking-wider text-white ${pricedown.className} [-webkit-text-stroke:0.5px_#000]`}>
                    VIEW ON GOOGLE MAPS
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] uppercase bg-black/80 px-2.5 py-0.5 rounded-md border border-white/15 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                  NIT HAMIRPUR, HP
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 font-sans">
          <p>© 2026 CSEC, NIT Hamirpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
