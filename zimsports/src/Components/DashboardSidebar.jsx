import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Trophy, UserCheck, User } from "lucide-react";
import "../assets/CSS/DashboardSidebar.css";
export default function DashboardSidebar() {
  return (
    <>
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li data-tooltip="Home">
            <Link to="/dashboard" style={{ color: "inherit", textDecoration: "none" }}>
              <Home size={20} />
            </Link>
          </li>
          <li data-tooltip="Teams">
            <Link to="/team" style={{ color: "inherit", textDecoration: "none" }}>
              <Users size={20} />
            </Link>
          </li>
          <li data-tooltip="Matches">
            <Link to="/matches" style={{ color: "inherit", textDecoration: "none" }}>
              <Trophy size={20} />
            </Link>
          </li>
          <li data-tooltip="Players">
            <Link to="/players" style={{ color: "inherit", textDecoration: "none" }}>
              <User size={20} />
            </Link>
          </li>
          <li data-tooltip="Coaches">
            <Link to="/coaches" style={{ color: "inherit", textDecoration: "none" }}>
              <UserCheck size={20} />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
