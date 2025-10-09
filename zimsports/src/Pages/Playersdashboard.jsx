
import Navbar2 from '../Components/Navbar2'
import Sidebar2 from '../Components/Sidebar2'
import Image from '../assets/Images/image';

export default function Playersdashboard() { const matches = [
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
      status: "Scheduled",
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
    {
      id: 13,

      match: "T Street 16/3 Nick vs Opponent Game 2",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "02:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Win",
    },
    {
      id: 15,

      match: "T Street 16/3 Nick vs Sunshine 16 Valley",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "12:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Win",
    },
    {
      id: 16,

      match: "T Street 16/3 Nick vs Prime 16 Adidas",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "2:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Loss",
    },
    {
      id: 17,

      match: "T Street 16/3 Nick vs  CV Starlings 16",
      type: "Volleyball",
      date: "Jun 29, 2025",
      time: "4:00 PM",
      venue: "TBD",
      score: "N/A",
      status: "Completed",
    },
  ];
    
  return (
<>
<Navbar2/>
<Sidebar2/>
<div className='dashboard-main'>
       <h2>Hello, Player!</h2>
        <p>Your comprehensive sports management overview awaits.</p>
          <div className="stats-grid1">
          {[
            {
              color: "lightgreen",
              number: 2,
              text: "Upcoming Matches",
              btn: "View Schedule",
            },
            {
              color: "blue",
              number: 12,
              text: "Total Matches Played",
              btn: "View Match History",
            },
            {
              color: "purple",
              number: 8,
              text: "Win",
              btn: "View Performance",
            },
            {
              color: "red",
              number: 0,
              text: "Losses",
              btn: "View Details",
            },
          ].map((card, i) => (
            <div key={i} className={`cards ${card.color}-card`}>
              <h2>{card.number}</h2>
              <p>{card.text}</p>
              <button>{card.btn}</button>
            </div>
          ))}
        </div>
</div>
  <main className="matches-main p-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className=" ">Matches History</h3>
            <button className="btn btn-success px-4 rounded-pill">
              + Add{" "}
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
</>
  )
}
