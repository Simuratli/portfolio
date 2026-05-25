import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { fetchProjects } from "@/sanity/queries/projects.query";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A full collection of projects built by Eljan Simuratli — from AI-powered apps to enterprise tooling.",
};

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  const featured = projects.find((p) => p.featured) ?? null;
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
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
            A collection of interfaces, products, and tools I&apos;ve built —
            focused on clean UI, smooth interactions, and real-world frontend
            engineering.
          </p>
        </div>

        {/* Featured */}
        {featured && (
        <Card className="mb-5 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer">
          <CardContent className="p-8 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 tracking-widest uppercase">
                Featured Project
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
                {featured.name}
              </h2>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {featured.smallDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {featured.techStack?.map((tag) => (
                <span key={tag} className="text-xs text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((project) => (
            <Card
              key={project._id}
              className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer"
            >
              <CardContent className="p-6 md:p-8 flex flex-col gap-4 h-full">
                <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:text-gray-700 transition-colors">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.smallDescription}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.techStack?.map((tag) => (
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
