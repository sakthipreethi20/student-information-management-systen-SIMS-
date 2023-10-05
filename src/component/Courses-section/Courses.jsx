import React from "react";
import { Container, Row, Col } from "reactstrap";
import CourseCard from "./CourseCard";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import "./courses.css";

const coursesData = [
  {
    id: "01",
    title: "Web Design Masterclass",
    lesson: 15,
    students: 10.5,
    rating: 4.8,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Graphic Design Essentials",
    lesson: 12,
    students: 8.2,
    rating: 4.5,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX Design Fundamentals",
    lesson: 10,
    students: 6.7,
    rating: 4.6,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Explore our top-rated courses and start your learning journey
                  today. We offer a wide range of subjects to help you achieve
                  your goals.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All Courses</button>
              </div>
            </div>
          </Col>

          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
