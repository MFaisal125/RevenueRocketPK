// import React, { useEffect, useState } from "react";
// import "./Header.css";
// import logo1 from "../../assets/vai/logo.png";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
// // import { Helmet, HelmetProvider } from 'react-helmet-async';

// const Headers = ({ tags }) => {
//   var [Sticky, setSticky] = useState(0);
//   window.onscroll = () => {
//     setSticky(window.scrollY > 200);
//   };
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "canonical";
//     link.href = location.href;
//     document.head.appendChild(link);
//     return () => {
//       document.head.removeChild(link);
//     };
//   }, []);
//   return (
//     <>
//       <header id="header" style={{ opacity: Sticky ? "0" : "1" }}>
//         {/* <HelmetProvider>
//                     <Helmet>
//                         <link rel="canonical" href={tags} />
//                     </Helmet>
//                 </HelmetProvider> */}
//         <div className="container">
//           <Navbar expand="lg" className="bg-body-tertiary react_navbar">
//             <Container>
//               <Navbar.Brand>
//                 <Nav.Link href="/" className="navbar-brand">
//                   <img
//                     src={logo1}
//                     style={{ width: "100%", height: "55px" }}
//                     className="img-fluid"
//                     title="lenexit"
//                     alt="lenexit.com logo"
//                   />
//                 </Nav.Link>
//               </Navbar.Brand>
//               <Navbar.Toggle aria-controls="basic-navbar-nav" />
//               <Navbar.Collapse
//                 id="basic-navbar-nav"
//                 className="justify-content-end"
//               >
//                 <Nav className="m-auto">
//                   <Nav.Link>
//                     <NavLink to={"/"}>Home</NavLink>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <NavLink to={"/about"}>About</NavLink>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <NavLink to={"/service"}>Services</NavLink>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <NavLink to={"/portfolio"}>Portfolio</NavLink>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <NavLink to={"/blogs"}>Blogs</NavLink>
//                   </Nav.Link>
//                   <Nav.Link>
//                     <NavLink to={"/contact"}>Contact Us</NavLink>
//                   </Nav.Link>
//                 </Nav>
//                 <NavLink to={"/calender"} className="consulting_btn text-white">
//                   Book A Consultation
//                 </NavLink>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Headers;

"use client";

import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import logo1 from "../../assets/vai/logo1.png";
import { Menu, X, ChevronRight, Zap, ExternalLink } from "lucide-react";

const Headers = ({ tags }) => {
  // State management
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoverLink, setHoverLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const linkRefs = useRef([]);

  // Get current location
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Add canonical link
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = location.href;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [location.href]);

  // GSAP animations for header elements
  useEffect(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    tl.fromTo(
      linkRefs.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
      "-=0.5"
    );

    tl.fromTo(
      ".consulting_btn",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6 },
      "-=0.3"
    );

    // Sticky header animation
    if (isSticky) {
      gsap.to(headerRef.current, {
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
      });
    } else {
      gsap.to(headerRef.current, {
        boxShadow: "none",
        duration: 0.3,
      });
    }
  }, [isSticky]);

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }, [location.pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`neo-header ${isSticky ? "sticky" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="neo-container">
          <div className="neo-navbar">
            <motion.div
              className="neo-logo"
              ref={logoRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <NavLink to="/" className="logo-link">
                <img
                  src={logo1 || "/placeholder.svg"}
                  className="logo-image"
                  title="Revenue Rocket"
                  alt="Revenue Rocket logo"
                />
                <div className="logo-glow"></div>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="neo-nav-desktop"
              initial="hidden"
              animate="visible"
              variants={navVariants}
            >
              <ul className="neo-nav-list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    className="neo-nav-item"
                    variants={linkVariants}
                    ref={(el) => (linkRefs.current[index] = el)}
                    onHoverStart={() => setHoverLink(link.path)}
                    onHoverEnd={() => setHoverLink(null)}
                  >
                    <NavLink
                      to={link.path}
                      className={`neo-nav-link ${
                        activeLink === link.path ? "active" : ""
                      } ${hoverLink === link.path ? "hovered" : ""}`}
                    >
                      {link.label}
                      <motion.div
                        className="link-indicator"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX:
                            activeLink === link.path || hoverLink === link.path
                              ? 1
                              : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="neo-cta-button-wrapper"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <NavLink to="/calender" className="neo-cta-button">
                  <span className="cta-text">Book A Consultation</span>
                  <motion.div
                    className="cta-icon"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                  <div className="cta-glow"></div>
                </NavLink>
              </motion.div>
            </motion.nav>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="neo-menu-toggle"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="neo-nav-mobile"
                  ref={menuRef}
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="mobile-menu-header">
                    <motion.div
                      className="mobile-menu-title"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Zap size={18} className="menu-icon" />
                      <span>Navigation</span>
                    </motion.div>
                    <motion.button
                      className="mobile-menu-close"
                      onClick={toggleMenu}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  <motion.ul className="mobile-nav-list">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={index}
                        className="mobile-nav-item"
                        variants={mobileLinkVariants}
                      >
                        <NavLink
                          to={link.path}
                          className={`mobile-nav-link ${
                            activeLink === link.path ? "active" : ""
                          }`}
                          onClick={toggleMenu}
                        >
                          <span>{link.label}</span>
                          <ChevronRight
                            size={16}
                            className="mobile-link-icon"
                          />
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="mobile-cta"
                    variants={mobileLinkVariants}
                  >
                    <NavLink
                      to="/calender"
                      className="mobile-cta-button"
                      onClick={toggleMenu}
                    >
                      <span>Book A Consultation</span>
                      <ExternalLink size={16} className="mobile-cta-icon" />
                    </NavLink>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Styles */}
      <style jsx>{`
        /* Base Variables */
        :root {
          --primary: #0a0e17;
          --primary-dark: #050a14;
          --primary-light: #1a2030;
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
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --header-height: 80px;
          --header-height-sticky: 70px;
        }

        /* Import futuristic fonts */
        @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");

        /* Header Styles */
        .neo-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(10, 14, 23, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all var(--transition-medium);
          border-bottom: 1px solid var(--glass-border);
        }

        .neo-header.sticky {
          height: var(--header-height-sticky);
          background: rgba(10, 14, 23, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .neo-header.scrolled {
          border-bottom: 1px solid rgba(238, 131, 77, 0.2);
        }

        .neo-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 100%;
        }

        .neo-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          position: relative;
        }

        /* Logo Styles */
        .neo-logo {
          position: relative;
          z-index: 10;
        }

        .logo-link {
          display: block;
          position: relative;
          overflow: hidden;
        }

        .logo-image {
          width: auto;
          height: 50px;
          transition: all var(--transition-medium);
        }

        .neo-header.sticky .logo-image {
          height: 45px;
        }

        .logo-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(238, 131, 77, 0.3),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          mix-blend-mode: overlay;
        }

        .logo-link:hover .logo-glow {
          opacity: 1;
        }

        /* Desktop Navigation */
        .neo-nav-desktop {
          display: flex;
          align-items: center;
        }

        .neo-nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .neo-nav-item {
          margin: 0 0.5rem;
          position: relative;
        }

        .neo-nav-link {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--text-secondary);
          font-family: "Rajdhani", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all var(--transition-fast);
          position: relative;
        }

        .neo-nav-link:hover,
        .neo-nav-link.active,
        .neo-nav-link.hovered {
          color: var(--text);
        }

        .link-indicator {
          position: absolute;
          bottom: -2px;
          left: 1rem;
          right: 1rem;
          height: 2px;
          background: linear-gradient(90deg, var(--tertiary), var(--secondary));
          transform-origin: left;
          box-shadow: 0 0 10px var(--tertiary-glow);
        }

        /* CTA Button */
        .neo-cta-button-wrapper {
          margin-left: 1.5rem;
        }

        .neo-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.5rem;
          background: linear-gradient(
            135deg,
            var(--secondary) 0%,
            rgba(238, 131, 77, 0.8) 100%
          );
          color: var(--primary);
          font-family: "Rajdhani", sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 6px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all var(--transition-medium);
          box-shadow: 0 5px 15px rgba(238, 131, 77, 0.3);
        }

        .neo-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(238, 131, 77, 0.4);
          color: var(--primary);
        }

        .cta-text {
          position: relative;
          z-index: 2;
          margin-right: 0.5rem;
        }

        .cta-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .cta-glow {
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

        .neo-cta-button:hover .cta-glow {
          opacity: 1;
        }

        /* Mobile Menu Toggle */
        .neo-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        /* Mobile Navigation */
        .neo-nav-mobile {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 300px;
          height: 100vh;
          background: rgba(10, 14, 23, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 2rem 1.5rem;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.2);
          border-left: 1px solid var(--glass-border);
          overflow-y: auto;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .mobile-menu-title {
          display: flex;
          align-items: center;
          color: var(--text);
          font-family: "Orbitron", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .menu-icon {
          margin-right: 0.5rem;
          color: var(--tertiary);
        }

        .mobile-menu-close {
          background: transparent;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-item {
          margin-bottom: 0.5rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          color: var(--text-secondary);
          font-family: "Rajdhani", sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all var(--transition-fast);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
        }

        .mobile-nav-link.active {
          color: var(--text);
          background: rgba(238, 131, 77, 0.1);
          border-color: rgba(238, 131, 77, 0.3);
        }

        .mobile-link-icon {
          opacity: 0.5;
          transition: all var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--text);
        }

        .mobile-nav-link:hover .mobile-link-icon,
        .mobile-nav-link.active .mobile-link-icon {
          opacity: 1;
          transform: translateX(3px);
        }

        .mobile-cta {
          margin-top: 2rem;
        }

        .mobile-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(
            135deg,
            var(--secondary) 0%,
            rgba(238, 131, 77, 0.8) 100%
          );
          color: var(--primary);
          font-family: "Rajdhani", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 6px;
          text-decoration: none;
          gap: 0.5rem;
          transition: all var(--transition-medium);
          box-shadow: 0 5px 15px rgba(238, 131, 77, 0.3);
        }

        .mobile-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(238, 131, 77, 0.4);
        }

        .mobile-cta-icon {
          transition: all var(--transition-fast);
        }

        .mobile-cta-button:hover .mobile-cta-icon {
          transform: translateX(3px);
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .neo-container {
            padding: 0 1.5rem;
          }

          .neo-nav-item {
            margin: 0 0.25rem;
          }

          .neo-nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
          }

          .neo-cta-button {
            padding: 0.5rem 1.25rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 992px) {
          .neo-nav-desktop {
            display: none;
          }

          .neo-menu-toggle {
            display: flex;
          }

          .neo-nav-mobile {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .neo-container {
            padding: 0 1rem;
          }

          .neo-header {
            height: 70px;
          }

          .neo-header.sticky {
            height: 60px;
          }

          .logo-image {
            height: 45px;
          }

          .neo-header.sticky .logo-image {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .neo-header {
            height: 60px;
          }

          .neo-header.sticky {
            height: 55px;
          }

          .logo-image {
            height: 40px;
          }

          .neo-header.sticky .logo-image {
            height: 35px;
          }

          .neo-nav-mobile {
            width: 100%;
          }
        }

        /* Animation for mobile menu */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .neo-header,
          .logo-image,
          .neo-nav-link,
          .link-indicator,
          .neo-cta-button,
          .mobile-nav-link,
          .mobile-link-icon {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default Headers;
