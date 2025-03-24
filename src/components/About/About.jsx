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
import welcomeVideo from "../../assets/video/welcome-plants.mp4";
import aboutusVideo from "../../assets/video/about-us.mp4";
import aboutusVideo1 from "../../assets/video/about-us1.mp4";
import welcomeVideo_Banner from "../../assets/video/welcome_video_banner.jpg";
import teamVideo_banner from "../../assets/video/team_video_banner.jpg";

const About = () => {
  // State management
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [neuralNetworkActive, setNeuralNetworkActive] = useState(false);

  // Refs
  const sectionRef = useRef(null);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const neuralNetworkRef = useRef(null);
  const timelineRef = useRef(null);

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

            // Start neural network animation after section becomes visible
            setTimeout(() => {
              setNeuralNetworkActive(true);
            }, 1000);

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

  // Animation progress timeline
  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const duration = 3000; // 3 seconds for full animation

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  // Video rotation effect with 3D transforms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Quantum particle effect
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

    // Advanced particle system
    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        baseColor:
          Math.random() > 0.5
            ? `hsl(${Math.random() * 60 + 20}, 100%, 70%)`
            : `hsl(${Math.random() * 60 + 180}, 100%, 70%)`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * 0.02 + 0.01,
        pulseFactor: 0,
        connectionDistance: 100,
      });
    }

    const drawParticles = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update mouse-influenced area
      const mouseX = mousePosition.x * canvas.width;
      const mouseY = mousePosition.y * canvas.height;

      // Draw connections first (behind particles)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < p1.connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Gradient connections
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(
              0,
              p1.baseColor.replace(")", `, ${p1.opacity * 0.3})`)
            );
            gradient.addColorStop(
              1,
              p2.baseColor.replace(")", `, ${p2.opacity * 0.3})`)
            );

            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        // Pulse effect
        particle.pulseFactor = (Math.sin(timestamp * particle.pulse) + 1) / 2;
        const currentRadius =
          particle.radius * (1 + particle.pulseFactor * 0.5);

        // Mouse influence
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.2;
          particle.x += (dx / distance) * force;
          particle.y += (dy / distance) * force;
        }

        // Draw glow
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          currentRadius * 4
        );
        glow.addColorStop(
          0,
          particle.baseColor.replace(")", `, ${particle.opacity * 0.5})`)
        );
        glow.addColorStop(1, particle.baseColor.replace(")", ", 0)"));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
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
  }, [isVisible, mousePosition]);

  // Neural network visualization
  useEffect(() => {
    if (!neuralNetworkActive || !neuralNetworkRef.current) return;

    const canvas = neuralNetworkRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create neural network nodes
    const layers = [4, 8, 8, 4]; // Number of nodes in each layer
    const nodes = [];
    const connections = [];

    // Create nodes
    let xOffset = 0;
    layers.forEach((nodeCount, layerIndex) => {
      const layerWidth = canvas.width / (layers.length + 1);
      xOffset += layerWidth;

      for (let i = 0; i < nodeCount; i++) {
        const y = (canvas.height * (i + 1)) / (nodeCount + 1);
        nodes.push({
          x: xOffset,
          y,
          radius: 4,
          layer: layerIndex,
          activation: 0,
          targetActivation: 0,
          activationSpeed: 0.05 + Math.random() * 0.1,
        });
      }
    });

    // Create connections between layers
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayerNodes = nodes.filter((node) => node.layer === l);
      const nextLayerNodes = nodes.filter((node) => node.layer === l + 1);

      currentLayerNodes.forEach((startNode) => {
        nextLayerNodes.forEach((endNode) => {
          connections.push({
            startNode,
            endNode,
            weight: Math.random(),
            pulsePosition: 0,
            pulseSpeed: 0.02 + Math.random() * 0.03,
            active: false,
          });
        });
      });
    }

    // Animation function
    const drawNeuralNetwork = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Randomly activate input nodes
      if (Math.random() < 0.05) {
        const inputNodes = nodes.filter((node) => node.layer === 0);
        const randomNode =
          inputNodes[Math.floor(Math.random() * inputNodes.length)];
        randomNode.targetActivation = 1;

        // Find connections from this node
        connections
          .filter((conn) => conn.startNode === randomNode)
          .forEach((conn) => {
            conn.active = true;
          });
      }

      // Update node activations
      nodes.forEach((node) => {
        if (node.activation < node.targetActivation) {
          node.activation += node.activationSpeed;
          if (node.activation >= node.targetActivation) {
            node.activation = node.targetActivation;

            // If fully activated and not output layer, activate connections
            if (node.activation === 1 && node.layer < layers.length - 1) {
              connections
                .filter((conn) => conn.startNode === node)
                .forEach((conn) => {
                  conn.active = true;
                });
            }

            // Start decay
            if (node.targetActivation === 1) {
              node.targetActivation = 0;
            }
          }
        } else if (node.activation > node.targetActivation) {
          node.activation -= node.activationSpeed / 2; // Slower decay
          if (node.activation <= node.targetActivation) {
            node.activation = node.targetActivation;
          }
        }
      });

      // Draw connections
      connections.forEach((conn) => {
        // Update pulse
        if (conn.active) {
          conn.pulsePosition += conn.pulseSpeed;
          if (conn.pulsePosition > 1) {
            conn.pulsePosition = 0;
            conn.active = false;

            // Activate the target node
            conn.endNode.targetActivation = 1;
          }
        }

        // Draw connection line
        ctx.beginPath();
        ctx.moveTo(conn.startNode.x, conn.startNode.y);
        ctx.lineTo(conn.endNode.x, conn.endNode.y);

        const alpha = 0.1 + conn.weight * 0.2;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 0.5 + conn.weight;
        ctx.stroke();

        // Draw pulse if active
        if (conn.active) {
          const pulseX =
            conn.startNode.x +
            (conn.endNode.x - conn.startNode.x) * conn.pulsePosition;
          const pulseY =
            conn.startNode.y +
            (conn.endNode.y - conn.startNode.y) * conn.pulsePosition;

          const gradient = ctx.createRadialGradient(
            pulseX,
            pulseY,
            0,
            pulseX,
            pulseY,
            5
          );
          gradient.addColorStop(0, "rgba(0, 255, 255, 0.8)");
          gradient.addColorStop(1, "rgba(0, 255, 255, 0)");

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 5, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        // Node glow
        if (node.activation > 0) {
          const gradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            node.radius * 4
          );

          const color =
            node.layer === 0 ? "rgba(237, 134, 82," : "rgba(0, 255, 255,";
          gradient.addColorStop(0, `${color} ${node.activation * 0.8})`);
          gradient.addColorStop(1, `${color} 0)`);

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        const color =
          node.layer === 0
            ? "rgb(237, 134, 82)"
            : node.layer === layers.length - 1
            ? "rgb(0, 255, 255)"
            : "rgb(255, 255, 255)";

        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawNeuralNetwork);
    };

    animationFrameId = requestAnimationFrame(drawNeuralNetwork);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [neuralNetworkActive]);

  // Timeline animation
  useEffect(() => {
    if (!isVisible || !timelineRef.current) return;

    const canvas = timelineRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Timeline data
    const milestones = [
      { year: 2023, label: "Foundation", progress: 0.1 },
      { year: 2025, label: "Expansion", progress: 0.25 },
      { year: 2030, label: "Global Reach", progress: 0.4 },
      { year: 2050, label: "Quantum Integration", progress: 0.6 },
      { year: 2100, label: "Neural Networks", progress: 0.75 },
      { year: 4000, label: "Future Vision", progress: 0.95 },
    ];

    const drawTimeline = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw main line
      const lineY = canvas.height / 2;
      const lineWidth = canvas.width * 0.8;
      const startX = canvas.width * 0.1;
      const endX = startX + lineWidth;

      // Timeline base
      ctx.beginPath();
      ctx.moveTo(startX, lineY);
      ctx.lineTo(endX, lineY);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Animated progress
      const progressX = startX + lineWidth * animationProgress;

      const gradient = ctx.createLinearGradient(
        startX,
        lineY,
        progressX,
        lineY
      );
      gradient.addColorStop(0, "rgba(237, 134, 82, 1)");
      gradient.addColorStop(1, "rgba(0, 255, 255, 1)");

      ctx.beginPath();
      ctx.moveTo(startX, lineY);
      ctx.lineTo(progressX, lineY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw milestones
      milestones.forEach((milestone, index) => {
        const x = startX + lineWidth * milestone.progress;
        const isActive = x <= progressX;

        // Node
        ctx.beginPath();
        ctx.arc(x, lineY, 8, 0, Math.PI * 2);
        ctx.fillStyle = isActive
          ? "rgb(0, 255, 255)"
          : "rgba(255, 255, 255, 0.5)";
        ctx.fill();

        if (isActive) {
          // Glow effect
          const glow = ctx.createRadialGradient(x, lineY, 0, x, lineY, 20);
          glow.addColorStop(0, "rgba(0, 255, 255, 0.5)");
          glow.addColorStop(1, "rgba(0, 255, 255, 0)");

          ctx.beginPath();
          ctx.arc(x, lineY, 20, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Year
        ctx.font = '14px "Rajdhani", sans-serif';
        ctx.textAlign = "center";
        ctx.fillStyle = isActive
          ? "rgb(0, 255, 255)"
          : "rgba(255, 255, 255, 0.7)";
        ctx.fillText(milestone.year.toString(), x, lineY - 20);

        // Label
        ctx.font = '12px "Rajdhani", sans-serif';
        ctx.fillStyle = isActive
          ? "rgb(255, 255, 255)"
          : "rgba(255, 255, 255, 0.5)";
        ctx.fillText(milestone.label, x, lineY + 25);
      });
    };

    let animationFrameId;
    const animate = () => {
      drawTimeline();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, animationProgress]);

  // Handle video hover states
  const handleVideoHover = (index, isHovering) => {
    setHoverStates((prev) => {
      const newState = [...prev];
      newState[index] = isHovering;
      return newState;
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`hyperspace-about-section ${isVisible ? "visible" : ""}`}
    >
      {/* Quantum particle background */}
      <canvas ref={canvasRef} className="quantum-particles"></canvas>

      <div className="hyperspace-container">
        <div className="hyperspace-grid">
          <div className="hyperspace-video-column">
            <div className="hyperspace-video-wrapper">
              {[welcomeVideo, aboutusVideo, aboutusVideo1].map(
                (video, index) => (
                  <div
                    key={index}
                    ref={videoRefs[index]}
                    className={`hyperspace-video-container ${
                      activeVideo === index ? "active" : ""
                    } ${hoverStates[index] ? "hovered" : ""}`}
                    onMouseEnter={() => handleVideoHover(index, true)}
                    onMouseLeave={() => handleVideoHover(index, false)}
                    style={{
                      transform: `
                      translateZ(${activeVideo === index ? "0px" : "-100px"}) 
                      rotateX(${activeVideo === index ? "0deg" : "10deg"}) 
                      rotateY(${activeVideo === index ? "0deg" : "-10deg"})
                      scale(${activeVideo === index ? "1" : "0.9"})
                    `,
                    }}
                  >
                    <div className="hyperspace-video-hologram">
                      <video
                        poster={
                          index === 0 ? welcomeVideo_Banner : teamVideo_banner
                        }
                        autoPlay
                        muted
                        loop
                        src={video}
                        className="hyperspace-video"
                        title="the power of technology Revenue Rocket.com"
                      ></video>

                      <div className="hyperspace-video-overlay"></div>
                      <div className="hyperspace-video-glow"></div>

                      {/* Scanning effects */}
                      <div className="hyperspace-video-scan-line"></div>
                      <div className="hyperspace-video-scan-line horizontal"></div>

                      {/* Holographic corners */}
                      <div className="hyperspace-video-corner top-left"></div>
                      <div className="hyperspace-video-corner top-right"></div>
                      <div className="hyperspace-video-corner bottom-left"></div>
                      <div className="hyperspace-video-corner bottom-right"></div>

                      {/* Data visualization overlay */}
                      <div className="hyperspace-video-data">
                        <div className="data-line"></div>
                        <div className="data-line"></div>
                        <div className="data-line"></div>
                        <div className="data-point"></div>
                        <div className="data-point"></div>
                        <div className="data-circle"></div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Neural network visualization */}
            <div className="neural-network-container">
              <canvas
                ref={neuralNetworkRef}
                className="neural-network-canvas"
              ></canvas>
              <div className="neural-network-label">
                Neural Network Analysis
              </div>
            </div>
          </div>

          <div className="hyperspace-content-column">
            <div ref={textRef} className="hyperspace-content">
              {/* Floating elements */}
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>

              <div className="hyperspace-title-container">
                <div className="hyperspace-badge">
                  <span className="hyperspace-badge-text">WHO WE ARE</span>
                  <div className="hyperspace-badge-glow"></div>
                </div>

                <h2 className="hyperspace-title">
                  WELCOME TO THE
                  <span className="hyperspace-highlight"> REVENUE ROCKET</span>
                </h2>

                <div className="hyperspace-title-underline"></div>
              </div>

              <div className="hyperspace-text-container">
                <div
                  className={`hyperspace-text-wrapper ${
                    isTextExpanded ? "expanded" : ""
                  }`}
                >
                  <p className="hyperspace-text">
                    Revenue Rocket is a leading technology company that
                    specializes in web and mobile app development, desktop
                    application development, SEO, graphics design, penetration
                    testing, and more. With a focus on innovation and client
                    satisfaction, we provide tailored solutions to businesses of
                    all sizes. Our web and mobile app development services
                    combine creativity and functionality to deliver
                    user-friendly experiences across platforms. We excel in
                    building responsive websites and feature-rich mobile apps
                    that engage users and drive business growth. In the realm of
                    desktop application development, we create robust software
                    solutions that streamline processes and improve
                    productivity. Our team of skilled developers uses
                    cutting-edge technologies to deliver customized applications
                    that meet specific business requirements.
                  </p>

                  <p className="hyperspace-text">
                    Revenue Rocket also offers SEO services to boost online
                    visibility and improve search engine rankings. We employ
                    effective strategies, including keyword research, content
                    optimization, and performance tracking, to drive organic
                    traffic and increase brand visibility. With our graphics
                    design expertise, we create visually appealing designs that
                    enhance brand identity. From logos and branding materials to
                    UI/UX design, we craft compelling visuals that leave a
                    lasting impression on customers. Additionally, our
                    penetration testing services ensure the security of systems
                    and networks. We identify vulnerabilities and provide
                    recommendations to fortify digital assets against potential
                    cyber threats. Lenexit is dedicated to delivering
                    high-quality solutions that empower businesses to thrive in
                    the digital landscape. With our diverse range of services,
                    we are your trusted partner for all your technology needs.
                  </p>
                </div>

                {/* Text expansion toggle */}
                <button
                  className="text-expand-toggle"
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                >
                  <span>{isTextExpanded ? "Show Less" : "Show More"}</span>
                  <div className="toggle-icon"></div>
                </button>
              </div>

              {/* Timeline visualization */}
              <div className="timeline-container">
                <h3 className="timeline-title">Our Evolution</h3>
                <canvas ref={timelineRef} className="timeline-canvas"></canvas>
              </div>

              <div className="hyperspace-cta-container">
                <NavLink to="/about" className="hyperspace-button">
                  <div className="button-background"></div>
                  <span className="hyperspace-button-text">EXPLORE MORE</span>
                  <div className="hyperspace-button-glow"></div>
                  <div className="hyperspace-button-particles"></div>
                  <div className="hyperspace-button-icon">
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
          </div>
        </div>
      </div>

      {/* Futuristic 4000 CSS Styles */}
      <style jsx>{`
        /* Base Variables */
        :root {
          --primary: #0a0e17;
          --secondary: #ed8652;
          --secondary-glow: rgba(237, 134, 82, 0.6);
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

        /* Hyperspace About Section */
        .hyperspace-about-section {
          position: relative;
          padding: 8rem 0;
          background: linear-gradient(135deg, #0a0e17 0%, #121a2c 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
          font-family: "Rajdhani", sans-serif;
        }

        .hyperspace-about-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hyperspace-about-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 20% 30%,
              rgba(237, 134, 82, 0.05) 0%,
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

        .hyperspace-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hyperspace-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 992px) {
          .hyperspace-grid {
            grid-template-columns: 1fr 1.5fr;
            gap: 3rem;
          }
        }

        /* Video Column */
        .hyperspace-video-column {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hyperspace-video-wrapper {
          position: relative;
          height: 500px;
          perspective: 1000px;
        }

        .hyperspace-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          opacity: 0;
          transform-style: preserve-3d;
          transition: all 1.2s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
        }

        .hyperspace-video-container.active {
          opacity: 1;
          z-index: 2;
        }

        .hyperspace-video-container:nth-child(1) {
          top: 0;
        }

        .hyperspace-video-container:nth-child(2) {
          top: 33%;
        }

        .hyperspace-video-container:nth-child(3) {
          top: 66%;
        }

        .hyperspace-video-container.hovered {
          transform: scale(1.05) translateZ(20px) !important;
          z-index: 3;
        }

        .hyperspace-video-hologram {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 15px var(--secondary-glow);
          transform-style: preserve-3d;
        }

        .hyperspace-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          transform: translateZ(0);
        }

        .hyperspace-video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(5, 217, 232, 0.2) 100%
          );
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .hyperspace-video-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            rgba(237, 134, 82, 0.2),
            transparent 70%
          );
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .hyperspace-video-container.hovered .hyperspace-video-glow {
          opacity: 1;
        }

        .hyperspace-video-scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--tertiary),
            transparent
          );
          box-shadow: 0 0 10px var(--tertiary-glow);
          animation: scanLine 4s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .hyperspace-video-scan-line.horizontal {
          width: 2px;
          height: 100%;
          animation: scanLineHorizontal 6s linear infinite;
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

        .hyperspace-video-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--secondary);
          z-index: 3;
          pointer-events: none;
        }

        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid;
          border-left: 2px solid;
        }

        .top-right {
          top: 0;
          right: 0;
          border-top: 2px solid;
          border-right: 2px solid;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid;
          border-left: 2px solid;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }

        /* Data visualization overlay */
        .hyperspace-video-data {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hyperspace-video-container.hovered .hyperspace-video-data {
          opacity: 1;
        }

        .data-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--tertiary),
            transparent
          );
          animation: dataLine 3s infinite alternate var(--easing-bounce);
        }

        .data-line:nth-child(1) {
          top: 20%;
          left: 10%;
          width: 30%;
        }

        .data-line:nth-child(2) {
          top: 40%;
          right: 10%;
          width: 40%;
        }

        .data-line:nth-child(3) {
          bottom: 30%;
          left: 20%;
          width: 50%;
        }

        .data-point {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--tertiary);
          box-shadow: 0 0 10px var(--tertiary-glow);
          animation: pulse 2s infinite alternate;
        }

        .data-point:nth-child(4) {
          top: 30%;
          right: 20%;
        }

        .data-point:nth-child(5) {
          bottom: 25%;
          left: 15%;
        }

        .data-circle {
          position: absolute;
          bottom: 20%;
          right: 20%;
          width: 40px;
          height: 40px;
          border: 1px solid var(--tertiary);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
        }

        .data-circle::before,
        .data-circle::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px dashed var(--tertiary);
          border-radius: 50%;
        }

        .data-circle::before {
          width: 60%;
          height: 60%;
        }

        .data-circle::after {
          width: 30%;
          height: 30%;
        }

        @keyframes dataLine {
          0% {
            transform: scaleX(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scaleX(1.2);
            opacity: 1;
          }
        }

        /* Neural Network Visualization */
        .neural-network-container {
          position: relative;
          width: 100%;
          height: 150px;
          margin-top: 1rem;
          background: rgba(10, 14, 23, 0.5);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
        }

        .neural-network-canvas {
          width: 100%;
          height: 100%;
        }

        .neural-network-label {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 0.75rem;
          color: var(--tertiary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Content Column */
        .hyperspace-content-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hyperspace-content {
          position: relative;
          padding: 2rem;
          background: rgba(10, 14, 23, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transform: translateZ(0);
        }

        .hyperspace-content::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            var(--glass-highlight) 0%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Floating Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          opacity: 0.3;
          animation: float 10s ease-in-out infinite;
        }

        .element-1 {
          top: 20%;
          left: 10%;
          width: 100px;
          height: 100px;
          border: 1px solid var(--tertiary);
          box-shadow: 0 0 20px rgba(5, 217, 232, 0.2);
        }

        .element-2 {
          top: 60%;
          right: 15%;
          width: 150px;
          height: 150px;
          border: 1px solid var(--quaternary);
          transform: rotate(45deg);
          animation-delay: 2s;
        }

        .element-3 {
          bottom: 10%;
          left: 30%;
          width: 80px;
          height: 80px;
          border: 1px solid var(--secondary);
          animation-delay: 4s;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .hyperspace-title-container {
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .hyperspace-badge {
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
          margin-bottom: 1rem;
          position: relative;
          overflow: hidden;
        }

        .hyperspace-badge-text {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--primary);
          position: relative;
          z-index: 1;
        }

        .hyperspace-badge-glow {
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

        .hyperspace-badge:hover .hyperspace-badge-glow {
          opacity: 1;
        }

        .hyperspace-title {
          font-size: 2.5rem;
          font-weight: 800;
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
          .hyperspace-title {
            font-size: 3rem;
          }
        }

        .hyperspace-highlight {
          color: var(--secondary);
          text-shadow: 0 0 10px var(--secondary-glow);
          position: relative;
          display: inline-block;
        }

        .hyperspace-highlight::after {
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

        .hyperspace-title-underline {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, var(--tertiary), transparent);
          margin-bottom: 2rem;
        }

        .hyperspace-text-container {
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .hyperspace-text-wrapper {
          max-height: 200px;
          overflow: hidden;
          transition: max-height 0.5s ease;
        }

        .hyperspace-text-wrapper.expanded {
          max-height: 1000px;
        }

        .hyperspace-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .hyperspace-text:last-child {
          margin-bottom: 0;
        }

        .text-expand-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--tertiary);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0.5rem;
          margin-top: 1rem;
          transition: all var(--transition-medium);
        }

        .text-expand-toggle:hover {
          color: var(--text);
        }

        .toggle-icon {
          width: 12px;
          height: 12px;
          border-right: 2px solid var(--tertiary);
          border-bottom: 2px solid var(--tertiary);
          transform: rotate(45deg);
          transition: transform var(--transition-medium);
        }

        .expanded ~ .text-expand-toggle .toggle-icon {
          transform: rotate(-135deg);
        }

        /* Timeline */
        .timeline-container {
          margin: 2rem 0;
          position: relative;
          z-index: 1;
        }

        .timeline-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--tertiary);
          margin-bottom: 1rem;
        }

        .timeline-canvas {
          width: 100%;
          height: 100px;
        }

        .hyperspace-cta-container {
          display: flex;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
        }

        .hyperspace-button {
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
            rgba(237, 134, 82, 0.8) 100%
          );
          border-radius: 30px;
          z-index: -1;
          transition: all var(--transition-medium);
        }

        .hyperspace-button-text {
          position: relative;
          z-index: 2;
          margin-right: 0.5rem;
        }

        .hyperspace-button-glow {
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

        .hyperspace-button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-medium);
        }

        .hyperspace-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2),
            0 0 15px var(--secondary-glow);
        }

        .hyperspace-button:hover .button-background {
          filter: brightness(1.2);
        }

        .hyperspace-button:hover .hyperspace-button-glow {
          opacity: 1;
          animation: pulse 2s infinite;
        }

        .hyperspace-button:hover .hyperspace-button-icon {
          transform: translateX(5px);
        }

        .hyperspace-button-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hyperspace-button-particles::before,
        .hyperspace-button-particles::after {
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

        .hyperspace-button-particles::before {
          left: -10px;
          animation: particleLeft 2s infinite;
        }

        .hyperspace-button-particles::after {
          right: -10px;
          animation: particleRight 2s infinite;
        }

        .hyperspace-button:hover .hyperspace-button-particles::before,
        .hyperspace-button:hover .hyperspace-button-particles::after {
          opacity: 1;
        }

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
          .hyperspace-video-container {
            position: relative;
            margin-bottom: 2rem;
            opacity: 1;
            transform: none !important;
          }

          .hyperspace-video-container:nth-child(1),
          .hyperspace-video-container:nth-child(2),
          .hyperspace-video-container:nth-child(3) {
            top: auto;
          }

          .hyperspace-video-container.active {
            transform: none !important;
          }

          .hyperspace-video-container.hovered {
            transform: scale(1.05) !important;
          }

          .hyperspace-video-wrapper {
            height: auto;
          }
        }

        @media (max-width: 768px) {
          .hyperspace-about-section {
            padding: 4rem 0;
          }

          .hyperspace-title {
            font-size: 2rem;
          }

          .hyperspace-text {
            font-size: 0.9rem;
          }
        }

        /* Prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hyperspace-video-scan-line,
          .hyperspace-button-particles::before,
          .hyperspace-button-particles::after,
          .floating-element,
          .data-line,
          .data-point,
          .data-circle {
            animation: none;
          }

          .hyperspace-about-section {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
