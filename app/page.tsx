import Navbar from "@/components/navbar";
import FloatingOrb from "@/components/floating-orb";
import FloatingChat from "@/components/floating-chat";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  SelectedWorks,
  SkillsSection,
  WritingSection,
  ContactSection,
} from "@/containers";

export default function Home() {
  return (
    <main>
      {/* Navbar — fixed, always on top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SelectedWorks />
      <SkillsSection />
      <WritingSection />
      <ContactSection />
      <div className="fixed bottom-6 right-6 z-100 flex flex-col items-center gap-3">
        <FloatingChat />
        <FloatingOrb />
      </div>
    </main>
  );
}
