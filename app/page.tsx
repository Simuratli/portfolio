import Navbar from "@/components/navbar";
import ProjectList from "@/components/project-list";
import MarqueeBar from "@/components/marquee-bar";

const works = [
  {
    id: "01",
    title: "StartGlobal – One platform for your business back office.",
    tags: ["Branding", "Design System", "Product Design", "Web Design"],
  },
  {
    id: "02",
    title: "Payper – Smart payment infrastructure for modern businesses.",
    tags: ["Product Design", "Web Design"],
  },
  {
    id: "03",
    title: "Vipline – Exclusive access management reimagined.",
    tags: ["Branding", "Product Design"],
  },
  {
    id: "04",
    title: "Matafy – Your all-in-one digital marketplace.",
    tags: ["Design System", "Web Design"],
  },
  {
    id: "05",
    title: "Fleetsu – Fleet management for the modern era.",
    tags: ["Product Design", "Branding"],
  },
];

export default function Home() {
  return (
    <main>
      {/* Navbar — fixed, always on top, outside stacking contexts */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Sticky hero — stays behind as works section scrolls over it */}
      <section className="sticky top-0 h-dvh flex flex-col bg-white">
        {/* Navbar spacer */}
        <div className="h-[57px]" />
        <div className="flex-1 flex items-center px-6 md:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left — Name & subtitle */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-gray-950">
                I&apos;m Eljan <br />Simuratli.
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-normal">
                I build fast, accessible, and polished interfaces with a sharp eye for detail. Available for work.
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

      {/* Works section — slides over sticky hero on scroll */}
      <section id="works" className="relative z-10 bg-gray-950 px-8 md:px-16 py-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 py-16 border-b border-gray-800"
          >
            <div className="flex flex-col gap-5">
              <span className="text-sm text-gray-500 font-mono">
                {work.id} / {String(works.length).padStart(2, "0")}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight max-w-2xl">
                {work.title}
              </h2>
            </div>
            <div className="flex flex-row md:flex-col gap-2 flex-wrap md:flex-nowrap shrink-0 md:mt-10">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-gray-700 text-xs text-gray-400 uppercase tracking-widest whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
