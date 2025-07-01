import React, { useEffect } from "react";
import "../assets/CSS/Home.css";
import Image from "../assets/Images/image";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Zim Sports";
  });
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4 mb-lg-0">
            <div className="text-content">
              <h1>
                Zim Sports: Experience Every Game,
                <span> Anywhere, Anytime</span>
              </h1>
              <p>
                Live-stream, capture, and relive every moment of your clubʼs
                journey—powered by Zim Sports Technologies.
              </p>
              <div className="d-flex flex-wrap align-items-center mt-3">
                <input type="email" placeholder="Enter Your Email" />
                <button
                  type="button"
                  className="btn primary-btn ps-5 pe-5 ms-3 mt-2 mt-sm-0"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative text-center">
            <img
              src={Image.bannerright}
              alt="banner-right"
              className="banner-right img-fluid rounded"
            />
            <div className="play-button">&#9658;</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container-fluid ps-5 pe-5 px-5 py-5 bg-dark text-white">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-sm-12 col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={Image.image1}
              alt="image1"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-sm-12 col-md-6">
            <div className="icon d-flex align-items-center justify-content-center mb-3">
              <img src={Image.icon1} alt="icon" />
            </div>
            <h1 className="color-white mb-3 ">
              Streamline Your Coaching with Zim Sports
            </h1>
            <p className="color-white">
              Zim Sports empowers coaches with advanced tools for video
              analysis, practice planning, and player development. From
              real-time stat tracking to intuitive communication features,
              manage your team effortlessly and focus on winning. Track player
              progress, assign drills, and share insights to elevate
              performance.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid ps-5 pe-5 px-5 py-5 bg-dark text-white">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-sm-12 col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={Image.image2}
              alt="image1"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-sm-12 col-md-6">
            <div className="icon d-flex align-items-center justify-content-center mb-3">
              <img src={Image.icon2} alt="icon" />
            </div>
            <h1 className="color-white mb-3 ">
              Streamline Your Coaching with Zim Sports
            </h1>
            <p className="color-white">
              Zim Sports empowers coaches with advanced tools for video
              analysis, practice planning, and player development. From
              real-time stat tracking to intuitive communication features,
              manage your team effortlessly and focus on winning. Track player
              progress, assign drills, and share insights to elevate
              performance.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid ps-5 pe-5 px-5 py-5 bg-dark text-white">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-sm-12 col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={Image.image3}
              alt="image1"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Content */}
          <div className="col-sm-12 col-md-6">
            <div className="icon d-flex align-items-center justify-content-center mb-3">
              <img src={Image.icon3} alt="icon" />
            </div>
            <h1 className="color-white mb-3 ">
              Streamline Your Coaching with Zim Sports
            </h1>
            <p className="color-white">
              Zim Sports empowers coaches with advanced tools for video
              analysis, practice planning, and player development. From
              real-time stat tracking to intuitive communication features,
              manage your team effortlessly and focus on winning. Track player
              progress, assign drills, and share insights to elevate
              performance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
