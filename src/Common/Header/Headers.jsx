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

// "use client";

// import { useEffect, useState, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { X, ArrowRight, ExternalLink } from "lucide-react";
// import logo1 from "../../assets/vai/logo1.png"; // Using the original logo

// const Headers = ({ tags }) => {
//   // State management
//   const [isSticky, setIsSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("/");
//   const [hoverLink, setHoverLink] = useState(null);

//   // Refs for GSAP animations
//   const headerRef = useRef(null);
//   const navRef = useRef(null);
//   const linkRefs = useRef([]);
//   const ctaRef = useRef(null);

//   const location = useLocation();

//   // Handle scroll events
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Set active link based on current path
//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   // Add canonical link
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "canonical";
//     link.href = location.href;
//     document.head.appendChild(link);
//     return () => {
//       document.head.removeChild(link);
//     };
//   }, [location.href]);

//   // GSAP animations for header elements (excluding logo)
//   useEffect(() => {
//     if (!headerRef.current) return;

//     // Initial animations
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     tl.fromTo(
//       ".nav-item-animate",
//       { opacity: 0, y: -20 },
//       { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 },
//       0.2
//     );

//     tl.fromTo(
//       ctaRef.current,
//       { opacity: 0, scale: 0.9 },
//       { opacity: 1, scale: 1, duration: 0.5 },
//       0.5
//     );

//     // Sticky header animation
//     if (isSticky) {
//       gsap.to(headerRef.current, {
//         height: "70px",
//         backdropFilter: "blur(15px)",
//         boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
//         duration: 0.4,
//       });
//     } else {
//       gsap.to(headerRef.current, {
//         height: "90px",
//         backdropFilter: "blur(10px)",
//         boxShadow: "none",
//         duration: 0.4,
//       });
//     }
//   }, [isSticky]);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     // Prevent body scroll when menu is open
//     document.body.style.overflow = !isOpen ? "hidden" : "auto";
//   };

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//     document.body.style.overflow = "auto";
//   }, [location.pathname]);

//   // Navigation links
//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/service", label: "Services" },
//     { path: "/portfolio", label: "Portfolio" },
//     { path: "/blogs", label: "Blogs" },
//     { path: "/contact", label: "Contact Us" },
//   ];

//   // Animation variants for Framer Motion
//   const mobileMenuVariants = {
//     closed: {
//       opacity: 0,
//       x: "100%",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//     open: {
//       opacity: 1,
//       x: "0%",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//       },
//     },
//   };

//   const mobileLinkVariants = {
//     closed: { opacity: 0, x: 20 },
//     open: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 30,
//         delay: i * 0.05,
//       },
//     }),
//   };

//   return (
//     <>
//       <header ref={headerRef} className="premium-header">
//         <div className="premium-container">
//           <div className="premium-navbar">
//             {/* Original Logo without animations */}
//             <div className="premium-logo">
//               <NavLink to="/" className="logo-link">
//                 <img
//                   src={logo1 || "/placeholder.svg"}
//                   style={{ width: "auto", height: "55px" }}
//                   className="img-fluid"
//                   title="lenexit"
//                   alt="lenexit.com logo"
//                 />
//               </NavLink>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="premium-nav-desktop" ref={navRef}>
//               <ul className="premium-nav-list">
//                 {navLinks.map((link, index) => (
//                   <li
//                     key={index}
//                     className="premium-nav-item nav-item-animate"
//                     ref={(el) => (linkRefs.current[index] = el)}
//                     onMouseEnter={() => setHoverLink(link.path)}
//                     onMouseLeave={() => setHoverLink(null)}
//                   >
//                     <NavLink
//                       to={link.path}
//                       className={`premium-nav-link ${
//                         activeLink === link.path ? "active" : ""
//                       } ${hoverLink === link.path ? "hovered" : ""}`}
//                     >
//                       <span className="nav-text">{link.label}</span>
//                       <motion.div
//                         className="nav-indicator"
//                         initial={{ scaleX: 0 }}
//                         animate={{
//                           scaleX:
//                             activeLink === link.path || hoverLink === link.path
//                               ? 1
//                               : 0,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>

//               <div className="premium-cta-wrapper" ref={ctaRef}>
//                 <NavLink to="/calender" className="premium-cta-button">
//                   <span className="cta-text">Book A Consultation</span>
//                   <motion.span
//                     className="cta-icon"
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{
//                       duration: 1.5,
//                       repeat: Number.POSITIVE_INFINITY,
//                       repeatType: "loop",
//                     }}
//                   >
//                     <ArrowRight size={16} />
//                   </motion.span>
//                   <span className="cta-bg"></span>
//                 </NavLink>
//               </div>
//             </nav>

//             {/* Mobile Menu Toggle */}
//             <button
//               className="premium-menu-toggle"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               <div className="menu-toggle-icon">
//                 <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
//                 <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
//                 <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
//               </div>
//             </button>

//             {/* Mobile Navigation */}
//             <AnimatePresence>
//               {isOpen && (
//                 <motion.div
//                   className="premium-nav-mobile"
//                   variants={mobileMenuVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   <div className="mobile-header">
//                     <div className="mobile-logo">
//                       <img
//                         src={logo1 || "/placeholder.svg"}
//                         style={{ width: "auto", height: "40px" }}
//                         className="img-fluid"
//                         alt="logo"
//                       />
//                     </div>
//                     <button
//                       className="mobile-close"
//                       onClick={toggleMenu}
//                       aria-label="Close menu"
//                     >
//                       <X size={24} />
//                     </button>
//                   </div>

//                   <div className="mobile-content">
//                     <ul className="mobile-nav-list">
//                       {navLinks.map((link, index) => (
//                         <motion.li
//                           key={index}
//                           className="mobile-nav-item"
//                           custom={index}
//                           variants={mobileLinkVariants}
//                         >
//                           <NavLink
//                             to={link.path}
//                             className={`mobile-nav-link ${
//                               activeLink === link.path ? "active" : ""
//                             }`}
//                             onClick={toggleMenu}
//                           >
//                             <span className="mobile-link-text">
//                               {link.label}
//                             </span>
//                             <span className="mobile-link-icon">
//                               <ExternalLink size={16} />
//                             </span>
//                           </NavLink>
//                         </motion.li>
//                       ))}
//                     </ul>

//                     <motion.div
//                       className="mobile-cta"
//                       variants={mobileLinkVariants}
//                       custom={navLinks.length}
//                     >
//                       <NavLink
//                         to="/calender"
//                         className="mobile-cta-button"
//                         onClick={toggleMenu}
//                       >
//                         <span>Book A Consultation</span>
//                         <span className="mobile-cta-icon">
//                           <ArrowRight size={16} />
//                         </span>
//                       </NavLink>
//                     </motion.div>
//                   </div>

//                   <div className="mobile-footer">
//                     <div className="mobile-social">
//                       <a href="#" className="social-link">
//                         FB
//                       </a>
//                       <a href="#" className="social-link">
//                         TW
//                       </a>
//                       <a href="#" className="social-link">
//                         IG
//                       </a>
//                       <a href="#" className="social-link">
//                         LI
//                       </a>
//                     </div>
//                     <div className="mobile-copyright">© 2024 RevenueRocket</div>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </header>

//       {/* Styles */}
//       <style jsx>{`
//         /* Base Variables */
//         :root {
//           /* Primary Colors */
//           --primary-50: #f0f9ff;
//           --primary-100: #e0f2fe;
//           --primary-200: #bae6fd;
//           --primary-300: #7dd3fc;
//           --primary-400: #38bdf8;
//           --primary-500: #0ea5e9;
//           --primary-600: #0284c7;
//           --primary-700: #0369a1;
//           --primary-800: #075985;
//           --primary-900: #0c4a6e;
//           --primary-950: #082f49;

//           /* Secondary Colors */
//           --secondary-50: #fff7ed;
//           --secondary-100: #ffedd5;
//           --secondary-200: #fed7aa;
//           --secondary-300: #fdba74;
//           --secondary-400: #fb923c;
//           --secondary-500: #f97316;
//           --secondary-600: #ea580c;
//           --secondary-700: #c2410c;
//           --secondary-800: #9a3412;
//           --secondary-900: #7c2d12;
//           --secondary-950: #431407;

//           /* Neutral Colors */
//           --neutral-50: #f8fafc;
//           --neutral-100: #f1f5f9;
//           --neutral-200: #e2e8f0;
//           --neutral-300: #cbd5e1;
//           --neutral-400: #94a3b8;
//           --neutral-500: #64748b;
//           --neutral-600: #475569;
//           --neutral-700: #334155;
//           --neutral-800: #1e293b;
//           --neutral-900: #0f172a;
//           --neutral-950: #020617;

//           /* Accent Colors */
//           --accent-50: #ecfdf5;
//           --accent-100: #d1fae5;
//           --accent-200: #a7f3d0;
//           --accent-300: #6ee7b7;
//           --accent-400: #34d399;
//           --accent-500: #10b981;
//           --accent-600: #059669;
//           --accent-700: #047857;
//           --accent-800: #065f46;
//           --accent-900: #064e3b;
//           --accent-950: #022c22;

//           /* Gradients */
//           --gradient-primary: linear-gradient(
//             135deg,
//             var(--primary-600) 0%,
//             var(--primary-800) 100%
//           );
//           --gradient-secondary: linear-gradient(
//             135deg,
//             var(--secondary-500) 0%,
//             var(--secondary-700) 100%
//           );
//           --gradient-accent: linear-gradient(
//             135deg,
//             var(--accent-500) 0%,
//             var(--accent-700) 100%
//           );
//           --gradient-dark: linear-gradient(
//             135deg,
//             var(--neutral-800) 0%,
//             var(--neutral-950) 100%
//           );
//           --gradient-glass: linear-gradient(
//             135deg,
//             rgba(255, 255, 255, 0.1) 0%,
//             rgba(255, 255, 255, 0.05) 100%
//           );

//           /* Shadows */
//           --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
//           --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//             0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//             0 4px 6px -2px rgba(0, 0, 0, 0.05);
//           --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
//             0 10px 10px -5px rgba(0, 0, 0, 0.04);
//           --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//           --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
//           --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

//           /* Transitions */
//           --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

//           /* Border Radius */
//           --radius-sm: 0.125rem;
//           --radius-md: 0.375rem;
//           --radius-lg: 0.5rem;
//           --radius-xl: 0.75rem;
//           --radius-2xl: 1rem;
//           --radius-3xl: 1.5rem;
//           --radius-full: 9999px;
//         }

//         /* Import premium fonts */
//         @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap");
//         @import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap");

//         /* Base Styles */
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         body {
//           font-family: "Manrope", sans-serif;
//           background-color: var(--neutral-950);
//           color: var(--neutral-50);
//         }

//         /* Header Styles */
//         .premium-header {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 90px;
//           background: rgba(2, 6, 23, 0.85);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           z-index: 1000;
//           transition: all var(--transition-medium);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .premium-container {
//           width: 100%;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           height: 100%;
//         }

//         .premium-navbar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 100%;
//           position: relative;
//         }

//         /* Logo Styles - Keeping original logo without animations */
//         .premium-logo {
//           position: relative;
//           z-index: 10;
//         }

//         .logo-link {
//           display: block;
//         }

//         /* Desktop Navigation */
//         .premium-nav-desktop {
//           display: flex;
//           align-items: center;
//           height: 100%;
//         }

//         .premium-nav-list {
//           display: flex;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//           height: 100%;
//         }

//         .premium-nav-item {
//           margin: 0 0.25rem;
//           height: 100%;
//           display: flex;
//           align-items: center;
//         }

//         .premium-nav-link {
//           display: flex;
//           align-items: center;
//           height: 100%;
//           padding: 0 1.25rem;
//           color: var(--neutral-300);
//           font-family: "Sora", sans-serif;
//           font-size: 0.9375rem;
//           font-weight: 500;
//           text-decoration: none;
//           position: relative;
//           transition: all var(--transition-medium);
//         }

//         .premium-nav-link:hover,
//         .premium-nav-link.active,
//         .premium-nav-link.hovered {
//           color: var(--neutral-50);
//         }

//         .nav-text {
//           position: relative;
//           z-index: 1;
//         }

//         .nav-indicator {
//           position: absolute;
//           bottom: 0;
//           left: 1.25rem;
//           right: 1.25rem;
//           height: 3px;
//           background: var(--gradient-secondary);
//           transform-origin: left;
//           border-radius: var(--radius-full);
//           box-shadow: 0 0 15px rgba(249, 115, 22, 0.5);
//         }

//         /* CTA Button */
//         .premium-cta-wrapper {
//           margin-left: 1.5rem;
//           position: relative;
//         }

//         .premium-cta-button {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.75rem 1.75rem;
//           background: transparent;
//           color: var(--neutral-50);
//           font-family: "Sora", sans-serif;
//           font-size: 0.9375rem;
//           font-weight: 600;
//           border-radius: var(--radius-lg);
//           text-decoration: none;
//           position: relative;
//           overflow: hidden;
//           transition: all var(--transition-medium);
//           border: 1px solid rgba(249, 115, 22, 0.5);
//           z-index: 1;
//         }

//         .cta-bg {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: var(--gradient-secondary);
//           opacity: 0;
//           transition: opacity var(--transition-medium);
//           z-index: -1;
//         }

//         .premium-cta-button:hover .cta-bg {
//           opacity: 1;
//         }

//         .premium-cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
//           border-color: transparent;
//         }

//         .cta-text {
//           position: relative;
//           z-index: 2;
//           margin-right: 0.5rem;
//         }

//         .cta-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 2;
//         }

//         /* Mobile Menu Toggle */
//         .premium-menu-toggle {
//           display: none;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           padding: 0.5rem;
//           z-index: 1001;
//         }

//         .menu-toggle-icon {
//           width: 24px;
//           height: 18px;
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }

//         .toggle-line {
//           width: 100%;
//           height: 2px;
//           background-color: var(--neutral-50);
//           border-radius: var(--radius-full);
//           transition: all var(--transition-medium);
//         }

//         .toggle-line.open:nth-child(1) {
//           transform: translateY(8px) rotate(45deg);
//         }

//         .toggle-line.open:nth-child(2) {
//           opacity: 0;
//         }

//         .toggle-line.open:nth-child(3) {
//           transform: translateY(-8px) rotate(-45deg);
//         }

//         /* Mobile Navigation */
//         .premium-nav-mobile {
//           position: fixed;
//           top: 0;
//           right: 0;
//           width: 350px;
//           height: 100vh;
//           background: var(--gradient-dark);
//           z-index: 1000;
//           display: flex;
//           flex-direction: column;
//           box-shadow: var(--shadow-2xl);
//           border-left: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .mobile-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 1.5rem;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .mobile-close {
//           background: transparent;
//           border: none;
//           color: var(--neutral-50);
//           cursor: pointer;
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: var(--radius-full);
//           transition: all var(--transition-fast);
//         }

//         .mobile-close:hover {
//           background: rgba(255, 255, 255, 0.1);
//         }

//         .mobile-content {
//           flex: 1;
//           padding: 1.5rem;
//           overflow-y: auto;
//         }

//         .mobile-nav-list {
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }

//         .mobile-nav-item {
//           margin-bottom: 0.75rem;
//         }

//         .mobile-nav-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 1rem 1.25rem;
//           color: var(--neutral-300);
//           font-family: "Sora", sans-serif;
//           font-size: 1rem;
//           font-weight: 500;
//           text-decoration: none;
//           border-radius: var(--radius-lg);
//           background: rgba(255, 255, 255, 0.03);
//           transition: all var(--transition-medium);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .mobile-nav-link.active {
//           color: var(--neutral-50);
//           background: rgba(249, 115, 22, 0.1);
//           border-color: rgba(249, 115, 22, 0.2);
//         }

//         .mobile-link-text {
//           position: relative;
//         }

//         .mobile-link-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 28px;
//           height: 28px;
//           border-radius: var(--radius-full);
//           background: rgba(255, 255, 255, 0.05);
//           transition: all var(--transition-medium);
//         }

//         .mobile-nav-link:hover,
//         .mobile-nav-link.active {
//           color: var(--neutral-50);
//           transform: translateX(5px);
//         }

//         .mobile-nav-link:hover .mobile-link-icon,
//         .mobile-nav-link.active .mobile-link-icon {
//           background: var(--secondary-600);
//           color: var(--neutral-50);
//         }

//         .mobile-cta {
//           margin-top: 2rem;
//         }

//         .mobile-cta-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           padding: 1rem 1.5rem;
//           background: var(--gradient-secondary);
//           color: var(--neutral-950);
//           font-family: "Sora", sans-serif;
//           font-size: 1rem;
//           font-weight: 600;
//           border-radius: var(--radius-lg);
//           text-decoration: none;
//           gap: 0.75rem;
//           transition: all var(--transition-medium);
//           box-shadow: 0 8px 20px rgba(249, 115, 22, 0.25);
//           position: relative;
//           overflow: hidden;
//         }

//         .mobile-cta-button::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to right,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           );
//           transform: translateX(-100%);
//           transition: transform 0.8s;
//         }

//         .mobile-cta-button:hover::before {
//           transform: translateX(100%);
//         }

//         .mobile-cta-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: transform var(--transition-fast);
//         }

//         .mobile-cta-button:hover .mobile-cta-icon {
//           transform: translateX(3px);
//         }

//         .mobile-footer {
//           padding: 1.5rem;
//           border-top: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .mobile-social {
//           display: flex;
//           gap: 0.75rem;
//           margin-bottom: 1rem;
//         }

//         .social-link {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 36px;
//           height: 36px;
//           border-radius: var(--radius-full);
//           background: rgba(255, 255, 255, 0.05);
//           color: var(--neutral-300);
//           font-size: 0.75rem;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all var(--transition-fast);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .social-link:hover {
//           background: rgba(255, 255, 255, 0.1);
//           color: var(--neutral-50);
//           transform: translateY(-2px);
//         }

//         .mobile-copyright {
//           color: var(--neutral-500);
//           font-size: 0.75rem;
//         }

//         /* Responsive Styles */
//         @media (max-width: 1200px) {
//           .premium-container {
//             padding: 0 1.5rem;
//           }

//           .premium-nav-link {
//             padding: 0 1rem;
//             font-size: 0.875rem;
//           }

//           .nav-indicator {
//             left: 1rem;
//             right: 1rem;
//           }

//           .premium-cta-button {
//             padding: 0.625rem 1.5rem;
//             font-size: 0.875rem;
//           }
//         }

//         @media (max-width: 992px) {
//           .premium-nav-desktop {
//             display: none;
//           }

//           .premium-menu-toggle {
//             display: block;
//           }
//         }

//         @media (max-width: 768px) {
//           .premium-container {
//             padding: 0 1rem;
//           }

//           .premium-header {
//             height: 80px;
//           }

//           .premium-nav-mobile {
//             width: 320px;
//           }
//         }

//         @media (max-width: 480px) {
//           .premium-header {
//             height: 70px;
//           }

//           .premium-nav-mobile {
//             width: 100%;
//           }
//         }

//         /* Prefers reduced motion */
//         @media (prefers-reduced-motion: reduce) {
//           .premium-header,
//           .premium-nav-link,
//           .nav-indicator,
//           .premium-cta-button,
//           .cta-bg,
//           .toggle-line,
//           .mobile-nav-link,
//           .mobile-link-icon,
//           .mobile-cta-button::before {
//             transition: none;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Headers;

"use client";

import { useEffect, useState, useRef, memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { X, ArrowRight } from "lucide-react";
import logo1 from "../../assets/vai/logo1.png"; // Using the original logo

// Memoized navigation link component for better performance
const NavItem = memo(({ link, activeLink }) => (
  <li className="premium-nav-item nav-item-animate">
    <NavLink
      to={link.path}
      className={`premium-nav-link ${activeLink === link.path ? "active" : ""}`}
    >
      <span className="nav-text">{link.label}</span>
      {activeLink === link.path && <div className="nav-indicator" />}
    </NavLink>
  </li>
));

NavItem.displayName = "NavItem";

// Memoized mobile navigation link component
const MobileNavItem = memo(
  ({ link, activeLink, toggleMenu, custom, variants }) => (
    <motion.li className="mobile-nav-item" custom={custom} variants={variants}>
      <NavLink
        to={link.path}
        className={`mobile-nav-link ${
          activeLink === link.path ? "active" : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="mobile-link-text">{link.label}</span>
        <span className="mobile-link-icon">
          <ArrowRight size={16} />
        </span>
      </NavLink>
    </motion.li>
  )
);

MobileNavItem.displayName = "MobileNavItem";

const Headers = ({ tags }) => {
  // State management with optimized initial values
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Refs for GSAP animations
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  const location = useLocation();

  // Handle scroll events with throttling for performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsSticky(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  // GSAP animations for header elements (excluding logo and links)
  useEffect(() => {
    if (!headerRef.current) return;

    // Initial animation for CTA button only
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.3 }
    );

    // Sticky header animation
    if (isSticky) {
      gsap.to(headerRef.current, {
        height: "70px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
      });
    } else {
      gsap.to(headerRef.current, {
        height: "90px",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        duration: 0.3,
      });
    }
  }, [isSticky]);

  // Toggle mobile menu with optimized body scroll locking
  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "";
      return newState;
    });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  // Navigation links - memoized to prevent unnecessary re-renders
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Animation variants for Framer Motion (only for mobile menu)
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
      },
    },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <>
      <header ref={headerRef} className="premium-header">
        <div className="premium-container">
          <div className="premium-navbar">
            {/* Original Logo without animations */}
            <div className="premium-logo">
              <NavLink to="/" className="logo-link">
                <img
                  src={logo1 || "/placeholder.svg"}
                  style={{ width: "auto", height: "55px" }}
                  className="img-fluid"
                  title="lenexit"
                  alt="lenexit.com logo"
                  loading="eager"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation - No animations on links */}
            <nav className="premium-nav-desktop">
              <ul className="premium-nav-list">
                {navLinks.map((link, index) => (
                  <NavItem
                    key={link.path}
                    link={link}
                    activeLink={activeLink}
                  />
                ))}
              </ul>

              <div className="premium-cta-wrapper" ref={ctaRef}>
                <NavLink to="/calender" className="premium-cta-button">
                  <span className="cta-text">Book A Consultation</span>
                  <motion.span
                    className="cta-icon"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                  <span className="cta-bg"></span>
                </NavLink>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="premium-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="menu-toggle-icon">
                <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
                <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
                <span className={`toggle-line ${isOpen ? "open" : ""}`}></span>
              </div>
            </button>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="premium-nav-mobile"
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="mobile-header">
                    <div className="mobile-logo">
                      <img
                        src={logo1 || "/placeholder.svg"}
                        style={{ width: "auto", height: "40px" }}
                        className="img-fluid"
                        alt="logo"
                        loading="eager"
                      />
                    </div>
                    {/* <button
                      className="mobile-close"
                      onClick={toggleMenu}
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button> */}
                  </div>

                  <div className="mobile-content">
                    <ul className="mobile-nav-list">
                      {navLinks.map((link, index) => (
                        <MobileNavItem
                          key={link.path}
                          link={link}
                          activeLink={activeLink}
                          toggleMenu={toggleMenu}
                          custom={index}
                          variants={mobileLinkVariants}
                        />
                      ))}
                    </ul>

                    <motion.div
                      className="mobile-cta"
                      variants={mobileLinkVariants}
                      custom={navLinks.length}
                    >
                      <NavLink
                        to="/calender"
                        className="mobile-cta-button"
                        onClick={toggleMenu}
                      >
                        <span>Book A Consultation</span>
                        <span className="mobile-cta-icon">
                          <ArrowRight size={16} />
                        </span>
                      </NavLink>
                    </motion.div>
                  </div>

                  <div className="mobile-footer">
                    <div className="mobile-social">
                      <a href="#" className="social-link">
                        FB
                      </a>
                      <a href="#" className="social-link">
                        TW
                      </a>
                      <a href="#" className="social-link">
                        IG
                      </a>
                      <a href="#" className="social-link">
                        LI
                      </a>
                    </div>
                    <div className="mobile-copyright">
                      © {new Date().getFullYear()} RevenueRocket
                    </div>
                  </div>
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
          /* Primary Colors */
          --primary-50: #f0f9ff;
          --primary-100: #e0f2fe;
          --primary-200: #bae6fd;
          --primary-300: #7dd3fc;
          --primary-400: #38bdf8;
          --primary-500: #0ea5e9;
          --primary-600: #0284c7;
          --primary-700: #0369a1;
          --primary-800: #075985;
          --primary-900: #0c4a6e;
          --primary-950: #082f49;

          /* Secondary Colors */
          --secondary-50: #fff7ed;
          --secondary-100: #ffedd5;
          --secondary-200: #fed7aa;
          --secondary-300: #fdba74;
          --secondary-400: #fb923c;
          --secondary-500: #f97316;
          --secondary-600: #ea580c;
          --secondary-700: #c2410c;
          --secondary-800: #9a3412;
          --secondary-900: #7c2d12;
          --secondary-950: #431407;

          /* Neutral Colors */
          --neutral-50: #f8fafc;
          --neutral-100: #f1f5f9;
          --neutral-200: #e2e8f0;
          --neutral-300: #cbd5e1;
          --neutral-400: #94a3b8;
          --neutral-500: #64748b;
          --neutral-600: #475569;
          --neutral-700: #334155;
          --neutral-800: #1e293b;
          --neutral-900: #0f172a;
          --neutral-950: #020617;

          /* Accent Colors */
          --accent-50: #ecfdf5;
          --accent-100: #d1fae5;
          --accent-200: #a7f3d0;
          --accent-300: #6ee7b7;
          --accent-400: #34d399;
          --accent-500: #10b981;
          --accent-600: #059669;
          --accent-700: #047857;
          --accent-800: #065f46;
          --accent-900: #064e3b;
          --accent-950: #022c22;

          /* Gradients */
          --gradient-primary: linear-gradient(
            135deg,
            var(--primary-600) 0%,
            var(--primary-800) 100%
          );
          --gradient-secondary: linear-gradient(
            135deg,
            var(--secondary-500) 0%,
            var(--secondary-700) 100%
          );
          --gradient-accent: linear-gradient(
            135deg,
            var(--accent-500) 0%,
            var(--accent-700) 100%
          );
          --gradient-dark: linear-gradient(
            135deg,
            var(--neutral-800) 0%,
            var(--neutral-950) 100%
          );
          --gradient-glass: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );

          /* Shadows */
          --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --shadow-outline: 0 0 0 3px rgba(66, 153, 225, 0.5);

          /* Transitions */
          --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-bounce: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

          /* Border Radius */
          --radius-sm: 0.125rem;
          --radius-md: 0.375rem;
          --radius-lg: 0.5rem;
          --radius-xl: 0.75rem;
          --radius-2xl: 1rem;
          --radius-3xl: 1.5rem;
          --radius-full: 9999px;
        }

        /* Import premium fonts - preloaded for performance */
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&display=swap");

        /* Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: "Manrope", sans-serif;
          background-color: var(--neutral-950);
          color: var(--neutral-50);
        }

        /* Header Styles */
        .premium-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 90px;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          transition: height 0.3s ease, backdrop-filter 0.3s ease,
            box-shadow 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          will-change: height, backdrop-filter, box-shadow;
        }

        .premium-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 100%;
        }

        .premium-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          position: relative;
        }

        /* Logo Styles - Keeping original logo without animations */
        .premium-logo {
          position: relative;
          z-index: 10;
        }

        .logo-link {
          display: block;
        }

        /* Desktop Navigation - No animations */
        .premium-nav-desktop {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .premium-nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .premium-nav-item {
          margin: 0 0.25rem;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .premium-nav-link {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 1.25rem;
          color: var(--neutral-300);
          font-family: "Sora", sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease;
        }

        .premium-nav-link:hover,
        .premium-nav-link.active {
          color: var(--neutral-50);
        }

        .nav-text {
          position: relative;
          z-index: 1;
        }

        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 1.25rem;
          right: 1.25rem;
          height: 3px;
          background: var(--gradient-secondary);
          border-radius: var(--radius-full);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.5);
        }

        /* CTA Button */
        .premium-cta-wrapper {
          margin-left: 1.5rem;
          position: relative;
        }

        .premium-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.75rem;
          background: transparent;
          color: var(--neutral-50);
          font-family: "Sora", sans-serif;
          font-size: 0.9375rem;
          font-weight: 600;
          border-radius: var(--radius-lg);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease;
          border: 1px solid rgba(249, 115, 22, 0.5);
          z-index: 1;
        }

        .cta-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-secondary);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .premium-cta-button:hover .cta-bg {
          opacity: 1;
        }

        .premium-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
          border-color: transparent;
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

        /* Mobile Menu Toggle */
        .premium-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .menu-toggle-icon {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .toggle-line {
          width: 100%;
          height: 2px;
          background-color: var(--neutral-50);
          border-radius: var(--radius-full);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .toggle-line.open:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .toggle-line.open:nth-child(2) {
          opacity: 0;
        }

        .toggle-line.open:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Navigation */
        .premium-nav-mobile {
          position: fixed;
          top: 0;
          right: 0;
          width: 350px;
          height: 100vh;
          background: var(--gradient-dark);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-2xl);
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          overscroll-behavior: contain;
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-close {
          background: transparent;
          border: none;
          color: var(--neutral-50);
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          transition: background-color 0.2s ease;
        }

        .mobile-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-content {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-item {
          margin-bottom: 0.75rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          color: var(--neutral-300);
          font-family: "Sora", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.03);
          transition: color 0.2s ease, background-color 0.2s ease,
            transform 0.2s ease, border-color 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link.active {
          color: var(--neutral-50);
          background: rgba(249, 115, 22, 0.1);
          border-color: rgba(249, 115, 22, 0.2);
        }

        .mobile-link-text {
          position: relative;
        }

        .mobile-link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--neutral-50);
          transform: translateX(5px);
        }

        .mobile-nav-link:hover .mobile-link-icon,
        .mobile-nav-link.active .mobile-link-icon {
          background: var(--secondary-600);
          color: var(--neutral-50);
        }

        .mobile-cta {
          margin-top: 2rem;
        }

        .mobile-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 1rem 1.5rem;
          background: var(--gradient-secondary);
          color: var(--neutral-950);
          font-family: "Sora", sans-serif;
          font-size: 1rem;
          font-weight: 600;
          border-radius: var(--radius-lg);
          text-decoration: none;
          gap: 0.75rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.25);
          position: relative;
          overflow: hidden;
        }

        .mobile-cta-button:active {
          transform: translateY(1px);
        }

        .mobile-cta-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-social {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          color: var(--neutral-300);
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease,
            transform 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--neutral-50);
          transform: translateY(-2px);
        }

        .mobile-copyright {
          color: var(--neutral-500);
          font-size: 0.75rem;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .premium-container {
            padding: 0 1.5rem;
          }

          .premium-nav-link {
            padding: 0 1rem;
            font-size: 0.875rem;
          }

          .nav-indicator {
            left: 1rem;
            right: 1rem;
          }

          .premium-cta-button {
            padding: 0.625rem 1.5rem;
            font-size: 0.875rem;
          }
        }

        @media (max-width: 992px) {
          .premium-nav-desktop {
            display: none;
          }

          .premium-menu-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .premium-container {
            padding: 0 1rem;
          }

          .premium-header {
            height: 80px;
          }

          .premium-nav-mobile {
            width: 320px;
          }
        }

        @media (max-width: 480px) {
          .premium-header {
            height: 70px;
          }

          .premium-nav-mobile {
            width: 100%;
          }
        }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .premium-header,
          .premium-nav-link,
          .nav-indicator,
          .premium-cta-button,
          .cta-bg,
          .toggle-line,
          .mobile-nav-link,
          .mobile-link-icon,
          .mobile-cta-button::before {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Headers;
