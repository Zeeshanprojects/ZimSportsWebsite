import { useState } from "react";
import "../assets/CSS/Signup.css";
import Image from "../assets/Images/image";

export default function Signup() {
  const [activeTab, setActiveTab] = useState("parent");

  return (
    <div className="signup-container">
      {/* Left Side */}
      <div className="signup-left d-flex align-items-center justify-content-center">
        <img src={Image.accountpage} alt="image" className="logo-size" />
      </div>

      {/* Right Side */}
      <div className="signup-right d-flex flex-column justify-content-center">
        {/* Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "parent" ? "active" : ""}`}
              onClick={() => setActiveTab("parent")}
            >
              Parent
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "coach" ? "active" : ""}`}
              onClick={() => setActiveTab("coach")}
            >
              Coach
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "player" ? "active" : ""}`}
              onClick={() => setActiveTab("player")}
            >
              Player
            </button>
          </li>
        </ul>

        {/* Forms */}
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px", width: "100%" }}>
          {activeTab === "parent" && (
            <form>
              <h3 className="mb-3 text-center">Parent Registration</h3>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter phone number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Child's Name</label>
                <input type="text" className="form-control" placeholder="Enter child name" />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Register as Parent
              </button>
            </form>
          )}

          {activeTab === "coach" && (
            <form>
              <h3 className="mb-3 text-center">Coach Registration</h3>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Experience (Years)</label>
                <input type="number" className="form-control" placeholder="Enter coaching experience" />
              </div>
              <div className="mb-3">
                <label className="form-label">Specialization</label>
                <select className="form-select">
                  <option>Indoor Volleyball</option>
                  <option>Beach Volleyball</option>
                  <option>Youth Training</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register as Coach
              </button>
            </form>
          )}

          {activeTab === "player" && (
            <form>
              <h3 className="mb-3 text-center">Player Registration</h3>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" placeholder="Enter your age" />
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Game</label>
                <select className="form-select">
                  <option>Indoor Volleyball</option>
                  <option>Beach Volleyball</option>
                </select>
              </div>
            
              <button type="submit" className="btn btn-warning w-100">
                Register as Player
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
