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
                path: "/team",
            },
            {
              color: "purple",
              number: 22,
              text: "Total Players",
              btn: "View All Players",
              path: "/players",
            },
            {
              color: "blue",
              number: 4,
              text: "Total Coaches",
              btn: "View All Coaches",
              path: "/coaches",
            },
            {
              color: "red",
              number: 4,
              text: "Total Family Profiles",
              btn: "View All Families",
              path: "/families"
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
            
              <p>{card.text}</p>
                <Link to={card.path}>
                  <button>{card.btn}</button></Link>
            
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
              path: "/sports"
            },
            {
              color: "white",
              number: 11,
              text: "Total Matches",
              btn: "View All Matches",
              path: "/matches"
            },
            {
              color: "pink",
              number: 1,
              text: "Total Tournaments",
              btn: "View All Tournaments",
              path: "/tournaments"
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>

   

     
       
      </main>
{/* 
    <DashboardFooter/> */}
    </div>
  );
}
