import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Images/image";
import "../assets/CSS/Dashboard.css";

export default function DashboardNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white ps-5 pe-3 ">
        {/* Container wrapper */}
        <div className="container">
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
                <Link className="nav-link" to="/dashboard">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/sports">
             Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matches">
                  Matches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/players">
                  Players
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coaches">
                  Coaches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/families">
                  Families
                </Link>
              </li>
            </ul>
          </div>

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
