import React from 'react';

const About = () => {
    return (
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s">
              <div className="about-img">
                <img
                  src="/assets/img/about-3.png"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="/assets/img/about-2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s">
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                Transforming Businesses with Innovative Solutions
              </h1>
              <p className="text ps-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod arcu ante, at viverra urna molestie ac. Proin vel sem
                vitae justo molestie suscipit id id odio. Mauris tincidunt erat
                nisi, sed tempor ligula congue non. Nulla vitae aliquet nunc, eu
                feugiat tortor.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Software Development
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" /> Web
                    Application
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Mobile App Development
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1" />{" "}
                    Cloud Solutions
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-xl-5">
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-3 px-5">
                    Discover More
                  </a>
                </div>
                <div className="col-xl-7 mb-5">
                  <div className="about-customer d-flex position-relative">
                    <div
                      className="position-absolute text-dark"
                      style={{ left: "0", top: "10px" }}>
                      <p className="mb-0">10k+ Trusted</p>
                      <p className="mb-0">Clients Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up">
                        26
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}>
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Projects Completed</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up">
                        5
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}>
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0 text-white">Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up">
                        6
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}>
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
