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

  const [showModal, setShowModal] = useState(false);
  const [newCoach, setNewCoach] = useState({ name: "", team: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdateCoach = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedCoaches = coaches.map((coach) =>
        coach.id === editId ? { ...coach, ...newCoach } : coach
      );
      setCoaches(updatedCoaches);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newId = coaches.length > 0 ? coaches[coaches.length - 1].id + 1 : 1;
      const newEntry = { id: newId, ...newCoach };
      setCoaches([...coaches, newEntry]);
    }

    setShowModal(false);
    setNewCoach({ name: "", team: "" });
  };

  const handleEdit = (coach) => {
    setNewCoach({ name: coach.name, team: coach.team });
    setIsEditing(true);
    setEditId(coach.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this coach?")) {
      setCoaches(coaches.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <div className="coaches-main">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold">Manage Coach Profile</h3>
          <button
            className="btn btn-success px-4 rounded-pill"
            onClick={() => setShowModal(true)}
          >
            + Add Coach
          </button>
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
                  <td>
                    <div className="dropdown">
                      <button
                        className="action-dropdown-btn"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions{" "}
                        <img
                          src={Image.downarrow}
                          alt="downarrow"
                          height={10}
                        />
                      </button>

                      <ul
                        className="dropdown-menu custom-dropdown"
                        aria-labelledby="dropdownMenuButton2"
                      >
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
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-success w-100 text-center">
                  {isEditing ? "Edit Coach" : "Add New Coach"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleAddOrUpdateCoach}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Coach Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCoach.name}
                      onChange={(e) =>
                        setNewCoach({ ...newCoach, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Team Managed</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCoach.team}
                      onChange={(e) =>
                        setNewCoach({ ...newCoach, team: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-success px-4">
                      {isEditing ? "Update" : "Add Coach"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
