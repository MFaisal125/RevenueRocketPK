// import React, { useEffect, useState } from "react";
// import "./Portfolio.css";
// import "../../assets/css/media-query.css";
// import img from "../../assets/image/meet.jpeg";
// import { NavLink } from "react-router-dom";
// import { portfolioData } from "../../services/static/portfolioData";
// import Banner from "../../Common/Banners/Banner";
// import Header from "../../Common/Header/Headers";
// import Footer from "../../Common/Footer/Footer";
// import githubIcon from "../../assets/image/social_image/github.png";
// import domainIcon from "../../assets/image/social_image/domain.png";
// export const Portfolio = () => {
//   const [data, setData] = useState([]);
//   const [collection, setCollection] = useState([]);

//   useEffect(() => {
//     setData(portfolioData);
//     setCollection([...new Set(portfolioData.map((item) => item.category))]);
//   }, []);

//   const GellaryFilter = (itemData) => {
//     const FiterData = portfolioData.filter((item) => item.category == itemData);
//     setData(FiterData);
//   };
//   return (
//     <>
//       <Header tags={location.href} />
//       <Banner Img={img} title="about Our Work" color="#fff" />
//       <section id="portfolio-page">
//         <div className="container">
//           <div className="title">
//             <h2 className="text-uppercase text-center">our project</h2>
//             <div className="underline"></div>
//           </div>
//           <div className="filter-container">
//             <ul className="categories">
//               <li
//                 className="filter_item active"
//                 onClick={() => setData(portfolioData)}
//               >
//                 all
//               </li>
//               {collection.map((item) => (
//                 <li
//                   className="filter_item active"
//                   onClick={() => {
//                     GellaryFilter(item);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="card-container">
//             <div className="portfolio_item_box">
//               {data.map((item) => {
//                 return (
//                   <div className="item p-3 rounded-xl">
//                     <div
//                       className="social_link pb-3 px-2"
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       <span></span>
//                       <span>
//                         <NavLink to={item.live_url} target="_blank">
//                           <img
//                             width="30"
//                             height="30"
//                             src={domainIcon}
//                             alt="domain"
//                             target="_blank"
//                           />
//                         </NavLink>
//                       </span>
//                     </div>
//                     <NavLink to={item.live_url} target="_blank">
//                       <img
//                         title={item.title}
//                         className="portfolio_thumb"
//                         src={item.thumbnail}
//                         style={{ width: "100%", height: "200px" }}
//                         alt={item.title}
//                         target="_blank"
//                       />
//                     </NavLink>
//                     <div className="details">
//                       <div className="description">
//                         <p
//                           style={{ fontSize: "16px" }}
//                           className="m-0 p-0 p-1 font-weight-bold pt-3 text-left text-capitalize"
//                         >
//                           {item.title.slice(0, 90)}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// "use client";

// import { useEffect, useState, useRef } from "react";
// import "../../assets/css/media-query.css";
// import img from "../../assets/image/meet.jpeg";
// import { NavLink } from "react-router-dom";
// import { portfolioData } from "../../services/static/portfolioData";
// import Header from "../../Common/Header/Headers";
// import Footer from "../../Common/Footer/Footer";
// import domainIcon from "../../assets/image/social_image/domain.png";

// export const Portfolio = () => {
//   const [data, setData] = useState([]);
//   const [collection, setCollection] = useState([]);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [isVisible, setIsVisible] = useState({});
//   const [scrollY, setScrollY] = useState(0);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const bannerRef = useRef(null);

//   // Handle scroll for animations and parallax
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation on scroll with IntersectionObserver
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.15,
//     };

//     const handleIntersect = (entries) => {
//       entries.forEach((entry) => {
//         const id = entry.target.getAttribute("data-id");
//         if (entry.isIntersecting) {
//           setIsVisible((prev) => ({ ...prev, [id]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);

//     const sections = document.querySelectorAll(".animate-section");
//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   useEffect(() => {
//     setData(portfolioData);
//     setCollection([...new Set(portfolioData.map((item) => item.category))]);
//   }, []);

//   const galleryFilter = (itemData) => {
//     if (itemData === "all") {
//       setData(portfolioData);
//       setActiveFilter("all");
//     } else {
//       const filteredData = portfolioData.filter(
//         (item) => item.category === itemData
//       );
//       setData(filteredData);
//       setActiveFilter(itemData);
//     }
//   };

//   return (
//     <>
//       <Header tags={location.href} />
//       <style jsx>{`
//         /* Ultra Premium Modern Portfolio Page Styling */
//         @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap");

//         #portfolio-page {
//           font-family: "Montserrat", sans-serif;
//           color: #e2e8f0;
//           background-color: #0a0a0a;
//           overflow-x: hidden;
//           position: relative;
//           padding-bottom: 6rem;
//         }

//         .container {
//           max-width: 1300px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         /* Background Elements */
//         .bg-gradient-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(
//               circle at 15% 50%,
//               rgba(56, 189, 248, 0.08) 0%,
//               transparent 25%
//             ),
//             radial-gradient(
//               circle at 85% 30%,
//               rgba(168, 85, 247, 0.08) 0%,
//               transparent 25%
//             );
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* Custom Premium Banner */
//         .premium-banner {
//           position: relative;
//           height: 70vh;
//           min-height: 500px;
//           width: 100%;
//           overflow: hidden;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 4rem;
//         }

//         .banner-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           z-index: 1;
//           filter: brightness(0.4) contrast(1.2);
//         }

//         .banner-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//             rgba(10, 10, 10, 0.7),
//             rgba(10, 10, 10, 0.9)
//           );
//           z-index: 2;
//         }

//         .banner-content {
//           position: relative;
//           z-index: 3;
//           text-align: center;
//           max-width: 900px;
//           padding: 0 2rem;
//         }

//         .banner-title {
//           font-size: 4.5rem;
//           font-weight: 800;
//           letter-spacing: -1px;
//           margin-bottom: 1.5rem;
//           line-height: 1.1;
//           background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           position: relative;
//           display: inline-block;
//           text-transform: capitalize;
//         }

//         .banner-title::after {
//           content: "";
//           position: absolute;
//           bottom: -15px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 100px;
//           height: 3px;
//           background: linear-gradient(90deg, #c084fc, #818cf8);
//         }

//         .banner-subtitle {
//           font-size: 1.25rem;
//           font-weight: 300;
//           color: #d4d4d8;
//           max-width: 700px;
//           margin: 2rem auto 0;
//           line-height: 1.6;
//         }

//         /* Title Styling */
//         .title {
//           text-align: center;
//           margin-bottom: 3rem;
//           position: relative;
//         }

//         .title h2 {
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 1rem;
//           letter-spacing: -0.5px;
//           text-transform: capitalize;
//           position: relative;
//           display: inline-block;
//         }

//         .title h2::after {
//           content: "";
//           position: absolute;
//           bottom: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(90deg, #c084fc, #818cf8);
//           border-radius: 3px;
//         }

//         /* Filter Categories */
//         .filter-container {
//           margin-bottom: 3rem;
//         }

//         .categories {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 1rem;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .filter_item {
//           padding: 0.75rem 1.5rem;
//           background: rgba(30, 41, 59, 0.5);
//           border-radius: 30px;
//           cursor: pointer;
//           font-size: 0.95rem;
//           font-weight: 500;
//           color: #d4d4d8;
//           text-transform: capitalize;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(148, 163, 184, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .filter_item::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(192, 132, 252, 0.2),
//             rgba(129, 140, 248, 0.2)
//           );
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: -1;
//         }

//         .filter_item:hover {
//           color: #ffffff;
//           border-color: rgba(192, 132, 252, 0.3);
//           transform: translateY(-3px);
//         }

//         .filter_item:hover::before {
//           opacity: 1;
//         }

//         .filter_item.active {
//           background: linear-gradient(
//             135deg,
//             rgba(192, 132, 252, 0.2),
//             rgba(129, 140, 248, 0.2)
//           );
//           color: #ffffff;
//           border-color: rgba(192, 132, 252, 0.3);
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//         }

//         /* Portfolio Grid */
//         .card-container {
//           width: 100%;
//         }

//         .portfolio_item_box {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//           gap: 2rem;
//         }

//         /* Portfolio Item */
//         .item {
//           background: #141414;
//           border-radius: 12px;
//           overflow: hidden;
//           position: relative;
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .item::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(192, 132, 252, 0.03),
//             rgba(129, 140, 248, 0.03)
//           );
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: 1;
//           pointer-events: none;
//         }

//         .item:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
//         }

//         .item:hover::before {
//           opacity: 1;
//         }

//         .social_link {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         .social_link img {
//           transition: all 0.3s ease;
//           filter: brightness(0.9);
//         }

//         .social_link img:hover {
//           transform: scale(1.1);
//           filter: brightness(1);
//         }

//         .portfolio_thumb {
//           width: 100%;
//           height: 250px !important;
//           object-fit: cover;
//           transition: all 0.5s ease;
//           position: relative;
//           z-index: 2;
//         }

//         .item:hover .portfolio_thumb {
//           transform: scale(1.05);
//         }

//         .details {
//           padding: 1.5rem;
//           position: relative;
//           z-index: 2;
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .description p {
//           font-size: 1.1rem !important;
//           font-weight: 600;
//           color: #ffffff;
//           margin-bottom: 0.5rem;
//           line-height: 1.4;
//         }

//         .category-tag {
//           display: inline-block;
//           padding: 0.4rem 1rem;
//           background: rgba(192, 132, 252, 0.1);
//           border-radius: 20px;
//           font-size: 0.8rem;
//           color: #c084fc;
//           margin-top: 1rem;
//           border: 1px solid rgba(192, 132, 252, 0.2);
//         }

//         /* Item Overlay */
//         .item-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(10, 10, 10, 0.7);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: 3;
//         }

//         .item:hover .item-overlay {
//           opacity: 1;
//         }

//         .view-project {
//           padding: 0.75rem 1.5rem;
//           background: linear-gradient(135deg, #c084fc, #818cf8);
//           border-radius: 30px;
//           color: #ffffff;
//           font-weight: 600;
//           font-size: 0.95rem;
//           transform: translateY(20px);
//           opacity: 0;
//           transition: all 0.3s ease 0.1s;
//           text-decoration: none;
//         }

//         .item:hover .view-project {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         /* Animation Classes */
//         .fade-up {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }

//         .fade-up.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .stagger-fade-up {
//           opacity: 0;
//           transform: translateY(30px);
//         }

//         .stagger-fade-up.visible {
//           opacity: 1;
//           transform: translateY(0);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }

//         /* Responsive Design */
//         @media (max-width: 1200px) {
//           .banner-title {
//             font-size: 3.5rem;
//           }

//           .portfolio_item_box {
//             grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//           }
//         }

//         @media (max-width: 1024px) {
//           .banner-title {
//             font-size: 3rem;
//           }

//           .banner-subtitle {
//             font-size: 1.1rem;
//           }

//           .premium-banner {
//             height: 60vh;
//             min-height: 450px;
//           }

//           .title h2 {
//             font-size: 2.2rem;
//           }

//           .portfolio_item_box {
//             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//             gap: 1.5rem;
//           }
//         }

//         @media (max-width: 768px) {
//           .portfolio_item_box {
//             grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//             gap: 1.25rem;
//           }

//           .portfolio_thumb {
//             height: 200px !important;
//           }

//           .description p {
//             font-size: 1rem !important;
//           }

//           .title h2 {
//             font-size: 1.8rem;
//           }

//           .banner-title {
//             font-size: 2.5rem;
//           }

//           .banner-subtitle {
//             font-size: 1rem;
//           }

//           .premium-banner {
//             height: 50vh;
//             min-height: 400px;
//           }

//           .categories {
//             gap: 0.75rem;
//           }

//           .filter_item {
//             padding: 0.6rem 1.2rem;
//             font-size: 0.85rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .container {
//             padding: 0 1rem;
//           }

//           .portfolio_item_box {
//             grid-template-columns: 1fr;
//           }

//           .title h2 {
//             font-size: 1.5rem;
//           }

//           .banner-title {
//             font-size: 2rem;
//           }

//           .banner-subtitle {
//             font-size: 0.9rem;
//           }

//           .premium-banner {
//             height: 40vh;
//             min-height: 300px;
//           }

//           .categories {
//             justify-content: flex-start;
//             overflow-x: auto;
//             padding-bottom: 1rem;
//             -webkit-overflow-scrolling: touch;
//             scrollbar-width: none;
//             -ms-overflow-style: none;
//           }

//           .categories::-webkit-scrollbar {
//             display: none;
//           }

//           .filter_item {
//             flex-shrink: 0;
//           }
//         }
//       `}</style>

//       <section id="portfolio-page">
//         {/* Background Gradient Overlay */}
//         <div className="bg-gradient-overlay"></div>

//         {/* Custom Premium Banner */}
//         <div className="premium-banner" ref={bannerRef}>
//           <img
//             src={img || "/placeholder.svg"}
//             alt="Our Portfolio"
//             className="banner-image"
//             style={{ transform: `translateY(${scrollY * 0.2}px)` }}
//           />
//           <div className="banner-overlay"></div>
//           <div className="banner-content">
//             <h1 className="banner-title">Our Portfolio</h1>
//             <p className="banner-subtitle">
//               Explore our showcase of innovative projects and creative solutions
//               that demonstrate our expertise and commitment to excellence.
//             </p>
//           </div>
//         </div>

//         <div className="container">
//           <div className="title animate-section" data-id="title">
//             <h2 className={`fade-up ${isVisible.title ? "visible" : ""}`}>
//               Featured Projects
//             </h2>
//           </div>

//           <div className="filter-container animate-section" data-id="filters">
//             <ul
//               className={`categories fade-up ${
//                 isVisible.filters ? "visible" : ""
//               }`}
//             >
//               <li
//                 className={`filter_item ${
//                   activeFilter === "all" ? "active" : ""
//                 }`}
//                 onClick={() => galleryFilter("all")}
//               >
//                 All
//               </li>
//               {collection.map((item, index) => (
//                 <li
//                   key={index}
//                   className={`filter_item ${
//                     activeFilter === item ? "active" : ""
//                   }`}
//                   onClick={() => {
//                     galleryFilter(item);
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="card-container animate-section" data-id="portfolio">
//             <div className="portfolio_item_box">
//               {data.map((item, index) => (
//                 <div
//                   className={`item stagger-fade-up ${
//                     isVisible.portfolio ? "visible" : ""
//                   }`}
//                   key={item.id || index}
//                   style={{
//                     transitionDelay: isVisible.portfolio
//                       ? `${index * 0.1}s`
//                       : "0s",
//                   }}
//                   onMouseEnter={() => setHoveredItem(item.id || index)}
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <div className="social_link">
//                     <span className="category-tag">{item.category}</span>
//                     <span>
//                       <NavLink to={item.live_url} target="_blank">
//                         <img
//                           width="30"
//                           height="30"
//                           src={domainIcon || "/placeholder.svg"}
//                           alt="Visit Website"
//                           title="Visit Website"
//                         />
//                       </NavLink>
//                     </span>
//                   </div>

//                   <NavLink to={item.live_url} target="_blank">
//                     <img
//                       title={item.title}
//                       className="portfolio_thumb"
//                       src={item.thumbnail || "/placeholder.svg"}
//                       alt={item.title}
//                     />
//                   </NavLink>

//                   <div className="details">
//                     <div className="description">
//                       <p className="text-capitalize">
//                         {item.title.length > 60
//                           ? `${item.title.slice(0, 60)}...`
//                           : item.title}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Overlay on hover */}
//                   <div
//                     className="item-overlay"
//                     style={{
//                       opacity: hoveredItem === (item.id || index) ? 1 : 0,
//                     }}
//                   >
//                     <NavLink
//                       to={item.live_url}
//                       target="_blank"
//                       className="view-project"
//                       style={{
//                         opacity: hoveredItem === (item.id || index) ? 1 : 0,
//                         transform:
//                           hoveredItem === (item.id || index)
//                             ? "translateY(0)"
//                             : "translateY(20px)",
//                       }}
//                     >
//                       View Project
//                     </NavLink>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { portfolioData } from "../../services/static/portfolioData";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import domainIcon from "../../assets/image/social_image/domain.png";
import img from "../../assets/image/meet.jpeg";

export const Portfolio = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  // Animation on scroll with IntersectionObserver - simplified for performance
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

  useEffect(() => {
    setData(portfolioData);
    setCollection([...new Set(portfolioData.map((item) => item.category))]);
  }, []);

  const galleryFilter = (itemData) => {
    if (itemData === "all") {
      setData(portfolioData);
      setActiveFilter("all");
    } else {
      const filteredData = portfolioData.filter(
        (item) => item.category === itemData
      );
      setData(filteredData);
      setActiveFilter(itemData);
    }
  };

  return (
    <>
      <Header tags={location.href} />

      <div className="portfolio-wrapper">
        {/* Custom Premium Banner - Simplified */}
        <div className="premium-banner">
          <img
            src={img || "/placeholder.svg"}
            alt="Our Portfolio"
            className="banner-image"
          />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <div className="banner-badge">Premium Portfolio</div>
            <h1 className="banner-title">Creative Excellence</h1>
            <div className="banner-divider"></div>
            <p className="banner-subtitle">
              Discover our showcase of innovative projects and bespoke solutions
              crafted with precision and artistic vision.
            </p>
          </div>
        </div>

        <section id="portfolio-page">
          {/* Background Elements - Simplified */}
          <div className="bg-gradient-overlay"></div>

          <div className="container">
            <div className="title animate-section" data-id="title">
              <div className="title-badge">Our Work</div>
              <h2 className={`fade-up ${isVisible.title ? "visible" : ""}`}>
                Featured Projects
              </h2>
              <p
                className={`title-description fade-up ${
                  isVisible.title ? "visible" : ""
                }`}
              >
                Browse through our carefully curated collection of premium
                projects
              </p>
            </div>

            <div className="filter-container animate-section" data-id="filters">
              <ul
                className={`categories fade-up ${
                  isVisible.filters ? "visible" : ""
                }`}
              >
                <li
                  className={`filter_item ${
                    activeFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => galleryFilter("all")}
                >
                  <span className="filter-text">All</span>
                </li>
                {collection.map((item, index) => (
                  <li
                    key={index}
                    className={`filter_item ${
                      activeFilter === item ? "active" : ""
                    }`}
                    onClick={() => {
                      galleryFilter(item);
                    }}
                  >
                    <span className="filter-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-container animate-section" data-id="portfolio">
              <div className="portfolio_item_box">
                {data.map((item, index) => (
                  <div
                    className={`item stagger-fade-up ${
                      isVisible.portfolio ? "visible" : ""
                    }`}
                    key={item.id || index}
                    style={{
                      transitionDelay: isVisible.portfolio
                        ? `${Math.min(index, 5) * 0.1}s`
                        : "0s",
                    }}
                    onMouseEnter={() => setHoveredItem(item.id || index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="item-inner">
                      <div className="item-top">
                        <div className="social_link">
                          <span className="category-tag">{item.category}</span>
                          <span className="domain-link">
                            <NavLink to={item.live_url} target="_blank">
                              <img
                                width="30"
                                height="30"
                                src={domainIcon || "/placeholder.svg"}
                                alt="Visit Website"
                                title="Visit Website"
                              />
                            </NavLink>
                          </span>
                        </div>

                        <div className="image-container">
                          <NavLink to={item.live_url} target="_blank">
                            <img
                              title={item.title}
                              className="portfolio_thumb"
                              src={item.thumbnail || "/placeholder.svg"}
                              alt={item.title}
                              loading="lazy" // Added for performance
                            />
                          </NavLink>
                        </div>
                      </div>

                      <div className="details">
                        <div className="description">
                          <h3 className="item-title">
                            {item.title.length > 60
                              ? `${item.title.slice(0, 60)}...`
                              : item.title}
                          </h3>
                          {item.description && (
                            <p className="item-description">
                              {item.description.length > 100
                                ? `${item.description.slice(0, 100)}...`
                                : item.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Simplified overlay */}
                      <div
                        className="item-overlay"
                        style={{
                          opacity: hoveredItem === (item.id || index) ? 1 : 0,
                        }}
                      >
                        <NavLink
                          to={item.live_url}
                          target="_blank"
                          className="view-project"
                        >
                          <span className="btn-text">View Project</span>
                          <span className="btn-icon">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        /* Ultra Premium Modern Portfolio Page Styling - Optimized for Performance */
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");

        /* Main Styles */
        .portfolio-wrapper {
          font-family: "Plus Jakarta Sans", sans-serif;
          color: #e2e8f0;
          background-color: #0a0a0a;
          overflow-x: hidden;
          position: relative;
        }

        #portfolio-page {
          position: relative;
          padding-bottom: 6rem;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Background Elements - Simplified */
        .bg-gradient-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 15% 50%,
              rgba(56, 189, 248, 0.05) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 85, 247, 0.05) 0%,
              transparent 25%
            );
          pointer-events: none;
          z-index: 1;
        }

        /* Custom Premium Banner - Simplified */
        .premium-banner {
          position: relative;
          height: 70vh;
          min-height: 500px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .banner-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.3) contrast(1.2);
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
          max-width: 1000px;
          padding: 0 2rem;
        }

        .banner-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #c084fc;
          margin-bottom: 2rem;
          border: 1px solid rgba(192, 132, 252, 0.2);
          letter-spacing: 1px;
          text-transform: uppercase;
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

        .banner-divider {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #c084fc, #818cf8);
          margin: 2rem auto;
          position: relative;
        }

        .banner-divider::before,
        .banner-divider::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c084fc;
        }

        .banner-divider::before {
          left: -10px;
        }

        .banner-divider::after {
          right: -10px;
        }

        .banner-subtitle {
          font-size: 1.25rem;
          font-weight: 300;
          color: #d4d4d8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Title Styling */
        .title {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .title-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(192, 132, 252, 0.1);
          border-radius: 20px;
          font-size: 0.8rem;
          color: #c084fc;
          margin-bottom: 1rem;
          border: 1px solid rgba(192, 132, 252, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .title h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }

        .title-description {
          font-size: 1.1rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filter Categories */
        .filter-container {
          margin-bottom: 4rem;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .filter_item {
          position: relative;
          padding: 0.75rem 1.5rem;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 30px;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          color: #d4d4d8;
          text-transform: capitalize;
          transition: all 0.3s ease;
          border: 1px solid rgba(148, 163, 184, 0.1);
          overflow: hidden;
        }

        .filter_item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(192, 132, 252, 0.2),
            rgba(129, 140, 248, 0.2)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .filter-text {
          position: relative;
          z-index: 1;
        }

        .filter_item:hover {
          color: #ffffff;
          border-color: rgba(192, 132, 252, 0.3);
        }

        .filter_item:hover::before {
          opacity: 1;
        }

        .filter_item.active {
          background: linear-gradient(
            135deg,
            rgba(192, 132, 252, 0.2),
            rgba(129, 140, 248, 0.2)
          );
          color: #ffffff;
          border-color: rgba(192, 132, 252, 0.3);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Portfolio Grid */
        .card-container {
          width: 100%;
        }

        .portfolio_item_box {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        /* Portfolio Item */
        .item {
          position: relative;
          height: 100%;
        }

        .item-inner {
          background: #141414;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .item:hover .item-inner {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .item-top {
          position: relative;
        }

        .social_link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          position: relative;
          z-index: 2;
        }

        .domain-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .domain-link:hover {
          background: rgba(192, 132, 252, 0.2);
        }

        .social_link img {
          transition: all 0.3s ease;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .portfolio_thumb {
          width: 100%;
          height: 100% !important;
          object-fit: cover;
          transition: all 0.5s ease;
          position: relative;
          z-index: 2;
        }

        .item:hover .portfolio_thumb {
          transform: scale(1.05);
        }

        .details {
          padding: 1.75rem;
          position: relative;
          z-index: 2;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .item-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .item-description {
          font-size: 0.95rem;
          color: #a1a1aa;
          line-height: 1.6;
        }

        .category-tag {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(192, 132, 252, 0.1);
          border-radius: 20px;
          font-size: 0.8rem;
          color: #c084fc;
          border: 1px solid rgba(192, 132, 252, 0.2);
        }

        /* Item Overlay - Simplified */
        .item-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .view-project {
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #c084fc, #818cf8);
          border-radius: 30px;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 25px rgba(192, 132, 252, 0.3);
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .view-project:hover {
          transform: translateY(-3px);
        }

        /* Animation Classes - Simplified */
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-fade-up {
          opacity: 0;
          transform: translateY(20px);
        }

        .stagger-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        /* Responsive Design - Enhanced */
        @media (max-width: 1400px) {
          .portfolio_item_box {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
          }

          .banner-title {
            font-size: 4rem;
          }
        }

        @media (max-width: 1200px) {
          .banner-title {
            font-size: 3.5rem;
          }

          .portfolio_item_box {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.75rem;
          }

          .title h2 {
            font-size: 2.5rem;
          }

          .premium-banner {
            height: 60vh;
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
            height: 50vh;
            min-height: 400px;
          }

          .title h2 {
            font-size: 2.2rem;
          }

          .portfolio_item_box {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .portfolio_item_box {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1.25rem;
          }

          .image-container {
            height: 180px;
          }

          .item-title {
            font-size: 1.1rem;
          }

          .title h2 {
            font-size: 1.8rem;
          }

          .title-description {
            font-size: 1rem;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .banner-subtitle {
            font-size: 1rem;
          }

          .premium-banner {
            min-height: 350px;
          }

          .categories {
            gap: 0.75rem;
          }

          .filter_item {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }

          .social_link {
            padding: 1rem 1.25rem;
          }

          .details {
            padding: 1.25rem;
          }
        }

        @media (max-width: 640px) {
          .portfolio_item_box {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }

          .banner-title {
            font-size: 2.2rem;
          }

          .banner-subtitle {
            font-size: 0.95rem;
          }

          .title h2 {
            font-size: 1.6rem;
          }

          .title-description {
            font-size: 0.9rem;
          }

          .item-title {
            font-size: 1rem;
          }

          .item-description {
            font-size: 0.85rem;
          }

          .social_link {
            padding: 0.75rem 1rem;
          }

          .details {
            padding: 1rem;
          }

          .category-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.8rem;
          }

          .domain-link {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .portfolio_item_box {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .image-container {
            height: 200px;
          }

          .banner-title {
            font-size: 2rem;
          }

          .banner-subtitle {
            font-size: 0.9rem;
          }

          .premium-banner {
            min-height: 300px;
          }

          .categories {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 1rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            flex-wrap: nowrap;
          }

          .categories::-webkit-scrollbar {
            display: none;
          }

          .filter_item {
            flex-shrink: 0;
            white-space: nowrap;
          }

          .banner-badge {
            font-size: 0.8rem;
            padding: 0.4rem 1.2rem;
          }

          .title-badge {
            font-size: 0.75rem;
          }
        }

        /* Additional Mobile Optimizations */
        @media (max-width: 375px) {
          .banner-title {
            font-size: 1.8rem;
          }

          .banner-badge {
            font-size: 0.7rem;
            padding: 0.3rem 1rem;
          }

          .banner-subtitle {
            font-size: 0.85rem;
          }

          .title h2 {
            font-size: 1.4rem;
          }

          .filter_item {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .view-project {
            padding: 0.7rem 1.4rem;
            font-size: 0.9rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) {
          .item-overlay {
            background: rgba(10, 10, 10, 0.7);
          }

          .filter_item:active {
            background: rgba(192, 132, 252, 0.2);
            color: #ffffff;
          }
        }
      `}</style>
    </>
  );
};
