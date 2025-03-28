// import React from "react";
// import "./TimeLine.css";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// const spanStyle = {
//   padding: "20px",
//   background: "#182d50",
//   color: "#fff",
// };

// const divStyle = {
//   display: "grid",
//   height: "250px",
//   width: "100%",
//   margin: "10px 0",
// };
// const shadow = {
//   boxShadow: "-2px -2px 5px #ed854f,2px 2px 5px #ed854f",
// };
// const slideImage = [
//   {
//     title: "step-1: Discovery and Requirement Gathering",
//     caption: `We begin by thoroughly understanding your business goals, target audience, and specific requirements. Through detailed discussions and research, we gather valuable insights that lay the foundation for our work.`,
//   },
//   {
//     title: "step-2: Design and Prototyping",
//     caption: `Our talented design team creates visually stunning and user-friendly mockups and prototypes based on the gathered requirements. We focus on creating a captivating visual experience while ensuring seamless navigation and functionality.`,
//   },
//   {
//     title: "step-3: Development and Testing",
//     caption: `Once the designs are approved, our expert developers bring them to life using the latest technologies and coding standards. We follow an agile development approach, allowing for regular client feedback and incorporating necessary adjustments. Rigorous testing ensures that the final product meets the highest quality standards.`,
//   },
//   {
//     title: "step-4: Deployment and Launch",
//     caption: `After thorough testing and client approval, we deploy the developed solution to the desired platforms, ensuring a smooth and error-free transition. We take care of all technical aspects to ensure a seamless launch, be it a website, mobile app, or desktop application.`,
//   },
//   {
//     title: "step-5: Ongoing Support and Maintenance",
//     caption: `Our commitment doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital solution remains up-to-date, secure, and optimized for performance. Our team is always available to address any concerns and make necessary updates as your business evolves.`,
//   },
// ];
// const TimeLine = () => {
//   return (
//     <section id="timeline">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-sm col-lg-6">
//             <div className="title">
//               <p
//                 className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//                 style={{ fontSize: "12px" }}
//               >
//                 5 Steps To Success
//               </p>
//               <h3 className="text-capitalize py-2">
//                 <span style={{ color: "#ed854f" }}>Efficient Workflow: </span> 5
//                 Steps to Success with Comprehensive Development Process{" "}
//               </h3>
//             </div>
//             <p>
//               Seamless Journey: Revenue Rocket 5-Step Workflow Delivers a Smooth
//               and Efficient Development Process. From in-depth discovery and
//               requirement gathering to captivating design and rigorous testing,
//               our expert team ensures every aspect is meticulously executed.
//               With deployment and launch handled seamlessly, we provide ongoing
//               support and maintenance to keep your digital solution optimized.
//               Our streamlined approach prioritizes efficiency and effectiveness,
//               allowing us to deliver exceptional results. Trust Lenexit to guide
//               you through this structured workflow, ensuring a successful and
//               satisfying development experience from start to finish.
//             </p>
//           </div>
//           <div className="col-md-6 col-sm col-lg-6">
//             <div className="slide-container mt-5">
//               <Slide>
//                 {slideImage.map((slideImage, index) => (
//                   <div key={index} className="p-3" style={shadow}>
//                     <div style={divStyle}>
//                       <h2
//                         className="text-capitalize text-primary"
//                         style={{ fontSize: "20px", paddingLeft: "20px" }}
//                       >
//                         {slideImage.title}
//                       </h2>
//                       <span style={spanStyle}>{slideImage.caption}</span>
//                     </div>
//                   </div>
//                 ))}
//               </Slide>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TimeLine;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// const UltraPremiumTimeline = () => {
//   // State management
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   // Refs
//   const timelineSectionRef = useRef(null);
//   const slideContainerRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Timeline data
//   const timelineSteps = [
//     {
//       title: "Discovery and Requirement Gathering",
//       caption: `We begin by thoroughly understanding your business goals, target audience, and specific requirements. Through detailed discussions and research, we gather valuable insights that lay the foundation for our work.`,
//       icon: "🔍",
//       benefits: [
//         "Comprehensive business analysis",
//         "Target audience profiling",
//         "Detailed requirement documentation",
//         "Strategic planning",
//       ],
//     },
//     {
//       title: "Design and Prototyping",
//       caption: `Our talented design team creates visually stunning and user-friendly mockups and prototypes based on the gathered requirements. We focus on creating a captivating visual experience while ensuring seamless navigation and functionality.`,
//       icon: "✏️",
//       benefits: [
//         "Intuitive user interface design",
//         "Interactive prototyping",
//         "Visual identity development",
//         "User experience optimization",
//       ],
//     },
//     {
//       title: "Development and Testing",
//       caption: `Once the designs are approved, our expert developers bring them to life using the latest technologies and coding standards. We follow an agile development approach, allowing for regular client feedback and incorporating necessary adjustments. Rigorous testing ensures that the final product meets the highest quality standards.`,
//       icon: "💻",
//       benefits: [
//         "Cutting-edge technology implementation",
//         "Agile development methodology",
//         "Comprehensive quality assurance",
//         "Performance optimization",
//       ],
//     },
//     {
//       title: "Deployment and Launch",
//       caption: `After thorough testing and client approval, we deploy the developed solution to the desired platforms, ensuring a smooth and error-free transition. We take care of all technical aspects to ensure a seamless launch, be it a website, mobile app, or desktop application.`,
//       icon: "🚀",
//       benefits: [
//         "Seamless deployment process",
//         "Cross-platform compatibility",
//         "Performance monitoring setup",
//         "Launch strategy execution",
//       ],
//     },
//     {
//       title: "Ongoing Support and Maintenance",
//       caption: `Our commitment doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital solution remains up-to-date, secure, and optimized for performance. Our team is always available to address any concerns and make necessary updates as your business evolves.`,
//       icon: "🛠️",
//       benefits: [
//         "24/7 technical support",
//         "Regular security updates",
//         "Performance monitoring",
//         "Continuous improvement",
//       ],
//     },
//   ];

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Initial check
//     checkIfMobile();

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile);

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   // Intersection Observer to trigger animations when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (timelineSectionRef.current) {
//       observer.observe(timelineSectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isHovering) {
//       const interval = setInterval(() => {
//         if (!isAnimating) {
//           nextSlide();
//         }
//       }, 6000);

//       return () => clearInterval(interval);
//     }
//   }, [currentSlide, isAnimating, isHovering]);

//   // Particle animation for background
//   useEffect(() => {
//     if (!canvasRef.current || !isVisible) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     // Create particles
//     const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
//     const particles = [];

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 2 + 1,
//         color: `rgba(237, 134, 82, ${Math.random() * 0.5 + 0.1})`,
//         speedX: Math.random() * 0.5 - 0.25,
//         speedY: Math.random() * 0.5 - 0.25,
//         amplitude: Math.random() * 2 + 1,
//         frequency: Math.random() * 0.02 + 0.01,
//         phase: Math.random() * Math.PI * 2,
//       });
//     }

//     // Animation loop
//     let animationFrameId;
//     let lastTime = 0;

//     const animate = (time) => {
//       const deltaTime = time - lastTime || 0;
//       lastTime = time;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Update and draw particles
//       particles.forEach((particle) => {
//         // Add wave motion
//         particle.phase += particle.frequency * deltaTime;
//         const waveY = Math.sin(particle.phase) * particle.amplitude;

//         // Move particle
//         particle.x += particle.speedX;
//         particle.y += particle.speedY + waveY * 0.01;

//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

//         // Draw particle with glow effect
//         const gradient = ctx.createRadialGradient(
//           particle.x,
//           particle.y,
//           0,
//           particle.x,
//           particle.y,
//           particle.radius * 3
//         );
//         gradient.addColorStop(0, particle.color.replace(")", ", 0.8)"));
//         gradient.addColorStop(1, particle.color.replace(")", ", 0)"));

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();

//         // Draw particle core
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = particle.color.replace(")", ", 1)");
//         ctx.fill();
//       });

//       // Draw connections between particles
//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);

//             // Gradient line
//             const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//             gradient.addColorStop(
//               0,
//               p1.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
//             );
//             gradient.addColorStop(
//               1,
//               p2.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
//             );

//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = 1 * (1 - distance / 100);
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isVisible]);

//   // Mouse move effect for 3D tilt
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (slideContainerRef.current) {
//         const { left, top, width, height } =
//           slideContainerRef.current.getBoundingClientRect();
//         const x = (e.clientX - left) / width;
//         const y = (e.clientY - top) / height;

//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Handle slide navigation
//   const nextSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setCurrentSlide((prev) =>
//       prev === timelineSteps.length - 1 ? 0 : prev + 1
//     );

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setCurrentSlide((prev) =>
//       prev === 0 ? timelineSteps.length - 1 : prev - 1
//     );

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   // Touch event handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     }

//     if (isRightSwipe) {
//       prevSlide();
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   // Calculate 3D transform values based on mouse position
//   const calculateTransform = () => {
//     if (isMobile) return {};

//     const tiltX = (mousePosition.y - 0.5) * 8; // -4 to 4 degrees
//     const tiltY = (mousePosition.x - 0.5) * -8; // -4 to 4 degrees

//     return {
//       transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
//       transition: isHovering ? "transform 0.1s ease" : "transform 0.6s ease",
//     };
//   };

//   // Progress calculation
//   const progressPercentage = ((currentSlide + 1) / timelineSteps.length) * 100;

//   return (
//     <section
//       ref={timelineSectionRef}
//       className={`timeline-section ${isVisible ? "visible" : ""}`}
//     >
//       {/* Background particles */}
//       <canvas ref={canvasRef} className="particles-canvas"></canvas>

//       <div className="timeline-container">
//         <div className="timeline-header">
//           <div className={`timeline-badge ${isVisible ? "animate-in" : ""}`}>
//             <span className="badge-dot"></span>5 Steps To Success
//           </div>

//           <h2 className={`timeline-title ${isVisible ? "animate-in" : ""}`}>
//             <span className="highlight">Efficient Workflow: </span>5 Steps to
//             Success with Comprehensive Development Process
//           </h2>

//           <p
//             className={`timeline-description ${isVisible ? "animate-in" : ""}`}
//           >
//             Seamless Journey: Revenue Rocket 5-Step Workflow Delivers a Smooth
//             and Efficient Development Process. From in-depth discovery and
//             requirement gathering to captivating design and rigorous testing,
//             our expert team ensures every aspect is meticulously executed. With
//             deployment and launch handled seamlessly, we provide ongoing support
//             and maintenance to keep your digital solution optimized. Our
//             streamlined approach prioritizes efficiency and effectiveness,
//             allowing us to deliver exceptional results. Trust Revenue Rocket to
//             guide you through this structured workflow, ensuring a successful
//             and satisfying development experience from start to finish.
//           </p>
//         </div>

//         <div className="timeline-content">
//           {/* Timeline Navigation */}
//           <div
//             className={`timeline-navigation ${isVisible ? "animate-in" : ""}`}
//           >
//             <div className="timeline-progress">
//               <div className="timeline-progress-bar">
//                 <div
//                   className="timeline-progress-fill"
//                   style={{ width: `${progressPercentage}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="timeline-steps">
//               {timelineSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`timeline-step ${
//                     index === currentSlide ? "active" : ""
//                   } ${index < currentSlide ? "completed" : ""}`}
//                   onClick={() => {
//                     if (!isAnimating) {
//                       setIsAnimating(true);
//                       setCurrentSlide(index);
//                       setTimeout(() => setIsAnimating(false), 700);
//                     }
//                   }}
//                 >
//                   <div className="step-connector"></div>
//                   <div className="step-circle">
//                     {index < currentSlide ? (
//                       <CheckCircle className="step-check" />
//                     ) : (
//                       <span>{index + 1}</span>
//                     )}
//                   </div>
//                   <div className="step-label">
//                     <span className="step-title">Step {index + 1}</span>
//                     <span className="step-name">
//                       {step.title.split(" ")[0]}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Slide Display */}
//           <div
//             className={`timeline-display ${isVisible ? "animate-in" : ""}`}
//             ref={slideContainerRef}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             style={calculateTransform()}
//           >
//             <div className="display-header">
//               <div className="step-indicator">
//                 <span className="current-step">Step {currentSlide + 1}</span>
//                 <span className="step-divider">/</span>
//                 <span className="total-steps">{timelineSteps.length}</span>
//               </div>

//               <div className="navigation-controls">
//                 <button
//                   className="nav-button prev"
//                   onClick={prevSlide}
//                   aria-label="Previous step"
//                 >
//                   <ChevronLeft className="nav-icon" />
//                 </button>
//                 <button
//                   className="nav-button next"
//                   onClick={nextSlide}
//                   aria-label="Next step"
//                 >
//                   <ChevronRight className="nav-icon" />
//                 </button>
//               </div>
//             </div>

//             <div className="display-content">
//               {timelineSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`step-content ${
//                     index === currentSlide ? "active" : ""
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentSlide) * 100}%)`,
//                     opacity: index === currentSlide ? 1 : 0,
//                   }}
//                 >
//                   <div className="step-icon-container">
//                     <div className="step-icon">{step.icon}</div>
//                   </div>

//                   <div className="step-info">
//                     <h3 className="step-heading">
//                       <span className="step-number">0{index + 1}</span>
//                       {step.title}
//                     </h3>

//                     <p className="step-description">{step.caption}</p>

//                     <div className="step-benefits">
//                       <h4 className="benefits-title">Key Benefits</h4>
//                       <ul className="benefits-list">
//                         {step.benefits.map((benefit, i) => (
//                           <li key={i} className="benefit-item">
//                             <CheckCircle className="benefit-icon" />
//                             <span>{benefit}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="step-action">
//                       <button className="action-button">
//                         <span>Learn More</span>
//                         <ArrowRight className="action-icon" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile indicators */}
//             {isMobile && (
//               <div className="mobile-indicators">
//                 {timelineSteps.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`mobile-indicator ${
//                       index === currentSlide ? "active" : ""
//                     }`}
//                     onClick={() => {
//                       if (!isAnimating) {
//                         setIsAnimating(true);
//                         setCurrentSlide(index);
//                         setTimeout(() => setIsAnimating(false), 700);
//                       }
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Base Variables */
//         :root {
//           --primary-color: #ed854f;
//           --primary-light: rgba(237, 133, 79, 0.1);
//           --primary-dark: #d97745;
//           --secondary-color: #182d50;
//           --secondary-light: #2a4270;
//           --text-light: #ffffff;
//           --text-dark: #333333;
//           --text-muted: rgba(255, 255, 255, 0.7);
//           --background-dark: #0a0e17;
//           --background-light: #f8f9fa;
//           --border-radius-sm: 4px;
//           --border-radius-md: 8px;
//           --border-radius-lg: 16px;
//           --border-radius-xl: 24px;
//           --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
//           --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
//           --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
//           --shadow-accent: 0 8px 16px rgba(237, 133, 79, 0.25);
//           --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           --glass-background: rgba(26, 32, 48, 0.7);
//           --glass-border: rgba(255, 255, 255, 0.05);
//           --glass-highlight: rgba(255, 255, 255, 0.1);
//         }

//         /* Base Styles */
//         .timeline-section {
//           padding: 6rem 0;
//           background: linear-gradient(
//             135deg,
//             var(--background-dark) 0%,
//             #121a2a 100%
//           );
//           color: var(--text-light);
//           font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
//             Roboto, sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         .particles-canvas {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//           opacity: 0.7;
//         }

//         .timeline-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         /* Timeline Header */
//         .timeline-header {
//           text-align: center;
//           margin-bottom: 4rem;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .timeline-badge {
//           display: inline-flex;
//           align-items: center;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.15) 0%,
//             rgba(237, 133, 79, 0.05) 100%
//           );
//           color: var(--primary-color);
//           font-size: 0.75rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 50px;
//           margin-bottom: 1rem;
//           box-shadow: 0 4px 12px rgba(237, 133, 79, 0.1);
//           border: 1px solid rgba(237, 133, 79, 0.2);
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--transition-medium);
//         }

//         .timeline-badge.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .badge-dot {
//           width: 8px;
//           height: 8px;
//           background-color: var(--primary-color);
//           border-radius: 50%;
//           margin-right: 8px;
//         }

//         .timeline-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.3;
//           margin: 0 0 1.5rem;
//           background: linear-gradient(
//             135deg,
//             var(--text-light) 0%,
//             rgba(255, 255, 255, 0.8) 100%
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--transition-medium);
//           transition-delay: 0.1s;
//         }

//         .timeline-title.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .highlight {
//           color: var(--primary-color);
//           -webkit-text-fill-color: var(--primary-color);
//           position: relative;
//         }

//         .highlight::after {
//           content: "";
//           position: absolute;
//           bottom: -3px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--primary-color),
//             transparent
//           );
//           opacity: 0.7;
//         }

//         .timeline-description {
//           font-size: 1.125rem;
//           line-height: 1.7;
//           color: var(--text-muted);
//           margin: 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--transition-medium);
//           transition-delay: 0.2s;
//         }

//         .timeline-description.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Timeline Content */
//         .timeline-content {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 3rem;
//         }

//         @media (min-width: 992px) {
//           .timeline-content {
//             grid-template-columns: 280px 1fr;
//             gap: 4rem;
//           }
//         }

//         /* Timeline Navigation */
//         .timeline-navigation {
//           opacity: 0;
//           transform: translateX(-20px);
//           transition: all var(--transition-medium);
//           transition-delay: 0.3s;
//         }

//         .timeline-navigation.animate-in {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .timeline-progress {
//           margin-bottom: 2rem;
//         }

//         .timeline-progress-bar {
//           height: 4px;
//           background-color: rgba(255, 255, 255, 0.1);
//           border-radius: 2px;
//           overflow: hidden;
//         }

//         .timeline-progress-fill {
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             var(--primary-color),
//             var(--primary-light)
//           );
//           border-radius: 2px;
//           transition: width var(--transition-medium);
//           position: relative;
//         }

//         .timeline-progress-fill::after {
//           content: "";
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 20px;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.5)
//           );
//           animation: shimmer 2s infinite;
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .timeline-steps {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }

//         .timeline-step {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           position: relative;
//           cursor: pointer;
//           transition: all var(--transition-fast);
//         }

//         .timeline-step:hover .step-circle {
//           transform: scale(1.1);
//           box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
//         }

//         .step-connector {
//           position: absolute;
//           top: 30px;
//           left: 15px;
//           width: 2px;
//           height: calc(100% + 1.5rem);
//           background-color: rgba(255, 255, 255, 0.1);
//           z-index: 1;
//         }

//         .timeline-step:last-child .step-connector {
//           display: none;
//         }

//         .timeline-step.completed .step-connector {
//           background: linear-gradient(
//             to bottom,
//             var(--primary-color),
//             rgba(237, 133, 79, 0.3)
//           );
//         }

//         .step-circle {
//           width: 32px;
//           height: 32px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(255, 255, 255, 0.1);
//           color: var(--text-muted);
//           border-radius: 50%;
//           font-weight: 600;
//           transition: all var(--transition-fast);
//           position: relative;
//           z-index: 2;
//         }

//         .timeline-step.active .step-circle {
//           background-color: var(--primary-color);
//           color: var(--text-dark);
//           box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
//         }

//         .timeline-step.completed .step-circle {
//           background-color: var(--primary-color);
//           color: var(--text-dark);
//         }

//         .step-check {
//           width: 18px;
//           height: 18px;
//           color: var(--text-dark);
//         }

//         .step-label {
//           display: flex;
//           flex-direction: column;
//           gap: 0.25rem;
//         }

//         .step-title {
//           font-size: 0.75rem;
//           color: var(--text-muted);
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .step-name {
//           font-size: 1rem;
//           font-weight: 600;
//           color: var(--text-muted);
//           transition: color var(--transition-fast);
//         }

//         .timeline-step.active .step-name {
//           color: var(--primary-color);
//         }

//         .timeline-step.completed .step-name {
//           color: var(--text-light);
//         }

//         /* Timeline Display */
//         .timeline-display {
//           background: var(--glass-background);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           border-radius: var(--border-radius-lg);
//           overflow: hidden;
//           box-shadow: var(--shadow-lg), 0 0 30px rgba(237, 133, 79, 0.1);
//           border: 1px solid var(--glass-border);
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all var(--transition-medium);
//           transition-delay: 0.4s;
//           transform-style: preserve-3d;
//         }

//         .timeline-display.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .timeline-display::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.05) 0%,
//             transparent 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }

//         .display-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 1.25rem 1.5rem;
//           border-bottom: 1px solid var(--glass-border);
//           position: relative;
//           z-index: 2;
//         }

//         .step-indicator {
//           display: flex;
//           align-items: center;
//           gap: 0.25rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//         }

//         .current-step {
//           color: var(--primary-color);
//           font-size: 1.25rem;
//           font-weight: 700;
//         }

//         .step-divider,
//         .total-steps {
//           color: var(--text-muted);
//         }

//         .navigation-controls {
//           display: flex;
//           gap: 0.75rem;
//         }

//         .nav-button {
//           width: 36px;
//           height: 36px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 50%;
//           color: var(--text-light);
//           cursor: pointer;
//           transition: all var(--transition-fast);
//         }

//         .nav-button:hover {
//           background-color: var(--primary-color);
//           border-color: var(--primary-color);
//           color: var(--text-dark);
//           transform: translateY(-2px);
//           box-shadow: var(--shadow-accent);
//         }

//         .nav-icon {
//           width: 18px;
//           height: 18px;
//         }

//         .display-content {
//           position: relative;
//           overflow: hidden;
//           min-height: 450px;
//         }

//         .step-content {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           padding: 2rem;
//           transition: transform var(--transition-medium),
//             opacity var(--transition-medium);
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }

//         @media (min-width: 768px) {
//           .step-content {
//             flex-direction: row;
//             align-items: flex-start;
//           }
//         }

//         .step-icon-container {
//           flex-shrink: 0;
//           width: 80px;
//           height: 80px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.2) 0%,
//             rgba(237, 133, 79, 0.1) 100%
//           );
//           border-radius: var(--border-radius-lg);
//           margin-bottom: 1rem;
//         }

//         .step-icon {
//           font-size: 2.5rem;
//           line-height: 1;
//         }

//         .step-info {
//           flex: 1;
//         }

//         .step-heading {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           margin: 0 0 1.5rem;
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: var(--text-light);
//         }

//         .step-number {
//           font-size: 2.5rem;
//           font-weight: 800;
//           color: var(--primary-color);
//           opacity: 0.5;
//           line-height: 1;
//         }

//         .step-description {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: var(--text-muted);
//           margin: 0 0 1.5rem;
//         }

//         .step-benefits {
//           margin-bottom: 1.5rem;
//         }

//         .benefits-title {
//           font-size: 1rem;
//           font-weight: 600;
//           color: var(--text-light);
//           margin: 0 0 1rem;
//         }

//         .benefits-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 0.75rem;
//         }

//         @media (min-width: 576px) {
//           .benefits-list {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         .benefit-item {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           color: var(--text-muted);
//           font-size: 0.9375rem;
//         }

//         .benefit-icon {
//           width: 16px;
//           height: 16px;
//           color: var(--primary-color);
//           flex-shrink: 0;
//         }

//         .step-action {
//           margin-top: auto;
//         }

//         .action-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 0.75rem 1.5rem;
//           background: linear-gradient(
//             135deg,
//             var(--primary-color) 0%,
//             var(--primary-dark) 100%
//           );
//           color: var(--text-dark);
//           font-size: 0.9375rem;
//           font-weight: 600;
//           border-radius: 50px;
//           border: none;
//           cursor: pointer;
//           transition: all var(--transition-medium);
//           box-shadow: var(--shadow-accent);
//           position: relative;
//           overflow: hidden;
//         }

//         .action-button::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           );
//           transition: left 0.7s ease;
//         }

//         .action-button:hover::before {
//           left: 100%;
//         }

//         .action-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(237, 133, 79, 0.4);
//         }

//         .action-icon {
//           width: 16px;
//           height: 16px;
//         }

//         /* Mobile indicators */
//         .mobile-indicators {
//           display: none;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 1.5rem 0;
//         }

//         @media (max-width: 767px) {
//           .mobile-indicators {
//             display: flex;
//           }
//         }

//         .mobile-indicator {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background-color: rgba(255, 255, 255, 0.2);
//           cursor: pointer;
//           transition: all var(--transition-fast);
//         }

//         .mobile-indicator.active {
//           background-color: var(--primary-color);
//           transform: scale(1.2);
//           box-shadow: 0 0 10px rgba(237, 133, 79, 0.4);
//         }

//         /* Animations */
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideUp {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }

//         .visible .timeline-badge,
//         .visible .timeline-title,
//         .visible .timeline-description,
//         .visible .timeline-navigation,
//         .visible .timeline-display {
//           animation: slideUp 0.8s forwards;
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 991px) {
//           .timeline-section {
//             padding: 5rem 0;
//           }

//           .timeline-title {
//             font-size: 2rem;
//           }

//           .timeline-description {
//             font-size: 1rem;
//           }

//           .timeline-steps {
//             display: none;
//           }

//           .timeline-progress {
//             margin-bottom: 1rem;
//           }

//           .timeline-navigation {
//             margin-bottom: -2rem;
//           }
//         }

//         @media (max-width: 767px) {
//           .timeline-section {
//             padding: 4rem 0;
//           }

//           .timeline-header {
//             margin-bottom: 3rem;
//           }

//           .timeline-title {
//             font-size: 1.75rem;
//           }

//           .timeline-description {
//             font-size: 0.9375rem;
//           }

//           .step-content {
//             padding: 1.5rem;
//           }

//           .step-heading {
//             font-size: 1.25rem;
//           }

//           .step-number {
//             font-size: 2rem;
//           }

//           .display-content {
//             min-height: 500px;
//           }
//         }

//         @media (max-width: 575px) {
//           .timeline-section {
//             padding: 3rem 0;
//           }

//           .timeline-container {
//             padding: 0 1rem;
//           }

//           .timeline-header {
//             margin-bottom: 2.5rem;
//           }

//           .timeline-title {
//             font-size: 1.5rem;
//           }

//           .timeline-badge {
//             font-size: 0.6875rem;
//             padding: 0.375rem 0.75rem;
//           }

//           .display-header {
//             padding: 1rem;
//           }

//           .step-content {
//             padding: 1.25rem;
//           }

//           .step-icon-container {
//             width: 60px;
//             height: 60px;
//           }

//           .step-icon {
//             font-size: 2rem;
//           }

//           .step-heading {
//             font-size: 1.125rem;
//             gap: 0.75rem;
//           }

//           .step-number {
//             font-size: 1.75rem;
//           }

//           .step-description {
//             font-size: 0.875rem;
//           }

//           .benefits-title {
//             font-size: 0.9375rem;
//           }

//           .benefit-item {
//             font-size: 0.875rem;
//           }

//           .display-content {
//             min-height: 550px;
//           }

//           .benefits-list {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default UltraPremiumTimeline;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ArrowRight,
//   CheckCircle,
//   Clock,
//   Zap,
//   Shield,
//   Award,
//   Star,
// } from "lucide-react";

// const UltraPremiumTimeline = () => {
//   // State management
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   // Refs
//   const timelineSectionRef = useRef(null);
//   const slideContainerRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Timeline data
//   const timelineSteps = [
//     {
//       title: "Discovery and Requirement Gathering",
//       caption: `We begin by thoroughly understanding your business goals, target audience, and specific requirements. Through detailed discussions and research, we gather valuable insights that lay the foundation for our work.`,
//       icon: <Clock className="upt-step-icon-svg" />,
//       benefits: [
//         "Comprehensive business analysis",
//         "Target audience profiling",
//         "Detailed requirement documentation",
//         "Strategic planning",
//       ],
//       stats: {
//         time: "1-2 weeks",
//         completion: "100%",
//         satisfaction: "98%",
//       },
//     },
//     {
//       title: "Design and Prototyping",
//       caption: `Our talented design team creates visually stunning and user-friendly mockups and prototypes based on the gathered requirements. We focus on creating a captivating visual experience while ensuring seamless navigation and functionality.`,
//       icon: <Zap className="upt-step-icon-svg" />,
//       benefits: [
//         "Intuitive user interface design",
//         "Interactive prototyping",
//         "Visual identity development",
//         "User experience optimization",
//       ],
//       stats: {
//         time: "2-3 weeks",
//         completion: "100%",
//         satisfaction: "97%",
//       },
//     },
//     {
//       title: "Development and Testing",
//       caption: `Once the designs are approved, our expert developers bring them to life using the latest technologies and coding standards. We follow an agile development approach, allowing for regular client feedback and incorporating necessary adjustments. Rigorous testing ensures that the final product meets the highest quality standards.`,
//       icon: <Shield className="upt-step-icon-svg" />,
//       benefits: [
//         "Cutting-edge technology implementation",
//         "Agile development methodology",
//         "Comprehensive quality assurance",
//         "Performance optimization",
//       ],
//       stats: {
//         time: "4-8 weeks",
//         completion: "100%",
//         satisfaction: "99%",
//       },
//     },
//     {
//       title: "Deployment and Launch",
//       caption: `After thorough testing and client approval, we deploy the developed solution to the desired platforms, ensuring a smooth and error-free transition. We take care of all technical aspects to ensure a seamless launch, be it a website, mobile app, or desktop application.`,
//       icon: <Award className="upt-step-icon-svg" />,
//       benefits: [
//         "Seamless deployment process",
//         "Cross-platform compatibility",
//         "Performance monitoring setup",
//         "Launch strategy execution",
//       ],
//       stats: {
//         time: "1-2 weeks",
//         completion: "100%",
//         satisfaction: "98%",
//       },
//     },
//     {
//       title: "Ongoing Support and Maintenance",
//       caption: `Our commitment doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital solution remains up-to-date, secure, and optimized for performance. Our team is always available to address any concerns and make necessary updates as your business evolves.`,
//       icon: <Star className="upt-step-icon-svg" />,
//       benefits: [
//         "24/7 technical support",
//         "Regular security updates",
//         "Performance monitoring",
//         "Continuous improvement",
//       ],
//       stats: {
//         time: "Ongoing",
//         completion: "100%",
//         satisfaction: "99%",
//       },
//     },
//   ];

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Initial check
//     checkIfMobile();

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile);

//     // Cleanup
//     return () => window.removeEventListener("resize", checkIfMobile);
//   }, []);

//   // Intersection Observer to trigger animations when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (timelineSectionRef.current) {
//       observer.observe(timelineSectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isHovering) {
//       const interval = setInterval(() => {
//         if (!isAnimating) {
//           nextSlide();
//         }
//       }, 6000);

//       return () => clearInterval(interval);
//     }
//   }, [currentSlide, isAnimating, isHovering]);

//   // Particle animation for background
//   useEffect(() => {
//     if (!canvasRef.current || !isVisible) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     // Create particles
//     const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
//     const particles = [];

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 2 + 1,
//         color: `rgba(237, 134, 82, ${Math.random() * 0.5 + 0.1})`,
//         speedX: Math.random() * 0.5 - 0.25,
//         speedY: Math.random() * 0.5 - 0.25,
//         amplitude: Math.random() * 2 + 1,
//         frequency: Math.random() * 0.02 + 0.01,
//         phase: Math.random() * Math.PI * 2,
//       });
//     }

//     // Animation loop
//     let animationFrameId;
//     let lastTime = 0;

//     const animate = (time) => {
//       const deltaTime = time - lastTime || 0;
//       lastTime = time;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Update and draw particles
//       particles.forEach((particle) => {
//         // Add wave motion
//         particle.phase += particle.frequency * deltaTime;
//         const waveY = Math.sin(particle.phase) * particle.amplitude;

//         // Move particle
//         particle.x += particle.speedX;
//         particle.y += particle.speedY + waveY * 0.01;

//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

//         // Draw particle with glow effect
//         const gradient = ctx.createRadialGradient(
//           particle.x,
//           particle.y,
//           0,
//           particle.x,
//           particle.y,
//           particle.radius * 3
//         );
//         gradient.addColorStop(0, particle.color.replace(")", ", 0.8)"));
//         gradient.addColorStop(1, particle.color.replace(")", ", 0)"));

//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();

//         // Draw particle core
//         ctx.beginPath();
//         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
//         ctx.fillStyle = particle.color.replace(")", ", 1)");
//         ctx.fill();
//       });

//       // Draw connections between particles
//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);

//             // Gradient line
//             const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
//             gradient.addColorStop(
//               0,
//               p1.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
//             );
//             gradient.addColorStop(
//               1,
//               p2.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
//             );

//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = 1 * (1 - distance / 100);
//             ctx.stroke();
//           }
//         });
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isVisible]);

//   // Mouse move effect for 3D tilt
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (slideContainerRef.current) {
//         const { left, top, width, height } =
//           slideContainerRef.current.getBoundingClientRect();
//         const x = (e.clientX - left) / width;
//         const y = (e.clientY - top) / height;

//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Handle slide navigation
//   const nextSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setCurrentSlide((prev) =>
//       prev === timelineSteps.length - 1 ? 0 : prev + 1
//     );

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setCurrentSlide((prev) =>
//       prev === 0 ? timelineSteps.length - 1 : prev - 1
//     );

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   // Touch event handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     }

//     if (isRightSwipe) {
//       prevSlide();
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//   };

//   // Calculate 3D transform values based on mouse position
//   const calculateTransform = () => {
//     if (isMobile) return {};

//     const tiltX = (mousePosition.y - 0.5) * 8; // -4 to 4 degrees
//     const tiltY = (mousePosition.x - 0.5) * -8; // -4 to 4 degrees

//     return {
//       transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
//       transition: isHovering ? "transform 0.1s ease" : "transform 0.6s ease",
//     };
//   };

//   // Progress calculation
//   const progressPercentage = ((currentSlide + 1) / timelineSteps.length) * 100;

//   return (
//     <section ref={timelineSectionRef} className="upt-timeline-section">
//       {/* Background particles */}
//       <canvas ref={canvasRef} className="upt-particles-canvas"></canvas>

//       <div className="upt-timeline-container">
//         <div className="upt-timeline-header">
//           <div
//             className={`upt-timeline-badge ${
//               isVisible ? "upt-animate-in" : ""
//             }`}
//           >
//             <span className="upt-badge-dot"></span>5 Steps To Success
//           </div>

//           <h2
//             className={`upt-timeline-title ${
//               isVisible ? "upt-animate-in" : ""
//             }`}
//           >
//             <span className="upt-highlight">Efficient Workflow: </span>5 Steps
//             to Success with Comprehensive Development Process
//           </h2>

//           <p
//             className={`upt-timeline-description ${
//               isVisible ? "upt-animate-in" : ""
//             }`}
//           >
//             Seamless Journey: Revenue Rocket 5-Step Workflow Delivers a Smooth
//             and Efficient Development Process. From in-depth discovery and
//             requirement gathering to captivating design and rigorous testing,
//             our expert team ensures every aspect is meticulously executed. With
//             deployment and launch handled seamlessly, we provide ongoing support
//             and maintenance to keep your digital solution optimized.
//           </p>
//         </div>

//         <div className="upt-timeline-content">
//           {/* Timeline Navigation */}
//           <div
//             className={`upt-timeline-navigation ${
//               isVisible ? "upt-animate-in" : ""
//             }`}
//           >
//             <div className="upt-timeline-progress">
//               <div className="upt-timeline-progress-bar">
//                 <div
//                   className="upt-timeline-progress-fill"
//                   style={{ width: `${progressPercentage}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="upt-timeline-steps">
//               {timelineSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`upt-timeline-step ${
//                     index === currentSlide ? "upt-active" : ""
//                   } ${index < currentSlide ? "upt-completed" : ""}`}
//                   onClick={() => {
//                     if (!isAnimating) {
//                       setIsAnimating(true);
//                       setCurrentSlide(index);
//                       setTimeout(() => setIsAnimating(false), 700);
//                     }
//                   }}
//                 >
//                   <div className="upt-step-connector"></div>
//                   <div className="upt-step-circle">
//                     {index < currentSlide ? (
//                       <CheckCircle className="upt-step-check" />
//                     ) : (
//                       <span>{index + 1}</span>
//                     )}
//                   </div>
//                   <div className="upt-step-label">
//                     <span className="upt-step-title">Step {index + 1}</span>
//                     <span className="upt-step-name">
//                       {step.title.split(" ")[0]}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Slide Display */}
//           <div
//             className={`upt-timeline-display ${
//               isVisible ? "upt-animate-in" : ""
//             }`}
//             ref={slideContainerRef}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//             style={calculateTransform()}
//           >
//             <div className="upt-display-header">
//               <div className="upt-step-indicator">
//                 <span className="upt-current-step">
//                   Step {currentSlide + 1}
//                 </span>
//                 <span className="upt-step-divider">/</span>
//                 <span className="upt-total-steps">{timelineSteps.length}</span>
//               </div>

//               <div className="upt-navigation-controls">
//                 <button
//                   className="upt-nav-button upt-prev"
//                   onClick={prevSlide}
//                   aria-label="Previous step"
//                 >
//                   <ChevronLeft className="upt-nav-icon" />
//                 </button>
//                 <button
//                   className="upt-nav-button upt-next"
//                   onClick={nextSlide}
//                   aria-label="Next step"
//                 >
//                   <ChevronRight className="upt-nav-icon" />
//                 </button>
//               </div>
//             </div>

//             <div className="upt-display-content">
//               {timelineSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`upt-step-content ${
//                     index === currentSlide ? "upt-active" : ""
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentSlide) * 100}%)`,
//                     opacity: index === currentSlide ? 1 : 0,
//                   }}
//                 >
//                   <div className="upt-step-content-inner">
//                     <div className="upt-step-header">
//                       <div className="upt-step-icon-container">{step.icon}</div>

//                       <div className="upt-step-title-container">
//                         <div className="upt-step-number-badge">
//                           0{index + 1}
//                         </div>
//                         <h3 className="upt-step-heading">{step.title}</h3>
//                       </div>
//                     </div>

//                     <div className="upt-step-tabs">
//                       <button
//                         className={`upt-step-tab ${
//                           activeTab === 0 ? "upt-active" : ""
//                         }`}
//                         onClick={() => setActiveTab(0)}
//                       >
//                         Overview
//                       </button>
//                       <button
//                         className={`upt-step-tab ${
//                           activeTab === 1 ? "upt-active" : ""
//                         }`}
//                         onClick={() => setActiveTab(1)}
//                       >
//                         Benefits
//                       </button>
//                       <button
//                         className={`upt-step-tab ${
//                           activeTab === 2 ? "upt-active" : ""
//                         }`}
//                         onClick={() => setActiveTab(2)}
//                       >
//                         Statistics
//                       </button>
//                     </div>

//                     <div className="upt-step-tab-content">
//                       {/* Overview Tab */}
//                       <div
//                         className={`upt-tab-pane ${
//                           activeTab === 0 ? "upt-active" : ""
//                         }`}
//                       >
//                         <p className="upt-step-description">{step.caption}</p>
//                       </div>

//                       {/* Benefits Tab */}
//                       <div
//                         className={`upt-tab-pane ${
//                           activeTab === 1 ? "upt-active" : ""
//                         }`}
//                       >
//                         <div className="upt-benefits-grid">
//                           {step.benefits.map((benefit, i) => (
//                             <div key={i} className="upt-benefit-card">
//                               <CheckCircle className="upt-benefit-icon" />
//                               <div className="upt-benefit-text">{benefit}</div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Statistics Tab */}
//                       <div
//                         className={`upt-tab-pane ${
//                           activeTab === 2 ? "upt-active" : ""
//                         }`}
//                       >
//                         <div className="upt-stats-grid">
//                           <div className="upt-stat-card">
//                             <div className="upt-stat-icon">
//                               <Clock className="upt-stat-icon-svg" />
//                             </div>
//                             <div className="upt-stat-info">
//                               <div className="upt-stat-label">Timeline</div>
//                               <div className="upt-stat-value">
//                                 {step.stats.time}
//                               </div>
//                             </div>
//                           </div>

//                           <div className="upt-stat-card">
//                             <div className="upt-stat-icon">
//                               <CheckCircle className="upt-stat-icon-svg" />
//                             </div>
//                             <div className="upt-stat-info">
//                               <div className="upt-stat-label">
//                                 Completion Rate
//                               </div>
//                               <div className="upt-stat-value">
//                                 {step.stats.completion}
//                               </div>
//                             </div>
//                           </div>

//                           <div className="upt-stat-card">
//                             <div className="upt-stat-icon">
//                               <Star className="upt-stat-icon-svg" />
//                             </div>
//                             <div className="upt-stat-info">
//                               <div className="upt-stat-label">
//                                 Client Satisfaction
//                               </div>
//                               <div className="upt-stat-value">
//                                 {step.stats.satisfaction}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="upt-step-action">
//                       <button className="upt-action-button">
//                         <span>Learn More</span>
//                         <ArrowRight className="upt-action-icon" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Mobile indicators */}
//             {isMobile && (
//               <div className="upt-mobile-indicators">
//                 {timelineSteps.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`upt-mobile-indicator ${
//                       index === currentSlide ? "upt-active" : ""
//                     }`}
//                     onClick={() => {
//                       if (!isAnimating) {
//                         setIsAnimating(true);
//                         setCurrentSlide(index);
//                         setTimeout(() => setIsAnimating(false), 700);
//                       }
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Timeline Component Specific Variables */
//         .upt-timeline-section {
//           --upt-primary-color: #ed854f;
//           --upt-primary-light: rgba(237, 133, 79, 0.1);
//           --upt-primary-dark: #d97745;
//           --upt-secondary-color: #182d50;
//           --upt-secondary-light: #2a4270;
//           --upt-text-light: #ffffff;
//           --upt-text-dark: #333333;
//           --upt-text-muted: rgba(255, 255, 255, 0.7);
//           --upt-background-dark: #0a0e17;
//           --upt-background-light: #f8f9fa;
//           --upt-border-radius-sm: 4px;
//           --upt-border-radius-md: 8px;
//           --upt-border-radius-lg: 16px;
//           --upt-border-radius-xl: 24px;
//           --upt-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
//           --upt-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
//           --upt-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
//           --upt-shadow-accent: 0 8px 16px rgba(237, 133, 79, 0.25);
//           --upt-transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//           --upt-transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           --upt-transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           --upt-glass-background: rgba(26, 32, 48, 0.7);
//           --upt-glass-border: rgba(255, 255, 255, 0.05);
//           --upt-glass-highlight: rgba(255, 255, 255, 0.1);
//         }

//         /* Base Styles */
//         .upt-timeline-section {
//           padding: 6rem 0;
//           background: linear-gradient(
//             135deg,
//             var(--upt-background-dark) 0%,
//             #121a2a 100%
//           );
//           color: var(--upt-text-light);
//           font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
//             Roboto, sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         .upt-particles-canvas {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 1;
//           opacity: 0.7;
//         }

//         .upt-timeline-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         /* Timeline Header */
//         .upt-timeline-header {
//           text-align: center;
//           margin-bottom: 4rem;
//           max-width: 800px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .upt-timeline-badge {
//           display: inline-flex;
//           align-items: center;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.15) 0%,
//             rgba(237, 133, 79, 0.05) 100%
//           );
//           color: var(--upt-primary-color);
//           font-size: 0.75rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 50px;
//           margin-bottom: 1rem;
//           box-shadow: 0 4px 12px rgba(237, 133, 79, 0.1);
//           border: 1px solid rgba(237, 133, 79, 0.2);
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--upt-transition-medium);
//         }

//         .upt-timeline-badge.upt-animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .upt-badge-dot {
//           width: 8px;
//           height: 8px;
//           background-color: var(--upt-primary-color);
//           border-radius: 50%;
//           margin-right: 8px;
//         }

//         .upt-timeline-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.3;
//           margin: 0 0 1.5rem;
//           background: linear-gradient(
//             135deg,
//             var(--upt-text-light) 0%,
//             rgba(255, 255, 255, 0.8) 100%
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--upt-transition-medium);
//           transition-delay: 0.1s;
//         }

//         .upt-timeline-title.upt-animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .upt-highlight {
//           color: var(--upt-primary-color);
//           -webkit-text-fill-color: var(--upt-primary-color);
//           position: relative;
//         }

//         .upt-highlight::after {
//           content: "";
//           position: absolute;
//           bottom: -3px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--upt-primary-color),
//             transparent
//           );
//           opacity: 0.7;
//         }

//         .upt-timeline-description {
//           font-size: 1.125rem;
//           line-height: 1.7;
//           color: var(--upt-text-muted);
//           margin: 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all var(--upt-transition-medium);
//           transition-delay: 0.2s;
//         }

//         .upt-timeline-description.upt-animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Timeline Content */
//         .upt-timeline-content {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 3rem;
//         }

//         @media (min-width: 992px) {
//           .upt-timeline-content {
//             grid-template-columns: 280px 1fr;
//             gap: 4rem;
//           }
//         }

//         /* Timeline Navigation */
//         .upt-timeline-navigation {
//           opacity: 0;
//           transform: translateX(-20px);
//           transition: all var(--upt-transition-medium);
//           transition-delay: 0.3s;
//         }

//         .upt-timeline-navigation.upt-animate-in {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .upt-timeline-progress {
//           margin-bottom: 2rem;
//         }

//         .upt-timeline-progress-bar {
//           height: 4px;
//           background-color: rgba(255, 255, 255, 0.1);
//           border-radius: 2px;
//           overflow: hidden;
//         }

//         .upt-timeline-progress-fill {
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             var(--upt-primary-color),
//             var(--upt-primary-light)
//           );
//           border-radius: 2px;
//           transition: width var(--upt-transition-medium);
//           position: relative;
//         }

//         .upt-timeline-progress-fill::after {
//           content: "";
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 20px;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.5)
//           );
//           animation: upt-shimmer 2s infinite;
//         }

//         @keyframes upt-shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .upt-timeline-steps {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }

//         .upt-timeline-step {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           position: relative;
//           cursor: pointer;
//           transition: all var(--upt-transition-fast);
//         }

//         .upt-timeline-step:hover .upt-step-circle {
//           transform: scale(1.1);
//           box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
//         }

//         .upt-step-connector {
//           position: absolute;
//           top: 30px;
//           left: 15px;
//           width: 2px;
//           height: calc(100% + 1.5rem);
//           background-color: rgba(255, 255, 255, 0.1);
//           z-index: 1;
//         }

//         .upt-timeline-step:last-child .upt-step-connector {
//           display: none;
//         }

//         .upt-timeline-step.upt-completed .upt-step-connector {
//           background: linear-gradient(
//             to bottom,
//             var(--upt-primary-color),
//             rgba(237, 133, 79, 0.3)
//           );
//         }

//         .upt-step-circle {
//           width: 32px;
//           height: 32px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(255, 255, 255, 0.1);
//           color: var(--upt-text-muted);
//           border-radius: 50%;
//           font-weight: 600;
//           transition: all var(--upt-transition-fast);
//           position: relative;
//           z-index: 2;
//         }

//         .upt-timeline-step.upt-active .upt-step-circle {
//           background-color: var(--upt-primary-color);
//           color: var(--upt-text-dark);
//           box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
//         }

//         .upt-timeline-step.upt-completed .upt-step-circle {
//           background-color: var(--upt-primary-color);
//           color: var(--upt-text-dark);
//         }

//         .upt-step-check {
//           width: 18px;
//           height: 18px;
//           color: var(--upt-text-dark);
//         }

//         .upt-step-label {
//           display: flex;
//           flex-direction: column;
//           gap: 0.25rem;
//         }

//         .upt-step-title {
//           font-size: 0.75rem;
//           color: var(--upt-text-muted);
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .upt-step-name {
//           font-size: 1rem;
//           font-weight: 600;
//           color: var(--upt-text-muted);
//           transition: color var(--upt-transition-fast);
//         }

//         .upt-timeline-step.upt-active .upt-step-name {
//           color: var(--upt-primary-color);
//         }

//         .upt-timeline-step.upt-completed .upt-step-name {
//           color: var(--upt-text-light);
//         }

//         /* Timeline Display */
//         .upt-timeline-display {
//           background: var(--upt-glass-background);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           border-radius: var(--upt-border-radius-lg);
//           overflow: hidden;
//           box-shadow: var(--upt-shadow-lg), 0 0 30px rgba(237, 133, 79, 0.1);
//           border: 1px solid var(--upt-glass-border);
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all var(--upt-transition-medium);
//           transition-delay: 0.4s;
//           transform-style: preserve-3d;
//         }

//         .upt-timeline-display.upt-animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .upt-timeline-display::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.05) 0%,
//             transparent 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }

//         .upt-display-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 1.25rem 1.5rem;
//           border-bottom: 1px solid var(--upt-glass-border);
//           position: relative;
//           z-index: 2;
//         }

//         .upt-step-indicator {
//           display: flex;
//           align-items: center;
//           gap: 0.25rem;
//           font-size: 0.875rem;
//           font-weight: 500;
//         }

//         .upt-current-step {
//           color: var(--upt-primary-color);
//           font-size: 1.25rem;
//           font-weight: 700;
//         }

//         .upt-step-divider,
//         .upt-total-steps {
//           color: var(--upt-text-muted);
//         }

//         .upt-navigation-controls {
//           display: flex;
//           gap: 0.75rem;
//         }

//         .upt-nav-button {
//           width: 36px;
//           height: 36px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 50%;
//           color: var(--upt-text-light);
//           cursor: pointer;
//           transition: all var(--upt-transition-fast);
//         }

//         .upt-nav-button:hover {
//           background-color: var(--upt-primary-color);
//           border-color: var(--upt-primary-color);
//           color: var(--upt-text-dark);
//           transform: translateY(-2px);
//           box-shadow: var(--upt-shadow-accent);
//         }

//         .upt-nav-icon {
//           width: 18px;
//           height: 18px;
//         }

//         .upt-display-content {
//           position: relative;
//           overflow: hidden;
//           min-height: 450px;
//         }

//         .upt-step-content {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           transition: transform var(--upt-transition-medium),
//             opacity var(--upt-transition-medium);
//         }

//         .upt-step-content-inner {
//           padding: 2rem;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//         }

//         .upt-step-header {
//           display: flex;
//           align-items: center;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//         }

//         .upt-step-icon-container {
//           flex-shrink: 0;
//           width: 64px;
//           height: 64px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 133, 79, 0.2) 0%,
//             rgba(237, 133, 79, 0.1) 100%
//           );
//           border-radius: var(--upt-border-radius-lg);
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .upt-step-icon-container::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(255, 255, 255, 0.1) 0%,
//             transparent 100%
//           );
//         }

//         .upt-step-icon-svg {
//           width: 32px;
//           height: 32px;
//           color: var(--upt-primary-color);
//         }

//         .upt-step-title-container {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }

//         .upt-step-number-badge {
//           font-size: 0.875rem;
//           font-weight: 700;
//           color: var(--upt-primary-color);
//           background: rgba(237, 133, 79, 0.1);
//           padding: 0.25rem 0.75rem;
//           border-radius: 50px;
//           align-self: flex-start;
//         }

//         .upt-step-heading {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: var(--upt-text-light);
//           margin: 0;
//         }

//         .upt-step-tabs {
//           display: flex;
//           gap: 0.5rem;
//           margin-bottom: 1.5rem;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .upt-step-tab {
//           padding: 0.75rem 1.25rem;
//           background: transparent;
//           border: none;
//           color: var(--upt-text-muted);
//           font-size: 0.9375rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all var(--upt-transition-fast);
//           position: relative;
//         }

//         .upt-step-tab:hover {
//           color: var(--upt-text-light);
//         }

//         .upt-step-tab.upt-active {
//           color: var(--upt-primary-color);
//         }

//         .upt-step-tab.upt-active::after {
//           content: "";
//           position: absolute;
//           bottom: -1px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: var(--upt-primary-color);
//           border-radius: 2px 2px 0 0;
//         }

//         .upt-step-tab-content {
//           flex: 1;
//           overflow: hidden;
//           position: relative;
//         }

//         .upt-tab-pane {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           opacity: 0;
//           transform: translateX(20px);
//           transition: all var(--upt-transition-medium);
//           pointer-events: none;
//           overflow-y: auto;
//         }

//         .upt-tab-pane.upt-active {
//           opacity: 1;
//           transform: translateX(0);
//           pointer-events: auto;
//         }

//         .upt-step-description {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: var(--upt-text-muted);
//           margin: 0;
//         }

//         .upt-benefits-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1rem;
//         }

//         .upt-benefit-card {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//           padding: 1rem;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: var(--upt-border-radius-md);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           transition: all var(--upt-transition-fast);
//         }

//         .upt-benefit-card:hover {
//           background: rgba(255, 255, 255, 0.08);
//           transform: translateY(-3px);
//           box-shadow: var(--upt-shadow-sm);
//         }

//         .upt-benefit-icon {
//           width: 20px;
//           height: 20px;
//           color: var(--upt-primary-color);
//           flex-shrink: 0;
//         }

//         .upt-benefit-text {
//           font-size: 0.9375rem;
//           color: var(--upt-text-light);
//         }

//         .upt-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 1rem;
//         }

//         .upt-stat-card {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.25rem;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: var(--upt-border-radius-md);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           transition: all var(--upt-transition-fast);
//         }

//         .upt-stat-card:hover {
//           background: rgba(255, 255, 255, 0.08);
//           transform: translateY(-3px);
//           box-shadow: var(--upt-shadow-sm);
//         }

//         .upt-stat-icon {
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: rgba(237, 133, 79, 0.1);
//           border-radius: var(--upt-border-radius-md);
//           flex-shrink: 0;
//         }

//         .upt-stat-icon-svg {
//           width: 20px;
//           height: 20px;
//           color: var(--upt-primary-color);
//         }

//         .upt-stat-info {
//           display: flex;
//           flex-direction: column;
//           gap: 0.25rem;
//         }

//         .upt-stat-label {
//           font-size: 0.75rem;
//           color: var(--upt-text-muted);
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .upt-stat-value {
//           font-size: 1.125rem;
//           font-weight: 700;
//           color: var(--upt-text-light);
//         }

//         .upt-step-action {
//           margin-top: 2rem;
//         }

//         .upt-action-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 0.75rem 1.5rem;
//           background: linear-gradient(
//             135deg,
//             var(--upt-primary-color) 0%,
//             var(--upt-primary-dark) 100%
//           );
//           color: var(--upt-text-dark);
//           font-size: 0.9375rem;
//           font-weight: 600;
//           border-radius: 50px;
//           border: none;
//           cursor: pointer;
//           transition: all var(--upt-transition-medium);
//           box-shadow: var(--upt-shadow-accent);
//           position: relative;
//           overflow: hidden;
//         }

//         .upt-action-button::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.2),
//             transparent
//           );
//           transition: left 0.7s ease;
//         }

//         .upt-action-button:hover::before {
//           left: 100%;
//         }

//         .upt-action-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(237, 133, 79, 0.4);
//         }

//         .upt-action-icon {
//           width: 16px;
//           height: 16px;
//         }

//         /* Mobile indicators */
//         .upt-mobile-indicators {
//           display: none;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 1.5rem 0;
//         }

//         @media (max-width: 767px) {
//           .upt-mobile-indicators {
//             display: flex;
//           }
//         }

//         .upt-mobile-indicator {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background-color: rgba(255, 255, 255, 0.2);
//           cursor: pointer;
//           transition: all var(--upt-transition-fast);
//         }

//         .upt-mobile-indicator.upt-active {
//           background-color: var(--upt-primary-color);
//           transform: scale(1.2);
//           box-shadow: 0 0 10px rgba(237, 133, 79, 0.4);
//         }

//         /* Animations */
//         @keyframes upt-fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes upt-slideUp {
//           from {
//             transform: translateY(20px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes upt-pulse {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }

//         .upt-timeline-section.visible .upt-timeline-badge,
//         .upt-timeline-section.visible .upt-timeline-title,
//         .upt-timeline-section.visible .upt-timeline-description,
//         .upt-timeline-section.visible .upt-timeline-navigation,
//         .upt-timeline-section.visible .upt-timeline-display {
//           animation: upt-slideUp 0.8s forwards;
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 991px) {
//           .upt-timeline-section {
//             padding: 5rem 0;
//           }

//           .upt-timeline-title {
//             font-size: 2rem;
//           }

//           .upt-timeline-description {
//             font-size: 1rem;
//           }

//           .upt-timeline-steps {
//             display: none;
//           }

//           .upt-timeline-progress {
//             margin-bottom: 1rem;
//           }

//           .upt-timeline-navigation {
//             margin-bottom: -2rem;
//           }
//         }

//         @media (max-width: 767px) {
//           .upt-timeline-section {
//             padding: 4rem 0;
//           }

//           .upt-timeline-header {
//             margin-bottom: 3rem;
//           }

//           .upt-timeline-title {
//             font-size: 1.75rem;
//           }

//           .upt-timeline-description {
//             font-size: 0.9375rem;
//           }

//           .upt-step-content-inner {
//             padding: 1.5rem;
//           }

//           .upt-step-header {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 1rem;
//           }

//           .upt-step-heading {
//             font-size: 1.25rem;
//           }

//           .upt-display-content {
//             min-height: 550px;
//           }

//           .upt-benefits-grid,
//           .upt-stats-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 575px) {
//           .upt-timeline-section {
//             padding: 3rem 0;
//           }

//           .upt-timeline-container {
//             padding: 0 1rem;
//           }

//           .upt-timeline-header {
//             margin-bottom: 2.5rem;
//           }

//           .upt-timeline-title {
//             font-size: 1.5rem;
//           }

//           .upt-timeline-badge {
//             font-size: 0.6875rem;
//             padding: 0.375rem 0.75rem;
//           }

//           .upt-display-header {
//             padding: 1rem;
//           }

//           .upt-step-content-inner {
//             padding: 1.25rem;
//           }

//           .upt-step-icon-container {
//             width: 50px;
//             height: 50px;
//           }

//           .upt-step-icon-svg {
//             width: 24px;
//             height: 24px;
//           }

//           .upt-step-heading {
//             font-size: 1.125rem;
//           }

//           .upt-step-description {
//             font-size: 0.875rem;
//           }

//           .upt-step-tabs {
//             overflow-x: auto;
//             padding-bottom: 0.5rem;
//           }

//           .upt-step-tab {
//             padding: 0.625rem 1rem;
//             font-size: 0.875rem;
//             white-space: nowrap;
//           }

//           .upt-display-content {
//             min-height: 600px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default UltraPremiumTimeline;

"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Award,
  Star,
  Menu,
  X,
} from "lucide-react";

const UltraPremiumTimeline = () => {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showMobileSteps, setShowMobileSteps] = useState(false);

  // Refs
  const timelineSectionRef = useRef(null);
  const slideContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentWrapperRef = useRef(null);

  // Timeline data
  const timelineSteps = [
    {
      title: "Discovery and Requirement Gathering",
      caption: `We begin by thoroughly understanding your business goals, target audience, and specific requirements. Through detailed discussions and research, we gather valuable insights that lay the foundation for our work.`,
      icon: <Clock className="upt-step-icon-svg" />,
      benefits: [
        "Comprehensive business analysis",
        "Target audience profiling",
        "Detailed requirement documentation",
        "Strategic planning",
      ],
      stats: {
        time: "1-2 weeks",
        completion: "100%",
        satisfaction: "98%",
      },
    },
    {
      title: "Design and Prototyping",
      caption: `Our talented design team creates visually stunning and user-friendly mockups and prototypes based on the gathered requirements. We focus on creating a captivating visual experience while ensuring seamless navigation and functionality.`,
      icon: <Zap className="upt-step-icon-svg" />,
      benefits: [
        "Intuitive user interface design",
        "Interactive prototyping",
        "Visual identity development",
        "User experience optimization",
      ],
      stats: {
        time: "2-3 weeks",
        completion: "100%",
        satisfaction: "97%",
      },
    },
    {
      title: "Development and Testing",
      caption: `Once the designs are approved, our expert developers bring them to life using the latest technologies and coding standards. We follow an agile development approach, allowing for regular client feedback and incorporating necessary adjustments. Rigorous testing ensures that the final product meets the highest quality standards.`,
      icon: <Shield className="upt-step-icon-svg" />,
      benefits: [
        "Cutting-edge technology implementation",
        "Agile development methodology",
        "Comprehensive quality assurance",
        "Performance optimization",
      ],
      stats: {
        time: "4-8 weeks",
        completion: "100%",
        satisfaction: "99%",
      },
    },
    {
      title: "Deployment and Launch",
      caption: `After thorough testing and client approval, we deploy the developed solution to the desired platforms, ensuring a smooth and error-free transition. We take care of all technical aspects to ensure a seamless launch, be it a website, mobile app, or desktop application.`,
      icon: <Award className="upt-step-icon-svg" />,
      benefits: [
        "Seamless deployment process",
        "Cross-platform compatibility",
        "Performance monitoring setup",
        "Launch strategy execution",
      ],
      stats: {
        time: "1-2 weeks",
        completion: "100%",
        satisfaction: "98%",
      },
    },
    {
      title: "Ongoing Support and Maintenance",
      caption: `Our commitment doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital solution remains up-to-date, secure, and optimized for performance. Our team is always available to address any concerns and make necessary updates as your business evolves.`,
      icon: <Star className="upt-step-icon-svg" />,
      benefits: [
        "24/7 technical support",
        "Regular security updates",
        "Performance monitoring",
        "Continuous improvement",
      ],
      stats: {
        time: "Ongoing",
        completion: "100%",
        satisfaction: "99%",
      },
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (timelineSectionRef.current) {
      observer.observe(timelineSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovering && !showMobileSteps) {
      const interval = setInterval(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, isAnimating, isHovering, showMobileSteps]);

  // Particle animation for background
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Extended canvas height for mobile
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles with mobile-optimized count
    const getParticleCount = () => {
      const baseCount = Math.min(30, Math.floor(window.innerWidth / 50));
      return isMobile ? Math.max(15, baseCount) : baseCount;
    };

    const particleCount = getParticleCount();
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + (isMobile ? 1.5 : 1), // Slightly larger particles on mobile
        color: `rgba(237, 134, 82, ${
          Math.random() * 0.5 + (isMobile ? 0.2 : 0.1)
        })`, // More visible on mobile
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        amplitude: Math.random() * 2 + 1,
        frequency: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrameId;
    let lastTime = 0;

    const animate = (time) => {
      const deltaTime = time - lastTime || 0;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Add wave motion
        particle.phase += particle.frequency * deltaTime;
        const waveY = Math.sin(particle.phase) * particle.amplitude;

        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY + waveY * 0.01;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3
        );
        gradient.addColorStop(0, particle.color.replace(")", ", 0.8)"));
        gradient.addColorStop(1, particle.color.replace(")", ", 0)"));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(")", ", 1)");
        ctx.fill();
      });

      // Draw connections between particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < (isMobile ? 120 : 100)) {
            // Extended connection range on mobile
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Gradient line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(
              0,
              p1.color.replace(
                ")",
                ", " +
                  (isMobile ? 0.3 : 0.2) *
                    (1 - distance / (isMobile ? 120 : 100)) +
                  ")"
              )
            );
            gradient.addColorStop(
              1,
              p2.color.replace(
                ")",
                ", " +
                  (isMobile ? 0.3 : 0.2) *
                    (1 - distance / (isMobile ? 120 : 100)) +
                  ")"
              )
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth =
              (isMobile ? 1.2 : 1) * (1 - distance / (isMobile ? 120 : 100));
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isMobile]);

  // Mouse move effect for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (slideContainerRef.current) {
        const { left, top, width, height } =
          slideContainerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Scroll lock when mobile steps overlay is shown
  useEffect(() => {
    if (showMobileSteps) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileSteps]);

  // Handle slide navigation
  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === timelineSteps.length - 1 ? 0 : prev + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? timelineSteps.length - 1 : prev - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }

    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Calculate 3D transform values based on mouse position
  const calculateTransform = () => {
    if (isMobile) return {};

    const tiltX = (mousePosition.y - 0.5) * 8; // -4 to 4 degrees
    const tiltY = (mousePosition.x - 0.5) * -8; // -4 to 4 degrees

    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: isHovering ? "transform 0.1s ease" : "transform 0.6s ease",
    };
  };

  // Progress calculation
  const progressPercentage = ((currentSlide + 1) / timelineSteps.length) * 100;

  // Toggle mobile steps overlay
  const toggleMobileSteps = () => {
    setShowMobileSteps((prev) => !prev);
  };

  return (
    <section ref={timelineSectionRef} className="upt-timeline-section">
      {/* Background particles */}
      <canvas ref={canvasRef} className="upt-particles-canvas"></canvas>

      <div className="upt-timeline-container">
        <div className="upt-timeline-header">
          <div
            className={`upt-timeline-badge ${
              isVisible ? "upt-animate-in" : ""
            }`}
          >
            <span className="upt-badge-dot"></span>5 Steps To Success
          </div>

          <h2
            className={`upt-timeline-title ${
              isVisible ? "upt-animate-in" : ""
            }`}
          >
            <span className="upt-highlight">Efficient Workflow: </span>5 Steps
            to Success with Comprehensive Development Process
          </h2>

          <p
            className={`upt-timeline-description ${
              isVisible ? "upt-animate-in" : ""
            }`}
          >
            Seamless Journey: Revenue Rocket 5-Step Workflow Delivers a Smooth
            and Efficient Development Process. From in-depth discovery and
            requirement gathering to captivating design and rigorous testing,
            our expert team ensures every aspect is meticulously executed. With
            deployment and launch handled seamlessly, we provide ongoing support
            and maintenance to keep your digital solution optimized.
          </p>
        </div>

        <div className="upt-timeline-content">
          {/* Timeline Navigation */}
          <div
            className={`upt-timeline-navigation ${
              isVisible ? "upt-animate-in" : ""
            } ${showMobileSteps ? "upt-hidden" : ""}`}
          >
            <div className="upt-timeline-progress">
              <div className="upt-timeline-progress-bar">
                <div
                  className="upt-timeline-progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="upt-timeline-steps">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className={`upt-timeline-step ${
                    index === currentSlide ? "upt-active" : ""
                  } ${index < currentSlide ? "upt-completed" : ""}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsAnimating(false), 700);
                    }
                  }}
                >
                  <div className="upt-step-connector"></div>
                  <div className="upt-step-circle">
                    {index < currentSlide ? (
                      <CheckCircle className="upt-step-check" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="upt-step-label">
                    <span className="upt-step-title">Step {index + 1}</span>
                    <span className="upt-step-name">
                      {step.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Step Menu Button */}
          {isMobile && (
            <button
              className={`upt-mobile-menu-button ${
                isVisible ? "upt-animate-in" : ""
              } ${showMobileSteps ? "upt-hidden" : ""}`}
              onClick={toggleMobileSteps}
              aria-label="Show steps menu"
            >
              <Menu className="upt-mobile-menu-icon" />
              <span>View All Steps</span>
            </button>
          )}

          {/* Mobile Steps Overlay */}
          {isMobile && (
            <div
              className={`upt-mobile-steps-overlay ${
                showMobileSteps ? "upt-show" : ""
              }`}
            >
              <div className="upt-mobile-steps-header">
                <h3>Development Workflow</h3>
                <button
                  className="upt-close-overlay"
                  onClick={toggleMobileSteps}
                >
                  <X className="upt-close-icon" />
                </button>
              </div>
              <div className="upt-mobile-steps-content">
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`upt-mobile-step-item ${
                      index === currentSlide ? "upt-active" : ""
                    }`}
                    onClick={() => {
                      setCurrentSlide(index);
                      toggleMobileSteps();
                    }}
                  >
                    <div className="upt-mobile-step-number">
                      <span>{index + 1}</span>
                    </div>
                    <div className="upt-mobile-step-info">
                      <h4>{step.title}</h4>
                      <p>{step.caption.substring(0, 80)}...</p>
                    </div>
                    <div className="upt-mobile-step-icon">{step.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide Display */}
          <div
            className={`upt-timeline-display ${
              isVisible ? "upt-animate-in" : ""
            } ${showMobileSteps ? "upt-blur" : ""}`}
            ref={slideContainerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={calculateTransform()}
          >
            <div className="upt-display-header">
              <div className="upt-step-indicator">
                <span className="upt-current-step">
                  Step {currentSlide + 1}
                </span>
                <span className="upt-step-divider">/</span>
                <span className="upt-total-steps">{timelineSteps.length}</span>
              </div>

              <div className="upt-navigation-controls">
                <button
                  className="upt-nav-button upt-prev"
                  onClick={prevSlide}
                  aria-label="Previous step"
                >
                  <ChevronLeft className="upt-nav-icon" />
                </button>
                <button
                  className="upt-nav-button upt-next"
                  onClick={nextSlide}
                  aria-label="Next step"
                >
                  <ChevronRight className="upt-nav-icon" />
                </button>
              </div>
            </div>

            <div className="upt-display-content" ref={contentWrapperRef}>
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className={`upt-step-content ${
                    index === currentSlide ? "upt-active" : ""
                  }`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  <div className="upt-step-content-inner">
                    <div className="upt-step-header">
                      <div className="upt-step-icon-container">{step.icon}</div>

                      <div className="upt-step-title-container">
                        <div className="upt-step-number-badge">
                          0{index + 1}
                        </div>
                        <h3 className="upt-step-heading">{step.title}</h3>
                      </div>
                    </div>

                    <div className="upt-step-tabs">
                      <button
                        className={`upt-step-tab ${
                          activeTab === 0 ? "upt-active" : ""
                        }`}
                        onClick={() => setActiveTab(0)}
                      >
                        Overview
                      </button>
                      <button
                        className={`upt-step-tab ${
                          activeTab === 1 ? "upt-active" : ""
                        }`}
                        onClick={() => setActiveTab(1)}
                      >
                        Benefits
                      </button>
                      <button
                        className={`upt-step-tab ${
                          activeTab === 2 ? "upt-active" : ""
                        }`}
                        onClick={() => setActiveTab(2)}
                      >
                        Statistics
                      </button>
                    </div>

                    <div className="upt-step-tab-content">
                      {/* Overview Tab */}
                      <div
                        className={`upt-tab-pane ${
                          activeTab === 0 ? "upt-active" : ""
                        }`}
                      >
                        <p className="upt-step-description">{step.caption}</p>
                      </div>

                      {/* Benefits Tab */}
                      <div
                        className={`upt-tab-pane ${
                          activeTab === 1 ? "upt-active" : ""
                        }`}
                      >
                        <div className="upt-benefits-grid">
                          {step.benefits.map((benefit, i) => (
                            <div key={i} className="upt-benefit-card">
                              <CheckCircle className="upt-benefit-icon" />
                              <div className="upt-benefit-text">{benefit}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Statistics Tab */}
                      <div
                        className={`upt-tab-pane ${
                          activeTab === 2 ? "upt-active" : ""
                        }`}
                      >
                        <div className="upt-stats-grid">
                          <div className="upt-stat-card">
                            <div className="upt-stat-icon">
                              <Clock className="upt-stat-icon-svg" />
                            </div>
                            <div className="upt-stat-info">
                              <div className="upt-stat-label">Timeline</div>
                              <div className="upt-stat-value">
                                {step.stats.time}
                              </div>
                            </div>
                          </div>

                          <div className="upt-stat-card">
                            <div className="upt-stat-icon">
                              <CheckCircle className="upt-stat-icon-svg" />
                            </div>
                            <div className="upt-stat-info">
                              <div className="upt-stat-label">
                                Completion Rate
                              </div>
                              <div className="upt-stat-value">
                                {step.stats.completion}
                              </div>
                            </div>
                          </div>

                          <div className="upt-stat-card">
                            <div className="upt-stat-icon">
                              <Star className="upt-stat-icon-svg" />
                            </div>
                            <div className="upt-stat-info">
                              <div className="upt-stat-label">
                                Client Satisfaction
                              </div>
                              <div className="upt-stat-value">
                                {step.stats.satisfaction}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="upt-step-action">
                      <button className="upt-action-button">
                        <span>Learn More</span>
                        <ArrowRight className="upt-action-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile indicators */}
            {isMobile && (
              <div className="upt-mobile-indicators">
                {timelineSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`upt-mobile-indicator ${
                      index === currentSlide ? "upt-active" : ""
                    }`}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsAnimating(false), 700);
                      }
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Timeline Component Specific Variables */
        .upt-timeline-section {
          --upt-primary-color: #ed854f;
          --upt-primary-light: rgba(237, 133, 79, 0.1);
          --upt-primary-dark: #d97745;
          --upt-secondary-color: #182d50;
          --upt-secondary-light: #2a4270;
          --upt-text-light: #ffffff;
          --upt-text-dark: #333333;
          --upt-text-muted: rgba(255, 255, 255, 0.7);
          --upt-background-dark: #0a0e17;
          --upt-background-light: #f8f9fa;
          --upt-border-radius-sm: 4px;
          --upt-border-radius-md: 8px;
          --upt-border-radius-lg: 16px;
          --upt-border-radius-xl: 24px;
          --upt-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
          --upt-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
          --upt-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
          --upt-shadow-accent: 0 8px 16px rgba(237, 133, 79, 0.25);
          --upt-transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --upt-transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --upt-transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --upt-glass-background: rgba(26, 32, 48, 0.7);
          --upt-glass-border: rgba(255, 255, 255, 0.05);
          --upt-glass-highlight: rgba(255, 255, 255, 0.1);
          --upt-overlay-background: rgba(10, 14, 23, 0.95);
        }

        /* Base Styles */
        .upt-timeline-section {
          padding: 6rem 0;
          background: linear-gradient(
            135deg,
            var(--upt-background-dark) 0%,
            #121a2a 100%
          );
          color: var(--upt-text-light);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .upt-particles-canvas {
          position: fixed; /* Fixed for smooth scrolling effect */
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        .upt-timeline-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Timeline Header */
        .upt-timeline-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .upt-timeline-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(
            135deg,
            rgba(237, 133, 79, 0.15) 0%,
            rgba(237, 133, 79, 0.05) 100%
          );
          color: var(--upt-primary-color);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 50px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(237, 133, 79, 0.1);
          border: 1px solid rgba(237, 133, 79, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--upt-transition-medium);
        }

        .upt-timeline-badge.upt-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .upt-badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--upt-primary-color);
          border-radius: 50%;
          margin-right: 8px;
        }

        .upt-timeline-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 1.5rem;
          background: linear-gradient(
            135deg,
            var(--upt-text-light) 0%,
            rgba(255, 255, 255, 0.8) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--upt-transition-medium);
          transition-delay: 0.1s;
        }

        .upt-timeline-title.upt-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .upt-highlight {
          color: var(--upt-primary-color);
          -webkit-text-fill-color: var(--upt-primary-color);
          position: relative;
        }

        .upt-highlight::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--upt-primary-color),
            transparent
          );
          opacity: 0.7;
        }

        .upt-timeline-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--upt-text-muted);
          margin: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--upt-transition-medium);
          transition-delay: 0.2s;
        }

        .upt-timeline-description.upt-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Timeline Content */
        .upt-timeline-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 992px) {
          .upt-timeline-content {
            grid-template-columns: 280px 1fr;
            gap: 4rem;
          }
        }

        /* Timeline Navigation */
        .upt-timeline-navigation {
          opacity: 0;
          transform: translateX(-20px);
          transition: all var(--upt-transition-medium);
          transition-delay: 0.3s;
        }

        .upt-timeline-navigation.upt-animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .upt-timeline-navigation.upt-hidden {
          display: none;
        }

        .upt-timeline-progress {
          margin-bottom: 2rem;
        }

        .upt-timeline-progress-bar {
          height: 4px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .upt-timeline-progress-fill {
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--upt-primary-color),
            var(--upt-primary-light)
          );
          border-radius: 2px;
          transition: width var(--upt-transition-medium);
          position: relative;
        }

        .upt-timeline-progress-fill::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5)
          );
          animation: upt-shimmer 2s infinite;
        }

        @keyframes upt-shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .upt-timeline-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .upt-timeline-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          cursor: pointer;
          transition: all var(--upt-transition-fast);
        }

        .upt-timeline-step:hover .upt-step-circle {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
        }

        .upt-step-connector {
          position: absolute;
          top: 30px;
          left: 15px;
          width: 2px;
          height: calc(100% + 1.5rem);
          background-color: rgba(255, 255, 255, 0.1);
          z-index: 1;
        }

        .upt-timeline-step:last-child .upt-step-connector {
          display: none;
        }

        .upt-timeline-step.upt-completed .upt-step-connector {
          background: linear-gradient(
            to bottom,
            var(--upt-primary-color),
            rgba(237, 133, 79, 0.3)
          );
        }

        .upt-step-circle {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--upt-text-muted);
          border-radius: 50%;
          font-weight: 600;
          transition: all var(--upt-transition-fast);
          position: relative;
          z-index: 2;
        }

        .upt-timeline-step.upt-active .upt-step-circle {
          background-color: var(--upt-primary-color);
          color: var(--upt-text-dark);
          box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
        }

        .upt-timeline-step.upt-completed .upt-step-circle {
          background-color: var(--upt-primary-color);
          color: var(--upt-text-dark);
        }

        .upt-step-check {
          width: 18px;
          height: 18px;
          color: var(--upt-text-dark);
        }

        .upt-step-label {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .upt-step-title {
          font-size: 0.75rem;
          color: var(--upt-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .upt-step-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--upt-text-muted);
          transition: color var(--upt-transition-fast);
        }

        .upt-timeline-step.upt-active .upt-step-name {
          color: var(--upt-primary-color);
        }

        .upt-timeline-step.upt-completed .upt-step-name {
          color: var(--upt-text-light);
        }

        /* Mobile Menu Button */
        .upt-mobile-menu-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin: 0 auto 1.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(237, 133, 79, 0.2) 0%,
            rgba(237, 133, 79, 0.1) 100%
          );
          border: 1px solid rgba(237, 133, 79, 0.2);
          border-radius: 50px;
          color: var(--upt-primary-color);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--upt-transition-fast);
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--upt-transition-medium);
          z-index: 10;
        }

        .upt-mobile-menu-button.upt-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .upt-mobile-menu-button.upt-hidden {
          display: none;
        }

        .upt-mobile-menu-button:hover {
          background: rgba(237, 133, 79, 0.2);
          transform: translateY(-2px);
          box-shadow: var(--upt-shadow-accent);
        }

        .upt-mobile-menu-icon {
          width: 18px;
          height: 18px;
        }

        /* Mobile Steps Overlay */
        .upt-mobile-steps-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--upt-overlay-background);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 100;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transition: opacity var(--upt-transition-medium),
            visibility var(--upt-transition-medium);
          overscroll-behavior: contain;
        }

        .upt-mobile-steps-overlay.upt-show {
          opacity: 1;
          visibility: visible;
        }

        .upt-mobile-steps-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem;
          border-bottom: 1px solid var(--upt-glass-border);
        }

        .upt-mobile-steps-header h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--upt-primary-color);
        }

        .upt-close-overlay {
          background: transparent;
          border: none;
          color: var(--upt-text-light);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .upt-close-icon {
          width: 24px;
          height: 24px;
        }

        .upt-mobile-steps-content {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .upt-mobile-step-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--upt-glass-border);
          border-radius: var(--upt-border-radius-md);
          cursor: pointer;
          transition: all var(--upt-transition-fast);
        }

        .upt-mobile-step-item:hover,
        .upt-mobile-step-item.upt-active {
          background: rgba(237, 133, 79, 0.1);
          transform: translateY(-2px);
          box-shadow: var(--upt-shadow-sm);
        }

        .upt-mobile-step-item.upt-active {
          border-color: rgba(237, 133, 79, 0.3);
        }

        .upt-mobile-step-number {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--upt-glass-highlight);
          border-radius: 50%;
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--upt-primary-color);
          flex-shrink: 0;
        }

        .upt-mobile-step-item.upt-active .upt-mobile-step-number {
          background-color: var(--upt-primary-color);
          color: var(--upt-text-dark);
          box-shadow: 0 0 15px rgba(237, 133, 79, 0.4);
        }

        .upt-mobile-step-info {
          flex: 1;
        }

        .upt-mobile-step-info h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--upt-text-light);
        }

        .upt-mobile-step-info p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--upt-text-muted);
          line-height: 1.5;
        }

        .upt-mobile-step-icon {
          color: var(--upt-primary-color);
          flex-shrink: 0;
        }

        .upt-mobile-step-item.upt-active .upt-mobile-step-icon {
          animation: upt-pulse 2s infinite;
        }

        /* Timeline Display */
        .upt-timeline-display {
          background: var(--upt-glass-background);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: var(--upt-border-radius-lg);
          overflow: hidden;
          box-shadow: var(--upt-shadow-lg), 0 0 30px rgba(237, 133, 79, 0.1);
          border: 1px solid var(--upt-glass-border);
          opacity: 0;
          transform: translateY(30px);
          transition: all var(--upt-transition-medium);
          transition-delay: 0.4s;
          transform-style: preserve-3d;
        }

        .upt-timeline-display.upt-blur {
          filter: blur(5px);
          pointer-events: none;
        }

        .upt-timeline-display.upt-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .upt-timeline-display::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(237, 133, 79, 0.05) 0%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .upt-display-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--upt-glass-border);
          position: relative;
          z-index: 2;
        }

        .upt-step-indicator {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .upt-current-step {
          color: var(--upt-primary-color);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .upt-step-divider,
        .upt-total-steps {
          color: var(--upt-text-muted);
        }

        .upt-navigation-controls {
          display: flex;
          gap: 0.75rem;
        }

        .upt-nav-button {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--upt-text-light);
          cursor: pointer;
          transition: all var(--upt-transition-fast);
        }

        .upt-nav-button:hover {
          background-color: var(--upt-primary-color);
          border-color: var(--upt-primary-color);
          color: var(--upt-text-dark);
          transform: translateY(-2px);
          box-shadow: var(--upt-shadow-accent);
        }

        .upt-nav-icon {
          width: 18px;
          height: 18px;
        }

        .upt-display-content {
          position: relative;
          overflow: hidden;
          min-height: 450px;
        }

        .upt-step-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: transform var(--upt-transition-medium),
            opacity var(--upt-transition-medium);
        }

        .upt-step-content-inner {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .upt-step-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .upt-step-icon-container {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(237, 133, 79, 0.2) 0%,
            rgba(237, 133, 79, 0.1) 100%
          );
          border-radius: var(--upt-border-radius-lg);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .upt-step-icon-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 100%
          );
        }

        .upt-step-icon-svg {
          width: 32px;
          height: 32px;
          color: var(--upt-primary-color);
        }

        .upt-step-title-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .upt-step-number-badge {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--upt-primary-color);
          background: rgba(237, 133, 79, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          align-self: flex-start;
        }

        .upt-step-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--upt-text-light);
          margin: 0;
        }

        .upt-step-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          overflow-x: auto; /* For mobile responsiveness */
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }

        .upt-step-tabs::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .upt-step-tab {
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: none;
          color: var(--upt-text-muted);
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--upt-transition-fast);
          position: relative;
          white-space: nowrap;
        }

        .upt-step-tab:hover {
          color: var(--upt-text-light);
        }

        .upt-step-tab.upt-active {
          color: var(--upt-primary-color);
        }

        .upt-step-tab.upt-active::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--upt-primary-color);
          border-radius: 2px 2px 0 0;
        }

        .upt-step-tab-content {
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        .upt-tab-pane {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(20px);
          transition: all var(--upt-transition-medium);
          pointer-events: none;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .upt-tab-pane.upt-active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .upt-step-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--upt-text-muted);
          margin: 0;
        }

        .upt-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .upt-benefit-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--upt-border-radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--upt-transition-fast);
        }

        .upt-benefit-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
          box-shadow: var(--upt-shadow-sm);
        }

        .upt-benefit-icon {
          width: 20px;
          height: 20px;
          color: var(--upt-primary-color);
          flex-shrink: 0;
        }

        .upt-benefit-text {
          font-size: 0.9375rem;
          color: var(--upt-text-light);
        }

        .upt-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .upt-stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--upt-border-radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all var(--upt-transition-fast);
        }

        .upt-stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
          box-shadow: var(--upt-shadow-sm);
        }

        .upt-stat-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(237, 133, 79, 0.1);
          border-radius: var(--upt-border-radius-md);
          flex-shrink: 0;
        }

        .upt-stat-icon-svg {
          width: 20px;
          height: 20px;
          color: var(--upt-primary-color);
        }

        .upt-stat-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .upt-stat-label {
          font-size: 0.75rem;
          color: var(--upt-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .upt-stat-value {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--upt-text-light);
        }

        .upt-step-action {
          margin-top: 2rem;
        }

        .upt-action-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            135deg,
            var(--upt-primary-color) 0%,
            var(--upt-primary-dark) 100%
          );
          color: var(--upt-text-dark);
          font-size: 0.9375rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all var(--upt-transition-medium);
          box-shadow: var(--upt-shadow-accent);
          position: relative;
          overflow: hidden;
        }

        .upt-action-button::before {
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
          transition: left 0.7s ease;
        }

        .upt-action-button:hover::before {
          left: 100%;
        }

        .upt-action-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(237, 133, 79, 0.4);
        }

        .upt-action-icon {
          width: 16px;
          height: 16px;
        }

        /* Mobile indicators */
        .upt-mobile-indicators {
          display: none;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.5rem 0;
        }

        @media (max-width: 767px) {
          .upt-mobile-indicators {
            display: flex;
          }
        }

        .upt-mobile-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all var(--upt-transition-fast);
        }

        .upt-mobile-indicator.upt-active {
          background-color: var(--upt-primary-color);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(237, 133, 79, 0.4);
        }

        /* Animations */
        @keyframes upt-fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes upt-slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes upt-pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .upt-timeline-section.visible .upt-timeline-badge,
        .upt-timeline-section.visible .upt-timeline-title,
        .upt-timeline-section.visible .upt-timeline-description,
        .upt-timeline-section.visible .upt-timeline-navigation,
        .upt-timeline-section.visible .upt-timeline-display {
          animation: upt-slideUp 0.8s forwards;
        }

        /* Responsive Adjustments */
        @media (max-width: 991px) {
          .upt-timeline-section {
            padding: 5rem 0;
          }

          .upt-timeline-title {
            font-size: 2rem;
          }

          .upt-timeline-description {
            font-size: 1rem;
          }

          .upt-timeline-steps {
            display: none;
          }

          .upt-timeline-progress {
            margin-bottom: 1rem;
          }

          .upt-timeline-navigation {
            margin-bottom: -2rem;
          }
        }

        @media (max-width: 767px) {
          .upt-timeline-section {
            padding: 4rem 0;
          }

          .upt-timeline-header {
            margin-bottom: 3rem;
          }

          .upt-timeline-title {
            font-size: 1.75rem;
          }

          .upt-timeline-description {
            font-size: 0.9375rem;
          }

          .upt-step-content-inner {
            padding: 1.5rem;
          }

          .upt-step-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .upt-step-heading {
            font-size: 1.25rem;
          }

          .upt-display-content {
            min-height: 550px;
          }

          .upt-benefits-grid,
          .upt-stats-grid {
            grid-template-columns: 1fr;
          }

          .upt-stat-card {
            padding: 1rem;
          }

          .upt-benefit-card {
            align-items: center;
          }
        }

        @media (max-width: 575px) {
          .upt-timeline-section {
            padding: 3rem 0;
          }

          .upt-timeline-container {
            padding: 0 1rem;
          }

          .upt-timeline-header {
            margin-bottom: 2.5rem;
          }

          .upt-timeline-title {
            font-size: 1.5rem;
          }

          .upt-timeline-badge {
            font-size: 0.6875rem;
            padding: 0.375rem 0.75rem;
          }

          .upt-display-header {
            padding: 1rem;
          }

          .upt-step-content-inner {
            padding: 1.25rem;
          }

          .upt-step-icon-container {
            width: 50px;
            height: 50px;
          }

          .upt-step-icon-svg {
            width: 24px;
            height: 24px;
          }

          .upt-step-heading {
            font-size: 1.125rem;
          }

          .upt-step-description {
            font-size: 0.875rem;
          }

          .upt-step-tabs {
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .upt-step-tab {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
            white-space: nowrap;
          }

          .upt-display-content {
            min-height: 600px;
          }

          .upt-mobile-step-item {
            padding: 1rem;
          }

          .upt-mobile-step-icon {
            display: none;
          }

          .upt-mobile-step-info h4 {
            font-size: 0.9375rem;
          }

          .upt-mobile-step-info p {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default UltraPremiumTimeline;
