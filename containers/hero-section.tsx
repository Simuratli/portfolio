import ProjectList from "@/components/project-list";
import MarqueeBar from "@/components/marquee-bar";

export default function HeroSection() {
  return (
    <section className="sticky top-0 h-dvh flex flex-col bg-white">
      {/* Navbar spacer */}
      <div className="h-[57px]" />
      <div className="flex-1 flex items-center px-6 md:px-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Name & subtitle */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-gray-950">
              I&apos;m Eljan <br />
              Simuratli.
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-normal">
              I build fast, accessible, and polished interfaces with a sharp eye
              for detail. Available for work.
            </p>
          </div>

          {/* Right — Selected Projects (hidden on mobile) */}
          <div className="hidden md:block">
            <ProjectList />
          </div>
        </div>
      </div>
      <MarqueeBar />
    </section>
  );
}
