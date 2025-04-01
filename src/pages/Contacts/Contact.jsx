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

// EmailJS credentials
const EMAIL_SERVICE_ID = "service_v4hquk1";
const EMAIL_TEMPLATE_ID = "template_nsjhh6h";
const EMAIL_USER_ID = "D3nQulaSLpUIaocqG";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    description: "",
    phone: "",
    company: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [mapHovered, setMapHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [formSuccess, setFormSuccess] = useState(false);

  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const mapRef = useRef(null);
  const videoRef = useRef(null);

  // Initialize EmailJS
  useEffect(() => {
    let isMounted = true;

    const initializeEmailJS = async () => {
      try {
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
      isMounted = false;
    };
  }, []);

  // Animation on scroll with IntersectionObserver - simplified for performance
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

  // Video play/pause based on visibility
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleVideoIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      });
    };

    const videoObserver = new IntersectionObserver(
      handleVideoIntersect,
      options
    );

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        videoObserver.unobserve(videoRef.current);
      }
    };
  }, [videoRef.current]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    if (!formData.username.trim()) {
      errors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.description.trim()) {
      errors.description = "Message is required";
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const alert_message = (message, type = "info") => {
    toast(message, {
      type,
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
        background:
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      },
    });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      subject: "",
      description: "",
      phone: "",
      company: "",
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
      // Prepare email parameters
      const emailParams = {
        name: formData.username,
        email: formData.email,
        subject: formData.subject,
        message: formData.description,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
      };

      // Send email using EmailJS
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
        setFormSuccess(true);

        // Reset success state after animation
        setTimeout(() => {
          setFormSuccess(false);
        }, 3000);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header tags={location.href} />

      {/* Premium Banner */}
      <div className="premium-banner">
        <div className="banner-image-container">
          <div className="banner-image"></div>
        </div>
        <div className="banner-overlay"></div>
        {/* <div className="hexagon-pattern"></div> */}
        <div className="banner-content">
          <div className="banner-badge">Get in Touch</div>
          <h1 className="banner-title">Contact Us</h1>
          <div className="title-underline">
            <span></span>
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
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <span></span>
          </div>
          <p className="banner-subtitle">
            We're here to help and answer any questions you might have. We look
            forward to hearing from you.
          </p>
        </div>
      </div>

      <section id="contact-page">
        <div className="container">
          <div className="section-header animate-section" data-id="header">
            <span
              className={`section-subtitle fade-in ${
                isVisible.header ? "visible" : ""
              }`}
            >
              Contact Information
            </span>
            <h2
              className={`section-title fade-in ${
                isVisible.header ? "visible" : ""
              }`}
            >
              Get in Touch with Our Team
            </h2>
            <div
              className={`section-divider fade-in ${
                isVisible.header ? "visible" : ""
              }`}
            >
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
                  ref={videoRef}
                  poster={contactVideo_banner}
                  autoPlay
                  muted
                  loop
                  src={contact_video}
                  className="contact-video"
                  playsInline
                ></video>
                <div className="video-overlay"></div>
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
                    <span className="availability">Available 24/7</span>
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
                    <span className="availability">
                      Response within 24 hours
                    </span>
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
                    <span className="availability">Mon-Fri: 9AM-5PM</span>
                  </div>
                </div>

                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
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
                  <a href="#" className="social-link" aria-label="Twitter">
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
                  <a href="#" className="social-link" aria-label="Instagram">
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
                  <a href="#" className="social-link" aria-label="LinkedIn">
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
              <div className="form-tabs">
                <button
                  className={`form-tab ${
                    activeTab === "general" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("general")}
                >
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
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  General Inquiry
                </button>
                <button
                  className={`form-tab ${
                    activeTab === "support" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("support")}
                >
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
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  Support
                </button>
                <button
                  className={`form-tab ${
                    activeTab === "business" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("business")}
                >
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
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Business
                </button>
              </div>

              <form
                className={`contact-form fade-in ${
                  isVisible["contact-form"] ? "visible" : ""
                } ${formSuccess ? "success" : ""}`}
                ref={formRef}
                onSubmit={SubmitHandler}
              >
                <div className="form-header">
                  <h2>
                    {activeTab === "general" &&
                      "Let's Start Growing Your Business Today"}
                    {activeTab === "support" && "Need Help? We're Here For You"}
                    {activeTab === "business" && "Partner With Us For Success"}
                  </h2>
                  <p>
                    {activeTab === "general" &&
                      "Contact us today to grow your business with customized digital marketing solutions and dedicated support."}
                    {activeTab === "support" &&
                      "Our support team is ready to assist you with any questions or issues you might have."}
                    {activeTab === "business" &&
                      "Explore partnership opportunities and business collaborations with our team."}
                  </p>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="username">
                      Your Name <span className="required">*</span>
                    </label>
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
                      <span className="error-message">
                        {formErrors.username}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={formErrors.phone ? "error" : ""}
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="error-message">{formErrors.phone}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
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
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject <span className="required">*</span>
                  </label>
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
                      <line x1="4" y1="9" x2="20" y2="9"></line>
                      <line x1="4" y1="15" x2="20" y2="15"></line>
                      <line x1="10" y1="3" x2="8" y2="21"></line>
                      <line x1="16" y1="3" x2="14" y2="21"></line>
                    </svg>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={formErrors.subject ? "error" : ""}
                      placeholder="Enter message subject"
                    />
                  </div>
                  {formErrors.subject && (
                    <span className="error-message">{formErrors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    Message <span className="required">*</span>
                  </label>
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

                <div className="form-footer">
                  <div className="privacy-note">
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
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>Your information is secure and encrypted</span>
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
                </div>

                {/* Success Animation Elements */}
                <div className="success-animation">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark-circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark-check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                  <p>Message Sent Successfully!</p>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div
            className="map-section-container animate-section"
            data-id="map-section"
          >
            <div
              className={`map-section-header fade-in ${
                isVisible["map-section"] ? "visible" : ""
              }`}
            >
              <h2 className="map-section-title">Find Us</h2>
              <p className="map-section-subtitle">
                Visit our office or contact us online
              </p>
            </div>

            <div className="map-container">
              <div
                className={`map-wrapper premium-map fade-in ${
                  isVisible["map-section"] ? "visible" : ""
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

          {/* FAQ Section */}
          <div className="faq-section animate-section" data-id="faq">
            <div
              className={`faq-header fade-in ${isVisible.faq ? "visible" : ""}`}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about our services</p>
            </div>

            <div
              className={`faq-grid fade-in ${isVisible.faq ? "visible" : ""}`}
            >
              <div className="faq-item">
                <div className="faq-question">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3>What services do you offer?</h3>
                </div>
                <div className="faq-answer">
                  <p>
                    We offer a comprehensive range of digital marketing services
                    including SEO, social media marketing, content creation, web
                    development, and more. Our team tailors solutions to meet
                    your specific business needs.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3>How quickly can I expect a response?</h3>
                </div>
                <div className="faq-answer">
                  <p>
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, you can reach us directly
                    by phone for immediate assistance.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3>Do you work with international clients?</h3>
                </div>
                <div className="faq-answer">
                  <p>
                    Yes, we work with clients globally. Our team is experienced
                    in handling international projects and can accommodate
                    different time zones for meetings and communication.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3>What is your pricing structure?</h3>
                </div>
                <div className="faq-answer">
                  <p>
                    Our pricing varies based on project requirements and scope.
                    We offer customized quotes after understanding your specific
                    needs. Contact us for a free consultation and detailed
                    pricing information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA Section */}
          <div className="contact-cta-section animate-section" data-id="cta">
            <div
              className={`cta-content fade-in ${
                isVisible.cta ? "visible" : ""
              }`}
            >
              <h2>Ready to Grow Your Business?</h2>
              <p>Let's work together to achieve your business goals.</p>
            </div>
            <a
              href="#contact-form"
              className={`cta-button fade-in ${isVisible.cta ? "visible" : ""}`}
            >
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

      <ToastContainer position="bottom-right" autoClose={5000} />
      <Footer />

      <style jsx>{`
        /* Optimized Contact Page Styling - Mobile Responsive with Reduced Animations */
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap");

        /* Premium Banner */
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

        .banner-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .banner-image {
          width: 100%;
          height: 100%;
          background-image: url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
          background-size: cover;
          background-position: center;
          filter: brightness(0.4) contrast(1.2) saturate(1.1);
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

        .banner-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(237, 136, 84, 0.1);
          border: 1px solid rgba(237, 136, 84, 0.3);
          border-radius: 30px;
          color: #ed8854;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .banner-title {
          font-family: "Playfair Display", serif;
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: #ffffff;
          text-transform: capitalize;
        }

        .title-underline {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1.5rem auto 2rem;
          gap: 1rem;
          color: #ed8854;
        }

        .title-underline span {
          height: 2px;
          width: 40px;
          background: #ed8854;
          border-radius: 2px;
        }

        .banner-subtitle {
          font-size: 1.25rem;
          font-weight: 300;
          color: #e2e2e2;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Main Contact Section */
        #contact-page {
          font-family: "Plus Jakarta Sans", sans-serif;
          background-color: #0a0a0a;
          color: #e2e8f0;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        #contact-page::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
              circle at 15% 50%,
              rgba(237, 136, 84, 0.05) 0%,
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

        .container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
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
          border: 1px solid rgba(255, 255, 255, 0.05);
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
          margin-bottom: 0.5rem;
        }

        .availability {
          display: inline-block;
          font-size: 0.85rem;
          color: #ed8854;
          background: rgba(237, 136, 84, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          margin-top: 0.5rem;
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
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .social-link:hover {
          background: #ed8854;
          color: #fff;
        }

        /* Contact Form Section */
        .contact-form-container {
          position: relative;
        }

        .form-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          color: #a1a1aa;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .form-tab:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .form-tab.active {
          background: rgba(237, 136, 84, 0.1);
          border-color: rgba(237, 136, 84, 0.3);
          color: #ed8854;
        }

        .contact-form {
          background: #141414;
          border-radius: 16px;
          padding: 3.5rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.05);
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

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
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

        .required {
          color: #ed8854;
          margin-left: 0.25rem;
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
          transition: color 0.3s ease;
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
          transition: border-color 0.3s ease, background-color 0.3s ease;
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

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }

        .privacy-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #a1a1aa;
          font-size: 0.9rem;
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
          transition: background-color 0.3s ease;
          text-transform: capitalize;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(237, 136, 84, 0.3);
        }

        .submit-button:hover {
          background: #e67e42;
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

        /* Success Animation */
        .contact-form.success .success-animation {
          opacity: 1;
          visibility: visible;
        }

        .success-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(20, 20, 20, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s ease;
          z-index: 10;
          border-radius: 16px;
        }

        .success-animation p {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-top: 2rem;
        }

        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #10b981;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #10b981;
          animation: fill 0.4s ease-in-out 0.4s forwards,
            scale 0.3s ease-in-out 0.9s both;
        }

        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #10b981;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%,
          100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px rgba(16, 185, 129, 0.1);
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
          height: 500px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .premium-map {
          transform: perspective(1000px) rotateX(0);
          transition: transform 0.5s ease;
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
          transition: background-color 0.3s ease;
          text-decoration: none;
        }

        .map-directions-button:hover {
          background: rgba(237, 136, 84, 0.2);
        }

        .google-map {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(0.5) contrast(1.2) brightness(0.9);
          transition: filter 0.5s ease;
        }

        .premium-map.hovered .google-map {
          filter: grayscale(0) contrast(1.1) brightness(1);
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 5rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .faq-header p {
          font-size: 1.2rem;
          color: #a1a1aa;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: #141414;
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: border-color 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(237, 136, 84, 0.2);
        }

        .faq-question {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .faq-question svg {
          color: #ed8854;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .faq-question h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
        }

        .faq-answer p {
          color: #a1a1aa;
          line-height: 1.7;
          font-size: 1.05rem;
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
          transition: background-color 0.3s ease;
          box-shadow: 0 10px 25px rgba(237, 136, 84, 0.3);
          position: relative;
          z-index: 1;
        }

        .cta-button:hover {
          background: #e67e42;
        }

        .cta-button svg {
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(5px);
        }

        /* Animation Classes - Simplified */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
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

          .faq-grid {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
            height: 450px;
          }

          .banner-title {
            font-size: 3rem;
          }

          .banner-subtitle {
            font-size: 1.2rem;
          }

          .banner-badge {
            font-size: 0.85rem;
          }

          .premium-banner {
            height: 60vh;
            min-height: 450px;
          }

          .contact-cta-section {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .cta-content {
            max-width: 100%;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
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

          .premium-banner {
            height: 50vh;
            min-height: 400px;
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

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .form-tabs {
            flex-wrap: wrap;
          }

          .form-tab {
            flex: 1;
            min-width: 120px;
            padding: 0.7rem 1rem;
            font-size: 0.85rem;
            justify-content: center;
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

          .premium-banner {
            min-height: 350px;
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

          .form-footer {
            flex-direction: column;
            gap: 1.5rem;
          }

          .privacy-note {
            order: 2;
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

          .faq-item {
            padding: 1.5rem;
          }

          .faq-question h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
