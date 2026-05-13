import { groq } from "next-sanity";
import type { SanitySkill } from "../types";
import { client } from "../client";

export const skillsQuery = groq`
*[_type == "skill"] | order(order asc) {
    _id,
    category,
    order,
    skillGroups[] {
        groupName,
        skills
    }
  }`;

export async function fetchSkills(): Promise<SanitySkill[]> {
  return client.fetch<SanitySkill[]>(skillsQuery);
}
