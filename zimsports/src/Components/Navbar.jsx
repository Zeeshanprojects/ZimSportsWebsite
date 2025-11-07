import React from "react";
import Image from "../assets/Images/image";
import { Link } from "react-router-dom";
import "../assets/CSS/Navbar.css";

export default function Navbar() {
 const closeNavbar = () => {
  const toggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  // If the toggler is visible (menu is open on small screen), and menu is shown
  if (
    window.getComputedStyle(toggler).display !== "none" &&
    navbarCollapse.classList.contains("show")
  ) {
    toggler.click(); // This will automatically trigger collapse
  }
};

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  pt-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Image.footerlogo} alt="logo" className="navbar-brand-image" />
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link active" href="#Home" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Categories" onClick={closeNavbar}>
           Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#About" onClick={closeNavbar}>
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Services" onClick={closeNavbar}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Contact" onClick={closeNavbar}>
                  Contact
                </a>
              </li>
            </ul>

            <form className="d-flex ">
              <Link to="/login">
              <button
                className="btn navbar-btn ps-5 pe-5 pt-2 pb-2 shadow-lg"
                type="submit"
              >
                Login
              </button></Link>
              
            </form>
            <hr />
          </div>
        </div>
      
      </nav>
       
    </>
  );
}
