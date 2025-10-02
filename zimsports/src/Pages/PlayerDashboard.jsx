import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/Images/image"; // import your images here
import "../assets/CSS/PlayerDashboard.css";

export default function PlayerDashboard() {
  const matches = [
    {
      team1: "Team A",
      team2: "Team B",
      time: "10:00 AM",
      img1: Image.team1,
      img2: Image.team2,
    },
    {
      team1: "Team C",
      team2: "Team D",
      time: "1:00 PM",
      img1: Image.team3,
      img2: Image.team4,
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://randomuser.me/api/portraits/men/30.jpg"
            alt="Player"
            className="player-avatar"
          />

          <h4 className="player-name">John Doe</h4>
        </div>
        <ul className="sidebar-menu">
          <li className="active">
            <Link to="/player-dashboard"> Dashboard</Link>
          </li>
          <li>
            <Link to="#"> Matches</Link>
          </li>
          <li>
            <Link to="#">Profile</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
          <li className="logout">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <div className="banner d-flex align-items-center justify-content-between">
          <div>
            <h1 className="banner-title">Welcome, John!</h1>
            <p className="banner-subtitle text-white">
              Track your matches, stats & progress here.
            </p>
          </div>
          <img src={Image.logo2} alt="Banner" className="banner-img" />
        </div>

        {/* Matches Section */}
        <div className="container mt-5">
          <h3 className="section-title mb-4">Upcoming Matches</h3>
          <div className="row g-4">
            {matches.map((match, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <div className="match-card shadow-sm p-3 d-flex align-items-center justify-content-between">
                  {/* Team 1 */}
                  <div className="team text-center">
                    <img
                      src={match.img1}
                      alt={match.team1}
                      className="team-logo"
                    />
                    <h6>{match.team1}</h6>
                  </div>

                  {/* Match Time */}
                  <div className="time">
                    <p className="match-time">{match.time}</p>
                    <span className="vs ">VS</span>
                  </div>

                  {/* Team 2 */}
                  <div className="team text-center">
                    <img
                      src={match.img2}
                      alt={match.team2}
                      className="team-logo"
                    />
                    <h6>{match.team2}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
