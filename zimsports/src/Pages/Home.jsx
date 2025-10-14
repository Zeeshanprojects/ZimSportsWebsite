import React, { useEffect } from "react";
import "../assets/CSS/Home.css";
import Image from "../assets/Images/image";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MonitorPlay } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Zim Sports -  Experience Every Game, Anywhere, Anytime";
  });
  return (
    <>
      <Navbar />
      <div className="space"></div>
      <div id="Home" className="section">
        <div className="container py-lg-5 mt-lg-5">
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
                  journey powered by Zim Sports Technologies.
                </p>
                <div className="d-flex flex-wrap align-items-center">
                  <Link to="/signup">
                    <button
                      type="button"
                      className="btn primary-btn ps-5 pe-5  mt-sm-0 start-btn"
                    >
                      Start Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 position-relative text-center">
              <div className="video-wrapper">
                <div className="green-card"></div>
                <img
                  src={Image.bannerright}
                  alt="banner-right"
                  className="banner-right img-fluid rounded"
                />

                <div
                  className="play-button-wrapper"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  onClick={() => {
                    const iframe = document.getElementById("youtubePlayer");
                    iframe.src =
                      "https://www.youtube.com/embed/L_Z2721wfEU?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0&fs=0";
                  }}
                >
                  <div className="play-button-bg">
                    <div className="play-icon">&#9658;</div>
                  </div>
                </div>
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
                    <div className="modal-body p-0">
                      <div className="ratio ratio-16x9">
                        <iframe
                          id="youtubePlayer"
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
      </div>

      <div className="watch-live-btn text-center ">
        <Link to="/zimlive">
          <button type="button" className="btn btn-lg fw-bold ">
            <MonitorPlay size={22} className="me-2 " /> GO TO ZIM TV
          </button>
        </Link>
      </div>
      {/* Features*/}
      <div id="Features" className="section">
        <div className="container-fluid mt-3  p-0 py-3 text-white">
          <div
            id="featuresCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {/* ===== Slide 1 ===== */}
              <div className="carousel-item active h-100">
                <div className="background-color h-100">
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0 text-center h-100">
                      <img
                        src={Image.image1}
                        alt="image1"
                        className="img-fluid rounded shadow image-size"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <button type="button" className="btn secondary-btn mb-3">
                        For Coaches
                      </button>

                      <h1 className="color-white mb-3">
                        Streamline Coaching with Zim Sports
                      </h1>
                      <p className="text-white pe-4">
                        Zim Sports empowers coaches with a complete suite of
                        advanced tools designed to simplify every aspect of team
                        management. Plan practices with precision, analyze
                        player performance through detailed video insights, and
                        make data-driven decisions that elevate your team’s
                        potential. With real-time stat tracking, seamless
                        communication channels, and smart scheduling features,
                        you can stay organized and focused on what truly matters
                        — coaching your players to victory. Zim Sports helps you
                        save time, boost efficiency, and bring out the best in
                        every athlete.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Slide 2 ===== */}
              <div className="carousel-item h-100">
                <div className="background-color">
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12  col-lg-4 mb-4 mb-md-0 text-center h-100">
                      <img
                        src={Image.image2}
                        alt="image2"
                        className="img-fluid rounded shadow image-size"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <button type="button" className="btn secondary-btn mb-3">
                        For Teams
                      </button>

                      <h1 className="text-white mb-3">
                        United & Organized: Your Team's Hub
                      </h1>

                      <p className="text-white pe-4">
                        Foster seamless collaboration and a sense of unity
                        within your team. Zim Sports serves as your all-in-one
                        digital hub, empowering coaches, players, and managers
                        to stay organized and connected. Easily schedule games
                        and practices, manage rosters, share instant updates,
                        and track performance insights — all from one intuitive
                        platform. Simplify communication, eliminate confusion,
                        and build a stronger, more efficient team with Zim
                        Sports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== Slide 3 ===== */}
              <div className="carousel-item h-100">
                <div className="background-color">
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0 text-center h-100">
                      <img
                        src={Image.image3}
                        alt="image3"
                        className="img-fluid rounded shadow image-size"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8">
                      <button type="button" className="btn secondary-btn mb-3">
                        For Families & Fans
                      </button>

                      <h1 className="text-white mb-3">
                        Stay Connected, Never Miss a Moment
                      </h1>
                      <p className="text-white pe-4">
                        For sports families and devoted fans, Zim Sports keeps
                        you closer to the action than ever before. Follow live
                        game updates and score tracking in real time, stay
                        informed about upcoming matches, and never miss an
                        important moment. Access detailed team schedules,
                        announcements, and highlights effortlessly — all in one
                        place. Whether you're cheering from the stands or from
                        home, Zim Sports ensures you’re always connected to your
                        favorite team’s journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Carousel Controls ===== */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#featuresCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#featuresCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div id="About" className="section mt-3">
        <div class="text-center ">
          <button type="button" class="btn secondary-btn">
            About Zim Sports
          </button>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h1 className="custom-para">
                {" "}
                Your comprehensive sports ecosystem <br /> designed to
                <br />
                transform how you experience{" "}
                <img
                  src={Image.usericon}
                  alt="icon"
                  className="usericon"
                />{" "}
                <span>sports</span> and <br />
                empower{" "}
                <img
                  src={Image.magnent}
                  alt="magnet"
                  className="usericon"
                />{" "}
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
                  <img src={Image.dot} alt="dot" className="dot" /> Fan
                  Engagement <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" />{" "}
                  Comprehensive Management{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
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
                  Communication{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
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
                  <img src={Image.dot} alt="dot" className="dot" /> Fan
                  Engagement <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" />{" "}
                  Comprehensive Management{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
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
                  Communication{" "}
                  <img src={Image.dot} alt="dot" className="dot" />
                </span>
                <span>
                  <img src={Image.dot} alt="dot" className="dot" /> Event
                  Scheduling <img src={Image.dot} alt="dot" className="dot" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Services" className="section">
        <div class="text-center my-4">
          <button type="button" class="btn secondary-btn">
            Core Services
          </button>
        </div>
        <div className="container ps-5 pe-5">
          <div className="row">
            <div className="col-12 ">
              <h1 className="custom-para">
                {" "}
                Unlock the full potential of
                <br />
                Your sports journey with Zim Sports <span>services</span>
              </h1>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex ">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <p className="subparagraph"> Team & Player Management</p>
                <h2>
                  <span>Effortless organization</span> for Coaches & Admins
                </h2>
                <p>
                  Streamline rosters, track attendance, manage team finances,
                  and organize all player information in one secure location.
                  Zim Sports simplifies administrative tasks, allowing you to
                  focus on the game.
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
                {/* <button
                  className="btn  navbar-btn ps-5 pe-5 pt-2 pb-2"
                  type="submit"
                >
                  Discover Management Feature
                </button> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <h2>
                  <p className="subparagraph"> Performance Analytics & Video</p>
                  <span>Unleash potential </span>with deep insights & video
                  tools
                </h2>
                <p>
                  Harness the power of data and video to elevate player
                  performance. Analyze game footage, track key metrics, and
                  provide targeted feedback to help athletes improve and teams
                  strategize effectively.
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
                {/* <button
                  className="btn  navbar-btn ps-5 pe-5 pt-2 pb-2"
                  type="submit"
                >
                  Explore Analytics
                </button> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <h2>
                  <p className="subparagraph">
                    {" "}
                    Live Tracking & Fan Engagement
                  </p>
                  <span>Keep everyone connected </span>
                  and part of the action
                </h2>
                <p>
                  Engage your community with real-time updates, live scoring,
                  and secure communication channels. Zim Sports ensures families
                  and fans are always in the loop, celebrating every victory and
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

                  <div className="d-flex align-items-center gap-2 pb-2 ">
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
                {/* <button
                  className="btn  navbar-btn ps-5 pe-5 pt-2 pb-2 "
                  type="submit"
                >
                  See Fan Features
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid ">
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
              <div className="container-fluid ">
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
          <button type="button" class="btn secondary-btn mb-3 ">
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
      </div>

      <div id="Contact" className="section">
        <div className="container py-2 text-center">
          <button type="button" class="btn secondary-btn mb-5 ">
            Contact US
          </button>
        </div>

        <div className="container  ">
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
              <ul className="list-unstyled mt-4 ">
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
              <div className="p-4 border border-dark rounded-4 shadow-sm p-5">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control border-dark rounded-3"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control border-dark rounded-3"
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
                      style={{ minHeight: "150px" }} // ✅ controls height
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn  w-100 py-2 rounded-3 fw-bold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
