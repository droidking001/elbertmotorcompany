import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Cover from "@/components/Cover";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import CreditApp from "@/components/CreditApp";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <Cover />

      <Contact />
      <CreditApp/>
      <Footer />
    </>
  );
}
