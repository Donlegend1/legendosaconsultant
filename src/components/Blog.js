import React from "react";

const Blog = () => {
  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Our Tech Blogs</h4>
          <h1 className="display-4">
            Explore Our Latest Tech Articles &amp; News
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.1s">
            <div className="blog-item bg-light rounded p-4">
              <div className="mb-4">
                <h4 className="text-primary mb-2">Programming</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0">
                    <span className="text-dark fw-bold">On</span> Mar 14, 2024
                  </p>
                  <p className="mb-0">
                    <span className="text-dark fw-bold">By</span> John Doe
                  </p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src="/assets/img/blog-1.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="blog-plus-icon">
                  <a
                    href="img/blog-1.jpg"
                    data-lightbox="blog-1"
                    className="btn btn-primary btn-md-square rounded-pill">
                    <i className="fas fa-plus fa-1x" />
                  </a>
                </div>
              </div>
              <div className="my-4">
                <a
                  href="#"
                  className="h4">
                  Mastering JavaScript: Tips and Tricks for Efficient Coding
                </a>
              </div>
              <a
                className="btn btn-primary rounded-pill py-2 px-4"
                href="#">
                Explore More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded p-4">
              <div className="mb-4">
                <h4 className="text-primary mb-2">Web Development</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0">
                    <span className="text-dark fw-bold">On</span> Mar 14, 2024
                  </p>
                  <p className="mb-0">
                    <span className="text-dark fw-bold">By</span> Jane Smith
                  </p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src="/assets/img/blog-2.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="blog-plus-icon">
                  <a
                    href="img/blog-2.jpg"
                    data-lightbox="blog-2"
                    className="btn btn-primary btn-md-square rounded-pill">
                    <i className="fas fa-plus fa-1x" />
                  </a>
                </div>
              </div>
              <div className="my-4">
                <a
                  href="#"
                  className="h4">
                  Building Scalable Web Applications with React and Node.js
                </a>
              </div>
              <a
                className="btn btn-primary rounded-pill py-2 px-4"
                href="#">
                Explore More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
            data-wow-delay="0.5s">
            <div className="blog-item bg-light rounded p-4">
              <div className="mb-4">
                <h4 className="text-primary mb-2">Software Engineering</h4>
                <div className="d-flex justify-content-between">
                  <p className="mb-0">
                    <span className="text-dark fw-bold">On</span> Mar 14, 2024
                  </p>
                  <p className="mb-0">
                    <span className="text-dark fw-bold">By</span> David Lee
                  </p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src="/assets/img/blog-3.jpg"
                  className="img-fluid w-100 rounded"
                  alt="Image"
                />
                <div className="blog-plus-icon">
                  <a
                    href="img/blog-3.jpg"
                    data-lightbox="blog-3"
                    className="btn btn-primary btn-md-square rounded-pill">
                    <i className="fas fa-plus fa-1x" />
                  </a>
                </div>
              </div>
              <div className="my-4">
                <a
                  href="#"
                  className="h4">
                  Agile Development: Best Practices and Implementation
                </a>
              </div>
              <a
                className="btn btn-primary rounded-pill py-2 px-4"
                href="#">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
