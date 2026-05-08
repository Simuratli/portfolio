"use client";

const items = [
  "Front-end Developer",
  "Based in Baku, Azerbaijan",
  "Open for remote roles",
  "3+ years of experience",
  "Available for work",
  "React & Next.js",
  "TypeScript enthusiast",
  "Building polished UIs",
];

export default function MarqueeBar() {
  const repeated = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-t border-gray-100 bg-[#d4f06e] py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-6 text-base font-medium text-gray-800">
            {item}
            <span className="text-gray-500">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
