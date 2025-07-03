import React, { useEffect } from "react";
import "../assets/CSS/Home.css";
import Image from "../assets/Images/image";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Zim Sports";
  });
  return (
    <>
      <div className="space"></div>
      <div className="container py-5 mt-5">
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
                <input type="email" className="form-color" placeholder="Enter Your Email" />
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
            {/* Banner Image */}
            <img
              src={Image.bannerright}
              alt="banner-right"
              className="banner-right img-fluid rounded"
            />

            {/* Play Button */}
            <div
              className="play-button"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              onClick={() => {
                const iframe = document.getElementById("youtubePlayer");
                iframe.src =
                  "https://www.youtube.com/embed/L_Z2721wfEU?autoplay=1";
              }}
            >
              &#9658;
            </div>

            {/* Modal */}
            <div
              className="modal fade"
              id="videoModal"
              tabIndex="-1"
              aria-labelledby="videoModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-dark">
                  <div className="modal-header border-0">
                    <h5 className="modal-title text-white" id="videoModalLabel">
                      Watch Match Live
                    </h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body p-0">
                    <div className="ratio ratio-16x9">
                      <iframe
                        id="youtubePlayer"
                        src=""
                        title="YouTube video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="watch-live-btn text-center">
        <button type="button" className="btn btn-success btn-lg fw-bold">
          🎥 Watch Match Live
        </button>
      </div>

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
              transform how you experience{" "}
              <img src={Image.usericon} alt="icon" className="usericon" />{" "}
              <span>sports</span> and <br />
              empower{" "}
              <img src={Image.magnent} alt="magnet" className="usericon" />{" "}
              <span>your community</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 p-0">
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Live Score
                Tracking <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Player
                Development <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Fan Engagement{" "}
                <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Comprehensive
                Management <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Intuitive
                Interface <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Advanced
                Analytics <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Team
                Communication <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Event
                Scheduling <img src={Image.dot} alt="dot" className="dot" />
              </span>
            </div>
            <div className="marquee-content">
              {/* Duplicate for seamless scroll */}
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Live Score
                Tracking <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Player
                Development <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Fan Engagement{" "}
                <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Comprehensive
                Management <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Intuitive
                Interface <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Advanced
                Analytics <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Team
                Communication <img src={Image.dot} alt="dot" className="dot" />
              </span>
              <span>
                <img src={Image.dot} alt="dot" className="dot" /> Event
                Scheduling <img src={Image.dot} alt="dot" className="dot" />
              </span>
            </div>
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
            <p className="subparagraph"> Team & Player Management</p>
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
            <button
              className="btn btn-success navbar-btn ps-5 pe-5 pt-2 pb-2"
              type="submit"
            >
              Discover Management Feature
            </button>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-2">
            <h2>
              <p className="subparagraph"> Performance Analytics & Video</p>
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
            <button
              className="btn btn-success navbar-btn ps-5 pe-5 pt-2 pb-2"
              type="submit"
            >
              Explore Analytics
            </button>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h2>
              <p className="subparagraph"> Live Tracking & Fan Engagement</p>
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
                <li>Real-time game updates and live scoreboards</li>
              </div>
              <div className="d-flex align-items-center gap-2 pb-2">
                <img
                  src={Image.greenchecked}
                  alt="greenchecked"
                  className="checked-icon"
                />
                <li>Secure team messaging and announcement features</li>
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
            <button
              className="btn btn-success navbar-btn ps-5 pe-5 pt-2 pb-2"
              type="submit"
            >
              See Fan Features
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          {" "}
          <div className="background-color">
            <div class="text-center my-4">
              <button type="button" class="btn secondary-btn">
                Quick & Easy Setup
              </button>
            </div>
            <h1 className="color-white text-center fw-bold mb-5">
              Get Started with Zim Sports in 3 Simple Steps
            </h1>
            <br />
            <div className="container ">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center text-white">
                  <div className="icon d-flex align-items-center justify-content-center mb-3 mx-auto">
                    <img src={Image.icon4} alt="icon" />
                  </div>

                  <h5>Download App</h5>

                  <div className="d-flex justify-content-center mb-2">
                    <img
                      src={Image.github}
                      alt="github"
                      className="smallicon"
                    />
                  </div>

                  <p className="color-white">
                    Download App. It will work for <br />
                    Android, Mac & Web
                  </p>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 color-white text-center ">
                  <div className="icon d-flex align-items-center justify-content-center mb-3 mx-auto">
                    <img src={Image.icon5} alt="icon" />
                  </div>

                  <h5>Create Account</h5>
                  <p className="color-white">Free for now</p>
                  <p className="color-white">
                    Our app is free for now,
                    <br />
                    Sign up and get started
                  </p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 color-white text-center">
                  <div className="icon d-flex align-items-center justify-content-center mb-3 text-center mx-auto">
                    <img src={Image.icon6} alt="icon" />
                  </div>

                  <h5 className="color-white">Enjoy the app</h5>
                  <p className="color-white">Read FAQs for any query</p>

                  <p className="color-white">
                    Enjoy our app & share
                    <br /> most amazing app experience
                  </p>
                </div>
              </div>
            </div>
            <div className="container my-5 ">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="step-item">
                      <div className="step-circle">01</div>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-item">
                      <div className="step-circle">02</div>
                    </div>

                    <div className="step-line"></div>

                    <div className="step-item">
                      <div className="step-circle">03</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="container text-center">
        <button type="button" class="btn secondary-btn mb-5 ">
          Our Growing Community
        </button>

        <h1 className="main-heading">
          <span>All-in-one solution</span>
          <br />
          for your Club Sports
        </h1>
      </div>
      <br />
      <div className="container-fluid py-4 p-0">
        <div className="marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {/* Duplicate Content */}
              <div className="marquee-content">
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
              </div>
              <div className="marquee-content">
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Download{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column - Text */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">
              Let's <span>Talk</span>
            </h1>
            <p className="text-muted">
              Feel free to reach out to us with any questions, feedback, or
              suggestions. We’re here to help and look forward to hearing from
              you.
            </p>
            <ul className="list-unstyled mt-4">
              <li>
                <strong>Email:</strong> support@zimsports.com
              </li>
              <li>
                <strong>Phone:</strong> +1 213 555 1234{" "}
              </li>
              <li>
                <strong>Location:</strong> Laguna Beach, California
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-6">
            <div className="p-4 border border-dark rounded-4 shadow-sm bg-light">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control border-dark rounded-3"
                    // placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control border-dark rounded-3"
                    // placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control border-dark rounded-3"
                    rows="5"
                    // placeholder="Type your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 rounded-3 fw-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
