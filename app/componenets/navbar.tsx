"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-utils";
import localFont from "next/font/local";
import { useGlitch } from "react-powerglitch";
import Link from "next/link";

const Hacked_KerX = localFont({
  src: "../../public/fonts/Hacked-KerX.ttf",
  variable: "--custom-font",
  fallback: ["monospace", "sans-serif"],
});

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
          ? "bg-[#0e0419]/90 backdrop-blur-md border-b border-[#ff2a85]/30 py-3 shadow-[0_4px_20px_rgba(255,42,133,0.15)]"
          : "bg-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Hack title */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-md border border-[#ff2a85]/50 group-hover:border-[#00f0ff] transition-colors">
              <Image
                src="/placeholder-logo.png"
                alt="HACK 6.0 Logo"
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div className="w-full h-full bg-[#19171b] flex items-center justify-center font-bold text-[#ff2a85] text-xs">
                H6
              </div>
            </div>

            <span
              className={cn(
                "text-2xl font-bold tracking-wider transition-all duration-300",
                Hacked_KerX.className,
                showHackText
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
              )}
            >
              <span className="text-[#ff2a85] drop-shadow-[0_0_8px_rgba(255,42,133,0.6)]">
                HACK
              </span>{" "}
              <span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
                6.0
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                    "px-3 py-1.5 text-xs xl:text-sm font-mono tracking-wider transition-all uppercase rounded",
                    isActive
                      ? "text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      : "text-gray-300 hover:text-[#ff2a85] hover:bg-[#ff2a85]/5"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Devfolio Register CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://hack-1158.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff2a85] hover:bg-[#ff2a85]/90 text-white font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[#292929] shadow-[3px_3px_0px_#00f0ff] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#00f0ff] transition-all font-bold"
            >
              Register
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
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
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
                      "px-4 py-2.5 text-sm font-mono tracking-wider transition-all uppercase rounded border",
                      isActive
                        ? "text-[#00f0ff] bg-[#00f0ff]/10 border-[#00f0ff]/50"
                        : "text-gray-300 border-transparent hover:border-[#ff2a85]/40 hover:text-[#ff2a85]"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="https://hack-1158.devfolio.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center bg-[#ff2a85] text-white font-mono text-sm uppercase tracking-widest py-3 border border-[#292929] shadow-[3px_3px_0px_#00f0ff] font-bold"
              >
                [ Register on Devfolio ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
