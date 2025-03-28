// import React from "react";
// import "./Responsive.css";
// import responsive_video from "../../assets/video/responsive-xperience.mp4";
// import thumbnail from "../../assets/image/12084798_20943953.jpg";
// import responsiveVideo_banner from "../../assets/video/responsive_video_banner.jpg";
// const Responsive = () => {
//   return (
//     <section id="responsive">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-sm col-lg-6">
//             <div className="py-3">
//               <div className="title">
//                 <p
//                   className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//                   style={{ fontSize: "12px" }}
//                 >
//                   Our Design
//                 </p>
//                 <h3 className="text-capitalize py-2">
//                   Engaging, Adaptive, and User-Friendly Solutions by{" "}
//                   <span style={{ color: "#ed854f" }}>Revenue Rocket</span>
//                 </h3>
//               </div>
//               <p className="text-capitalize pt-3">
//                 Revenue Rocket specializes in crafting responsive website
//                 designs that deliver a seamless and engaging user experience
//                 across multiple devices. Our expert team understands the
//                 importance of catering to the growing mobile user base. With our
//                 mobile-first approach, we design websites that automatically
//                 adapt to different screen sizes, ensuring optimal functionality
//                 and visual appeal. By eliminating the need for separate mobile
//                 versions, we save time and resources while providing a
//                 consistent brand experience. Our responsive designs are built
//                 with the latest technologies, focusing on speed and performance
//                 optimization. With Lenexit's responsive website design, you can
//                 captivate your audience, boost user engagement, and drive
//                 conversions effectively.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-6 col-sm col-lg-6">
//             <div className="py-3 res-video">
//               <video
//                 title="Engaging, Adaptive, and User-Friendly Solutions"
//                 poster={responsiveVideo_banner}
//                 autoPlay
//                 muted
//                 loop
//                 security="true"
//                 className="img-fluid rounded-lg"
//               >
//                 <source src={responsive_video} type="video/mp4" />
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Responsive;

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Monitor,
  Smartphone,
  Tablet,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Menu,
  X,
  ArrowUp,
  Sparkles,
  Layers,
  LayoutGrid,
} from "lucide-react";

const ResponsiveDesign = ({
  responsive_video = "/placeholder.svg?height=500&width=800",
  thumbnail = "/placeholder.svg?height=500&width=800",
  responsiveVideo_banner = "/placeholder.svg?height=500&width=800",
}) => {
  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDevice, setActiveDevice] = useState("desktop");
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoverStats, setHoverStats] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState("showcase");
  const [mobileScrollPosition, setMobileScrollPosition] = useState(0);
  const [mobileView, setMobileView] = useState("card"); // card, list, grid
  const [activeCard, setActiveCard] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);
  const [showMobileTooltip, setShowMobileTooltip] = useState(true);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const touchStartRef = useRef(null);
  const mobileCardsRef = useRef(null);
  const mobileContainerRef = useRef(null);

  // Features list
  const features = [
    {
      title: "Mobile-First Approach",
      description:
        "We design with mobile users in mind first, ensuring optimal experience on smartphones before scaling up to larger screens.",
      icon: <Smartphone className="feature-icon" />,
      color: "#ed854f",
      bgGradient:
        "linear-gradient(135deg, rgba(237, 133, 79, 0.2) 0%, rgba(237, 133, 79, 0.05) 100%)",
    },
    {
      title: "Adaptive Layouts",
      description:
        "Our designs automatically adjust to any screen size, providing seamless functionality across all devices.",
      icon: <LayoutGrid className="feature-icon" />,
      color: "#4f8eed",
      bgGradient:
        "linear-gradient(135deg, rgba(79, 142, 237, 0.2) 0%, rgba(79, 142, 237, 0.05) 100%)",
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize every element to ensure fast loading times and smooth performance, even on slower connections.",
      icon: <Zap className="feature-icon" />,
      color: "#ed4f9e",
      bgGradient:
        "linear-gradient(135deg, rgba(237, 79, 158, 0.2) 0%, rgba(237, 79, 158, 0.05) 100%)",
    },
    {
      title: "Global Accessibility",
      description:
        "We ensure your website is accessible to all users, regardless of their device, location, or abilities.",
      icon: <Globe className="feature-icon" />,
      color: "#4fed8e",
      bgGradient:
        "linear-gradient(135deg, rgba(79, 237, 142, 0.2) 0%, rgba(79, 237, 142, 0.05) 100%)",
    },
  ];

  // Stats data
  const stats = [
    {
      value: "94%",
      label: "Mobile Users",
      description: "Of internet users access websites via mobile devices",
    },
    {
      value: "3.5×",
      label: "Conversion Boost",
      description: "Higher conversion rates with responsive design",
    },
    {
      value: "100%",
      label: "Device Coverage",
      description: "Works seamlessly across all screen sizes",
    },
  ];

  // Benefits list
  const benefits = [
    {
      title: "Increased Mobile Traffic",
      description:
        "Capture the growing segment of users browsing on smartphones and tablets.",
      icon: <Smartphone />,
      color: "#ed854f",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Optimized experiences lead to better engagement and more conversions.",
      icon: <ArrowRight />,
      color: "#4f8eed",
    },
    {
      title: "Improved User Engagement",
      description:
        "Intuitive interfaces keep users interacting with your content longer.",
      icon: <CheckCircle />,
      color: "#4fed8e",
    },
    {
      title: "Better SEO Rankings",
      description:
        "Google prioritizes mobile-friendly websites in search results.",
      icon: <Globe />,
      color: "#ed4f9e",
    },
    {
      title: "Reduced Bounce Rates",
      description:
        "Users stay longer when the experience is optimized for their device.",
      icon: <Shield />,
      color: "#8e4fed",
    },
    {
      title: "Future-Proof Design",
      description:
        "Adapt to new devices and screen sizes as technology evolves.",
      icon: <Zap />,
      color: "#ed854f",
    },
  ];

  // Check device type
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < 768;
      setIsMobile(isMobileDevice);
      setIsTablet(width >= 768 && width < 1024);

      // Reset mobile menu if resizing to desktop
      if (!isMobileDevice && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, [mobileMenuOpen]);

  // Handle mobile scroll
  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        setMobileScrollPosition(window.scrollY);

        // Hide tooltip after scrolling
        if (window.scrollY > 50) {
          setShowMobileTooltip(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Change active device
  const changeDevice = (device) => {
    setActiveDevice(device);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    // Apply a slight delay for smoother icon transition
    if (mobileMenuOpen) {
      // First start the rotation animation
      document.querySelector(".rd-mobile-menu-button").style.transform =
        "rotate(0deg)";

      // Then after a small delay, close the menu
      setTimeout(() => {
        setMobileMenuOpen(false);
        document.body.style.overflow = "";
      }, 100);
    } else {
      // Open menu immediately, rotation happens via CSS
      setMobileMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  // Change mobile tab
  const changeMobileTab = (tab) => {
    setActiveMobileTab(tab);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
    }
  };

  // Change mobile view
  const changeMobileView = (view) => {
    setMobileView(view);
  };

  // Navigate mobile cards
  const navigateMobileCards = (direction) => {
    if (direction === "next") {
      setActiveCard((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    } else {
      setActiveCard((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    }
  };

  // Auto-rotate features (only on desktop)
  useEffect(() => {
    if (!isMobile && !isTablet) {
      const interval = setInterval(() => {
        setActiveFeature((prev) =>
          prev === features.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [features.length, isMobile, isTablet]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play video when visible (but not on mobile to save data)
  useEffect(() => {
    if (isVisible && videoRef.current && !isMobile) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, [isVisible, isMobile]);

  // Handle touch events for swipe navigation
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;

    const touchEnd = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartRef.current - touchEnd;
    const diffY = touchStartY - touchEndY;

    // Only process horizontal swipes if vertical movement is minimal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left - next
        if (mobileView === "card") {
          navigateMobileCards("next");
        } else {
          setActiveFeature((prev) =>
            prev === features.length - 1 ? 0 : prev + 1
          );
        }
      } else {
        // Swipe right - previous
        if (mobileView === "card") {
          navigateMobileCards("prev");
        } else {
          setActiveFeature((prev) =>
            prev === 0 ? features.length - 1 : prev - 1
          );
        }
      }
    }

    touchStartRef.current = null;
    setTouchStartY(null);
  };

  // Canvas animation for background - optimized for mobile
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions with device pixel ratio consideration
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create grid points - fewer on mobile for performance
    const spacing = isMobile
      ? 50
      : Math.max(30, Math.min(50, window.innerWidth / 20));
    const points = [];

    const rect = canvas.getBoundingClientRect();
    const cols = Math.ceil(rect.width / spacing) + 2;
    const rows = Math.ceil(rect.height / spacing) + 2;

    // Reduce number of points on mobile
    const pointReduction = isMobile ? 2 : 1;

    for (let i = 0; i < cols; i += pointReduction) {
      for (let j = 0; j < rows; j += pointReduction) {
        points.push({
          x: i * spacing,
          y: j * spacing,
          originX: i * spacing,
          originY: j * spacing,
          color: `rgba(237, 133, 79, ${Math.random() * 0.5 + 0.25})`,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    }

    // Animation loop
    let animationFrameId;
    let mouseX = rect.width / 2;
    let mouseY = rect.height / 2;
    let isAnimating = true;

    // Track mouse position
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Track touch position
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.touches[0].clientX - rect.left;
        mouseY = e.touches[0].clientY - rect.top;
      }
    };

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      isAnimating = !document.hidden;
      if (isAnimating && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Simulated mouse movement for mobile
    let simulationAngle = 0;
    const simulateMouseMovement = () => {
      if (isMobile) {
        simulationAngle += 0.01;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const radius = Math.min(rect.width, rect.height) * 0.3;

        mouseX = centerX + Math.cos(simulationAngle) * radius;
        mouseY = centerY + Math.sin(simulationAngle) * radius;
      }
    };

    const animate = () => {
      if (!isAnimating) return;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Simulate mouse movement on mobile
      simulateMouseMovement();

      // Update and draw points
      points.forEach((point) => {
        // Calculate distance from mouse
        const dx = mouseX - point.originX;
        const dy = mouseY - point.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = isMobile ? 100 : 150;

        // Move points away from mouse
        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDistance - distance) / maxDistance;
          point.x =
            point.originX - Math.cos(angle) * force * (isMobile ? 10 : 20);
          point.y =
            point.originY - Math.sin(angle) * force * (isMobile ? 10 : 20);
        } else {
          // Return to original position
          point.x += (point.originX - point.x) * 0.1;
          point.y += (point.originY - point.y) * 0.1;
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      });

      // Draw connections - fewer on mobile for performance
      if (!isMobile || (isMobile && points.length < 100)) {
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          const p1 = points[i];

          // Limit connections on mobile
          const connectionLimit = isMobile ? 3 : points.length;

          for (
            let j = i + 1;
            j < Math.min(i + connectionLimit, points.length);
            j++
          ) {
            const p2 = points[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < spacing * (isMobile ? 1.2 : 1.5)) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
        ctx.strokeStyle = "rgba(237, 133, 79, 0.1)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      isAnimating = false;
    };
  }, [isVisible, isMobile]);

  // Mobile cards carousel effect
  useEffect(() => {
    if (isMobile && mobileView === "card" && mobileCardsRef.current) {
      const cards = mobileCardsRef.current.querySelectorAll(".rd-mobile-card");

      cards.forEach((card, index) => {
        let position = index - activeCard;

        // Handle wrap-around for infinite carousel
        if (position < 0 && position > -2) {
          position = position + cards.length;
        } else if (position > 1) {
          position = position - cards.length;
        }

        // Apply transform based on position
        if (position === 0) {
          // Active card
          card.style.transform = "translateX(0) scale(1)";
          card.style.zIndex = "3";
          card.style.opacity = "1";
        } else if (position === 1 || position === -2) {
          // Next card
          card.style.transform = "translateX(85%) scale(0.85)";
          card.style.zIndex = "2";
          card.style.opacity = "0.7";
        } else if (position === -1 || position === 2) {
          // Previous card
          card.style.transform = "translateX(-85%) scale(0.85)";
          card.style.zIndex = "1";
          card.style.opacity = "0.7";
        } else {
          // Hidden cards
          card.style.transform = "translateX(0) scale(0.7)";
          card.style.zIndex = "0";
          card.style.opacity = "0";
        }
      });
    }
  }, [activeCard, mobileView, isMobile]);

  // Hide mobile tooltip after delay
  useEffect(() => {
    if (isMobile && showMobileTooltip) {
      const timer = setTimeout(() => {
        setShowMobileTooltip(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isMobile, showMobileTooltip]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Render desktop version
  const renderDesktopVersion = () => (
    <>
      <div className="rd-header">
        <div className={`rd-badge ${isVisible ? "rd-animate-in" : ""}`}>
          <span className="rd-badge-dot"></span>Responsive Design
        </div>

        <h2 className={`rd-title ${isVisible ? "rd-animate-in" : ""}`}>
          Engaging, Adaptive, and User-Friendly Solutions
        </h2>

        <p className={`rd-subtitle ${isVisible ? "rd-animate-in" : ""}`}>
          Transforming user experiences across all devices
        </p>
      </div>

      <div className="rd-content">
        {/* Device Showcase Column */}
        <div className="rd-showcase-column">
          <div
            className={`rd-device-showcase ${isVisible ? "rd-animate-in" : ""}`}
          >
            <div className="rd-device-controls">
              <button
                className={`rd-device-button ${
                  activeDevice === "mobile" ? "rd-active" : ""
                }`}
                onClick={() => changeDevice("mobile")}
              >
                <Smartphone size={16} className="rd-device-icon" />
                <span>Mobile</span>
              </button>

              <button
                className={`rd-device-button ${
                  activeDevice === "tablet" ? "rd-active" : ""
                }`}
                onClick={() => changeDevice("tablet")}
              >
                <Tablet size={16} className="rd-device-icon" />
                <span>Tablet</span>
              </button>

              <button
                className={`rd-device-button ${
                  activeDevice === "desktop" ? "rd-active" : ""
                }`}
                onClick={() => changeDevice("desktop")}
              >
                <Monitor size={16} className="rd-device-icon" />
                <span>Desktop</span>
              </button>
            </div>

            <div className={`rd-device-frame rd-${activeDevice}`}>
              <div className="rd-device-notch"></div>
              <div className="rd-device-buttons"></div>
              <div className="rd-device-screen">
                <div className="rd-video-container">
                  <video
                    ref={videoRef}
                    poster={responsiveVideo_banner}
                    muted
                    loop
                    playsInline
                    className="rd-video"
                    preload="auto"
                  >
                    <source src={responsive_video} type="video/mp4" />
                  </video>

                  <button
                    className={`rd-video-control ${
                      isPlaying ? "rd-playing" : ""
                    }`}
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause size={16} className="rd-control-icon" />
                    ) : (
                      <Play size={16} className="rd-control-icon" />
                    )}
                  </button>
                </div>
              </div>

              <div className="rd-device-home"></div>
            </div>

            <div className="rd-device-reflection"></div>
            <div className="rd-device-shadow"></div>

            <div className="rd-device-specs">
              {activeDevice === "mobile" && (
                <div className="rd-specs-content">
                  <span className="rd-device-name">Smartphone</span>
                  <span className="rd-device-size">375 × 667px</span>
                </div>
              )}

              {activeDevice === "tablet" && (
                <div className="rd-specs-content">
                  <span className="rd-device-name">Tablet</span>
                  <span className="rd-device-size">768 × 1024px</span>
                </div>
              )}

              {activeDevice === "desktop" && (
                <div className="rd-specs-content">
                  <span className="rd-device-name">Desktop</span>
                  <span className="rd-device-size">1440 × 900px</span>
                </div>
              )}
            </div>
          </div>

          <div className={`rd-stats ${isVisible ? "rd-animate-in" : ""}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rd-stat-item"
                onMouseEnter={() => setHoverStats(index)}
                onMouseLeave={() => setHoverStats(null)}
                onTouchStart={() => setHoverStats(index)}
                onTouchEnd={() => setTimeout(() => setHoverStats(null), 3000)}
              >
                <div className="rd-stat-content">
                  <div className="rd-stat-value">{stat.value}</div>
                  <div className="rd-stat-label">{stat.label}</div>
                </div>
                <div
                  className={`rd-stat-tooltip ${
                    hoverStats === index ? "rd-show" : ""
                  }`}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Column */}
        <div className="rd-info-column">
          <div
            className={`rd-features ${isVisible ? "rd-animate-in" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <h3 className="rd-features-title">Key Features</h3>

            <div className="rd-features-tabs">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`rd-feature-tab ${
                    activeFeature === index ? "rd-active" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={
                    activeFeature === index
                      ? { borderColor: feature.color }
                      : {}
                  }
                >
                  <div className="rd-tab-content">
                    <div
                      className="rd-tab-icon"
                      style={
                        activeFeature === index
                          ? { backgroundColor: feature.color }
                          : {}
                      }
                    >
                      {React.cloneElement(feature.icon, { size: 16 })}
                    </div>
                    <span>{feature.title}</span>
                  </div>
                </button>
              ))}
            </div>

            <div
              className="rd-feature-content"
              style={{ borderColor: features[activeFeature].color }}
            >
              <div
                className="rd-feature-icon-large"
                style={{
                  backgroundColor: `${features[activeFeature].color}20`,
                }}
              >
                {React.cloneElement(features[activeFeature].icon, { size: 20 })}
              </div>
              <div className="rd-feature-details">
                <h4 style={{ color: features[activeFeature].color }}>
                  {features[activeFeature].title}
                </h4>
                <p>{features[activeFeature].description}</p>
              </div>
            </div>
          </div>

          <div className={`rd-description ${isVisible ? "rd-animate-in" : ""}`}>
            <p>
              We specialize in crafting responsive website designs that deliver
              a seamless and engaging user experience across multiple devices.
            </p>

            <p>
              With our mobile-first approach, we design websites that
              automatically adapt to different screen sizes, ensuring optimal
              functionality and visual appeal.
            </p>
          </div>
        </div>

        {/* Benefits Column */}
        <div
          className={`rd-benefits-column ${isVisible ? "rd-animate-in" : ""}`}
        >
          <div className="rd-benefits">
            <h3 className="rd-benefits-title">Benefits</h3>

            <div className="rd-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="rd-benefit-item">
                  <div
                    className="rd-benefit-icon"
                    style={{
                      backgroundColor: `${benefit.color}20`,
                      color: benefit.color,
                    }}
                  >
                    {React.cloneElement(benefit.icon, { size: 16 })}
                  </div>
                  <div className="rd-benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rd-cta-container">
              <button className="rd-cta-button">
                <span>Get Started</span>
                <ArrowRight size={14} className="rd-cta-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render mobile version
  const renderMobileVersion = () => (
    <div className="rd-mobile-container" ref={mobileContainerRef}>
      {/* Mobile Header */}
      <div
        className="rd-mobile-header"
        style={{ opacity: 1 - mobileScrollPosition / 100 }}
      >
        <div className="rd-mobile-title-container">
          <h2 className="rd-mobile-title">Responsive Design</h2>
          <div className="rd-mobile-subtitle">Premium Mobile Experience</div>
        </div>

        <div className="rd-mobile-header-glow"></div>
      </div>

      {/* Mobile View Switcher */}
      <div className="rd-mobile-view-switcher">
        <button
          className={`rd-view-button ${
            mobileView === "card" ? "rd-active" : ""
          }`}
          onClick={() => changeMobileView("card")}
        >
          <Layers size={16} />
        </button>
        <button
          className={`rd-view-button ${
            mobileView === "list" ? "rd-active" : ""
          }`}
          onClick={() => changeMobileView("list")}
        >
          <LayoutGrid size={16} />
        </button>
        <button
          className={`rd-view-button ${
            mobileView === "grid" ? "rd-active" : ""
          }`}
          onClick={() => changeMobileView("grid")}
        >
          <Monitor size={16} />
        </button>
      </div>

      {/* Mobile Tooltip */}
      {showMobileTooltip && (
        <div className="rd-mobile-tooltip">
          <Sparkles size={14} className="rd-tooltip-icon" />
          <span>Swipe left or right to explore features</span>
        </div>
      )}

      {/* Mobile Cards View */}
      {mobileView === "card" && (
        <div
          className="rd-mobile-cards-container"
          ref={mobileCardsRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rd-mobile-card ${
                activeCard === index ? "rd-active" : ""
              }`}
              style={{
                background: feature.bgGradient,
                borderColor: feature.color,
              }}
            >
              <div className="rd-card-content">
                <div
                  className="rd-card-icon"
                  style={{ backgroundColor: feature.color }}
                >
                  {React.cloneElement(feature.icon, {
                    size: 24,
                    color: "#fff",
                  })}
                </div>
                <h3 className="rd-card-title" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="rd-card-description">{feature.description}</p>
              </div>
              <div className="rd-card-number">
                {index + 1}/{features.length}
              </div>
            </div>
          ))}

          <div className="rd-mobile-card-nav">
            <button
              className="rd-card-nav-button rd-prev"
              onClick={() => navigateMobileCards("prev")}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="rd-card-indicators">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`rd-card-indicator ${
                    activeCard === index ? "rd-active" : ""
                  }`}
                  style={
                    activeCard === index
                      ? { backgroundColor: features[activeCard].color }
                      : {}
                  }
                  onClick={() => setActiveCard(index)}
                ></div>
              ))}
            </div>
            <button
              className="rd-card-nav-button rd-next"
              onClick={() => navigateMobileCards("next")}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile List View */}
      {mobileView === "list" && (
        <div className="rd-mobile-list-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rd-mobile-list-item"
              style={{ borderLeftColor: feature.color }}
            >
              <div
                className="rd-list-icon"
                style={{
                  backgroundColor: `${feature.color}20`,
                  color: feature.color,
                }}
              >
                {React.cloneElement(feature.icon, { size: 20 })}
              </div>
              <div className="rd-list-content">
                <h3 className="rd-list-title" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="rd-list-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Grid View */}
      {mobileView === "grid" && (
        <div className="rd-mobile-grid-container">
          <div className="rd-mobile-device-showcase">
            <div className="rd-mobile-device-frame">
              <div className="rd-mobile-device-screen">
                <video
                  ref={videoRef}
                  poster={responsiveVideo_banner}
                  muted
                  loop
                  playsInline
                  className="rd-mobile-video"
                  preload="none"
                >
                  <source src={responsive_video} type="video/mp4" />
                </video>

                <button
                  className="rd-mobile-video-control"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="rd-mobile-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="rd-mobile-stat">
                <div className="rd-mobile-stat-value">{stat.value}</div>
                <div className="rd-mobile-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Benefits */}
      <div className="rd-mobile-benefits">
        <h3 className="rd-mobile-section-title">Key Benefits</h3>

        <div className="rd-mobile-benefits-grid">
          {benefits.slice(0, 4).map((benefit, index) => (
            <div
              key={index}
              className="rd-mobile-benefit-item"
              style={{ backgroundColor: `${benefit.color}10` }}
            >
              <div
                className="rd-mobile-benefit-icon"
                style={{ color: benefit.color }}
              >
                {React.cloneElement(benefit.icon, { size: 18 })}
              </div>
              <div className="rd-mobile-benefit-title">{benefit.title}</div>
            </div>
          ))}
        </div>

        <button className="rd-mobile-cta-button">
          <span>Get Started</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Mobile Footer */}
    </div>
  );

  return (
    <section
      id="responsive"
      ref={sectionRef}
      className={`rd-section ${isVisible ? "rd-visible" : ""}`}
    >
      <canvas ref={canvasRef} className="rd-canvas"></canvas>
      <div className="rd-glow-1"></div>
      <div className="rd-glow-2"></div>

      {/* Mobile Menu Button */}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={`rd-mobile-menu ${mobileMenuOpen ? "rd-open" : ""}`}>
          <div className="rd-mobile-menu-header">
            <h3>Responsive Design</h3>
            <button className="rd-mobile-menu-close" onClick={toggleMobileMenu}>
              <X size={18} />
            </button>
          </div>
          <div className="rd-mobile-menu-tabs">
            <button
              className={`rd-mobile-tab ${
                activeMobileTab === "showcase" ? "rd-active" : ""
              }`}
              onClick={() => changeMobileTab("showcase")}
            >
              <Monitor size={18} />
              <span>Showcase</span>
            </button>
            <button
              className={`rd-mobile-tab ${
                activeMobileTab === "features" ? "rd-active" : ""
              }`}
              onClick={() => changeMobileTab("features")}
            >
              <Zap size={18} />
              <span>Features</span>
            </button>
            <button
              className={`rd-mobile-tab ${
                activeMobileTab === "benefits" ? "rd-active" : ""
              }`}
              onClick={() => changeMobileTab("benefits")}
            >
              <CheckCircle size={18} />
              <span>Benefits</span>
            </button>
          </div>
        </div>
      )}

      <div className="rd-container">
        {isMobile ? renderMobileVersion() : renderDesktopVersion()}
      </div>

      <style jsx>{`
        /* Base Styles - Scoped to this component only */
        .rd-section {
          position: relative;
          padding: 3rem 0;
          overflow: hidden;
          background-color: #0a0a0a;
          color: #ffffff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          isolation: isolate;
          width: 100%;
          box-sizing: border-box;
        }

        .rd-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .rd-glow-1 {
          position: absolute;
          top: -10rem;
          right: -10rem;
          width: 20rem;
          height: 20rem;
          background: radial-gradient(
            circle,
            rgba(237, 133, 79, 0.15) 0%,
            rgba(237, 133, 79, 0) 70%
          );
          border-radius: 50%;
          z-index: 0;
          filter: blur(2.5rem);
        }

        .rd-glow-2 {
          position: absolute;
          bottom: -10rem;
          left: -10rem;
          width: 20rem;
          height: 20rem;
          background: radial-gradient(
            circle,
            rgba(79, 142, 237, 0.1) 0%,
            rgba(79, 142, 237, 0) 70%
          );
          border-radius: 50%;
          z-index: 0;
          filter: blur(2.5rem);
        }

        .rd-container {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        /* Mobile Menu */
        .rd-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
          z-index: 999;
          display: flex;
          flex-direction: column;
          transform: translateY(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }

        .rd-mobile-menu.rd-open {
          transform: translateY(0);
        }

        .rd-mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .rd-mobile-menu-header h3 {
          margin: 0;
          font-size: 1rem;
          color: #ed854f;
        }

        .rd-mobile-menu-close {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.25rem;
        }

        .rd-mobile-menu-tabs {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 0.75rem;
        }

        .rd-mobile-tab {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-mobile-tab.rd-active {
          background: rgba(237, 133, 79, 0.1);
          border-color: rgba(237, 133, 79, 0.3);
          color: #ed854f;
        }

        /* Header Styles */
        .rd-header {
          text-align: center;
          margin-bottom: 2rem;
          max-width: 45rem;
          margin-left: auto;
          margin-right: auto;
        }

        .rd-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.375rem 0.75rem;
          background: rgba(237, 133, 79, 0.1);
          color: #ed854f;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 1.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 0 1rem rgba(237, 133, 79, 0.2);
          border: 1px solid rgba(237, 133, 79, 0.2);
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rd-badge-dot {
          width: 0.375rem;
          height: 0.375rem;
          background-color: #ed854f;
          border-radius: 50%;
          margin-right: 0.375rem;
        }

        .rd-title {
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #aaaaaa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.1s;
        }

        .rd-subtitle {
          font-size: 1rem;
          line-height: 1.6;
          color: #aaaaaa;
          margin: 0;
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
        }

        /* Content Layout */
        .rd-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        .rd-hidden {
          display: none;
        }

        /* Info Column */
        .rd-info-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .rd-description {
          opacity: 0;
          transform: translateX(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.3s;
        }

        .rd-description p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #cccccc;
          margin-bottom: 0.75rem;
        }

        .rd-description p:last-child {
          margin-bottom: 0;
        }

        /* Features Section */
        .rd-features {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
          opacity: 0;
          transform: translateX(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.4s;
        }

        .rd-features-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #ffffff;
        }

        .rd-features-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 0.5rem;
        }

        .rd-features-tabs::-webkit-scrollbar {
          display: none;
        }

        .rd-feature-tab {
          flex: 1;
          min-width: 5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          color: #aaaaaa;
          font-size: 0.75rem;
        }

        .rd-feature-tab:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .rd-feature-tab.rd-active {
          background: rgba(255, 255, 255, 0.07);
          color: #ffffff;
          border-color: #ed854f;
        }

        .rd-tab-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.375rem;
        }

        .rd-tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
          color: #ffffff;
        }

        .rd-feature-tab.rd-active .rd-tab-icon {
          background: #ed854f;
          color: #000000;
          box-shadow: 0 0 0.75rem rgba(237, 133, 79, 0.5);
        }

        .rd-feature-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 1rem;
          border-radius: 0.5rem;
          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(237, 133, 79, 0.2);
          min-height: 5rem;
          transition: all 0.3s ease;
        }

        .rd-feature-icon-large {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(237, 133, 79, 0.1);
          border-radius: 0.5rem;
          color: #ed854f;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .feature-icon {
          width: 1rem;
          height: 1rem;
        }

        .rd-feature-details {
          flex: 1;
        }

        .rd-feature-details h4 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: #ed854f;
          transition: all 0.3s ease;
        }

        .rd-feature-details p {
          font-size: 0.8125rem;
          line-height: 1.5;
          color: #cccccc;
          margin: 0;
        }

        /* Benefits Section */
        .rd-benefits-column {
          grid-column: 1 / -1;
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.5s;
        }

        .rd-benefits {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
        }

        .rd-benefits-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #ffffff;
          text-align: center;
        }

        .rd-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .rd-benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }

        .rd-benefit-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-0.25rem);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          border-color: rgba(237, 133, 79, 0.2);
        }

        .rd-benefit-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          background: rgba(237, 133, 79, 0.1);
          border-radius: 0.5rem;
          color: #ed854f;
          flex-shrink: 0;
        }

        .rd-benefit-content {
          flex: 1;
        }

        .rd-benefit-content h4 {
          font-size: 0.875rem;
          font-weight: 600;
          margin: 0 0 0.375rem;
          color: #ffffff;
        }

        .rd-benefit-content p {
          font-size: 0.75rem;
          line-height: 1.5;
          color: #aaaaaa;
          margin: 0;
        }

        .rd-cta-container {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .rd-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #ed854f 0%, #e67e45 100%);
          color: #000000;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 1.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 1.5rem rgba(237, 133, 79, 0.4);
          position: relative;
          overflow: hidden;
        }

        .rd-cta-button::before {
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

        .rd-cta-button:hover::before {
          left: 100%;
        }

        .rd-cta-button:hover {
          transform: translateY(-0.125rem) scale(1.05);
          box-shadow: 0 0 2rem rgba(237, 133, 79, 0.6);
        }

        .rd-cta-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        /* Showcase Column */
        .rd-showcase-column {
          position: relative;
        }

        .rd-device-showcase {
          position: relative;
          opacity: 0;
          transform: translateX(-1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.3s;
        }

        .rd-device-controls {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .rd-device-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #aaaaaa;
          font-size: 0.75rem;
        }

        .rd-device-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(237, 133, 79, 0.2);
          color: #ffffff;
        }

        .rd-device-button.rd-active {
          background: rgba(237, 133, 79, 0.1);
          border-color: rgba(237, 133, 79, 0.3);
          color: #ed854f;
          box-shadow: 0 0 1rem rgba(237, 133, 79, 0.2);
        }

        .rd-device-icon {
          width: 1rem;
          height: 1rem;
        }

        .rd-device-frame {
          position: relative;
          width: 100%;
          max-width: 20rem;
          margin: 0 auto;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .rd-device-frame.rd-desktop {
          border-radius: 0.5rem;
          border: 0.5rem solid #222222;
          border-bottom-width: 1.25rem;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3),
            0 0 1rem rgba(237, 133, 79, 0.2);
          transform: rotateX(5deg);
        }

        .rd-device-frame.rd-tablet {
          border-radius: 0.75rem;
          border: 0.5rem solid #222222;
          max-width: 15rem;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3),
            0 0 1rem rgba(237, 133, 79, 0.2);
          transform: rotateX(5deg);
        }

        .rd-device-frame.rd-mobile {
          border-radius: 1rem;
          border: 0.375rem solid #222222;
          max-width: 10rem;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3),
            0 0 1rem rgba(237, 133, 79, 0.2);
          transform: rotateX(5deg);
        }

        .rd-device-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5rem;
          height: 0.75rem;
          background: #222222;
          border-radius: 0 0 0.5rem 0.5rem;
          z-index: 2;
          display: none;
        }

        .rd-device-frame.rd-mobile .rd-device-notch {
          display: block;
          width: 2.5rem;
          height: 0.5rem;
        }

        .rd-device-buttons {
          position: absolute;
          top: 3rem;
          right: -0.5rem;
          width: 0.125rem;
          height: 2rem;
          background: #333333;
          border-radius: 0.125rem;
          display: none;
        }

        .rd-device-frame.rd-mobile .rd-device-buttons {
          display: block;
        }

        .rd-device-home {
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          border: 0.125rem solid #333333;
          display: none;
        }

        .rd-device-frame.rd-mobile .rd-device-home {
          display: block;
          width: 1rem;
          height: 1rem;
          bottom: -0.75rem;
        }

        .rd-device-screen {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 62.5%;
          background: #000000;
          overflow: hidden;
          border-radius: 0.125rem;
        }

        .rd-device-frame.rd-mobile .rd-device-screen {
          padding-bottom: 177.78%;
          border-radius: 0.375rem;
        }

        .rd-device-frame.rd-tablet .rd-device-screen {
          padding-bottom: 133.33%;
          border-radius: 0.25rem;
        }

        .rd-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rd-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rd-video-control {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .rd-video-control:hover {
          background: rgba(237, 133, 79, 0.9);
          transform: scale(1.1);
          box-shadow: 0 0 1rem rgba(237, 133, 79, 0.5);
        }

        .rd-control-icon {
          width: 1rem;
          height: 1rem;
        }

        .rd-device-reflection {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%
          );
          pointer-events: none;
          z-index: 2;
        }

        .rd-device-shadow {
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 0.75rem;
          background: rgba(0, 0, 0, 0.3);
          filter: blur(0.5rem);
          border-radius: 50%;
          z-index: -1;
        }

        .rd-device-specs {
          position: absolute;
          bottom: -2.5rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .rd-specs-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.375rem 0.75rem;
          border-radius: 0.375rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .rd-device-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: #ffffff;
        }

        .rd-device-size {
          font-size: 0.6875rem;
          color: #aaaaaa;
        }

        /* Stats Section */
        .rd-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
          gap: 1rem;
          margin-top: 3.5rem;
          opacity: 0;
          transform: translateY(1rem);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.5s;
        }

        .rd-stat-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .rd-stat-item:hover {
          transform: translateY(-0.25rem);
          box-shadow: 0 0.75rem 1.75rem rgba(0, 0, 0, 0.3),
            0 0 1rem rgba(237, 133, 79, 0.2);
          border-color: rgba(237, 133, 79, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        .rd-stat-content {
          position: relative;
          z-index: 1;
        }

        .rd-stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ed854f;
          margin-bottom: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-shadow: 0 0 0.5rem rgba(237, 133, 79, 0.5);
        }

        .rd-stat-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: #ffffff;
        }

        .rd-stat-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(0.5rem);
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          width: 10rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          pointer-events: none;
          z-index: 10;
        }

        .rd-stat-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0.375rem;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
        }

        .rd-stat-tooltip.rd-show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* Mobile-specific styles */
        .rd-mobile-container {
          padding: 1rem 0;
        }

        .rd-mobile-header {
          position: relative;
          padding: 2rem 1rem 3rem;
          text-align: center;
          margin-bottom: 2rem;
          overflow: hidden;
          transition: opacity 0.3s ease;
        }

        .rd-mobile-header-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 15rem;
          height: 15rem;
          background: radial-gradient(
            circle,
            rgba(237, 133, 79, 0.2) 0%,
            rgba(237, 133, 79, 0) 70%
          );
          border-radius: 50%;
          z-index: 0;
          filter: blur(2rem);
        }

        .rd-mobile-title-container {
          position: relative;
          z-index: 1;
        }

        .rd-mobile-title {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #aaaaaa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.5);
        }

        .rd-mobile-subtitle {
          font-size: 1rem;
          color: #ed854f;
          font-weight: 600;
        }

        .rd-mobile-view-switcher {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(10, 10, 10, 0.8);
          padding: 0.75rem 0;
          backdrop-filter: blur(0.5rem);
          -webkit-backdrop-filter: blur(0.5rem);
        }

        .rd-view-button {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #aaaaaa;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-view-button.rd-active {
          background: rgba(237, 133, 79, 0.1);
          border-color: rgba(237, 133, 79, 0.3);
          color: #ed854f;
          box-shadow: 0 0 1rem rgba(237, 133, 79, 0.3);
        }

        .rd-mobile-tooltip {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
          z-index: 100;
          animation: tooltipPulse 2s infinite;
        }

        .rd-tooltip-icon {
          color: #ed854f;
        }

        @keyframes tooltipPulse {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
        }

        /* Mobile Cards View */
        .rd-mobile-cards-container {
          position: relative;
          height: 20rem;
          margin: 2rem 0;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .rd-mobile-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 1.5rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(237, 133, 79, 0.2);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center center;
          backface-visibility: hidden;
          overflow: hidden;
        }

        .rd-card-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .rd-card-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ed854f;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        }

        .rd-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #ed854f;
        }

        .rd-card-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #cccccc;
          margin: 0;
        }

        .rd-card-number {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .rd-mobile-card-nav {
          position: absolute;
          bottom: -3rem;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }

        .rd-card-nav-button {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-card-nav-button:hover {
          background: rgba(237, 133, 79, 0.1);
          border-color: rgba(237, 133, 79, 0.3);
          color: #ed854f;
        }

        .rd-card-indicators {
          display: flex;
          gap: 0.5rem;
        }

        .rd-card-indicator {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-card-indicator.rd-active {
          background: #ed854f;
          transform: scale(1.2);
        }

        /* Mobile List View */
        .rd-mobile-list-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0 1rem;
        }

        .rd-mobile-list-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          border-left: 3px solid #ed854f;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .rd-mobile-list-item:hover {
          transform: translateX(0.25rem);
          background: rgba(255, 255, 255, 0.05);
        }

        .rd-list-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(237, 133, 79, 0.1);
          border-radius: 0.5rem;
          color: #ed854f;
          flex-shrink: 0;
        }

        .rd-list-content {
          flex: 1;
        }

        .rd-list-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: #ed854f;
        }

        .rd-list-description {
          font-size: 0.75rem;
          line-height: 1.5;
          color: #cccccc;
          margin: 0;
        }

        /* Mobile Grid View */
        .rd-mobile-grid-container {
          padding: 0 1rem;
        }

        .rd-mobile-device-showcase {
          margin-bottom: 2rem;
        }

        .rd-mobile-device-frame {
          position: relative;
          width: 100%;
          max-width: 15rem;
          margin: 0 auto;
          border-radius: 1.5rem;
          border: 0.5rem solid #222222;
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3),
            0 0 1rem rgba(237, 133, 79, 0.2);
          overflow: hidden;
        }

        .rd-mobile-device-screen {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 177.78%;
          background: #000000;
          overflow: hidden;
        }

        .rd-mobile-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rd-mobile-video-control {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .rd-mobile-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .rd-mobile-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .rd-mobile-stat-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ed854f;
          margin-bottom: 0.25rem;
        }

        .rd-mobile-stat-label {
          font-size: 0.6875rem;
          color: #aaaaaa;
        }

        /* Mobile Benefits */
        .rd-mobile-benefits {
          padding: 2rem 1rem;
          margin-top: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 1rem 1rem 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .rd-mobile-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1.5rem;
          color: #ffffff;
          text-align: center;
        }

        .rd-mobile-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .rd-mobile-benefit-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          text-align: center;
          height: 100%;
          transition: all 0.3s ease;
        }

        .rd-mobile-benefit-item:active {
          transform: scale(0.95);
        }

        .rd-mobile-benefit-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .rd-mobile-benefit-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
        }

        .rd-mobile-cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #ed854f 0%, #e67e45 100%);
          color: #000000;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 0.75rem;
          margin-left: -0.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0.5rem 1.5rem rgba(237, 133, 79, 0.3);
        }

        .rd-mobile-cta-button:active {
          transform: translateY(0.25rem);
          box-shadow: 0 0.25rem 0.75rem rgba(237, 133, 79, 0.3);
        }

        /* Mobile Footer */
        .rd-mobile-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 2rem;
        }

        .rd-mobile-footer-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .rd-mobile-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ed854f;
          font-weight: 600;
        }

        .rd-mobile-copyright {
          font-size: 0.75rem;
          color: #aaaaaa;
        }

        .rd-mobile-scroll-top {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rd-mobile-scroll-top:hover {
          background: rgba(237, 133, 79, 0.1);
          border-color: rgba(237, 133, 79, 0.3);
          color: #ed854f;
        }

        /* Animation Classes */
        .rd-animate-in {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* Responsive Styles */
        @media (min-width: 576px) {
          .rd-title {
            font-size: 2rem;
          }

          .rd-subtitle {
            font-size: 1.125rem;
          }

          .rd-features-title,
          .rd-benefits-title {
            font-size: 1.25rem;
          }

          .rd-feature-details h4 {
            font-size: 1.125rem;
          }

          .rd-feature-details p {
            font-size: 0.875rem;
          }

          .rd-mobile-cards-container {
            height: 22rem;
          }

          .rd-mobile-benefits-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 768px) {
          .rd-section {
            padding: 4rem 0;
          }

          .rd-header {
            margin-bottom: 3rem;
          }

          .rd-title {
            font-size: 2.5rem;
          }

          .rd-content {
            gap: 3rem;
          }

          .rd-device-frame.rd-desktop {
            max-width: 25rem;
          }

          .rd-device-frame.rd-tablet {
            max-width: 18rem;
          }

          .rd-device-frame.rd-mobile {
            max-width: 12rem;
          }

          .rd-stats {
            margin-top: 4rem;
          }
        }

        @media (min-width: 992px) {
          .rd-section {
            padding: 5rem 0;
          }

          .rd-title {
            font-size: 3rem;
          }

          .rd-features,
          .rd-benefits {
            padding: 2rem;
          }

          .rd-feature-content {
            padding: 1.5rem;
          }

          .rd-device-frame.rd-desktop {
            max-width: 30rem;
          }

          .rd-device-frame.rd-tablet {
            max-width: 20rem;
          }

          .rd-device-frame.rd-mobile {
            max-width: 14rem;
          }
        }

        @media (min-width: 1200px) {
          .rd-section {
            padding: 6rem 0;
          }

          .rd-container {
            padding: 0 2rem;
          }

          .rd-benefits-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(1rem);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(237, 133, 79, 0.4);
          }
          70% {
            box-shadow: 0 0 0 0.5rem rgba(237, 133, 79, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(237, 133, 79, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ResponsiveDesign;
