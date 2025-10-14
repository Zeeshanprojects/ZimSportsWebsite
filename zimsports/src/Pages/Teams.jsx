import React, { useState } from "react";
import "../assets/CSS/Team.css";
import Image from "../assets/Images/image";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Teams() {
  const [teams, setTeams] = useState([
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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTeam, setNewTeam] = useState({
    name: "",
    sport: "",
    members: "",
    logo: "",
    status: "Active",
  });
  const [preview, setPreview] = useState(null);

  // Handle text input
  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTeam({ ...newTeam, logo: URL.createObjectURL(file) });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Add team
  const handleAddTeam = (e) => {
    e.preventDefault();

    const newEntry = {
      id: teams.length + 1,
      logo: newTeam.logo || Image.team1,
      name: newTeam.name,
      sport: newTeam.sport,
      members: newTeam.members,
      status: newTeam.status,
    };

    setTeams([...teams, newEntry]);
    setShowModal(false);
    setNewTeam({ name: "", sport: "", members: "", logo: "", status: "Active" });
    setPreview(null);
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <main className="team-main mt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-success">Manage Teams</h3>
            <button
              className="btn btn-success px-4 rounded-pill"
              onClick={() => setShowModal(true)}
            >
              + Add Team
            </button>
          </div>

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
                            <button className="dropdown-item edit-item">
                              ✏️ Edit
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item delete-item">
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

        {/* ===== MODAL ===== */}
        {showModal && (
          <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4 shadow-lg border-0 rounded-4">
                <div className="modal-header border-0 text-center">
                  <h5 className="modal-title fw-bold text-success ">
                    Add New Team
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <form onSubmit={handleAddTeam}>
                    {/* Image Upload */}
                    <div className="mb-3 text-start">
                      <label className="form-label fw-semibold">Team Logo</label>
                      <div className="d-flex flex-column align-items-">
                        {preview ? (
                          <img
                            src={preview}
                            alt="preview"
                            className="rounded-circle mb-2"
                            height={80}
                            width={80}
                            style={{ objectFit: "cover" }}
                          />
                        ) : (
                          <div
                            className="border border-2 border-dashed rounded-circle d-flex align-items-center justify-content-center mb-2"
                            style={{
                              height: "80px",
                              width: "80px",
                              backgroundColor: "#f8f9fa",
                            }}
                          >
                            <span className="text-muted small">No Image</span>
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control w-75"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </div>

                    {/* Team Name */}
                    <div className="mb-3">
                      <label className="form-label ">Team Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newTeam.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Sport */}
                    <div className="mb-3">
                      <label className="form-label ">Sport</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sport"
                        value={newTeam.sport}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Members */}
                    <div className="mb-3">
                      <label className="form-label ">
                        Number of Members
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="members"
                        value={newTeam.members}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-success w-100 rounded-pill py-2 fw-semibold"
                    >
                      Add Team
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
