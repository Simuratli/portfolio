// @ts-nocheck
import { createClient } from "@sanity/client";
import { SanityImagePropType } from "./api.types";
import imageUrlBuilder from "@sanity/image-url";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: "3r114qwm",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const query = `*[_type == "post"]`
  const posts = await client.fetch(query);
  return posts;
}

export async function getUser() {
  const posts = await client.fetch(
    '*[_type == "user"][0]{...,"social": social[]->{title,url,_id}}',
  );
  return posts;
}

export async function getSocialNetworks() {
  const posts = await client.fetch('*[_type == "social"]');
  return posts;
}

export async function getProjects() {
  const posts = await client.fetch('*[_type == "project"] | order(_createdAt asc)');
  return posts;
}

// export async function createPost(post: any) {
//   const result = client.create(post)
//   return result
// }

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImagePropType) {
  return builder.image(source);
}

export async function updateDocumentTitle(_id: string, title: string) {
  const result = client.patch(_id).set({ title });
  return result;
}
