import { groq } from "next-sanity";
import type { SanityEducation } from "../types";
import { client } from "../client";

export const educationQuery = groq`
  *[_type == "education"] | order(startDate desc) {
    _id,
    school,
    degree,
    fieldOfStudy,
    gpa,
    startDate,
    endDate,
    isPresent
  }
`;

export async function fetchEducation(): Promise<SanityEducation[]> {
  return client.fetch<SanityEducation[]>(educationQuery);
}
