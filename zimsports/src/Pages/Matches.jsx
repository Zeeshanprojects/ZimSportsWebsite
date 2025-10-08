import React from "react";
import "../assets/CSS/Matches.css";
import Image from "../assets/Images/image";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Matches() {
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
      <DashboardNavbar />
      <DashboardSidebar />

      <main className="matches-main">
        <div className="container-fluid">
      <div className="d-flex justify-content-end align-items-center mb-4">
       
        <button className="btn btn-success px-4 rounded-pill">+ Add Matches</button>
      </div>
        
          {/* Table */}
          <div className="matches-card">
            <table className="matches-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Match</th>
                  <th>Date & Time</th>
                  <th>Venue</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {matches.map((m) => (
                  <tr key={m.id}>
                    <td className="id">{m.id}</td>

                    <td className="match-cell">
                     
                      <div className="match-info">
                        <span className="match-name">{m.match}</span>
                        <span className="match-type">{m.type}</span>
                      </div>
                    </td>

                    <td>
                      <div className="date-info">
                        <strong>{m.date}</strong>
                        <p>{m.time}</p>
                      </div>
                    </td>

                    <td>{m.venue}</td>
                    <td>{m.score}</td>

                    <td>
                      <span
                        className={`status-badge ${
                          m.status === "Completed"
                            ? "completed"
                            : "scheduled"
                        }`}
                      >
                        {m.status}
                      </span>
                    </td>

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
