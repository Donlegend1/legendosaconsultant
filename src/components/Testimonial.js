import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const Testimonial = () => {
    return (
      <div className="container-fluid testimonial bg-light py-5">
        <Container>
          <Row className="g-4 align-items-center">
            <Col
              className="wow fadeInLeft"
              data-wow-delay="0.1s"
              xl={4}>
              <div className="h-100 rounded">
                <h4 className="text-primary">Our Feedbacks </h4>
                <h1 className="display-4 mb-4">Clients are Talking</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  atque soluta unde itaque. Consequatur quam odit blanditiis
                  harum veritatis porro.
                </p>
                <Button
                  className="btn-primary rounded-pill text-white py-3 px-5"
                  href="#">
                  Read All Reviews <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Col>
            <Col xl={8}>
              <div
                className="testimonial-carousel owl-carousel wow fadeInUp"
                data-wow-delay="0.1s">
                <div
                  className="testimonial-item bg-white rounded p-4 wow fadeInUp"
                  data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-quote-left fa-3x text-dark me-3" />
                    </div>
                    <p className="mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magnam eos impedit eveniet dolorem culpa ullam incidunt
                      vero quo recusandae nemo? Molestiae doloribus iure,
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="my-auto text-end">
                      <h5>Person Name</h5>
                      <p className="mb-0">Profession</p>
                    </div>
                    <div className="bg-white rounded-circle ms-3">
                      <img
                        src="/assets/img/testimonial-1.jpg"
                        className="rounded-circle p-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "1px solid",
                          borderColor: "var(--bs-primary)",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Repeat similar structure for other testimonial items */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Testimonial;
