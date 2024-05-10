import React from "react";
import AboutPage from "../components/About";
import Team from "../components/Team";
import Header2 from "../components/Header2";

const About = () => {
  return (
    <>
      <Header2 title={"about"} />
      <AboutPage />
      <Team />
    </>
  );
};

export default About;
