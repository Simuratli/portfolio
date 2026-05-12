import { groq } from "next-sanity";
import type { SanityAbout } from "../types";
import { client } from "../client";

// Projection fetches only the fields the UI needs — nothing more.
export const aboutQuery = groq`
  *[_type == "user"][0] {
    _id,
    name,
    surname,
    fullname,
    shortDescription,
    location,
    gmail,
    linkedin,
    github,
    image,
    number,
    cv {
      asset-> { url }
    }
  }
`;

export async function fetchAbout(): Promise<SanityAbout | null> {
  return client.fetch<SanityAbout | null>(aboutQuery);
}
