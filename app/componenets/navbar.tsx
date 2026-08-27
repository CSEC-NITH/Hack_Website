"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-utils";
import { useGlitch } from "react-powerglitch";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Prizes", href: "#prizes" },
  { name: "Judges", href: "#judges" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Organizers", href: "#team-section" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const glitch = useGlitch({
    timing: {
      duration: 3950,
    },
    shake: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showHackText, setShowHackText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowHackText(window.scrollY > heroHeight * 0.5);
      }

      const hashLinks = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));

      const sections = hashLinks.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(hashLinks[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0e0419]/90 backdrop-blur-md  py-3 shadow-[0_4px_20px_rgba(255,42,133,0.15)]"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Brand & Logos Section */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* CSEC Logo - Link to external site */}
            <motion.a
              href="https://csec.nith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-sm border-2 border-white overflow-hidden bg-[#19171b]/90 p-1 flex items-center justify-center transition-transform shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              title="CSEC NITH"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/csec-RitzmBrgdmOMfzaijUqHFSmOVA4LzO.png"
                alt="CSEC Logo"
                fill
                className="object-contain p-0.5"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.6))",
                }}
              />
            </motion.a>

            {/* Separator */}
            <div className="h-7 w-px bg-white/40"></div>

            {/* HACK Logo - Link to home section */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-sm border-2 border-white overflow-hidden bg-[#19171b]/90 p-1 flex items-center justify-center transition-transform shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              title="HACK 6.0"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29_20250208_222328_0000-50pdDbAwyrTeA1mMlMT3c72vROO2oA.png"
                alt="HACK Logo"
                fill
                className="object-contain p-0.5"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255, 42, 133, 0.6))",
                }}
              />
            </motion.a>

            {/* HACK 6.0 Pure White Text */}
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group ml-1"
            >
              <span
                className={cn(
                  "font-pricedown text-2xl sm:text-3xl tracking-tight text-white transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                  showHackText
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
                )}
              >
                HACK 6.0
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive =
                link.href.startsWith("#") &&
                activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-2 py-1 font-pricedown text-lg xl:text-xl tracking-tight uppercase whitespace-nowrap transition-all duration-300 relative rounded group inline-block",
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] drop-shadow-[0_0_10px_rgba(255,42,133,0.9)] scale-105"
                      : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2a85] hover:via-[#ff75c3] hover:to-[#ff9ebb] hover:drop-shadow-[0_0_10px_rgba(255,42,133,0.9)] hover:scale-105"
                  )}
                >
                  <span>{link.name}</span>
                  {/* Stylized GTA neon extension underline */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 pointer-events-none",
                      isActive
                        ? "w-full bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] shadow-[0_0_10px_rgba(255,42,133,0.9)]"
                        : "w-0 group-hover:w-full bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] shadow-[0_0_8px_rgba(255,42,133,0.8)]"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Devfolio Register CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://hack-1158.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-5 py-2 rounded-lg bg-gradient-to-r from-[#ff2a85] via-[#ff007f] to-[#7928ca] text-white font-pricedown text-xl tracking-wider uppercase border border-[#ff75c3]/60 shadow-[0_0_15px_rgba(255,42,133,0.45),_3px_3px_0px_#00f0ff] hover:shadow-[0_0_25px_rgba(255,42,133,0.85),_4px_4px_0px_#00f0ff] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_0_10px_rgba(255,42,133,0.4),_1px_1px_0px_#00f0ff] transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap"
            >
              {/* Shimmer light-sweep effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-out pointer-events-none" />

              {/* Pulsing live neon indicator */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
              </span>

              <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                Register
              </span>

              {/* GTA Arcade Arrow */}
              <span className="relative z-10 text-[#00f0ff] text-xs transition-transform duration-300 group-hover:translate-x-1 drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]">
                ▶
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ff2a85] hover:bg-[#ff2a85]/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0e0419]/95 backdrop-blur-xl border-b border-[#ff2a85]/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href.startsWith("#") &&
                  activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "px-3 py-1.5 font-pricedown text-xl tracking-tight uppercase transition-all duration-300 rounded relative group inline-block",
                      isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a85] via-[#ff75c3] to-[#00f0ff] drop-shadow-[0_0_10px_rgba(255,42,133,0.8)]"
                        : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff2a85] hover:via-[#ff75c3] hover:to-[#ff9ebb] hover:drop-shadow-[0_0_10px_rgba(255,42,133,0.9)]"
                    )}
                  >
                    <span>{link.name}</span>
                    <span
                      className={cn(
                        "block h-[2px] transition-all duration-300",
                        isActive
                          ? "w-20 bg-gradient-to-r from-[#ff2a85] to-[#00f0ff] shadow-[0_0_8px_rgba(255,42,133,0.8)]"
                          : "w-0 group-hover:w-20 bg-gradient-to-r from-[#ff2a85] to-[#00f0ff]"
                      )}
                    />
                  </a>
                );
              })}

              <a
                href="https://hack-1158.devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden mt-3 py-3 rounded-lg bg-gradient-to-r from-[#ff2a85] via-[#ff007f] to-[#7928ca] text-white font-pricedown text-xl tracking-wider uppercase border border-[#ff75c3]/60 shadow-[0_0_15px_rgba(255,42,133,0.5),_3px_3px_0px_#00f0ff] flex items-center justify-center gap-2.5 transition-all duration-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
                </span>
                <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  Register on Devfolio
                </span>
                <span className="relative z-10 text-[#00f0ff] text-xs drop-shadow-[0_0_6px_rgba(0,240,255,0.8)]">
                  ▶
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
