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
      <div className="py-24">
        <div className="container border mx-auto">
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {projects.map((project) => (
              <div
                className="flex flex-col items-center mb-10"
                key={project._id}
              >
                {project.image && project.image.length > 0 && (
                  <div className="w-full max-w-[400px] h-4/5 relative flex items-center justify-center">
                    <Image
                      src={project.image[0]?.asset?.url}
                      alt={project.make}
                      layout="responsive"
                      width={1200} // Specify the width of the image
                      height={800} // Specify the height of the image
                    />
                  </div>
                )}
                <h2 className="text-4xl font-bold mt-5">
                  {project.year} {project.make} {project.model}
                </h2>
                <a
                  href={`/inventory/${project.slug}`}
                  className="btn text-center mt-2"
                  key={project._id}
                >
                  See More Information
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
