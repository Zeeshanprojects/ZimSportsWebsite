import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Trophy,
 ClipboardCheck,
  User,
 HeartHandshake,
  Medal,
} from "lucide-react";
import "../assets/CSS/DashboardSidebar.css";

export default function DashboardSidebar() {
  const matches = [
    {
      id: 10,

      match: "Set 18 Black vs SoCal",
      type: "Water Polo",
      date: "Jul 25, 2025",
      time: "10:00 AM",
      venue: "TBD",
      score: "N/A",
      status: "Scheduled",
    },
    {
      id: 11,

      match: "Set 18 Black vs Bulldogs",
      type: "Water Polo",
      date: "Jul 24, 2025",
      time: "03:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
    {
      id: 12,

      match: "T Street 16/3 Nick vs HO'OKAHI A.C. (Game 3)",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "03:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
    {
      id: 13,

      match: "T Street 16/3 Nick vs Opponent Game 2",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "02:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
    {
      id: 15,

      match: "T Street 16/3 Nick vs Sunshine 16 Valley",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "12:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
    {
      id: 16,

      match: "T Street 16/3 Nick vs Prime 16 Adidas",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "2:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
    {
      id: 17,

      match: "T Street 16/3 Nick vs  CV Starlings 16",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "4:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
  ];
  return (
    <>
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li data-tooltip="Home">
            <Link
              to="/dashboard"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Home size={20} />
            </Link>
          </li>
          <li data-tooltip="Teams">
            <Link
              to="/team"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Users size={20} />
            </Link>
          </li>
          <li data-tooltip="Matches">
            <Link
              to="/matches"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Trophy size={20} />
            </Link>
          </li>
          <li data-tooltip="Players">
            <Link
              to="/players"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <User size={20} />
            </Link>
          </li>
          <li data-tooltip="Coaches">
            <Link
              to="/coaches"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ClipboardCheck size={20} />
            </Link>
          </li>
          <li data-tooltip="Families">
            <Link
              to="/families"
              style={{ color: "white", textDecoration: "none" }}
            >
              <HeartHandshake size={20} />
            </Link>
          </li>
          <li data-tooltip="Tournament">
            <Link
              to="/tournaments"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Medal size={20} />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
