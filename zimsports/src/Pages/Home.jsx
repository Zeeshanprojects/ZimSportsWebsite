import React, { useEffect } from "react";
import "../assets/CSS/Home.css";
import Image from "../assets/Images/image";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Zim Sports";
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <h1>
              Zim Sports: Experience Every Game,<span>Anywhere, Anytime</span>{" "}
            </h1>
            <p>
              Live-stream, capture, and relive every moment of your clubʼs
              journey—powered by Zim Sports Technologies.
            </p>
            <input type="email" placeholder="Enter Your Email" />
            <button type="button" className="btn primary-btn ps-5 pe-5 ms-3">
              Start Now
            </button>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="image-wrapper">
              <img
                src={Image.bannerright}
                alt="banner-right"
                className="banner-right"
              />
              <div className="play-button">&#9658;</div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12">
                <div className="background">
                    <div className="col-sm-12 col=md-12 col-lg-6 col-xl-6">

                    </div>
                    <div className="col-sm-12 col=md-12 col-lg-6 col-xl-6">
                        <h1>Streamline Your Coaching with Zim Sports</h1>
                        <p>Zim Sports empowers coaches with advanced tools for video analysis, practice planning, and player development. From real-time stat tracking to intuitive communication features, manage your team effortlessly and focus on winning. Track player progress, assign drills, and share insights to elevate performance.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
