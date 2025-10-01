import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box shadow p-4 rounded-4 bg-white">
        <div className="loginpage-logo-container">
          <img
            src={Image.loginpagelogo}
            alt="logo"
            className="loginpage-logo"
            height={60}
          />
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
  );
}
