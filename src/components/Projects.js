import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="container-fluid project">
      <Container>
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Our Projects</h4>
          <h1 className="display-4">Explore Our Latest Projects</h1>
        </div>
        <Row
          className="project-carousel wow fadeInUp"
          data-wow-delay="0.1s">
          <Col
            className="project-item h-100"
            md={4}>
            <div className="project-img">
              <img
                src="/assets/img/projects-1.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="project-content bg-light rounded p-4">
              <div className="project-content-inner">
                <div className="project-icon mb-3">
                  <i className="fas fa-code fa-4x text-primary" />
                </div>
                <p className="text-dark fs-5 mb-3">Web Development</p>
                <a
                  href="#"
                  className="h4">
                  Responsive Web Application Development using Modern
                  Technologies
                </a>
                <div className="pt-4">
                  <Button
                    className="btn-light rounded-pill py-3 px-5"
                    href="#">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className="project-item h-100"
            md={4}>
            <div className="project-img">
              <img
                src="/assets/img/projects-2.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="project-content bg-light rounded p-4">
              <div className="project-content-inner">
                <div className="project-icon mb-3">
                  <i className="fas fa-mobile-alt fa-4x text-primary" />
                </div>
                <p className="text-dark fs-5 mb-3">Mobile App Development</p>
                <a
                  href="#"
                  className="h4">
                  Cross-platform Mobile App Development for iOS and Android
                </a>
                <div className="pt-4">
                  <Button
                    className="btn-light rounded-pill py-3 px-5"
                    href="#">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className="project-item h-100"
            md={4}>
            <div className="project-img">
              <img
                src="/assets/img/projects-2.jpg"
                className="img-fluid w-100 rounded"
                alt="Image"
              />
            </div>
            <div className="project-content bg-light rounded p-4">
              <div className="project-content-inner">
                <div className="project-icon mb-3">
                  <i className="fas fa-database fa-4x text-primary" />
                </div>
                <p className="text-dark fs-5 mb-3">Database Solutions</p>
                <a
                  href="#"
                  className="h4">
                  Robust Database Solutions for Efficient Data Management
                </a>
                <div className="pt-4">
                  <Button
                    className="btn-light rounded-pill py-3 px-5"
                    href="#">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
