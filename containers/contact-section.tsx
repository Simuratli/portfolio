"use client";

import { useState } from "react";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="mailto:simuratli@gmail.com"
            aria-label="Email"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Download resume */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-colors shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
}
