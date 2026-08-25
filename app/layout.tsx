import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { signatur, pricedown } from "../lib/fonts";
import HackBackground from "./componenets/background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HACK 6.0 - The Ultimate Hackathon Experience",
  description:
    "Join HACK 6.0, the premier hackathon event for innovators, builders, and dreamers. Compete for prizes, network with industry leaders, and showcase your skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${signatur.variable} ${pricedown.variable} scroll-smooth`}
    >
      <body className="min-h-screen text-foreground bg-[#19171b] antialiased">
        <HackBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
