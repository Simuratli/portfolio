"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import useProjectsData from "@/hooks/use-projects-data";

export default function SelectedWorks() {
  const { projectData, projectStatus } = useProjectsData();

  const featured = projectData?.find((p) => p.featured) ?? null;
  const rest = projectData?.filter((p) => !p.featured) ?? [];

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

        {projectStatus === "loading" || projectStatus === "idle" ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : projectStatus === "error" ? (
          <p className="text-sm text-red-400">Failed to load projects.</p>
        ) : (
          <>
            {/* Featured card */}
            {featured && (
              <Card className="mb-4 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer">
                <CardContent className="p-8 md:p-10 flex flex-col gap-6">
                  <span className="self-start px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 tracking-widest uppercase">
                    Featured Project
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-gray-700">
                      {featured.name}
                    </h3>
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

            {/* Rest — 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rest.map((project) => (
                <Card
                  key={project._id}
                  className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 cursor-pointer"
                >
                  <CardContent className="p-6 md:p-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-gray-700">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {project.smallDescription}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto pt-2">
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
          </>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
          >
            View all projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
