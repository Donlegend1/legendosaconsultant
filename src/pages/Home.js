import React from "react";
import Services from "../components/Services";
import About from "../components/About";
import Project from "../components/Projects";
import Carousel from "../components/Carousel";
import Blog from "../components/Blog";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <Project />
      <Blog />
      <Team />
      {/* <Testimonial /> */}
      <FAQ />
    </>
  );
}
