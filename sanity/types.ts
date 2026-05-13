import type { PortableTextBlock } from "@portabletext/react";

// ─── Sanity document shapes ────────────────────────────────────────────────

/** Mirrors the `user` document type defined in the Sanity studio */
export interface SanityAbout {
  _id: string;
  name: string;
  surname: string;
  fullname: string;
  shortDescription: string;
  location: string;
  number: string;
  gmail: string;
  linkedin: string;
  github: string;
  /** GROQ query dereferences the asset so we get the CDN url directly */
  cv: {
    asset: { url: string };
  } | null;
  image: {
    asset: { _ref: string };
    hotspot?: boolean;
  };
}

// ─── Status union keeps loading states explicit and type-safe ────────────────
export type Status = "idle" | "loading" | "success" | "error";

// ─── Education ────────────────────────────────────────────────────────────────
export interface SanityEducation {
  _id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  gpa: number | null;
  startDate: string; // ISO date string "YYYY-MM-DD"
  endDate: string | null;
  isPresent: boolean;
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface SanityExperience {
  _id: string;
  company: string;
  position: string;
  location: string;
  startDate: string; // ISO date string "YYYY-MM-DD"
  endDate: string | null; // null when isPresent is true
  isPresent: boolean;
  description: PortableTextBlock[];
  techStack: string[];
}

// ─── Project ──────────────────────────────────────────────────────────────────
export interface SanityProject {
  _id: string;
  name: string;
  slug: { current: string };
  description: PortableTextBlock[];
  smallDescription: string;
  detailedDescription: PortableTextBlock[];
  image: { asset: { url: string } } | null;
  featured: boolean;
  techStack: string[];
  repositoryUrl: string | null;
  liveDemoUrl: string | null;
}

// ─── Skill ────────────────────────────────────────────────────────────────────
export interface SanitySkillGroup {
  groupName: string;
  skills: string[];
}

export interface SanitySkill {
  _id: string;
  category: string;
  order: number;
  skillGroups: SanitySkillGroup[];
}

// ─── Writing ──────────────────────────────────────────────────────────────────
export interface SanityWriting {
  _id: string;
  name: string;
  url: string | null;
  date: string; // ISO date string "YYYY-MM-DD"
  description: PortableTextBlock[];
  tags: string[];
}
