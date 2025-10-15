import React from "react";
import "../assets/CSS/Navbar2.css"
import { Link } from "react-router-dom";
import Image from "../assets/Images/image";

export default function Navbar2() {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm py-2 fixed-top ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          {/* ✅ Logo / Brand */}
          <Link className="navbar-brand d-flex align-items-center " to="/">
            <img
              src={Image.logo}
              height={35}
              alt="Company Logo"
              loading="lazy"
            />
          </Link>

          {/* ✅ Right Side Avatar */}
          <div className="d-flex align-items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              className="rounded-circle border border-light shadow-sm"
              height={45}
              width={45}
              alt="player"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>

        </div>
      </nav>
    </>
  );
}
