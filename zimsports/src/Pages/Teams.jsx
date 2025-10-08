import React from "react";
import "../assets/CSS/Team.css";
import Image from "../assets/Images/image"; // assuming you store logos here
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Teams() {
  return (
    <>
    <DashboardNavbar/>
    <DashboardSidebar/>
     <main className="dashboard-main">
         <div className="team-section">
      <div className="team-card">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6>All Registered Teams</h6>
          <button className="btn blue-btn">+ Add Team</button>
        </div>

        {/* Teams Table */}
        <table className="table table-borderless align-middle">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Team Name</th>
              <th>Sport</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <img
                  src={Image.team1}
                  alt="Team 1"
                  className="team-logo"
                />
              </td>
              <td>Set 18 Black</td>
              <td>Volleyball</td>
              <td>
                <button className="btn btn-sm edit-btn me-2">Edit</button>
                <button className="btn btn-sm delete-btn">Delete</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <img
                  src={Image.team2}
                  alt="Team 2"
                  className="team-logo"
                />
              </td>
              <td>Bulldogs</td>
              <td>Basketball</td>
              <td>
                <button className="btn btn-sm edit-btn me-2">Edit</button>
                <button className="btn btn-sm delete-btn">Delete</button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <img
                  src={Image.team3}
                  alt="Team 3"
                  className="team-logo"
                />
              </td>
              <td>HOYAAH A.C.</td>
              <td>Water Polo</td>
              <td>
                <button className="btn btn-sm edit-btn me-2">Edit</button>
                <button className="btn btn-sm delete-btn">Delete</button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>
                <img
                  src={Image.team4}
                  alt="Team 4"
                  className="team-logo"
                />
              </td>
              <td>Thunder Strikers</td>
              <td>Volleyball</td>
              <td>
                <button className="btn btn-sm edit-btn me-2">Edit</button>
                <button className="btn btn-sm delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
     </main>
   </>
    
  );
}
