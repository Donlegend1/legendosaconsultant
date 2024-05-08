import React from "react";

const FAQ = () => {
  return (
    <div className="container-fluid faq py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-delay="0.1s">
            <div className="pb-5">
              <h4 className="text-primary">FAQs</h4>
              <h1 className="display-4">Get the Answers to Common Questions</h1>
            </div>
            <div
              className="accordion bg-light rounded p-4"
              id="accordionExample">
              <div className="accordion-item border-0 mb-4">
                <h2
                  className="accordion-header"
                  id="headingOne">
                  <button
                    className="accordion-button text-dark fs-5 fw-bold rounded-top"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseTOne">
                    What programming languages do you specialize in?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body my-2">
                    <h5>
                      Our team specializes in various programming languages.
                    </h5>
                    <p>
                      We are proficient in JavaScript, Php,  Laravel, React Js, Vue Js, and
                      more. Our expertise allows us to develop high-quality
                      software solutions tailored to our clients' needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-4">
                <h2
                  className="accordion-header"
                  id="headingTwo">
                  <button
                    className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    How do you ensure the security of software applications?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body my-2">
                    <h5>Security is our top priority.</h5>
                    <p>
                      We follow industry best practices and implement robust
                      security measures throughout the software development
                      lifecycle. This includes regular security audits, code
                      reviews, and adherence to security standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-4">
                <h2
                  className="accordion-header"
                  id="headingThree">
                  <button
                    className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Can you handle large-scale software projects?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body my-2">
                    <h5>We excel in large-scale software development.</h5>
                    <p>
                      Our team has extensive experience in managing and
                      executing large-scale software projects. We have the
                      resources and expertise to handle complex requirements and
                      deliver scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mb-0">
                <h2
                  className="accordion-header"
                  id="headingFour">
                  <button
                    className="accordion-button collapsed text-dark fs-5 fw-bold rounded-top"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour">
                    What sets your software development process apart?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body my-2">
                    <h5>We prioritize collaboration and innovation.</h5>
                    <p>
                      Our software development process is characterized by close
                      collaboration with clients, agile methodologies, and a
                      focus on continuous improvement. We leverage cutting-edge
                      technologies and tools to deliver innovative solutions
                      that exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 wow fadeInRight"
            data-wow-delay="0.3s">
            <div className="faq-img RotateMoveRight rounded">
              <img
                src="/assets/img/faq-img.jpg"
                className="img-fluid rounded w-100"
                alt="Image"
              />
              <a
                className="faq-btn btn btn-primary rounded-pill text-white py-3 px-5"
                href="#">
                Read More Q &amp; A <i className="fas fa-arrow-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
