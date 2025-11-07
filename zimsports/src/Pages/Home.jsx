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
  const sportsData = [
  { img: Image.sport1, name: "Water Polo" },
  { img: Image.sport2, name: "Volleyball" },
  { img: Image.sport3, name: "Beach Vollyball" },
  { img: Image.sport4, name: "Basketball" },
  { img: Image.sport5, name: "Rugby" },
  { img: Image.sport6, name: "Football" },
];

  return (
    <>
      <Navbar />
  <div id="Home" className="section">
      <div className="container-fluid p-0 hero-section">
        <img src={Image.banner} alt="banner" className="banner-img" />

        <div className="overlay-text">
          <h1>Stream Your Favorite Club Sports Live</h1>
          <p>
            Watch volleyball, water polo, football, basketball, and more
            <br /> never miss a moment!
          </p>
          <button className="hero-btn">
            {" "}
            <MonitorPlay size={22} className="me-2 " /> GO TO ZIM TV
          </button>
        </div>
      </div>

      <div className="background-color">
        <div className="container stats-section">
   <div className="text-center mb-4">
       <h5 class="title-underline fw-bold">Why Choose US</h5>
   </div>

          <div className="text-center stats-heading mb-5">
            <h2>Everything You Want, All in One Stream</h2>
            <p>The best sports experience ever </p>
          </div>

          {/* ✅ Stats Rows */}
          <div className="row text-center">
            <div className="col-6 col-md-3 stat-box">
              <h2 className="stat-number">100+</h2>
              <p className="stat-title">Live Events</p>
            </div>

            <div className="col-6 col-md-3 stat-box">
              <h2 className="stat-number">50+</h2>
              <p className="stat-title">Sports Clubs</p>
            </div>

            <div className="col-6 col-md-3 stat-box">
              <h2 className="stat-number">24/7</h2>
              <p className="stat-title">Streaming</p>
            </div>

            <div className="col-6 col-md-3 stat-box">
              <h2 className="stat-number">HD</h2>
              <p className="stat-title">Quality</p>
            </div>
          </div>
        </div>
      </div>

    
        <div className="container py-lg-5 mt-lg-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-4 mb-lg-0">
              <div className="text-content ">
                <h1>
                  <strong>
                    Experience Every Single Game,
                    <span> Anywhere, Anytime</span>
                  </strong>
                </h1>
                <p className="text-white">
                  Live-stream, capture, and relive every moment of your clubʼs
                  journey powered by Zim Sports Technologies. Stay connected
                  with your team’s highlights, stats, and unforgettable
                  performances — all in one place.
                </p>

                <div className="text-start ">
                  <Link to="/signup">
                    <button type="button" className="btn btn-lg fw-bold ">
                      Get Started
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

      <div id="Categories" className="section py-5">
        <div className="background-color">
           <div className="text-center mb-4">
      <h5 class="title-underline fw-bold">Categories</h5>
          <h2 className="section-heading mt-3">
            Everything You Want, All in One Stream
          </h2>
          <p className="section-subtitle">
            Explore the best sports from around the world
          </p>
        </div>

       <div className="container-fluid ">
  <div className="row g-4">
    {sportsData.map((sport, index) => (
      <div className="col-sm-12 col-md-6" key={index}>
        <div className="sport-card">
          <img src={sport.img} className="card-img" alt={sport.name} />
          <div className="card-overlay">
            <h2 className="text-white fw-bold mb-2">{sport.name}</h2>
            <button className="watch-btn">Watch Now →</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
       

      </div>

      <div id="About" className="section mt-3">
        <div class="text-center ">
            <h5 class="title-underline fw-bold">About Zim Sports</h5>
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
             <h5 class="title-underline fw-bold">Core Services</h5>
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
                <h2 className="text-white">
                  <span>Effortless organization</span> for Coaches & Admins
                </h2>
                <br/>
                <p className="text-white">
                  Streamline rosters, track attendance, manage team finances,
                  and organize all player information in one secure location.
                  Zim Sports simplifies administrative tasks, allowing you to
                  focus on the game.
                </p>
                <ul className="list-unstyled text-white">
                  <li>
                    <div className="d-flex align-items-center gap-2 ">
                      <img
                        src={Image.greenchecked}
                        alt="greenchecked"
                        className="checked-icon mb-3"
                      />
                      <h5 className="mb-0 ">Automated Rosters & Scheduling</h5>
                    </div>
                    <p className="ms-4 text-white">
                      Quickly set up teams, create schedules, and manage player
                      availability with automated tools.
                    </p>
                  </li>

                  <li>
                    <div className="d-flex align-items-center gap-2 ">
                      <img
                        src={Image.greenchecked}
                        alt="greenchecked"
                        className="checked-icon mb-3"
                      />
                      <h5 className="mb-0">Integrated Communication Hub</h5>
                    </div>
                    <p className="ms-4 text-white">
                      Facilitate seamless communication with instant messaging,
                      announcements, and direct chats.
                    </p>
                  </li>
                </ul>
             
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <h2 className="text-white">
                  <p className="subparagraph ">
                    {" "}
                    Performance Analytics & Video
                  </p>
                  <span>Unleash potential </span>with deep insights & video tool
                </h2>
                <p className="text-white">
                  Harness the power of data and video to elevate player
                  performance. Analyze game footage, track key metrics, and
                  provide targeted feedback to help athletes improve and teams
                  strategize effectively.
                </p>
                <ul className="list-unstyled text-white">
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
                <h2 className="text-white">
                  <p className="subparagraph">
                    {" "}
                    Live Tracking & Fan Engagement
                  </p>
                  <span>Keep everyone connected </span>
                  and part of the action
                </h2>
                <p className="text-white">
                  Engage your community with real-time updates, live scoring,
                  and secure communication channels. Zim Sports ensures families
                  and fans are always in the loop, celebrating every victory and
                  supporting their team.
                </p>
                <ul className="list-unstyled text-white">
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
                  <h5 class="title-underline fw-bold">Quick & Easy Setup</h5>
              </div>
              <h1 className="color-white text-center fw-bold mb-5">
                Get Started with Zim Sports in 3 Simple Steps
              </h1>
              <br />
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center text-white">
                    <div className="icon d-flex align-items-center justify-content-center mb-3 mx-auto bg">
                      <img
                        src={Image.icon4}
                        alt="icon"
                        className="icon-color"
                      />
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
                    <div className="icon d-flex align-items-center justify-content-center mb-3 mx-auto bg">
                      <img
                        src={Image.icon5}
                        alt="icon"
                        className="icon-color"
                      />
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
                    <div className="icon d-flex align-items-center justify-content-center mb-3 text-center mx-auto bg">
                      <img
                        src={Image.icon6}
                        alt="icon"
                        className="icon-color"
                      />
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

        <br />
      </div>

      <div id="Contact" className="section">
        <div className="container py-2 text-center">
            <h5 class="title-underline fw-bold">Contact US</h5>
        </div>

        <div className="container  ">
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold mb-3 text-white">
                Let's <span>Talk</span>
              </h1>
              <p className="text-white">
                Feel free to reach out to us with any questions, feedback, or
                suggestions. We’re here to help and look forward to hearing from
                you.
              </p>
              <ul className="list-unstyled mt-4 text-white">
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
              <div className="p-4 border border rounded-4 shadow-sm p-5">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label fw-semibold text-white"
                    >
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
                      className="form-label fw-semibold text-white"
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
                    <label
                      htmlFor="message"
                      className="form-label fw-semibold text-white"
                    >
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
