"use client";

import { useState } from "react";
import {
  IconCheck,
  IconCopy,
  IconLinkedIn,
  IconEmail,
  IconDownload,
} from "@/assets/icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText("+994508269067");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 bg-gray-50 py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Label */}
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          Contact
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-950 leading-tight tracking-tight">
          Let&apos;s connect
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg">
          I am open to frontend engineer roles and teams where product UI meets
          practical AI (integrations, tooling, or AI-assisted workflows). The
          fastest way to reach me is email or LinkedIn — both are checked
          regularly.
        </p>

        {/* Location + Phone */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Baku, Azerbaijan</span>
          <span className="text-gray-300">·</span>
          <span>+994 50 826 90 67</span>
          <button
            onClick={copyPhone}
            title="Copy phone number"
            className="ml-1 p-1.5 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {copied ? (
              <IconCheck className="w-4 h-4 text-green-500" />
            ) : (
              <IconCopy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Social buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/simuratli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors shadow-sm"
          >
            <IconLinkedIn className="w-5 h-5" />
          </a>
          <a
            href="mailto:simuratli@gmail.com"
            aria-label="Email"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors shadow-sm"
          >
            <IconEmail className="w-5 h-5" />
          </a>
        </div>

        {/* Download resume */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
        >
          <IconDownload className="w-4 h-4" />
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
}
