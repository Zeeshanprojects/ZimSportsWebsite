import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/Images/image";
import "../assets/CSS/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react"; // <-- icons

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // <-- new

  // Hardcoded admin credentials
  const adminEmail = "test@gmail.com";
  const adminPassword = "Zim12345";
  const playerEmail = "Player@gmail.com";
  const playerPassword = "Zim12345";
  const coachEmail = "Coach@gmail.com";
  const coachPassword = "Zim12345";
  const parentEmail = "Parent@gmail.com";
  const parentPassword = "Zim12345";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      toast.success("Admin Login Successful!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/dashboard"); // Admin dashboard
      }, 2000);
    } else if (email === playerEmail && password === playerPassword) {
      toast.success("Player Login Successful!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/playerdashboard"); // Player dashboard
      }, 2000);
    } else if (email === coachEmail && password === coachPassword) {
      toast.success("Coach Login Successful!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/coachesdashboard"); // Coach dashboard
      }, 2000);
    } else if (email === parentEmail && password === parentPassword) {
      toast.success("Parent Login Successful!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/familydashboard"); // Parent dashboard
      }, 2000);
    } else {
      toast.error("Invalid email or password!", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="container-fluid login-wrapper" >
      <div className="row min-vh-100">
        {/* Right Side Form */}
        <div className="col-lg-12 col-md-12 col-sm-12 login-right d-flex align-items-center justify-content-center">
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

              {/* Password input with eye toggle */}
              <div className="position-relative mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className=" password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

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
