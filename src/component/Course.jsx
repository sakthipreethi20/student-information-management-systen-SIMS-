
import React from "react";
import Courses from "./Courses-section/Courses";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FreeCourse from "./Free-course-section/FreeCourse";

const Course = () => {
  
  return (
    <div>
      <Header/>
      <br/>
      <br/>    
   <Courses/>
   <br/>
   <br/>
   <FreeCourse/>
   <br/>
   <br/>
   <Footer/>
    </div>
  );
};

export default Course;
