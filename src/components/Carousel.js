import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="display-1 text-capitalize text-white mb-4">
            Accelerate Your Projects with Cutting-Edge Solutions
          </h1>
          <p className="mb-5 fs-5">
            Empower your business with innovative programming solutions. Our
            team delivers high-quality software tailored to your needs.
          </p>
          <a
            className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
            href="#">
            Get Started
          </a>
          <a
            className="btn btn-dark rounded-pill py-3 px-5 mb-4"
            href="#">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/carousel-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="display-1 text-capitalize text-white mb-4">
            Transform Your Business with Innovative Technology
          </h1>
          <p className="mb-5 fs-5">
            Stay ahead of the competition by embracing the latest technological
            advancements. Our experts are here to help you achieve your goals.
          </p>
          <a
            className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
            href="#">
            Get Started
          </a>
          <a
            className="btn btn-dark rounded-pill py-3 px-5 mb-4"
            href="#">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/img/carousel-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="display-1 text-capitalize text-white mb-4">
            Drive Innovation with Expert Programming Solutions
          </h1>
          <p className="mb-5 fs-5">
            Unlock the full potential of your projects with our advanced
            programming solutions. Let's create something amazing together.
          </p>
          <a
            className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
            href="#">
            Get Started
          </a>
          <a
            className="btn btn-dark rounded-pill py-3 px-5 mb-4"
            href="#">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
