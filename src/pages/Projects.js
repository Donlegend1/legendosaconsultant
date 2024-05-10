import React from "react";
import Project from "../components/Projects";
import Header2 from "../components/Header2";
import FAQ from "../components/FAQ";

const Projects = () => {
  return (
    <>
      <Header2 title={"projects"} />
      <br />
          <Project />
          <FAQ />
    </>
  );
};

export default Projects;
