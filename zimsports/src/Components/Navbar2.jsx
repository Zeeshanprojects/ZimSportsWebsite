import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/Images/image'
export default function Navbar2() {
  return (
<>
    {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 ">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            data-mdb-collapse-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}

            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img src={Image.logo} height={25} alt="MDB Logo" loading="lazy" />
            </Link>
          
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart" />
            </a>

            {/* Avatar */}

            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            //   src={Image.cao}
              className="rounded-circle"
              height={50}
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </div>
        </div>
        {/* Right elements */}

        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
</>
  )
}
