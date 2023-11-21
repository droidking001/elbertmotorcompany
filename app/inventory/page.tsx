"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Project } from "@/types/Project";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      <div className="py-60">
        <div className="container border mx-auto">
          {projects.map((project) => (
            <div className="inline-grid justify-center px-20" key={project._id}>
              {project.image && project.image.length > 0 && (
                <div>
                  <Image
                    src={project.image[0]?.asset?.url} // Access the URL of the first image
                    alt={project.make}
                    width={500}
                    height={500}
                  />
                </div>
              )}
              <h2 className="text-4xl bold flex justify-center mt-10">
                {project.year} {project.make} {project.model}
              </h2>
              <a
                href={`/inventory/${project.slug}`}
                className="btn flex text-center"
                key={project._id}
              >
                See More Information
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
