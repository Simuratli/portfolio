import { groq } from "next-sanity";
import type { SanityExperience } from "../types";
import { client } from "../client";

export const experiencesQuery = groq`
*[_type == "experience"] | order(startDate desc) {
    _id,
    company,
    position,
    location,
    startDate,
    isPresent,
    endDate,
    description,
    techStack
  }`;

export async function fetchExperiences(): Promise<SanityExperience[]> {
  return client.fetch<SanityExperience[]>(experiencesQuery);
}
