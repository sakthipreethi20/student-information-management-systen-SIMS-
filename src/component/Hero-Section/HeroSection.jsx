import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* Change the heading */}
              <h2 className="mb-4 hero__title">
                Welcome to Our Online Learning Platform
              </h2>
              {/* Change the paragraph text */}
              <p className="mb-5">
                Explore a world of knowledge and enhance your skills with our
                flexible online courses. Learn at your own pace, anytime and
                anywhere.
              </p>
            </div>
            <div className="search">
              {/* Change the search input placeholder */}
              <input type="text" placeholder="Search for courses" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
