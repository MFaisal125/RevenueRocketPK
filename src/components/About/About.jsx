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
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   ArrowRight,
//   CheckCircle,
//   ChevronDown,
//   ChevronUp,
//   Globe,
//   Heart,
//   Layers,
//   Users,
// } from "lucide-react";
// import gsap from "gsap";
// import { motion, AnimatePresence } from "framer-motion";

// // Import your videos and images
// // These paths should match your actual asset locations
// import welcomeVideo from "../../assets/video/welcome-plants.mp4";
// import aboutusVideo from "../../assets/video/about-us.mp4";
// import aboutusVideo1 from "../../assets/video/about-us1.mp4";
// import welcomeVideo_Banner from "../../assets/video/welcome_video_banner.jpg";
// import teamVideo_banner from "../../assets/video/team_video_banner.jpg";

// const About = () => {
//   // State for animations and interactions
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [stats, setStats] = useState({
//     clients: 0,
//     projects: 0,
//     countries: 0,
//     satisfaction: 0,
//   });
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(null);

//   // Refs for animations and intersection observer
//   const sectionRef = useRef(null);
//   const statsRef = useRef(null);
//   const clientsRef = useRef(null);
//   const videoRefs = [useRef(null), useRef(null), useRef(null)];
//   const canvasRef = useRef(null);
//   const statValueRefs = {
//     clients: useRef(null),
//     projects: useRef(null),
//     countries: useRef(null),
//     satisfaction: useRef(null),
//   };

//   // Client logos - replace with your actual client logos
//   const clients = [
//     { name: "Client 1", industry: "Technology" },
//     { name: "Client 2", industry: "Healthcare" },
//     { name: "Client 3", industry: "Finance" },
//     { name: "Client 4", industry: "Education" },
//     { name: "Client 5", industry: "E-commerce" },
//     { name: "Client 6", industry: "Manufacturing" },
//   ];

//   // Services with icons
//   const services = [
//     {
//       name: "Web & Mobile Development",
//       icon: <Layers className="w-6 h-6 text-primary-accent" />,
//       description:
//         "Creating responsive websites and feature-rich mobile applications that engage users and drive business growth.",
//     },
//     {
//       name: "Desktop Applications",
//       icon: <Globe className="w-6 h-6 text-primary-accent" />,
//       description:
//         "Building robust software solutions that streamline processes and improve productivity for businesses.",
//     },
//     {
//       name: "SEO & Digital Marketing",
//       icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
//       description:
//         "Boosting online visibility and improving search engine rankings through effective strategies.",
//     },
//     {
//       name: "Graphics & UI/UX Design",
//       icon: <Heart className="w-6 h-6 text-primary-accent" />,
//       description:
//         "Creating visually appealing designs that enhance brand identity and user experience.",
//     },
//   ];

//   // Videos array for easy access
//   const videos = [
//     { src: welcomeVideo, poster: welcomeVideo_Banner },
//     { src: aboutusVideo, poster: teamVideo_banner },
//     { src: aboutusVideo1, poster: teamVideo_banner },
//   ];

//   // Animation variants for Framer Motion
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 25px rgba(0, 0, 0, 0.2)",
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   // Intersection Observer to trigger animations when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // GSAP Stats counter animation
//   useEffect(() => {
//     if (!isVisible || !statsRef.current) return;

//     const finalStats = {
//       clients: 200,
//       projects: 500,
//       countries: 30,
//       satisfaction: 98,
//     };

//     // Create GSAP timeline for smooth counting
//     const tl = gsap.timeline();

//     // Animate each stat with GSAP
//     Object.keys(finalStats).forEach((key) => {
//       if (statValueRefs[key].current) {
//         tl.to(
//           stats,
//           {
//             [key]: finalStats[key],
//             duration: 2,
//             ease: "power2.out",
//             onUpdate: () => {
//               setStats((prevStats) => ({
//                 ...prevStats,
//                 [key]: Math.round(gsap.getProperty(stats, key)),
//               }));
//             },
//           },
//           "<0.2"
//         ); // Slight stagger between animations
//       }
//     });

//     return () => {
//       tl.kill();
//     };
//   }, [isVisible]);

//   // Particle animation for background
//   useEffect(() => {
//     if (!canvasRef.current || !isVisible) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     // Create particles
//     const particles = [];
//     const particleCount = 50;

//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 2 + 1,
//         color: `rgba(237, 134, 82, ${Math.random() * 0.5 + 0.1})`,
//         speedX: Math.random() * 0.5 - 0.25,
//         speedY: Math.random() * 0.5 - 0.25,
//         // Add wave effect
//         amplitude: Math.random() * 2 + 1,
//         frequency: Math.random() * 0.02 + 0.01,
//         phase: Math.random() * Math.PI * 2,
//       });
//     }

//     // Animation loop
//     let animationFrameId;
//     let lastTime = 0;

//     const animate = (time) => {
//       const deltaTime = time - lastTime;
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

//   // Video rotation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // GSAP animation for client cards
//   useEffect(() => {
//     if (!isVisible || !clientsRef.current || activeTab !== 2) return;

//     const clientCards = clientsRef.current.querySelectorAll(".client-card");

//     gsap.fromTo(
//       clientCards,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.1,
//         duration: 0.6,
//         ease: "power2.out",
//       }
//     );
//   }, [isVisible, activeTab]);

//   return (
//     <motion.section
//       ref={sectionRef}
//       className="about-section"
//       initial="hidden"
//       animate={isVisible ? "visible" : "hidden"}
//       variants={containerVariants}
//     >
//       {/* Background particles */}
//       <canvas ref={canvasRef} className="particles-canvas"></canvas>

//       <div className="container">
//         <div className="content-grid">
//           {/* Video Column */}
//           <motion.div className="video-column" variants={itemVariants}>
//             <div className="video-showcase">
//               <AnimatePresence mode="wait">
//                 {videos.map(
//                   (video, index) =>
//                     currentVideoIndex === index && (
//                       <motion.div
//                         key={index}
//                         className="video-container active"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 1.1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                       >
//                         <video
//                           ref={videoRefs[index]}
//                           poster={video.poster}
//                           autoPlay
//                           muted
//                           loop
//                           src={video.src}
//                           className="video-element"
//                           title="the power of technology Revenue Rocket.com"
//                         ></video>
//                         <div className="video-overlay"></div>
//                         <motion.div
//                           className="video-frame"
//                           animate={{
//                             boxShadow: [
//                               "0 0 20px rgba(237, 134, 82, 0.3)",
//                               "0 0 30px rgba(237, 134, 82, 0.6)",
//                               "0 0 20px rgba(237, 134, 82, 0.3)",
//                             ],
//                           }}
//                           transition={{
//                             duration: 2,
//                             ease: "easeInOut",
//                             repeat: Number.POSITIVE_INFINITY,
//                             repeatType: "reverse",
//                           }}
//                         ></motion.div>
//                       </motion.div>
//                     )
//                 )}
//               </AnimatePresence>

//               {/* Video navigation dots */}
//               <div className="video-nav">
//                 {videos.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     className={`video-nav-dot ${
//                       currentVideoIndex === index ? "active" : ""
//                     }`}
//                     onClick={() => setCurrentVideoIndex(index)}
//                     aria-label={`View video ${index + 1}`}
//                     whileTap={{ scale: 0.9 }}
//                     animate={
//                       currentVideoIndex === index
//                         ? {
//                             scale: [1, 1.2, 1],
//                             transition: {
//                               duration: 1.5,
//                               repeat: Number.POSITIVE_INFINITY,
//                               repeatType: "reverse",
//                             },
//                           }
//                         : {}
//                     }
//                   ></motion.button>
//                 ))}
//               </div>
//             </div>

//             {/* Stats section */}
//             <motion.div
//               ref={statsRef}
//               className="stats-container"
//               variants={itemVariants}
//             >
//               {[
//                 {
//                   value: stats.clients,
//                   label: "Clients",
//                   icon: <Users className="stats-icon" />,
//                 },
//                 {
//                   value: stats.projects,
//                   label: "Projects",
//                   icon: <Layers className="stats-icon" />,
//                 },
//                 {
//                   value: stats.countries,
//                   label: "Countries",
//                   icon: <Globe className="stats-icon" />,
//                 },
//                 {
//                   value: stats.satisfaction,
//                   label: "Satisfaction",
//                   icon: <Heart className="stats-icon" />,
//                 },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="stat-item"
//                   whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 >
//                   <motion.div
//                     className="stat-icon-container"
//                     whileHover={{
//                       scale: 1.1,
//                       boxShadow: "0 0 15px rgba(237, 134, 82, 0.4)",
//                     }}
//                   >
//                     {stat.icon}
//                   </motion.div>
//                   <motion.div
//                     className="stat-value"
//                     ref={statValueRefs[Object.keys(stats)[index]]}
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                   >
//                     {stat.value}
//                     {stat.label === "Satisfaction" ? "%" : "+"}
//                   </motion.div>
//                   <div className="stat-label">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Content Column */}
//           <motion.div className="content-column" variants={itemVariants}>
//             <motion.div className="title-container" variants={itemVariants}>
//               <motion.div
//                 className="badge"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 5px 15px rgba(237, 134, 82, 0.4)",
//                 }}
//               >
//                 WHO WE ARE
//               </motion.div>

//               <motion.h2
//                 className="title"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//               >
//                 welcome to the{" "}
//                 <motion.span
//                   className="highlight"
//                   animate={{
//                     textShadow: [
//                       "0 0 5px rgba(237, 134, 82, 0.3)",
//                       "0 0 15px rgba(237, 134, 82, 0.6)",
//                       "0 0 5px rgba(237, 134, 82, 0.3)",
//                     ],
//                   }}
//                   transition={{
//                     duration: 2,
//                     ease: "easeInOut",
//                     repeat: Number.POSITIVE_INFINITY,
//                     repeatType: "reverse",
//                   }}
//                 >
//                   Revenue Rocket
//                 </motion.span>
//               </motion.h2>
//             </motion.div>

//             {/* Tabs navigation */}
//             <motion.div className="tabs-container" variants={itemVariants}>
//               <div className="tabs-header">
//                 {["About Us", "Services", "Clients"].map((tab, index) => (
//                   <motion.button
//                     key={index}
//                     className={`tab-button ${
//                       activeTab === index ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab(index)}
//                     whileHover={{
//                       backgroundColor: "rgba(255, 255, 255, 0.05)",
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {tab}
//                   </motion.button>
//                 ))}
//               </div>

//               {/* Tab content */}
//               <div className="tab-content">
//                 {/* About Us Tab */}
//                 <AnimatePresence mode="wait">
//                   {activeTab === 0 && (
//                     <motion.div
//                       className="tab-pane active"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <motion.div
//                         className={`text-content ${
//                           isExpanded ? "expanded" : ""
//                         }`}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                       >
//                         <p>
//                           Revenue Rocket is a leading technology company that
//                           specializes in web and mobile app development, desktop
//                           application development, SEO, graphics design,
//                           penetration testing, and more. With a focus on
//                           innovation and client satisfaction, we provide
//                           tailored solutions to businesses of all sizes. Our web
//                           and mobile app development services combine creativity
//                           and functionality to deliver user-friendly experiences
//                           across platforms. We excel in building responsive
//                           websites and feature-rich mobile apps that engage
//                           users and drive business growth. In the realm of
//                           desktop application development, we create robust
//                           software solutions that streamline processes and
//                           improve productivity. Our team of skilled developers
//                           uses cutting-edge technologies to deliver customized
//                           applications that meet specific business requirements.
//                         </p>
//                         <p>
//                           Revenue Rocket also offers SEO services to boost
//                           online visibility and improve search engine rankings.
//                           We employ effective strategies, including keyword
//                           research, content optimization, and performance
//                           tracking, to drive organic traffic and increase brand
//                           visibility. With our graphics design expertise, we
//                           create visually appealing designs that enhance brand
//                           identity. From logos and branding materials to UI/UX
//                           design, we craft compelling visuals that leave a
//                           lasting impression on customers. Additionally, our
//                           penetration testing services ensure the security of
//                           systems and networks. We identify vulnerabilities and
//                           provide recommendations to fortify digital assets
//                           against potential cyber threats. Lenexit is dedicated
//                           to delivering high-quality solutions that empower
//                           businesses to thrive in the digital landscape. With
//                           our diverse range of services, we are your trusted
//                           partner for all your technology needs.
//                         </p>
//                       </motion.div>

//                       <motion.button
//                         className="expand-button"
//                         onClick={() => setIsExpanded(!isExpanded)}
//                         whileHover={{ color: "#ff9b6a" }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {isExpanded ? (
//                           <>
//                             Show Less <ChevronUp className="icon" />
//                           </>
//                         ) : (
//                           <>
//                             Show More <ChevronDown className="icon" />
//                           </>
//                         )}
//                       </motion.button>
//                     </motion.div>
//                   )}

//                   {/* Services Tab */}
//                   {activeTab === 1 && (
//                     <motion.div
//                       className="tab-pane active"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <motion.div
//                         className="services-grid"
//                         initial="hidden"
//                         animate="visible"
//                         variants={{
//                           visible: {
//                             transition: {
//                               staggerChildren: 0.1,
//                             },
//                           },
//                         }}
//                       >
//                         {services.map((service, index) => (
//                           <motion.div
//                             key={index}
//                             className="service-card"
//                             variants={cardVariants}
//                             whileHover="hover"
//                             initial="hidden"
//                             animate="visible"
//                             onHoverStart={() => setIsHovering(index)}
//                             onHoverEnd={() => setIsHovering(null)}
//                           >
//                             <motion.div
//                               className="service-icon"
//                               animate={
//                                 isHovering === index
//                                   ? {
//                                       y: [0, -10, 0],
//                                       transition: {
//                                         duration: 1,
//                                         repeat: Number.POSITIVE_INFINITY,
//                                       },
//                                     }
//                                   : {}
//                               }
//                             >
//                               {service.icon}
//                             </motion.div>
//                             <h3 className="service-title">{service.name}</h3>
//                             <p className="service-description">
//                               {service.description}
//                             </p>
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   )}

//                   {/* Clients Tab */}
//                   {activeTab === 2 && (
//                     <motion.div
//                       className="tab-pane active"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -20 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <motion.div
//                         ref={clientsRef}
//                         className="clients-grid"
//                         initial="hidden"
//                         animate="visible"
//                         variants={{
//                           visible: {
//                             transition: {
//                               staggerChildren: 0.1,
//                             },
//                           },
//                         }}
//                       >
//                         {clients.map((client, index) => (
//                           <motion.div
//                             key={index}
//                             className="client-card"
//                             variants={cardVariants}
//                             whileHover="hover"
//                           >
//                             <motion.div
//                               className="client-logo"
//                               whileHover={{
//                                 rotate: 360,
//                                 transition: {
//                                   duration: 0.8,
//                                   ease: "easeInOut",
//                                 },
//                               }}
//                             >
//                               <Users className="w-8 h-8 text-primary-accent" />
//                             </motion.div>
//                             <h3 className="client-name">{client.name}</h3>
//                             <p className="client-industry">{client.industry}</p>
//                           </motion.div>
//                         ))}
//                       </motion.div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <NavLink to="/about" className="cta-button">
//                 <motion.span initial={{ x: 0 }} whileHover={{ x: -5 }}>
//                   Read More
//                 </motion.span>
//                 <motion.div
//                   className="icon-container"
//                   initial={{ x: 0 }}
//                   whileHover={{ x: 5 }}
//                 >
//                   <ArrowRight className="icon" />
//                 </motion.div>
//               </NavLink>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         /* Base Variables */
//         :root {
//           --primary: #0a0e17;
//           --primary-light: #1a2030;
//           --primary-accent: #ed8652;
//           --primary-accent-light: #ff9b6a;
//           --secondary-accent: #05d9e8;
//           --text-primary: #ffffff;
//           --text-secondary: rgba(255, 255, 255, 0.7);
//           --border-color: rgba(255, 255, 255, 0.1);
//           --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
//           --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1);
//           --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1);
//           --radius-sm: 4px;
//           --radius-md: 8px;
//           --radius-lg: 16px;
//           --radius-xl: 24px;
//         }

//         /* Base Styles */
//         .about-section {
//           position: relative;
//           padding: 6rem 0;
//           background: linear-gradient(135deg, #0a0e17 0%, #121a2c 100%);
//           color: var(--text-primary);
//           overflow: hidden;
//           font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
//             Roboto, sans-serif;
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

//         .container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         .content-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 3rem;
//         }

//         @media (min-width: 992px) {
//           .content-grid {
//             grid-template-columns: 1fr 1.5fr;
//             gap: 4rem;
//           }
//         }

//         /* Video Column */
//         .video-column {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//         }

//         .video-showcase {
//           position: relative;
//           border-radius: var(--radius-lg);
//           overflow: hidden;
//           box-shadow: var(--shadow-lg);
//           aspect-ratio: 16 / 9;
//           background-color: var(--primary-light);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .video-container {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .video-element {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .video-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             to bottom,
//             rgba(10, 14, 23, 0.2),
//             rgba(10, 14, 23, 0.6)
//           );
//           pointer-events: none;
//         }

//         .video-frame {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: 2px solid var(--primary-accent);
//           border-radius: var(--radius-lg);
//           box-shadow: 0 0 20px rgba(237, 134, 82, 0.3);
//           pointer-events: none;
//           opacity: 0.7;
//           mix-blend-mode: overlay;
//         }

//         .video-nav {
//           position: absolute;
//           bottom: 1rem;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 0.5rem;
//           z-index: 10;
//         }

//         .video-nav-dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background-color: rgba(255, 255, 255, 0.3);
//           border: none;
//           cursor: pointer;
//           transition: all var(--transition-fast);
//         }

//         .video-nav-dot.active {
//           background-color: var(--primary-accent);
//           transform: scale(1.2);
//         }

//         /* Stats Container */
//         .stats-container {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 0.75rem;
//           padding: 1rem;
//           background-color: rgba(26, 32, 48, 0.7);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           border-radius: var(--radius-lg);
//           box-shadow: var(--shadow-md);
//           border: 1px solid var(--border-color);
//           position: relative;
//           overflow: hidden;
//         }

//         .stats-container::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 134, 82, 0.1) 0%,
//             transparent 100%
//           );
//           pointer-events: none;
//         }

//         @media (min-width: 768px) {
//           .stats-container {
//             grid-template-columns: repeat(4, 1fr);
//           }
//         }

//         .stat-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           position: relative;
//           z-index: 1;
//           padding: 0.75rem 0.5rem;
//           border-radius: var(--radius-md);
//           transition: all var(--transition-fast);
//         }

//         .stat-item:hover {
//           background-color: rgba(255, 255, 255, 0.05);
//         }

//         .stat-icon-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 40px;
//           height: 40px;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 134, 82, 0.2) 0%,
//             rgba(237, 134, 82, 0.1) 100%
//           );
//           border-radius: 50%;
//           margin-bottom: 0.5rem;
//           color: var(--primary-accent);
//         }

//         .stats-icon {
//           width: 18px;
//           height: 18px;
//         }

//         .stat-value {
//           font-size: 1.75rem;
//           font-weight: 700;
//           color: var(--primary-accent);
//           margin-bottom: 0.25rem;
//           text-shadow: 0 0 10px rgba(237, 134, 82, 0.3);
//           background: linear-gradient(
//             135deg,
//             var(--primary-accent) 0%,
//             var(--primary-accent-light) 100%
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .stat-label {
//           font-size: 0.75rem;
//           color: var(--text-secondary);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         /* Content Column */
//         .content-column {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//         }

//         .title-container {
//           margin-bottom: 1rem;
//         }

//         .badge {
//           display: inline-block;
//           padding: 0.5rem 1rem;
//           background: linear-gradient(
//             135deg,
//             var(--primary-accent) 0%,
//             var(--primary-accent-light) 100%
//           );
//           color: var(--primary);
//           font-size: 0.75rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 20px;
//           margin-bottom: 1rem;
//           box-shadow: 0 5px 15px rgba(237, 134, 82, 0.2);
//         }

//         .title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           line-height: 1.2;
//           margin-bottom: 1rem;
//           text-transform: capitalize;
//           background: linear-gradient(
//             135deg,
//             var(--text-primary) 0%,
//             rgba(255, 255, 255, 0.8) 100%
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         @media (min-width: 768px) {
//           .title {
//             font-size: 3rem;
//           }
//         }

//         .highlight {
//           color: var(--primary-accent);
//           position: relative;
//           -webkit-text-fill-color: var(--primary-accent);
//         }

//         .highlight::after {
//           content: "";
//           position: absolute;
//           bottom: -5px;
//           left: 0;
//           width: 100%;
//           height: 2px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             var(--primary-accent),
//             transparent
//           );
//           opacity: 0.7;
//         }

//         /* Tabs */
//         .tabs-container {
//           background-color: rgba(26, 32, 48, 0.7);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           border-radius: var(--radius-lg);
//           overflow: hidden;
//           box-shadow: var(--shadow-md);
//           border: 1px solid var(--border-color);
//           position: relative;
//         }

//         .tabs-container::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(255, 255, 255, 0.05) 0%,
//             transparent 100%
//           );
//           pointer-events: none;
//         }

//         .tabs-header {
//           display: flex;
//           border-bottom: 1px solid var(--border-color);
//           position: relative;
//           z-index: 1;
//         }

//         .tab-button {
//           flex: 1;
//           padding: 1rem;
//           background: transparent;
//           border: none;
//           color: var(--text-secondary);
//           font-size: 1rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all var(--transition-fast);
//           position: relative;
//         }

//         .tab-button::after {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(
//             90deg,
//             var(--primary-accent),
//             var(--primary-accent-light)
//           );
//           transform: scaleX(0);
//           transition: transform var(--transition-fast);
//           transform-origin: left;
//         }

//         .tab-button.active {
//           color: var(--text-primary);
//         }

//         .tab-button.active::after {
//           transform: scaleX(1);
//         }

//         .tab-content {
//           padding: 2rem;
//           position: relative;
//           z-index: 1;
//           min-height: 300px;
//         }

//         .tab-pane {
//           display: none;
//         }

//         .tab-pane.active {
//           display: block;
//         }

//         /* Text Content */
//         .text-content {
//           max-height: 200px;
//           overflow: hidden;
//           transition: max-height var(--transition-slow);
//         }

//         .text-content.expanded {
//           max-height: 1000px;
//         }

//         .text-content p {
//           margin-bottom: 1.5rem;
//           line-height: 1.7;
//           color: var(--text-secondary);
//           font-size: 1rem;
//         }

//         .expand-button {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           background: transparent;
//           border: none;
//           color: var(--primary-accent);
//           font-size: 0.875rem;
//           font-weight: 500;
//           cursor: pointer;
//           padding: 0.5rem 0;
//           margin-top: 1rem;
//           transition: color var(--transition-fast);
//         }

//         .expand-button:hover {
//           color: var(--primary-accent-light);
//         }

//         .expand-button .icon {
//           width: 16px;
//           height: 16px;
//           transition: transform var(--transition-fast);
//         }

//         /* Services Grid */
//         .services-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1.5rem;
//         }

//         @media (min-width: 768px) {
//           .services-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         .service-card {
//           padding: 1.5rem;
//           background-color: rgba(255, 255, 255, 0.03);
//           border-radius: var(--radius-md);
//           border: 1px solid var(--border-color);
//           transition: all var(--transition-medium);
//           position: relative;
//           overflow: hidden;
//           backdrop-filter: blur(5px);
//           -webkit-backdrop-filter: blur(5px);
//         }

//         .service-card:hover {
//           background-color: rgba(255, 255, 255, 0.05);
//           border-color: rgba(237, 134, 82, 0.3);
//         }

//         .service-card::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 134, 82, 0.05) 0%,
//             transparent 100%
//           );
//           pointer-events: none;
//         }

//         .service-icon {
//           margin-bottom: 1rem;
//           display: inline-flex;
//           padding: 0.75rem;
//           background-color: rgba(237, 134, 82, 0.1);
//           border-radius: 12px;
//         }

//         /* Clients Grid */
//         .clients-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1.5rem;
//         }

//         @media (min-width: 768px) {
//           .clients-grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }

//         .client-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-align: center;
//           padding: 1.5rem;
//           background-color: rgba(255, 255, 255, 0.03);
//           border-radius: var(--radius-md);
//           border: 1px solid var(--border-color);
//           transition: all var(--transition-medium);
//           position: relative;
//           overflow: hidden;
//           backdrop-filter: blur(5px);
//           -webkit-backdrop-filter: blur(5px);
//         }

//         .client-card:hover {
//           background-color: rgba(255, 255, 255, 0.05);
//           border-color: rgba(237, 134, 82, 0.3);
//         }

//         .client-logo {
//           width: 50px;
//           height: 50px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(
//             135deg,
//             rgba(237, 134, 82, 0.2) 0%,
//             rgba(237, 134, 82, 0.1) 100%
//           );
//           border-radius: 12px;
//           margin-bottom: 1rem;
//           position: relative;
//           z-index: 1;
//         }

//         .client-name {
//           font-size: 1.125rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: var(--text-primary);
//           position: relative;
//           z-index: 1;
//         }

//         .client-industry {
//           font-size: 0.875rem;
//           color: var(--text-secondary);
//           position: relative;
//           z-index: 1;
//         }

//         /* CTA Button */
//         .cta-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.75rem;
//           padding: 0.75rem 1.5rem;
//           background: linear-gradient(
//             135deg,
//             var(--primary-accent) 0%,
//             var(--primary-accent-light) 100%
//           );
//           color: var(--primary);
//           font-size: 0.875rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 8px;
//           border: none;
//           cursor: pointer;
//           transition: all var(--transition-medium);
//           text-decoration: none;
//           align-self: flex-start;
//           margin-top: 1rem;
//           box-shadow: 0 5px 15px rgba(237, 134, 82, 0.3);
//           position: relative;
//           overflow: hidden;
//         }

//         .cta-button::before {
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

//         .cta-button:hover::before {
//           left: 100%;
//         }

//         .cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(237, 134, 82, 0.4);
//         }

//         .icon-container {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .cta-button .icon {
//           width: 18px;
//           height: 18px;
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .about-section {
//             padding: 4rem 0;
//           }

//           .title {
//             font-size: 2rem;
//           }

//           .tab-content {
//             padding: 1.5rem;
//           }

//           .stat-value {
//             font-size: 2rem;
//           }
//         }

//         @media (max-width: 576px) {
//           .tabs-header {
//             flex-direction: column;
//           }

//           .tab-button {
//             padding: 0.75rem;
//             text-align: left;
//           }

//           .tab-button::after {
//             bottom: 0;
//             left: 0;
//             width: 3px;
//             height: 100%;
//             transform: scaleY(0);
//           }

//           .tab-button.active::after {
//             transform: scaleY(1);
//           }

//           .clients-grid,
//           .services-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </motion.section>
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
} from "lucide-react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

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
      icon: <Layers className="w-6 h-6 text-primary-accent" />,
      description:
        "Creating responsive websites and feature-rich mobile applications that engage users and drive business growth.",
    },
    {
      name: "Desktop Applications",
      icon: <Globe className="w-6 h-6 text-primary-accent" />,
      description:
        "Building robust software solutions that streamline processes and improve productivity for businesses.",
    },
    {
      name: "SEO & Digital Marketing",
      icon: <CheckCircle className="w-6 h-6 text-primary-accent" />,
      description:
        "Boosting online visibility and improving search engine rankings through effective strategies.",
    },
    {
      name: "Graphics & UI/UX Design",
      icon: <Heart className="w-6 h-6 text-primary-accent" />,
      description:
        "Creating visually appealing designs that enhance brand identity and user experience.",
    },
  ];

  // Videos array for easy access
  const videos = [
    { src: welcomeVideo, poster: welcomeVideo_Banner },
    { src: aboutusVideo, poster: teamVideo_banner },
    { src: aboutusVideo1, poster: teamVideo_banner },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Intersection Observer to trigger animations when section is visible
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

  // GSAP Stats counter animation
  useEffect(() => {
    if (!isVisible || !statsRef.current) return;

    const finalStats = {
      clients: 200,
      projects: 500,
      countries: 30,
      satisfaction: 98,
    };

    // Create GSAP timeline for smooth counting
    const tl = gsap.timeline();

    // Animate each stat with GSAP
    Object.keys(finalStats).forEach((key) => {
      if (statValueRefs[key].current) {
        tl.to(
          stats,
          {
            [key]: finalStats[key],
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              setStats((prevStats) => ({
                ...prevStats,
                [key]: Math.round(gsap.getProperty(stats, key)),
              }));
            },
          },
          "<0.2"
        ); // Slight stagger between animations
      }
    });

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  // Particle animation for background
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(237, 134, 82, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        // Add wave effect
        amplitude: Math.random() * 2 + 1,
        frequency: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrameId;
    let lastTime = 0;

    const animate = (time) => {
      const deltaTime = time - lastTime;
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
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animation for client cards
  useEffect(() => {
    if (!isVisible || !clientsRef.current || activeTab !== 2) return;

    const clientCards = clientsRef.current.querySelectorAll(".client-card");

    gsap.fromTo(
      clientCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [isVisible, activeTab]);

  return (
    <motion.section
      ref={sectionRef}
      className="about-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background particles */}
      <canvas ref={canvasRef} className="particles-canvas"></canvas>

      <div className="container">
        <div className="content-grid">
          {/* Video Column */}
          <motion.div className="video-column" variants={itemVariants}>
            <div className="video-showcase">
              <AnimatePresence mode="wait">
                {videos.map(
                  (video, index) =>
                    currentVideoIndex === index && (
                      <motion.div
                        key={index}
                        className="video-container active"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
                        <motion.div
                          className="video-frame"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(237, 134, 82, 0.3)",
                              "0 0 30px rgba(237, 134, 82, 0.6)",
                              "0 0 20px rgba(237, 134, 82, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        ></motion.div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>

              {/* Video navigation dots */}
              <div className="video-nav">
                {videos.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`video-nav-dot ${
                      currentVideoIndex === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentVideoIndex(index)}
                    aria-label={`View video ${index + 1}`}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      currentVideoIndex === index
                        ? {
                            scale: [1, 1.2, 1],
                            transition: {
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            },
                          }
                        : {}
                    }
                  ></motion.button>
                ))}
              </div>
            </div>

            {/* Stats section */}
            <motion.div
              ref={statsRef}
              className="stats-container"
              variants={itemVariants}
            >
              {[
                {
                  value: stats.clients,
                  label: "Clients",
                  icon: <Users className="stats-icon" />,
                },
                {
                  value: stats.projects,
                  label: "Projects",
                  icon: <Layers className="stats-icon" />,
                },
                {
                  value: stats.countries,
                  label: "Countries",
                  icon: <Globe className="stats-icon" />,
                },
                {
                  value: stats.satisfaction,
                  label: "Satisfaction",
                  icon: <Heart className="stats-icon" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="stat-icon-container"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(237, 134, 82, 0.4)",
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="stat-value"
                    ref={statValueRefs[Object.keys(stats)[index]]}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                    {stat.label === "Satisfaction" ? "%" : "+"}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div className="content-column" variants={itemVariants}>
            <motion.div className="title-container" variants={itemVariants}>
              <motion.div
                className="badge"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(237, 134, 82, 0.4)",
                }}
              >
                WHO WE ARE
              </motion.div>

              <motion.h2
                className="title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                welcome to the{" "}
                <motion.span
                  className="highlight"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(237, 134, 82, 0.3)",
                      "0 0 15px rgba(237, 134, 82, 0.6)",
                      "0 0 5px rgba(237, 134, 82, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  Revenue Rocket
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Tabs navigation */}
            <motion.div className="tabs-container" variants={itemVariants}>
              <div className="tabs-header">
                {["About Us", "Services", "Clients"].map((tab, index) => (
                  <motion.button
                    key={index}
                    className={`tab-button ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              {/* Tab content */}
              <div className="tab-content">
                {/* About Us Tab */}
                <AnimatePresence mode="wait">
                  {activeTab === 0 && (
                    <motion.div
                      className="tab-pane active"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className={`text-content ${
                          isExpanded ? "expanded" : ""
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <p>
                          Revenue Rocket is a leading technology company that
                          specializes in web and mobile app development, desktop
                          application development, SEO, graphics design,
                          penetration testing, and more. With a focus on
                          innovation and client satisfaction, we provide
                          tailored solutions to businesses of all sizes. Our web
                          and mobile app development services combine creativity
                          and functionality to deliver user-friendly experiences
                          across platforms. We excel in building responsive
                          websites and feature-rich mobile apps that engage
                          users and drive business growth. In the realm of
                          desktop application development, we create robust
                          software solutions that streamline processes and
                          improve productivity. Our team of skilled developers
                          uses cutting-edge technologies to deliver customized
                          applications that meet specific business requirements.
                        </p>
                        <p>
                          Revenue Rocket also offers SEO services to boost
                          online visibility and improve search engine rankings.
                          We employ effective strategies, including keyword
                          research, content optimization, and performance
                          tracking, to drive organic traffic and increase brand
                          visibility. With our graphics design expertise, we
                          create visually appealing designs that enhance brand
                          identity. From logos and branding materials to UI/UX
                          design, we craft compelling visuals that leave a
                          lasting impression on customers. Additionally, our
                          penetration testing services ensure the security of
                          systems and networks. We identify vulnerabilities and
                          provide recommendations to fortify digital assets
                          against potential cyber threats. Lenexit is dedicated
                          to delivering high-quality solutions that empower
                          businesses to thrive in the digital landscape. With
                          our diverse range of services, we are your trusted
                          partner for all your technology needs.
                        </p>
                      </motion.div>

                      <motion.button
                        className="expand-button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ color: "#ff9b6a" }}
                        whileTap={{ scale: 0.95 }}
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
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Services Tab */}
                  {activeTab === 1 && (
                    <motion.div
                      className="tab-pane active"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="services-grid"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            animate="visible"
                            onHoverStart={() => setIsHovering(index)}
                            onHoverEnd={() => setIsHovering(null)}
                          >
                            <motion.div
                              className="service-icon"
                              animate={
                                isHovering === index
                                  ? {
                                      y: [0, -10, 0],
                                      transition: {
                                        duration: 1,
                                        repeat: Number.POSITIVE_INFINITY,
                                      },
                                    }
                                  : {}
                              }
                            >
                              {service.icon}
                            </motion.div>
                            <h3 className="service-title">{service.name}</h3>
                            <p className="service-description">
                              {service.description}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Clients Tab */}
                  {activeTab === 2 && (
                    <motion.div
                      className="tab-pane active"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        ref={clientsRef}
                        className="clients-grid"
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {clients.map((client, index) => (
                          <motion.div
                            key={index}
                            className="client-card"
                            variants={cardVariants}
                            whileHover="hover"
                          >
                            <motion.div
                              className="client-logo"
                              whileHover={{
                                rotate: 360,
                                transition: {
                                  duration: 0.8,
                                  ease: "easeInOut",
                                },
                              }}
                            >
                              <Users className="w-8 h-8 text-primary-accent" />
                            </motion.div>
                            <h3 className="client-name">{client.name}</h3>
                            <p className="client-industry">{client.industry}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to="/about" className="cta-button">
                <motion.span initial={{ x: 0 }} whileHover={{ x: -5 }}>
                  Read More
                </motion.span>
                <motion.div
                  className="icon-container"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="icon" />
                </motion.div>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Base Variables */
        :root {
          --primary: #0a0e17;
          --primary-light: #1a2030;
          --primary-accent: #ed8652;
          --primary-accent-light: #ff9b6a;
          --secondary-accent: #05d9e8;
          --text-primary: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.7);
          --border-color: rgba(255, 255, 255, 0.1);
          --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1);
          --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1);
          --radius-sm: 4px;
          --radius-md: 8px;
          --radius-lg: 16px;
          --radius-xl: 24px;
        }

        /* Base Styles */
        .about-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #0a0e17 0%, #121a2c 100%);
          color: var(--text-primary);
          overflow: hidden;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
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

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
          }
        }

        /* Video Column */
        .video-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .video-showcase {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 16 / 9;
          background-color: var(--primary-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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

        .video-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid var(--primary-accent);
          border-radius: var(--radius-lg);
          box-shadow: 0 0 20px rgba(237, 134, 82, 0.3);
          pointer-events: none;
          opacity: 0.7;
          mix-blend-mode: overlay;
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          padding: 0.75rem;
          background-color: rgba(26, 32, 48, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
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

        @media (min-width: 768px) {
          .stats-container {
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
          padding: 0.5rem 0.25rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .stat-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .stat-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 50%;
          margin-bottom: 0.25rem;
          color: var(--primary-accent);
        }

        .stats-icon {
          width: 16px;
          height: 16px;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-accent);
          margin-bottom: 0.15rem;
          text-shadow: 0 0 10px rgba(237, 134, 82, 0.3);
          background: linear-gradient(
            135deg,
            var(--primary-accent) 0%,
            var(--primary-accent-light) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Content Column */
        .content-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .title-container {
          margin-bottom: 1rem;
        }

        .badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(
            135deg,
            var(--primary-accent) 0%,
            var(--primary-accent-light) 100%
          );
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 20px;
          margin-bottom: 1rem;
          box-shadow: 0 5px 15px rgba(237, 134, 82, 0.2);
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
        }

        @media (min-width: 768px) {
          .title {
            font-size: 3rem;
          }
        }

        .highlight {
          color: var(--primary-accent);
          position: relative;
          -webkit-text-fill-color: var(--primary-accent);
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
          border-bottom: 1px solid var(--border-color);
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

        .tab-button::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--primary-accent),
            var(--primary-accent-light)
          );
          transform: scaleX(0);
          transition: transform var(--transition-fast);
          transform-origin: left;
        }

        .tab-button.active {
          color: var(--text-primary);
        }

        .tab-button.active::after {
          transform: scaleX(1);
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
          font-size: 1rem;
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

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-card {
          padding: 1.5rem;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          transition: all var(--transition-medium);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .service-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(237, 134, 82, 0.3);
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.05) 0%,
            transparent 100%
          );
          pointer-events: none;
        }

        .service-icon {
          margin-bottom: 1rem;
          display: inline-flex;
          padding: 0.75rem;
          background-color: rgba(237, 134, 82, 0.1);
          border-radius: 12px;
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
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .client-card:hover {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(237, 134, 82, 0.3);
        }

        .client-logo {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            rgba(237, 134, 82, 0.2) 0%,
            rgba(237, 134, 82, 0.1) 100%
          );
          border-radius: 12px;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .client-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          position: relative;
          z-index: 1;
        }

        .client-industry {
          font-size: 0.875rem;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(
            135deg,
            var(--primary-accent) 0%,
            var(--primary-accent-light) 100%
          );
          color: var(--primary);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all var(--transition-medium);
          text-decoration: none;
          align-self: flex-start;
          margin-top: 1rem;
          box-shadow: 0 5px 15px rgba(237, 134, 82, 0.3);
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

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-button .icon {
          width: 18px;
          height: 18px;
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 2rem;
          }

          .video-column {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .video-column {
            order: 2;
          }

          .content-column {
            order: 1;
          }

          .title {
            font-size: 2rem;
          }

          .stats-container {
            grid-template-columns: repeat(4, 1fr);
            margin-top: 1rem;
          }

          .tab-content {
            padding: 1.5rem;
            min-height: 250px;
          }

          .text-content {
            max-height: 150px;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            padding: 3rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .title {
            font-size: 1.75rem;
          }

          .badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.7rem;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            padding: 0.5rem;
          }

          .stat-value {
            font-size: 1.25rem;
          }

          .stat-label {
            font-size: 0.65rem;
          }

          .tabs-header {
            flex-direction: row;
          }

          .tab-button {
            padding: 0.75rem 0.5rem;
            font-size: 0.9rem;
          }

          .service-card,
          .client-card {
            padding: 1rem;
          }

          .cta-button {
            padding: 0.6rem 1.25rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.5rem;
          }

          .video-nav-dot {
            width: 8px;
            height: 8px;
          }

          .stat-icon-container {
            width: 28px;
            height: 28px;
          }

          .stats-icon {
            width: 14px;
            height: 14px;
          }

          .stat-value {
            font-size: 1.1rem;
          }

          .stat-label {
            font-size: 0.6rem;
          }

          .tab-content {
            padding: 1.25rem;
            min-height: 200px;
          }

          .text-content p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .services-grid,
          .clients-grid {
            gap: 1rem;
          }
        }

        /* 4. Add touch-specific optimizations */
        @media (hover: none) {
          .stat-item:hover {
            background-color: transparent;
          }

          .video-nav {
            bottom: 0.5rem;
          }

          .video-nav-dot {
            width: 10px;
            height: 10px;
          }

          .tab-button:hover {
            background-color: transparent;
          }

          .expand-button:hover {
            color: var(--primary-accent);
          }

          .cta-button::before {
            display: none;
          }
        }

        /* 5. Add improved video container responsiveness */
        .video-showcase {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 16 / 9;
          background-color: var(--primary-light);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 480px) {
          .video-showcase {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default About;
