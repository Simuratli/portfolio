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
import type { Metadata } from "next";
import bgImage from "@/assets/bg.jpg";

export const metadata: Metadata = {
  title: {
    default: 'Eljan Simuratli - Software Engineer',
    template: '%s | Eljan Simuratli Portfolio',
  },
  description: 'Eljan Simuratli is a software engineer specializing in frontend development, with a passion for creating intuitive and engaging user experiences. With expertise in React, TypeScript, and modern web technologies, Eljan has a proven track record of delivering high-quality applications. He is dedicated to continuous learning and innovation, always striving to stay at the forefront of the industry.',
  keywords: ['Eljan Simuratli', 'Software Engineer', 'Frontend Developer', 'React', 'TypeScript', 'Web Development', 'User Experience', 'UI/UX', 'Tech Innovator'],
  authors: [{ name: 'Eljan Simuratli', url: 'https://simuratli.com' }],
  creator: 'Eljan Simuratli',
  publisher: 'Eljan Simuratli',
  applicationName: 'Eljan Simuratli Portfolio',
  category: 'Portfolio',
  referrer:'origin-when-cross-origin',
  openGraph:{
    title: 'Eljan Simuratli - Software Engineer',
    description: 'Eljan Simuratli is a software engineer specializing in frontend development, with a passion for creating intuitive and engaging user experiences. With expertise in React, TypeScript, and modern web technologies, Eljan has a proven track record of delivering high-quality applications. He is dedicated to continuous learning and innovation, always striving to stay at the forefront of the industry.',
    url: 'https://simuratli.com',
    siteName: 'Eljan Simuratli Portfolio',
    images: [
    {
      url: bgImage.src,
      width: bgImage.width,
      height: bgImage.height,
      alt: 'Eljan Simuratli Portfolio',
      type: 'image/jpeg',
    },
  ],
  }
}

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
