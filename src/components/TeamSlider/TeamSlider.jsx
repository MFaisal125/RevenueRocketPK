// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import "./TeamSlider.css";
// import { TeamData } from "../../services/static/TeamData";
// const Responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 2,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
// const TeamSlider = () => {
//   return (
//     <section id="team-slider">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <div className="team-slider-card">
//               <Carousel
//                 responsive={Responsive}
//                 swipeable={true}
//                 draggable={true}
//                 showDots={true}
//                 ssr={true} // means to render carousel on server-side.
//                 infinite={true}
//                 autoPlaySpeed={1000}
//                 keyBoardControl={true}
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//               >
//                 {TeamData.map((item) => (
//                   <div className="team-item" key={item.id}>
//                     <img
//                       title={item.designation}
//                       src={item.image}
//                       className="img-fluid"
//                       alt={item.designation}
//                     />
//                     <h5 className="text-capitalize text-white text-center m-0 p-0 pt-3">
//                       {item.name}
//                     </h5>
//                     <p className="text-capitalize text-white text-center m-0 p-0 pb-3">
//                       {item.designation}
//                     </p>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="title">
//               <p
//                 className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//                 style={{ fontSize: "12px" }}
//               >
//                 our teams
//               </p>
//               <h3 className="text-capitalize py-2">
//                 {" "}
//                 <span style={{ color: "#ed854f" }}>Revenue Rocket</span>'s
//                 Dynamic Team Driving Digital Success
//               </h3>
//             </div>
//             <p className="pt-3">
//               Revenue Rocket team is a talented group of technology experts who
//               excel in web and mobile app development, desktop applications,
//               SEO, graphics design, and penetration testing. With their diverse
//               skill set and innovative mindset, they deliver exceptional results
//               and bring digital visions to life. Trust our team to drive your
//               success in the digital landscape.
//             </p>
//             {/* <button className='btn m-0 p-2 text-capitalize btn-success'>our team</button> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSlider;

"use client";

import { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images from your assets folder
import appdeveloper from "../../assets/image/teams/appdeveloper.jpeg";
import backenddeveloper from "../../assets/image/teams/backenddeveloper.jpeg";
import digitalmarketer from "../../assets/image/teams/digitalmarketer.jpeg";
import graphicsdesigner from "../../assets/image/teams/graphicsdesigner.jpeg";
import softwareenginer from "../../assets/image/teams/softwareenginer.jpeg";
import uiux from "../../assets/image/teams/uiux.jpeg";
import webdeveloper from "../../assets/image/teams/webdeveloper.jpeg";

// Team data with your imported images
const TeamData = [
  {
    id: "1",
    name: "Aisha Rahman",
    designation: "sr. UI/UX designer",
    description: "",
    image: uiux,
    bio: "Expert in creating intuitive and beautiful user experiences with a focus on accessibility.",
  },
  {
    id: "2",
    name: "Fahad Ali",
    designation: "sr. Full-stack developer",
    image: webdeveloper,
    bio: "Versatile developer with expertise in both frontend and backend technologies.",
  },
  {
    id: "3",
    name: "Hasan Khan",
    designation: "sr. BackEnd developer",
    image: backenddeveloper,
    bio: "Specializes in building robust server-side applications and database architecture.",
  },
  {
    id: "4",
    name: "Adnan Hussain",
    designation: "mobile app developer",
    image: appdeveloper,
    bio: "Creates seamless mobile experiences for iOS and Android platforms.",
  },
  {
    id: "5",
    name: "Rafiq Ahmed",
    designation: "Software Engineer",
    image: softwareenginer,
    bio: "Problem solver with expertise in developing complex software solutions.",
  },
  {
    id: "6",
    name: "Mustafa Khan",
    designation: "sr. Digital Marketer",
    image: digitalmarketer,
    bio: "Drives growth through data-driven marketing strategies and campaigns.",
  },
  {
    id: "7",
    name: "Arif Rahman",
    designation: "sr. graphics designer",
    image: graphicsdesigner,
    bio: "Creates stunning visual content that elevates brand identity and messaging.",
  },
];

const TeamSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Auto-scroll control
  useEffect(() => {
    let interval;
    if (isAutoPlaying && carouselRef.current) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next();
        }
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-scroll when hovering over carousel
  const handleCarouselHover = (isHovering) => {
    setIsAutoPlaying(!isHovering);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
      className="custom-arrow custom-right-arrow"
      aria-label="Next slide"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={(e) => {
        onClick();
        e.stopPropagation();
      }}
      className="custom-arrow custom-left-arrow"
      aria-label="Previous slide"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  );

  const CustomDot = ({ onClick, active, index }) => (
    <button
      className={`custom-dot ${active ? "active" : ""}`}
      onClick={(e) => {
        onClick();
        setCurrentSlide(index);
        e.stopPropagation();
      }}
    />
  );

  // Progress indicator for current slide
  const progressPercentage = ((currentSlide + 1) / TeamData.length) * 100;

  return (
    <section id="team-slider">
      <div className="container">
        <div className="team-grid">
          <div
            className="team-carousel-wrapper"
            onMouseEnter={() => handleCarouselHover(true)}
            onMouseLeave={() => handleCarouselHover(false)}
          >
            <div className="decorative-element top-left"></div>
            <div className="decorative-element bottom-right"></div>

            <div className="carousel-container">
              <div className="progress-bar">
                <div
                  className="progress-indicator"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="auto-play-indicator">
                <div
                  className={`play-status ${
                    isAutoPlaying ? "playing" : "paused"
                  }`}
                >
                  {isAutoPlaying ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </div>
                <span className="slide-counter">
                  {currentSlide + 1}/{TeamData.length}
                </span>
              </div>

              <Carousel
                ref={carouselRef}
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlay={isAutoPlaying}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                transitionDuration={800}
                containerClass="carousel-container-inner"
                removeArrowOnDeviceType={["mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                customDot={<CustomDot />}
                renderDotsOutside={true}
                afterChange={(previousSlide, { currentSlide }) => {
                  setCurrentSlide(currentSlide);
                }}
              >
                {TeamData.map((member, index) => (
                  <div
                    key={member.id}
                    className="team-card-wrapper"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`team-card ${
                        hoveredIndex === index ? "hovered" : ""
                      }`}
                    >
                      <div className="team-image-container">
                        <div className="image-overlay-gradient"></div>
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="team-image"
                        />

                        <div className="social-icons-overlay">
                          <a href="#" className="social-icon">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="social-icon">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" className="social-icon">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <div className="team-info">
                        <h3 className="team-name">{member.name}</h3>
                        <div className="designation-container">
                          <div className="designation-line"></div>
                          <p className="team-designation">
                            {member.designation}
                          </p>
                        </div>
                        <p className="team-bio">
                          {member.bio ||
                            "Expert team member with a passion for delivering exceptional results."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="team-content">
            <div className="team-header">
              <div className="badge-container">
                <div className="badge-line"></div>
                <span className="team-badge">Our Teams</span>
              </div>

              <h2 className="team-title">
                <span className="highlight">Revenue Rocket</span>'s Dynamic Team
                Driving Digital Success
              </h2>

              <div className="title-underline"></div>

              <p className="team-description">
                Revenue Rocket team is a talented group of technology experts
                who excel in web and mobile app development, desktop
                applications, SEO, graphics design, and penetration testing.
                With their diverse skill set and innovative mindset, they
                deliver exceptional results and bring digital visions to life.
              </p>

              <div className="button-container">
                <button className="team-button">
                  <span className="button-text">Meet Our Team</span>
                  <span className="button-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main section styles */
        #team-slider {
          padding: 80px 0;
          background: linear-gradient(to bottom, #0f172a, #1e293b);
          overflow: hidden;
          position: relative;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: 2fr 1fr;
            align-items: center;
          }
        }

        /* Carousel container styles */
        .team-carousel-wrapper {
          position: relative;
          order: 2;
        }

        @media (min-width: 1024px) {
          .team-carousel-wrapper {
            order: 1;
          }
        }

        .decorative-element {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          z-index: 0;
        }

        .top-left {
          top: -40px;
          left: -40px;
          background: rgba(237, 133, 79, 0.1);
          filter: blur(24px);
        }

        .bottom-right {
          bottom: -40px;
          right: -40px;
          background: rgba(16, 185, 129, 0.1);
          filter: blur(24px);
        }

        .carousel-container {
          position: relative;
          z-index: 10;
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(4px);
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Progress bar */
        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 20;
        }

        .progress-indicator {
          height: 100%;
          background: linear-gradient(to right, #ed854f, #f09e6f);
          transition: width 0.4s ease-out;
        }

        /* Auto-play indicator */
        .auto-play-indicator {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          padding: 6px 10px;
          border-radius: 20px;
          z-index: 20;
        }

        .play-status {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .play-status.playing {
          color: #10b981;
        }

        .play-status.paused {
          color: #ed854f;
        }

        .slide-counter {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .carousel-container-inner {
          padding: 48px 0;
        }

        /* Team card styles */
        .team-card-wrapper {
          padding: 16px;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .team-card-wrapper:hover {
          transform: translateY(-10px);
        }

        .team-card {
          position: relative;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(to bottom, #1e293b, #0f172a);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .team-card.hovered {
          box-shadow: 0 20px 25px -5px rgba(237, 133, 79, 0.2);
          border-color: rgba(237, 133, 79, 0.2);
        }

        .team-image-container {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            #0f172a,
            transparent,
            transparent
          );
          z-index: 1;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
        }

        .social-icons-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          background-color: rgba(15, 23, 42, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .team-card:hover .social-icons-overlay {
          opacity: 1;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: #ed854f;
          transform: translateY(-5px);
        }

        .team-info {
          padding: 24px;
        }

        .team-name {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin: 0 0 4px 0;
        }

        .designation-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .designation-line {
          height: 2px;
          width: 24px;
          background-color: #ed854f;
        }

        .team-designation {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          text-transform: capitalize;
        }

        .team-bio {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Content section styles */
        .team-content {
          order: 1;
          animation: fadeInRight 0.6s ease-out 0.3s both;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1024px) {
          .team-content {
            order: 2;
          }
        }

        .team-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .badge-container {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .badge-line {
          height: 1px;
          width: 32px;
          background-color: #ed854f;
        }

        .team-badge {
          background: linear-gradient(to right, #10b981, #059669);
          color: white;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .team-title {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.2;
          color: white;
          margin: 0;
        }

        @media (min-width: 768px) {
          .team-title {
            font-size: 32px;
          }
        }

        .highlight {
          color: #ed854f;
        }

        .title-underline {
          width: 80px;
          height: 6px;
          background: linear-gradient(to right, #ed854f, #10b981);
          border-radius: 9999px;
        }

        .team-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin: 0;
        }

        .button-container {
          padding-top: 16px;
        }

        /* Improved button design */
        .team-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(to right, #ed854f, #f09e6f);
          color: white;
          font-size: 14px;
          font-weight: 500;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(237, 133, 79, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .team-button:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }

        .team-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(237, 133, 79, 0.3);
        }

        .team-button:hover:before {
          left: 100%;
        }

        .team-button:active {
          transform: translateY(1px);
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .team-button:hover .button-icon {
          transform: translateX(3px);
        }

        /* Custom carousel controls */
        .custom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-arrow:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .custom-left-arrow {
          left: 16px;
        }

        .custom-right-arrow {
          right: 16px;
        }

        @media (max-width: 768px) {
          .custom-arrow {
            width: 32px;
            height: 32px;
          }
        }

        /* Custom dots */
        .custom-dot-list-style {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .custom-dot {
          height: 8px;
          width: 8px;
          margin: 0 4px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .custom-dot.active {
          width: 32px;
          border-radius: 9999px;
          background-color: #ed854f;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .carousel-container-inner {
            padding-left: 0;
            padding-right: 0;
          }

          .team-title {
            font-size: 24px;
          }

          .auto-play-indicator {
            top: 12px;
            right: 12px;
            padding: 4px 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSlider;
