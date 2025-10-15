import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Dashboard.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";
import { UserPlus, Trophy, UserCheck, Users, Activity } from "lucide-react";

export default function Dashboard() {
  useEffect(()=>{
    document.title="Admin-Dashboard - Zim Sports"
  })
  return (
    <div className="dashboard-container mt-5">
      <DashboardNavbar />
      <DashboardSidebar />

      {/* Main Dashboard */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h5>Zim Sports Overview</h5>

         <div className="dashboard-buttons">
  <Link to="/team">
    <button className="btn blue-btn">
      <span className="plus">+</span> Add Team
    </button>
  </Link>

  <Link to="/matches">
    <button className="btn green-btn">
      <span className="plus">+</span> Add Match
    </button>
  </Link>

  <Link to="/players">
    <button className="btn purple-btn">
      <span className="plus">+</span> Add Player
    </button>
  </Link>
</div>

        </div>

        <h2>Hello, Admin David Jumani!</h2>
        <p>Your comprehensive sports management overview awaits.</p>

        {/* Stats row1 */}
        <div className="stats-grid1">
          {[
            {
              color: "lightgreen",
              number: 4,
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
              path: "/families",
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <Link to={card.path}>
                <button>{card.btn}</button>
              </Link>
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
              path: "/sports",
            },
            {
              color: "white",
              number: 11,
              text: "Total Matches",
              btn: "View All Matches",
              path: "/matches",
            },
            {
              color: "pink",
              number: 1,
              text: "Total Tournaments",
              btn: "View All Tournaments",
              path: "/tournaments",
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <Link to={card.path}>
                <button>{card.btn}</button>
              </Link>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity-section">
          <h4>Recent Activity</h4>
          <div className="activity-list">
            {[
              {
                icon: <UserPlus className="activity-icon add" />,
                text: "New player <strong>John Smith</strong> added to team Eagles.",
                time: "2 hours ago",
              },
              {
                icon: <Trophy className="activity-icon win" />,
                text: "Team <strong>Falcons</strong> won against Hawks (3-1).",
                time: "4 hours ago",
              },
              {
                icon: <UserCheck className="activity-icon coach" />,
                text: "Coach <strong>Mark Wilson</strong> registered successfully.",
                time: "6 hours ago",
              },
              {
                icon: <Users className="activity-icon team" />,
                text: "New team <strong>Lions</strong> created under Division A.",
                time: "1 day ago",
              },
              {
                icon: <Activity className="activity-icon loss" />,
                text: "Team <strong>Hawks</strong> lost their recent match (1-3).",
                time: "1 day ago",
              },
            ].map((activity, i) => (
              <div key={i} className="activity-card">
                <div className="activity-left">{activity.icon}</div>
                <div className="activity-right">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: activity.text,
                    }}
                  ></p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
