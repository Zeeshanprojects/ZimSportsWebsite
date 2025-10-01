import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Footer.css";
export default function Footer() {
  return (
    <>
    <div className="container-fluid"></div>
      <footer className="footer-section bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={Image.footerlogo}
                alt="zim sports logo"
                style={{ width: "120px" }}
                className="mb-3"
              />
              <h4 className="fw-bold">Subscribe newsletter</h4>
              <p className="color-white">
                Be the first to receive all latest post in your inbox
              </p>

              {/* Email Input */}
              <div className="input-group mb-2 mt-3">
                <input
                  type="email"
                  className="form-control bg-dark text-white border border-secondary"
                  placeholder="Enter your email"
                />
                <button className="btn btn-success ms-3">
                  <img src={Image.sendemailicon} alt="send" style={{ width: '20px' , filter: 'invert(1'}} />
                </button>
              </div>

              <small>
                By clicking send link you agree to receive message.
              </small>

              <div className="mt-3 ">
                <a
                  href="mailto:support@zimsports.com "
                  className="text-white me-3"
                  style={{ textDecoration: "none" }}
                >
                  support@zimsports.com
                </a>{" "}
                |
                <a
                  href="mailto:sales@zimsports.com"
                  className="text-white ms-3"
                  style={{ textDecoration: "none" }} 
                >
                  sales@zimsports.com
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6 text-md-end text-center">
              <h5 className="fw-bold mb-4">Download app</h5>
              <div className="d-flex justify-content-md-end justify-content-center gap-3 flex-wrap">
                <a href="#" className="store-btn google-play-btn">
                  <i className="fab fa-google-play me-2"></i>
                  <img
                    src={Image.googleplay}
                    alt="applestrore"
                    className="footericons me-2"
                  />{" "}
                  Get it on <strong className="ms-1">Google Play</strong>
                </a>

                <a href="#" className="store-btn app-store-btn">
                  <i className="fab fa-apple me-2"></i>
                  <img
                    src={Image.appstorebtn}
                    alt="applestrore"
                    className="footericons me-2"
                  />{" "}
                  Download on <strong className="ms-1">App Store</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
