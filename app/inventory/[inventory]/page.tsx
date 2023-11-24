"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Cover from "@/components/Cover";
import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { inventory: string };
};

const ProjectPage = ({ params }: Props) => {
  const [project, setProject] = React.useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  console.log(project);

  React.useEffect(() => {
    const fetchProject = async () => {
      try {
        const slug = params.inventory;
        const fetchedProject = await getProject(slug);
        setProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [params.inventory]);

  const handlePrevImage = () => {
    if (project?.image && project.image.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project?.image && project.image.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  if (!project.image || project.image.length === 0) {
    return <div>No images available.</div>;
  }

  return (
    <>
      <Header />
      <div className="py-60">
        <div className="container border mx-auto">
          <div className="grid justify-center" key={project?._id}>
            {project?.image && (
              <div className="text-center">
                <Image
                  src={project.image[currentImageIndex]?.asset?.url}
                  alt={`Image ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
                />
              </div>
            )}
            <h2 className="text-4xl bold text-center mt-10">
              {project?.year} {project?.make} {project?.model}
            </h2>
            <h3 className="text-5xl bold text-center text-red-600 mt-5">
              ${project.price}
            </h3>
            <h3 className="text-3xl bold text-center mt-5">
              {project.miles} miles
            </h3>
            <div className="flex justify-around my-10">
              <button
                className="btn flex text-center"
                onClick={handlePrevImage}
              >
                Previous Image
              </button>
              <button
                className="btn flex text-center"
                onClick={handleNextImage}
              >
                Next Image
              </button>
            </div>
            <div className="text-3xl text-center py-10 space-y-6">
              <PortableText value={project?.details} />
            </div>
            <div className="text-3xl flex justify-center">
              <a className="btn flex text-center" href={"/inventory"}>
                Back To Inventory
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default ProjectPage;
