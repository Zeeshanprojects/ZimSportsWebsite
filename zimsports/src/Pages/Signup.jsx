import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="container-fluid bg d-flex align-items-center justify-content-center min-vh-100">
        <div className="row w-100 d-flex justify-content-center">
          {/* Left Side */}
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column align-items-center justify-content-center text-center left-side mb-4">
            <img src={Image.loginpagelogo} alt="logo" className="logo mb-3" />
            <h4 className="fw-bold">Empowering Your Club Sports Journey</h4>
            <p className=" w-100">
              Access comprehensive team management, detailed match analytics,
              and powerful coaching tools with Zim Sports. Stay connected with
              your team and elevate your game.
            </p>
          </div>

          {/* Right Side - Login Box */}
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="login-box shadow-lg p-5 rounded-4 bg-white">
              <h3 className="fw-bold text-center mb-2">Sign In</h3>
              <p className="text-muted text-center mb-4">
                Access your Zim Sports account
              </p>

              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3 "
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  className="form-control mb-3 "
                  placeholder="Confirm Password"
                  required
                />

                <button
                  type="submit"
                  className="btn w-100 rounded-pill py-2 fw-bold "
                >
                  Register
                </button>

                <p className="text-center mt-4">
                  ALready Registered?{" "}
                  <Link to="/login" className="text-success fw-semibold">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
