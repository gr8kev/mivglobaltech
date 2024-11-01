// Navbar.jsx
import React from "react";
import logo from "./../assets/images/mivlogo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  align-center fixed-top py-1">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Brands
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
          </ul>
          <a href="#" className="btn btn-brand ms-lg-3">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
