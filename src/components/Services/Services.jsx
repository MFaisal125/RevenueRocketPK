// import React from "react";
// import "./Services.css";
// import { NavLink } from "react-router-dom";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import codeIcon from "../../assets/image/code.png";
// import monitorIcon from "../../assets/image/monitor.png";
// import mobileappIcon from "../../assets/image/mobile-app.png";
// import windowbugIcon from "../../assets/image/window.png";
// import designIcon from "../../assets/image/design.png";
// import seoIcon from "../../assets/image/seo.png";
// import pluginIcon from "../../assets/image/plugin.png";
// import wordpressIcon from "../../assets/image/wordpress.png";
// import cmsIcon from "../../assets/image/cms.png";
// const Responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
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
// const Services = () => {
//   return (
//     <section id="services">
//       <div className="container">
//         <div className="title">
//           <p
//             className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//             style={{ fontSize: "12px" }}
//           >
//             our high services
//           </p>
//           <h3 className="text-capitalize py-2">
//             our Premium Services{" "}
//             <span style={{ color: "#ee814b" }}>Revenue Rocket</span>
//           </h3>
//         </div>
//         <div className="service-box pt-4">
//           <div className="row">
//             <div className="col-md-12 mb-2">
//               <Carousel
//                 responsive={Responsive}
//                 swipeable={true}
//                 draggable={true}
//                 showDots={true}
//                 ssr={true} // means to render carousel on server-side.
//                 infinite={true}
//                 autoPlaySpeed={100}
//                 keyBoardControl={true}
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//               >
//                 <div className="service-card shadow-xl">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       title="full-stack web development"
//                       width="50"
//                       height="50"
//                       src={codeIcon}
//                       alt=" full-stack web development services"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       full-stack web development
//                     </h4>
//                   </div>
//                   <p className="pt-3">
//                     Revenue Rocket offers full-stack web development services,
//                     delivering end-to-end solutions that encompass front-end and
//                     back-end expertise for seamless digital experiences.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       title="Desktop application development"
//                       width="50"
//                       height="50"
//                       src={monitorIcon}
//                       alt="desktop app development"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       Desktop application development
//                     </h4>
//                   </div>
//                   <p className="pt-3">
//                     Revenue Rocket specializes in desktop app development,
//                     delivering comprehensive solutions that encompass both
//                     front-end and back-end expertise for optimal user
//                     experiences.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       title="android & ios mobile app development"
//                       width="50"
//                       height="50"
//                       src={mobileappIcon}
//                       alt="Android and iOS mobile app development"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       android & ios mobile app development
//                     </h4>
//                   </div>
//                   <p className="pt-3">
//                     Revenue Rocket excels in Android and iOS mobile app
//                     development, delivering intuitive and engaging applications
//                     that captivate users and drive business growth.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       title="website penetration testing"
//                       width="50"
//                       height="50"
//                       src={windowbugIcon}
//                       alt="penetration testing services"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       website penetration testing
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket offers professional penetration testing
//                     services to identify and address vulnerabilities, ensuring
//                     the security and resilience of your digital assets.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       width="50"
//                       title="graphics design"
//                       height="50"
//                       src={designIcon}
//                       alt="graphics design services"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       graphics design
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket provides captivating graphics design services
//                     that enhance brand identity and create visually appealing
//                     designs for a lasting impression.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       width="64"
//                       height="64"
//                       title="search engine optimization (SEO)"
//                       src={seoIcon}
//                       alt="external-seo-design-amp-thinking-process-justicon-lineal-justicon"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       search engine optimization (SEO)
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket offers effective SEO services to boost online
//                     visibility, increase organic traffic, and improve search
//                     engine rankings for long-term success.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       width="50"
//                       height="50"
//                       src={pluginIcon}
//                       title="custom plugin development"
//                       alt="custom plugin development"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       Shopify development
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket specializes in custom plugin development,
//                     creating tailored solutions that seamlessly integrate with
//                     your existing systems and enhance the functionality of your
//                     website or application.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       width="50"
//                       height="50"
//                       src={wordpressIcon}
//                       title="custom theme development"
//                       alt="custom WordPress theme development"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       custom theme development
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket excels in custom WordPress theme development,
//                     crafting unique and visually captivating designs that align
//                     with your brand and provide a seamless user experience.
//                   </p>
//                 </div>
//                 <div className="service-card shadow">
//                   <div className="d-flex">
//                     <img
//                       className="bg-white"
//                       width="50"
//                       height="50"
//                       src={cmsIcon}
//                       title="ecommerce cms website development"
//                       alt="ecommerce website development"
//                     />
//                     <h4 className="pl-4 text-capitalize service_card_title">
//                       ecommerce cms website development
//                     </h4>
//                   </div>
//                   <p className="pt-3" style={{ fontSize: "14px" }}>
//                     Revenue Rocket specializes in ecommerce website development,
//                     creating robust and user-friendly online stores that drive
//                     sales and provide a seamless shopping experience for
//                     customers.
//                   </p>
//                 </div>
//               </Carousel>
//             </div>
//           </div>
//           <div className="mt-5 ml-3">
//             <button
//               class="btn text-capitalize"
//               style={{ background: "#ec8856", margin: "0" }}
//               role="button"
//             >
//               <NavLink
//                 className="text-white"
//                 style={{ textDecoration: "none" }}
//                 to={"/service"}
//               >
//                 learn more
//               </NavLink>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import Carousel from "react-multi-carousel" // Removed
// import "react-multi-carousel/lib/styles.css" // Removed

// Import icons (assuming these paths are correct)
import codeIcon from "../../assets/image/code.png";
import monitorIcon from "../../assets/image/monitor.png";
import mobileappIcon from "../../assets/image/mobile-app.png";
import windowbugIcon from "../../assets/image/window.png";
import designIcon from "../../assets/image/design.png";
import seoIcon from "../../assets/image/seo.png";
import pluginIcon from "../../assets/image/plugin.png";
import wordpressIcon from "../../assets/image/wordpress.png";
import cmsIcon from "../../assets/image/cms.png";

const Services = () => {
  // State for animations and interactions
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  // Remove the state for carousel position since we're handling it differently now
  // Change this line:
  // To:
  // We don't need this state anymore since we're handling scrolling with animation frames

  // Refs
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const cardsRef = useRef([]);

  // Responsive carousel settings
  // Remove the unnecessary responsive carousel settings since we're not using react-multi-carousel
  // Delete this block:
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
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

  // Service data
  const services = [
    {
      icon: codeIcon,
      title: "full-stack web development",
      description:
        "Revenue Rocket offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.",
      color: "#05d9e8",
      altText: "full-stack web development services",
    },
    {
      icon: monitorIcon,
      title: "Desktop application development",
      description:
        "Revenue Rocket specializes in desktop app development, delivering comprehensive solutions that encompass both front-end and back-end expertise for optimal user experiences.",
      color: "#ff2a6d",
      altText: "desktop app development",
    },
    {
      icon: mobileappIcon,
      title: "android & ios mobile app development",
      description:
        "Revenue Rocket excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.",
      color: "#d100d1",
      altText: "Android and iOS mobile app development",
    },
    {
      icon: windowbugIcon,
      title: "website penetration testing",
      description:
        "Revenue Rocket offers professional penetration testing services to identify and address vulnerabilities, ensuring the security and resilience of your digital assets.",
      color: "#f9c80e",
      altText: "penetration testing services",
    },
    {
      icon: designIcon,
      title: "graphics design",
      description:
        "Revenue Rocket provides captivating graphics design services that enhance brand identity and create visually appealing designs for a lasting impression.",
      color: "#7b00ff",
      altText: "graphics design services",
    },
    {
      icon: seoIcon,
      title: "search engine optimization (SEO)",
      description:
        "Revenue Rocket offers effective SEO services to boost online visibility, increase organic traffic, and improve search engine rankings for long-term success.",
      color: "#00ff9f",
      altText: "SEO services",
    },
    {
      icon: pluginIcon,
      title: "Shopify development",
      description:
        "Revenue Rocket specializes in custom plugin development, creating tailored solutions that seamlessly integrate with your existing systems and enhance the functionality of your website or application.",
      color: "#ee834d",
      altText: "custom plugin development",
    },
    {
      icon: wordpressIcon,
      title: "custom theme development",
      description:
        "Revenue Rocket excels in custom WordPress theme development, crafting unique and visually captivating designs that align with your brand and provide a seamless user experience.",
      color: "#01c5c4",
      altText: "custom WordPress theme development",
    },
    {
      icon: cmsIcon,
      title: "ecommerce cms website development",
      description:
        "Revenue Rocket specializes in ecommerce website development, creating robust and user-friendly online stores that drive sales and provide a seamless shopping experience for customers.",
      color: "#b967ff",
      altText: "ecommerce website development",
    },
  ];

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the section is visible
      const visibleHeight =
        Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      const progress = Math.max(0, Math.min(1, visibleHeight / rect.height));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Quantum particle background effect
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      if (sectionRef.current) {
        canvas.width = sectionRef.current.offsetWidth;
        canvas.height = sectionRef.current.offsetHeight;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Reduced particle count for better performance
    const particles = [];
    const particleCount = 30; // Further reduced

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        baseColor:
          Math.random() > 0.5
            ? `hsl(${Math.random() * 60 + 20}, 100%, 70%)`
            : `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
        speedX: Math.random() * 0.2 - 0.1, // Even slower movement
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Simplified particle rendering
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.baseColor.replace(
          ")",
          `, ${particle.opacity})`
        );
        ctx.fill();

        // Update position with boundary check
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    animationFrameId = requestAnimationFrame(drawParticles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Handle card hover
  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  // Handle card leave
  const handleCardLeave = () => {
    setActiveCard(null);
  };

  // Auto-scrolling carousel effect
  useEffect(() => {
    const track = document.querySelector(".hyper-carousel-track");
    if (!track) return;

    // Calculate the total width of all cards
    const totalWidth = track.scrollWidth;
    const viewportWidth = track.parentElement.clientWidth;
    const maxScroll = totalWidth - viewportWidth;

    let scrollPosition = 0;
    let scrollDirection = 1; // 1 for right, -1 for left
    const scrollSpeed = 0.5; // pixels per frame
    let isPaused = false;
    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollDirection * scrollSpeed;

        // Reverse direction when reaching the end
        if (scrollPosition >= maxScroll) {
          scrollDirection = -1;
        } else if (scrollPosition <= 0) {
          scrollDirection = 1;
        }

        track.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause scrolling when hovering over the carousel
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    track.parentElement.addEventListener("mouseenter", handleMouseEnter);
    track.parentElement.addEventListener("mouseleave", handleMouseLeave);

    // Handle touch events for mobile
    track.parentElement.addEventListener("touchstart", handleMouseEnter);
    track.parentElement.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      track.parentElement.removeEventListener("mouseenter", handleMouseEnter);
      track.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      track.parentElement.removeEventListener("touchstart", handleMouseEnter);
      track.parentElement.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`quantum-services-section ${isVisible ? "visible" : ""}`}
      style={{
        "--scroll-progress": scrollProgress,
      }}
    >
      {/* Quantum particle background */}
      <canvas ref={canvasRef} className="quantum-particles"></canvas>

      {/* Holographic overlay */}
      <div className="holographic-overlay"></div>

      {/* Scanning line effect */}
      <div className="scanning-line"></div>
      <div className="scanning-line horizontal"></div>

      <div className="quantum-container">
        <div className="quantum-title-container">
          <div className="quantum-badge-wrapper">
            <div className="quantum-badge">
              <span className="quantum-badge-text">OUR HIGH SERVICES</span>
              <div className="quantum-badge-glow"></div>
            </div>
          </div>

          <h2 className="quantum-title">
            OUR PREMIUM SERVICES{" "}
            <span className="quantum-highlight">REVENUE ROCKET</span>
          </h2>

          <div className="quantum-title-underline"></div>
        </div>

        <div className="quantum-service-container">
          {/* Optimized Carousel - Replaced react-multi-carousel with custom implementation */}
          <div className="hyper-carousel">
            <div className="hyper-carousel-track">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`hyper-service-card ${
                    activeCard === index ? "active" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  style={{
                    "--card-color": service.color,
                    "--card-index": index,
                  }}
                >
                  {/* Optimized card content with reduced DOM elements */}
                  <div className="hyper-card-content">
                    <div className="hyper-card-header">
                      <div className="hyper-icon-container">
                        <img
                          className="hyper-icon"
                          width="50"
                          height="50"
                          src={service.icon || "/placeholder.svg"}
                          alt={service.altText}
                          title={service.title}
                          loading="lazy"
                        />
                        <div className="hyper-icon-glow"></div>
                      </div>

                      <h3 className="hyper-card-title">{service.title}</h3>
                    </div>

                    <div className="hyper-card-body">
                      <p className="hyper-card-description">
                        {service.description}
                      </p>
                    </div>

                    {/* Simplified holographic elements */}
                    <div className="hyper-card-hologram">
                      <div className="hologram-corner top-left"></div>
                      <div className="hologram-corner top-right"></div>
                      <div className="hologram-corner bottom-left"></div>
                      <div className="hologram-corner bottom-right"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom navigation controls */}
            <div className="hyper-carousel-controls">
              <div className="hyper-carousel-dots">
                {services.map((_, index) => (
                  <button
                    key={index}
                    className={`hyper-dot ${
                      activeCard === index ? "active" : ""
                    }`}
                    onClick={() => handleCardHover(index)}
                    aria-label={`View service ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="quantum-cta-container">
          <NavLink to="/service" className="quantum-button">
            <div className="button-background"></div>
            <span className="quantum-button-text">LEARN MORE</span>
            <div className="quantum-button-glow"></div>
            <div className="quantum-button-particles"></div>
            <div className="quantum-button-icon">
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Futuristic 4000 CSS Styles */}
      <style jsx>{`
        /* Base Variables */
        :root {
          --primary: #0a0e17;
          --secondary: #ee834d;
          --secondary-glow: rgba(238, 131, 77, 0.6);
          --tertiary: #05d9e8;
          --tertiary-glow: rgba(5, 217, 232, 0.6);
          --quaternary: #d100d1;
          --quaternary-glow: rgba(209, 0, 209, 0.6);
          --text: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --glass-bg: rgba(10, 14, 23, 0.7);
          --glass-border: rgba(255, 255, 255, 0.1);
          --glass-highlight: rgba(255, 255, 255, 0.05);
          --neon-glow: 0 0 10px var(--secondary-glow),
            0 0 20px var(--secondary-glow);
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Import futuristic font */
        @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");

        /* Quantum Services Section */
        .quantum-services-section {
          position: relative;
          padding: 8rem 0;
          background: linear-gradient(135deg, #0a0e17 0%, #121a2c 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
          font-family: "Rajdhani", sans-serif;
          min-height: 100vh;
        }

        .quantum-services-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .quantum-services-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(238, 131, 77, 0.05) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(5, 217, 232, 0.05) 0%,
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(209, 0, 209, 0.03) 0%,
              transparent 50%
            );
          pointer-events: none;
        }

        .quantum-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* Holographic overlay */
        .holographic-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at center,
            rgba(5, 217, 232, 0.03) 0%,
            rgba(238, 131, 77, 0.03) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          pointer-events: none;
          z-index: 0;
          animation: pulse 8s infinite alternate;
        }

        /* Scanning line effect */
        .scanning-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            var(--tertiary) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          box-shadow: 0 0 10px var(--tertiary-glow),
            0 0 20px var(--tertiary-glow);
          z-index: 1;
          animation: scanLine 8s linear infinite;
          opacity: 0.7;
        }

        .scanning-line.horizontal {
          width: 2px;
          height: 100%;
          animation: scanLineHorizontal 12s linear infinite;
        }

        @keyframes scanLine {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes scanLineHorizontal {
          0% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }

        .quantum-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Title Section */
        .quantum-title-container {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .quantum-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .quantum-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(
            135deg,
            var(--tertiary) 0%,
            rgba(5, 217, 232, 0.7) 100%
          );
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }

        .quantum-badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--primary);
          position: relative;
          z-index: 1;
        }

        .quantum-badge-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          mix-blend-mode: overlay;
        }

        .quantum-badge:hover .quantum-badge-glow {
          opacity: 1;
        }

        .quantum-title {
          font-family: "Orbitron", sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-transform: uppercase;
          background: linear-gradient(
            135deg,
            var(--text) 0%,
            rgba(255, 255, 255, 0.7) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 1px;
        }

        @media (min-width: 768px) {
          .quantum-title {
            font-size: 3rem;
          }
        }

        .quantum-highlight {
          color: var(--secondary);
          text-shadow: 0 0 10px var(--secondary-glow);
          position: relative;
          display: inline-block;
        }

        .quantum-highlight::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--secondary),
            transparent
          );
          box-shadow: 0 0 10px var(--secondary-glow);
        }

        .quantum-title-underline {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, var(--tertiary), transparent);
          margin: 0 auto;
        }

        /* Service Cards */
        .quantum-service-container {
          position: relative;
          z-index: 2;
          margin-bottom: 3rem;
        }

        /* 5000-Era Hyper Carousel */
        .hyper-carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .hyper-carousel-track {
          display: flex;
          gap: 20px;
          transition: transform 0.05s linear; /* Smoother for auto-scrolling */
          padding: 20px 0;
          will-change: transform;
        }

        .hyper-service-card {
          position: relative;
          flex: 0 0 300px;
          height: 350px;
          background: rgba(10, 14, 23, 0.5);
          backdrop-filter: blur(5px); /* Reduced blur for better performance */
          -webkit-backdrop-filter: blur(5px);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
          opacity: 0.8;
          transform: scale(0.98);
          will-change: transform, opacity;
        }

        .hyper-service-card.active,
        .hyper-service-card:hover {
          opacity: 1;
          transform: scale(1) translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
            0 0 15px rgba(var(--card-color), 0.3),
            inset 0 0 20px rgba(var(--card-color), 0.1);
          border-color: var(--card-color, var(--tertiary));
          z-index: 2;
        }

        .hyper-service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.05) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .hyper-card-content {
          position: relative;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .hyper-card-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .hyper-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-right: 1rem;
          overflow: hidden;
        }

        .hyper-icon {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
          transition: transform 0.3s ease;
        }

        .hyper-service-card:hover .hyper-icon {
          transform: scale(1.1);
        }

        .hyper-icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            var(--card-color, rgba(5, 217, 232, 0.3)),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .hyper-service-card:hover .hyper-icon-glow {
          opacity: 1;
        }

        .hyper-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
          text-transform: capitalize;
          margin: 0;
          transition: color 0.3s ease;
        }

        .hyper-service-card:hover .hyper-card-title {
          color: var(--card-color, var(--tertiary));
          text-shadow: 0 0 5px var(--card-color, var(--tertiary-glow));
        }

        .hyper-card-body {
          flex: 1;
        }

        .hyper-card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Simplified holographic elements */
        .hyper-card-hologram {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .hologram-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border-color: var(--card-color, var(--tertiary));
          opacity: 0.3;
          transition: all 0.3s ease;
        }

        .hyper-service-card:hover .hologram-corner {
          opacity: 0.6;
          width: 20px;
          height: 20px;
        }

        /* Carousel controls */
        .hyper-carousel-controls {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .hyper-carousel-dots {
          display: flex;
          gap: 8px;
        }

        .hyper-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 0;
        }

        .hyper-dot.active {
          background: var(--tertiary);
          box-shadow: 0 0 10px var(--tertiary-glow);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hyper-service-card {
            flex: 0 0 280px;
            height: 320px;
          }

          .hyper-card-title {
            font-size: 1.1rem;
          }

          .hyper-card-description {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .hyper-service-card {
            flex: 0 0 260px;
            height: 300px;
          }

          .hyper-card-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .hyper-icon-container {
            margin-bottom: 1rem;
            margin-right: 0;
          }
        }
        /* 5000-Era Hyper Carousel */
        .quantum-carousel-container {
          padding-bottom: 3rem;
        }

        .quantum-carousel-item {
          padding: 15px;
        }

        /* CTA Button */
        .quantum-cta-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          position: relative;
          z-index: 2;
        }

        .quantum-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          color: var(--text);
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all var(--transition-medium);
          text-decoration: none;
          z-index: 1;
        }

        .button-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            var(--secondary) 0%,
            rgba(238, 131, 77, 0.8) 100%
          );
          border-radius: 30px;
          z-index: -1;
          transition: all var(--transition-medium);
        }

        .quantum-button-text {
          position: relative;
          z-index: 2;
          margin-right: 0.5rem;
        }

        .quantum-button-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          mix-blend-mode: overlay;
          z-index: 1;
        }

        .quantum-button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-medium);
        }

        .quantum-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2),
            0 0 15px var(--secondary-glow);
        }

        .quantum-button:hover .button-background {
          filter: brightness(1.2);
        }

        .quantum-button:hover .quantum-button-glow {
          opacity: 1;
          animation: pulse 2s infinite;
        }

        .quantum-button:hover .quantum-button-icon {
          transform: translateX(5px);
        }

        .quantum-button-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .quantum-button-particles::before,
        .quantum-button-particles::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
        }

        .quantum-button-particles::before {
          left: -10px;
          animation: particleLeft 2s infinite;
        }

        .quantum-button-particles::after {
          right: -10px;
          animation: particleRight 2s infinite;
        }

        .quantum-button:hover .quantum-button-particles::before,
        .quantum-button:hover .quantum-button-particles::after {
          opacity: 1;
        }

        /* Animations */
        @keyframes pulse {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }

        @keyframes particleLeft {
          0% {
            left: -10px;
            opacity: 0;
          }
          50% {
            left: 110%;
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }

        @keyframes particleRight {
          0% {
            right: -10px;
            opacity: 0;
          }
          50% {
            right: 110%;
            opacity: 1;
          }
          100% {
            right: 110%;
            opacity: 0;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 991px) {
          .quantum-services-section {
            padding: 6rem 0;
          }

          .quantum-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .quantum-services-section {
            padding: 4rem 0;
          }

          .quantum-title {
            font-size: 1.75rem;
          }

          .quantum-card-title {
            font-size: 1.1rem;
          }

          .quantum-card-description {
            font-size: 0.85rem;
          }

          .quantum-service-card {
            height: 320px;
          }
        }

        @media (max-width: 480px) {
          .quantum-container {
            padding: 0 1rem;
          }

          .quantum-title-container {
            margin-bottom: 2rem;
          }

          .quantum-badge {
            padding: 0.4rem 0.8rem;
          }

          .quantum-badge-text {
            font-size: 0.7rem;
          }

          .quantum-title {
            font-size: 1.5rem;
          }

          .quantum-service-card {
            height: 300px;
          }

          .quantum-card-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .quantum-icon-container {
            margin-bottom: 1rem;
            margin-right: 0;
          }
        }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scanning-line,
          .scanning-line.horizontal,
          .quantum-button-particles::before,
          .quantum-button-particles::after,
          .hologram-circle,
          .hologram-dot {
            animation: none;
          }

          .quantum-services-section {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
