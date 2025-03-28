// /* eslint-disable no-unused-vars */
// import React from "react";
// import Header from "../../Common/Header/Headers";
// import "./Home.css";
// import "../../assets/css/media-query.css";
// import About from "../../components/About/About";
// import Services from "../../components/Services/Services";
// import Responsive from "../../components/Res/Responsive";
// import TimeLine from "../../components/TimeLine/TimeLine";
// import TeamSlider from "../../components/TeamSlider/TeamSlider";
// import ClientSay from "../../components/ClientSay/ClientSay";
// import Blogs from "../../components/Blogs/Blogs";
// import Visitor from "../../components/Visitors/Visitor";
// import Background from "../../components/ReactParticles/Background";
// import { NavLink } from "react-router-dom";
// import Typewriter from "typewriter-effect";
// import Footer from "../../Common/Footer/Footer";
// export const Home = () => {
//   return (
//     <div>
//       <Header tags={location.href} />
//       <div className="banner">
//         <div className="">
//           <Background />
//           <div className="row">
//             <div className="col-md-6 offset-1 col-sm">
//               <div className="banner_left">
//                 <h1 className="text-uppercase text-left">
//                   <span>Your Digital Success Starts Here In world wide</span>
//                   <span className="typeWriter">
//                     <Typewriter
//                       onInit={(typewriter) => {
//                         typewriter
//                           .typeString("Your success fuels our mission.")
//                           .pauseFor(2500)
//                           .deleteAll()
//                           .typeString("Together, we achieve greatness.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString("Your goals are our priority.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString("Inspiring your triumph drives us.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString("We believe in your potential.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString("Your success is our motivation.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString("Empowering you to reach new heights.")
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString(
//                             "Your achievements inspire our dedication."
//                           )
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString(
//                             "Unleash your potential with our support."
//                           )
//                           .pauseFor(500)
//                           .deleteAll()
//                           .typeString(
//                             "Your success is our unwavering commitment."
//                           )
//                           .pauseFor(1000)
//                           .start();
//                       }}
//                     />
//                   </span>
//                 </h1>
//                 <p>
//                   We Specialize In Creating Customized Solutions Tailored To
//                   Your Specific Goals. With Our Expert Team, You Can Expect
//                   Innovative Strategies And Cutting-Edge and Tactics Designed To
//                   Deliver The Results You Need To Succeed In Today's Digital
//                   Landscape.
//                 </p>
//                 <button className="btn text-uppercase text-center banner_left_btn">
//                   <NavLink
//                     style={{ textDecoration: "none" }}
//                     className="text-dark"
//                     to={"/calender"}
//                   >
//                     send proposal
//                   </NavLink>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//       {/* <Visitor /> */}
//       <About />
//       <Services />
//       <Responsive />
//       <TimeLine />
//       <TeamSlider />
//       <ClientSay />
//       <Blogs />
//       <Footer />
//     </div>
//   );
// };

"use client";
import Header from "../../Common/Header/Headers";
import "./Home.css";
import "../../assets/css/media-query.css";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Responsive from "../../components/Res/Responsive";
import TimeLine from "../../components/TimeLine/TimeLine";
import TeamSlider from "../../components/TeamSlider/TeamSlider";
import ClientSay from "../../components/ClientSay/ClientSay";
import Blogs from "../../components/Blogs/Blogs";
import Background from "../../components/ReactParticles/Background";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../../Common/Footer/Footer";

export const Home = () => {
  return (
    <div className="ultra-premium-home">
      <Header tags={location.href} />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <Background />
          <div className="overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Premium Digital Solutions</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-main">Your Digital Success</span>
              <span className="hero-title-sub">Starts Here</span>
            </h1>

            <div className="typewriter-container">
              <Typewriter
                options={{
                  strings: [
                    "Your success fuels our mission.",
                    "Together, we achieve greatness.",
                    "Your goals are our priority.",
                    "Inspiring your triumph drives us.",
                    "We believe in your potential.",
                    "Your success is our motivation.",
                    "Empowering you to reach new heights.",
                    "Your achievements inspire our dedication.",
                    "Unleash your potential with our support.",
                    "Your success is our unwavering commitment.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <p className="hero-description">
              We create customized solutions tailored to your specific goals
              with innovative strategies and cutting-edge tactics designed to
              deliver results in today's digital landscape.
            </p>

            <div className="hero-cta">
              <NavLink to="/calender" className="primary-button">
                <span>Send Proposal</span>
                <svg
                  className="button-arrow"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NavLink>

              <button className="secondary-button">
                <span>Learn More</span>
              </button>
            </div>

            <div className="hero-stats" id="hero-stats">
              <div className="client-avatars">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="client-avatar">
                    <div className="avatar-placeholder"></div>
                  </div>
                ))}
              </div>
              <div className="stats-content">
                <div className="stats-rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="star-icon"
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="stats-text">Trusted by 1000+ clients</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-glow"></div>
              <div className="image-frame">
                <div className="image-content">
                  <div className="image-header">
                    <div className="image-logo">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div className="image-title">
                      <h3>Premium Dashboard</h3>
                      <p>Analytics Overview</p>
                    </div>
                  </div>

                  <div className="image-stats">
                    <div className="stat-item">
                      <div className="stat-value">89%</div>
                      <div className="stat-label">Conversion</div>
                      <div className="stat-bar">
                        <div
                          className="stat-bar-fill"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-value">12.5k</div>
                      <div className="stat-label">New Users</div>
                      <div className="stat-bar">
                        <div
                          className="stat-bar-fill"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="stat-item">
                      <div className="stat-value">$94.2k</div>
                      <div className="stat-label">Revenue</div>
                      <div className="stat-bar">
                        <div
                          className="stat-bar-fill"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="image-chart">
                    <div className="chart-header">
                      <h4>Monthly Growth</h4>
                      <div className="chart-legend">
                        <div className="legend-item">
                          <div className="legend-color legend-color-1"></div>
                          <div className="legend-label">Sales</div>
                        </div>
                        <div className="legend-item">
                          <div className="legend-color legend-color-2"></div>
                          <div className="legend-label">Traffic</div>
                        </div>
                      </div>
                    </div>
                    <div className="chart-bars" id="chart-bars">
                      {/* Chart bars will be generated via script */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-1">
                <div className="floating-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="floating-card-content">
                  <p className="floating-card-title">98% Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Direct component inclusion as in the original code */}
      <div className="main-content">
        {/* <Visitor /> */}
        <About />
        <Services />
        <Responsive />
        <TimeLine />
        <TeamSlider />
        <ClientSay />
        <Blogs />
      </div>

      <Footer />

      {/* Styles */}
      <style jsx>{`
        .ultra-premium-home {
          position: relative;
          overflow-x: hidden;
          background: #0f0c29;
          color: #fff;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-bottom: 0;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          contain: layout size;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(15, 12, 41, 0.8),
            rgba(48, 43, 99, 0.6),
            rgba(36, 36, 62, 0.7)
          );
          z-index: 1;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        @media (min-width: 768px) {
          .hero-content-wrapper {
            padding: 0 24px;
          }
        }

        @media (min-width: 1024px) {
          .hero-content-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 32px;
          }
        }

        .hero-content {
          width: 100%;
          max-width: 550px;
          margin-bottom: 40px;
        }

        @media (min-width: 1024px) {
          .hero-content {
            margin-bottom: 0;
            margin-right: 30px;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          margin-bottom: 16px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 1;
          transform: none;
        }

        .hero-badge span {
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .hero-title {
          margin-bottom: 16px;
          opacity: 1;
          transform: none;
        }

        .hero-title-main {
          display: block;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 4px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-title-sub {
          display: block;
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(to right, #ffffff, #a29bfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .typewriter-container {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 16px;
          min-height: 20px;
        }

        @media (min-width: 480px) {
          .hero-title-main,
          .hero-title-sub {
            font-size: 30px;
          }

          .typewriter-container {
            font-size: 16px;
          }
        }

        @media (min-width: 768px) {
          .hero-badge {
            padding: 6px 12px;
            margin-bottom: 20px;
          }

          .hero-badge span {
            font-size: 12px;
          }

          .hero-title-main,
          .hero-title-sub {
            font-size: 36px;
          }

          .hero-title {
            margin-bottom: 20px;
          }

          .typewriter-container {
            font-size: 18px;
            min-height: 24px;
          }
        }

        @media (min-width: 1280px) {
          .hero-title-main,
          .hero-title-sub {
            font-size: 42px;
          }

          .typewriter-container {
            font-size: 20px;
          }
        }

        .hero-description {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
          max-width: 550px;
          opacity: 1;
          transform: none;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 28px;
          }
        }

        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
          opacity: 1;
          transform: none;
          width: 100%;
        }

        @media (min-width: 480px) {
          .hero-cta {
            flex-direction: row;
            width: auto;
          }
        }

        .primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          color: white;
          font-weight: 600;
          font-size: 13px;
          border-radius: 6px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 16px rgba(97, 87, 255, 0.3);
          width: 100%;
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(97, 87, 255, 0.4);
        }

        .primary-button span {
          position: relative;
          z-index: 1;
        }

        .button-arrow {
          margin-left: 6px;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .primary-button:hover .button-arrow {
          transform: translateX(4px);
        }

        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          font-weight: 600;
          font-size: 13px;
          margin-left: -0.1rem;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          width: 100%;
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (min-width: 480px) {
          .primary-button,
          .secondary-button {
            width: auto;
          }
        }

        .hero-stats {
          display: flex;
          align-items: center;
          opacity: 1;
          transform: none;
        }

        .client-avatars {
          display: flex;
          margin-right: 12px;
        }

        .client-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          overflow: hidden;
          margin-left: -8px;
          background: rgba(255, 255, 255, 0.1);
        }

        .client-avatar:first-child {
          margin-left: 0;
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #6157ff, #74b9ff);
        }

        .stats-content {
          display: flex;
          flex-direction: column;
        }

        .stats-rating {
          display: flex;
          margin-bottom: 2px;
        }

        .star-icon {
          color: #ffca28;
          margin-right: 2px;
        }

        .stats-text {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
        }

        .hero-image {
          width: 100%;
          max-width: 380px;
          opacity: 1;
          transform: none;
        }

        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }

        .image-glow {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background: radial-gradient(
            circle,
            rgba(97, 87, 255, 0.3) 0%,
            transparent 70%
          );
          filter: blur(30px);
          z-index: 0;
        }

        .image-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .image-content {
          width: 100%;
          height: 100%;
          padding: 16px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #1a1a3a, #24243e);
        }

        .image-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .image-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          border-radius: 8px;
          margin-right: 12px;
          color: white;
        }

        .image-title {
          display: flex;
          flex-direction: column;
        }

        .image-title h3 {
          font-size: 14px;
          font-weight: 700;
          color: white;
          margin: 0 0 2px 0;
        }

        .image-title p {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .image-stats {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-value {
          font-size: 16px;
          font-weight: 700;
          color: white;
        }

        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
        }

        .stat-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .stat-bar-fill {
          height: 100%;
          background: linear-gradient(to right, #6157ff, #74b9ff);
          border-radius: 2px;
        }

        .image-chart {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .chart-header h4 {
          font-size: 13px;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .chart-legend {
          display: flex;
          gap: 8px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .legend-color {
          width: 8px;
          height: 8px;
          border-radius: 2px;
        }

        .legend-color-1 {
          background: #6157ff;
        }

        .legend-color-2 {
          background: #74b9ff;
        }

        .legend-label {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.6);
        }

        .chart-bars {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 10px;
        }

        .chart-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
        }

        .chart-bar {
          width: 4px;
          border-radius: 2px;
          margin: 0 1px;
        }

        .chart-bar-1 {
          background: #6157ff;
        }

        .chart-bar-2 {
          background: #74b9ff;
        }

        .chart-label {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
        }

        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          padding: 10px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          z-index: 2;
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-card-1 {
          bottom: -10px;
          left: -10px;
        }

        .floating-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          border-radius: 6px;
          margin-right: 8px;
          color: white;
        }

        .floating-card-content {
          display: flex;
          flex-direction: column;
        }

        .floating-card-title {
          font-size: 11px;
          font-weight: 700;
          color: #302b63;
          margin: 0;
        }

        /* Main Content */
        .main-content {
          position: relative;
          z-index: 1;
          background: #0f0c29;
        }

        /* Responsive Adjustments for Mobile */
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 60px;
            min-height: auto;
            padding-bottom: 40px;
          }

          .hero-content-wrapper {
            padding: 0 16px;
          }

          .hero-content {
            margin-bottom: 30px;
            text-align: center;
          }

          .hero-badge {
            margin-left: auto;
            margin-right: auto;
            display: inline-flex;
          }

          .hero-title-main,
          .hero-title-sub {
            font-size: 24px;
          }

          .hero-description {
            font-size: 12px;
            margin-bottom: 20px;
            text-align: center;
          }

          .typewriter-container {
            text-align: center;
            font-size: 14px;
          }

          .hero-cta {
            justify-content: center;
          }

          .primary-button,
          .secondary-button {
            padding: 8px 16px;
            font-size: 12px;
          }

          .image-container {
            padding-bottom: 80%;
            max-width: 280px;
            margin: 0 auto;
          }

          .image-logo {
            width: 32px;
            height: 32px;
          }

          .image-title h3 {
            font-size: 12px;
          }

          .image-title p {
            font-size: 10px;
          }

          .stat-value {
            font-size: 14px;
          }

          .stat-label {
            font-size: 10px;
          }

          .chart-header h4 {
            font-size: 12px;
          }

          .legend-label {
            font-size: 9px;
          }

          .chart-bar {
            width: 3px;
          }

          .chart-label {
            font-size: 8px;
          }

          .floating-card {
            padding: 8px;
            bottom: -5px;
            left: -5px;
          }

          .floating-card-icon {
            width: 24px;
            height: 24px;
          }

          .floating-card-title {
            font-size: 10px;
          }
        }

        /* Extra Small Mobile Adjustments */
        @media (max-width: 374px) {
          .hero-title-main,
          .hero-title-sub {
            font-size: 22px;
          }

          .hero-description {
            font-size: 11px;
          }

          .typewriter-container {
            font-size: 12px;
          }

          .primary-button,
          .secondary-button {
            padding: 7px 14px;
            font-size: 11px;
          }

          .image-container {
            padding-bottom: 90%;
          }

          .image-content {
            padding: 12px;
          }

          .image-logo {
            width: 28px;
            height: 28px;
          }

          .image-stats {
            gap: 8px;
            margin-bottom: 12px;
          }

          .stat-value {
            font-size: 13px;
          }

          .chart-header {
            margin-bottom: 8px;
          }
        }
      `}</style>

      {/* Dynamic scripts for interactive elements */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // Initialize everything after page load
        window.addEventListener('load', function() {
          // Check if we're on mobile
          const isMobile = window.innerWidth < 768;
          
          // Hide stats on mobile
          if (isMobile) {
            const statsElement = document.getElementById('hero-stats');
            if (statsElement) {
              statsElement.style.display = 'none';
            }
          }
          
          // Generate chart bars
          const generateChartBars = () => {
            const chartBarsElement = document.getElementById('chart-bars');
            if (!chartBarsElement) return;
            
            const months = ["J", "F", "M", "A", "M", "J"];
            let chartHTML = '';
            
            months.forEach((month) => {
              const height1 = 30 + Math.floor(Math.random() * 40);
              const height2 = 20 + Math.floor(Math.random() * 50);
              
              chartHTML += \`
                <div class="chart-bar-group">
                  <div class="chart-bar chart-bar-1" style="height: \${height1}%"></div>
                  <div class="chart-bar chart-bar-2" style="height: \${height2}%"></div>
                  <div class="chart-label">\${month}</div>
                </div>
              \`;
            });
            
            chartBarsElement.innerHTML = chartHTML;
          };
          
          // Initialize everything
          generateChartBars();
        });
      `,
        }}
      />
    </div>
  );
};

export default Home;
