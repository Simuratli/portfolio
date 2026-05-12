"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useAboutData } from "@/hooks/use-about-data";

function AboutSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-4">
      <div className="h-4 w-3/4 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
    </div>
  );
}

export default function AboutSection() {
  const { data, status, error } = useAboutData();
  console.log("AboutSection render:", { status, error, data }); // Debug log to trace renders and state
  return (
    <section id="about" className="relative z-10 bg-gray-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          About
        </span>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-950 leading-none tracking-tight mb-12">
          About me
        </h2>

        <Card>
          <CardContent className="p-8 md:p-12 flex flex-col gap-10">
            {status === "loading" && <AboutSkeleton />}

            {status === "error" && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {status === "success" && data && (
              <>
                {/* Short bio */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {data.shortDescription}
                </p>

                {/* Contact details */}
                <div className="flex flex-col gap-3 pt-8 border-t border-gray-100">
                  <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Contact
                  </h3>
                  {[
                    { label: "Location", value: data.location },
                    { label: "Email", value: data.gmail },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-2 border-b border-gray-100"
                    >
                      <span className="text-sm text-gray-400">{label}</span>
                      <span className="text-sm text-gray-900 font-medium">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 pt-8 border-t border-gray-100">
                  <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    Links
                  </h3>
                  {[
                    { label: "GitHub", href: data.github },
                    { label: "LinkedIn", href: data.linkedin },
                  ].map(({ label, href }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-2 border-b border-gray-100"
                    >
                      <span className="text-sm text-gray-400">{label}</span>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-900 font-medium hover:underline"
                      >
                        {href}
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
