import React, { useEffect } from "react";
import "../assets/CSS/Home.css";
import Image from "../assets/Images/image";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MonitorPlay } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Zim Sports - Experience Every Game, Anywhere, Anytime";
  }, []);

  const sportsData = [
    { img: Image.sport1 },
    { img: Image.sport2 },
    { img: Image.sport3 },
    { img: Image.sport4 },
    { img: Image.sport5 },
    { img: Image.sport6 },
  ];

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container-fluid p-0 hero-section">
          <img
            src={Image.banner}
            alt="banner"
            className="banner-img"
            fetchPriority="high"
          />

          <div className="overlay-text">
            <h1>Power Your Team Stream Every Splash</h1>
            <p>
              Zim Sports is the alli-in-one platform for club teams live
              broadcast, manage and elevate your game from
            </p>
<Link to="./login">
<button className="btn btn-primary ps-5 pe-5 pt-2 pb-2 fw-bold">
              {" "}
              Get Started Free{" "}
            </button></Link>
            
          </div>
        </div>

        <div className="background-color ">
          <div className="container stats-section ">
            <div className="text-center mb-4">
              <h5 class="title-underline fw-bold">Why Choose US</h5>
            </div>

            <div className="text-center stats-heading mb-5">
              <h2>Everything You Want, All in One Stream</h2>
              <p>The best sports experience ever </p>
            </div>

            {/* ✅ Stats Rows */}
            <div className="row text-center">
              <div className="col-6 col-sm-6 col-md-3 stat-box ">
                <h2 className="stat-number">100+</h2>
                <p className="stat-title">Live Events</p>
              </div>

              <div className="col-6 col-sm-6 col-md-3 stat-box">
                <h2 className="stat-number">50+</h2>
                <p className="stat-title">Sports Clubs</p>
              </div>

              <div className="col-6 col-sm-6 col-md-3 stat-box">
                <h2 className="stat-number">24/7</h2>
                <p className="stat-title">Streaming</p>
              </div>

              <div className="col-6 col-sm-6 col-md-3 stat-box">
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
                    Experience Every Single Game, Anywhere, Anytime
                  </strong>
                </h1>
                <p className="text-white">
                  Live-stream, capture, and relive every moment of your club’s
                  journey with Zim Sports Technologies. Follow your team’s
                  highlights and track stats effortlessly. Experience every
                  unforgettable performance in one place.
                </p>

                <div className="text-start ">
                  <Link to="/signup">
                    <button type="button" className="btn btn-primary fw-bold ">
                      DIscover More
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
      <div className="container features-section text-center py-5">
        <div className="row gy-4">
          {/* Feature 1 */}
          <div className="col-sm-12 col-md-4">
            <div className="feature-box">
              <img
                src={Image.icon1}
                alt="Stream Every Moment"
                className="icons mb-3"
              />
              <h4 className="feature-title">Stream Every Moment</h4>
              <p className="feature-text">
                Broadcast games in HD with one tap. Share the action with
                families, fans, and recruiters live or on demand.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-sm-12 col-md-4">
            <div className="feature-box">
              <img
                src={Image.icon2}
                alt="Simplify Coaching"
                className="icons mb-3"
              />
              <h4 className="feature-title">Simplify Coaching</h4>
              <p className="feature-text">
                Schedules, rosters, messaging, and stats all in one place — Zim
                makes coaching effortless.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-sm-12 col-md-4">
            <div className="feature-box">
              <img
                src={Image.icon3}
                alt="Train Smarter"
                className="icons mb-3"
              />
              <h4 className="feature-title">Train Smarter</h4>
              <p className="feature-text">
                Instant cloud storage for every game. Review plays, build
                highlights, and coach with precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-5">
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
                    <img
                      src={sport.img}
                      className="card-img"
                      alt={sport.name}
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <button className="btn btn-primary">Stream Live →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section mt-3">
        <div class="text-center ">
          <h5 class="title-underline fw-bold">About Zim Sports</h5>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h1 className="custom-para">
                {" "}
                Your comprehensive sports ecosystem designed to
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

      <div className="section">
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
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <h2 className="text-white">
                  <p className="subparagraph "> Team & Player Management</p>
                  <span>Effortless Organization </span>for Coaches & Admins
                </h2>
                <p className="text-white">
                  Streamline rosters, track attendance, manage team finances,
                  and organize all player information in one secure location.
                  Zim Sports simplifies administrative tasks, allowing you to
                  focus on the game.
                </p>
                <ul className="list-unstyled text-white">
                  <div className="d-flex align-items-center gap-2 pb-2">
                    <img
                      src={Image.greenchecked}
                      alt="greenchecked"
                      className="checked-icon mb-3"
                    />
                    <li>
                      Quickly set up teams, create schedules, and manage player
                      availability
                    </li>
                  </div>
                  <div className="d-flex align-items-center gap-2 pb-2">
                    <img
                      src={Image.greenchecked}
                      alt="greenchecked"
                      className="checked-icon mb-3"
                    />
                    <li>
                      Facilitate seamless communication with instant messaging,
                      announcements
                    </li>
                  </div>

                  <div className="d-flex align-items-center gap-2 pb-2">
                    <img
                      src={Image.greenchecked}
                      alt="greenchecked"
                      className="checked-icon mb-3"
                    />
                    <li>
                      Generate detailed performance reports and track player
                      progress over time.
                    </li>
                  </div>
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
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-5 d-flex">
              <div className="feature-card d-flex flex-column justify-content-between w-100">
                <h2 className="text-white">
                  <p className="subparagraph">
                    {" "}
                    Live Tracking & Fan Engagemental time
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

      <div className="section">
        <div className="container py-2 text-center">
          <h5 class="title-underline fw-bold">Contact US</h5>
        </div>
        <h1 className="color-white text-center fw-bold mb-5">
          Questions? Our team has the answers.
        </h1>
        <div className="container  ">
          <div className="row align-items-center">
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

            {/* Right Column - FAQ Section */}
            <div className="col-sm-12 col-md-6">
              <div className="faq-container">
                <h4 className="faq-title">Frequently Asked Questions</h4>

                <div className="accordion modern-accordion" id="accordionFAQ">
                  {[
                    {
                      q: "How can I watch live sports?",
                      a: "Just sign up, choose your favorite sport, and start watching instantly — anytime, anywhere.",
                    },
                    {
                      q: "Do I need a subscription?",
                      a: "Some content is free. For premium matches and tournaments, a subscription unlocks full access.",
                    },
                    {
                      q: "Can I stream on multiple devices?",
                      a: "Yes! Your account supports seamless streaming across mobiles, tablets, and smart TVs.",
                    },
                  ].map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button
                          className={`accordion-button ${
                            index !== 0 && "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${index}`}
                        >
                          {item.q}
                        </button>
                      </h2>

                      <div
                        id={`collapse${index}`}
                        className={`accordion-collapse collapse ${
                          index === 0 && "show"
                        }`}
                        aria-labelledby={`heading${index}`}
                        data-bs-parent="#accordionFAQ"
                      >
                        <div className="accordion-body">{item.a}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
