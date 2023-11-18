import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Cover from "@/components/Cover";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <Cover />
      <div className="py-60">
        <div className="container border mx-auto">
          {projects.map((project) => (
            <div className="flex justify-center" key={project._id}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.make}
                  width={1080}
                  height={1920}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
