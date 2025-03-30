// import React, { useState } from "react";
// import "./Contact.css";
// import "../../assets/css/media-query.css";
// import Banner from "../../Common/Banners/Banner";
// import Header from "../../Common/Header/Headers";
// import contact_video from "../../assets/video/contact-us.mp4";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "../../Common/Footer/Footer";
// import emailjs from "@emailjs/browser";
// import contactVideo_banner from "../../assets/video/contact_video_banner.jpg";
// const Contact = () => {
//   var [username, setUsername] = useState("");
//   var [email, setEmail] = useState("");
//   var [subject, setSubject] = useState("");
//   var [description, setDescription] = useState("");
//   function alert_message(message) {
//     toast(message);
//   }
//   const SubmitHandler = (e) => {
//     // Get references to input and select elements
//     const input1 = document.getElementById("username");
//     const input2 = document.getElementById("email");
//     const input3 = document.getElementById("subject");
//     const input4 = document.getElementById("description");

//     // Validate each input/select
//     const isInput1Valid = input1.value.trim() !== "";
//     const isInput2Valid = input2.value.trim() !== "";
//     const isInput3Valid = input3.value.trim() !== "";
//     const isInput4Valid = input4.value.trim() !== "";

//     // Apply corresponding styling based on validation result
//     input1.classList.toggle("valid", isInput1Valid);
//     input1.classList.toggle("invalid", !isInput1Valid);

//     input2.classList.toggle("valid", isInput2Valid);
//     input2.classList.toggle("invalid", !isInput2Valid);

//     input3.classList.toggle("valid", isInput3Valid);
//     input3.classList.toggle("invalid", !isInput3Valid);

//     input4.classList.toggle("valid", isInput4Valid);
//     input4.classList.toggle("invalid", !isInput4Valid);

//     // Check if all inputs are valid
//     if (isInput1Valid && isInput2Valid && isInput3Valid && isInput4Valid) {
//       // Perform further actions, such as form submission or displaying a success message
//       // alert('All inputs are valid! Form can be submitted.');
//       var data = {
//         username: username,
//         email: email,
//         subject: subject,
//         description: description,
//         status: 1,
//       };
//       console.log(data);
//       try {
//         fetch("https://api.lenexit.com/api/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//           .then((response) => response.json())
//           .then((result) => {
//             alert_message("Thanks We Will Connect With You Very Soon");
//             var templateParams = {
//               to_name: "username: " + username,
//               subject: subject,
//               from_name: "Email: " + email,
//               message: "Message: " + description,
//             };
//             emailjs.init("lMgYQoX_cHOnwd6_K");
//             emailjs
//               .send("service_ryvfsfd", "template_6ifyqbf", templateParams)
//               .then(
//                 function (response) {
//                   console.log("SUCCESS!", response.status, response.text);
//                 },
//                 function (error) {
//                   console.log("FAILED...", error);
//                 }
//               );
//             setUsername("");
//             setEmail("");
//             setSubject("");
//             setDescription("");
//           });
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       // Display an error message or perform any necessary actions for invalid inputs
//       alert_message("Please Fill In All Required Fields.");
//     }
//     document.getElementById("contact_submit").style.display = "none";
//     setTimeout(() => {
//       document.getElementById("contact_submit").style.display = "block";
//     }, 2000);
//   };

//   return (
//     <>
//       <Header tags={location.href} />
//       <Banner
//         title="Contact with us"
//         color="#fff"
//         Img="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1688301632~exp=1688302232~hmac=6bc6d60feace16570c4bc9a263ce9e8100c5a351a617aa34b6337e705eead88e"
//       />
//       <section id="contact-page">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-5 col-sm-2">
//               <video
//                 poster={contactVideo_banner}
//                 autoPlay
//                 muted
//                 loop
//                 src={contact_video}
//                 style={{ height: "370px" }}
//                 className="img-fluid"
//               ></video>
//               <div className="contact_page_left_side_details">
//                 <div className="shadow-sm p-4 border my-1 rounded">
//                   <img
//                     style={{
//                       opacity: "0.9",
//                       padding: "3px",
//                       borderRadius: "10px",
//                       backgroundColor: "white",
//                     }}
//                     title="phone-connected with Revenue Rocket"
//                     width="30"
//                     height="30"
//                     src="https://img.icons8.com/ios-filled/000000/phone-disconnected.png"
//                     alt="phone-connected with Revenue Rocket"
//                   />
//                   <span
//                     style={{ fontSize: "18px" }}
//                     className="pl-2 text-capitalize font-weight-bold ml-2"
//                   >
//                     contact us:{" "}
//                   </span>
//                   <span className="ml-2" style={{ fontSize: "16px" }}>
//                     +923006223384
//                   </span>
//                 </div>
//                 <div className="shadow-sm p-4 border my-1 rounded">
//                   <img
//                     style={{
//                       opacity: "0.9",
//                       padding: "3px",
//                       borderRadius: "10px",
//                       backgroundColor: "white",
//                     }}
//                     title="mail-connected with lenexit"
//                     width="25"
//                     height="25"
//                     src="https://img.icons8.com/ios-filled/50/mail.png"
//                     alt="mail-connected with lenexit"
//                   />
//                   <span
//                     style={{ fontSize: "18px" }}
//                     className="pl-2 text-capitalize font-weight-bold ml-2"
//                   >
//                     E-mail:{" "}
//                   </span>
//                   <span className="ml-2" style={{ fontSize: "16px" }}>
//                     revenuerocket2@gmail.com
//                   </span>
//                 </div>
//                 <div className="shadow-sm p-4 border my-1 rounded">
//                   <img
//                     style={{
//                       opacity: "0.9",
//                       padding: "3px",
//                       borderRadius: "10px",
//                       backgroundColor: "white",
//                     }}
//                     title="address-connect with Revenue Rocket"
//                     width="30"
//                     height="30"
//                     src="https://img.icons8.com/ios-filled/50/address--v1.png"
//                     alt="address-connect with lenexit"
//                   />
//                   <span
//                     style={{ fontSize: "18px" }}
//                     className="pl-2 text-capitalize font-weight-bold ml-2"
//                   >
//                     office:{" "}
//                   </span>
//                   <span className="ml-2" style={{ fontSize: "16px" }}>
//                     Pakistan
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-sm-2">
//               <form className="card p-3 text-dark">
//                 <div className="title pt-3 pb-2">
//                   <h3
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "1.7rem",
//                       color: "#000000",
//                     }}
//                   >
//                     Let's Start Growing Your Business Today
//                   </h3>
//                   <p style={{ fontSize: "14px" }}>
//                     Contact us today to grow your business with customized
//                     digital marketing solutions and dedicated support.
//                   </p>
//                 </div>
//                 <div id="alert" className="mb-3 p-2"></div>
//                 <ToastContainer />
//                 <div className="form-group">
//                   <label htmlFor="" className="text-capitalize">
//                     your name
//                   </label>
//                   <input
//                     type="text"
//                     requied
//                     name="username"
//                     id="username"
//                     onChange={(e) => setUsername(e.target.value)}
//                     value={username}
//                     required
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="" className="text-capitalize">
//                     E-Mail
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                     required
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="" className="text-capitalize">
//                     subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     id="subject"
//                     onChange={(e) => setSubject(e.target.value)}
//                     value={subject}
//                     required
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="" className="text-capitalize">
//                     message
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="description"
//                     name="description"
//                     rows="3"
//                     onChange={(e) => setDescription(e.target.value)}
//                     value={description}
//                   ></textarea>
//                 </div>
//                 <div className="mt-1">
//                   <button
//                     type="button"
//                     id="contact_submit"
//                     onClick={SubmitHandler}
//                     style={{ backgroundColor: "#ed8854", color: "whitesmoke" }}
//                     className="btn text-capitalize m-0"
//                   >
//                     submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div style={{ padding: "40px 0", height: "60vh" }}>
//             <iframe
//               width={"100%"}
//               height={"100%"}
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.2158434414917!2d90.36412024204265!3d23.828313942115678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c139f78a8653%3A0x823d18dd4320d2b1!2s4%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1689914050252!5m2!1sen!2sbd"
//               allowFullScreen="true"
//               loading="lazy"
//               frameborder="0"
//               style={{ border: "4px solid #eee", borderRadius: "4px" }}
//             ></iframe>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

"use client";

import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import "../../assets/css/media-query.css";
import contact_video from "../../assets/video/contact-us.mp4";
import contactVideo_banner from "../../assets/video/contact_video_banner.jpg";

// EmailJS credentials directly in the component
const EMAIL_SERVICE_ID = "service_v4hquk1";
const EMAIL_TEMPLATE_ID = "template_nsjhh6h";
const EMAIL_USER_ID = "D3nQulaSLpUIaocqG";

// Add this right after the constants (EMAIL_SERVICE_ID, etc.)
// Initialize EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mapHovered, setMapHovered] = useState(false);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS with the user ID
    let isMounted = true; // Add a flag to track component mount status

    const initializeEmailJS = async () => {
      try {
        console.log("Initializing EmailJS with user ID:", EMAIL_USER_ID);
        await emailjs.init(EMAIL_USER_ID);
        if (isMounted) {
          console.log("EmailJS initialized successfully");
        }
      } catch (error) {
        if (isMounted) {
          console.error("EmailJS initialization error:", error);
        }
      }
    };

    initializeEmailJS();

    return () => {
      isMounted = false; // Set the flag to false when the component unmounts
    };
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.description.trim()) {
      errors.description = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const alert_message = (message, type = "info") => {
    toast(message, { type });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      description: "",
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert_message("Please fill in all required fields correctly.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct EmailJS send approach (similar to contactform22.jsx)
      console.log("Sending email with EmailJS...");

      const emailParams = {
        name: formData.username,
        email: formData.email,
        message: formData.description,
      };

      const emailResult = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        emailParams,
        {
          publicKey: EMAIL_USER_ID,
        }
      );

      console.log("EmailJS result:", emailResult);

      if (emailResult.status === 200) {
        // Success message and form reset
        alert_message("Thanks! We will connect with you very soon.", "success");
        resetForm();

        // Add success animation to form
        if (formRef.current) {
          formRef.current.classList.add("form-success");
          setTimeout(() => {
            formRef.current.classList.remove("form-success");
          }, 1500);
        }
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);

      // More detailed error message
      let errorMessage = "Something went wrong. ";

      if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += "Please try again later.";
      }

      alert_message(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header tags={location.href} />

      {/* Premium Banner - Matching the image design */}
      <div className="premium-banner">
        <div className="banner-overlay"></div>
        <div className="hexagon-pattern"></div>
        <div className="banner-content">
          <h1 className="banner-title">Contact Us</h1>
          <div className="title-underline"></div>
          <p className="banner-subtitle">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </div>

      <section id="contact-page">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Contact Information</span>
            <h2 className="section-title">Get in Touch with Our Team</h2>
            <div className="section-divider">
              <span></span>
            </div>
          </div>

          <div className="contact-wrapper">
            {/* Contact Info Section */}
            <div
              className="contact-info animate-section"
              data-id="contact-info"
              ref={contactInfoRef}
            >
              <div
                className={`video-container fade-in ${
                  isVisible["contact-info"] ? "visible" : ""
                }`}
              >
                <video
                  poster={contactVideo_banner}
                  autoPlay
                  muted
                  loop
                  src={contact_video}
                  className="contact-video"
                  playsInline
                ></video>
                <div className="video-overlay">
                  <div className="pulse-circle"></div>
                </div>
              </div>

              <div
                className={`contact-details fade-in ${
                  isVisible["contact-info"] ? "visible" : ""
                }`}
              >
                <h3 className="contact-details-title">Connect With Us</h3>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>+923006223384</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>revenuerocket2@gmail.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4>Office</h4>
                    <p>Pakistan</p>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div
              className="contact-form-container animate-section"
              data-id="contact-form"
              id="contact-form"
            >
              <form
                className={`contact-form fade-in ${
                  isVisible["contact-form"] ? "visible" : ""
                }`}
                ref={formRef}
                onSubmit={SubmitHandler}
              >
                <div className="form-header">
                  <h2>Let's Start Growing Your Business Today</h2>
                  <p>
                    Contact us today to grow your business with customized
                    digital marketing solutions and dedicated support.
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="username">Your Name</label>
                  <div className="input-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="input-icon"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={formErrors.username ? "error" : ""}
                      placeholder="Enter your name"
                    />
                  </div>
                  {formErrors.username && (
                    <span className="error-message">{formErrors.username}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="input-icon"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? "error" : ""}
                      placeholder="Enter your email"
                    />
                  </div>
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="description">Message</label>
                  <div className="input-wrapper textarea-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="input-icon textarea-icon"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      className={formErrors.description ? "error" : ""}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  {formErrors.description && (
                    <span className="error-message">
                      {formErrors.description}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="button-icon"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Ultra Premium Map Section */}
          <div className="map-section-container">
            <div className="map-section-header">
              <h2 className="map-section-title">Find Us</h2>
              <p className="map-section-subtitle">
                Visit our office or contact us online
              </p>
            </div>

            <div className="map-container animate-section" data-id="map">
              <div
                className={`map-wrapper premium-map fade-in ${
                  isVisible.map ? "visible" : ""
                } ${mapHovered ? "hovered" : ""}`}
                ref={mapRef}
                onMouseEnter={() => setMapHovered(true)}
                onMouseLeave={() => setMapHovered(false)}
              >
                <div className="map-overlay">
                  <div className="map-card">
                    <div className="map-card-header">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="map-card-icon"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <h3>Our Location</h3>
                    </div>
                    <div className="map-card-content">
                      <p>123 Business Avenue</p>
                      <p>Gujranwala, Punjab, Pakistan</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-directions-button"
                      >
                        Get Directions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="map-pin-container">
                  <div className="map-pin">
                    <div className="map-pin-pulse"></div>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217762.13795420213!2d74.03746449550566!3d32.16555069383186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29f33e197e89%3A0x53a7ff4c18bc3c36!2sSatellite%20Town%2C%20Gujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711803600361!5m2!1sen!2s"
                  allowFullScreen="true"
                  loading="lazy"
                  title="Our Location"
                  className="google-map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact CTA Section */}
          <div className="contact-cta-section">
            <div className="cta-content">
              <h2>Ready to Grow Your Business?</h2>
              <p>Let's work together to achieve your business goals.</p>
            </div>
            <a href="#contact-form" className="cta-button">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={5000} />
      <Footer />

      <style jsx>{`
        /* Premium Banner - Matching the image design */
        .premium-banner {
          position: relative;
          height: 60vh;
          min-height: 400px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0a0a0a;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.7)
          );
          z-index: 2;
        }

        .hexagon-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23ffffff" fillOpacity="0.05" d="M50 0L93.3 25v50L50 100L6.7 75V25L50 0z"/></svg>');
          background-size: 150px 150px;
          z-index: 3;
          opacity: 0.3;
        }

        .banner-content {
          position: relative;
          z-index: 4;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .banner-title {
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 1rem;
          line-height: 1.1;
          color: #ffffff;
          text-transform: capitalize;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: #8a5cf6;
          margin: 1.5rem auto 2rem;
          border-radius: 2px;
        }

        .banner-subtitle {
          font-size: 1.35rem;
          font-weight: 300;
          color: #e2e2e2;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: 3rem;
          }

          .banner-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .banner-title {
            font-size: 2.5rem;
          }

          .banner-subtitle {
            font-size: 1rem;
          }

          .premium-banner {
            min-height: 350px;
          }
        }
        /* Ultra Premium Contact Page Styling - Optimized for Performance */
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");

        /* Main Contact Section */
        #contact-page {
          font-family: "Plus Jakarta Sans", sans-serif;
          background-color: #0a0a0a;
          color: #e2e8f0;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          display: inline-block;
          font-size: 1rem;
          font-weight: 500;
          color: #ed8854;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .section-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        .section-divider span {
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(
            to right,
            #ed8854,
            rgba(237, 136, 84, 0.3)
          );
          border-radius: 3px;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 5rem;
        }

        /* Background Elements */
        #contact-page::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 15% 50%,
              rgba(56, 189, 248, 0.05) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 85, 247, 0.05) 0%,
              transparent 25%
            );
          pointer-events: none;
          z-index: 0;
        }

        /* Contact Info Section */
        .contact-info {
          background: #141414;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-info:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .video-container {
          width: 100%;
          height: 300px;
          overflow: hidden;
          position: relative;
        }

        .contact-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 5s ease;
        }

        .video-container:hover .contact-video {
          transform: scale(1.15);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.2),
            rgba(20, 20, 20, 0.6)
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(237, 136, 84, 0.2);
          position: relative;
          animation: pulse 2s infinite;
        }

        .pulse-circle::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: #ed8854;
          border-radius: 50%;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }

        .contact-details {
          padding: 2.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-details-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .contact-details-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: #ed8854;
          border-radius: 3px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-card:hover {
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
          border-color: rgba(237, 136, 84, 0.3);
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: rgba(237, 136, 84, 0.1);
          border-radius: 12px;
          color: #ed8854;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon {
          background: rgba(237, 136, 84, 0.2);
          transform: scale(1.1);
        }

        .contact-info-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .contact-info-content p {
          font-size: 1.05rem;
          color: #a1a1aa;
          line-height: 1.5;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          color: #a1a1aa;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-link:hover {
          background: #ed8854;
          color: #fff;
          transform: translateY(-5px) rotate(360deg);
          box-shadow: 0 10px 20px rgba(237, 136, 84, 0.3);
        }

        /* Contact Form Section */
        .contact-form-container {
          position: relative;
        }

        .contact-form {
          background: #141414;
          border-radius: 16px;
          padding: 3.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-form:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          border-color: rgba(237, 136, 84, 0.1);
        }

        .form-header {
          margin-bottom: 3rem;
        }

        .form-header h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .form-header p {
          font-size: 1.1rem;
          color: #a1a1aa;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-group label {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #d4d4d8;
          margin-bottom: 0.8rem;
          text-transform: capitalize;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1.2rem;
          color: #a1a1aa;
          transition: all 0.3s ease;
        }

        .textarea-icon {
          top: 1.2rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1.2rem 1.2rem 1.2rem 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          font-size: 1.05rem;
          color: #e2e8f0;
          transition: all 0.3s ease;
        }

        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #ed8854;
          background: rgba(255, 255, 255, 0.05);
          outline: none;
          box-shadow: 0 0 0 4px rgba(237, 136, 84, 0.1);
        }

        .form-group input:focus + .input-icon,
        .form-group textarea:focus + .input-icon {
          color: #ed8854;
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #e74c3c;
          background: rgba(231, 76, 60, 0.1);
        }

        .error-message {
          display: block;
          color: #e74c3c;
          font-size: 0.9rem;
          margin-top: 0.8rem;
          font-weight: 500;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: #ed8854;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(237, 136, 84, 0.3);
        }

        .submit-button:hover {
          background: #e67e42;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(237, 136, 84, 0.4);
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .submit-button:hover .button-icon {
          transform: translateX(3px);
        }

        .submit-button:disabled {
          background: rgba(237, 136, 84, 0.5);
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .loading-spinner {
          display: inline-block;
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Form Success Animation */
        .form-success {
          animation: formSuccess 1.5s ease;
        }

        @keyframes formSuccess {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* Map Section */
        .map-section-container {
          margin-bottom: 5rem;
        }

        .map-section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .map-section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .map-section-subtitle {
          font-size: 1.2rem;
          color: #a1a1aa;
        }

        .map-container {
          margin-top: 2rem;
          position: relative;
        }

        .map-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          height: 600px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          transition: all 0.5s ease;
        }

        .premium-map {
          transform: perspective(1000px) rotateX(5deg);
        }

        .premium-map.hovered {
          transform: perspective(1000px) rotateX(0);
        }

        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            transparent 60%
          );
          z-index: 10;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .premium-map.hovered .map-overlay {
          opacity: 0.5;
        }

        .map-card {
          position: absolute;
          top: 50px;
          left: 50px;
          width: 300px;
          background: rgba(20, 20, 20, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 2rem;
          z-index: 20;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .map-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(237, 136, 84, 0.2);
        }

        .map-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .map-card-icon {
          color: #ed8854;
        }

        .map-card-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .map-card-content {
          color: #a1a1aa;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .map-card-content p {
          margin-bottom: 0.5rem;
        }

        .map-directions-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(237, 136, 84, 0.1);
          color: #ed8854;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .map-directions-button:hover {
          background: rgba(237, 136, 84, 0.2);
          transform: translateY(-2px);
        }

        .map-pin-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 15;
          pointer-events: none;
        }

        .map-pin {
          width: 30px;
          height: 30px;
          background: #ed8854;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          animation: bounce 2s infinite;
        }

        .map-pin::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        .map-pin-pulse {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(237, 136, 84, 0.3);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          animation: pulse 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: rotate(-45deg) translateY(0);
          }
          40% {
            transform: rotate(-45deg) translateY(-10px);
          }
          60% {
            transform: rotate(-45deg) translateY(-5px);
          }
        }

        .google-map {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(0.5) contrast(1.2) brightness(0.9) saturate(1.2);
          transition: filter 0.5s ease;
        }

        .premium-map.hovered .google-map {
          filter: grayscale(0) contrast(1.1) brightness(1) saturate(1.3);
        }

        /* Contact CTA Section */
        .contact-cta-section {
          background: linear-gradient(135deg, #141414, #1a1a1a);
          border-radius: 16px;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .contact-cta-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ed8854' fillOpacity='0.05' fillRule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .cta-content {
          max-width: 60%;
          position: relative;
          z-index: 1;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #a1a1aa;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: #ed8854;
          color: #fff;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(237, 136, 84, 0.3);
          position: relative;
          z-index: 1;
        }

        .cta-button:hover {
          background: #e67e42;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(237, 136, 84, 0.4);
        }

        /* Animation Classes */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .contact-wrapper {
            gap: 2rem;
          }

          .contact-form {
            padding: 2.5rem;
          }

          .banner-title {
            font-size: 3.5rem;
          }

          .map-card {
            left: 30px;
            width: 280px;
          }

          .contact-cta-section {
            padding: 3rem;
          }
        }

        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-info {
            max-width: 100%;
          }

          .video-container {
            height: 350px;
          }

          .map-wrapper {
            height: 500px;
          }

          .banner-title {
            font-size: 3rem;
          }

          .banner-subtitle {
            font-size: 1.2rem;
          }

          .contact-cta-section {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .cta-content {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          #contact-page {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1.5rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .form-header h2 {
            font-size: 1.8rem;
          }

          .form-header p {
            font-size: 1rem;
          }

          .ultra-premium-banner {
            height: 70vh;
            min-height: 450px;
          }

          .video-container {
            height: 250px;
          }

          .map-wrapper {
            height: 400px;
          }

          .map-card {
            top: 30px;
            left: 30px;
            width: 250px;
            padding: 1.5rem;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .banner-subtitle {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .contact-form {
            padding: 1.5rem;
          }

          .form-header h2 {
            font-size: 1.5rem;
          }

          .banner-title {
            font-size: 2rem;
          }

          .banner-subtitle {
            font-size: 1rem;
          }

          .banner-badge {
            font-size: 0.8rem;
            padding: 0.4rem 1.2rem;
          }

          .ultra-premium-banner {
            min-height: 400px;
          }

          .map-wrapper {
            height: 350px;
            transform: none !important;
          }

          .map-card {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            margin-bottom: 1rem;
          }

          .map-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7) 0%,
              rgba(0, 0, 0, 0.3) 100%
            );
          }

          .submit-button {
            width: 100%;
          }

          .contact-cta-section {
            padding: 2rem;
          }

          .cta-content h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .contact-form {
            padding: 1.25rem;
          }

          .form-group input,
          .form-group textarea {
            padding: 1rem 1rem 1rem 2.5rem;
            font-size: 0.95rem;
          }

          .input-icon {
            left: 0.8rem;
          }

          .contact-details-title {
            font-size: 1.5rem;
          }

          .contact-info-content h4 {
            font-size: 1rem;
          }

          .contact-info-content p {
            font-size: 0.9rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .banner-title {
            font-size: 1.8rem;
          }

          .map-section-title {
            font-size: 1.8rem;
          }

          .map-section-subtitle {
            font-size: 1rem;
          }

          .contact-details {
            padding: 1.5rem;
          }

          .contact-card {
            padding: 1.2rem;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) {
          .contact-card:hover {
            transform: none;
          }

          .social-link:hover {
            transform: none;
          }

          .submit-button:hover {
            transform: none;
          }

          .contact-form:hover,
          .contact-info:hover,
          .map-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
