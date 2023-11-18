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
            <div className="grid justify-center" key={project._id}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.make}
                  width={500}
                  height={500}
                />
              )}
              <h2
                className="text-4xl bold flex justify-center mt-10"
                key={project._id}
              >
                {project.year} {project.make} {project.model}
              </h2>
              <a
                className="btn flex text-center"
                key="{project_id}"
                href="{/inventory/project.slug}"
              >
                See More Information
              </a>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
