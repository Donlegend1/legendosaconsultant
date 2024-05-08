import React from 'react';

const Services = () => {
    return (
      <>
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "800px" }}>
              <h4 className="text-primary">Our Services</h4>
              <h1 className="display-4">
                Offering the Best Consulting &amp; Development Solutions
              </h1>
            </div>
            <div className="row g-4 justify-content-center text-center">
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s">
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="/assets/img/service-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a
                        href="#"
                        className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-code fa-2x me-2" /> Web Development
                      </a>
                      <p className="mb-4">
                        Build scalable and responsive web applications using the
                        latest technologies.
                      </p>
                      <a
                        className="btn btn-light rounded-pill py-2 px-4"
                        href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s">
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="/assets/img/service-2.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a
                        href="#"
                        className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-mobile-alt fa-2x me-2" /> Mobile
                        App Development
                      </a>
                      <p className="mb-4">
                        Create native and cross-platform mobile applications
                        tailored to your needs.
                      </p>
                      <a
                        className="btn btn-light rounded-pill py-2 px-4"
                        href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s">
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="/assets/img/service-3.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a
                        href="#"
                        className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-database fa-2x me-2" /> Database
                        Solutions
                      </a>
                      <p className="mb-4">
                        Design and manage robust database solutions for your
                        applications.
                      </p>
                      <a
                        className="btn btn-light rounded-pill py-2 px-4"
                        href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s">
                <div className="service-item bg-light rounded">
                  <div className="service-img">
                    <img
                      src="/assets/img/service-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="service-content text-center p-4">
                    <div className="service-content-inner">
                      <a
                        href="#"
                        className="h4 mb-4 d-inline-flex text-start">
                        <i className="fas fa-tools fa-2x me-2" /> Custom
                        Software Development
                      </a>
                      <p className="mb-4">
                        Get tailor-made software solutions designed to address
                        your unique requirements.
                      </p>
                      <a
                        className="btn btn-light rounded-pill py-2 px-4"
                        href="#">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <a
                  className="btn btn-primary rounded-pill py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                  href="/services">
                  Explore More Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Services;
