// import React from "react";
// import "./Service.css";
// import "../../assets/css/media-query.css";
// import Header from "../../Common/Header/Headers";
// import Banner from "../../Common/Banners/Banner";
// import { serviceData } from "../../services/static/serviceData";
// import ServiceImg from "../../assets/image/Services_Banner.jpeg";
// import { NavLink } from "react-router-dom";
// import Footer from "../../Common/Footer/Footer";

// const Service = () => {
//   function Slugs(text) {
//     return text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "-")
//       .replace(/[^a-zA-Z0-9-]/g, "")
//       .replace(/--+/g, "-");
//   }
//   return (
//     <>
//       <Header tags={location.href} />
//       <section id="services-page">
//         <div className="services_banner pb-5">
//           <Banner Img={ServiceImg} title="what our services ?" color="#fff" />
//         </div>
//         <div className="container">
//           <div className="wrapper">
//             <div className="title py-2">
//               <h3 className="text-uppercase text-left font-weight-bold">
//                 our all service stack
//               </h3>
//             </div>
//             <div className="service-box pt-4">
//               <div className="service-box">
//                 {serviceData.map((item) => (
//                   <div
//                     className="service-card rounded-lg"
//                     key={item.service_id}
//                   >
//                     <div className="d-flex">
//                       <img
//                         width="50"
//                         height="50"
//                         src={item.card_icons}
//                         alt={item.card_title}
//                         title={item.card_title}
//                       />
//                       <h4
//                         className="pl-4 text-capitalize"
//                         style={{ fontSize: "18px", fontWeight: "bold" }}
//                       >
//                         {item.card_title}
//                       </h4>
//                     </div>
//                     <p className="pt-3" style={{ fontSize: "14px" }}>
//                       {" "}
//                       <NavLink
//                         to={
//                           "/serivices/" +
//                           item.service_id +
//                           "/" +
//                           Slugs(item.card_title)
//                         }
//                         className="text-white"
//                       >
//                         {item.card_description}
//                       </NavLink>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Service;

"use client";

import { useState, useEffect } from "react";
import "../../assets/css/media-query.css";
import Header from "../../Common/Header/Headers";
import { serviceData } from "../../services/static/serviceData";
import ServiceImg from "../../assets/image/Services_Banner.jpeg";
import { NavLink } from "react-router-dom";
import Footer from "../../Common/Footer/Footer";

const Service = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for animations and parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on scroll with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  function Slugs(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .replace(/--+/g, "-");
  }

  return (
    <>
      <Header tags={location.href} />
      <style jsx>{`
        /* Ultra Premium Modern Services Page Styling */
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap");

        #services-page {
          font-family: "Montserrat", sans-serif;
          color: #e2e8f0;
          background-color: #0a0a0a;
          overflow-x: hidden;
          position: relative;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .wrapper {
          padding: 2rem 0 6rem;
        }

        /* Background Elements */
        .bg-gradient-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 15% 50%,
              rgba(56, 189, 248, 0.08) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 85, 247, 0.08) 0%,
              transparent 25%
            );
          pointer-events: none;
          z-index: 1;
        }

        /* Custom Premium Banner */
        .premium-banner {
          position: relative;
          height: 70vh;
          min-height: 500px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .banner-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.4) contrast(1.2);
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.7),
            rgba(10, 10, 10, 0.9)
          );
          z-index: 2;
        }

        .banner-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .banner-title {
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
          text-transform: capitalize;
        }

        .banner-title::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #c084fc, #818cf8);
        }

        .banner-subtitle {
          font-size: 1.25rem;
          font-weight: 300;
          color: #d4d4d8;
          max-width: 700px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }

        /* Section Titles */
        .title h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2.5rem;
          position: relative;
          padding-bottom: 1rem;
          letter-spacing: -0.5px;
          text-transform: capitalize;
        }

        .title h3::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: #c084fc;
        }

        .title h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 40px;
          width: 20px;
          height: 3px;
          background: #818cf8;
        }

        /* Service Cards Grid */
        .service-box {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Premium Service Card Styling */
        .service-card {
          background: #141414;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(192, 132, 252, 0.03) 0%,
            rgba(129, 140, 248, 0.03) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .service-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c084fc, #818cf8);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover::after {
          transform: scaleX(1);
        }

        .service-card.active {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .service-card.active::after {
          transform: scaleX(1);
        }

        .service-card .d-flex {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .service-card img {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
        }

        .service-card:hover img {
          transform: scale(1.1);
          filter: brightness(0) invert(1)
            drop-shadow(0 0 5px rgba(192, 132, 252, 0.5));
        }

        .service-card h4 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-left: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .service-card p {
          margin-top: 1.5rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #d4d4d8;
          position: relative;
          z-index: 2;
          flex-grow: 1;
        }

        .service-card a {
          color: #d4d4d8;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
        }

        .service-card:hover a {
          color: #ffffff;
        }

        /* Read More Link */
        .read-more {
          display: inline-flex;
          align-items: center;
          margin-top: 1.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #c084fc;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .read-more svg {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .service-card:hover .read-more {
          color: #d8b4fe;
        }

        .service-card:hover .read-more svg {
          transform: translateX(5px);
        }

        /* Animation Classes */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-fade-up {
          opacity: 0;
          transform: translateY(30px);
        }

        .stagger-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .banner-title {
            font-size: 3.5rem;
          }

          .service-box {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 1024px) {
          .banner-title {
            font-size: 3rem;
          }

          .banner-subtitle {
            font-size: 1.1rem;
          }

          .premium-banner {
            height: 60vh;
            min-height: 450px;
          }

          .title h3 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .service-box {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem;
          }

          .service-card img {
            width: 50px;
            height: 50px;
          }

          .service-card h4 {
            font-size: 1.3rem;
          }

          .title h3 {
            font-size: 1.8rem;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .banner-subtitle {
            font-size: 1rem;
          }

          .premium-banner {
            height: 50vh;
            min-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .service-box {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-card img {
            width: 40px;
            height: 40px;
          }

          .service-card h4 {
            font-size: 1.2rem;
            margin-left: 1rem;
          }

          .title h3 {
            font-size: 1.5rem;
          }

          .banner-title {
            font-size: 2rem;
          }

          .banner-subtitle {
            font-size: 0.9rem;
          }

          .premium-banner {
            height: 40vh;
            min-height: 300px;
          }
        }
      `}</style>

      <section id="services-page">
        {/* Background Gradient Overlay */}
        <div className="bg-gradient-overlay"></div>

        {/* Custom Premium Banner */}
        <div className="premium-banner">
          <img
            src={ServiceImg || "/placeholder.svg"}
            alt="Our Services"
            className="banner-image"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1 className="banner-title">Our Premium Services</h1>
            <p className="banner-subtitle">
              Discover our comprehensive range of cutting-edge solutions
              designed to elevate your business to new heights.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="wrapper">
            <div className="title animate-section" data-id="title">
              <h3
                className={`text-left font-weight-bold fade-up ${
                  isVisible.title ? "visible" : ""
                }`}
              >
                Our Complete Service Stack
              </h3>
            </div>

            <div className="service-box animate-section" data-id="services">
              {serviceData.map((item, index) => (
                <div
                  className={`service-card stagger-fade-up ${
                    isVisible.services ? "visible" : ""
                  } ${activeCard === item.service_id ? "active" : ""}`}
                  key={item.service_id}
                  style={{
                    transitionDelay: isVisible.services
                      ? `${index * 0.1}s`
                      : "0s",
                  }}
                  onMouseEnter={() => setActiveCard(item.service_id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="d-flex">
                    <img
                      src={item.card_icons || "/placeholder.svg"}
                      alt={item.card_title}
                      title={item.card_title}
                    />
                    <h4 className="text-capitalize">{item.card_title}</h4>
                  </div>
                  <p>
                    <NavLink
                      to={
                        "/serivices/" +
                        item.service_id +
                        "/" +
                        Slugs(item.card_title)
                      }
                    >
                      {item.card_description}

                      <span className="read-more">
                        Learn More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
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
                    </NavLink>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Service;
