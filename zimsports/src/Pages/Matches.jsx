import React, { useState } from "react";
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
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <main className="matches-main mt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Manage Matches</h3>
            <button
              className="btn btn-success px-4 rounded-pill"
              onClick={() => setShowModal(true)}
            >
              + Add Match
            </button>
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
                          m.status === "Completed" ? "completed" : "scheduled"
                        }`}
                      >
                        {m.status}
                      </span>
                    </td>

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

        {/* ===== MODAL (UI only) ===== */}
        {showModal && (
          <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4 shadow-lg border-0 rounded-4">
                <div className="modal-header border-0 position-relative">
                  <h5 className="modal-title fw-bold text-success w-100 text-center">
                    Add New Match
                  </h5>
                  <button
                    type="button"
                    className="btn-close position-absolute end-0 me-3"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  <form>
                    {/* Match Name */}
                    <div className="mb-3">
                      <label className="form-label">Match</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter match name"
                      />
                    </div>

                    {/* Date & Time */}
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Time</label>
                        <input type="time" className="form-control" />
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="mb-3">
                      <label className="form-label">Venue</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter venue"
                      />
                    </div>

                    {/* Score */}
                    <div className="mb-3">
                      <label className="form-label">Score</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter score (e.g., 3 - 1)"
                      />
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                      <label className="form-label">Status</label>
                      <select className="form-select">
                        <option>Scheduled</option>
                        <option>Completed</option>
                        <option>Postponed</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className="btn btn-success w-100 rounded-pill py-2 fw-semibold"
                      onClick={() => setShowModal(false)}
                    >
                      Save Match
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
