import React from 'react';

const Slidder = () => {

  
    return (
      <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-1">
            <img
              src="/assets/img/carousel-1.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-start p-3">
              <h1
                className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.3s"
                style={{
                  "-webkit-animation-delay": "1.3s",
                  "animation-delay": "1.3s",
                }}>
                The most prestigious Investments company in worldwide.
              </h1>
              <p
                className="mb-5 fs-5 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{
                  "-webkit-animation-delay": "1.5s",
                  "animation-delay": "1.5s",
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{
                  "-webkit-animation-delay": "1.7s",
                  "animation-delay": "1.7s",
                }}
                href="#">
                Apply Now
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-5 mb-4 fadeInUp animate__animated"
                data-animation="fadeInUp"
                data-delay="1.5s"
                style={{
                  "-webkit-animation-delay": "1.7s",
                  "animation-delay": "1.7s",
                }}
                href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="header-carousel-item mx-auto">
          <div className="header-carousel-item-img-2">
            <img
              src="/assets/img/carousel-2.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-center p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">
                The most prestigious Investments company in worldwide.
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                href="#">
                Apply Now
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-5 mb-4"
                href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="header-carousel-item">
          <div className="header-carousel-item-img-3">
            <img
              src="/assets/img/carousel-3.jpg"
              className="img-fluid w-100"
              alt="Image"
            />
          </div>
          <div className="carousel-caption">
            <div className="carousel-caption-inner text-end p-3">
              <h1 className="display-1 text-capitalize text-white mb-4">
                The most prestigious Investments company in worldwide.
              </h1>
              <p className="mb-5 fs-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4"
                href="#">
                Apply Now
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-5 mb-4"
                href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Slidder;
