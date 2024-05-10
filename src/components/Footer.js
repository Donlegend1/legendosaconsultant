import React, {useEffect} from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

   useEffect(() => {
     const loadWhatsAppWidget = () => {
       // Replace with your group invite link

       const options = {
         whatsapp: "+2348147122184", // WhatsApp number
         call_to_action: "Chat us now", // Call to action
         position: "left", // Position may be 'right' or 'left'
         pre_filled_message: `Hello, Chat us now`, // WhatsApp pre-filled message
       };

       const proto = document.location.protocol;
       const host = "getbutton.io";
       const url = proto + "//static." + host;

       const script = document.createElement("script");
       script.type = "text/javascript";
       script.async = true;
       script.src = url + "/widget-send-button/js/init.js";

       script.onload = () => {
         window.WhWidgetSendButton.init(host, proto, options);
       };

       document.body.appendChild(script);
     };


     loadWhatsAppWidget();

     // Cleanup function
     return () => {
       // You may want to remove the script when the component unmounts
       // Example: document.body.removeChild(script);
     };
   }, []);

  return (
    <div>
      <Container
        fluid
        className="footer py-5 wow fadeIn"
        data-wow-delay="0.2s">
        <Container>
          <Row className="g-5">
            <Col
              md={6}
              lg={3}>
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="mb-3">
                  Stay updated with our latest news and developments by
                  subscribing to our newsletter.
                </p>
                <InputGroup className="position-relative mx-auto rounded-pill">
                  <FormControl
                    placeholder="Enter your email"
                    className="rounded-pill py-3 ps-4 pe-5"
                  />
                  <Button
                    variant="primary"
                    className="rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    type="button">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}>
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Home
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Services
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> About Us
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Projects
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Testimonials
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Our Team
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2" /> Contact Us
                </a>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}>
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2" /> Central Business
                  District Abuja
                </a>
                <a href="#">
                  <i className="fas fa-envelope me-2" />{" "}
                  legendosaconsultants@gmail.com
                </a>
                <a href="#">
                  <i className="fas fa-phone me-2" /> +2348147122184
                </a>
                <div className="d-flex align-items-center">
                  <a
                    href="https://www.instagram.com/legendosaconsultants?igsh=OGQ5ZDc2ODk2ZA=="
                    className="btn btn-light btn-md-square me-2"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/legendosa-consultants-0795b2303/"
                    className="btn btn-light btn-md-square me-2"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-light btn-md-square me-2"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-light btn-md-square me-2"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="btn btn-light btn-md-square"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              md={6}
              lg={3}>
              <div className="footer-item-post d-flex flex-column">
                <h4 className="text-white mb-4">Popular Posts</h4>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">
                    Programming
                  </p>
                  <a
                    href="#"
                    className="text-body">
                    10 Best Practices for Clean Code
                  </a>
                </div>
                <div className="d-flex flex-column mb-3">
                  <p className="text-uppercase text-primary mb-2">
                    Software Development
                  </p>
                  <a
                    href="#"
                    className="text-body">
                    Agile vs. Waterfall: Choosing the Right Methodology
                  </a>
                </div>
                <div className="footer-btn text-start">
                  <a
                    href="#"
                    className="btn btn-light rounded-pill px-4">
                    View All Posts <i className="fa fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        className="copyright py-4">
        <Container>
          <Row className="g-4 align-items-center">
            <Col
              md={6}
              className="text-center text-md-start mb-md-0">
              <span className="text-body">
                <a
                  href="#"
                  className="border-bottom text-primary">
                  <i className="fas fa-copyright text-light me-2" />
                  Legend OSA Consultants
                </a>
                , All rights reserved.
              </span>
            </Col>
            {/* <Col
              md={6}
              className="text-center text-md-end text-body">
              Legend OSA Consultant{" "}
              <a
                href="https://htmlcodex.com"
                className="border-bottom text-primary">
                HTML Codex
              </a>
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
