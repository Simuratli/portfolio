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
  startDate: string;   // ISO date string "YYYY-MM-DD"
  endDate: string | null;
  isPresent: boolean;
}