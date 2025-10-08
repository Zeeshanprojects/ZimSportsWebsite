import React from "react";
import "../assets/CSS/Team.css";
import Image from "../assets/Images/image";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Teams() {
  
  const teams = [
    {
      id: 1,
      logo: Image.team1,
      name: "Set 18 Black",
      sport: "Volleyball",
      members: 11,
      status: "Active",
    },
    {
      id: 2,
      logo: Image.team2,
      name: "Bulldogs",
      sport: "Basketball",
      members: 11,
      status: "Active",
    },
    {
      id: 3,
      logo: Image.team3,
      name: "HOYAAH A.C.",
      sport: "Water Polo",
      members: 11,
      status: "Inactive",
    },
    {
      id: 4,
      logo: Image.team4,
      name: "Thunder Strikers",
      sport: "Volleyball",
      members: 11,
      status: "Active",
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <main className="team-main">
        <div className="container-fluid">
          {/* Header */}
         
          {/* Table */}
          <div className="team-card">
            <table className="team-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Team</th>
                  <th>Sport</th>
                  <th>Players</th>
                  
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team) => (
                  <tr key={team.id}>
                    <td className="id">{team.id}</td>

                    <td className="team-cell">
                      <img src={team.logo} alt="team" className="team-logo" />
                      <div className="team-info">
                        <span className="team-name">{team.name}</span>
                        <span className="team-type">Team #{team.id}</span>
                      </div>
                    </td>

                    <td>{team.sport}</td>
                    <td>{team.members}</td>

                   

                    <td>
                      <button className="action-btn">Actions ▼</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
