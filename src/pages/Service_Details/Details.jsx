// import React, { useEffect, useState } from "react";
// import "./Details.css";
// import "../../assets/css/media-query.css";
// import Headers from "../../Common/Header/Headers";
// import Banner from "../../Common/Banners/Banner";
// import { serviceData } from "../../services/static/serviceData";
// import Footer from "../../Common/Footer/Footer";
// import { useParams } from "react-router-dom";
// const Details = () => {
//   var [Service_data, setData] = useState([0]);
//   const { id } = useParams();
//   const filteredService = serviceData.find(
//     (service) => service.service_id === id
//   );
//   const {
//     card_icons,
//     card_title,
//     card_description,
//     stps_title,
//     service_title,
//     action_title,
//     action_desc,
//     service_sub_title,
//     service__img,
//     service_details,
//     stps_sub_title,
//     steps,
//   } = filteredService;

//   useEffect(() => {
//     const service = serviceData.find((item) => item.service_id === id);
//     setData(service);
//   }, []);
//   return (
//     <>
//       <Headers tags={location.href} />
//       <Banner Img={service__img} title={Service_data.service_title} />
//       <section id="service_details_page">
//         <div className="container">
//           <div className="s_details_wrapper">
//             <div className="actions_sections">
//               <div className="action_left">
//                 <img src={service__img} className="img-fluid rounded" alt="" />
//               </div>
//               <div className="action_right">
//                 <h3 className="actions_title">{action_title}</h3>
//                 <p className="actions_desc">{action_desc}</p>
//               </div>
//             </div>
//             <div className="technology_details">
//               <p>{service_details}</p>
//             </div>
//             <div className="work_stratigy">
//               <div className="title">
//                 <h3 className="text-center">{stps_title}</h3>
//                 <p className="p-0 m-0 text-center">{stps_sub_title}</p>
//               </div>
//               <div className="step_wrapper">
//                 <div className="step_item_box">
//                   {steps.map((step, index) => (
//                     <div className="steps_item" key={index}>
//                       <img
//                         width="45"
//                         height="45"
//                         src={step.steps_card_icons}
//                         alt={step.stps_card_title}
//                         title={step.stps_card_title}
//                       />
//                       <h4 className="text-center">{step.stps_card_title}</h4>
//                       <p className="p-0 m-0">
//                         {step.stps_desc || step.stps_card_desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ))} */}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Details;

"use client";

import { useEffect, useState, useRef } from "react";
import "./Details.css"; // Keeping the original CSS import
import "../../assets/css/media-query.css";
import Headers from "../../Common/Header/Headers";
// Import removed as we'll create our own banner
// import Banner from "../../Common/Banners/Banner";
import { serviceData } from "../../services/static/serviceData";
import Footer from "../../Common/Footer/Footer";
import { useParams } from "react-router-dom";

// Custom Premium Banner Component
const PremiumBanner = ({ Img, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    // Set loaded state after a short delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setParallaxOffset(scrollPosition * 0.4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="premium-banner">
      <div
        className="banner-background"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url(${Img})`,
        }}
      ></div>
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <div className={`banner-title-container ${isLoaded ? "loaded" : ""}`}>
          <div className="banner-accent-line left"></div>
          <h1 className="banner-title">{title}</h1>
          <div className="banner-accent-line right"></div>
        </div>

        <div
          className={`banner-subtitle-container ${isLoaded ? "loaded" : ""}`}
        >
          <p className="banner-subtitle">
            Innovative Solutions for Modern Challenges
          </p>
        </div>

        <div className={`banner-decoration ${isLoaded ? "loaded" : ""}`}>
          <div className="banner-diamond"></div>
        </div>
      </div>

      <div className="banner-bottom-fade"></div>
      <div className="banner-geometric-accent top-right"></div>
      <div className="banner-geometric-accent bottom-left"></div>
    </div>
  );
};

const Details = () => {
  const [Service_data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = useRef({});
  const { id } = useParams();

  // Ultra-premium styles with advanced effects
  const styles = {
    // Main colors from the website with enhanced palette
    colors: {
      primary: "#ff5e14", // Orange accent color
      primaryLight: "#ff7a3d", // Lighter orange for gradients
      primaryDark: "#e04d00", // Darker orange for hover states
      secondary: "#1e1e1e", // Dark gray
      background: "#000000", // Full black background
      backgroundAlt: "#0a0a0a", // Slightly lighter black for layering
      cardBg: "#111111", // Card background
      cardBgHover: "#181818", // Card background on hover
      text: "#ffffff", // White text
      textSecondary: "#dddddd", // Very light gray text (brightened)
      textMuted: "#bbbbbb", // Muted text (brightened)
      border: "#333333", // Brighter border color
      borderHighlight: "#ff5e14", // Highlighted border
      shadow: "rgba(0, 0, 0, 0.5)", // Shadow color
      shadowHighlight: "rgba(255, 94, 20, 0.3)", // Highlighted shadow
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)", // Text shadow for better readability
    },
    // Animations and transitions
    animation: {
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)", // Premium easing
      transitionFast: "all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1)",
      transitionSlow: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    // Container styles
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 15px",
    },
    serviceDetailsPage: {
      padding: "80px 0",
      background: "#000000", // Full black background
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    // Decorative elements
    decorativeCircle: {
      position: "absolute",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,94,20,0.1) 0%, rgba(255,94,20,0) 70%)",
      zIndex: 0,
    },
    decorativeLine: {
      position: "absolute",
      background:
        "linear-gradient(90deg, rgba(255,94,20,0.2), rgba(255,94,20,0))",
      height: "1px",
      width: "100%",
      left: 0,
      zIndex: 0,
    },
    // Section styles with enhanced visuals
    sectionWrapper: {
      position: "relative",
      zIndex: 1,
    },
    serviceIntro: {
      textAlign: "center",
      marginBottom: "80px",
      position: "relative",
    },
    sectionTitle: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "20px",
      color: "#ffffff",
      letterSpacing: "-0.5px",
      position: "relative",
      display: "inline-block",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    titleGlow: {
      position: "absolute",
      content: "''",
      width: "120%",
      height: "40%",
      left: "-10%",
      bottom: "-10%",
      background:
        "radial-gradient(ellipse at center, rgba(255,94,20,0.15) 0%, rgba(255,94,20,0) 70%)",
      filter: "blur(15px)",
      zIndex: -1,
    },
    serviceSubtitle: {
      fontSize: "1.3rem",
      color: "#dddddd", // Brightened from #cccccc
      marginBottom: "30px",
      maxWidth: "800px",
      margin: "0 auto 30px",
      lineHeight: 1.6,
      textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
    },
    accentDivider: {
      height: "4px",
      width: "80px",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d)",
      margin: "0 auto",
      borderRadius: "2px",
      position: "relative",
    },
    dividerGlow: {
      position: "absolute",
      content: "''",
      width: "100%",
      height: "100%",
      left: "0",
      top: "0",
      background: "#ff5e14",
      filter: "blur(8px)",
      opacity: 0.6,
      borderRadius: "2px",
    },
    // Action section with premium card design
    actionSection: {
      marginBottom: "100px",
      position: "relative",
    },
    actionCard: {
      background: "#111111",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "1px solid #222222",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    actionCardInner: {
      display: "flex",
      flexDirection: "column",
      "@media (min-width: 992px)": {
        flexDirection: "row",
      },
    },
    actionLeft: {
      position: "relative",
      overflow: "hidden",
      flex: "1",
      minHeight: "400px",
    },
    imageContainer: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
    },
    premiumImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    imageOverlay: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
      zIndex: 1,
    },
    imageCornerAccent: {
      position: "absolute",
      top: "20px",
      left: "20px",
      width: "60px",
      height: "60px",
      borderTop: "3px solid #ff5e14",
      borderLeft: "3px solid #ff5e14",
      zIndex: 2,
      opacity: 0.8,
    },
    actionRight: {
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: "1",
      position: "relative",
      zIndex: 2,
    },
    actionsTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "25px",
      color: "#ffffff",
      position: "relative",
      display: "inline-block",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    accentLine: {
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d)",
      marginBottom: "30px",
      borderRadius: "1.5px",
      position: "relative",
    },
    actionsDesc: {
      fontSize: "1.15rem",
      lineHeight: "1.9",
      color: "#dddddd", // Brightened from #cccccc
      marginBottom: "40px",
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
    },
    actionCta: {
      marginTop: "auto",
    },
    premiumButton: {
      background: "linear-gradient(45deg, #ff5e14, #ff7a3d)",
      color: "white",
      border: "none",
      padding: "15px 35px",
      borderRadius: "30px",
      fontWeight: "600",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
      boxShadow: "0 10px 25px rgba(255, 94, 20, 0.3)",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
    },
    buttonGlow: {
      position: "absolute",
      content: "''",
      background:
        "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
      width: "150px",
      height: "150px",
      left: "-75px",
      top: "-75px",
      transform: "scale(0)",
      opacity: 0,
      transition: "transform 0.6s, opacity 0.6s",
      zIndex: -1,
    },
    // Technology details section with premium card
    techDetails: {
      marginBottom: "100px",
      position: "relative",
    },
    techDetailsCard: {
      background: "#111111",
      borderRadius: "20px",
      padding: "50px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "1px solid #222222",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      position: "relative",
      overflow: "hidden",
    },
    cardCornerAccent: {
      position: "absolute",
      top: "0",
      right: "0",
      width: "150px",
      height: "150px",
      background:
        "radial-gradient(circle at top right, rgba(255,94,20,0.1) 0%, rgba(255,94,20,0) 70%)",
      zIndex: 0,
    },
    cardHeader: {
      marginBottom: "40px",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
    },
    cardHeaderTitle: {
      fontSize: "2.2rem",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "20px",
      position: "relative",
      display: "inline-block",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    techContent: {
      fontSize: "1.15rem",
      lineHeight: "1.9",
      color: "#dddddd", // Brightened from #cccccc
      position: "relative",
      zIndex: 1,
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
    },
    // Work strategy section with premium cards
    workStrategy: {
      marginBottom: "100px",
      position: "relative",
    },
    strategyTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: "20px",
      position: "relative",
      display: "inline-block",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    strategySubtitle: {
      fontSize: "1.15rem",
      color: "#dddddd", // Brightened from #cccccc
      textAlign: "center",
      marginBottom: "25px",
      maxWidth: "800px",
      margin: "0 auto 25px",
      lineHeight: 1.7,
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
    },
    centerDivider: {
      height: "4px",
      width: "80px",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d)",
      margin: "0 auto 60px",
      borderRadius: "2px",
      position: "relative",
    },
    stepItemBox: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "40px",
      marginTop: "40px",
    },
    stepsItem: {
      background: "#111111",
      borderRadius: "20px",
      padding: "50px 35px",
      textAlign: "center",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      position: "relative",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "1px solid #222222",
      overflow: "hidden",
      zIndex: 1,
    },
    stepItemGlow: {
      position: "absolute",
      bottom: "-50%",
      left: "-10%",
      width: "120%",
      height: "100%",
      background:
        "radial-gradient(ellipse at center, rgba(255,94,20,0.1) 0%, rgba(255,94,20,0) 70%)",
      opacity: 0,
      transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
      zIndex: 0,
    },
    stepNumber: {
      position: "absolute",
      top: "-20px",
      right: "-20px",
      width: "50px",
      height: "50px",
      background: "linear-gradient(45deg, #ff5e14, #ff7a3d)",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "700",
      fontSize: "1.3rem",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
      zIndex: 2,
    },
    stepIcon: {
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      zIndex: 1,
    },
    stepIconWrapper: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "#181818",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      border: "1px solid #222222",
    },
    stepIconImage: {
      width: "60px",
      height: "60px",
      filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    stepTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "20px",
      position: "relative",
      zIndex: 1,
      textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)",
    },
    stepDivider: {
      height: "3px",
      width: "50px",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d)",
      margin: "0 auto 25px",
      borderRadius: "1.5px",
      position: "relative",
      zIndex: 1,
    },
    stepDescription: {
      fontSize: "1.05rem",
      lineHeight: "1.8",
      color: "#dddddd", // Brightened from #cccccc
      position: "relative",
      zIndex: 1,
      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
    },
    // Call to action section with premium gradient
    ctaSection: {
      background: "linear-gradient(45deg, #ff5e14, #ff7a3d)",
      borderRadius: "20px",
      padding: "70px 50px",
      textAlign: "center",
      color: "white",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
      position: "relative",
      overflow: "hidden",
    },
    ctaPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage:
        "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 10%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 10%)",
      opacity: 0.8,
    },
    ctaContent: {
      maxWidth: "800px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    ctaTitle: {
      fontSize: "2.5rem",
      fontWeight: "800",
      marginBottom: "20px",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    },
    ctaDescription: {
      fontSize: "1.2rem",
      marginBottom: "40px",
      opacity: "0.95",
      maxWidth: "600px",
      margin: "0 auto 40px",
      lineHeight: 1.7,
    },
    ctaButton: {
      background: "white",
      color: "#ff5e14",
      border: "none",
      padding: "16px 40px",
      borderRadius: "30px",
      fontWeight: "700",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      position: "relative",
      overflow: "hidden",
    },
    // Loading state
    loadingContainer: {
      background: "#000000",
      color: "#ffffff",
      padding: "100px 20px",
      textAlign: "center",
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    loadingTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "30px",
      color: "#ffffff",
      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    loadingBar: {
      width: "200px",
      height: "4px",
      background: "#222222",
      borderRadius: "2px",
      overflow: "hidden",
      position: "relative",
    },
    loadingProgress: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "30%",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d)",
      borderRadius: "2px",
      animation: "loading 1.5s infinite",
    },
    // 3D perspective effect for cards
    perspective: {
      perspective: "1000px",
      transformStyle: "preserve-3d",
    },
    // Luxury gradient overlays
    luxuryOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(135deg, rgba(255,94,20,0.05) 0%, rgba(0,0,0,0) 50%, rgba(255,94,20,0.05) 100%)",
      pointerEvents: "none",
      zIndex: 2,
    },
    // Diamond accent elements
    diamondAccent: {
      position: "absolute",
      width: "30px",
      height: "30px",
      background: "#ff5e14",
      transform: "rotate(45deg)",
      zIndex: 2,
      boxShadow: "0 0 20px rgba(255,94,20,0.5)",
    },
    // Particle background
    particleBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0,
    },
    // Animated border
    animatedBorder: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      borderRadius: "20px",
      padding: "2px",
      background: "linear-gradient(90deg, #ff5e14, #ff7a3d, #ff5e14)",
      backgroundSize: "200% 200%",
      animation: "borderGradient 4s linear infinite",
      zIndex: 0,
    },
    // Frosted glass effect
    frostGlass: {
      background: "rgba(17, 17, 17, 0.7)",
      backdropFilter: "blur(10px)",
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    // Neon glow effect
    neonGlow: {
      boxShadow:
        "0 0 10px rgba(255,94,20,0.5), 0 0 20px rgba(255,94,20,0.3), 0 0 30px rgba(255,94,20,0.1)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    // Premium card styles
    premiumCard: {
      background: "linear-gradient(135deg, #111111 0%, #0a0a0a 100%)",
      borderRadius: "20px",
      padding: "50px",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "1px solid #333333",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
  };

  // Custom CSS for animations and premium banner
  const customCSS = `
    @keyframes loading {
      0% { left: -30%; }
      100% { left: 100%; }
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes pulse {
      0% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
      100% { opacity: 0.6; transform: scale(1); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes borderGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.05); opacity: 1; }
    }
    
    @keyframes rotateGlow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes textGlow {
      0%, 100% { text-shadow: 0 0 5px rgba(255,94,20,0.5), 0 0 15px rgba(255,94,20,0.3); }
      50% { text-shadow: 0 0 10px rgba(255,94,20,0.8), 0 0 20px rgba(255,94,20,0.5); }
    }
    
    @keyframes slideInLeft {
      from { transform: translateX(-100px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideInUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes scaleIn {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes rotateIn {
      from { transform: rotate(-90deg); opacity: 0; }
      to { transform: rotate(0); opacity: 1; }
    }
    
    /* Premium Banner Styles */
    .premium-banner {
      position: relative;
      height: 70vh;
      min-height: 500px;
      max-height: 800px;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .banner-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 120%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: scale(1.05);
      transition: transform 0.5s ease-out;
      filter: brightness(0.7);
    }
    
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%);
      z-index: 1;
    }
    
    .banner-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 1200px;
      width: 100%;
      padding: 0 20px;
    }
    
    .banner-title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .banner-title-container.loaded {
      opacity: 1;
      transform: translateY(0);
    }
    
    .banner-accent-line {
      height: 3px;
      width: 60px;
      background: linear-gradient(90deg, #ff5e14, #ff7a3d);
      position: relative;
      margin: 0 30px;
      border-radius: 3px;
    }
    
    .banner-accent-line::before {
      content: '';
      position: absolute;
      top: -3px;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ff5e14;
      filter: blur(5px);
      opacity: 0.6;
    }
    
    .banner-accent-line.left {
      transform: scaleX(0);
      transform-origin: right;
      animation: slideInLeft 1.2s forwards 0.3s;
    }
    
    .banner-accent-line.right {
      transform: scaleX(0);
      transform-origin: left;
      animation: slideInRight 1.2s forwards 0.3s;
    }
    
    .banner-title {
      font-size: 4rem;
      font-weight: 800;
      color: #ffffff;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      letter-spacing: -1px;
      margin: 0;
      padding: 0;
      position: relative;
    }
    
    .banner-subtitle-container {
      margin-bottom: 40px;
      opacity: 0;
      transition: opacity 0.8s ease, transform 0.8s ease;
      transform: translateY(30px);
    }
    
    .banner-subtitle-container.loaded {
      opacity: 1;
      transform: translateY(0);
    }
    
    .banner-subtitle {
      font-size: 1.5rem;
      color: #dddddd;
      font-weight: 300;
      margin: 0;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }
    
    .banner-decoration {
      opacity: 0;
      transition: opacity 0.8s ease, transform 0.8s ease;
      transform: scale(0);
    }
    
    .banner-decoration.loaded {
      opacity: 1;
      transform: scale(1);
      animation: rotateIn 1.2s forwards 0.6s;
    }
    
    .banner-diamond {
      width: 60px;
      height: 60px;
      background: linear-gradient(45deg, #ff5e14, #ff7a3d);
      transform: rotate(45deg);
      margin: 0 auto;
      position: relative;
      box-shadow: 0 0 30px rgba(255, 94, 20, 0.5);
    }
    
    .banner-diamond::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .banner-bottom-fade {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
      z-index: 1;
    }
    
    .banner-geometric-accent {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 2px solid rgba(255, 94, 20, 0.3);
      z-index: 1;
    }
    
    .banner-geometric-accent.top-right {
      top: 50px;
      right: 50px;
      border-top-right-radius: 100px;
      border-left: none;
      border-bottom: none;
    }
    
    .banner-geometric-accent.bottom-left {
      bottom: 50px;
      left: 50px;
      border-bottom-left-radius: 100px;
      border-right: none;
      border-top: none;
    }
    
    /* Responsive styles for the banner */
    @media (max-width: 992px) {
      .premium-banner {
        height: 60vh;
      }
      
      .banner-title {
        font-size: 3rem;
      }
      
      .banner-subtitle {
        font-size: 1.3rem;
      }
      
      .banner-accent-line {
        width: 40px;
        margin: 0 20px;
      }
    }
    
    @media (max-width: 768px) {
      .premium-banner {
        height: 50vh;
      }
      
      .banner-title {
        font-size: 2.5rem;
      }
      
      .banner-subtitle {
        font-size: 1.1rem;
      }
      
      .banner-accent-line {
        width: 30px;
        margin: 0 15px;
      }
      
      .banner-geometric-accent {
        width: 150px;
        height: 150px;
      }
      
      .banner-geometric-accent.top-right {
        top: 30px;
        right: 30px;
      }
      
      .banner-geometric-accent.bottom-left {
        bottom: 30px;
        left: 30px;
      }
    }
    
    @media (max-width: 480px) {
      .premium-banner {
        height: 40vh;
        min-height: 350px;
      }
      
      .banner-title {
        font-size: 2rem;
      }
      
      .banner-subtitle {
        font-size: 1rem;
      }
      
      .banner-accent-line {
        width: 20px;
        margin: 0 10px;
      }
      
      .banner-geometric-accent {
        width: 100px;
        height: 100px;
      }
    }
    
    .section-fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .section-fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .loading-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 30%;
      background: linear-gradient(90deg, #ff5e14, #ff7a3d);
      border-radius: 2px;
      animation: loading 1.5s infinite;
    }
    
    .floating {
      animation: float 6s ease-in-out infinite;
    }
    
    .pulsing {
      animation: pulse 3s ease-in-out infinite;
    }
    
    .fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
    
    .shimmer-effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
        rgba(255,255,255,0) 0%, 
        rgba(255,255,255,0.1) 50%, 
        rgba(255,255,255,0) 100%);
      transform: translateX(-100%);
      animation: shimmer 3s infinite;
      pointer-events: none;
    }
    
    .breathe {
      animation: breathe 6s ease-in-out infinite;
    }
    
    .rotate-glow {
      animation: rotateGlow 10s linear infinite;
    }
    
    .text-glow {
      animation: textGlow 3s ease-in-out infinite;
    }
    
    .premium-shadow {
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    
    .premium-text {
      background: linear-gradient(90deg, #ffffff, #dddddd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: none;
    }
    
    .premium-border {
      border: 1px solid;
      border-image: linear-gradient(90deg, #333333, #555555, #333333) 1;
    }
    
    .ultra-card {
      position: relative;
      z-index: 1;
      background: linear-gradient(135deg, #111111 0%, #0a0a0a 100%);
      border-radius: 20px;
      overflow: hidden;
    }
    
    .ultra-card::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #ff5e14, #ff7a3d, #ff5e14);
      z-index: -1;
      border-radius: 22px;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .ultra-card:hover::before {
      opacity: 1;
    }
    
    .ultra-card-content {
      background: #111111;
      border-radius: 18px;
      position: relative;
      z-index: 2;
      height: 100%;
    }
    
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  useEffect(() => {
    // Find the service data based on the ID
    const service = serviceData.find((item) => item.service_id === id);
    setData(service || null);

    // Set body background to black
    document.body.style.backgroundColor = "#000000";

    // Add custom CSS for animations
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customCSS;
    document.head.appendChild(styleElement);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all sections
    setTimeout(() => {
      document.querySelectorAll(".section-fade-in").forEach((section) => {
        observer.observe(section);
      });

      // Set loaded state after a short delay for animation
      setIsLoaded(true);
    }, 500);

    return () => {
      // Reset body background when component unmounts
      document.body.style.backgroundColor = "";
      document.head.removeChild(styleElement);
      observer.disconnect();
    };
  }, [id, customCSS]);

  // If data is still loading or not found
  if (!Service_data) {
    return (
      <>
        <Headers tags={location.href} />
        <div style={styles.loadingContainer}>
          <h2 style={styles.loadingTitle}>Loading premium experience...</h2>
          <div style={styles.loadingBar}>
            <div className="loading-progress"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Render decorative elements
  const renderDecorations = () => {
    return (
      <>
        {/* Top left circle */}
        <div
          style={{
            ...styles.decorativeCircle,
            top: "5%",
            left: "5%",
            width: "300px",
            height: "300px",
          }}
        ></div>

        {/* Bottom right circle */}
        <div
          style={{
            ...styles.decorativeCircle,
            bottom: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
          }}
        ></div>

        {/* Middle line */}
        <div
          style={{
            ...styles.decorativeLine,
            top: "50%",
          }}
        ></div>

        {/* Quarter line */}
        <div
          style={{
            ...styles.decorativeLine,
            top: "25%",
          }}
        ></div>

        {/* Three-quarter line */}
        <div
          style={{
            ...styles.decorativeLine,
            top: "75%",
          }}
        ></div>

        {/* Diamond accents */}
        <div
          style={{
            ...styles.diamondAccent,
            top: "15%",
            right: "10%",
          }}
        ></div>

        <div
          style={{
            ...styles.diamondAccent,
            bottom: "20%",
            left: "8%",
          }}
        ></div>
      </>
    );
  };

  return (
    <>
      <Headers tags={location.href} />

      {/* Using our custom PremiumBanner component instead of the original Banner */}
      <PremiumBanner
        Img={Service_data.service__img}
        title={Service_data.service_title}
      />

      <section id="service_details_page" style={styles.serviceDetailsPage}>
        {/* Decorative elements */}
        {renderDecorations()}

        <div style={styles.container}>
          <div className="s_details_wrapper" style={styles.sectionWrapper}>
            {/* Service Introduction */}
            <div
              id="service-intro"
              className="section-fade-in"
              style={styles.serviceIntro}
            >
              <h2 className="text-glow" style={styles.sectionTitle}>
                {Service_data.service_title}
                <div style={styles.titleGlow}></div>
              </h2>
              <div style={styles.serviceSubtitle}>
                {Service_data.service_sub_title}
              </div>
              <div style={styles.accentDivider}>
                <div style={styles.dividerGlow}></div>
              </div>
            </div>

            {/* Action Section with Ultra-Premium Design */}
            <div
              id="action-section"
              className="section-fade-in"
              style={styles.actionSection}
            >
              <div className="ultra-card premium-shadow">
                <div
                  className="ultra-card-content"
                  style={{
                    display: "flex",
                    flexDirection: window.innerWidth >= 992 ? "row" : "column",
                    padding: window.innerWidth >= 992 ? "0" : "0 0 40px 0",
                  }}
                >
                  <div style={styles.actionLeft}>
                    <div style={styles.imageContainer}>
                      <img
                        src={Service_data.service__img || "/placeholder.svg"}
                        style={styles.premiumImage}
                        alt={Service_data.action_title}
                      />
                      <div style={styles.imageOverlay}></div>
                      <div style={styles.imageCornerAccent}></div>
                      <div className="shimmer-effect"></div>
                    </div>
                  </div>
                  <div style={styles.actionRight}>
                    <h3 className="text-glow" style={styles.actionsTitle}>
                      {Service_data.action_title}
                      <div style={styles.titleGlow}></div>
                    </h3>
                    <div style={styles.accentLine}>
                      <div style={styles.dividerGlow}></div>
                    </div>
                    <p style={styles.actionsDesc}>{Service_data.action_desc}</p>
                    <div style={styles.actionCta}>
                      <button
                        style={styles.premiumButton}
                        className="breathe"
                        onMouseOver={(e) => {
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow =
                            "0 15px 30px rgba(255, 94, 20, 0.4)";

                          // Activate glow effect
                          const glow =
                            e.currentTarget.querySelector(".button-glow");
                          if (glow) {
                            glow.style.transform = "scale(1)";
                            glow.style.opacity = "0.8";
                          }
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 10px 25px rgba(255, 94, 20, 0.3)";

                          // Deactivate glow effect
                          const glow =
                            e.currentTarget.querySelector(".button-glow");
                          if (glow) {
                            glow.style.transform = "scale(0)";
                            glow.style.opacity = "0";
                          }
                        }}
                      >
                        <div
                          className="button-glow"
                          style={styles.buttonGlow}
                        ></div>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details with Enhanced Typography */}
            <div
              id="tech-details"
              className="section-fade-in"
              style={styles.techDetails}
            >
              <div className="ultra-card premium-shadow">
                <div className="ultra-card-content" style={{ padding: "50px" }}>
                  <div style={styles.cardCornerAccent}></div>
                  <div style={styles.cardHeader}>
                    <h3 className="text-glow" style={styles.cardHeaderTitle}>
                      Technology Overview
                      <div style={styles.titleGlow}></div>
                    </h3>
                    <div style={styles.accentDivider}>
                      <div style={styles.dividerGlow}></div>
                    </div>
                  </div>
                  <div style={styles.techContent}>
                    <p>{Service_data.service_details}</p>
                  </div>
                  <div className="shimmer-effect"></div>
                </div>
              </div>
            </div>

            {/* Work Strategy with Modern Card Design */}
            <div
              id="work-strategy"
              className="section-fade-in"
              style={styles.workStrategy}
            >
              <div style={{ textAlign: "center" }}>
                <h3 className="text-glow" style={styles.strategyTitle}>
                  {Service_data.stps_title}
                  <div style={styles.titleGlow}></div>
                </h3>
                <p style={styles.strategySubtitle}>
                  {Service_data.stps_sub_title}
                </p>
                <div style={styles.centerDivider}>
                  <div style={styles.dividerGlow}></div>
                </div>
              </div>

              <div className="step_wrapper">
                <div style={styles.stepItemBox}>
                  {Service_data.steps &&
                    Service_data.steps.map((step, index) => (
                      <div
                        key={index}
                        className={`ultra-card fade-in delay-${index * 100}`}
                      >
                        <div
                          className="ultra-card-content"
                          style={{
                            padding: "50px 35px",
                            textAlign: "center",
                            transition:
                              "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                          }}
                        >
                          <div
                            className="step-glow"
                            style={styles.stepItemGlow}
                          ></div>
                          <div style={styles.stepNumber}>{index + 1}</div>
                          <div style={styles.stepIcon}>
                            <div
                              className="icon-wrapper"
                              style={styles.stepIconWrapper}
                            >
                              <img
                                className="icon-img"
                                src={
                                  step.steps_card_icons || "/placeholder.svg"
                                }
                                alt={step.stps_card_title}
                                title={step.stps_card_title}
                                style={styles.stepIconImage}
                              />
                            </div>
                          </div>
                          <h4 className="text-glow" style={styles.stepTitle}>
                            {step.stps_card_title}
                          </h4>
                          <div style={styles.stepDivider}>
                            <div style={styles.dividerGlow}></div>
                          </div>
                          <p style={styles.stepDescription}>
                            {step.stps_desc || step.stps_card_desc}
                          </p>
                          <div className="shimmer-effect"></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div
              id="cta-section"
              className="section-fade-in"
              style={styles.ctaSection}
            >
              <div style={styles.ctaPattern}></div>
              <div style={styles.ctaContent}>
                <h3 style={styles.ctaTitle} className="floating">
                  Ready to get started?
                </h3>
                <p style={styles.ctaDescription}>
                  Contact our team for a personalized consultation and discover
                  how we can help you achieve your goals.
                </p>
                <button
                  style={styles.ctaButton}
                  className="breathe"
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
                    e.target.style.color = "#e04d00";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
                    e.target.style.color = "#ff5e14";
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Details;
