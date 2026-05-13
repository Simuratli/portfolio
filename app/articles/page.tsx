import Link from "next/link";
import Navbar from "@/components/navbar";
import { fetchWritings } from "@/sanity/queries/writings.query";

export const metadata = {
  title: "Articles",
};

export default async function ArticlesPage() {
  const articles = await fetchWritings();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();

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

          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl mb-4">
            60+ articles on frontend development, React architecture,
            TypeScript, and AI — published on Medium.
          </p>

          <a
            href="https://medium.com/@simuratli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-12 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            <span className="border-b border-gray-300 group-hover:border-gray-900 transition-colors pb-px">
              medium.com/@simuratli
            </span>
          </a>

          {/* Article list */}
          <div className="flex flex-col divide-y divide-gray-100">
            {articles.map((article) => (
              <a
                key={article._id}
                href={article.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-xs text-gray-400 font-mono">
                    {formatDate(article.date)}
                  </span>
                  <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug group-hover:underline">
                    {article.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {article.tags?.map((tag) => (
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
