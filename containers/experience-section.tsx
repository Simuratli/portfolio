"use client";

import { PortableText } from "@portabletext/react";
import useExperienceData from "@/hooks/use-experience-data";
import { ExperienceSkeleton } from "@/components/skeletons";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ExperienceSection() {
  const {
    experienceData: experiences,
    experienceStatus,
    experienceError,
  } = useExperienceData();

  console.log("Experience data:", experiences);

  return (
    <section id="experience" className="relative z-10 bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Experience
        </span>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-12">
          Experience &amp; roles
        </h2>

        {experienceStatus === "loading" && <ExperienceSkeleton />}

        {experienceStatus === "error" && (
          <p className="text-sm text-red-500">{experienceError}</p>
        )}

        {experienceStatus === "success" && experiences && (
          <div className="flex flex-col divide-y divide-gray-100">
            {experiences.map((exp) => (
              <div key={exp._id} className="py-10 flex flex-col gap-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-gray-900">
                      {exp.position} — {exp.company}
                    </span>
                    <span className="text-sm text-gray-400">
                      {exp.location}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono shrink-0">
                    {formatDate(exp.startDate)}
                    {" – "}
                    {exp.isPresent
                      ? "Present"
                      : exp.endDate
                        ? formatDate(exp.endDate)
                        : ""}
                  </span>
                </div>

                {/* Description (Portable Text) */}
                {exp.description && (
                  <div className="text-sm text-gray-600 leading-relaxed [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['▸'] [&_li]:before:text-gray-300 [&_li]:before:shrink-0">
                    <PortableText value={exp.description} />
                  </div>
                )}

                {/* Tech Stack */}
                {exp.techStack?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
