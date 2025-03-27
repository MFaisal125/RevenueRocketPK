// import React from "react";
// import welcomeVideo from "../../assets/video/welcome-plants.mp4";
// import aboutusVideo from "../../assets/video/about-us.mp4";
// import aboutusVideo1 from "../../assets/video/about-us1.mp4";
// import welcomeVideo_Banner from "../../assets/video/welcome_video_banner.jpg";
// import teamVideo_banner from "../../assets/video/team_video_banner.jpg";
// import "./About.css";
// import { NavLink } from "react-router-dom";
// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 col-sm col-lg-4">
//             <video
//               poster={welcomeVideo_Banner}
//               autoPlay
//               muted
//               loop
//               src={welcomeVideo}
//               className="img-fluid"
//               title="the power of technology Revenue Rocket.com"
//             ></video>
//             <video
//               poster={teamVideo_banner}
//               autoPlay
//               muted
//               loop
//               src={aboutusVideo}
//               className="img-fluid"
//               title="the power of technology Revenue Rocket.com"
//             ></video>
//             <video
//               poster={teamVideo_banner}
//               autoPlay
//               muted
//               loop
//               src={aboutusVideo1}
//               className="img-fluid"
//               title="the power of technology Revenue Rocket.com"
//             ></video>
//           </div>
//           <div className="col-md-8 col-sm col-lg-8">
//             <div className="title">
//               <p
//                 className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//                 style={{ fontSize: "12px" }}
//               >
//                 who we are
//               </p>
//               <h3
//                 className="text-capitalize py-2"
//                 style={{ fontSize: "3rem", fontWeight: "bold" }}
//               >
//                 welcome to the{" "}
//                 <span style={{ color: "#ed8652" }}>Revenue Rocket</span>
//               </h3>
//             </div>
//             <p style={{ fontSize: "14px", padding: "5px" }}>
//               Revenue Rocket is a leading technology company that specializes in
//               web and mobile app development, desktop application development,
//               SEO, graphics design, penetration testing, and more. With a focus
//               on innovation and client satisfaction, we provide tailored
//               solutions to businesses of all sizes. Our web and mobile app
//               development services combine creativity and functionality to
//               deliver user-friendly experiences across platforms. We excel in
//               building responsive websites and feature-rich mobile apps that
//               engage users and drive business growth. In the realm of desktop
//               application development, we create robust software solutions that
//               streamline processes and improve productivity. Our team of skilled
//               developers uses cutting-edge technologies to deliver customized
//               applications that meet specific business requirements.
//             </p>
//             <p style={{ fontSize: "14px", padding: "5px" }}>
//               Revenue Rocket also offers SEO services to boost online visibility
//               and improve search engine rankings. We employ effective
//               strategies, including keyword research, content optimization, and
//               performance tracking, to drive organic traffic and increase brand
//               visibility. With our graphics design expertise, we create visually
//               appealing designs that enhance brand identity. From logos and
//               branding materials to UI/UX design, we craft compelling visuals
//               that leave a lasting impression on customers. Additionally, our
//               penetration testing services ensure the security of systems and
//               networks. We identify vulnerabilities and provide recommendations
//               to fortify digital assets against potential cyber threats. Lenexit
//               is dedicated to delivering high-quality solutions that empower
//               businesses to thrive in the digital landscape. With our diverse
//               range of services, we are your trusted partner for all your
//               technology needs.
//             </p>
//             <button class="btn text-capitalize about_btn" role="button">
//               <NavLink className="text-white" to={"/about"}>
//                 read more
//               </NavLink>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

"use client";

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Globe,
  Heart,
  Layers,
  Users,
  Code,
  Shield,
  Zap,
  Award,
  Star,
  Monitor,
  Smartphone,
  Tablet,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

// Import your videos and images
// These paths should match your actual asset locations
import welcomeVideo from "../../assets/video/welcome-plants.mp4";
import aboutusVideo from "../../assets/video/about-us.mp4";
import aboutusVideo1 from "../../assets/video/about-us1.mp4";
import welcomeVideo_Banner from "../../assets/video/welcome_video_banner.jpg";
import teamVideo_banner from "../../assets/video/team_video_banner.jpg";

const About = () => {
  // State for animations and interactions
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0,
  });
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for animations and intersection observer
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const clientsRef = useRef(null);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const canvasRef = useRef(null);
  const statValueRefs = {
    clients: useRef(null),
    projects: useRef(null),
    countries: useRef(null),
    satisfaction: useRef(null),
  };

  // Client logos - replace with your actual client logos
  const clients = [
    { name: "Client 1", industry: "Technology" },
    { name: "Client 2", industry: "Healthcare" },
    { name: "Client 3", industry: "Finance" },
    { name: "Client 4", industry: "Education" },
    { name: "Client 5", industry: "E-commerce" },
    { name: "Client 6", industry: "Manufacturing" },
  ];

  // Services with icons
  const services = [
    {
      name: "Web & Mobile Development",
      icon: <Code className="service-icon-svg" />,
      description:
        "Creating responsive websites and feature-rich mobile applications that engage users and drive business growth.",
      features: [
        "Responsive Design",
        "Cross-platform Apps",
        "Progressive Web Apps",
      ],
    },
    {
      name: "Desktop Applications",
      icon: <Monitor className="service-icon-svg" />,
      description:
        "Building robust software solutions that streamline processes and improve productivity for businesses.",
      features: ["Cross-platform", "High Performance", "Custom Solutions"],
    },
    {
      name: "SEO & Digital Marketing",
      icon: <TrendingUp className="service-icon-svg" />,
      description:
        "Boosting online visibility and improving search engine rankings through effective strategies.",
      features: ["Keyword Optimization", "Content Strategy", "Analytics"],
    },
    {
      name: "Graphics & UI/UX Design",
      icon: <Layers className="service-icon-svg" />,
      description:
        "Creating visually appealing designs that enhance brand identity and user experience.",
      features: ["Brand Identity", "User Experience", "Interface Design"],
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="service-icon-svg" />,
      description:
        "Protecting your digital assets with advanced security measures and penetration testing.",
      features: [
        "Penetration Testing",
        "Security Audits",
        "Vulnerability Assessment",
      ],
    },
  ];

  // Videos array for easy access
  const videos = [
    { src: welcomeVideo, poster: welcomeVideo_Banner },
    { src: aboutusVideo, poster: teamVideo_banner },
    { src: aboutusVideo1, poster: teamVideo_banner },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stats counter animation
  useEffect(() => {
    if (!isVisible) return;

    const finalStats = {
      clients: 200,
      projects: 500,
      countries: 30,
      satisfaction: 98,
    };

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const countUp = () => {
      const progress = frame / totalFrames;
      const easeOutQuad = progress * (2 - progress); // Easing function

      setStats({
        clients: Math.floor(easeOutQuad * finalStats.clients),
        projects: Math.floor(easeOutQuad * finalStats.projects),
        countries: Math.floor(easeOutQuad * finalStats.countries),
        satisfaction: Math.floor(easeOutQuad * finalStats.satisfaction),
      });

      if (frame < totalFrames) {
        frame++;
        requestAnimationFrame(countUp);
      }
    };

    requestAnimationFrame(countUp);
  }, [isVisible]);

  // Particle animation for background
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(237, 134, 82, ${Math.random() * 0.5 + 0.1})`,
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

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Gradient line
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(
              0,
              p1.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
            );
            gradient.addColorStop(
              1,
              p2.color.replace(")", ", " + 0.2 * (1 - distance / 100) + ")")
            );

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 * (1 - distance / 100);
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
  }, [isVisible]);

  // Video rotation effect
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, videos.length]);

  // Service rotation effect
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, services.length]);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this to the useEffect section that handles resize
  // Add this to the existing useEffect that handles resize or create a new one
  useEffect(() => {
    const updateVh = () => {
      // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Initial call
    updateVh();

    // Add event listener
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  // Add this to improve touch interaction for mobile devices
  // Add a new useEffect for touch interaction improvements
  useEffect(() => {
    const handleTouchStart = () => {
      // Add a class to the body when touch interaction starts
      document.body.classList.add("touch-interaction");
    };

    document.addEventListener("touchstart", handleTouchStart, { once: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  // Toggle mobile services menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render mobile services menu
  const renderMobileServicesMenu = () => {
    return (
      <div className={`mobile-services-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Our Services</h3>
          <button className="close-menu-btn" onClick={toggleMobileMenu}>
            <X className="close-icon" />
          </button>
        </div>
        <div className="mobile-menu-content">
          {services.map((service, index) => (
            <button
              key={index}
              className={`mobile-service-item ${
                activeService === index ? "active" : ""
              }`}
              onClick={() => {
                setActiveService(index);
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="mobile-service-icon">{service.icon}</div>
              <span>{service.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="about-section">
      {/* Background particles */}
      <canvas ref={canvasRef} className="particles-canvas"></canvas>

      {/* Scroll progress indicator */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>

      <div className="container">
        {/* Header section */}
        <div className="header-section">
          <div className={`badge ${isVisible ? "animate-in" : ""}`}>
            <span className="badge-dot"></span>
            WHO WE ARE
          </div>

          <h1 className={`title ${isVisible ? "animate-in" : ""}`}>
            welcome to the <span className="highlight">Revenue Rocket</span>
          </h1>

          <p className={`subtitle ${isVisible ? "animate-in" : ""}`}>
            A leading technology company specializing in innovative digital
            solutions
          </p>
        </div>

        <div className="content-grid">
          {/* Video Column */}
          <div className={`video-column ${isVisible ? "animate-in" : ""}`}>
            <div className="video-showcase">
              <div className="video-device-frame">
                <div className="device-header">
                  <div className="device-buttons">
                    <span className="device-button red"></span>
                    <span className="device-button yellow"></span>
                    <span className="device-button green"></span>
                  </div>
                  <div className="device-title">Revenue Rocket</div>
                  <div className="device-actions">
                    <span className="device-action"></span>
                  </div>
                </div>

                <div className="video-container-wrapper">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className={`video-container ${
                        currentVideoIndex === index ? "active" : ""
                      }`}
                    >
                      <video
                        ref={videoRefs[index]}
                        poster={video.poster}
                        autoPlay
                        muted
                        loop
                        src={video.src}
                        className="video-element"
                        title="the power of technology Revenue Rocket.com"
                      ></video>
                      <div className="video-overlay"></div>
                    </div>
                  ))}

                  <div className="video-frame-glow"></div>
                </div>
              </div>

              {/* Video navigation dots */}
              <div className="video-nav">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    className={`video-nav-dot ${
                      currentVideoIndex === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentVideoIndex(index)}
                    aria-label={`View video ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Stats section */}
            <div
              ref={statsRef}
              className={`stats-container ${isVisible ? "animate-in" : ""}`}
            >
              <div className="stats-grid">
                {[
                  {
                    value: stats.clients,
                    label: "Clients",
                    icon: <Users className="stats-icon" />,
                    suffix: "+",
                  },
                  {
                    value: stats.projects,
                    label: "Projects",
                    icon: <Layers className="stats-icon" />,
                    suffix: "+",
                  },
                  {
                    value: stats.countries,
                    label: "Countries",
                    icon: <Globe className="stats-icon" />,
                    suffix: "+",
                  },
                  {
                    value: stats.satisfaction,
                    label: "Satisfaction",
                    icon: <Heart className="stats-icon" />,
                    suffix: "%",
                  },
                ].map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon-container">{stat.icon}</div>
                    <div
                      className="stat-value"
                      ref={statValueRefs[Object.keys(stats)[index]]}
                    >
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-suffix">{stat.suffix}</span>
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`content-column ${isVisible ? "animate-in" : ""}`}>
            {/* Tabs navigation */}
            <div className="tabs-container">
              <div className="tabs-header">
                {["About Us", "Services", "Clients"].map((tab, index) => (
                  <button
                    key={index}
                    className={`tab-button ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                    {activeTab === index && (
                      <div className="tab-indicator"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="tab-content">
                {/* About Us Tab */}
                <div className={`tab-pane ${activeTab === 0 ? "active" : ""}`}>
                  <div
                    className={`text-content ${isExpanded ? "expanded" : ""}`}
                  >
                    <p>
                      Revenue Rocket is a leading technology company that
                      specializes in web and mobile app development, desktop
                      application development, SEO, graphics design, penetration
                      testing, and more. With a focus on innovation and client
                      satisfaction, we provide tailored solutions to businesses
                      of all sizes. Our web and mobile app development services
                      combine creativity and functionality to deliver
                      user-friendly experiences across platforms. We excel in
                      building responsive websites and feature-rich mobile apps
                      that engage users and drive business growth. In the realm
                      of desktop application development, we create robust
                      software solutions that streamline processes and improve
                      productivity. Our team of skilled developers uses
                      cutting-edge technologies to deliver customized
                      applications that meet specific business requirements.
                    </p>
                    <p>
                      Revenue Rocket also offers SEO services to boost online
                      visibility and improve search engine rankings. We employ
                      effective strategies, including keyword research, content
                      optimization, and performance tracking, to drive organic
                      traffic and increase brand visibility. With our graphics
                      design expertise, we create visually appealing designs
                      that enhance brand identity. From logos and branding
                      materials to UI/UX design, we craft compelling visuals
                      that leave a lasting impression on customers.
                      Additionally, our penetration testing services ensure the
                      security of systems and networks. We identify
                      vulnerabilities and provide recommendations to fortify
                      digital assets against potential cyber threats. Revenue
                      Rocket is dedicated to delivering high-quality solutions
                      that empower businesses to thrive in the digital
                      landscape. With our diverse range of services, we are your
                      trusted partner for all your technology needs.
                    </p>
                  </div>

                  <button
                    className="expand-button"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="icon" />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown className="icon" />
                      </>
                    )}
                  </button>
                </div>

                {/* Services Tab */}
                <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
                  <div className="services-showcase">
                    {/* Mobile Services Menu Button */}
                    {isMobile && (
                      <button
                        className="mobile-services-toggle"
                        onClick={toggleMobileMenu}
                      >
                        <span>Select Service</span>
                        <span className="current-service">
                          {services[activeService].name}
                        </span>
                        <Menu className="menu-icon" />
                      </button>
                    )}

                    {/* Desktop Services Navigation */}
                    {!isMobile && (
                      <div className="services-nav">
                        {services.map((service, index) => (
                          <button
                            key={index}
                            className={`service-nav-item ${
                              activeService === index ? "active" : ""
                            }`}
                            onClick={() => setActiveService(index)}
                          >
                            <div className="service-nav-icon">
                              {service.icon}
                            </div>
                            <span className="service-nav-text">
                              {service.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="service-content">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className={`service-detail ${
                            activeService === index ? "active" : ""
                          }`}
                        >
                          <div className="service-header">
                            <div className="service-icon-large">
                              {service.icon}
                            </div>
                            <h3 className="service-title">{service.name}</h3>
                          </div>
                          <p className="service-description">
                            {service.description}
                          </p>
                          <ul className="service-features">
                            {service.features.map((feature, i) => (
                              <li key={i} className="service-feature">
                                <CheckCircle className="feature-icon" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clients Tab */}
                <div className={`tab-pane ${activeTab === 2 ? "active" : ""}`}>
                  <div ref={clientsRef} className="clients-grid">
                    {clients.map((client, index) => (
                      <div key={index} className="client-card">
                        <div className="client-logo">
                          <Award className="client-icon" />
                        </div>
                        <h3 className="client-name">{client.name}</h3>
                        <p className="client-industry">{client.industry}</p>
                        <div className="client-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="rating-star" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <NavLink to="/about" className="cta-button">
                <span className="cta-text">Read More</span>
                <ArrowRight className="cta-icon" />
              </NavLink>

              {/* <div className="devices-supported">
                <div className="device-icon-container">
                  <Monitor className="device-icon" />
                </div>
                <div className="device-icon-container">
                  <Tablet className="device-icon" />
                </div>
                <div className="device-icon-container">
                  <Smartphone className="device-icon" />
                </div>
                <span className="devices-text">Multi-device Support</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Services Menu (Overlay) */}
      {isMobile && renderMobileServicesMenu()}

      {/* CSS Styles */}
      <style jsx>{`
        /* Base Variables */
        :root {
          --primary-dark: #0a0e17;
          --primary-darker: #070a10;
          --primary-light: #1a2030;
          --primary-lighter: #2a3045;
          --primary-accent: #ed8652;
          --primary-accent-light: #ff9b6a;
          --primary-accent-dark: #d97745;
          --secondary-accent: #05d9e8;
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --text-tertiary: rgba(255, 255, 255, 0.5);
          --border-color: rgba(255, 255, 255, 0.1);
          --border-color-accent: rgba(237, 134, 82, 0.3);
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1);
          --shadow-accent: 0 10px 25px rgba(237, 134, 82, 0.2);
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 16px;
          --radius-xl: 24px;
          --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          --vh: 1vh;
        }

        /* Base Styles */
        .about-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(
            135deg,
            var(--primary-dark) 0%,
            var(--primary-light) 100%
          );
          color: var(--text-primary);
          overflow: hidden;
          font-family: var(--font-sans);
        }

        .particles-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.7;
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(
            to right,
            var(--primary-accent),
            var(--primary-accent-light)
          );
          z-index: 1000;
          transition: width 0.1s;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Header Section */
        .header-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.15) 0%,
            rgba(255, 155, 106, 0.1) 100%
          );
          color: var(--primary-accent);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 50px;
          margin-bottom: 1rem;
          box-shadow: 0 5px 15px rgba(237, 134, 82, 0.1);
          border: 1px solid rgba(237, 134, 82, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--transition-medium);
        }

        .badge.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--primary-accent);
          border-radius: 50%;
          margin-right: 8px;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-transform: capitalize;
          background: linear-gradient(
            135deg,
            var(--text-primary) 0%,
            rgba(255, 255, 255, 0.8) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--transition-medium);
          transition-delay: 0.1s;
        }

        .title.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--transition-medium);
          transition-delay: 0.2s;
        }

        .subtitle.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight {
          color: var(--primary-accent);
          position: relative;
          -webkit-text-fill-color: var(--primary-accent);
          text-shadow: 0 0 10px rgba(237, 134, 82, 0.3);
        }

        .highlight::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--primary-accent),
            transparent
          );
          opacity: 0.7;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 4rem;
          }
        }

        /* Video Column */
        .video-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all var(--transition-medium);
          transition-delay: 0.3s;
        }

        .video-column.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .video-showcase {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          background-color: var(--primary-light);
          border: 1px solid var(--border-color);
        }

        .video-device-frame {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
          background-color: var(--primary-darker);
        }

        .device-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background-color: var(--primary-darker);
          border-bottom: 1px solid var(--border-color);
        }

        .device-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .device-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .device-button.red {
          background-color: #ff5f57;
        }

        .device-button.yellow {
          background-color: #ffbd2e;
        }

        .device-button.green {
          background-color: #28c940;
        }

        .device-title {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .device-actions {
          width: 12px;
        }

        .video-container-wrapper {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(1.05);
          transition: all var(--transition-slow);
          z-index: 1;
        }

        .video-container.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(10, 14, 23, 0.2),
            rgba(10, 14, 23, 0.6)
          );
          pointer-events: none;
        }

        .video-frame-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid var(--primary-accent);
          box-shadow: 0 0 20px rgba(237, 134, 82, 0.3);
          pointer-events: none;
          opacity: 0.5;
          z-index: 3;
        }

        .video-nav {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 10;
        }

        .video-nav-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .video-nav-dot.active {
          background-color: var(--primary-accent);
          transform: scale(1.2);
        }

        /* Stats Container */
        .stats-container {
          background-color: rgba(26, 32, 48, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all var(--transition-medium);
          transition-delay: 0.5s;
        }

        .stats-container.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.1) 0%,
            transparent 100%
          );
          pointer-events: none;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
          padding: 1rem 0.5rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .stat-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          transform: translateY(-5px);
        }

        .stat-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 12px;
          margin-bottom: 0.75rem;
          color: var(--primary-accent);
          transition: all var(--transition-fast);
        }

        .stat-item:hover .stat-icon-container {
          transform: scale(1.1);
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.3) 0%,
            rgba(237, 134, 82, 0.2) 100%
          );
        }

        .stats-icon {
          width: 24px;
          height: 24px;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-accent);
          margin-bottom: 0.25rem;
          text-shadow: 0 0 10px rgba(237, 134, 82, 0.3);
          display: flex;
          align-items: center;
        }

        .stat-number {
          background: linear-gradient(
            135deg,
            var(--primary-accent) 0%,
            var(--primary-accent-light) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-suffix {
          font-size: 1.25rem;
          margin-left: 2px;
          color: var(--primary-accent-light);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Content Column */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all var(--transition-medium);
          transition-delay: 0.4s;
        }

        .content-column.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tabs */
        .tabs-container {
          background-color: rgba(26, 32, 48, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          position: relative;
        }

        .tabs-container::before {
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
        }

        .tabs-header {
          display: flex;

          position: relative;
          z-index: 1;
        }

        .tab-button {
          flex: 1;
          padding: 1rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
        }

        .tab-button:hover {
          color: var(--text-primary);
          background-color: rgba(255, 255, 255, 0.05);
        }

        .tab-button.active {
          color: var(--text-primary);
        }

        .tab-indicator {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-accent),
            var(--primary-accent-light)
          );
          border-radius: 3px 3px 0 0;
        }

        .tab-content {
          padding: 2rem;
          position: relative;
          z-index: 1;
          min-height: 300px;
        }

        .tab-pane {
          display: none;
        }

        .tab-pane.active {
          display: block;
        }

        /* Text Content */
        .text-content {
          max-height: 200px;
          overflow: hidden;
          transition: max-height var(--transition-slow);
        }

        .text-content.expanded {
          max-height: 1000px;
        }

        .text-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .expand-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--primary-accent);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.5rem 0;
          margin-top: 1rem;
          transition: color var(--transition-fast);
        }

        .expand-button:hover {
          color: var(--primary-accent-light);
        }

        .expand-button .icon {
          width: 16px;
          height: 16px;
          transition: transform var(--transition-fast);
        }

        /* Services Showcase */
        .services-showcase {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .services-showcase {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .services-nav {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          gap: 1rem;
          padding-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .services-nav {
            flex-direction: column;
            min-width: 200px;
            overflow-x: visible;
          }
        }

        .service-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
          min-width: max-content;
        }

        .service-nav-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--border-color-accent);
        }

        .service-nav-item.active {
          background-color: rgba(237, 134, 82, 0.1);
          border-color: var(--border-color-accent);
          color: var(--text-primary);
        }

        .service-nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: var(--primary-accent);
        }

        .service-content {
          flex: 1;
          position: relative;
          min-height: 250px;
        }

        .service-detail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: translateX(20px);
          transition: all var(--transition-medium);
          pointer-events: none;
        }

        .service-detail.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon-large {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 16px;
          color: var(--primary-accent);
        }

        .service-icon-svg {
          width: 30px;
          height: 30px;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .service-description {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .service-features {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }

        .feature-icon {
          width: 18px;
          height: 18px;
          color: var(--primary-accent);
        }

        /* Mobile Services Toggle and Menu */
        .mobile-services-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color-accent);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          margin-left: -0.1rem;
          margin-bottom: 1.5rem;
          transition: all var(--transition-fast);
        }

        .mobile-services-toggle:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .current-service {
          color: var(--primary-accent);
          font-weight: 600;
          margin: 0 0.5rem;
        }

        .menu-icon {
          width: 20px;
          height: 20px;
          color: var(--primary-accent);
        }

        .mobile-services-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(7, 10, 16, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          transform: translateY(100%);
          transition: transform var(--transition-medium);
          overflow-y: auto;
        }

        .mobile-services-menu.open {
          transform: translateY(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-menu-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .close-menu-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-icon {
          width: 24px;
          height: 24px;
          transition: color var(--transition-fast);
        }

        .close-menu-btn:hover .close-icon {
          color: var(--text-primary);
        }

        .mobile-menu-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-service-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .mobile-service-item.active {
          background-color: rgba(237, 134, 82, 0.1);
          border-color: var(--border-color-accent);
          color: var(--text-primary);
        }

        .mobile-service-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--border-color-accent);
        }

        .mobile-service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--primary-accent);
        }

        /* Clients Grid */
        .clients-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .clients-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .client-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          transition: all var(--transition-medium);
          position: relative;
          overflow: hidden;
        }

        .client-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--border-color-accent);
          transform: translateY(-5px);
        }

        .client-logo {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 16px;
          margin-bottom: 1rem;
          color: var(--primary-accent);
          transition: all var(--transition-fast);
        }

        .client-card:hover .client-logo {
          transform: scale(1.1);
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.3) 0%,
            rgba(237, 134, 82, 0.2) 100%
          );
        }

        .client-icon {
          width: 30px;
          height: 30px;
        }

        .client-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .client-industry {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .client-rating {
          display: flex;
          gap: 0.25rem;
          color: #ffb400;
        }

        .rating-star {
          width: 16px;
          height: 16px;
        }

        /* CTA Section */
        .cta-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        @media (min-width: 768px) {
          .cta-section {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.75rem;
          background: linear-gradient(
            135deg,
            var(--primary-accent) 0%,
            var(--primary-accent-light) 100%
          );
          color: var(--primary-darker);
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all var(--transition-medium);
          text-decoration: none;
          box-shadow: var(--shadow-accent);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
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

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(237, 134, 82, 0.4);
        }

        .cta-text {
          position: relative;
          z-index: 1;
        }

        .cta-icon {
          width: 18px;
          height: 18px;
          position: relative;
          z-index: 1;
          transition: transform var(--transition-fast);
        }

        .cta-button:hover .cta-icon {
          transform: translateX(3px);
        }

        .devices-supported {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }

        .device-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .device-icon-container:hover {
          background-color: rgba(237, 134, 82, 0.1);
          color: var(--primary-accent);
          transform: translateY(-2px);
        }

        .device-icon {
          width: 16px;
          height: 16px;
        }

        .devices-text {
          font-size: 0.875rem;
        }

        /* Awards Section */
        .awards-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all var(--transition-medium);
          transition-delay: 0.6s;
        }

        .awards-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .awards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .award-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          transition: all var(--transition-medium);
        }

        .award-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: var(--border-color-accent);
          transform: translateY(-5px);
        }

        .award-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 20px;
          margin-bottom: 1.5rem;
          color: var(--primary-accent);
          transition: all var(--transition-fast);
        }

        .award-card:hover .award-icon-container {
          transform: scale(1.1);
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.3) 0%,
            rgba(237, 134, 82, 0.2) 100%
          );
        }

        .award-icon {
          width: 35px;
          height: 35px;
        }

        .award-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .award-year {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .container {
            max-width: 100%;
            padding: 0 2rem;
          }

          .title {
            font-size: 2.25rem;
          }

          .service-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .about-section {
            padding: 5rem 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .video-column {
            order: 1;
          }

          .content-column {
            order: 2;
          }

          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0 3rem;
          }

          .header-section {
            margin-bottom: 2.5rem;
          }

          .title {
            font-size: 1.875rem;
          }

          .subtitle {
            font-size: 1rem;
            max-width: 100%;
          }

          .tab-content {
            padding: 1.5rem;
            min-height: 250px;
          }

          .services-showcase {
            flex-direction: column;
            gap: 1.5rem;
          }

          .service-nav-item {
            padding: 0.625rem 0.875rem;
            font-size: 0.8125rem;
          }

          .service-nav-icon {
            width: 28px;
            height: 28px;
          }

          .service-icon-large {
            width: 50px;
            height: 50px;
          }

          .service-icon-svg {
            width: 24px;
            height: 24px;
          }

          .service-title {
            font-size: 1.25rem;
          }

          .service-description {
            font-size: 0.9375rem;
          }

          .service-features {
            grid-template-columns: 1fr;
          }

          .cta-section {
            flex-direction: column;
            gap: 1.25rem;
            align-items: flex-start;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }

          .devices-supported {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .about-section {
            padding: 3rem 0 2rem;
          }

          .container {
            padding: 0 1.25rem;
          }

          .header-section {
            margin-bottom: 2rem;
          }

          .badge {
            padding: 0.375rem 0.75rem;
            font-size: 0.6875rem;
          }

          .title {
            font-size: 1.625rem;
            margin-bottom: 0.75rem;
          }

          .subtitle {
            font-size: 0.9375rem;
          }

          .video-showcase {
            margin: 0 -0.5rem;
            width: calc(100% + 1rem);
          }

          .device-header {
            padding: 0.5rem 0.75rem;
          }

          .device-button {
            width: 10px;
            height: 10px;
          }

          .device-title {
            font-size: 0.75rem;
          }

          .video-nav-dot {
            width: 8px;
            height: 8px;
          }

          .stats-container {
            padding: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-item {
            padding: 0.75rem 0.375rem;
          }

          .stat-icon-container {
            width: 40px;
            height: 40px;
            margin-bottom: 0.5rem;
          }

          .stats-icon {
            width: 20px;
            height: 20px;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .stat-suffix {
            font-size: 0.875rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }

          .tabs-header {
            flex-wrap: wrap;
          }

          .tab-button {
            padding: 0.75rem 0.5rem;
            font-size: 0.875rem;
          }

          .tab-content {
            padding: 1.25rem;
            min-height: 200px;
          }

          .text-content {
            max-height: 150px;
          }

          .text-content p {
            font-size: 0.9375rem;
            margin-bottom: 1.25rem;
          }

          .expand-button {
            font-size: 0.8125rem;
          }

          .service-detail {
            min-height: 300px;
            position: relative;
            opacity: 1;
            transform: none;
            display: none;
          }

          .service-detail.active {
            display: block;
          }

          .service-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .service-feature {
            font-size: 0.875rem;
          }

          .clients-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .client-card {
            padding: 1.25rem;
          }

          .client-logo {
            width: 50px;
            height: 50px;
            margin-bottom: 0.75rem;
          }

          .client-icon {
            width: 25px;
            height: 25px;
          }

          .client-name {
            font-size: 1rem;
          }

          .client-industry {
            font-size: 0.8125rem;
            margin-bottom: 0.75rem;
          }

          .rating-star {
            width: 14px;
            height: 14px;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .section-subtitle {
            font-size: 0.9375rem;
          }

          .awards-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 375px) {
          .about-section {
            padding: 2.5rem 0 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }

          .title {
            font-size: 1.5rem;
          }

          .badge {
            padding: 0.3125rem 0.625rem;
            font-size: 0.625rem;
          }

          .subtitle {
            font-size: 0.875rem;
          }

          .stat-value {
            font-size: 1.25rem;
          }

          .stat-suffix {
            font-size: 0.75rem;
          }

          .tab-button {
            padding: 0.625rem 0.375rem;
            font-size: 0.8125rem;
          }

          .service-nav-item {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }

          .service-nav-icon {
            width: 24px;
            height: 24px;
          }

          .service-title {
            font-size: 1.125rem;
          }

          .service-description {
            font-size: 0.875rem;
          }
        }

        /* Add touch-specific optimizations */
        @media (hover: none) {
          .stat-item:hover {
            transform: none;
          }

          .stat-item:active {
            transform: translateY(-3px);
          }

          .client-card:hover {
            transform: none;
          }

          .client-card:active {
            transform: translateY(-3px);
          }

          .award-card:hover {
            transform: none;
          }

          .award-card:active {
            transform: translateY(-3px);
          }

          .cta-button:hover {
            transform: none;
          }

          .cta-button:active {
            transform: translateY(-2px);
          }

          .service-nav-item:hover {
            background-color: transparent;
          }

          .device-icon-container:hover {
            transform: none;
          }

          .device-icon-container:active {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
