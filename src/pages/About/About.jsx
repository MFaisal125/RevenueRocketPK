// import React from "react";
// import "./About.css";
// import "../../assets/css/media-query.css";
// import Footer from "../../Common/Footer/Footer";
// import Header from "../../Common/Header/Headers";
// import Banners from "../../Common/Banners/Banner";
// import ourMission from "../../assets/image/our-mission-01.mp4";
// import ourVission from "../../assets/image/our-vision-01.mp4";
// import company_logo from "../../assets/vai/company_logo.png";
// import ourVission1 from "../../assets/image/our-vision-011.png";
// import ourMission1 from "../../assets/image/our-mission-011.png";
// import about_image from "../../assets/image/about_image.png";
// import touhid from "../../assets/image/touhid.jpg";

// import monabbirhasan from "../../assets/image/monabbirhasan.jpg";
// const About = () => {
//   return (
//     <>
//       <Header tags={location.href} />
//       <section id="about-page">
//         <Banners Img={about_image} title={"who we are  ?"} />
//         <div className="container">
//           <div className="about_wrapper">
//             <div className="title mt-5">
//               {/* <h3 className='text-uppercase font-weight-bold text-center'>about our company</h3> */}
//             </div>
//             <div id="wrape_section">
//               <div className="founder_box">
//                 <div className="founder_info">
//                   <div className="founder_one">
//                     <img
//                       title="founder and CEO"
//                       src={touhid}
//                       className="img-fluid"
//                       alt="touhidul islam"
//                     />
//                     <h3 className="founder_name">Muhammad Abdullah Khan</h3>
//                     <h4 className="designation">CEO</h4>
//                   </div>
//                   <div className="my-sm-3 middle_image">
//                     <img
//                       title="Co-founder and CTO"
//                       src={company_logo}
//                       className="img-fluid"
//                       alt="Monabbir Hasan"
//                     />
//                     <h3 hidden className="founder_name">
//                       Muhammad Faisal
//                     </h3>
//                     <h4 hidden className="designation">
//                       Co-founder and CTO
//                     </h4>
//                   </div>
//                   <div className="founder_tow">
//                     <img
//                       title="Co-founder and CTO"
//                       src={monabbirhasan}
//                       className="img-fluid"
//                       alt="Monabbir Hasan"
//                     />
//                     <h3 className="founder_name">Muhammad Faisal</h3>
//                     <h4 className="designation">Co-founder and CTO</h4>
//                   </div>
//                 </div>
//               </div>
//               <hr />
//               <div className="about_article">
//                 <div className="aboutfounder">
//                   <p>
//                     The journey of our company began in 2022 with the vision and
//                     determination of our founders, <b>Muhammad Abdullah Khan</b>{" "}
//                     and <b>Muhammad Faisal</b>. They embarked on an
//                     entrepreneurial adventure, driven by their passion for
//                     innovation and their desire to make a meaningful impact in
//                     the industry. With a shared vision, Touhidul and Monabbir
//                     started laying the foundation of the company, carefully
//                     crafting a business plan and identifying the market
//                     opportunities. They conducted extensive research, analyzed
//                     industry trends, and outlined a strategic roadmap to guide
//                     the company's growth and success. As they navigated the
//                     challenges and uncertainties of starting a new venture,
//                     Touhidul and Monabbir demonstrated resilience, perseverance,
//                     and a relentless pursuit of excellence. They assembled a
//                     talented team of professionals, who shared their passion and
//                     commitment to delivering exceptional services. Through
//                     strategic partnerships, continuous learning, and a
//                     customer-centric approach, the company began to establish
//                     its presence in the market. Touhidul and Monabbir leveraged
//                     their expertise and industry insights to provide innovative
//                     solutions that addressed the unique needs of their clients.
//                   </p>
//                   <p>
//                     The early days were marked by hard work, dedication, and an
//                     unwavering focus on building a strong foundation for the
//                     company's success. Touhidul and Monabbir embraced every
//                     opportunity for growth, constantly pushing the boundaries of
//                     their capabilities and exploring new avenues for expansion.
//                     Over time, the company gained recognition for its
//                     high-quality services, customer satisfaction, and its
//                     ability to deliver results. Touhidul and Monabbir fostered a
//                     culture of collaboration, innovation, and continuous
//                     improvement, ensuring that the company remained at the
//                     forefront of industry advancements. Today, the company
//                     stands as a testament to the vision, hard work, and
//                     determination of its founders. Touhidul and Monabbir's
//                     journey from the inception of the company to its current
//                     success exemplifies the entrepreneurial spirit and serves as
//                     an inspiration for aspiring entrepreneurs. As the company
//                     continues to evolve and grow, Touhidul and Monabbir remain
//                     dedicated to their initial vision, driving the company
//                     forward with a focus on excellence, innovation, and
//                     delivering exceptional value to their clients.
//                   </p>
//                   <p>
//                     The journey of our company is a testament to the power of
//                     passion, perseverance, and the unwavering belief in the
//                     transformative potential of a dream. We are proud of our
//                     accomplishments thus far and look forward to shaping a
//                     brighter future for our company, our team, and the clients
//                     we serve.
//                   </p>
//                 </div>
//                 <div className="misionVision">
//                   <div className="visionmision_image_wraper">
//                     <p>
//                       At our company, our mission is to empower businesses with
//                       innovative and transformative technology solutions that
//                       drive growth, enhance efficiency, and create lasting
//                       value. We are committed to being a trusted partner,
//                       delivering exceptional services and leveraging our
//                       expertise to help our clients achieve their business
//                       objectives and succeed in the digital era. With a
//                       customer-centric approach, we strive to understand our
//                       clients' unique needs and challenges, providing tailored
//                       solutions that meet and exceed their expectations. Through
//                       continuous learning, collaboration, and a passion for
//                       innovation, we aim to make a positive impact on the
//                       businesses we serve, enabling them to thrive in a
//                       competitive landscape.
//                     </p>
//                     <video
//                       poster={ourMission1}
//                       title="our mission is to empower businesses"
//                       autoPlay
//                       muted
//                       loop
//                       src={ourMission}
//                       className="img-fluid"
//                       alt="our mission"
//                     ></video>
//                   </div>
//                   <div className="visionmision_image_wraper">
//                     <video
//                       poster={ourVission1}
//                       title="our vision is to be a leading provider"
//                       autoPlay
//                       muted
//                       loop
//                       src={ourVission}
//                       className="img-fluid"
//                       alt="our vision"
//                     ></video>
//                     <p>
//                       Our vision is to be a leading provider of cutting-edge
//                       technology solutions, recognized for our commitment to
//                       excellence, customer-centric approach, and impactful
//                       results. We aspire to be at the forefront of industry
//                       advancements, driving innovation and shaping the future of
//                       technology. By staying ahead of emerging trends, embracing
//                       new technologies, and fostering a culture of continuous
//                       improvement, we aim to empower businesses globally,
//                       enabling them to leverage technology as a strategic
//                       advantage. Our vision is to create long-term partnerships
//                       with our clients, helping them navigate the digital
//                       transformation journey and achieve sustainable growth. We
//                       envision a future where businesses harness the power of
//                       technology to drive innovation, improve efficiency, and
//                       create meaningful value for their customers.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="about_compnay_info">
//                   <p>
//                     Our company, founded by Touhidul Islam and Monabbir Hasan,
//                     is a dynamic and innovative technology solutions provider.
//                     With a passion for excellence and a customer-centric
//                     approach, we strive to deliver exceptional services that
//                     drive business growth and success. Our team of highly
//                     skilled professionals brings a wealth of expertise in
//                     various domains, allowing us to offer a comprehensive range
//                     of services, including web and mobile app development, SEO,
//                     UI/UX design, penetration testing, and more. We are
//                     dedicated to understanding our clients' unique needs and
//                     challenges, tailoring our solutions to meet their specific
//                     requirements. By staying abreast of the latest industry
//                     trends and leveraging cutting-edge technologies, we ensure
//                     that our clients are equipped with the most effective and
//                     forward-thinking solutions. At our company, we pride
//                     ourselves on our commitment to quality, timely delivery, and
//                     utmost professionalism. We believe in fostering long-term
//                     partnerships with our clients, working closely with them to
//                     build lasting relationships based on trust and mutual
//                     success. By combining our technical expertise with a deep
//                     understanding of business dynamics, we provide strategic
//                     guidance and solutions that propel our clients' businesses
//                     forward.
//                   </p>
//                   <p>
//                     What sets us apart is our relentless pursuit of innovation
//                     and our unwavering dedication to client satisfaction. We
//                     continually push the boundaries, challenging ourselves to
//                     find new and creative ways to address complex business
//                     problems. Our passion for excellence drives us to go above
//                     and beyond, delivering solutions that not only meet
//                     expectations but exceed them. As a company, we are driven by
//                     a strong set of values, including integrity, transparency,
//                     and continuous learning. We value open communication,
//                     collaboration, and a culture of teamwork, which enables us
//                     to foster an environment of creativity and innovation. Our
//                     success is measured by the success of our clients. We take
//                     great pride in seeing our clients thrive and achieve their
//                     goals with the solutions we provide. It is our mission to be
//                     a trusted partner and a catalyst for growth, helping
//                     businesses leverage technology to unlock their full
//                     potential. In an ever-evolving digital landscape, our
//                     company stands as a reliable and forward-thinking technology
//                     partner. We invite businesses to join us on this
//                     transformative journey, where together, we can achieve
//                     remarkable results and create a future defined by innovation
//                     and success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="about-sec-2">
//                         <div className="title mt-5">
//                             <h3 className='text-uppercase font-weight-bold text-center'>about our company</h3>
//                         </div>
//                         <div id='wrape_section'>
//                         <div className='circle circle2'>
//                                 <video src={aboutVideo} autoPlay muted loop></video>
//                             </div>
//                             <p className='text-capitalize text-left'>
//                                 Welcome to Lenexit, a leading technology company at the forefront of digital innovation. With a strong focus on providing exceptional solutions, we specialize in web and mobile app development, desktop application development, SEO, graphics design, penetration testing, and more.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 At Lenexit, we believe in the power of technology to transform businesses and drive growth. Our mission is to empower our clients with cutting-edge digital solutions that enhance their online presence and streamline their operations. With a team of highly skilled professionals, we are committed to delivering excellence in every project we undertake.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 Our web and mobile app development services are tailored to meet the unique needs of our clients. We create intuitive and visually appealing designs, combined with robust functionality, to provide seamless user experiences across devices. Whether it's a responsive website or a feature-rich mobile app, we leverage the latest technologies to ensure our clients stay ahead in the digital landscape.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 In the realm of desktop application development, we design and build powerful software solutions that optimize business processes. Our expertise lies in creating custom desktop applications that are scalable, user-friendly, and aligned with our clients' specific requirements. We employ agile methodologies to ensure efficient development and timely delivery.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 Lenexit also excels in SEO services, helping businesses improve their online visibility and reach their target audience. Our strategies are designed to boost search engine rankings, increase organic traffic, and drive conversions. With thorough keyword research, content optimization, and performance tracking, we help our clients achieve long-term success in the competitive digital realm.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 Our talented graphics design team creates visually stunning designs that effectively communicate our clients' brand identity. From logos and branding materials to UI/UX design, we ensure every visual element resonates with the target audience, leaving a lasting impact.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 At Lenexit, we understand the critical importance of security in today's digital landscape. Our penetration testing services identify vulnerabilities in systems and networks, allowing us to fortify digital assets against potential cyber threats. We prioritize the protection of our clients' sensitive data and ensure their systems are robust and secure.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 What sets us apart is our client-centric approach and commitment to delivering exceptional results. We value collaboration and open communication, working closely with our clients throughout the project lifecycle to ensure their needs are met and expectations are exceeded. Our team's technical expertise, creativity, and dedication to innovation drive the success of our projects.
//                             </p>
//                             <p className='text-capitalize text-left'>
//                                 We invite you to explore the possibilities with Lenexit and discover how our comprehensive range of services can transform your business. Partner with us to harness the power of technology and achieve your digital goals.
//                             </p>

//                         </div>

//                     </div> */}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default About;

// "use client";

// import { useEffect, useState, useRef } from "react";

// import Footer from "../../Common/Footer/Footer";
// import Header from "../../Common/Header/Headers";
// import Banners from "../../Common/Banners/Banner";
// import ourMission from "../../assets/image/our-mission-01.mp4";
// import ourVission from "../../assets/image/our-vision-01.mp4";
// import company_logo from "../../assets/vai/company_logo.png";
// import ourVission1 from "../../assets/image/our-vision-011.png";
// import ourMission1 from "../../assets/image/our-mission-011.png";
// import about_image from "../../assets/image/about_image.png";
// import touhid from "../../assets/image/touhid.jpg";

// import monabbirhasan from "../../assets/image/monabbirhasan.jpg";

// const About = () => {
//   const [isVisible, setIsVisible] = useState({
//     founders: false,
//     mission: false,
//     vision: false,
//     about: false,
//     company: false,
//   });

//   // Animation on scroll with IntersectionObserver
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.15,
//     };

//     const handleIntersect = (entries) => {
//       entries.forEach((entry) => {
//         const id = entry.target.getAttribute("data-id");
//         if (entry.isIntersecting) {
//           setIsVisible((prev) => ({ ...prev, [id]: true }));
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);

//     const sections = document.querySelectorAll(".animate-section");
//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <Header tags={location.href} />
//       <style jsx>{`
//         /* Ultra Premium Dark Theme Styling */
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");

//         #about-page {
//           font-family: "Poppins", sans-serif;
//           color: #e2e8f0;
//           background-color: #0f172a;
//           overflow-x: hidden;
//           position: relative;
//         }

//         .container {
//           max-width: 1300px;
//           margin: 0 auto;
//           padding: 0 1.5rem;
//           position: relative;
//           z-index: 2;
//         }

//         .about_wrapper {
//           padding: 4rem 0 6rem;
//         }

//         #wrape_section {
//           position: relative;
//         }

//         /* Background Elements */
//         .bg-gradient-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(
//               circle at 15% 50%,
//               rgba(56, 189, 248, 0.08) 0%,
//               transparent 25%
//             ),
//             radial-gradient(
//               circle at 85% 30%,
//               rgba(168, 85, 247, 0.08) 0%,
//               transparent 25%
//             );
//           pointer-events: none;
//           z-index: 1;
//         }

//         /* Section Titles */
//         .section-title {
//           font-size: 2.25rem;
//           font-weight: 600;
//           color: #f8fafc;
//           margin-bottom: 2.5rem;
//           position: relative;
//           padding-bottom: 1rem;
//           font-family: "Playfair Display", serif;
//           letter-spacing: -0.5px;
//         }

//         .section-title:after {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 60px;
//           height: 3px;
//           background: linear-gradient(90deg, #38bdf8, #818cf8);
//         }

//         /* Premium Card Styling */
//         .premium-card {
//           background: rgba(30, 41, 59, 0.7);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(148, 163, 184, 0.1);
//           border-radius: 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//           overflow: hidden;
//           position: relative;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .premium-card::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 1px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(56, 189, 248, 0.3),
//             rgba(168, 85, 247, 0.3),
//             transparent
//           );
//         }

//         .premium-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
//         }

//         /* Founder Section */
//         .founder_box {
//           margin-bottom: 4rem;
//           padding: 3rem 2rem;
//         }

//         .founder_info {
//           display: flex;
//           justify-content: space-around;
//           align-items: center;
//           flex-wrap: wrap;
//           gap: 2.5rem;
//         }

//         .founder_one,
//         .founder_tow,
//         .middle_image {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           transition: all 0.3s ease;
//         }

//         .founder_one img,
//         .founder_tow img {
//           width: 180px;
//           height: 180px;
//           object-fit: cover;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
//           border: 2px solid rgba(148, 163, 184, 0.1);
//           transition: all 0.3s ease;
//         }

//         .founder_one:hover img,
//         .founder_tow:hover img {
//           border-color: rgba(56, 189, 248, 0.3);
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35),
//             0 0 15px rgba(56, 189, 248, 0.2);
//         }

//         .middle_image img {
//           width: 150px;
//           height: 150px;
//           object-fit: contain;
//           filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
//         }

//         .founder_name {
//           margin-top: 1.5rem;
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #f8fafc;
//           position: relative;
//         }

//         .founder_name:after {
//           content: "";
//           position: absolute;
//           bottom: -8px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 40px;
//           height: 2px;
//           background: linear-gradient(90deg, #38bdf8, #818cf8);
//           border-radius: 2px;
//           transition: width 0.3s ease;
//         }

//         .founder_one:hover .founder_name:after,
//         .founder_tow:hover .founder_name:after {
//           width: 60px;
//         }

//         .designation {
//           margin-top: 1rem;
//           font-size: 0.95rem;
//           color: #94a3b8;
//           font-weight: 400;
//         }

//         /* About Article Section */
//         .about_article {
//           display: flex;
//           flex-direction: column;
//           gap: 4rem;
//         }

//         .aboutfounder,
//         .about_compnay_info {
//           line-height: 1.8;
//           font-size: 1.05rem;
//           color: #cbd5e1;
//           position: relative;
//           padding: 2.5rem;
//         }

//         .aboutfounder p,
//         .about_compnay_info p {
//           margin-bottom: 1.5rem;
//         }

//         .aboutfounder p:last-child,
//         .about_compnay_info p:last-child {
//           margin-bottom: 0;
//         }

//         .aboutfounder p:first-of-type::first-letter {
//           font-size: 3.5rem;
//           font-weight: 600;
//           color: #38bdf8;
//           float: left;
//           line-height: 0.8;
//           margin-right: 0.5rem;
//           font-family: "Playfair Display", serif;
//         }

//         .aboutfounder b {
//           color: #38bdf8;
//           font-weight: 600;
//           position: relative;
//           display: inline-block;
//         }

//         /* Mission Vision Section */
//         .misionVision {
//           display: flex;
//           flex-direction: column;
//           gap: 4rem;
//           margin: 4rem 0;
//         }

//         .visionmision_image_wraper {
//           display: flex;
//           align-items: center;
//           gap: 3rem;
//           position: relative;
//           padding: 2.5rem;
//         }

//         .visionmision_image_wraper:nth-child(even) {
//           flex-direction: row-reverse;
//         }

//         .visionmision_image_wraper p {
//           flex: 1;
//           line-height: 1.8;
//           font-size: 1.05rem;
//           color: #cbd5e1;
//           position: relative;
//           padding-left: 1.5rem;
//           border-left: 2px solid rgba(56, 189, 248, 0.5);
//         }

//         .visionmision_image_wraper:nth-child(even) p {
//           padding-left: 0;
//           padding-right: 1.5rem;
//           border-left: none;
//           border-right: 2px solid rgba(168, 85, 247, 0.5);
//         }

//         .visionmision_image_wraper video {
//           flex: 1;
//           max-width: 45%;
//           border-radius: 12px;
//           box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
//           border: 1px solid rgba(148, 163, 184, 0.1);
//           transition: all 0.3s ease;
//         }

//         .visionmision_image_wraper:hover video {
//           box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4),
//             0 0 15px rgba(56, 189, 248, 0.15);
//           border-color: rgba(56, 189, 248, 0.2);
//         }

//         /* Separator */
//         hr {
//           border: none;
//           height: 1px;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(148, 163, 184, 0.2),
//             transparent
//           );
//           margin: 4rem 0;
//           position: relative;
//         }

//         /* Animation Classes - Subtle and Elegant */
//         .fade-in {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }

//         .fade-in.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .fade-in-left {
//           opacity: 0;
//           transform: translateX(-30px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }

//         .fade-in-left.visible {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .fade-in-right {
//           opacity: 0;
//           transform: translateX(30px);
//           transition: opacity 0.8s ease, transform 0.8s ease;
//         }

//         .fade-in-right.visible {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .visionmision_image_wraper {
//             flex-direction: column !important;
//             gap: 2rem;
//           }

//           .visionmision_image_wraper video {
//             max-width: 100%;
//           }

//           .visionmision_image_wraper p {
//             padding: 1.5rem 0 !important;
//             border-left: none !important;
//             border-right: none !important;
//             border-top: 2px solid rgba(56, 189, 248, 0.5);
//           }
//         }

//         @media (max-width: 768px) {
//           .founder_info {
//             flex-direction: column;
//           }

//           .middle_image {
//             order: -1;
//             margin-bottom: 1rem;
//           }

//           .aboutfounder,
//           .about_compnay_info,
//           .visionmision_image_wraper,
//           .founder_box {
//             padding: 2rem;
//           }

//           .section-title {
//             font-size: 1.75rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .container {
//             padding: 0 1rem;
//           }

//           .aboutfounder,
//           .about_compnay_info,
//           .visionmision_image_wraper,
//           .founder_box {
//             padding: 1.5rem;
//           }

//           .founder_one img,
//           .founder_tow img {
//             width: 150px;
//             height: 150px;
//           }

//           .middle_image img {
//             width: 120px;
//             height: 120px;
//           }

//           .founder_name {
//             font-size: 1.1rem;
//           }

//           .designation {
//             font-size: 0.85rem;
//           }

//           .section-title {
//             font-size: 1.5rem;
//             margin-bottom: 1.5rem;
//           }

//           .aboutfounder p:first-of-type::first-letter {
//             font-size: 2.5rem;
//           }
//         }
//       `}</style>

//       <section id="about-page">
//         {/* Background Gradient Overlay */}
//         <div className="bg-gradient-overlay"></div>

//         <Banners Img={about_image} title={"Who We Are"} />
//         <div className="container">
//           <div className="about_wrapper">
//             <div id="wrape_section">
//               <div className="animate-section" data-id="founders">
//                 <h2 className="section-title">Our Leadership</h2>
//                 <div
//                   className={`founder_box premium-card fade-in ${
//                     isVisible.founders ? "visible" : ""
//                   }`}
//                 >
//                   <div className="founder_info">
//                     <div className="founder_one">
//                       <img
//                         title="Founder and CEO"
//                         src={touhid || "/placeholder.svg"}
//                         className="img-fluid"
//                         alt="Muhammad Abdullah Khan"
//                       />
//                       <h3 className="founder_name">Muhammad Abdullah Khan</h3>
//                       <h4 className="designation">CEO</h4>
//                     </div>
//                     <div className="my-sm-3 middle_image">
//                       <img
//                         title="Company Logo"
//                         src={company_logo || "/placeholder.svg"}
//                         className="img-fluid"
//                         alt="Company Logo"
//                       />
//                     </div>
//                     <div className="founder_tow">
//                       <img
//                         title="Co-founder and CTO"
//                         src={monabbirhasan || "/placeholder.svg"}
//                         className="img-fluid"
//                         alt="Muhammad Faisal"
//                       />
//                       <h3 className="founder_name">Muhammad Faisal</h3>
//                       <h4 className="designation">Co-founder and CTO</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <hr />

//               <div className="about_article">
//                 <div className="animate-section" data-id="about">
//                   <h2 className="section-title">Our Story</h2>
//                   <div
//                     className={`aboutfounder premium-card fade-in ${
//                       isVisible.about ? "visible" : ""
//                     }`}
//                   >
//                     <p>
//                       The journey of our company began in 2022 with the vision
//                       and determination of our founders,{" "}
//                       <b>Muhammad Abdullah Khan</b> and <b>Muhammad Faisal</b>.
//                       They embarked on an entrepreneurial adventure, driven by
//                       their passion for innovation and their desire to make a
//                       meaningful impact in the industry. With a shared vision,
//                       they started laying the foundation of the company,
//                       carefully crafting a business plan and identifying the
//                       market opportunities. They conducted extensive research,
//                       analyzed industry trends, and outlined a strategic roadmap
//                       to guide the company's growth and success.
//                     </p>
//                     <p>
//                       As they navigated the challenges and uncertainties of
//                       starting a new venture, our founders demonstrated
//                       resilience, perseverance, and a relentless pursuit of
//                       excellence. They assembled a talented team of
//                       professionals, who shared their passion and commitment to
//                       delivering exceptional services. Through strategic
//                       partnerships, continuous learning, and a customer-centric
//                       approach, the company began to establish its presence in
//                       the market. Our founders leveraged their expertise and
//                       industry insights to provide innovative solutions that
//                       addressed the unique needs of their clients.
//                     </p>
//                     <p>
//                       The journey of our company is a testament to the power of
//                       passion, perseverance, and the unwavering belief in the
//                       transformative potential of a dream. We are proud of our
//                       accomplishments thus far and look forward to shaping a
//                       brighter future for our company, our team, and the clients
//                       we serve.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="misionVision">
//                   <div className="animate-section" data-id="mission">
//                     <h2 className="section-title">Our Mission</h2>
//                     <div
//                       className={`visionmision_image_wraper premium-card fade-in-left ${
//                         isVisible.mission ? "visible" : ""
//                       }`}
//                     >
//                       <p>
//                         At our company, our mission is to empower businesses
//                         with innovative and transformative technology solutions
//                         that drive growth, enhance efficiency, and create
//                         lasting value. We are committed to being a trusted
//                         partner, delivering exceptional services and leveraging
//                         our expertise to help our clients achieve their business
//                         objectives and succeed in the digital era. With a
//                         customer-centric approach, we strive to understand our
//                         clients' unique needs and challenges, providing tailored
//                         solutions that meet and exceed their expectations.
//                         Through continuous learning, collaboration, and a
//                         passion for innovation, we aim to make a positive impact
//                         on the businesses we serve, enabling them to thrive in a
//                         competitive landscape.
//                       </p>
//                       <video
//                         poster={ourMission1}
//                         title="our mission is to empower businesses"
//                         autoPlay
//                         muted
//                         loop
//                         src={ourMission}
//                         className="img-fluid"
//                         alt="our mission"
//                       ></video>
//                     </div>
//                   </div>

//                   <div className="animate-section" data-id="vision">
//                     <h2 className="section-title">Our Vision</h2>
//                     <div
//                       className={`visionmision_image_wraper premium-card fade-in-right ${
//                         isVisible.vision ? "visible" : ""
//                       }`}
//                     >
//                       <video
//                         poster={ourVission1}
//                         title="our vision is to be a leading provider"
//                         autoPlay
//                         muted
//                         loop
//                         src={ourVission}
//                         className="img-fluid"
//                         alt="our vision"
//                       ></video>
//                       <p>
//                         Our vision is to be a leading provider of cutting-edge
//                         technology solutions, recognized for our commitment to
//                         excellence, customer-centric approach, and impactful
//                         results. We aspire to be at the forefront of industry
//                         advancements, driving innovation and shaping the future
//                         of technology. By staying ahead of emerging trends,
//                         embracing new technologies, and fostering a culture of
//                         continuous improvement, we aim to empower businesses
//                         globally, enabling them to leverage technology as a
//                         strategic advantage. Our vision is to create long-term
//                         partnerships with our clients, helping them navigate the
//                         digital transformation journey and achieve sustainable
//                         growth.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="animate-section" data-id="company">
//                   <h2 className="section-title">About Our Company</h2>
//                   <div
//                     className={`about_compnay_info premium-card fade-in ${
//                       isVisible.company ? "visible" : ""
//                     }`}
//                   >
//                     <p>
//                       Our company is a dynamic and innovative technology
//                       solutions provider. With a passion for excellence and a
//                       customer-centric approach, we strive to deliver
//                       exceptional services that drive business growth and
//                       success. Our team of highly skilled professionals brings a
//                       wealth of expertise in various domains, allowing us to
//                       offer a comprehensive range of services, including web and
//                       mobile app development, SEO, UI/UX design, penetration
//                       testing, and more. We are dedicated to understanding our
//                       clients' unique needs and challenges, tailoring our
//                       solutions to meet their specific requirements. By staying
//                       abreast of the latest industry trends and leveraging
//                       cutting-edge technologies, we ensure that our clients are
//                       equipped with the most effective and forward-thinking
//                       solutions.
//                     </p>
//                     <p>
//                       What sets us apart is our relentless pursuit of innovation
//                       and our unwavering dedication to client satisfaction. We
//                       continually push the boundaries, challenging ourselves to
//                       find new and creative ways to address complex business
//                       problems. Our passion for excellence drives us to go above
//                       and beyond, delivering solutions that not only meet
//                       expectations but exceed them. As a company, we are driven
//                       by a strong set of values, including integrity,
//                       transparency, and continuous learning. We value open
//                       communication, collaboration, and a culture of teamwork,
//                       which enables us to foster an environment of creativity
//                       and innovation. Our success is measured by the success of
//                       our clients. We take great pride in seeing our clients
//                       thrive and achieve their goals with the solutions we
//                       provide.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default About;

"use client";

import { useEffect, useState, useRef } from "react";

import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Headers";
import Banners from "../../Common/Banners/Banner";
import ourMission from "../../assets/image/our-mission-01.mp4";
import ourVission from "../../assets/image/our-vision-01.mp4";
import company_logo from "../../assets/vai/company_logo.png";
import ourVission1 from "../../assets/image/our-vision-011.png";
import ourMission1 from "../../assets/image/our-mission-011.png";
import about_image from "../../assets/image/about_image.png";
import touhid from "../../assets/image/touhid.jpg";

import monabbirhasan from "../../assets/image/monabbirhasan.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    founders: false,
    mission: false,
    vision: false,
    about: false,
    company: false,
  });

  const [scrollY, setScrollY] = useState(0);
  const bannerRef = useRef(null);

  // Handle scroll for parallax and animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on scroll with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header tags={location.href} />
      <style jsx>{`
        /* Ultra Premium Dark Theme Styling */
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap");

        #about-page {
          font-family: "Montserrat", sans-serif;
          color: #e2e8f0;
          background-color: #0a0a0a;
          overflow-x: hidden;
          position: relative;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        .about_wrapper {
          padding: 0 0 6rem;
        }

        #wrape_section {
          position: relative;
        }

        /* Background Elements */
        .bg-gradient-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 15% 50%,
              rgba(56, 189, 248, 0.08) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 85, 247, 0.08) 0%,
              transparent 25%
            );
          pointer-events: none;
          z-index: 1;
        }

        /* Custom Premium Banner */
        .premium-banner {
          position: relative;
          height: 70vh;
          min-height: 500px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .banner-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.4) contrast(1.2);
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.7),
            rgba(10, 10, 10, 0.9)
          );
          z-index: 2;
        }

        .banner-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .banner-title {
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .banner-title::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #c084fc, #818cf8);
        }

        .banner-subtitle {
          font-size: 1.25rem;
          font-weight: 300;
          color: #d4d4d8;
          max-width: 700px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }

        /* Section Titles */
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2.5rem;
          position: relative;
          padding-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .section-title::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: #c084fc;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 40px;
          width: 20px;
          height: 3px;
          background: #818cf8;
        }

        /* Premium Card Styling */
        .premium-card {
          background: #141414;
          border-radius: 4px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .premium-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(192, 132, 252, 0.03) 0%,
            rgba(129, 140, 248, 0.03) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .premium-card:hover::before {
          opacity: 1;
        }

        /* Founder Section */
        .founder_box {
          margin-bottom: 5rem;
          padding: 3.5rem;
        }

        .founder_info {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 3rem;
        }

        .founder_one,
        .founder_tow,
        .middle_image {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }

        .founder_one img,
        .founder_tow img {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 2px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }

        .founder_one img::after,
        .founder_tow img::after {
          content: "";
          position: absolute;
          top: 10px;
          left: 10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid rgba(192, 132, 252, 0.3);
          z-index: -1;
          transition: all 0.3s ease;
        }

        .founder_one:hover img,
        .founder_tow:hover img {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .middle_image img {
          width: 150px;
          height: 150px;
          object-fit: contain;
          filter: brightness(0.9) contrast(1.1);
        }

        .founder_name {
          margin-top: 1.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          position: relative;
        }

        .designation {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: #a1a1aa;
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* About Article Section */
        .about_article {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .aboutfounder,
        .about_compnay_info {
          line-height: 1.8;
          font-size: 1.05rem;
          color: #d4d4d8;
          position: relative;
          padding: 3.5rem;
        }

        .aboutfounder p,
        .about_compnay_info p {
          margin-bottom: 1.5rem;
        }

        .aboutfounder p:last-child,
        .about_compnay_info p:last-child {
          margin-bottom: 0;
        }

        .aboutfounder p:first-of-type::first-letter {
          font-size: 3.5rem;
          font-weight: 600;
          color: #c084fc;
          float: left;
          line-height: 0.8;
          margin-right: 0.5rem;
          font-family: "Cormorant Garamond", serif;
        }

        .aboutfounder b {
          color: #c084fc;
          font-weight: 600;
        }

        /* Mission Vision Section */
        .misionVision {
          display: flex;
          flex-direction: column;
          gap: 5rem;
          margin: 5rem 0;
        }

        .visionmision_image_wraper {
          display: flex;
          align-items: center;
          gap: 4rem;
          position: relative;
          padding: 3.5rem;
        }

        .visionmision_image_wraper:nth-child(even) {
          flex-direction: row-reverse;
        }

        .visionmision_image_wraper p {
          flex: 1;
          line-height: 1.8;
          font-size: 1.05rem;
          color: #d4d4d8;
          position: relative;
        }

        .visionmision_image_wraper video {
          flex: 1;
          max-width: 45%;
          border-radius: 2px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .visionmision_image_wraper:hover video {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        /* Separator */
        hr {
          border: none;
          height: 1px;
          background: #27272a;
          margin: 5rem 0;
          position: relative;
        }

        hr::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, #c084fc, transparent);
        }

        /* Animation Classes - Subtle and Professional */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .banner-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 1024px) {
          .visionmision_image_wraper {
            flex-direction: column !important;
            gap: 3rem;
            padding: 2.5rem;
          }

          .visionmision_image_wraper video {
            max-width: 100%;
          }

          .banner-title {
            font-size: 3rem;
          }

          .banner-subtitle {
            font-size: 1.1rem;
          }

          .premium-banner {
            height: 60vh;
            min-height: 450px;
          }
        }

        @media (max-width: 768px) {
          .founder_info {
            flex-direction: column;
          }

          .middle_image {
            order: -1;
            margin-bottom: 1rem;
          }

          .aboutfounder,
          .about_compnay_info,
          .founder_box {
            padding: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .banner-subtitle {
            font-size: 1rem;
          }

          .premium-banner {
            height: 50vh;
            min-height: 400px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .aboutfounder,
          .about_compnay_info,
          .visionmision_image_wraper,
          .founder_box {
            padding: 2rem;
          }

          .founder_one img,
          .founder_tow img {
            width: 160px;
            height: 160px;
          }

          .middle_image img {
            width: 120px;
            height: 120px;
          }

          .founder_name {
            font-size: 1.1rem;
          }

          .designation {
            font-size: 0.8rem;
          }

          .section-title {
            font-size: 1.75rem;
            margin-bottom: 1.75rem;
          }

          .aboutfounder p:first-of-type::first-letter {
            font-size: 2.5rem;
          }

          .banner-title {
            font-size: 2rem;
          }

          .banner-subtitle {
            font-size: 0.9rem;
            margin-top: 1.5rem;
          }

          .premium-banner {
            height: 40vh;
            min-height: 300px;
          }
        }
      `}</style>

      <section id="about-page">
        {/* Background Gradient Overlay */}
        <div className="bg-gradient-overlay"></div>

        {/* Custom Premium Banner */}
        <div className="premium-banner" ref={bannerRef}>
          <img
            src={about_image || "/placeholder.svg"}
            alt="About Us"
            className="banner-image"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h1 className="banner-title">Who We Are</h1>
            <p className="banner-subtitle">
              Dedicated to excellence and innovation, we transform ideas into
              impactful solutions that drive business growth and success.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="about_wrapper">
            <div id="wrape_section">
              <div className="animate-section" data-id="founders">
                <h2 className="section-title">Our Leadership</h2>
                <div
                  className={`founder_box premium-card fade-in ${
                    isVisible.founders ? "visible" : ""
                  }`}
                >
                  <div className="founder_info">
                    <div className="founder_one">
                      <img
                        title="Founder and CEO"
                        src={touhid || "/placeholder.svg"}
                        className="img-fluid"
                        alt="Muhammad Abdullah Khan"
                      />
                      <h3 className="founder_name">Muhammad Abdullah Khan</h3>
                      <h4 className="designation">Chief Executive Officer</h4>
                    </div>
                    <div className="my-sm-3 middle_image">
                      <img
                        title="Company Logo"
                        src={company_logo || "/placeholder.svg"}
                        className="img-fluid"
                        alt="Company Logo"
                      />
                    </div>
                    <div className="founder_tow">
                      <img
                        title="Co-founder and CTO"
                        src={monabbirhasan || "/placeholder.svg"}
                        className="img-fluid"
                        alt="Muhammad Faisal"
                      />
                      <h3 className="founder_name">Muhammad Faisal</h3>
                      <h4 className="designation">Chief Technology Officer</h4>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="about_article">
                <div className="animate-section" data-id="about">
                  <h2 className="section-title">Our Story</h2>
                  <div
                    className={`aboutfounder premium-card fade-in ${
                      isVisible.about ? "visible" : ""
                    }`}
                  >
                    <p>
                      The journey of our company began in 2022 with the vision
                      and determination of our founders,{" "}
                      <b>Muhammad Abdullah Khan</b> and <b>Muhammad Faisal</b>.
                      They embarked on an entrepreneurial adventure, driven by
                      their passion for innovation and their desire to make a
                      meaningful impact in the industry. With a shared vision,
                      they started laying the foundation of the company,
                      carefully crafting a business plan and identifying the
                      market opportunities. They conducted extensive research,
                      analyzed industry trends, and outlined a strategic roadmap
                      to guide the company's growth and success.
                    </p>
                    <p>
                      As they navigated the challenges and uncertainties of
                      starting a new venture, our founders demonstrated
                      resilience, perseverance, and a relentless pursuit of
                      excellence. They assembled a talented team of
                      professionals, who shared their passion and commitment to
                      delivering exceptional services. Through strategic
                      partnerships, continuous learning, and a customer-centric
                      approach, the company began to establish its presence in
                      the market. Our founders leveraged their expertise and
                      industry insights to provide innovative solutions that
                      addressed the unique needs of their clients.
                    </p>
                    <p>
                      The journey of our company is a testament to the power of
                      passion, perseverance, and the unwavering belief in the
                      transformative potential of a dream. We are proud of our
                      accomplishments thus far and look forward to shaping a
                      brighter future for our company, our team, and the clients
                      we serve.
                    </p>
                  </div>
                </div>

                <div className="misionVision">
                  <div className="animate-section" data-id="mission">
                    <h2 className="section-title">Our Mission</h2>
                    <div
                      className={`visionmision_image_wraper premium-card fade-in-left ${
                        isVisible.mission ? "visible" : ""
                      }`}
                    >
                      <p>
                        At our company, our mission is to empower businesses
                        with innovative and transformative technology solutions
                        that drive growth, enhance efficiency, and create
                        lasting value. We are committed to being a trusted
                        partner, delivering exceptional services and leveraging
                        our expertise to help our clients achieve their business
                        objectives and succeed in the digital era. With a
                        customer-centric approach, we strive to understand our
                        clients' unique needs and challenges, providing tailored
                        solutions that meet and exceed their expectations.
                        Through continuous learning, collaboration, and a
                        passion for innovation, we aim to make a positive impact
                        on the businesses we serve, enabling them to thrive in a
                        competitive landscape.
                      </p>
                      <video
                        poster={ourMission1}
                        title="our mission is to empower businesses"
                        autoPlay
                        muted
                        loop
                        src={ourMission}
                        className="img-fluid"
                        alt="our mission"
                      ></video>
                    </div>
                  </div>

                  <div className="animate-section" data-id="vision">
                    <h2 className="section-title">Our Vision</h2>
                    <div
                      className={`visionmision_image_wraper premium-card fade-in-right ${
                        isVisible.vision ? "visible" : ""
                      }`}
                    >
                      <video
                        poster={ourVission1}
                        title="our vision is to be a leading provider"
                        autoPlay
                        muted
                        loop
                        src={ourVission}
                        className="img-fluid"
                        alt="our vision"
                      ></video>
                      <p>
                        Our vision is to be a leading provider of cutting-edge
                        technology solutions, recognized for our commitment to
                        excellence, customer-centric approach, and impactful
                        results. We aspire to be at the forefront of industry
                        advancements, driving innovation and shaping the future
                        of technology. By staying ahead of emerging trends,
                        embracing new technologies, and fostering a culture of
                        continuous improvement, we aim to empower businesses
                        globally, enabling them to leverage technology as a
                        strategic advantage. Our vision is to create long-term
                        partnerships with our clients, helping them navigate the
                        digital transformation journey and achieve sustainable
                        growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate-section" data-id="company">
                  <h2 className="section-title">About Our Company</h2>
                  <div
                    className={`about_compnay_info premium-card fade-in ${
                      isVisible.company ? "visible" : ""
                    }`}
                  >
                    <p>
                      Our company is a dynamic and innovative technology
                      solutions provider. With a passion for excellence and a
                      customer-centric approach, we strive to deliver
                      exceptional services that drive business growth and
                      success. Our team of highly skilled professionals brings a
                      wealth of expertise in various domains, allowing us to
                      offer a comprehensive range of services, including web and
                      mobile app development, SEO, UI/UX design, penetration
                      testing, and more. We are dedicated to understanding our
                      clients' unique needs and challenges, tailoring our
                      solutions to meet their specific requirements. By staying
                      abreast of the latest industry trends and leveraging
                      cutting-edge technologies, we ensure that our clients are
                      equipped with the most effective and forward-thinking
                      solutions.
                    </p>
                    <p>
                      What sets us apart is our relentless pursuit of innovation
                      and our unwavering dedication to client satisfaction. We
                      continually push the boundaries, challenging ourselves to
                      find new and creative ways to address complex business
                      problems. Our passion for excellence drives us to go above
                      and beyond, delivering solutions that not only meet
                      expectations but exceed them. As a company, we are driven
                      by a strong set of values, including integrity,
                      transparency, and continuous learning. We value open
                      communication, collaboration, and a culture of teamwork,
                      which enables us to foster an environment of creativity
                      and innovation. Our success is measured by the success of
                      our clients. We take great pride in seeing our clients
                      thrive and achieve their goals with the solutions we
                      provide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
