import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid login-wrapper">
      <div className="row min-vh-100">
        {/* Left Side Image */}
        <div className=" col-lg-6 col-md-12 col-sm-12 signup-left d-flex flex-column align-items-center justify-content-center text-center  ">
          <img src={Image.accountpage} alt="image" className="position" />
        </div>

        {/* Right Side Form */}
        <div className="col-lg-6 col-md-12 col-sm-12 login-right d-flex align-items-center justify-content-center ">
          <div
            className="login-box shadow p-4 rounded-4 bg-white w-100"
            style={{ maxWidth: "400px" }}
          >
            <div className="loginpage-logo-container">
              <Link to="/">
                <img
                  src={Image.loginpagelogo}
                  alt="logo"
                  className="loginpage-logo"
                  height={60}
                />
              </Link>
            </div>

            <h3 className="fw-bold text-center mb-2">Sign In</h3>
            <p className="text-muted text-center mb-4">
              Access your Zim Sports account
            </p>

            <form>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn btn-success w-100 rounded-pill py-2 fw-bold"
              >
                Sign In
              </button>

              <p className="text-center mt-4">
                Not a Member yet?{" "}
                <Link to="/signup" className="text-success fw-semibold">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
