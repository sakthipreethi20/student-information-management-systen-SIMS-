import React, { Fragment } from "react";
import Header from "../component/Header/Header";
import HeroSection from "../component/Hero-Section/HeroSection";
import CompanySection from "../component/Company-section/Company";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../component/About-us/AboutUs";
import Courses from "../component/Courses-section/Courses";
import ChooseUs from "../component/Choose-us/ChooseUs";
import Features from "../component/Feature-section/Features";
import FreeCourse from "../component/Free-course-section/FreeCourse";

import Testimonials from "../component/Testimonial/Testimonials";

import Newsletter from "../component/Newsletter/Newsletter";
import Footer from "../component/Footer/Footer";

const Home = () => {
  return (
    <>
      <Fragment>
        <Header />
        <br />
        <HeroSection />
        <br />
        <br />
        <CompanySection />
        <br />
        <br />
        <AboutUs />
        <br />
        <br />
        <Courses />
        <br />
        <br />
        <ChooseUs />
        <br />
        <br />
        <Features />
        <br />
        <br />
        <FreeCourse />
        <br />
        <br />
        <Testimonials />
        <br />
        <br />
        <Newsletter />
        <br />
        <br />
        <Footer />
      </Fragment>
      {/* <Router>
        <Routes>
          <Route exact path="/About" element={<About />}></Route>
        </Routes>
      </Router> */}
    </>
  );
};

export default Home;
