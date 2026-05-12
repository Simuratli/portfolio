import Link from "next/link";
import Navbar from "@/components/navbar";
import { articles } from "@/containers/writing-section";

export const metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <main>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="pt-14.25 min-h-dvh bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          {/* Label */}
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Blog
          </span>

          {/* Heading */}
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-4">
            All articles
          </h1>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mb-12">
            60+ articles on frontend development, React architecture,
            TypeScript, and AI — published on Medium.
          </p>

          {/* Article list */}
          <div className="flex flex-col divide-y divide-gray-100">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-xs text-gray-400 font-mono">
                    {article.date}
                  </span>
                  <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:underline">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full border border-gray-200 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-900 font-medium shrink-0 sm:mt-6">
                  Read article →
                </span>
              </a>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
