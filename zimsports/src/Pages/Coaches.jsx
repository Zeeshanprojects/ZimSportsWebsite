import React, { useState } from "react";
import "../assets/CSS/Coaches.css";
import Image from "../assets/Images/image";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Coaches() {
  const [coaches, setCoaches] = useState([
    { id: 1, name: "Michael Johnson", team: "Eagles" },
    { id: 2, name: "Ahmed Raza", team: "Warriors" },
    { id: 3, name: "Robert Green", team: "Titans" },
    { id: 4, name: "John Smith", team: "Blues" },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (coach) => {
    alert(`Editing coach: ${coach.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this coach?")) {
      setCoaches(coaches.filter((c) => c.id !== id));
    }
  };

  return (
    <>
    <DashboardNavbar/>
    <DashboardSidebar/>
      <div className="coaches-main">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold ">Manage Coach Profile</h3>
        <button className="btn btn-success px-4 rounded-pill">+ Add Coach</button>
      </div>

      <div className="coaches-card">
        <table className="coaches-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coach Name</th>
              <th>Team Managed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coaches.map((coach, index) => (
              <tr key={coach.id}>
                <td>{index + 1}</td>
                <td>{coach.name}</td>
                <td>{coach.team}</td>
                <td className="position-relative">
                                     <div className="dropdown">
                     <div className="dropdown">
  <button
    className="action-dropdown-btn"
    type="button"
    id="dropdownMenuButton2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     Actions <img src={Image.downarrow}alt="downarrow"height={10}/>
  </button>

  <ul
    className="dropdown-menu custom-dropdown"
    aria-labelledby="dropdownMenuButton2"
  >
    <li>
      <button className="dropdown-item edit-item">✏️ Edit</button>
    </li>
    <li>
      <button className="dropdown-item delete-item">🗑️ Delete</button>
    </li>
  </ul>
</div>

  <ul
    className="dropdown-menu custom-dropdown"
    aria-labelledby="dropdownMenuButton2"
  >
    <li>
      <button className="dropdown-item edit-item">✏️ Edit</button>
    </li>
    <li>
      <button className="dropdown-item delete-item">🗑️ Delete</button>
    </li>
  </ul>
</div>

                  {openDropdown === coach.id && (
                    <ul className="dropdown-menu show position-absolute coach-dropdown">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(coach)}
                        >
                          ✏️ Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(coach.id)}
                        >
                          🗑️ Delete
                        </button>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  
  );
}
