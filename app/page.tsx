import Navbar from "./componenets/navbar";
import HeroSection from "./componenets/hero";
import AboutSection from "./componenets/about";
import TimelineSection from "./componenets/timeline";
import PrizeSection from "./componenets/prizes";
import SponsorsSection from "./componenets/sponsors";
import CyberBlade3DSection from "./componenets/cyber-blade-3d";
import ContactSection from "./componenets/contact";
import Footer from "./componenets/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative z-10">
      <Navbar />
      <HeroSection />
      <div className="relative z-20 bg-black shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <AboutSection />
        <TimelineSection />
        <PrizeSection />
        <SponsorsSection />
        <CyberBlade3DSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
