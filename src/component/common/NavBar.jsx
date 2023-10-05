import React from "react";
import { Link} from "react-router-dom";
import './Navbar.css'

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  mb-5">
      <Link className="navbar-brand" to={"/"}>
      Edu Learn
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/view-student"}>
              View All Students <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to={"/add-student"}>
              Add new Students
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
