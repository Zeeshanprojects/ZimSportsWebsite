import React, { useState } from "react";
import "../assets/CSS/Player.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function Players() {
  const [players, setPlayers] = useState([
    { id: 1, name: "John Smith", team: "Eagles", jersey: 10, position: "Forward" },
    { id: 2, name: "Ali Khan", team: "Warriors", jersey: 7, position: "Defender" },
    { id: 3, name: "David Lee", team: "Titans", jersey: 4, position: "Goalkeeper" },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (player) => {
    alert(`Editing player: ${player.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      setPlayers(players.filter((p) => p.id !== id));
    }
  };

  return (
    <>
    <DashboardNavbar/>
    <DashboardSidebar/>
    <div className="players-main">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold text-success">Players</h4>
        <button className="btn btn-success px-4 rounded-pill">+ Add Player</button>
      </div>

      <div className="players-card">
        <table className="players-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Team Name</th>
              <th>Jersey Number</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.jersey}</td>
                <td>{player.position}</td>
                <td className="position-relative">
                  <button
                    className="action-btn"
                    onClick={() => handleToggleDropdown(player.id)}
                  >
                    Actions ▼
                  </button>

                  {openDropdown === player.id && (
                    <ul className="dropdown-menu show position-absolute player-dropdown">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(player)}
                        >
                          ✏️ Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(player.id)}
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
