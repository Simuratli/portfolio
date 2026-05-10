const experiences = [
  {
    role: "Software Developer",
    company: "UDS Systems",
    location: "Ukraine (Remote)",
    period: "Aug 2021 – Present",
    bullets: [
      "Architected and developed 10+ advanced productivity tools for Microsoft Dynamics 365 using React, Next.js, TypeScript, and Zustand, resulting in an 80% improvement in team workflow efficiency.",
      "Built a Chrome extension that reduced manual task processing time by 90%, streamlining repetitive workflows.",
      "Implemented RAG pipelines and vector embeddings to power AI-driven features, enabling semantic search and context-aware responses in enterprise apps.",
      "Developed and integrated Node.js API layers to support AI and data services, including REST endpoints for embedding generation and LLM orchestration.",
      "Coordinated with development teams across 4 countries (Finland, Germany, Switzerland, Ukraine), reducing communication gaps by 45%.",
      "Optimized React component performance, decreasing application load time by 70%.",
    ],
    stack:
      "JavaScript/TypeScript, React, Next.js, Node.js, Redux, Zustand, Dynamics 365, RAG, OpenAI API, Vector DBs",
  },
  {
    role: "Frontend Developer",
    company: "Pragmatech",
    location: "Azerbaijan",
    period: "Mar 2020 – Jul 2020",
    bullets: [
      "Developed and maintained a company-wide design system covering 15+ components, ensuring 95% UI consistency across consumer platforms.",
      "Built responsive e-commerce web applications, achieving 99.8% cross-browser compatibility.",
      "Mentored junior developers on front-end fundamentals and best practices.",
    ],
    stack: "React, TypeScript, Styled Components, RESTful APIs",
  },
  {
    role: "Front-end Developer",
    company: "Freelance",
    location: "Azerbaijan",
    period: "Jan 2018 – Mar 2020",
    bullets: [
      "Delivered custom web solutions for diverse clients, including Techmarine LTD (ship company website), TVB Group (wallpaper holding), and DataStat (course platform).",
    ],
    stack: "JavaScript, React, HTML/CSS, Node.js",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Experience
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-12">
          Experience &amp; roles
        </h2>

        {/* Entries */}
        <div className="flex flex-col divide-y divide-gray-100">
          {experiences.map((exp) => (
            <div key={exp.company} className="py-10 flex flex-col gap-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-gray-900">
                    {exp.role} — {exp.company}
                  </span>
                  <span className="text-sm text-gray-400">{exp.location}</span>
                </div>
                <span className="text-xs text-gray-400 font-mono shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-gray-600 leading-relaxed"
                  >
                    <span className="text-gray-300 mt-1 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-500">
                  Tech Stack:{" "}
                </span>
                {exp.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
