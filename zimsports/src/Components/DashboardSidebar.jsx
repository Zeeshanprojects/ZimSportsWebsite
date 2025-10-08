import React from 'react'
import { Home, Users, Trophy, UserCheck, Settings } from "lucide-react";
import "../assets/CSS/DashboardSidebar.css";
export default function DashboardSidebar() {
  return (
 <>
  {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>
            <Home size={20} />
          </li>
          <li>
            <Users size={20} />
          </li>
          <li>
            <Trophy size={20} />
          </li>
          <li>
            <UserCheck size={20} />
          </li>
          <li>
            <Settings size={20} />
          </li>
        </ul>
      </aside>
 </>
  )
}
