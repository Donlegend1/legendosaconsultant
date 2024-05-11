import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Modal,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <>
      <div>
        {/* Preloader */}
        <div className="preloader">
          <div className="loader">
            <div className="loader-outter" />
            <div className="loader-inner" />
            <div className="indicator">
              <svg
                width="16px"
                height="12px">
                <polyline
                  id="back"
                  points="1 6 4 6 6 11 10 1 12 6 15 6"
                />
                <polyline
                  id="front"
                  points="1 6 4 6 6 11 10 1 12 6 15 6"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* End Preloader */}
        {/* Get Pro Button */}
        <ul className="pro-features">
          <a
            className="get-pro"
            href="#">
            Get Pro
          </a>
          <li className="big-title">Pro Version Available on Themeforest</li>
          <li className="title">Pro Version Features</li>
          <li>2+ premade home pages</li>
          <li>20+ html pages</li>
          <li>Color Plate With 12+ Colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working Contact Form With Google Map</li>
          <div className="button">
            <a
              href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879"
              target="_blank"
              className="btn">
              Pro Version Demo
            </a>
            <a
              href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910"
              target="_blank"
              className="btn">
              Buy Pro Version
            </a>
          </div>
        </ul>
        {/* Header Area */}
        <header className="header">
          {/* Topbar */}
          <div className="topbar">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-12">
                  {/* Contact */}
                  <ul className="top-link">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Doctors</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                  {/* End Contact */}
                </div>
                <div className="col-lg-6 col-md-7 col-12">
                  {/* Top Contact */}
                  <ul className="top-contact">
                    <li>
                      <i className="fa fa-phone" />
                      +880 1234 56789
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="mailto:support@yourmail.com">
                        support@yourmail.com
                      </a>
                    </li>
                  </ul>
                  {/* End Top Contact */}
                </div>
              </div>
            </div>
          </div>
          {/* End Topbar */}
          {/* Header Inner */}
          <div className="header-inner">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-12">
                    {/* Start Logo */}
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="img/logo.png"
                          alt="#"
                        />
                      </a>
                    </div>
                    {/* End Logo */}
                    {/* Mobile Nav */}
                    <div className="mobile-nav" />
                    {/* End Mobile Nav */}
                  </div>
                  <div className="col-lg-7 col-md-9 col-12">
                    {/* Main Menu */}
                    <div className="main-menu">
                      <nav className="navigation">
                        <ul className="nav menu">
                          <li className="active">
                            <a href="#">
                              Home <i className="icofont-rounded-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="index.html">Home Page 1</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Doctos </a>
                          </li>
                          <li>
                            <a href="#">Services </a>
                          </li>
                          <li>
                            <a href="#">
                              Pages <i className="icofont-rounded-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="404.html">404 Error</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Blogs <i className="icofont-rounded-down" />
                            </a>
                            <ul className="dropdown">
                              <li>
                                <a href="blog-single.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/*/ End Main Menu */}
                  </div>
                  <div className="col-lg-2 col-12">
                    <div className="get-quote">
                      <a
                        href="appointment.html"
                        className="btn">
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ End Header Inner */}
        </header>
      </div>
    </>
  );
};
export default Header;
