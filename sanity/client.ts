import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0usd471r",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});