import React, { useState } from "react";
import "../assets/CSS/Player.css";
import Image from "../assets/Images/image";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Players() {
  const [players, setPlayers] = useState([
    { id: 1, name: "John Smith", team: "Eagles", jersey: 10, position: "Forward" },
    { id: 2, name: "Ali Khan", team: "Warriors", jersey: 7, position: "Defender" },
    { id: 3, name: "David Lee", team: "Titans", jersey: 4, position: "Goalkeeper" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    team: "",
    jersey: "",
    position: "",
  });

  // Add player function
  const handleAddPlayer = (e) => {
    e.preventDefault();

    const newEntry = {
      id: players.length > 0 ? players[players.length - 1].id + 1 : 1, // auto-increment ID
      name: newPlayer.name,
      team: newPlayer.team,
      jersey: newPlayer.jersey,
      position: newPlayer.position,
    };

    setPlayers([...players, newEntry]);
    setNewPlayer({ name: "", team: "", jersey: "", position: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <main className="players-main mt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold ">Manage Player Profile</h3>
            <button
              className="btn btn-success px-4 rounded-pill"
              onClick={() => setShowModal(true)}
            >
              + Add Player
            </button>
          </div>

          <div className="players-card">
            <table className="players-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Player Name</th>
                  <th>Team Name</th>
                  <th>Jersey Number</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {players.map((player) => (
                  <tr key={player.id}>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.team}</td>
                    <td>{player.jersey}</td>
                    <td>{player.position}</td>

                    <td>
                      <div className="dropdown">
                        <button
                          className="action-dropdown-btn"
                          type="button"
                          id={`dropdownMenuButton-${player.id}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Actions{" "}
                          <img src={Image.downarrow} alt="downarrow" height={10} />
                        </button>

                        <ul
                          className="dropdown-menu custom-dropdown"
                          aria-labelledby={`dropdownMenuButton-${player.id}`}
                        >
                          <li>
                            <button
                              className="dropdown-item delete-item text-danger"
                              onClick={() => handleDelete(player.id)}
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
      </main>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content modal-content shadow-lg border-0 rounded-4 p-3">
              <div className="modal-header border-0 text-cente">
                <h5 className="modal-title fw-bold text-success w-100 text-center">
                  Add New Player
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleAddPlayer}>
                  <div className="mb-3">
                    <label className="form-label">Player Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPlayer.name}
                      onChange={(e) =>
                        setNewPlayer({ ...newPlayer, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Team Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPlayer.team}
                      onChange={(e) =>
                        setNewPlayer({ ...newPlayer, team: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Jersey Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newPlayer.jersey}
                      onChange={(e) =>
                        setNewPlayer({ ...newPlayer, jersey: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPlayer.position}
                      onChange={(e) =>
                        setNewPlayer({ ...newPlayer, position: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success px-4 rounded-pill">
                      Add Player
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
