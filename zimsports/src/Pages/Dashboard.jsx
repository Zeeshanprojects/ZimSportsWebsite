import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Dashboard.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import { Home, Users, Trophy, UserCheck, Settings } from "lucide-react";
import Image from "../assets/Images/image";
import DashboardSidebar from "../Components/DashboardSidebar";
import DashboardFooter from "../Components/DashboardFooter";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
     <DashboardNavbar/>

     <DashboardSidebar/>

      {/* Main Dashboard */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h5>Zim Sports Overview</h5>

          <div className="dashboard-buttons">
            <button className="btn blue-btn">
              <span className="plus">+</span> Add Team
            </button>
            <button className="btn green-btn">
              <span className="plus">+</span> Add Match
            </button>
            <button className="btn purple-btn">
              <span className="plus">+</span> Add Player
            </button>
          </div>
        </div>
        <h2>Hello, Admin David Jumani!</h2>
        <p>Your comprehensive sports management overview awaits.</p>

        {/* Stats row1 */}
        <div className="stats-grid1">
          {[
            {
              color: "lightgreen",
              number:4,
              text: "Total Teams",
              btn: "View All Teams",
            },
            {
              color: "purple",
              number: 22,
              text: "Total Players",
              btn: "View All Players",
            },
            {
              color: "blue",
              number: 4,
              text: "Total Coaches",
              btn: "View All Coaches",
            },
            {
              color: "red",
              number: 4,
              text: "Total Family Profiles",
              btn: "View All Families",
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>
        {/* Stats row2 */}
        <div className="stats-grid2">
          {[
            {
              color: "yellow",
              number: 5,
              text: "Total Sports",
              btn: "View All Sports",
            },
            {
              color: "white",
              number: 11,
              text: "Total Matches",
              btn: "View All Matches",
            },
            {
              color: "pink",
              number: 1,
              text: "Total Tournaments",
              btn: "View All Tournaments",
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>

        {/* Bottom Sections */}
        {/* <div className="bottom-section">
        
          <div className="match-card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">Upcoming Matches</h6>
              <button className="btn light-gray-btn">View Full Schedule</button>
            </div>

          
            <div className="match-item d-flex justify-content-between align-items-center mb-3 p-2 rounded">
              <div className="team d-flex align-items-center">
                <img src={Image.team1} alt="team1" className="team-logo me-2" />
                <h6 className="mb-0">Columbus Fury</h6>
              </div>

              <div className="match-info text-center">
                <p className="mb-1 small text-muted">Sat, Oct 12, 2025</p>
                <p className="mb-1 small">Time: 7:30 PM</p>
              </div>

              <div className="team d-flex align-items-center justify-content-end">
                <h6 className="mb-0 me-2">Orlando Valkyries</h6>
                <img src={Image.team2} alt="team2" className="team-logo" />
              </div>
            </div>

        
            <div className="match-item d-flex justify-content-between align-items-center mb-3 p-2 rounded">
              <div className="team d-flex align-items-center">
                <img src={Image.team3} alt="team3" className="team-logo me-2" />
                <h6 className="mb-0">Atlanta Aces</h6>
              </div>

              <div className="match-info text-center">
                <p className="mb-1 small text-muted">Sun, Oct 19, 2025</p>
                <p className="mb-1 small">Time: 6:00 PM</p>
              </div>

              <div className="team d-flex align-items-center justify-content-end">
                <h6 className="mb-0 me-2">Denver Dazzle</h6>
                <img src={Image.team4} alt="team4" className="team-logo" />
              </div>
            </div>

    
            <div className="match-item d-flex justify-content-between align-items-center p-2 rounded">
              <div className="team d-flex align-items-center">
                <img src={Image.team5} alt="team5" className="team-logo me-2" />
                <h6 className="mb-0">Grand Rapids Rise</h6>
              </div>

              <div className="match-info text-center">
                <p className="mb-1 small text-muted">Fri, Oct 25, 2025</p>
                <p className="mb-1 small">Time: 8:00 PM</p>
              </div>

              <div className="team d-flex align-items-center justify-content-end">
                <h6 className="mb-0 me-2">Omaha Supernovas</h6>
                <img src={Image.team6} alt="team6" className="team-logo" />
              </div>
            </div>
          </div>

          <div className="bottom-card">
            <div className="d-flex justify-content-between align-items-center">
              <h6>Latest Registered Players</h6>
              <button className="btn light-gray-btn">View All Players</button>
            </div>

            <div className="player-info">
              <div className="player-circle">E</div>
              <div>
                <h6>Ellie Jumani (#6)</h6>
                <p>Outside on T Street 16/3 Nick team</p>
              </div>
            </div>
            <div className="player-info">
              <div className="player-circle">A</div>
              <div>
                <h6>Adam Milne (#63)</h6>
                <p>Outside on T Street 16/3 Nick team</p>
              </div>
            </div>
            <div className="player-info">
              <div className="player-circle">R</div>
              <div>
                <h6>Rose Taylore (#000)</h6>
                <p>Outside on T Street 16/3 Nick team</p>
              </div>
            </div>
           
          </div>
        </div> */}

     
        {/* <div className="match-section">
          <div className="match-card">
            <div className="d-flex justify-content-between align-items-center">
              <h6>Latest Completed Matches</h6>
              <button className="btn light-gray-btn">View All Matches</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Match</th>
                  <th>Date & Time</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Set 18 Black vs. Bulldogs</td>
                  <td>Jul 24, 2025 - 03:00 PM</td>
                  <td>3-2</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>T Street 16/3 Nick vs. HOYAAH A.C.</td>
                  <td>Jun 29, 2025 - 03:00 PM</td>
                  <td>8-5</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>T Street 16/3 Nick vs. HOYAAH A.C.</td>
                  <td>Jun 29, 2025 - 03:00 PM</td>
                  <td>3-3</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>T Street 16/3 Nick vs. HOYAAH A.C.</td>
                  <td>Jun 29, 2025 - 03:00 PM</td>
                  <td>5-5</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>T Street 16/3 Nick vs. HOYAAH A.C.</td>
                  <td>Jun 29, 2025 - 03:00 PM</td>
                  <td>6-2</td>
                  <td>
                    <span className="completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </main>
{/* 
    <DashboardFooter/> */}
    </div>
  );
}
