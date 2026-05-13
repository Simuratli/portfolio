"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import useWritingsData from "@/hooks/use-writings-data";

export default function WritingSection() {
  const { writingData, writingStatus } = useWritingsData();

  const featured = writingData?.slice(0, 3) ?? [];

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();

  return (
    <section id="writing" className="relative z-10 bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Blog
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-4">
          Writing
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mb-12">
          Deep dives into browser internals, React architecture, and frontend
          performance — written for clarity and interview-readiness.
        </p>

        {writingStatus === "loading" || writingStatus === "idle" ? (
          <p className="text-sm text-gray-400">Loading…</p>
        ) : writingStatus === "error" ? (
          <p className="text-sm text-red-400">Failed to load articles.</p>
        ) : (
          <>
            {/* 3-column card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {featured.map((article) => (
                <a
                  key={article._id}
                  href={article.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:shadow-md transition-shadow"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex flex-col gap-3 flex-1">
                        <span className="text-xs text-gray-400 font-mono">
                          {formatDate(article.date)}
                        </span>
                        <h3 className="text-base font-bold text-gray-900 leading-snug">
                          {article.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {article.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full border border-gray-200 text-xs text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-900 font-medium mt-1">
                        Read article →
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* View all */}
            <Link
              href="/articles"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              View all articles
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
