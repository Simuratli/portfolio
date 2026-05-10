import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const articles = [
  {
    slug: "niye-virtual-dom-yaranib",
    date: "DEC 15, 2025",
    title: "Niyə Virtual DOM yaranıb?",
    description:
      "Bu məqalə Virtual DOM-un yaranma səbəbləri və brauzerin məzmunu necə anladığı haqqındadır.",
    tags: ["Virtual DOM", "Browser", "Performance"],
    href: "https://medium.com/@simuratli",
  },
  {
    slug: "react-key-nedir",
    date: "DEC 15, 2025",
    title: "React-də `key` nə üçündür və niyə vacibdir?",
    description:
      "`key` anlayışı React-in diff və reconciliation mexanizminin əsas hissəsidir. Bu məqalədə düzgün və səhv istifadənin nəticələri izah olunur.",
    tags: ["React", "Virtual DOM", "Reconciliation"],
    href: "https://medium.com/@simuratli",
  },
  {
    slug: "brauzer-html-dom-render-pipeline",
    date: "DEC 5, 2025",
    title: "Brauzer HTML-i DOM-a necə çevirir (render pipeline)",
    description:
      "Bu məqalə brauzerin HTML-i necə oxuyub DOM-a çevirdiyini və sonradan ekrana necə çəkdiyini addım-addım izah edir.",
    tags: ["Browser", "DOM", "Render pipeline"],
    href: "https://medium.com/@simuratli",
  },
  {
    slug: "typescript-generics",
    date: "NOV 28, 2025",
    title: "TypeScript Generics: Real-world patterns",
    description:
      "A practical guide to TypeScript generics — when to use them, common pitfalls, and patterns that actually appear in production codebases.",
    tags: ["TypeScript", "Patterns"],
    href: "https://medium.com/@simuratli",
  },
  {
    slug: "react-performance-optimisation",
    date: "NOV 10, 2025",
    title: "React performance optimisation in 2025",
    description:
      "From useMemo and useCallback myths to Suspense boundaries and React Server Components — a clear-eyed look at what actually moves the needle.",
    tags: ["React", "Performance"],
    href: "https://medium.com/@simuratli",
  },
  {
    slug: "rag-pipelines-nextjs",
    date: "OCT 22, 2025",
    title: "Building RAG pipelines with Next.js and OpenAI",
    description:
      "How to implement Retrieval-Augmented Generation end-to-end: chunking, embedding, vector search, and LLM response generation inside a Next.js app.",
    tags: ["AI", "RAG", "Next.js"],
    href: "https://medium.com/@simuratli",
  },
];

export default function WritingSection() {
  const featured = articles.slice(0, 3);

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

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {featured.map((article) => (
            <a
              key={article.slug}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:shadow-md transition-shadow"
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-3 flex-1">
                    <span className="text-xs text-gray-400 font-mono">
                      {article.date}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {article.tags.map((tag) => (
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
      </div>
    </section>
  );
}
