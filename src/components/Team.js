import React from "react";

const Team = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4">Meet Our Dedicated Team Members</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.1s">
            <div className="team-item rounded">
              <div className="team-img">
                <img
                  src="/assets/img/team-1.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href="#">
                    <i className="fas fa-share-alt" />
                  </a>
                  <div className="team-icon-share">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                      href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-dark text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">John Doe</h4>
                  <p className="text-muted mb-0">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.3s">
            <div className="team-item rounded">
              <div className="team-img">
                <img
                  src="/assets/img/team-2.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href="#">
                    <i className="fas fa-share-alt" />
                  </a>
                  <div className="team-icon-share">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                      href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-dark text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">Jane Smith</h4>
                  <p className="text-muted mb-0">Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.5s">
            <div className="team-item rounded">
              <div className="team-img">
                <img
                  src="/assets/img/team-3.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href="#">
                    <i className="fas fa-share-alt" />
                  </a>
                  <div className="team-icon-share">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                      href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-dark text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">David Lee</h4>
                  <p className="text-muted mb-0">Lead Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
            data-wow-delay="0.7s">
            <div className="team-item rounded">
              <div className="team-img">
                <img
                  src="/assets/img/team-4.jpg"
                  className="img-fluid w-100 rounded-top"
                  alt="Image"
                />
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                    href="#">
                    <i className="fas fa-share-alt" />
                  </a>
                  <div className="team-icon-share">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-0"
                      href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content bg-dark text-center rounded-bottom p-4">
                <div className="team-content-inner rounded-bottom">
                  <h4 className="text-white">Emily Johnson</h4>
                  <p className="text-muted mb-0">Senior UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
