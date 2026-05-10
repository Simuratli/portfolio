import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: "featured",
    featured: true,
    title: "Oyren.ai — structured learning companion",
    description:
      "Personal AI initiative (2025–present): structured learning workflows plus document-heavy experimentation with contextual LLMs.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    href: "#",
  },
  {
    id: "inloya",
    featured: false,
    title: "InLoya — website & admin panel",
    description:
      "Regional loyalty platform: public marketing and product surfaces plus a business admin panel for rewards, campaigns, and customer engagement.",
    tags: ["React", "TypeScript", "Node.js"],
    href: "#",
  },
  {
    id: "grandmart",
    featured: false,
    title: "Grandmart — tenders, ops & customer engagement",
    description:
      "Centralized tenders and administrative operations surfaced through React-heavy admin experiences—matching the digitization storyline of the résumé, with supplementary CX-facing modules.",
    tags: ["React", "Next.js", "TypeScript"],
    href: "#",
  },
  {
    id: "f1-rag",
    featured: false,
    title: "Formula 1 AI RAG Assistant",
    description:
      "Full-stack AI assistant using RAG architecture: document chunking, vector embeddings, semantic retrieval, and LLM response generation — end to end.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Vector DB"],
    href: "#",
  },
  {
    id: "notion-clone",
    featured: false,
    title: "Notion Clone",
    description:
      "Full-featured collaborative note-taking app with real-time sync, rich text editing, nested pages, and auth — production deployed on Vercel.",
    tags: ["Next.js", "Convex", "Clerk", "Stripe"],
    href: "#",
  },
];

export default function SelectedWorks() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="works" className="relative z-10 bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Projects
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-10">
          Selected works
        </h2>

        {/* Featured card */}
        <Card className="mb-4 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer">
          <CardContent className="p-8 md:p-10 flex flex-col gap-6">
            <span className="self-start px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 tracking-widest uppercase">
              Featured Project
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-gray-700">
                {featured.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {featured.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {featured.tags.map((tag) => (
                <span key={tag} className="text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rest — 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((project) => (
            <Card
              key={project.id}
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer"
            >
              <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-gray-700">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
