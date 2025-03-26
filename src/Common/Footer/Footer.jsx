// import React, { useState } from "react";
// import "./Footer.css";
// import "../../assets/css/media-query.css";
// import FooterImg from "../../assets/vai/logo1.png";
// import { NavLink } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Accordion from "react-bootstrap/Accordion";
// import payoneerIcon from "../../assets/image/pay_method_image/payoneer.png";
// import stripeIcon from "../../assets/image/pay_method_image/stripe.png";
// import paypalIcon from "../../assets/image/pay_method_image/paypal.png";
// import visaIcon from "../../assets/image/pay_method_image/visa.png";
// import mastercardIcon from "../../assets/image/pay_method_image/mastercard.png";
// import googlepayIcon from "../../assets/image/pay_method_image/google-pay.png";
// import bitcoinIcon from "../../assets/image/pay_method_image/bitcoin.png";
// import BinanceIcon from "../../assets/image/pay_method_image/Binance.png";
// import rezorpyIcon from "../../assets/image/pay_method_image/rezorpy.png";
// import linkedinIcon from "../../assets/image/social_image/linkedin.png";
// import facebookIcon from "../../assets/image/social_image/facebook.png";
// import instagramIcon from "../../assets/image/social_image/instagram.png";
// import twitterIcon from "../../assets/image/social_image/twitter.png";
// import emailIcon from "../../assets/image/social_image/email.png";
// import fiverrIcon from "../../assets/image/social_image/fiverr.png";
// import upworkIcon from "../../assets/image/social_image/upwork.png";
// const Footer = () => {
//   var [FooterEmail, setFooterEmail] = useState();
//   function LinkedInWindow(link) {
//     window.open(link);
//   }
//   function FacebookWindow(link) {
//     window.open(link);
//   }
//   function InstagramWindow(link) {
//     window.open(link);
//   }
//   function TwitterWindow(link) {
//     window.open(link);
//   }
//   function FiverrWindow(link) {
//     window.open(link);
//   }
//   function UpworkWindow(link) {
//     window.open(link);
//   }
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   /**-------------------cookei */
//   const [CookieShow, setCookieShow] = useState(false);
//   const cookieeClose = () => setCookieShow(false);
//   const cookieeShow = () => setCookieShow(true);
//   /**-------------------privacy */
//   const [HelpShow, setHelpShow] = useState(false);
//   const helpsClose = () => setHelpShow(false);
//   const helpsShow = () => setHelpShow(true);
//   /**-------------------faq */
//   const [FaqShow, setFaqShow] = useState(false);
//   const faqsClose = () => setFaqShow(false);
//   const faqsShow = () => setFaqShow(true);
//   function FooterEmailSubmitHandler() {
//     var templateParams = {
//       to_name: "username: " + navigator.userAgent,
//       subject: "Email Subscriber",
//       from_name: "Email: " + FooterEmail,
//       message: "Message: Email Subscriber On The Website",
//     };
//     emailjs.init("lMgYQoX_cHOnwd6_K");
//     emailjs.send("service_ryvfsfd", "template_6ifyqbf", templateParams).then(
//       function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//       },
//       function (error) {
//         console.log("FAILED...", error);
//       }
//     );
//   }

//   return (
//     <footer className="m-0 p-0">
//       <div className="container-fluid">
//         <div className="footer_wrapper">
//           <div className="footer_box row">
//             <div className="footer-item col-md-5">
//               <div className="py-4">
//                 <img
//                   className="footer_logo"
//                   src={FooterImg}
//                   style={{
//                     width: "300px",
//                     height: "100%",
//                   }}
//                   alt="Desktop Application Development"
//                 />
//                 <p
//                   className="text-white text-capitalize pt-3"
//                   style={{ fontSize: "14px" }}
//                 >
//                   Revenue Rocket Is A Leading Technology Company That
//                   Specializes In Web And Mobile App Development, Desktop
//                   Application Development, SEO, Graphics Design, Penetration
//                   Testing, And More. With A Focus On Innovation And Client
//                   Satisfaction, We Provide Tailored Solutions To Businesses Of
//                   All Sizes.
//                 </p>
//               </div>
//               <div className="payment_methods">
//                 <span>
//                   <img
//                     title="pay with payoneer"
//                     width="30"
//                     height="30"
//                     src={payoneerIcon}
//                     alt="payoneer"
//                   />
//                 </span>
//                 <span>
//                   <img
//                     title="pay with stripe"
//                     width="30"
//                     height="30"
//                     src={stripeIcon}
//                     alt="stripe"
//                   />
//                 </span>
//                 <span>
//                   <img
//                     title="pay with paypal"
//                     width="30"
//                     height="30"
//                     src={paypalIcon}
//                     alt="paypal"
//                   />
//                 </span>
//                 <span>
//                   <img
//                     title="pay with visa"
//                     width="30"
//                     height="30"
//                     src={visaIcon}
//                     alt="visa"
//                   />
//                 </span>
//                 <span>
//                   <img
//                     title="pay with mastercard"
//                     width="30"
//                     height="30"
//                     src={mastercardIcon}
//                     alt="mastercard"
//                   />
//                 </span>
//                 <span>
//                   <img
//                     title="pay with google-pay"
//                     width="30"
//                     height="30"
//                     src={googlepayIcon}
//                     alt="google-pay-india"
//                   />
//                 </span>

//                 <span>
//                   <img
//                     title="pay with rezorpy"
//                     width="30"
//                     height="30"
//                     src={rezorpyIcon}
//                     alt="rezorpy"
//                   />
//                 </span>
//               </div>
//             </div>
//             <div className="footer-item col-md-3">
//               <div className="title">
//                 <h3>Services</h3>
//               </div>
//               <ul>
//                 <li className="text-capitalize">
//                   <NavLink to={"/"}>Home</NavLink>
//                 </li>
//                 <li className="text-capitalize">
//                   <NavLink to={"/about"}>about</NavLink>
//                 </li>
//                 <li className="text-capitalize">
//                   <NavLink to={"/service"}>service</NavLink>
//                 </li>
//                 <li className="text-capitalize">
//                   <NavLink to={"/blogs"}>blogs</NavLink>
//                 </li>
//                 <li className="text-capitalize">
//                   <NavLink to={"/portfolio"}>our work</NavLink>
//                 </li>
//                 <li className="text-capitalize">
//                   <NavLink to={"/calender"}>free consultation</NavLink>
//                 </li>
//               </ul>
//             </div>
//             <div className="footer-item col-md-4">
//               <div className="title pb-3">
//                 <h3>contact us</h3>
//               </div>
//               <div className="d-flex">
//                 <input
//                   type="email"
//                   required
//                   value={FooterEmail}
//                   onChange={(e) => setFooterEmail(e.target.value)}
//                   className="form-control"
//                   placeholder="Enter Email"
//                 />
//                 <button
//                   className="btn text-white"
//                   onClick={FooterEmailSubmitHandler}
//                   style={{ background: "#ee834f" }}
//                 >
//                   Submit
//                 </button>
//               </div>
//               <div className="social pt-3">
//                 <div className="title">
//                   <h5 className="text-capitalize text-white font-weight-bold">
//                     follow up
//                   </h5>
//                   <p
//                     className="text-white text-capitalize"
//                     style={{ fontSize: "14px" }}
//                   >
//                     follow up our community with our updated service
//                   </p>
//                 </div>
//                 <div className="pt-3 footer_social_link">
//                   <span
//                     title="Revenue Rocket linkedin"
//                     style={{ cursor: "pointer" }}
//                     className="p-2 footer_last_social_item"
//                     onClick={() =>
//                       LinkedInWindow("https://www.linkedin.com/in/mabdullah93/")
//                     }
//                   >
//                     <img
//                       width="30"
//                       height="30"
//                       src={linkedinIcon}
//                       alt="linkedin"
//                     />
//                   </span>
//                   <span
//                     title="Revenue Rocket instagram"
//                     style={{ cursor: "pointer" }}
//                     className="p-2 footer_last_social_item"
//                     onClick={() =>
//                       InstagramWindow(
//                         "https://www.instagram.com/revenuerocket2/"
//                       )
//                     }
//                   >
//                     <img
//                       width="30"
//                       height="30"
//                       src={instagramIcon}
//                       alt="instagram"
//                     />
//                   </span>

//                   <span
//                     title="Revenue Rocket email"
//                     style={{ cursor: "pointer" }}
//                     className="p-2 footer_last_social_item"
//                   >
//                     <a href="revenuerocket2@gmail.com" target="_blank">
//                       <img width="25" height="25" src={emailIcon} alt="email" />
//                     </a>
//                   </span>
//                   <span
//                     title="Revenue Rocket fiverr"
//                     style={{ cursor: "pointer" }}
//                     className="p-2 footer_last_social_item"
//                     onClick={() =>
//                       FiverrWindow(
//                         " https://www.fiverr.com/mabdullah4567?up_rollout=true"
//                       )
//                     }
//                   >
//                     <img width="30" height="30" src={fiverrIcon} alt="fiverr" />
//                   </span>
//                   <span
//                     title="Revenue Rocket upwork"
//                     style={{ cursor: "pointer" }}
//                     className="p-2 footer_last_social_item"
//                     onClick={() =>
//                       UpworkWindow(
//                         "https://www.upwork.com/freelancers/~01f36034d354d78835?mp_source=share"
//                       )
//                     }
//                   >
//                     <img width="30" height="30" src={upworkIcon} alt="upwork" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer-ilen">
//         <div>
//           <p>
//             © 2024{" "}
//             <a className="text-white" href="/">
//               Revenue Roctet
//             </a>{" "}
//             All Rights Reserved{" "}
//           </p>
//           <ul>
//             <li
//               security="true"
//               style={{ cursor: "pointer", padding: "0 5px" }}
//               onClick={cookieeShow}
//             >
//               Cookies
//             </li>
//             <li
//               security="true"
//               style={{ cursor: "pointer", padding: "0 5px" }}
//               onClick={helpsShow}
//             >
//               Help
//             </li>
//             <li
//               security="true"
//               style={{ cursor: "pointer", padding: "0 5px" }}
//               onClick={handleShow}
//             >
//               Terms
//             </li>
//             <li
//               security="true"
//               style={{ cursor: "pointer", padding: "0 5px" }}
//               onClick={faqsShow}
//             >
//               FAQs
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* TARMS AND CONDITIONS STATMENT MODAL HERE */}
//       <>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>our Terms & conditions</Modal.Title>
//             {/* <Button variant='secondary' onClick={handleClose}>
//                             <span aria-hidden="true">&times;</span>
//                         </Button> */}
//           </Modal.Header>
//           <Modal.Body>
//             <div class="container-fluid">
//               <div>
//                 <b>Acceptance of Terms</b>
//                 <p>
//                   By accessing and using Revenue Rocket services, including but
//                   not limited to website development, mobile app development,
//                   and digital marketing, you agree to be bound by these terms
//                   and conditions. If you do not agree to these terms, please
//                   refrain from using our services.
//                 </p>
//               </div>
//               <div>
//                 <b>Services</b>
//                 <p>
//                   Revenue Rocket provides web and mobile application
//                   development, digital marketing, and related services. The
//                   specifics of the services provided, including deliverables,
//                   timelines, and pricing, will be outlined in a separate
//                   agreement or project proposal.
//                 </p>
//               </div>
//               <div>
//                 <b>Intellectual Property</b>
//                 <p>
//                   All intellectual property rights, including trademarks,
//                   copyrights, and patents, related to Revenue Rocket services
//                   and deliverables remain the property of Revenue Rocket unless
//                   otherwise stated in a separate agreement. Unauthorized use,
//                   reproduction, or distribution of Revenue Rocket intellectual
//                   property is strictly prohibited.
//                 </p>
//               </div>
//               <div>
//                 <b>Client Responsibilities</b>
//                 <p>
//                   Clients are responsible for providing accurate and complete
//                   information, materials, and necessary access required for the
//                   provision of services by Revenue Rockets. Clients also bear
//                   responsibility for ensuring that any content provided does not
//                   infringe upon any third-party rights.
//                 </p>
//               </div>
//               <div>
//                 <b>Payment and Fees</b>
//                 <p>
//                   Payment terms and fees for Revenue Rocket services will be
//                   outlined in a separate agreement or project proposal. Clients
//                   agree to make timely payments according to the agreed-upon
//                   terms. Failure to make payments may result in project delays
//                   or termination of services.
//                 </p>
//               </div>
//               <div>
//                 <b>Confidentiality</b>
//                 <p>
//                   Revenue Rocket and clients agree to treat any confidential
//                   information shared during the course of the project as
//                   strictly confidential. Both parties shall take appropriate
//                   measures to maintain the confidentiality and protect sensitive
//                   information from unauthorized access or disclosure.
//                 </p>
//               </div>
//               <div>
//                 <b>Limitation of Liability</b>
//                 <p>
//                   Revenue Rocket shall not be held liable for any direct,
//                   indirect, incidental, or consequential damages arising from
//                   the use or inability to use our services. We make no
//                   guarantees or warranties regarding the performance, accuracy,
//                   or suitability of the services provided.
//                 </p>
//               </div>
//               <div>
//                 <b>Termination</b>
//                 <p>
//                   Either party may terminate the agreement for services upon
//                   providing written notice. Termination may result in additional
//                   fees, depending on the stage of the project and the work
//                   completed. Any outstanding payments or obligations shall be
//                   settled upon termination.
//                 </p>
//               </div>
//               <div>
//                 <b>Governing Law and Jurisdiction</b>
//                 <p>
//                   These terms and conditions shall be governed by and construed
//                   in accordance with the laws of [jurisdiction]. Any disputes
//                   arising from these terms and conditions shall be subject to
//                   the exclusive jurisdiction of the courts in [jurisdiction].
//                 </p>
//               </div>
//               <div>
//                 <b>Amendments</b>
//                 <p>
//                   Revenue Rocket reserves the right to modify or update these
//                   terms and conditions at any time. Clients will be notified of
//                   any changes, and continued use of our services after the
//                   notification constitutes acceptance of the modified terms.
//                   These terms and conditions constitute the entire agreement
//                   between Revenue Rocket and its clients and supersede any prior
//                   agreements or understandings. If you have any questions or
//                   concerns about these terms and conditions, please contact
//                   Revenue Rocket for clarification.
//                 </p>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//       {/* TARMS AND CONDITIONS STATMENT MODAL HERE */}
//       {/* COOKIE POLICIY STATMENT MODAL HERE */}
//       <>
//         <Modal show={CookieShow} onHide={cookieeClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Cookie Policy of Revenue Rocket</Modal.Title>
//             {/* <Button variant='secondary' onClick={cookieeClose}><span aria-hidden="true">&times;</span></Button> */}
//           </Modal.Header>
//           <Modal.Body>
//             <div class="container-fluid">
//               <div>
//                 <b>What are Cookies?</b>
//                 <p>
//                   Cookies are small text files that are stored on your device
//                   (computer, mobile device, or tablet) when you visit our
//                   website. These files contain information that helps improve
//                   your browsing experience and allows us to analyze website
//                   traffic and usage.
//                 </p>
//               </div>
//               <div>
//                 <b>Types of Cookies Used</b>
//                 <p>
//                   a. Necessary Cookies: These cookies are essential for the
//                   functioning of our website and cannot be disabled. They enable
//                   core functionality, such as accessing secure areas and
//                   remembering user preferences.
//                 </p>
//                 <p>
//                   b. Analytical Cookies: We use analytical cookies to collect
//                   information about how visitors use our website. This helps us
//                   analyze website traffic, identify trends, and improve our
//                   website's performance and functionality.
//                 </p>
//                 <p>
//                   c. Marketing Cookies: Marketing cookies are used to track
//                   visitors across websites. The information collected is used to
//                   deliver personalized advertisements and measure the
//                   effectiveness of our marketing campaigns.
//                 </p>
//               </div>
//               <div>
//                 <b>Cookie Management</b>
//                 <p>
//                   By using our website, you consent to the use of cookies as
//                   described in this policy. You can manage and control cookies
//                   through your browser settings. Most web browsers allow you to
//                   delete or block cookies, and you can also set preferences for
//                   how cookies are handled. However, please note that blocking or
//                   deleting cookies may impact your browsing experience and
//                   certain website functionality.
//                 </p>
//               </div>
//               <div>
//                 <b>Third-Party Cookies</b>
//                 <p>
//                   We may use third-party services on our website that may also
//                   place cookies on your device. These third-party services
//                   include analytics tools, advertising networks, and social
//                   media platforms. We do not have control over the cookies
//                   placed by these third parties and recommend reviewing their
//                   respective cookie policies for more information.
//                 </p>
//               </div>
//               <div>
//                 <b>Data Privacy and Security</b>
//                 <p>
//                   We are committed to protecting your privacy and ensuring the
//                   security of your personal data. The use of cookies does not
//                   enable us to collect personally identifiable information
//                   unless you voluntarily provide it. For more information on how
//                   we handle and protect your personal data, please refer to our
//                   Privacy Policy.
//                 </p>
//               </div>
//               <div>
//                 <b>Updates to the Cookie Policy</b>
//                 <p>
//                   We may update our Cookie Policy from time to time to reflect
//                   any changes in our practices or legal requirements. We
//                   encourage you to review this policy periodically to stay
//                   informed about how we use cookies. If you have any questions
//                   or concerns about our Cookie Policy, please{" "}
//                   <NavLink to={"/contact"}>contact</NavLink> us for more
//                   information.
//                 </p>
//               </div>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={cookieeClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//       {/* COOKIE POLICIY STATMENT MODAL HERE */}
//       {/* HELP * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
//       <>
//         <Modal show={HelpShow} onHide={helpsClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Our Help & Support</Modal.Title>
//             {/* <Button variant='secondary' onClick={helpsClose}> <span aria-hidden="true">&times;</span></Button> */}
//           </Modal.Header>
//           <Modal.Body>
//             <div>
//               <p>
//                 Our commitment to providing exceptional service goes beyond just
//                 the initial project delivery. We are dedicated to offering
//                 ongoing support and assistance to our clients whenever they need
//                 it. Our help and support services are designed to ensure that
//                 you have a seamless experience throughout your journey with us.
//               </p>
//             </div>
//             <div>
//               <p>
//                 <b>(1)</b> Dedicated Support Team: We have a dedicated team of
//                 support professionals who are ready to assist you with any
//                 queries or issues you may encounter. Our knowledgeable team
//                 members are well-versed in our services and can provide prompt
//                 and reliable assistance.
//               </p>
//               <p>
//                 <b>(2)</b> Timely Responses: We understand the importance of
//                 timely responses when you need help. Our support team strives to
//                 provide quick and efficient responses to your inquiries,
//                 ensuring that you receive the assistance you need in a timely
//                 manner.
//               </p>
//               <p>
//                 <b>(3)</b> Problem Resolution: If you encounter any technical
//                 issues or challenges, our support team will work diligently to
//                 diagnose and resolve them. We leverage our expertise and
//                 experience to find effective solutions, minimizing any
//                 disruption to your operations.
//               </p>
//               <p>
//                 <b>(4)</b> Training and Guidance: We believe in empowering our
//                 clients to make the most of our services. If you require
//                 guidance or training on how to use our solutions effectively,
//                 our team is here to provide comprehensive training sessions and
//                 step-by-step guidance to help you navigate through our
//                 offerings.
//               </p>
//               <p>
//                 <b>(5)</b> Continuous Improvement: We are committed to
//                 continuously improving our services and addressing any feedback
//                 or suggestions you may have. Your input is invaluable to us, and
//                 we take your feedback seriously to enhance our offerings and
//                 deliver an even better experience.
//               </p>
//               <p>
//                 <b>(6)</b> Knowledge Base and Documentation: To facilitate
//                 self-help and easy access to information, we maintain a
//                 comprehensive knowledge base and documentation. This resource
//                 hub includes FAQs, tutorials, and guides that cover various
//                 aspects of our services, enabling you to find answers and
//                 solutions independently.
//               </p>
//               <p>
//                 <b>(7)</b> Regular Updates and Enhancements: As technology
//                 evolves, we strive to stay ahead of the curve and keep our
//                 services up-to-date. We regularly release updates and
//                 enhancements to improve functionality, security, and
//                 performance, ensuring that you benefit from the latest
//                 advancements.
//               </p>
//               <p>
//                 <b>(8)</b> Our goal is to be your trusted partner and provide
//                 comprehensive support at every step. Whether you need assistance
//                 with technical issues, guidance on utilizing our services
//                 effectively, or simply have questions, our help and support
//                 services are designed to provide the support you need to
//                 succeed.
//               </p>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={helpsClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//       {/* HELP * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
//       {/* FAQ * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
//       <>
//         <Modal show={FaqShow} onHide={faqsClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>FAQs</Modal.Title>
//             {/* <Button variant='secondary' onClick={faqsClose}><span aria-hidden="true">&times;</span></Button> */}
//           </Modal.Header>
//           <Modal.Body>
//             <div id="accordianId" role="tablist" aria-multiselectable="true">
//               <Accordion defaultActiveKey="0" flush>
//                 <Accordion.Item eventKey="0">
//                   <Accordion.Header className="accordion-header">
//                     What services does Revenue Rocket provide?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Revenue Rocket offers a range of services including web and
//                     mobile app development, custom plugin and theme development,
//                     SEO, UI/UX design, penetration testing, and more. We provide
//                     comprehensive solutions to meet your business needs.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header className="accordion-header">
//                     How experienced is the team at Revenue Rocket?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Our team consists of highly skilled professionals with years
//                     of experience in their respective domains. We have a diverse
//                     team of experts in web development, mobile app development,
//                     design, SEO, and more, ensuring that we can deliver
//                     top-quality solutions tailored to your requirements.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="2">
//                   <Accordion.Header className="accordion-header">
//                     Can you handle projects of any size?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Yes, we have the capabilities to handle projects of varying
//                     sizes and complexities. Whether you need a small website or
//                     a large-scale enterprise application, we can provide the
//                     expertise and resources to ensure successful project
//                     delivery.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="3">
//                   <Accordion.Header className="accordion-header">
//                     How long does it take to complete a project?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     The project timeline depends on the specific requirements
//                     and scope of work. We work closely with our clients to
//                     establish realistic timelines and milestones. We strive to
//                     deliver projects on time, ensuring quality and customer
//                     satisfaction.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="4">
//                   <Accordion.Header className="accordion-header">
//                     How involved will I be in the development process?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     We believe in close collaboration with our clients
//                     throughout the development process. Your input and feedback
//                     are invaluable to us. We encourage regular communication to
//                     ensure that the project aligns with your vision and
//                     requirements.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="5">
//                   <Accordion.Header className="accordion-header">
//                     Do you offer post-development support and maintenance?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Yes, we provide post-development support and maintenance
//                     services to ensure that your website or application
//                     continues to perform optimally. We offer different support
//                     packages tailored to your needs, including bug fixes,
//                     updates, and enhancements.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="6">
//                   <Accordion.Header className="accordion-header">
//                     How do you ensure the security of my project?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     At Revenue Rocket, we prioritize the security of our
//                     clients' projects. We follow industry best practices and
//                     implement robust security measures to protect your data and
//                     ensure a secure development environment. We conduct regular
//                     security audits and follow strict protocols to safeguard
//                     your project.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="7">
//                   <Accordion.Header className="accordion-header">
//                     Can you assist with website optimization and SEO?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Absolutely! We have expertise in SEO and website
//                     optimization techniques. We can help improve your website's
//                     visibility, organic rankings, and overall performance
//                     through strategic SEO practices and optimization strategies.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="8">
//                   <Accordion.Header className="accordion-header">
//                     {" "}
//                     Can you integrate third-party services into my project?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     Yes, we have experience integrating various third-party
//                     services, APIs, and platforms into projects. Whether it's
//                     payment gateways, social media integrations, or CRM systems,
//                     we can seamlessly incorporate them into your project to
//                     enhance its functionality.
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="9">
//                   <Accordion.Header className="accordion-header">
//                     What is the process to start a project with Revenue Rocket?
//                   </Accordion.Header>
//                   <Accordion.Body className="accordion_body">
//                     To start a project with Revenue Rocket, simply reach out to
//                     us with your requirements. We'll schedule an initial
//                     consultation to discuss your project in detail. From there,
//                     we'll provide you with a proposal outlining the project
//                     scope, timeline, and cost. Once you approve the proposal,
//                     we'll initiate the project development process.
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </div>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={faqsClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//       {/* FAQ * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import "../../assets/css/media-query.css";
import FooterImg from "../../assets/vai/logo1.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

// Payment method icons
import payoneerIcon from "../../assets/image/pay_method_image/payoneer.png";
import stripeIcon from "../../assets/image/pay_method_image/stripe.png";
import paypalIcon from "../../assets/image/pay_method_image/paypal.png";
import visaIcon from "../../assets/image/pay_method_image/visa.png";
import mastercardIcon from "../../assets/image/pay_method_image/mastercard.png";
import googlepayIcon from "../../assets/image/pay_method_image/google-pay.png";
import bitcoinIcon from "../../assets/image/pay_method_image/bitcoin.png";
import BinanceIcon from "../../assets/image/pay_method_image/Binance.png";
import rezorpyIcon from "../../assets/image/pay_method_image/rezorpy.png";

// Social media icons
import linkedinIcon from "../../assets/image/social_image/linkedin.png";
import facebookIcon from "../../assets/image/social_image/facebook.png";
import instagramIcon from "../../assets/image/social_image/instagram.png";
import twitterIcon from "../../assets/image/social_image/twitter.png";
import emailIcon from "../../assets/image/social_image/email.png";
import fiverrIcon from "../../assets/image/social_image/fiverr.png";
import upworkIcon from "../../assets/image/social_image/upwork.png";

// Declare emailjs
let emailjs;

const Footer = () => {
  // State for email input
  const [footerEmail, setFooterEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Modal states
  const [show, setShow] = useState(false);
  const [cookieShow, setCookieShow] = useState(false);
  const [helpShow, setHelpShow] = useState(false);
  const [faqShow, setFaqShow] = useState(false);

  // Modal handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cookieClose = () => setCookieShow(false);
  const cookieShow_ = () => setCookieShow(true);
  const helpClose = () => setHelpShow(false);
  const helpShow_ = () => setHelpShow(true);
  const faqClose = () => setFaqShow(false);
  const faqShow_ = () => setFaqShow(true);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Social media window openers
  const openSocialWindow = (link) => {
    window.open(link);
  };

  // Email validation
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Email submit handler
  const footerEmailSubmitHandler = () => {
    if (!footerEmail || !validateEmail(footerEmail)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);

    // Email submission logic
    var templateParams = {
      to_name: "username: " + navigator.userAgent,
      subject: "Email Subscriber",
      from_name: "Email: " + footerEmail,
      message: "Message: Email Subscriber On The Website",
    };

    // Assuming emailjs is available globally
    if (typeof window !== "undefined" && window.emailjs) {
      emailjs = window.emailjs;
      emailjs.init("lMgYQoX_cHOnwd6_K");
      emailjs.send("service_ryvfsfd", "template_6ifyqbf", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailSubmitted(true);
          setTimeout(() => setEmailSubmitted(false), 3000);
          setFooterEmail("");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } else {
      // Fallback for when emailjs is not available (like in development)
      console.log("Email would be sent with:", templateParams);
      setEmailSubmitted(true);
      setTimeout(() => setEmailSubmitted(false), 3000);
      setFooterEmail("");
    }
  };

  // Payment methods data
  const paymentMethods = [
    { icon: payoneerIcon, name: "payoneer" },
    { icon: stripeIcon, name: "stripe" },
    { icon: paypalIcon, name: "paypal" },
    { icon: visaIcon, name: "visa" },
    { icon: mastercardIcon, name: "mastercard" },
    { icon: googlepayIcon, name: "google-pay" },
    { icon: bitcoinIcon, name: "bitcoin" },
    { icon: BinanceIcon, name: "binance" },
    { icon: rezorpyIcon, name: "rezorpy" },
  ];

  // Social media data
  const socialMedia = [
    {
      icon: linkedinIcon,
      name: "linkedin",
      link: "https://www.linkedin.com/in/mabdullah93/",
      title: "Revenue Rocket LinkedIn",
    },
    {
      icon: facebookIcon,
      name: "facebook",
      link: "#",
      title: "Revenue Rocket Facebook",
    },
    {
      icon: instagramIcon,
      name: "instagram",
      link: "https://www.instagram.com/revenuerocket2/",
      title: "Revenue Rocket Instagram",
    },
    {
      icon: twitterIcon,
      name: "twitter",
      link: "#",
      title: "Revenue Rocket Twitter",
    },
    {
      icon: fiverrIcon,
      name: "fiverr",
      link: "https://www.fiverr.com/mabdullah4567?up_rollout=true",
      title: "Revenue Rocket Fiverr",
    },
    {
      icon: upworkIcon,
      name: "upwork",
      link: "https://www.upwork.com/freelancers/~01f36034d354d78835?mp_source=share",
      title: "Revenue Rocket Upwork",
    },
  ];

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Services" },
    { path: "/blogs", label: "Blogs" },
    { path: "/portfolio", label: "Our Work" },
    { path: "/calender", label: "Free Consultation" },
  ];

  return (
    <footer className="premium-footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-wave-decoration">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="footer-content">
            <div className="footer-grid">
              {/* Company Info */}
              <div className="footer-company-info">
                <div className="footer-logo-container">
                  <img
                    className="footer-logo"
                    src={FooterImg || "/placeholder.svg"}
                    alt="Revenue Rocket Logo"
                  />
                </div>

                <p className="footer-description">
                  Revenue Rocket is a leading technology company that
                  specializes in web and mobile app development, desktop
                  application development, SEO, graphics design, penetration
                  testing, and more. With a focus on innovation and client
                  satisfaction, we provide tailored solutions to businesses of
                  all sizes.
                </p>

                <div className="payment-methods">
                  {paymentMethods.map((method, index) => (
                    <div className="payment-method-item" key={index}>
                      <img
                        title={`Pay with ${method.name}`}
                        src={method.icon || "/placeholder.svg"}
                        alt={method.name}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-links">
                <h3 className="footer-heading">Quick Links</h3>
                <ul className="footer-nav-links">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path} className="footer-nav-link">
                        <span className="link-icon">›</span>
                        <span>{link.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter & Contact */}
              <div className="footer-newsletter">
                <h3 className="footer-heading">Stay Updated</h3>
                <p className="newsletter-text">
                  Subscribe to our newsletter for the latest updates and offers
                </p>

                <div className="newsletter-form">
                  <div
                    className={`input-group ${!isEmailValid ? "invalid" : ""}`}
                  >
                    <input
                      type="email"
                      value={footerEmail}
                      onChange={(e) => {
                        setFooterEmail(e.target.value);
                        setIsEmailValid(true);
                      }}
                      className="newsletter-input"
                      placeholder="Your Email Address"
                      aria-label="Email Address"
                    />
                    <button
                      className="newsletter-button"
                      onClick={footerEmailSubmitHandler}
                      aria-label="Subscribe"
                    >
                      {emailSubmitted ? (
                        <svg
                          className="check-icon"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg
                          className="arrow-icon"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      )}
                    </button>
                  </div>
                  {!isEmailValid && (
                    <p className="email-error">
                      Please enter a valid email address
                    </p>
                  )}
                </div>

                <div className="social-media">
                  <h4 className="social-heading">Connect With Us</h4>
                  <div className="social-icons">
                    {socialMedia.map((social, index) => (
                      <button
                        key={index}
                        className="social-icon-button"
                        onClick={() => openSocialWindow(social.link)}
                        title={social.title}
                        aria-label={`Visit our ${social.name} page`}
                      >
                        <img
                          src={social.icon || "/placeholder.svg"}
                          alt={social.name}
                        />
                      </button>
                    ))}
                    <a
                      href="mailto:revenuerocket2@gmail.com"
                      className="social-icon-button"
                      title="Email Revenue Rocket"
                      aria-label="Send us an email"
                    >
                      <img src={emailIcon || "/placeholder.svg"} alt="email" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} <a href="/">Revenue Rocket</a> All
                Rights Reserved
              </p>
            </div>

            <div className="footer-legal-links">
              <button onClick={cookieShow_} className="legal-link">
                Cookies
              </button>
              <button onClick={helpShow_} className="legal-link">
                Help
              </button>
              <button onClick={handleShow} className="legal-link">
                Terms
              </button>
              <button onClick={faqShow_} className="legal-link">
                FAQs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Terms Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="premium-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Our Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="terms-section">
              <h4>Acceptance of Terms</h4>
              <p>
                By accessing and using Revenue Rocket services, including but
                not limited to website development, mobile app development, and
                digital marketing, you agree to be bound by these terms and
                conditions. If you do not agree to these terms, please refrain
                from using our services.
              </p>
            </div>
            <div className="terms-section">
              <h4>Services</h4>
              <p>
                Revenue Rocket provides web and mobile application development,
                digital marketing, and related services. The specifics of the
                services provided, including deliverables, timelines, and
                pricing, will be outlined in a separate agreement or project
                proposal.
              </p>
            </div>
            <div className="terms-section">
              <h4>Intellectual Property</h4>
              <p>
                All intellectual property rights, including trademarks,
                copyrights, and patents, related to Revenue Rocket services and
                deliverables remain the property of Revenue Rocket unless
                otherwise stated in a separate agreement. Unauthorized use,
                reproduction, or distribution of Revenue Rocket intellectual
                property is strictly prohibited.
              </p>
            </div>
            <div className="terms-section">
              <h4>Client Responsibilities</h4>
              <p>
                Clients are responsible for providing accurate and complete
                information, materials, and necessary access required for the
                provision of services by Revenue Rockets. Clients also bear
                responsibility for ensuring that any content provided does not
                infringe upon any third-party rights.
              </p>
            </div>
            <div className="terms-section">
              <h4>Payment and Fees</h4>
              <p>
                Payment terms and fees for Revenue Rocket services will be
                outlined in a separate agreement or project proposal. Clients
                agree to make timely payments according to the agreed-upon
                terms. Failure to make payments may result in project delays or
                termination of services.
              </p>
            </div>
            <div className="terms-section">
              <h4>Confidentiality</h4>
              <p>
                Revenue Rocket and clients agree to treat any confidential
                information shared during the course of the project as strictly
                confidential. Both parties shall take appropriate measures to
                maintain the confidentiality and protect sensitive information
                from unauthorized access or disclosure.
              </p>
            </div>
            <div className="terms-section">
              <h4>Limitation of Liability</h4>
              <p>
                Revenue Rocket shall not be held liable for any direct,
                indirect, incidental, or consequential damages arising from the
                use or inability to use our services. We make no guarantees or
                warranties regarding the performance, accuracy, or suitability
                of the services provided.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            I Understand
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Cookie Policy Modal */}
      <Modal
        show={cookieShow}
        onHide={cookieClose}
        dialogClassName="premium-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Cookie Policy of Revenue Rocket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="terms-section">
              <h4>What are Cookies?</h4>
              <p>
                Cookies are small text files that are stored on your device
                (computer, mobile device, or tablet) when you visit our website.
                These files contain information that helps improve your browsing
                experience and allows us to analyze website traffic and usage.
              </p>
            </div>
            <div className="terms-section">
              <h4>Types of Cookies Used</h4>
              <p>
                <strong>a. Necessary Cookies:</strong> These cookies are
                essential for the functioning of our website and cannot be
                disabled. They enable core functionality, such as accessing
                secure areas and remembering user preferences.
              </p>
              <p>
                <strong>b. Analytical Cookies:</strong> We use analytical
                cookies to collect information about how visitors use our
                website. This helps us analyze website traffic, identify trends,
                and improve our website's performance and functionality.
              </p>
              <p>
                <strong>c. Marketing Cookies:</strong> Marketing cookies are
                used to track visitors across websites. The information
                collected is used to deliver personalized advertisements and
                measure the effectiveness of our marketing campaigns.
              </p>
            </div>
            <div className="terms-section">
              <h4>Cookie Management</h4>
              <p>
                By using our website, you consent to the use of cookies as
                described in this policy. You can manage and control cookies
                through your browser settings. Most web browsers allow you to
                delete or block cookies, and you can also set preferences for
                how cookies are handled. However, please note that blocking or
                deleting cookies may impact your browsing experience and certain
                website functionality.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={cookieClose}>
            I Understand
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Help Modal */}
      <Modal
        show={helpShow}
        onHide={helpClose}
        dialogClassName="premium-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Our Help & Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <div className="help-intro">
              <p>
                Our commitment to providing exceptional service goes beyond just
                the initial project delivery. We are dedicated to offering
                ongoing support and assistance to our clients whenever they need
                it. Our help and support services are designed to ensure that
                you have a seamless experience throughout your journey with us.
              </p>
            </div>

            <div className="help-features">
              <div className="help-feature">
                <div className="feature-number">1</div>
                <div className="feature-content">
                  <h4>Dedicated Support Team</h4>
                  <p>
                    We have a dedicated team of support professionals who are
                    ready to assist you with any queries or issues you may
                    encounter. Our knowledgeable team members are well-versed in
                    our services and can provide prompt and reliable assistance.
                  </p>
                </div>
              </div>

              <div className="help-feature">
                <div className="feature-number">2</div>
                <div className="feature-content">
                  <h4>Timely Responses</h4>
                  <p>
                    We understand the importance of timely responses when you
                    need help. Our support team strives to provide quick and
                    efficient responses to your inquiries, ensuring that you
                    receive the assistance you need in a timely manner.
                  </p>
                </div>
              </div>

              <div className="help-feature">
                <div className="feature-number">3</div>
                <div className="feature-content">
                  <h4>Problem Resolution</h4>
                  <p>
                    If you encounter any technical issues or challenges, our
                    support team will work diligently to diagnose and resolve
                    them. We leverage our expertise and experience to find
                    effective solutions, minimizing any disruption to your
                    operations.
                  </p>
                </div>
              </div>

              <div className="help-feature">
                <div className="feature-number">4</div>
                <div className="feature-content">
                  <h4>Training and Guidance</h4>
                  <p>
                    We believe in empowering our clients to make the most of our
                    services. If you require guidance or training on how to use
                    our solutions effectively, our team is here to provide
                    comprehensive training sessions and step-by-step guidance to
                    help you navigate through our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={helpClose}>
            Got It
          </Button>
        </Modal.Footer>
      </Modal>

      {/* FAQ Modal */}
      <Modal
        show={faqShow}
        onHide={faqClose}
        dialogClassName="premium-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Frequently Asked Questions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-wrapper">
            <Accordion defaultActiveKey="0" className="premium-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What services does Revenue Rocket provide?
                </Accordion.Header>
                <Accordion.Body>
                  Revenue Rocket offers a range of services including web and
                  mobile app development, custom plugin and theme development,
                  SEO, UI/UX design, penetration testing, and more. We provide
                  comprehensive solutions to meet your business needs.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How experienced is the team at Revenue Rocket?
                </Accordion.Header>
                <Accordion.Body>
                  Our team consists of highly skilled professionals with years
                  of experience in their respective domains. We have a diverse
                  team of experts in web development, mobile app development,
                  design, SEO, and more, ensuring that we can deliver
                  top-quality solutions tailored to your requirements.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Can you handle projects of any size?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we have the capabilities to handle projects of varying
                  sizes and complexities. Whether you need a small website or a
                  large-scale enterprise application, we can provide the
                  expertise and resources to ensure successful project delivery.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How long does it take to complete a project?
                </Accordion.Header>
                <Accordion.Body>
                  The project timeline depends on the specific requirements and
                  scope of work. We work closely with our clients to establish
                  realistic timelines and milestones. We strive to deliver
                  projects on time, ensuring quality and customer satisfaction.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do you offer post-development support and maintenance?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we provide post-development support and maintenance
                  services to ensure that your website or application continues
                  to perform optimally. We offer different support packages
                  tailored to your needs, including bug fixes, updates, and
                  enhancements.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={faqClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer Styles */}
      <style jsx>{`
        .premium-footer {
          position: relative;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: #fff;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          overflow: hidden;
        }

        .footer-container {
          position: relative;
          width: 100%;
        }

        /* Footer Wave Decoration */
        .footer-wave-decoration {
          position: absolute;
          top: -120px;
          left: 0;
          width: 100%;
          height: 120px;
          color: #0f0c29;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave-decoration svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 120px;
          transform: rotateY(180deg);
        }

        /* Footer Top Section */
        .footer-top {
          position: relative;
          padding: 80px 0 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 30px;
        }

        /* Company Info Section */
        .footer-company-info {
          grid-column: span 5;
          display: flex;
          flex-direction: column;
        }

        .footer-logo-container {
          margin-bottom: 20px;
        }

        .footer-logo {
          max-width: 220px;
          height: auto;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        /* Payment Methods */
        .payment-methods {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
        }

        .payment-method-item {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .payment-method-item:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .payment-method-item img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        /* Quick Links Section */
        .footer-links {
          grid-column: span 3;
        }

        .footer-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #6157ff, #74b9ff);
          border-radius: 3px;
        }

        .footer-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-links li {
          margin-bottom: 12px;
        }

        .footer-nav-link {
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-nav-link:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .link-icon {
          margin-right: 8px;
          font-size: 16px;
          color: #6157ff;
        }

        /* Newsletter Section */
        .footer-newsletter {
          grid-column: span 4;
        }

        .newsletter-text {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .newsletter-form {
          margin-bottom: 30px;
        }

        .input-group {
          display: flex;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .input-group.invalid {
          border: 1px solid #ff4d4f;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          padding: 14px 16px;
          color: #fff;
          font-size: 14px;
          outline: none;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-button {
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          border: none;
          padding: 0 20px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-button:hover {
          background: linear-gradient(135deg, #5048e5, #60a5fa);
        }

        .arrow-icon,
        .check-icon {
          transition: all 0.3s ease;
        }

        .newsletter-button:hover .arrow-icon {
          transform: translateX(3px);
        }

        .email-error {
          color: #ff4d4f;
          font-size: 12px;
          margin-top: 8px;
        }

        /* Social Media */
        .social-media {
          margin-top: 20px;
        }

        .social-heading {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .social-icon-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-icon-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .social-icon-button img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        /* Footer Bottom */
        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 20px 0;
          position: relative;
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }

        .copyright a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .copyright a:hover {
          color: #74b9ff;
        }

        .footer-legal-links {
          display: flex;
          gap: 20px;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .legal-link:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Modal Styles */
        :global(.premium-modal) {
          max-width: 700px;
        }

        :global(.premium-modal .modal-content) {
          border-radius: 16px;
          border: none;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        :global(.premium-modal .modal-header) {
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          color: white;
          border-bottom: none;
          padding: 20px 24px;
        }

        :global(.premium-modal .modal-title) {
          font-weight: 600;
          font-size: 20px;
        }

        :global(.premium-modal .modal-header .btn-close) {
          color: white;
          opacity: 0.8;
          box-shadow: none;
        }

        :global(.premium-modal .modal-body) {
          padding: 24px;
          max-height: 70vh;
          overflow-y: auto;
        }

        :global(.premium-modal .modal-footer) {
          border-top: none;
          padding: 16px 24px 24px;
        }

        :global(.premium-modal .btn-primary) {
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        :global(.premium-modal .btn-primary:hover) {
          background: linear-gradient(135deg, #5048e5, #60a5fa);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(97, 87, 255, 0.3);
        }

        .modal-content-wrapper {
          color: #333;
        }

        .terms-section {
          margin-bottom: 24px;
        }

        .terms-section h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #302b63;
        }

        .terms-section p {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
        }

        .help-intro {
          margin-bottom: 30px;
        }

        .help-intro p {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
        }

        .help-features {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .help-feature {
          display: flex;
          gap: 16px;
        }

        .feature-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6157ff, #74b9ff);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }

        .feature-content h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #302b63;
        }

        .feature-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
          margin: 0;
        }

        /* Accordion Styles */
        :global(.premium-accordion) {
          --bs-accordion-bg: transparent;
          --bs-accordion-border-color: rgba(0, 0, 0, 0.1);
          --bs-accordion-btn-bg: #f8f9fa;
          --bs-accordion-btn-color: #302b63;
          --bs-accordion-active-bg: #f0f0ff;
          --bs-accordion-active-color: #6157ff;
        }

        :global(.premium-accordion .accordion-button) {
          font-weight: 600;
          padding: 16px 20px;
          border-radius: 8px !important;
          box-shadow: none;
        }

        :global(.premium-accordion .accordion-button:not(.collapsed)) {
          box-shadow: 0 4px 12px rgba(97, 87, 255, 0.1);
        }

        :global(.premium-accordion .accordion-body) {
          padding: 16px 20px;
          font-size: 14px;
          line-height: 1.6;
          color: #555;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .footer-content,
          .footer-bottom-content {
            padding: 0 40px;
          }
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-company-info {
            grid-column: span 2;
            margin-bottom: 20px;
          }

          .footer-links,
          .footer-newsletter {
            grid-column: span 1;
          }

          .footer-logo {
            max-width: 180px;
          }
        }

        @media (max-width: 767px) {
          .footer-top {
            padding: 60px 0 30px;
          }

          .footer-wave-decoration {
            top: -80px;
            height: 80px;
          }

          .footer-wave-decoration svg {
            height: 80px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-company-info,
          .footer-links,
          .footer-newsletter {
            grid-column: span 1;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .footer-legal-links {
            justify-content: center;
          }

          .payment-methods {
            justify-content: center;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content,
          .footer-bottom-content {
            padding: 0 20px;
          }

          .footer-heading {
            font-size: 16px;
          }

          .footer-description,
          .newsletter-text {
            font-size: 13px;
          }

          .footer-nav-link {
            font-size: 13px;
          }

          .payment-method-item {
            width: 32px;
            height: 32px;
          }

          .payment-method-item img {
            width: 16px;
            height: 16px;
          }

          .social-icon-button {
            width: 36px;
            height: 36px;
          }

          .social-icon-button img {
            width: 18px;
            height: 18px;
          }

          .newsletter-input {
            padding: 12px 14px;
            font-size: 13px;
          }

          .newsletter-button {
            padding: 0 16px;
          }

          .copyright,
          .legal-link {
            font-size: 12px;
          }

          .footer-legal-links {
            gap: 12px;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
