import React from 'react'
import { Home, Users, Trophy, UserCheck, User } from "lucide-react";
import "../assets/CSS/DashboardSidebar.css";
export default function DashboardSidebar() {
  return (
 <>
  {/* Sidebar */}
     <aside className="sidebar">
      <ul>
        <li data-tooltip="Home">
          <Home size={20} />
        </li>
        <li data-tooltip="Teams">
          <Users size={20} />
        </li>
        <li data-tooltip="Matches">
          <Trophy size={20} />
        </li>
        <li data-tooltip="Players">
          <User size={20} />
        </li>
        <li data-tooltip="Coaches">
          <UserCheck size={20} />
        </li>
      </ul>
    </aside>
 </>
  )
}
