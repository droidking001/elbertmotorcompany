import { PortableTextBlock } from "sanity";

export type Image = {
  asset: {
    url: string;
  };
  alt: string;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  year: string;
  make: string;
  model: string;
  slug: string;
  image: Image[];
  url: string;
  miles: string;
  price: string;
  details: PortableTextBlock[];
};
