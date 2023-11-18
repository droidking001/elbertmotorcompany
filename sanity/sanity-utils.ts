// sanity-utils.ts
import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  try {
    const client = createClient({
      projectId: "6cqgpc9f",
      dataset: "production",
      apiVersion: "2023-11-11",
    });

    const projects = await client.fetch(
      groq`*[_type == 'project']{
          _id,
          _createdAt,
          year,
          make,
          model,
          'slug': slug.current,
          'image': image.asset->url,
          miles,
          price,
          details
      }`
    );

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Rethrow the error to propagate it for further handling
  }
}
