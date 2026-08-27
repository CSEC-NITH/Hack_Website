import Navbar from "./componenets/navbar";
import HeroSection from "./componenets/hero";
import AboutSection from "./componenets/about";
import TimelineSection from "./componenets/timeline";
import PrizeSection from "./componenets/prizes";
import JudgesSection from "./componenets/judges";
import SponsorsSection from "./componenets/sponsors";
import FaqSection from "./componenets/faq";
import OrganizersSection from "./componenets/organizers";
import TeamSection from "./componenets/team";
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
        <JudgesSection />
        <FaqSection />
        <OrganizersSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
