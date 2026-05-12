import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A full collection of projects built by Eljan Simuratli — from AI-powered apps to enterprise tooling.",
};

const projects = [
  {
    id: "oyren-ai",
    featured: true,
    title: "Oyren.ai — structured learning companion",
    description:
      "Personal AI initiative (2025–present): structured learning workflows plus document-heavy experimentation with contextual LLMs. Combines spaced repetition, AI summarization, and adaptive quizzes into a single cohesive product.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
    href: "#",
    year: "2025",
  },
  {
    id: "inloya",
    featured: false,
    title: "InLoya — website & admin panel",
    description:
      "Regional loyalty platform: public marketing and product surfaces plus a business admin panel for rewards, campaigns, and customer engagement. Built from design system to production.",
    tags: ["React", "TypeScript", "Node.js"],
    href: "#",
    year: "2024",
  },
  {
    id: "grandmart",
    featured: false,
    title: "Grandmart — tenders, ops & customer engagement",
    description:
      "Centralized tenders and administrative operations surfaced through React-heavy admin experiences — matching the digitization storyline of the résumé, with supplementary CX-facing modules.",
    tags: ["React", "Next.js", "TypeScript"],
    href: "#",
    year: "2024",
  },
  {
    id: "f1-rag",
    featured: false,
    title: "Formula 1 AI RAG Assistant",
    description:
      "Full-stack AI assistant using RAG architecture: document chunking, vector embeddings, semantic retrieval, and LLM response generation — end to end. Answers F1 rules and stats questions with source citations.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Vector DB"],
    href: "#",
    year: "2024",
  },
  {
    id: "notion-clone",
    featured: false,
    title: "Notion Clone",
    description:
      "Full-featured collaborative note-taking app with real-time sync, rich text editing, nested pages, and auth — production deployed on Vercel.",
    tags: ["Next.js", "Convex", "Clerk", "Stripe"],
    href: "#",
    year: "2023",
  },
  {
    id: "dynamics-tools",
    featured: false,
    title: "Microsoft Dynamics 365 Productivity Suite",
    description:
      "10+ advanced productivity tools built for Microsoft Dynamics 365, resulting in an 80% improvement in team workflow efficiency. Includes a Chrome extension that reduced manual task processing time by 90%.",
    tags: ["React", "TypeScript", "Dynamics 365", "Chrome Extension"],
    href: "#",
    year: "2021–present",
  },
];

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-700 transition-colors mb-12 group"
        >
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back home
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Portfolio
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold text-gray-950 leading-none tracking-tight">
            All projects
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
            A collection of work spanning AI-powered tools, enterprise platforms,
            and open-source experiments.
          </p>
        </div>

        {/* Featured */}
        <Card className="mb-5 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer">
          <CardContent className="p-8 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 tracking-widest uppercase">
                Featured Project
              </span>
              <span className="text-xs text-gray-400">{featured.year}</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
                {featured.title}
              </h2>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((project) => (
            <Card
              key={project.id}
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer"
            >
              <CardContent className="p-6 md:p-8 flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-gray-400 shrink-0 mt-0.5">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
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
    </main>
  );
}
