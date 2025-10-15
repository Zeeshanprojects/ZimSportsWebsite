import React, { useState } from "react";
import "../assets/CSS/Coaches.css";
import Image from "../assets/Images/image";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from "../Components/DashboardNavbar";
import DashboardSidebar from "../Components/DashboardSidebar";

export default function FamilyPage() {
  const [family, setFamily] = useState([
    { id: 1, Fname: "Michael Johnson", Mname: "Tessa", Cname: "Chris", Sport: "Volley Ball" },
    { id: 2, Fname: "Ahmed Raza", Mname: "Bella", Cname: "Tim David", Sport: "Water Polo" },
    { id: 3, Fname: "Robert Green", Mname: "Elisa Robert", Cname: "Southee", Sport: "Basket Ball" },
    { id: 4, Fname: "John Smith", Mname: "Machnorin", Cname: "Brock Lesner", Sport: "Volley Ball" },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEdit = (member) => {
    alert(`Editing Family: ${member.Fname}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setFamily(family.filter((f) => f.id !== id));
    }
  };

  return (
    <>
      <DashboardNavbar />
      <DashboardSidebar />

      <div className="coaches-main mt-5">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold ">Manage Family Profile</h3>
          <button
            className="btn btn-success px-4 rounded-pill"
            onClick={() => setShowModal(true)}
          >
            + Add Family
          </button>
        </div>

        {/* Table Section */}
        <div className="coaches-card">
          <table className="coaches-table w-100 text-center align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Child Name</th>
                <th>Sport</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {family.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}</td>
                  <td>{member.Fname}</td>
                  <td>{member.Mname}</td>
                  <td>{member.Cname}</td>
                  <td>{member.Sport}</td>
                  <td className="position-relative">
                    <div className="dropdown d-inline-block">
                      <button
                        className="action-dropdown-btn d-flex align-items-center justify-content-center"
                        type="button"
                        id={`dropdownMenuButton-${member.id}`}
                        onClick={() => handleToggleDropdown(member.id)}
                      >
                        Actions
                        <img
                          src={Image.downarrow}
                          alt="downarrow"
                          height={10}
                          className="ms-1"
                        />
                      </button>

                      {openDropdown === member.id && (
                        <ul
                          className="dropdown-menu show position-absolute custom-dropdown"
                          aria-labelledby={`dropdownMenuButton-${member.id}`}
                        >
                          <li>
                            <button
                              className="dropdown-item edit-item"
                              onClick={() => handleEdit(member)}
                            >
                              ✏️ Edit
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item delete-item"
                              onClick={() => handleDelete(member.id)}
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

      {/* Add Family Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow-lg border-0">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-success w-100 text-center">
                  Add New Family
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body px-4 pb-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Father Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter father's name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Mother Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter mother's name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Child Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter child's name"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Sport</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter sport"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={() => setShowModal(false)}
                    >
                      Add Family
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
