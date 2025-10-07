import React from "react";
import "../assets/CSS/Dashboard.css"
import {
  Home,
  Users,
  Trophy,
  UserCheck,
  Settings,
  Bell,
  Search,
  UserCircle,
  Plus,
} from "lucide-react";
import Image from "../assets/Images/image";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white ms-5 me-5 ">
    {/* Container wrapper */}
    <div className="container-fluid ">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src={Image.logo}
            height={25}
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
          Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Matches
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#">
          Players
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#">
        Coaches
            </a>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
       
        {/* Avatar */}
        <div className="dropdown">
          <a
            data-mdb-dropdown-init=""
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={50}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>


      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li><Home size={20} /></li>
          <li><Users size={20} /></li>
          <li><Trophy size={20} /></li>
          <li><UserCheck size={20} /></li>
          <li><Settings size={20} /></li>
        </ul>
      </aside>

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
            { color: "lightgreen", number: 2, text: "Total Teams", btn: "View All Teams" },
            { color: "purple", number: 1, text: "Total Players", btn: "View All Players" },
            { color: "blue", number: 0, text: "Total Coaches", btn: "View All Coaches" },
            { color: "red", number: 0, text: "Total Family Profiles", btn: "View All Families" },
           
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
           
            { color: "yellow", number: 3, text: "Total Sports", btn: "View All Sports" },
            { color: "white", number: 11, text: "Total Completed Matches", btn: "View Completed Matches" },
            { color: "pink", number: 0, text: "Total Active Matches", btn: "View Active Matches" },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>

        {/* Bottom Sections */}
        <div className="bottom-section">
          <div className="bottom-card">
            <h4>Upcoming Team Schedule</h4>
            <button>Manage Team Schedules</button>
            <p>No upcoming schedule events found for your teams.</p>
          </div>

          <div className="bottom-card">
            <h4>Latest Registered Players</h4>
            <button>View All Players</button>
            <div className="player-info">
              <div className="player-circle">E</div>
              <div>
                <h6>Ellie Jumani (#6)</h6>
                <p>Outside on T Street 16/3 Nick team</p>
                <span>Joined: 3 months ago</span>
              </div>
              <a href="#">View Profile</a>
            </div>
          </div>
        </div>

        {/* Matches Section */}
        <div className="match-section">
          <div className="match-card">
            <h4>Latest Completed Matches</h4>
            <button>View All Matches</button>
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
                  <td>N/A</td>
                  <td><span className="completed">Completed</span></td>
                </tr>
                <tr>
                  <td>T Street 16/3 Nick vs. HOYAAH A.C.</td>
                  <td>Jun 29, 2025 - 03:00 PM</td>
                  <td>N/A</td>
                  <td><span className="completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="match-card">
            <h4>Upcoming Matches</h4>
            <button>View Full Schedule</button>
            <p>No upcoming matches found.</p>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>2025 © Zim Sports</p>
        <div>
          <a href="#">About Us</a> | <a href="#">Support</a> | <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
