import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/", // Link to your home page
  },
  {
    display: "About Us",
    url: "/about", // Link to your About Us page
  },
  {
    display: "Courses",
    url: "/courses", // Link to your Courses page
  },
  {
    display: "Blog",
    url: "/blog", // Link to your Blog page
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "/privacy-policy", // Link to your Privacy Policy page
  },
  {
    display: "Membership",
    url: "/membership", // Link to your Membership page
  },
  {
    display: "Purchases Guide",
    url: "/purchases-guide", // Link to your Purchases Guide page
  },
  {
    display: "Terms of Service",
    url: "/terms-of-service", // Link to your Terms of Service page
  },
];


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Learners.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a href="https://facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="https://instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Sylhet, Bangladesh</p>
            <p>Phone: +91 6258439125</p>
            <p>Email: edulearn@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
