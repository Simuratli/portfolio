"use client";

import useSkillsData from "@/hooks/use-skills-data";

export default function SkillsSection() {
  const { skillData, skillStatus } = useSkillsData();

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

        {skillStatus === "loading" || skillStatus === "idle" ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : skillStatus === "error" ? (
          <p className="text-sm text-red-400">Failed to load skills.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-gray-100">
            {skillData?.map((category) => (
              <div key={category._id} className="flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase py-6 border-b border-gray-100">
                  {category.category}
                </span>
                {category.skillGroups?.map((group) => (
                  <div
                    key={group.groupName}
                    className="grid grid-cols-[160px_1fr] gap-4 py-5 border-b border-gray-100"
                  >
                    <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase leading-relaxed">
                      {group.groupName}
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {group.skills?.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
