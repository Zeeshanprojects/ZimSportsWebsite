import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded admin credentials
  const adminEmail = "test@gmail.com";
  const adminPassword = "Zim12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/dashboard"); // Redirect to admin dashboard
      }, 2000);
    } else {
      toast.error("Invalid email or password!", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="container-fluid login-wrapper">
      <div className="row min-vh-100">
        {/* Left Side Image */}
        <div className="col-lg-6 col-md-12 col-sm-12 signup-left d-flex flex-column align-items-center justify-content-center text-center">
          <img src={Image.accountpage} alt="image" className="position" />
        </div>

        {/* Right Side Form */}
        <div className="col-lg-6 col-md-12 col-sm-12 login-right d-flex align-items-center justify-content-center">
          <div className="login-box shadow p-4 rounded-4 bg-white w-100">
            <div className="loginpage-logo-container">
              <Link to="/" style={{ textDecoration: "none" }}>
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

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}
