const frontendSkills = [
  { label: "Languages", value: "JavaScript (ES2015+) · TypeScript" },
  {
    label: "UI Stack",
    value:
      "React.js · Next.js · Tailwind CSS · Styled Components · Framer Motion · Shadcn/UI",
  },
  { label: "State", value: "Redux / Redux Toolkit · Zustand · Context API" },
  {
    label: "Data, APIs & Validation",
    value:
      "TanStack Query · React Hook Form · RESTful APIs (Axios) · Yup / Zod",
  },
  { label: "Authentication", value: "JWT · OAuth · NextAuth" },
  { label: "Testing", value: "Cypress · React Testing Library · Vitest" },
  {
    label: "Build & Tooling",
    value: "Vite · Webpack · Micro Frontends · Git · GitHub · Vercel · Netlify",
  },
];

const aiSkills = [
  {
    label: "LLM & Automation",
    value:
      "LLM integrations (OpenAI API) · Prompt engineering · Workflow automation",
  },
  {
    label: "Learning & Exploration",
    value:
      "Python (coursework & hands-on projects) · RAG & embeddings (exploration in projects) · LangChain · Semantic Search",
  },
  { label: "AI Coding Assistants", value: "Cursor · Claude · GitHub Copilot" },
  { label: "Product", value: "Product thinking around AI-heavy flows" },
  {
    label: "Design & CMS",
    value: "Figma · Storybook · Firebase · Contentful · Sanity",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Skills
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-6">
          Stack &amp; tools
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mb-14">
          JavaScript / TypeScript, React / Next.js, state and data-fetching
          discipline, JWT / OAuth tooling, testing (including E2E with Cypress),
          plus LLM integrations and automation — matching the stack called out
          on my CV.
        </p>

        {/* Two-column skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-gray-100">
          {/* Left — Frontend Engineering */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase py-6 border-b border-gray-100">
              Frontend Engineering
            </span>
            {frontendSkills.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[140px_1fr] gap-4 py-5 border-b border-gray-100"
              >
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase leading-relaxed">
                  {item.label}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right — AI & Integration */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase py-6 border-b border-gray-100">
              AI &amp; Integration
            </span>
            {aiSkills.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[160px_1fr] gap-4 py-5 border-b border-gray-100"
              >
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase leading-relaxed">
                  {item.label}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
