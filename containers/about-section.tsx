import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 bg-gray-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          About
        </span>

        {/* Heading */}
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-12">
          About me
        </h2>

        <Card>
          <CardContent className="p-8 md:p-12 flex flex-col gap-10">
            {/* Bio */}
            <div className="flex flex-col gap-5 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Frontend engineer with 5+ years of expertise in React, Next.js,
                and TypeScript. Proven track record building scalable enterprise
                web applications, AI-powered tools with RAG/embeddings, Chrome
                extensions, and Microsoft Dynamics 365 productivity solutions
                across international tech teams.
              </p>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-5 pt-8 border-t border-gray-100">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Education
              </h3>
              <div className="flex flex-col gap-6">
                {[
                  {
                    degree: "MSc, High Energy & Particle Physics",
                    school: "Istanbul University — GPA: 91/100",
                    period: "FEB 2021 – MAY 2023",
                  },
                  {
                    degree: "BSc, Computer Engineering",
                    school: "Azerbaijan State Oil and Industry Academy",
                    period: "SEP 2016 – MAY 2020",
                  },
                ].map((item) => (
                  <div key={item.degree} className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-gray-900">
                      {item.degree}
                    </span>
                    <span className="text-sm text-gray-500">{item.school}</span>
                    <span className="text-xs text-gray-400 mt-0.5">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-5 pt-8 border-t border-gray-100">
              <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                Languages
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { language: "Azerbaijani", level: "Native" },
                  { language: "Turkish", level: "Native" },
                  { language: "English", level: "Intermediate" },
                ].map((item) => (
                  <div
                    key={item.language}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <span className="text-sm text-gray-900 font-medium">
                      {item.language}
                    </span>
                    <span className="text-sm text-gray-400">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
