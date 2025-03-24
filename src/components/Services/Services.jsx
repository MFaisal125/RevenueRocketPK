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
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize,
  Minimize,
  Plus,
  Zap,
} from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const [hoverCardIndex, setHoverCardIndex] = useState(null);

  // Refs
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  // Motion values for parallax effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Controls for animations
  const controls = useAnimation();

  // Service data
  const services = [
    {
      icon: codeIcon,
      title: "full-stack web development",
      description:
        "Revenue Rocket offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.",
      color: "#05d9e8",
      altText: "full-stack web development services",
      features: [
        "Responsive Design",
        "API Integration",
        "Database Management",
        "Performance Optimization",
      ],
    },
    {
      icon: monitorIcon,
      title: "Desktop application development",
      description:
        "Revenue Rocket specializes in desktop app development, delivering comprehensive solutions that encompass both front-end and back-end expertise for optimal user experiences.",
      color: "#ff2a6d",
      altText: "desktop app development",
      features: [
        "Cross-platform Support",
        "Native Integration",
        "Custom UI/UX",
        "Offline Functionality",
      ],
    },
    {
      icon: mobileappIcon,
      title: "android & ios mobile app development",
      description:
        "Revenue Rocket excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.",
      color: "#d100d1",
      altText: "Android and iOS mobile app development",
      features: [
        "Native Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
      ],
    },
    {
      icon: windowbugIcon,
      title: "website penetration testing",
      description:
        "Revenue Rocket offers professional penetration testing services to identify and address vulnerabilities, ensuring the security and resilience of your digital assets.",
      color: "#f9c80e",
      altText: "penetration testing services",
      features: [
        "Vulnerability Assessment",
        "Security Audits",
        "Compliance Testing",
        "Remediation Support",
      ],
    },
    {
      icon: designIcon,
      title: "graphics design",
      description:
        "Revenue Rocket provides captivating graphics design services that enhance brand identity and create visually appealing designs for a lasting impression.",
      color: "#7b00ff",
      altText: "graphics design services",
      features: [
        "Brand Identity",
        "Print Design",
        "Digital Assets",
        "Motion Graphics",
      ],
    },
    {
      icon: seoIcon,
      title: "search engine optimization (SEO)",
      description:
        "Revenue Rocket offers effective SEO services to boost online visibility, increase organic traffic, and improve search engine rankings for long-term success.",
      color: "#00ff9f",
      altText: "SEO services",
      features: [
        "Keyword Research",
        "On-page Optimization",
        "Link Building",
        "Analytics & Reporting",
      ],
    },
    {
      icon: pluginIcon,
      title: "Shopify development",
      description:
        "Revenue Rocket specializes in custom plugin development, creating tailored solutions that seamlessly integrate with your existing systems and enhance the functionality of your website or application.",
      color: "#ee834d",
      altText: "custom plugin development",
      features: [
        "Custom Themes",
        "App Development",
        "Store Optimization",
        "Payment Integration",
      ],
    },
    {
      icon: wordpressIcon,
      title: "custom theme development",
      description:
        "Revenue Rocket excels in custom WordPress theme development, crafting unique and visually captivating designs that align with your brand and provide a seamless user experience.",
      color: "#01c5c4",
      altText: "custom WordPress theme development",
      features: [
        "Responsive Themes",
        "Custom Plugins",
        "WooCommerce Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: cmsIcon,
      title: "ecommerce cms website development",
      description:
        "Revenue Rocket specializes in ecommerce website development, creating robust and user-friendly online stores that drive sales and provide a seamless shopping experience for customers.",
      color: "#b967ff",
      altText: "ecommerce website development",
      features: [
        "Product Management",
        "Payment Gateways",
        "Inventory Systems",
        "Customer Analytics",
      ],
    },
  ];

  // Duplicate services for infinite scrolling
  const extendedServices = [...services, ...services, ...services];

  // Determine if mobile based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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

    // Create particles with more variety
    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5;
      const type = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        type: type,
        color:
          i % 5 === 0
            ? `rgba(5, 217, 232, ${Math.random() * 0.5 + 0.1})`
            : i % 5 === 1
            ? `rgba(238, 131, 77, ${Math.random() * 0.5 + 0.1})`
            : i % 5 === 2
            ? `rgba(209, 0, 209, ${Math.random() * 0.5 + 0.1})`
            : i % 5 === 3
            ? `rgba(249, 200, 14, ${Math.random() * 0.5 + 0.1})`
            : `rgba(0, 255, 159, ${Math.random() * 0.5 + 0.1})`,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        pulse: Math.random() * 0.5 + 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const drawParticles = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check with wrap-around
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Update rotation
        particle.rotation += particle.rotationSpeed;

        // Pulse effect
        particle.pulse = 0.5 + Math.sin(time * particle.pulseSpeed) * 0.5;

        // Save context
        ctx.save();

        // Translate to particle position
        ctx.translate(particle.x, particle.y);

        // Rotate
        ctx.rotate((particle.rotation * Math.PI) / 180);

        // Set fill style with pulse effect
        ctx.fillStyle = particle.color.replace(
          ")",
          `, ${particle.opacity * particle.pulse})`
        );

        // Draw based on type
        if (particle.type === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 1) {
          // Square
          ctx.fillRect(
            -particle.size,
            -particle.size,
            particle.size * 2,
            particle.size * 2
          );
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
        }

        // Restore context
        ctx.restore();

        // Draw connections to nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);

            // Gradient line
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              p2.x,
              p2.y
            );
            gradient.addColorStop(
              0,
              particle.color.replace(
                ")",
                `, ${0.2 * (1 - distance / 100) * particle.pulse})`
              )
            );
            gradient.addColorStop(
              1,
              p2.color.replace(
                ")",
                `, ${0.2 * (1 - distance / 100) * p2.pulse})`
              )
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 * (1 - distance / 100);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    animationFrameId = requestAnimationFrame(drawParticles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Infinite smooth scrolling carousel
  useEffect(() => {
    if (!trackRef.current || !isVisible) return;

    const track = trackRef.current;
    const cards = track.querySelectorAll(".hyper-service-card");
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    const totalWidth = cardWidth * cards.length;

    // Set initial position
    let currentPosition = 0;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Only scroll if not hovering or dragging
      if (!isHovering && !isDragging) {
        // Update position based on direction and speed
        currentPosition += scrollDirection * scrollSpeed * (elapsed / 16);

        // Loop back when reaching the end
        if (currentPosition > totalWidth / 3) {
          currentPosition = 0;
        } else if (currentPosition < 0) {
          currentPosition = totalWidth / 3 - cardWidth;
        }

        // Apply the transform
        track.style.transform = `translateX(-${currentPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isHovering, isDragging, scrollDirection, scrollSpeed]);

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier

    // Update scroll position
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle card hover
  const handleCardHover = (index) => {
    setHoverCardIndex(index);
    setIsHovering(true);

    // Slow down scrolling when hovering
    setScrollSpeed(0.1);
  };

  // Handle card leave
  const handleCardLeave = () => {
    setHoverCardIndex(null);
    setIsHovering(false);

    // Reset scroll speed
    setScrollSpeed(0.5);
  };

  // Handle card expansion
  const handleCardExpand = (index, e) => {
    e.stopPropagation();
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const expandedCardVariants = {
    collapsed: {
      height: "350px",
      width: "100%",
      zIndex: 1,
    },
    expanded: {
      height: "450px",
      width: "110%",
      zIndex: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Update the useEffect for infinite smooth scrolling to make it truly infinite without resetting
  // Replace the existing infinite scrolling useEffect with this improved version:

  useEffect(() => {
    if (!trackRef.current || !isVisible) return;

    const track = trackRef.current;
    const cards = track.querySelectorAll(".hyper-service-card");
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    const totalWidth = cardWidth * services.length; // Width of one set of services

    // Set initial position
    let currentPosition = 0;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Only scroll if not hovering or dragging
      if (!isHovering && !isDragging) {
        // Update position based on direction and speed
        currentPosition += scrollDirection * scrollSpeed * (elapsed / 16);

        // Create infinite loop effect
        if (currentPosition >= totalWidth) {
          // If we've scrolled past the first set, jump back to start position
          currentPosition = 0;
        } else if (currentPosition < 0) {
          // If we've scrolled backwards past the start, jump to end of first set
          currentPosition = totalWidth - cardWidth;
        }

        // Apply the transform
        track.style.transform = `translateX(-${currentPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    isVisible,
    isHovering,
    isDragging,
    scrollDirection,
    scrollSpeed,
    services.length,
  ]);

  // Add touch event handlers for mobile
  // Add these new functions after the existing event handlers:

  // Handle touch start for mobile
  const handleTouchStart = (e) => {
    if (!trackRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // Handle touch move for mobile
  const handleTouchMove = (e) => {
    if (!isDragging || !trackRef.current) return;

    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier

    // Update scroll position
    trackRef.current.scrollLeft = scrollLeft - walk;

    // Prevent page scrolling while dragging the carousel
    e.preventDefault();
  };

  // Handle touch end for mobile
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`hyper-services-section ${isVisible ? "visible" : ""}`}
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      }}
    >
      {/* Quantum particle background */}
      <canvas ref={canvasRef} className="quantum-particles"></canvas>

      {/* Holographic overlay */}
      <div className="holographic-overlay"></div>

      {/* Scanning lines */}
      <div className="scanning-line horizontal"></div>
      <div className="scanning-line vertical"></div>
      <div className="scanning-grid"></div>

      <div className="hyper-container">
        <motion.div
          className="hyper-title-container"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="hyper-badge-wrapper" variants={cardVariants}>
            <div className="hyper-badge">
              <span className="hyper-badge-text">OUR HIGH SERVICES</span>
              <div className="hyper-badge-glow"></div>
              <Zap className="hyper-badge-icon" size={14} />
            </div>
          </motion.div>

          <motion.h2 className="hyper-title" variants={cardVariants}>
            OUR PREMIUM SERVICES{" "}
            <span className="hyper-highlight">REVENUE ROCKET</span>
          </motion.h2>

          <motion.div
            className="hyper-title-underline"
            variants={cardVariants}
          ></motion.div>

          <motion.p className="hyper-subtitle" variants={cardVariants}>
            Discover our cutting-edge solutions designed to elevate your digital
            presence
          </motion.p>
        </motion.div>

        <motion.div
          className="hyper-carousel-container"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          <div className="hyper-carousel-track-container">
            <div
              className="hyper-carousel-track"
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {extendedServices.map((service, index) => (
                <motion.div
                  key={`card-${index}`}
                  className={`hyper-service-card ${
                    expandedCard === index ? "expanded" : ""
                  } ${hoverCardIndex === index ? "hovered" : ""}`}
                  style={{
                    "--card-color": service.color,
                    "--card-index": index % services.length,
                  }}
                  ref={(el) => (cardsRef.current[index] = el)}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                  variants={expandedCardVariants}
                  animate={expandedCard === index ? "expanded" : "collapsed"}
                  whileHover={{
                    y: expandedCard === index ? 0 : -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="hyper-card-content">
                    <div className="hyper-card-header">
                      <motion.div
                        className="hyper-icon-container"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 0 20px ${service.color}80`,
                        }}
                      >
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
                      </motion.div>

                      <div className="hyper-card-title-container">
                        <h3 className="hyper-card-title">{service.title}</h3>
                        <button
                          className="hyper-expand-button"
                          onClick={(e) => handleCardExpand(index, e)}
                          aria-label={
                            expandedCard === index
                              ? "Collapse card"
                              : "Expand card"
                          }
                        >
                          {expandedCard === index ? (
                            <Minimize size={16} />
                          ) : (
                            <Maximize size={16} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="hyper-card-body">
                      <p className="hyper-card-description">
                        {service.description}
                      </p>

                      {expandedCard === index && (
                        <motion.div
                          className="hyper-card-features"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="hyper-features-title">Key Features</h4>
                          <ul className="hyper-features-list">
                            {service.features.map((feature, i) => (
                              <motion.li
                                key={i}
                                className="hyper-feature-item"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                              >
                                <Plus
                                  size={12}
                                  className="hyper-feature-icon"
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>

                    <div className="hyper-card-footer">
                      <motion.button
                        className="hyper-card-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ExternalLink size={14} className="hyper-button-icon" />
                      </motion.button>
                    </div>

                    {/* Holographic elements */}
                    <div className="hyper-card-hologram">
                      <div className="hologram-corner top-left"></div>
                      <div className="hologram-corner top-right"></div>
                      <div className="hologram-corner bottom-left"></div>
                      <div className="hologram-corner bottom-right"></div>
                      <div className="hologram-circle"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel controls */}
          <div className="hyper-carousel-controls">
            <motion.button
              className="hyper-carousel-arrow prev"
              onClick={() => setScrollDirection(-1)}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="arrow-icon" />
            </motion.button>

            <div className="hyper-carousel-speed">
              <div className="speed-label">Speed</div>
              <div className="speed-control">
                <button
                  className={`speed-button ${
                    scrollSpeed === 0.25 ? "active" : ""
                  }`}
                  onClick={() => setScrollSpeed(0.25)}
                >
                  1x
                </button>
                <button
                  className={`speed-button ${
                    scrollSpeed === 0.5 ? "active" : ""
                  }`}
                  onClick={() => setScrollSpeed(0.5)}
                >
                  2x
                </button>
                <button
                  className={`speed-button ${
                    scrollSpeed === 1 ? "active" : ""
                  }`}
                  onClick={() => setScrollSpeed(1)}
                >
                  3x
                </button>
              </div>
            </div>

            <motion.button
              className="hyper-carousel-arrow next"
              onClick={() => setScrollDirection(1)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="arrow-icon" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="hyper-cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <NavLink to="/service" className="hyper-button">
            <div className="button-background"></div>
            <motion.span
              className="hyper-button-text"
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
            >
              EXPLORE ALL SERVICES
            </motion.span>
            <motion.div
              className="hyper-button-icon"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <ArrowRight size={18} />
            </motion.div>
            <div className="hyper-button-glow"></div>
            <div className="hyper-button-particles"></div>
          </NavLink>
        </motion.div>
      </div>

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
          --accent-yellow: #f9c80e;
          --accent-green: #00ff9f;
          --text: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --glass-bg: rgba(10, 14, 23, 0.7);
          --glass-border: rgba(255, 255, 255, 0.1);
          --glass-highlight: rgba(255, 255, 255, 0.05);
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Import futuristic fonts */
        @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap");

        /* Hyper Services Section */
        .hyper-services-section {
          position: relative;
          padding: 8rem 0;
          background: linear-gradient(135deg, #0a0e17 0%, #121a2c 100%);
          color: var(--text);
          overflow: hidden;
          font-family: "Rajdhani", sans-serif;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
          min-height: 100vh;
        }

        .hyper-services-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hyper-services-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(238, 131, 77, 0.05) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(5, 217, 232, 0.05) 0131,77,0.05) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(5, 217, 232, 0.05) 0%, transparent 30%),
            radial-gradient(circle at 50% 50%, rgba(209, 0, 209, 0.03) 0%, transparent 50%);
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
          z-index: 1;
          opacity: 0.5;
          pointer-events: none;
        }

        .scanning-line.horizontal {
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
          animation: scanLineHorizontal 8s linear infinite;
        }

        .scanning-line.vertical {
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            var(--secondary) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          box-shadow: 0 0 10px var(--secondary-glow),
            0 0 20px var(--secondary-glow);
          animation: scanLineVertical 12s linear infinite;
        }

        /* Scanning grid */
        .scanning-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              to right,
              rgba(5, 217, 232, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(5, 217, 232, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.3;
        }

        @keyframes scanLineHorizontal {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes scanLineVertical {
          0% {
            left: 0%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.3;
          }
        }

        .hyper-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* Title Section */
        .hyper-title-container {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .hyper-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .hyper-badge {
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
          box-shadow: 0 0 15px rgba(5, 217, 232, 0.3);
        }

        .hyper-badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--primary);
          position: relative;
          z-index: 1;
          margin-right: 0.5rem;
        }

        .hyper-badge-icon {
          color: var(--primary);
          position: relative;
          z-index: 1;
        }

        .hyper-badge-glow {
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

        .hyper-badge:hover .hyper-badge-glow {
          opacity: 1;
        }

        .hyper-title {
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
          .hyper-title {
            font-size: 3rem;
          }
        }

        .hyper-highlight {
          color: var(--secondary);
          text-shadow: 0 0 10px var(--secondary-glow);
          position: relative;
          display: inline-block;
        }

        .hyper-highlight::after {
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

        .hyper-title-underline {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, var(--tertiary), transparent);
          margin: 0 auto;
        }

        .hyper-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Carousel */
        .hyper-carousel-container {
          position: relative;
          margin-bottom: 3rem;
          overflow: hidden;
        }

        .hyper-carousel-track-container {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
          margin: 0 -20px;
        }

        .hyper-carousel-track {
          display: flex;
          gap: 20px;
          padding: 20px;
          cursor: grab;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .hyper-carousel-track:active {
          cursor: grabbing;
        }

        .hyper-service-card {
          position: relative;
          flex: 0 0 300px;
          height: 350px;
          background: rgba(10, 14, 23, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
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

        .hyper-service-card.hovered,
        .hyper-service-card:hover {
          opacity: 1;
          transform: scale(1) translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
            0 0 15px rgba(var(--card-color), 0.3),
            inset 0 0 20px rgba(var(--card-color), 0.1);
          border-color: var(--card-color, var(--tertiary));
          z-index: 2;
        }

        .hyper-service-card.expanded {
          opacity: 1;
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px var(--card-color),
            inset 0 0 30px rgba(var(--card-color), 0.2);
          border-color: var(--card-color);
          z-index: 10;
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
          flex-direction: column;
          align-items: flex-start;
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
          margin-bottom: 1rem;
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

        .hyper-card-title-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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

        .hyper-expand-button {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .hyper-expand-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--card-color, var(--tertiary));
        }

        .hyper-card-body {
          flex: 1;
          overflow: hidden;
        }

        .hyper-card-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 0 1rem 0;
        }

        .hyper-card-features {
          margin-top: 1rem;
          overflow: hidden;
        }

        .hyper-features-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.5rem 0;
        }

        .hyper-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hyper-feature-item {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .hyper-feature-icon {
          color: var(--card-color, var(--tertiary));
          margin-right: 0.5rem;
        }

        .hyper-card-footer {
          margin-top: auto;
        }

        .hyper-card-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--glass-border);
          border-radius: 6px;
          color: var(--text);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hyper-card-button:hover {
          background: var(--card-color, var(--tertiary));
          color: var(--primary);
        }

        .hyper-button-icon {
          margin-left: 0.5rem;
        }

        /* Holographic elements */
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

        .top-left {
          top: 10px;
          left: 10px;
          border-top: 2px solid;
          border-left: 2px solid;
        }

        .top-right {
          top: 10px;
          right: 10px;
          border-top: 2px solid;
          border-right: 2px solid;
        }

        .bottom-left {
          bottom: 10px;
          left: 10px;
          border-bottom: 2px solid;
          border-left: 2px solid;
        }

        .bottom-right {
          bottom: 10px;
          right: 10px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        .hologram-circle {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 100px;
          height: 100px;
          border: 1px solid var(--card-color, var(--tertiary));
          border-radius: 50%;
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .hyper-service-card:hover .hologram-corner {
          opacity: 0.6;
          width: 20px;
          height: 20px;
        }

        .hyper-service-card:hover .hologram-circle {
          opacity: 0.4;
          transform: scale(1.2);
        }

        /* Carousel controls */
        .hyper-carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
          gap: 1rem;
        }

        .hyper-carousel-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          color: var(--text);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hyper-carousel-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(5, 217, 232, 0.3);
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
        }

        .hyper-carousel-speed {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .speed-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .speed-control {
          display: flex;
          gap: 5px;
        }

        .speed-button {
          padding: 0.25rem 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--glass-border);
          border-radius: 4px;
          color: var(--text-secondary);
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .speed-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .speed-button.active {
          background: var(--tertiary);
          color: var(--primary);
        }

        /* CTA Button */
        .hyper-cta-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .hyper-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 2rem;
          background: linear-gradient(
            135deg,
            var(--secondary) 0%,
            rgba(238, 131, 77, 0.8) 100%
          );
          color: var(--primary);
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: all var(--transition-medium);
          text-decoration: none;
          box-shadow: 0 5px 15px rgba(238, 131, 77, 0.3);
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
          border-radius: 8px;
          z-index: -1;
          transition: all var(--transition-medium);
        }

        .hyper-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(238, 131, 77, 0.4);
        }

        .hyper-button:hover .button-background {
          filter: brightness(1.2);
        }

        .hyper-button-text {
          position: relative;
          z-index: 2;
          margin-right: 0.5rem;
        }

        .hyper-button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-medium);
        }

        .hyper-button-glow {
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

        .hyper-button:hover .hyper-button-glow {
          opacity: 1;
        }

        .hyper-button-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hyper-button-particles::before,
        .hyper-button-particles::after {
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

        .hyper-button-particles::before {
          left: -10px;
          animation: particleLeft 2s infinite;
        }

        .hyper-button-particles::after {
          right: -10px;
          animation: particleRight 2s infinite;
        }

        .hyper-button:hover .hyper-button-particles::before,
        .hyper-button:hover .hyper-button-particles::after {
          opacity: 1;
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

        /* Responsive Adjustments */
        /* Update responsive styles for better mobile experience */
        @media (max-width: 1024px) {
          .hyper-service-card {
            flex: 0 0 280px;
            height: 330px;
          }
        }

        @media (max-width: 768px) {
          .hyper-services-section {
            padding: 5rem 0;
          }

          .hyper-title {
            font-size: 2.25rem;
          }

          .hyper-service-card {
            flex: 0 0 240px;
            height: 320px;
          }

          .hyper-card-content {
            padding: 1.25rem;
          }

          .hyper-carousel-track-container {
            margin: 0 -10px;
          }

          .hyper-carousel-track {
            gap: 15px;
            padding: 15px 10px;
          }

          .hyper-carousel-controls {
            flex-wrap: wrap;
            gap: 0.75rem;
          }
        }

        @media (max-width: 640px) {
          .hyper-services-section {
            padding: 4rem 0;
          }

          .hyper-container {
            padding: 0 1rem;
          }

          .hyper-title {
            font-size: 1.75rem;
          }

          .hyper-service-card {
            flex: 0 0 220px;
            height: 300px;
          }

          .hyper-card-title {
            font-size: 1rem;
          }

          .hyper-card-description {
            font-size: 0.85rem;
            line-height: 1.5;
          }

          .hyper-icon-container {
            width: 50px;
            height: 50px;
          }

          .hyper-icon {
            width: 40px;
            height: 40px;
          }

          .hyper-card-features {
            margin-top: 0.75rem;
          }

          .hyper-features-title {
            font-size: 0.9rem;
          }

          .hyper-feature-item {
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
          }

          .hyper-card-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }

          .hyper-service-card.expanded {
            height: 380px;
          }
        }

        @media (max-width: 480px) {
          .hyper-title-container {
            margin-bottom: 2rem;
          }

          .hyper-badge {
            padding: 0.4rem 0.8rem;
          }

          .hyper-badge-text {
            font-size: 0.7rem;
          }

          .hyper-title {
            font-size: 1.5rem;
          }

          .hyper-service-card {
            flex: 0 0 200px;
            height: 280px;
          }

          .hyper-card-content {
            padding: 1rem;
          }

          .hyper-carousel-controls {
            margin-top: 1.5rem;
          }

          .hyper-carousel-arrow {
            width: 36px;
            height: 36px;
          }

          .speed-button {
            padding: 0.2rem 0.4rem;
            font-size: 0.7rem;
          }

          .hyper-button {
            padding: 0.6rem 1.5rem;
            font-size: 0.8rem;
          }
        }

        /* Add specific styles for expanded cards on mobile */
        @media (max-width: 640px) {
          .hyper-service-card.expanded {
            width: 105% !important;
            z-index: 10;
          }
        }

        /* Add touch-specific optimizations */
        @media (hover: none) {
          .hyper-service-card:hover {
            transform: none;
          }

          .hyper-service-card.hovered {
            transform: translateY(-5px);
          }

          .hyper-carousel-track {
            -webkit-overflow-scrolling: touch;
          }

          .hyper-carousel-controls {
            padding: 0.5rem 0;
          }

          .speed-control {
            gap: 8px;
          }

          .speed-button {
            min-width: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
