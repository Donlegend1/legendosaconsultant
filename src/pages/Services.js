import React from "react";
import ServicesComponent from "../components/Services";
import Header2 from "../components/Header2";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

const Services = () => {
  return (
    <>
      <Header2 title={'services'}/>
          <ServicesComponent />
          <Testimonial />
          <FAQ />
    </>
  );
};

export default Services;
