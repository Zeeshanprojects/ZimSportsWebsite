import React from "react";
import Image from "../assets/Images/image";
import { Link } from "react-router-dom";
import "../assets/CSS/Navbar.css";

export default function Navbar() {
  const closeNavbar = () => {
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    if (
      window.getComputedStyle(toggler).display !== "none" &&
      navbarCollapse.classList.contains("show")
    ) {
      toggler.click();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Image.logo} alt="logo" className="navbar-brand-image" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {["Home", "Features", "Pricing", "Watch Demo"].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link"
                    href={`#${item}`}
                    onClick={closeNavbar}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="d-flex mt-3 mt-lg-0">
              <Link to="/login">
                <button className="btn btn-primary shadow-lg">
                  Get Started 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ height: "100px" }} />
    </>
  );
}
