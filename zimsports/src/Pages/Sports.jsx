import React, { useState } from "react";
import "../assets/CSS/Player.css"; // using same theme style
import Image from "../assets/Images/image";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Sports() {
  const [sports, setSports] = useState([
    {
      id: 1,
      name: "Volleyball",
      category: "Indoor",
      teamType: "6 Players",
      coach: "Michael Johnson",
    },
    {
      id: 2,
      name: "Beach Volleyball",
      category: "Outdoor",
      teamType: "2 Players",
      coach: "Ali Khan",
    },
    {
      id: 3,
      name: "Water Polo",
      category: "Aquatic",
      teamType: "7 Players",
      coach: "David Lee",
    },
    {
      id: 4,
      name: "Basketball",
      category: "Indoor",
      teamType: "5 Players",
      coach: "John Smith",
    },
    {
      id: 5,
      name: "Football",
      category: "Outdoor",
      teamType: "11 Players",
      coach: "Robert Green",
    },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (sport) => {
    alert(`Editing sport: ${sport.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this sport?")) {
      setSports(sports.filter((s) => s.id !== id));
    }
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="players-main">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Manage Sports</h3>
          <button className="btn btn-success px-4 rounded-pill">
            + Add Sport
          </button>
        </div>

        {/* Sports Table */}
        <div className="players-card">
          <table className="players-table w-100 text-center align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Sport Name</th>
                <th>Category</th>
                <th>Team Type</th>
                <th>Coach Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sports.map((sport, index) => (
                <tr key={sport.id}>
                  <td>{index + 1}</td>
                  <td>{sport.name}</td>
                  <td>{sport.category}</td>
                  <td>{sport.teamType}</td>
                  <td>{sport.coach}</td>
                  <td className="position-relative">
                    <div className="dropdown d-inline-block">
                      <button
                        className="action-dropdown-btn d-flex align-items-center justify-content-center"
                        type="button"
                        onClick={() => handleToggleDropdown(sport.id)}
                      >
                        Actions
                        <img
                          src={Image.downarrow}
                          alt="downarrow"
                          height={10}
                          className="ms-1"
                        />
                      </button>

                      {openDropdown === sport.id && (
                        <ul className="dropdown-menu show position-absolute custom-dropdown">
                          <li>
                            <button
                              className="dropdown-item edit-item"
                              onClick={() => handleEdit(sport)}
                            >
                              ✏️ Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item delete-item"
                              onClick={() => handleDelete(sport.id)}
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
