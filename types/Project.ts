import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  year: string;
  make: string;
  model: string;
  slug: string;
  image: string;
  miles: string;
  price: string;
  details: PortableTextBlock[];
};
