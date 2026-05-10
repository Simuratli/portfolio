"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AboutSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AboutSheet({ open, onOpenChange }: AboutSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full! md:w-[60vw]! max-w-none! p-12 flex flex-col gap-10 overflow-y-auto"
      >
        <SheetTitle className="sr-only">About Eljan Simuratli</SheetTitle>
        <SheetDescription className="sr-only">
          Front-end developer based in Baku, Azerbaijan.
        </SheetDescription>

        {/* Top row: avatar + close */}
        <div className="flex items-start justify-between">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/avatar.jpg" alt="Eljan Simuratli" />
            <AvatarFallback className="text-lg">S</AvatarFallback>
          </Avatar>
          <SheetClose className="px-5 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            Close
          </SheetClose>
        </div>

        {/* Bio paragraphs */}
        <div className="flex flex-col gap-6">
          <p className="text-2xl text-gray-800 leading-relaxed font-normal">
            A front-end developer based in the vibrant city of Baku, Azerbaijan.
          </p>
          <p className="text-2xl text-gray-800 leading-relaxed font-normal">
            I&apos;ve spent my career building polished interfaces and I
            absolutely love it. The craft of turning design into pixel-perfect,
            performant code is what drives me.
          </p>
        </div>

        {/* Section */}
        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">
            Building Delightful Experiences
          </h3>
          <p className="text-base text-gray-500 leading-relaxed">
            I thrive on creating interfaces that make a difference. Whether
            it&apos;s collaborating with teams or working solo, my goal is to
            make user experiences fast, beautiful and enjoyable.
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
          <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Node.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 bg-gray-50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
          <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Contact
          </h3>
          {[
            ["Email", "eljan@simuratli.dev"],
            ["GitHub", "github.com/vlockn"],
            ["LinkedIn", "linkedin.com/in/simuratli"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between py-2 border-b border-gray-100"
            >
              <span className="text-sm text-gray-400">{label}</span>
              <span className="text-sm text-gray-900 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
