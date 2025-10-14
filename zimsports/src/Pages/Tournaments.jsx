import React, { useState } from "react";
import "../assets/CSS/Player.css";
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
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [newTournament, setNewTournament] = useState({
    name: "",
    category: "",
    sport: "",
    teams: "",
    startDate: "",
    endDate: "",
  });

  // Toggle dropdown
  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Edit
  const handleEdit = (tournament) => {
    setNewTournament(tournament);
    setIsEditing(true);
    setEditId(tournament.id);
    setShowModal(true);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tournament?")) {
      setTournaments(tournaments.filter((t) => t.id !== id));
    }
  };

  // Add or Update Tournament
  const handleAddOrUpdateTournament = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = tournaments.map((t) =>
        t.id === editId ? { ...t, ...newTournament } : t
      );
      setTournaments(updated);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newEntry = {
        id: tournaments.length + 1,
        ...newTournament,
      };
      setTournaments([...tournaments, newEntry]);
    }

    setNewTournament({
      name: "",
      category: "",
      sport: "",
      teams: "",
      startDate: "",
      endDate: "",
    });
    setShowModal(false);
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="players-main mt-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-success">Manage Tournaments</h3>
          <button
            className="btn btn-success px-4 rounded-pill"
            onClick={() => setShowModal(true)}
          >
            + Add Tournament
          </button>
        </div>

        {/* Table */}
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
              {tournaments.map((t, index) => (
                <tr key={t.id}>
                  <td>{index + 1}</td>
                  <td>{t.name}</td>
                  <td>{t.category}</td>
                  <td>{t.sport}</td>
                  <td>{t.teams}</td>
                  <td>{t.startDate}</td>
                  <td>{t.endDate}</td>
                  <td className="position-relative">
                    <div className="dropdown d-inline-block">
                      <button
                        className="action-dropdown-btn d-flex align-items-center justify-content-center"
                        type="button"
                        onClick={() => handleToggleDropdown(t.id)}
                      >
                        Actions
                        <img
                          src={Image.downarrow}
                          alt="downarrow"
                          height={10}
                          className="ms-1"
                        />
                      </button>

                      {openDropdown === t.id && (
                        <ul className="dropdown-menu show position-absolute custom-dropdown">
                          <li>
                            <button
                              className="dropdown-item edit-item"
                              onClick={() => handleEdit(t)}
                            >
                              ✏️ Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item delete-item"
                              onClick={() => handleDelete(t.id)}
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

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-content p-4 shadow-lg border-0 rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-success text-center w-100">
                  {isEditing ? "Edit Tournament" : "Add New Tournament"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleAddOrUpdateTournament}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Tournament Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newTournament.name}
                      onChange={(e) =>
                        setNewTournament({ ...newTournament, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newTournament.category}
                      onChange={(e) =>
                        setNewTournament({ ...newTournament, category: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Sport</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newTournament.sport}
                      onChange={(e) =>
                        setNewTournament({ ...newTournament, sport: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Total Teams</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newTournament.teams}
                      onChange={(e) =>
                        setNewTournament({ ...newTournament, teams: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Start Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={newTournament.startDate}
                        onChange={(e) =>
                          setNewTournament({ ...newTournament, startDate: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">End Date</label>
                      <input
                        type="date"
                        className="form-control"
                        value={newTournament.endDate}
                        onChange={(e) =>
                          setNewTournament({ ...newTournament, endDate: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-success px-4 rounded-pill">
                      {isEditing ? "Update Tournament" : "Add Tournament"}
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
