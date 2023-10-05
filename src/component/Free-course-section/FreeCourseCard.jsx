import React from "react";
import "./free-course.css";

const FreeCourseCard = ({ item }) => {
  return (
    <div className="free-course-card">
      <div className="card-header">
        <img src={item.imgUrl} alt={item.title} />
      </div>
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>
          Students: {item.students} | Rating: {item.rating}
        </p>
        <br/>
        <a href="#" className="enroll-button">
          Enroll Now
        </a>
        <br/>
      </div>
    </div>
  );
};

export default FreeCourseCard;
