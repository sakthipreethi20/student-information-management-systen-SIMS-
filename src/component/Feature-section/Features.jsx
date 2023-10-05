import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";
import { RiDraftLine, RiDiscussLine, RiContactsBookLine } from 'react-icons/ri';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our courses are taught by industry experts who are passionate about teaching and helping you succeed.                              ",
    icon: <RiDraftLine />,
  },
  {
    title: "All Time Support",
    desc: "Learn at your own pace with 24/7 access to course materials.Whether you're a busy professional or a student, our courses fit your schedule.",
    icon: <RiDiscussLine />,
  },
  {
    title: "Certification",
    desc: " Engage with interactive quizzes, assignments, and discussion forums. Collaborate with fellow learners and enhance your understanding.",
    icon: <RiContactsBookLine />,
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">{item.icon}</h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
