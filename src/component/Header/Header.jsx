import React, { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink,Link } from "react-router-dom"; // Use NavLink instead of Link
import "./header.css";

const navLinks = [
  {
    display: "Home",
    to: "/",
  },
  {
    display: "About",
    to: "/about",
  },
  {
    display: "Courses",
    to: "/courses",
  },
  {
    display: "Login",
    to: "/login",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/" >
              <h2 className="d-flex align-items-center gap-1">
                <i className="ri-pantone-line"></i> Edu Learn
              </h2>
            </Link>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((link, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={link.to} // Use "to" for NavLink
                      activeClassName="active" // Add active class for the current route
                      exact // Optional: Use exact to match the route exactly
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +91 6258439125
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
