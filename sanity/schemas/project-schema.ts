const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "make",
      title: "Make",
      type: "string",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "model" },
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
    },
    {
      name: "miles",
      title: "Miles",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
