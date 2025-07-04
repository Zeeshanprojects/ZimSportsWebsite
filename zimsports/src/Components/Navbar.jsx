import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Navbar.css";

export default function Navbar() {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 fixed-top mb-5">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link active" href="#Home" onClick={closeNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Features" onClick={closeNavbar}>
                  Features
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
            <form className="d-flex">
              <button
                className="btn btn-success navbar-btn ps-5 pe-5 pt-2 pb-2"
                type="submit"
              >
                Login
              </button>
            </form>
            <hr />
          </div>
        </div>
        <div className="navbar-underline"></div>
      </nav>
    </>
  );
}
