import { groq } from "next-sanity";
import type { SanityProject } from "../types";
import { client } from "../client";

export const projectsQuery = groq`
*[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    description,
    smallDescription,
    detailedDescription,
    image { asset -> { url } },
    featured,
    techStack,
    repositoryUrl,
    liveDemoUrl
  }`;

export async function fetchProjects(): Promise<SanityProject[]> {
  return client.fetch<SanityProject[]>(projectsQuery);
}
