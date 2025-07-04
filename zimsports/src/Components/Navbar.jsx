import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 fixed-top mb-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Image.logo} alt="logo " className="navbar-brand-image" />
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  Features
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  About us
                </Link>
              </li>
             
              <li className="nav-item ">
                <Link className="nav-link active" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="#">
                  Contact
                </Link>
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
