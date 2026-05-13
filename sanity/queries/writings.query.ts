import { groq } from "next-sanity";
import type { SanityWriting } from "../types";
import { client } from "../client";

export const writingsQuery = groq`
*[_type == "writing"] | order(date desc) {
    _id,
    name,
    url,
    date,
    description,
    tags
  }`;

export async function fetchWritings(): Promise<SanityWriting[]> {
  return client.fetch<SanityWriting[]>(writingsQuery);
}
