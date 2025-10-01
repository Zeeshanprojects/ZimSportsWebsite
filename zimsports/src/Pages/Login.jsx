import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css"

export default function Login() {
  return (
    <>
      <div className="container-fluid bg d-flex align-items-center justify-content-center min-vh-100">
        <div className="row w-100 d-flex justify-content-center">
          {/* Left Side */}
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center text-center left-side">
            <img src={Image.loginpagelogo} alt="logo" className="logo mb-3" />
            <h4 className="fw-bold">Empowering Your Club Sports Journey</h4>
            <p className=" w-100">
              Access comprehensive team management, detailed match analytics, and
              powerful coaching tools with Zim Sports. Stay connected with your
              team and elevate your game.
            </p>
          </div>

          {/* Right Side - Login Box */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="login-box shadow-lg p-5 rounded-4 bg-white">
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
                  className="form-control mb-3 "
                  placeholder="Password"
                  required
                />

              

                <button type="submit" className="btn w-100 rounded-pill py-2 fw-bold ">
                  Sign In
                </button>

                <p className="text-center mt-4">
                  Not a Member yet?{" "}
                  <a href="#" className="text-success fw-semibold">
                    Sign up
                  </a>
                </p>
              </form>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
