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
    <div>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a
                  href="#"
                  className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a
                  href="#"
                  className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +2348147122184
                </a>
                <a
                  href="#"
                  className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  legendosaconsultants@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="https://www.instagram.com/legendosaconsultants?igsh=OGQ5ZDc2ODk2ZA=="
                  target="blank"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-instagram text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/legendosa-consultants-0795b2303/"
                  target="blank"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0">
                  <i className="fab fa-whatsapp text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/legendosa-consultants-0795b2303/"
                  target="blank"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0">
                  <i className="fab fa-linkedin-in text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                  <i className="fab fa-twitter text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      // {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <Container
        fluid
        className="sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: "0", top: "0", width: "100%", height: "100%" }}></div>
        <Container>
          <Navbar
            expand="lg"
            bg="white"
            variant="dark"
            className="py-3 px-4">
            <Navbar.Brand href="index.html">
              <h1 className="text-primary m-0">
                {/* <i className="fas fa-donate me-3" /> */}
                <img
                  src="/assets/img/mylogo.png"
                  alt="logo"
                />
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse">
              <span className="fa fa-bars" />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="ms-auto py-0">
                <Nav.Link
                  href="/"
                  className="nav-item">
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className="nav-item">
                  About
                </Nav.Link>
                <Nav.Link
                  href="/services"
                  className="nav-item">
                  Services
                </Nav.Link>
                <Nav.Link
                  href="/project"
                  className="nav-item">
                  Projects
                </Nav.Link>

                <Nav.Link
                  href="/contact"
                  className="nav-item">
                  Contact
                </Nav.Link>
              </Nav>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0">
                <Button
                  variant="primary"
                  size="md"
                  className="mx-2"
                  onClick={handleModalShow}>
                  <i className="fas fa-search" />
                </Button>
                <Button
                  href="#"
                  variant="primary"
                  className="rounded-pill text-white py-2 px-4 ms-2 flex-wrap flex-sm-shrink-0">
                  Get Started
                </Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
      {/* Navbar & Hero End */}
      {/* Modal Search Start */}
      <Modal
        show={showModal}
        onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search by keyword</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
            />
            <span className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </Modal.Body>
      </Modal>
      {/* Modal Search End */}
    </div>
  );
};
export default Header;
