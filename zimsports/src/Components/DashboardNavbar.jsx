import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Images/image";
import "../assets/CSS/Dashboard.css";

export default function DashboardNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 ">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}

            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={Image.logo} height={25} alt="MDB Logo" loading="lazy" />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Matches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Players
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coaches
                </a>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart" />
            </a>

            {/* Avatar */}

            <img
              // src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              src={Image.cao}
              className="rounded-circle"
              height={50}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </div>
        </div>
        {/* Right elements */}

        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
}
