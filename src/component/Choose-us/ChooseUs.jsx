import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/why-choose-us.png";
import ReactPlayer from "react-player";
import "./choose-us.css";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="choose-us">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                At our online learning platform, we are committed to providing
                high-quality education to help you achieve your goals. Here's
                why you should choose us:
              </p>
              <ul>
                <li>Wide Range of Courses</li>
                <li>Experienced Instructors</li>
                <li>Flexible Learning</li>
                <li>Interactive Learning Environment</li>
                <li>24/7 Access to Course Material</li>
              </ul>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="Why Choose Us" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon" onClick={() => setShowVideo(!showVideo)}>
                  <i className="ri-play-circle-line"></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
