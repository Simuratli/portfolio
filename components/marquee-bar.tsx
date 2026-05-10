"use client";

const items = [
  "Senior Frontend Engineer",
  "Based in Baku, Azerbaijan",
  "5+ years of experience",
  "React · Next.js · TypeScript",
  "RAG & AI integrations",
  "Microsoft Dynamics 365",
  "Open to remote roles",
  "Chrome Extensions",
  "OpenAI API · LangChain",
  "Available for work",
];

export default function MarqueeBar() {
  const repeated = [...items, ...items];

  return (
    <div
      data-marquee
      className="w-full overflow-hidden border-t border-gray-100 bg-[#d4f06e] py-4"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-6 text-base font-medium text-gray-800"
          >
            {item}
            <span className="text-gray-500">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
