import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container pt-5 ">
        <div className="row gy-4">
          {/* Left Column */}
       <div className="col-sm-12 col-md-6 mb-5">
  {/* <img src={Image.logo} alt="footer logo" className="footer-logo mb-3" /> */}
   <h5 className="fw-bold text-uppercase text-primary">Zim Sports</h5>
  <p className="footer-text text-white">
    ZimSports brings you the ultimate experience to enjoy every single game —
    anywhere, anytime. Stay connected with the latest sports updates and
    live events.
  </p>

 
  <div className="social-icons mt-3">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="lucide-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      </i>
    </a>

    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
      <i className="lucide-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-music"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </i>
    </a>

    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <i className="lucide-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      </i>
    </a>
  </div>
</div>


          {/* Useful Links */}
          <div className="col-sm-6 col-md-3">
            <h5 className="fw-bold text-uppercase text-primary">Useful Links</h5>
           
            <ul className="list-unstyled mt-3">
              <li><a href="#!" className="footer-link">About Zim</a></li>
              <li><a href="#!" className="footer-link">Support</a></li>
              <li><a href="#!" className="footer-link">Privacy Policy</a></li>
              <li><a href="#!" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* App Download Section */}
          <div className="col-sm-6 col-md-3 mb-5">
              <h5 className="fw-bold text-uppercase text-primary">Contact</h5>
           <ul className="list-unstyled mt-3">
              <li><a href="#!" className="footer-link">support@zimsports.com</a></li>
              <li><a href="#!" className="footer-link">+1 213 555 1234</a></li>
              <li><a href="#!" className="footer-link">Laguna Beach, California</a></li>
              <li><a href="#!" className="footer-link">Download App</a></li>
            </ul>
          </div>
        </div>
          <div className="footer-bottom text-center pb-3">
        © {new Date().getFullYear()} ZimSports. All rights reserved.
      </div>
      </div>

      {/* Footer Bottom */}
    
    </footer>
  );
}
