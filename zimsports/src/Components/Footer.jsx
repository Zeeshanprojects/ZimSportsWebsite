import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container mt-5 py-5">
        <div className="row gy-4">
          {/* Left Column */}
          <div className="col-sm-12 col-md-6">
            <img src={Image.logo} alt="footer logo" className="footer-logo mb-3" />
            <p className="footer-text text-white">
              ZimSports brings you the ultimate experience to enjoy every single game —
              anywhere, anytime. Stay connected with the latest sports updates and
              live events.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-sm-6 col-md-3">
            <h6 className="fw-bold text-uppercase">Useful Links</h6>
            <hr className="footer-line" />
            <ul className="list-unstyled">
              <li><a href="#!" className="footer-link">About Zim</a></li>
              <li><a href="#!" className="footer-link">Support</a></li>
              <li><a href="#!" className="footer-link">Privacy Policy</a></li>
              <li><a href="#!" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* App Download Section */}
          <div className="col-sm-6 col-md-3">
           <h6 className="fw-bold text-uppercase">Download App</h6>
            <hr className="footer-line" />
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="store-btn">
                <img
                  src={Image.googleplay}
                  alt="Google Play"
                  className="footericons me-2"
                />
                <div>
                  <large>Get it on </large>
                  <div className="fw-bold">Google Play</div>
                </div>
              </a>

              <a href="#" className="store-btn">
                <img
                  src={Image.appstorebtn}
                  alt="App Store"
                  className="footericons me-2"
                />
                <div>
                  <small>Download on</small>
                  <div className="fw-bold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        © {new Date().getFullYear()} ZimSports. All rights reserved.
      </div>
    </footer>
  );
}
