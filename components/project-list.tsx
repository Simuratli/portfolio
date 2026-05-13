"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import useProjectsData from "@/hooks/use-projects-data";

function ProjectItem({ title, href }: { title: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = async () => {
    setHovered(true);
    setArrowVisible(false);
    await controls.start({
      scaleX: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    setArrowVisible(true);
  };

  const handleHoverEnd = () => {
    setHovered(false);
    setArrowVisible(false);
    controls.start({
      scaleX: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  };

  return (
    <li className="relative overflow-hidden">
      <Link
        href={href}
        className="flex items-center justify-between py-4"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <span
          className="text-lg transition-colors duration-300"
          style={{ color: hovered ? "#0a0a0a" : "#1f2937" }}
        >
          {title}
        </span>

        {/* Arrow: slides in from right, clips via overflow-hidden on parent */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 12 }}
          animate={arrowVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ArrowRightIcon
            size={18}
            strokeWidth={1.5}
            className="text-gray-900"
          />
        </motion.div>
      </Link>

      {/* Divider with animated progress bar */}
      <div className="relative h-px bg-gray-100">
        <motion.div
          className="absolute inset-y-0 left-0 right-0 bg-gray-900 origin-left"
          initial={{ scaleX: 0 }}
          animate={controls}
        />
      </div>
    </li>
  );
}

export default function ProjectList() {
  const { projectData, projectStatus } = useProjectsData();

  return (
    <div className="flex flex-col">
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Selected Projects
      </p>

      <ul>
        {projectStatus === "loading" || projectStatus === "idle" ? (
          <li className="py-4 text-sm text-gray-400">Loading…</li>
        ) : projectStatus === "error" ? (
          <li className="py-4 text-sm text-red-400">Failed to load projects.</li>
        ) : (
          projectData?.map((project) => (
            <ProjectItem
              key={project._id}
              title={project.name}
              href={project.liveDemoUrl ?? `/projects/${project.slug.current}`}
            />
          ))
        )}
      </ul>

      <Link
        href="#works"
        className="mt-6 self-start text-sm text-gray-400 hover:text-gray-800 transition-colors border-b border-gray-200 hover:border-gray-800 pb-0.5"
      >
        More →
      </Link>
    </div>
  );
}
