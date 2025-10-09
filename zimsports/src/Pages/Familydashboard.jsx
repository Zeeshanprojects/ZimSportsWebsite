import Navbar2 from "../Components/Navbar2";

import Image from "../assets/Images/image";

export default function Familydashboard() {
  // ✅ Dashboard summary cards
  const stats = [
    {
      color: "lightgreen",
      number: 3,
      text: "Registered Family Members",
      btn: "View Members",
    },
    {
      color: "purple",
      number: 1,
      text: "Linked Player Profiles",
      btn: "View Players",
    },
    {
      color: "blue",
      number: 2,
      text: "Upcoming Matches",
      btn: "View Schedule",
    },
    {
      color: "red",
      number: 0,
      text: "Pending Approvals",
      btn: "View Requests",
    },
  ];

  // ✅ Sample match data for table
  const matches = [
    {
      id: 1,
      match: "Volleyball Championship",
      type: "National Level",
      date: "Oct 15, 2025",
      time: "6:00 PM",
      venue: "TBD",
      score: "3-1",
      status: "Win",
    },
    {
      id: 2,
      match: "Beach Ball Match",
      type: "Friendly",
      date: "Oct 20, 2025",
      time: "4:00 PM",
      venue: "TBD",
      score: "2-3",
      status: "Loss",
    },
    {
      id: 3,
      match: "Inter-City Tournament",
      type: "Semi-Final",
      date: "Oct 25, 2025",
      time: "8:00 PM",
      venue: "TBD",
      score: "-",
      status: "Scheduled",
    },
  ];

  return (
    <>
      <Navbar2 />
    

      <div className="container-fluid p-5">
        <h2>Hello, Family Member!</h2>
        <p>Here’s an overview of your family’s linked players and activities.</p>

        <div className="stats-grid1">
          {stats.map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>
         <main className="mt-5">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Family Match Records</h3>
            <button className="btn btn-success px-4 rounded-pill">
              + Add Match
            </button>
          </div>

          {/* ✅ Table */}
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
                          m.status === "Completed"
                            ? "completed"
                            : m.status === "Win"
                            ? "win"
                            : m.status === "Loss"
                            ? "loss"
                            : "scheduled"
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
                          <img src={Image.downarrow} alt="downarrow" height={10} />
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
      </main>
      </div>

     
    </>
  );
}
