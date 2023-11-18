import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "6cqgpc9f",
  dataset: "production",
  title: "Elbert Motor Co",
  apiVersion: "2023-11-11",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
