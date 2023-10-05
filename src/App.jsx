import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/common/login";
import AddStudent from "./component/student/AddStudent";
import StudentsView from "./component/student/StudentsView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";
import Signup from "./component/common/signup";
import Home from "./pages/Home";
import About from "./component/About";
import Courses from "./component/Course";


function App() {
  return (
    <main className="container-fluid mt-3">
      <Router>
        {/* <NavBar></NavBar> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-student" element={<StudentsView />}></Route>
          <Route exact path="/add-student" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}
          ></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          ></Route>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
