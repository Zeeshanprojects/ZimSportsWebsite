import React, { useState } from "react";
import "../assets/CSS/Player.css"; // keeping same theme style
import Image from "../assets/Images/image";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: "Summer Championship",
      category: "Outdoor",
      sport: "Football",
      teams: 8,
      startDate: "2025-06-10",
      endDate: "2025-06-25",
    },
    {
      id: 2,
      name: "Winter Cup",
      category: "Indoor",
      sport: "Basketball",
      teams: 6,
      startDate: "2025-01-05",
      endDate: "2025-01-20",
    },
    {
      id: 3,
      name: "Beach Showdown",
      category: "Outdoor",
      sport: "Volleyball",
      teams: 10,
      startDate: "2025-08-12",
      endDate: "2025-08-28",
    },
    {
      id: 4,
      name: "Aqua Series",
      category: "Aquatic",
      sport: "Water Polo",
      teams: 5,
      startDate: "2025-03-15",
      endDate: "2025-03-30",
    },
    {
      id: 5,
      name: "Junior League",
      category: "Outdoor",
      sport: "Cricket",
      teams: 12,
      startDate: "2025-09-01",
      endDate: "2025-09-20",
    },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (tournament) => {
    alert(`Editing tournament: ${tournament.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tournament?")) {
      setTournaments(tournaments.filter((t) => t.id !== id));
    }
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="players-main">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Manage Tournaments</h3>
          <button className="btn btn-success px-4 rounded-pill">
            + Add Tournament
          </button>
        </div>

        {/* Tournaments Table */}
        <div className="players-card">
          <table className="players-table w-100 text-center align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Tournament Name</th>
                <th>Category</th>
                <th>Sport</th>
                <th>Total Teams</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tournaments.map((tournament, index) => (
                <tr key={tournament.id}>
                  <td>{index + 1}</td>
                  <td>{tournament.name}</td>
                  <td>{tournament.category}</td>
                  <td>{tournament.sport}</td>
                  <td>{tournament.teams}</td>
                  <td>{tournament.startDate}</td>
                  <td>{tournament.endDate}</td>
                  <td className="position-relative">
                    <div className="dropdown d-inline-block">
                      <button
                        className="action-dropdown-btn d-flex align-items-center justify-content-center"
                        type="button"
                        onClick={() => handleToggleDropdown(tournament.id)}
                      >
                        Actions
                        <img
                          src={Image.downarrow}
                          alt="downarrow"
                          height={10}
                          className="ms-1"
                        />
                      </button>

                      {openDropdown === tournament.id && (
                        <ul className="dropdown-menu show position-absolute custom-dropdown">
                          <li>
                            <button
                              className="dropdown-item edit-item"
                              onClick={() => handleEdit(tournament)}
                            >
                              ✏️ Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item delete-item"
                              onClick={() => handleDelete(tournament.id)}
                            >
                              🗑️ Delete
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
