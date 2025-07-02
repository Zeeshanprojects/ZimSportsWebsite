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
                <strong>
                  Zim Sports: Experience Every Single Game,
                  <span> Anywhere, Anytime</span>
                </strong>
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

                <div className="d-flex gap-4 ms-2 mt-2">
                  <img
                    src={Image.checked}
                    alt="checked-icon"
                    className="checked-icon"
                  />
                  <p>Free for no</p>
                  <img
                    src={Image.checked}
                    alt="checked-icon"
                    className="checked-icon"
                  />
                  <p>No credit card required</p>
                </div>
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

      <div className="container-fluid ps-5 pe-5 px-5 py-5  text-white">
        <div className="background-color mb-5 ">
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
              <button type="button" class="btn secondary-btn mb-5 ">
                For Coaches
              </button>
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

        <div className="background-color mb-5">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-sm-12 col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={Image.image2}
                alt="image2"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Content */}
            <div className="col-sm-12 col-md-6">
              <button type="button" class="btn secondary-btn mb-5 ">
                For Teams
              </button>
              <div className="icon d-flex align-items-center justify-content-center mb-3">
                <img src={Image.icon2} alt="icon" />
              </div>
              <h1 className="color-white mb-3 ">
                United & Organized: Your Team's Hub
              </h1>
              <p className="color-white">
                Foster seamless collaboration and organization within your team.
                Zim Sports offers comprehensive features for scheduling games
                and practices, managing rosters, sharing updates, and handling
                team payments. Keep everyone on the same page, from players to
                coaching staff, ensuring smooth operations on and off the field.
              </p>
            </div>
          </div>
        </div>

        <div className="background-color mb-5">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-sm-12 col-md-6 mb-4 mb-md-0 text-center">
              <img
                src={Image.image3}
                alt="image3"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Content */}
            <div className="col-sm-12 col-md-6 ">
              <button type="button" class="btn secondary-btn mb-5 ">
                For Families & Fans
              </button>
              <div className="icon d-flex align-items-center justify-content-center mb-3">
                <img src={Image.icon3} alt="icon" />
              </div>
              <h1 className="color-white mb-3 ">
                Stay Connected, Never Miss a Moment
              </h1>
              <p className="color-white">
                For sports families and devoted fans, Zim Sports provides live
                game updates, score tracking, and easy access to team schedules
                and communication. Receive instant notifications, view player
                statistics, and share in the excitement, ensuring you're always
                connected to the action, even when you can't be there in person.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center my-4">
        <button type="button" class="btn secondary-btn">
          About Zim Sports
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1 className="custom-para">
              {" "}
              Your comprehensive sports ecosystem <br /> designed to
              <br />
              transform how you experience <span>sports</span> and <br />
              empower <span>your community</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="text-center my-4">
        <button type="button" class="btn secondary-btn">
          Core Services
        </button>
      </div>
      <div className="container ps-5 pe-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h1 className="custom-para">
              {" "}
              Unlock the full potential of
              <br />
              Your sports journey with Zim Sports <span>services</span>
            </h1>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 mb-5  ">
            <h2>
              <span>Effortless organization</span> for Coaches & Admins
            </h2>
            <p>
              Streamline rosters, track attendance, manage team finances, and
              organize all player information in one secure location. Zim Sports
              simplifies administrative tasks, allowing you to focus on the
              game.
            </p>
            <ul className="list-unstyled ">
              <li>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={Image.checked}
                    alt="checked-icon"
                    className="checked-icon"
                  />
                  <h5 className="mb-0">Automated Rosters & Scheduling</h5>
                </div>
                <p className="ms-4">
                  Quickly set up teams, create schedules, and manage player
                  availability with automated tools.
                </p>
              </li>

              <li>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={Image.checked}
                    alt="checked-icon"
                    className="checked-icon"
                  />
                  <h5 className="mb-0">Integrated Communication Hub</h5>
                </div>
                <p className="ms-4">
                  Facilitate seamless communication with instant messaging,
                  announcements, and direct chats.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-2">
            <h2>
              {" "}
              <span>Unleash potential </span>with deep insights & video tools
            </h2>
            <p>
              Harness the power of data and video to elevate player performance.
              Analyze game footage, track key metrics, and provide targeted
              feedback to help athletes improve and teams strategize
              effectively.
            </p>
            <ul className="list-unstyled ">
              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon mb-3"
                />
                <li>
                  Advanced statistical tracking for individual and team
                  performance
                </li>
              </div>
              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon mb-3"
                />
                <li>
                  Intuitive video analysis tools for breakdown and highlight
                  creation
                </li>
              </div>

              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon mb-3"
                />
                <li>
                  Customizable reports to identify strengths and areas for
                  improvement
                </li>
              </div>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h2>
              {" "}
              <span>Keep everyone connected </span>
              and part of the action
            </h2>
            <p>
              Engage your community with real-time updates, live scoring, and
              secure communication channels. Zim Sports ensures families and
              fans are always in the loop, celebrating every victory and
              supporting their team.
            </p>
              <ul className="list-unstyled ">
              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon"
                />
                <li>
                 Real-time game updates and live scoreboards
                </li>
              </div>
              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon"
                />
                <li>
                Secure team messaging and announcement features
                </li>
              </div>

              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon"
                />
                <li>
                Event reminders and calendar synchronization for families
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
