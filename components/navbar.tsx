"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="relative z-50 w-full flex items-center justify-between px-8 py-4 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="simuratli." />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-900 tracking-tight">
          simuratli.
        </span>
      </Link>

      {/* Menu button + dropdown */}
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors bg-white"
        >
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden py-1">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
