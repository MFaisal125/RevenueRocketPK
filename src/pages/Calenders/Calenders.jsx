// import React, { useState } from "react";
// import "./Calenders.css";
// import "../../assets/css/media-query.css";
// import supportImg from "../../assets/image/12084798_20943953.jpg";
// import "react-calendar/dist/Calendar.css";
// import Header from "../../Common/Header/Headers";
// import Banner from "../../Common/Banners/Banner";
// import schedule from "../../assets/video/schedule.mp4";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "../../Common/Footer/Footer";
// import emailjs from "@emailjs/browser";
// import scheduleVideo_banner from "../../assets/video/scheduling_video_banner.jpg";
// const Calenders = () => {
//   var [showModal, setShow] = useState(false);
//   var [start_date, setStartDate] = useState("");
//   var [username, setUsername] = useState("");
//   var [email, setEmail] = useState("");
//   var [service_type, setServiceType] = useState("");
//   var [description, setDescription] = useState("");
//   var [provider, setProvider] = useState("");
//   function alert_message(message) {
//     toast(message);
//   }

//   const SubmitHandler = () => {
//     document.getElementById("schedule_submit").style.display = "none";
//     setTimeout(() => {
//       document.getElementById("schedule_submit").style.display = "block";
//     }, 2000);

//     // Get references to input and select elements
//     const input1 = document.getElementById("username");
//     const input2 = document.getElementById("email");
//     const input3 = document.getElementById("startDate");
//     const selectBox = document.getElementById("serviceType");

//     // Validate each input/select
//     const isInput1Valid = input1.value.trim() !== "";
//     const isInput2Valid = input2.value.trim() !== "";
//     const isInput3Valid = input3.value.trim() !== "";
//     const isSelectBoxValid = selectBox.value !== "";

//     // Apply corresponding styling based on validation result
//     input1.classList.toggle("valid", isInput1Valid);
//     input1.classList.toggle("invalid", !isInput1Valid);

//     input2.classList.toggle("valid", isInput2Valid);
//     input2.classList.toggle("invalid", !isInput2Valid);

//     input3.classList.toggle("valid", isInput3Valid);
//     input3.classList.toggle("invalid", !isInput3Valid);

//     selectBox.classList.toggle("valid", isSelectBoxValid);
//     selectBox.classList.toggle("invalid", !isSelectBoxValid);

//     // Check if all inputs are valid
//     if (isInput1Valid && isInput2Valid && isInput3Valid && isSelectBoxValid) {
//       // Perform further actions, such as form submission or displaying a success message
//       // alert_message('All inputs are valid! Form can be submitted.');
//       var data = {
//         start_date: start_date,
//         location: navigator.userAgent,
//         username: username,
//         email: email,
//         service_type: service_type,
//         description: description !== "" ? description : "empty description",
//         provider: provider !== "" ? provider : "empty provider",
//         status: 1,
//       };
//       try {
//         fetch("https://api.lenexit.com/api/schedule", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//           .then((response) => response.json())
//           .then((result) => {
//             alert_message("Please Check Your Mail For Response:)");
//             var templateParams = {
//               to_name: "username: " + username,
//               subject: service_type,
//               from_name: "Email: " + email,
//               start_date: "meeting start At: " + start_date,
//               location: "User Location: " + navigator.userAgent,
//               service_type: "service Type: " + service_type,
//               message: "message: " + description,
//             };
//             emailjs.init("lMgYQoX_cHOnwd6_K");
//             emailjs
//               .send("service_ryvfsfd", "template_drmpp6x", templateParams)
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
//             setStartDate("");
//             setProvider("");
//             setServiceType("");
//             setDescription("");
//           });
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       // Display an error message or perform any necessary actions for invalid inputs
//       alert_message("Please fill in all required fields.");
//     }
//   };

//   const modalShow = () => {
//     setShow(true);
//   };
//   const CloseModal = () => {
//     setShow(false);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Header tags={location.href} />
//       <Banner Img={supportImg} title="get free consultation" />
//       <section id="calender">
//         <div className="container">
//           <div className="wrapper py-3">
//             <div className="">
//               <div className="meeting_form_wrapper">
//                 <div className="">
//                   <video
//                     title="free consulting"
//                     poster={scheduleVideo_banner}
//                     autoPlay
//                     muted
//                     loop
//                     security="true"
//                     className="img-fluid"
//                   >
//                     <source src={schedule} type="video/mp4" />
//                   </video>
//                 </div>
//                 <div className="meeting_form">
//                   <div className="title">
//                     <h4 className="text-capitalize text-left font-weight-bold">
//                       send your message
//                     </h4>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="text-capitalize">
//                       your name
//                     </label>
//                     <input
//                       type="text"
//                       id="username"
//                       required
//                       onChange={(e) => setUsername(e.target.value)}
//                       value={username}
//                       className="form-control"
//                       name="username"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="text-capitalize">
//                       E-mail
//                     </label>
//                     <input
//                       type="text"
//                       id="email"
//                       required
//                       onChange={(e) => setEmail(e.target.value)}
//                       value={email}
//                       className="form-control"
//                       name="email"
//                     />
//                   </div>
//                   <div
//                     style={{ display: showModal == true ? "block" : "none" }}
//                     className={
//                       showModal == true ? "modal fade show" : "modal fade"
//                     }
//                     id={showModal == true ? "modelId" : ""}
//                   >
//                     <div className="modal-dialog" role="document">
//                       <div className="modal-content">
//                         <div className="modal-header">
//                           <h5 className="modal-title">Select Date And Time</h5>
//                           <button
//                             type="button"
//                             onClick={CloseModal}
//                             className="close"
//                             data-dismiss="modal"
//                             aria-label="Close"
//                           >
//                             <span aria-hidden="true">&times;</span>
//                           </button>
//                         </div>
//                         <div
//                           className="modal-body"
//                           style={{ width: "400px", height: "400px" }}
//                         >
//                           <input
//                             type="datetime-local"
//                             id="meeting-time"
//                             name="meeting-time"
//                             className="form-control"
//                             value={start_date}
//                             required
//                             onChange={(e) => setStartDate(e.target.value)}
//                           />
//                         </div>
//                         <div className="modal-footer">
//                           <button
//                             style={{ backgroundColor: "blue" }}
//                             onClick={CloseModal}
//                             type="button"
//                             className="btn text-white"
//                             data-dismiss="modal"
//                           >
//                             Done
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="text-capitalize">
//                       set Date and time
//                     </label>
//                     <input
//                       type="text"
//                       id="startDate"
//                       required
//                       className="form-control"
//                       value={start_date}
//                     />
//                     <button
//                       style={{ width: "100%", backgroundColor: "#ed8550" }}
//                       onClick={modalShow}
//                       type="button"
//                       className="btn m-0 my-2 text-white"
//                       data-toggle="modal"
//                       data-target="#modelId"
//                     >
//                       Date & Time
//                     </button>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="text-capitalize">
//                       service type
//                     </label>
//                     <select
//                       id="serviceType"
//                       required
//                       className="form-control service_type"
//                       onChange={(e) => setServiceType(e.target.value)}
//                       value={service_type}
//                     >
//                       <option value="">select service type</option>
//                       <option
//                         className="text-capitalize"
//                         value={"website development"}
//                       >
//                         website development
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value={"mobile app development"}
//                       >
//                         mobile app development
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value={"desktop application"}
//                       >
//                         desktop application
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value={"cms buidling"}
//                       >
//                         (CMS) Building
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value={"custom plugin"}
//                       >
//                         custom plugin
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value={"search engin optimization"}
//                       >
//                         search engine optimization
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value="custom theme development"
//                       >
//                         custom theme development
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value="graphics design"
//                       >
//                         graphics design
//                       </option>
//                       <option className="text-capitalize" value="ui/ux design">
//                         UI/UX design
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value="digital marketing"
//                       >
//                         digital marketing
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value="lead generation"
//                       >
//                         lead generation
//                       </option>
//                       <option
//                         className="text-capitalize"
//                         value="website maintenance"
//                       >
//                         website maintenance
//                       </option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <span>
//                       <img
//                         title="Meet With zoom"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/zoom.png"
//                         alt="zoom"
//                       />
//                       <img
//                         title="Meet With ms team"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color-glass/48/microsoft-teams.png"
//                         alt="microsoft-teams"
//                       />
//                       <img
//                         title="Meet With Google Meet"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/google-meet--v1.png"
//                         alt="google-meet"
//                       />
//                       <img
//                         title="Meet With Skype"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/skype--v1.png"
//                         alt="skype--v1"
//                       />
//                       <img
//                         title="Meet With Cisco"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/cisco-webex-meetings.png"
//                         alt="cisco-webex-meetings"
//                       />
//                       <img
//                         title="Meet With Goto"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/fluency/48/video-call.png"
//                         alt="video-call"
//                       />
//                       <img
//                         title="Meet With Jitsi"
//                         className="p-1"
//                         style={{ borderRadius: "30px" }}
//                         width="30"
//                         height="30"
//                         src="https://play-lh.googleusercontent.com/1ckxjos_oOGSNOFyUE-cp7xSCoKLVgMOEAGVCgb6WDhObTlDDnyLohgtI8o1TI2c7A"
//                         alt="video-call"
//                       />
//                       <img
//                         title="Meet With Hangout"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/hangout.png"
//                         alt="hangout"
//                       />
//                       <img
//                         title="Meet With Discord"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/fluency/48/discord-logo.png"
//                         alt="discord-logo"
//                       />
//                       <img
//                         title="Meet With Viber"
//                         className="p-1"
//                         width="30"
//                         height="30"
//                         src="https://img.icons8.com/color/48/viber.png"
//                         alt="viber"
//                       />
//                     </span>
//                     <input
//                       title="Enter Your Zoom, Microshoft Team, Google Meet, Skyp, Cisco, Goto, Jiti, Hangout, Discord, Viber, (Meeting Url), or {Meeting ID}"
//                       type="url"
//                       required
//                       onChange={(e) => setProvider(e.target.value)}
//                       value={provider}
//                       className="form-control meeting_url_input"
//                       name="url"
//                       placeholder="Please Enter Your Meeting ID Or Meeting Url!"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <div className="form-group">
//                       <label htmlFor="" className="text-capitalize">
//                         message
//                       </label>
//                       <textarea
//                         className="form-control"
//                         onChange={(e) => setDescription(e.target.value)}
//                         value={description}
//                         name=""
//                         id=""
//                         rows="3"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     style={{ background: "#ed8550", color: "white" }}
//                     id="schedule_submit"
//                     onClick={SubmitHandler}
//                     className="btn btn-outline-success m-0"
//                   >
//                     Submit
//                   </button>
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

// export default Calenders;

"use client";

import { useState, useEffect } from "react";
import "../../assets/css/media-query.css";
import supportImg from "../../assets/image/12084798_20943953.jpg";
import "react-calendar/dist/Calendar.css";
import Header from "../../Common/Header/Headers";
import Banner from "../../Common/Banners/Banner";
import schedule from "../../assets/video/schedule.mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Common/Footer/Footer";
import emailjs from "@emailjs/browser";
import scheduleVideo_banner from "../../assets/video/scheduling_video_banner.jpg";

const Calenders = () => {
  const [showModal, setShow] = useState(false);
  const [start_date, setStartDate] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [service_type, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeView, setActiveView] = useState("personal");
  const [formErrors, setFormErrors] = useState({});
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    setTimeout(() => {
      setAnimateIn(true);
    }, 100);
  }, []);

  function alert_message(message, type = "info") {
    toast(message, { type });
  }

  const validateForm = (view) => {
    const errors = {};
    let isValid = true;

    if (view === "personal") {
      if (!username.trim()) {
        errors.username = "Name is required";
        isValid = false;
      }
      if (!email.trim()) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email is invalid";
        isValid = false;
      }
    } else if (view === "meeting") {
      if (!start_date) {
        errors.start_date = "Date and time are required";
        isValid = false;
      }
      if (!service_type) {
        errors.service_type = "Service type is required";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextView = () => {
    if (validateForm(activeView)) {
      setAnimateIn(false);
      setTimeout(() => {
        if (activeView === "personal") {
          setActiveView("meeting");
        } else if (activeView === "meeting") {
          setActiveView("review");
        }
        setAnimateIn(true);
      }, 300);
    }
  };

  const prevView = () => {
    setAnimateIn(false);
    setTimeout(() => {
      if (activeView === "meeting") {
        setActiveView("personal");
      } else if (activeView === "review") {
        setActiveView("meeting");
      }
      setAnimateIn(true);
    }, 300);
  };

  const SubmitHandler = async () => {
    setIsSubmitting(true);

    var data = {
      start_date: start_date,
      location: navigator.userAgent,
      username: username,
      email: email,
      service_type: service_type,
      description: description !== "" ? description : "empty description",
      provider: provider !== "" ? provider : "empty provider",
      status: 1,
    };

    try {
      const response = await fetch("https://api.lenexit.com/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      alert_message("Please check your email for our response!", "success");

      var templateParams = {
        to_name: "username: " + username,
        subject: service_type,
        from_name: "Email: " + email,
        start_date: "meeting start At: " + start_date,
        location: "User Location: " + navigator.userAgent,
        service_type: "service Type: " + service_type,
        message: "message: " + description,
      };

      emailjs.init("lMgYQoX_cHOnwd6_K");
      await emailjs.send("service_ryvfsfd", "template_drmpp6x", templateParams);

      // Reset form
      setUsername("");
      setEmail("");
      setStartDate("");
      setProvider("");
      setServiceType("");
      setDescription("");
      setActiveView("personal");
    } catch (error) {
      console.error(error);
      alert_message("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalShow = () => {
    setShow(true);
  };

  const CloseModal = () => {
    setShow(false);
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
    if (formErrors.start_date) {
      setFormErrors({ ...formErrors, start_date: "" });
    }
  };

  const renderProgressBar = () => {
    const getProgress = () => {
      if (activeView === "personal") return 33;
      if (activeView === "meeting") return 66;
      if (activeView === "review") return 100;
      return 0;
    };

    return (
      <div className="progress-container">
        <div className="progress-steps">
          <div
            className={`progress-step ${
              activeView === "personal" ||
              activeView === "meeting" ||
              activeView === "review"
                ? "active"
                : ""
            }`}
          >
            <div className="step-number">1</div>
            <div className="step-label">Personal Info</div>
          </div>
          <div
            className={`progress-step ${
              activeView === "meeting" || activeView === "review"
                ? "active"
                : ""
            }`}
          >
            <div className="step-number">2</div>
            <div className="step-label">Meeting Details</div>
          </div>
          <div
            className={`progress-step ${
              activeView === "review" ? "active" : ""
            }`}
          >
            <div className="step-number">3</div>
            <div className="step-label">Review</div>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderPersonalInfoView = () => {
    return (
      <div className={`form-view ${animateIn ? "animate-in" : "animate-out"}`}>
        <div className="form-group">
          <label htmlFor="username">
            <span className="label-text">Full Name</span>
            <span className="required-mark">*</span>
          </label>
          <div className="input-container">
            <div className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="username"
              className={`form-input ${formErrors.username ? "error" : ""}`}
              placeholder="Enter your name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (formErrors.username) {
                  setFormErrors({ ...formErrors, username: "" });
                }
              }}
            />
          </div>
          {formErrors.username && (
            <div className="error-message">{formErrors.username}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <span className="label-text">Email Address</span>
            <span className="required-mark">*</span>
          </label>
          <div className="input-container">
            <div className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              className={`form-input ${formErrors.email ? "error" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (formErrors.email) {
                  setFormErrors({ ...formErrors, email: "" });
                }
              }}
            />
          </div>
          {formErrors.email && (
            <div className="error-message">{formErrors.email}</div>
          )}
        </div>

        <div className="form-actions">
          <button className="next-button" onClick={nextView}>
            <span>Continue</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const renderMeetingDetailsView = () => {
    return (
      <div className={`form-view ${animateIn ? "animate-in" : "animate-out"}`}>
        <div className="form-group">
          <label htmlFor="startDate">
            <span className="label-text">Date and Time</span>
            <span className="required-mark">*</span>
          </label>
          <div className="input-container">
            <div className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="startDate"
              className={`form-input ${formErrors.start_date ? "error" : ""}`}
              placeholder="Select date and time"
              value={start_date}
              readOnly
              onClick={modalShow}
            />
          </div>
          {formErrors.start_date && (
            <div className="error-message">{formErrors.start_date}</div>
          )}
          <button className="date-picker-button" onClick={modalShow}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Choose Date & Time</span>
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">
            <span className="label-text">Service Type</span>
            <span className="required-mark">*</span>
          </label>
          <div className="input-container">
            <div className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <select
              id="serviceType"
              className={`form-input ${formErrors.service_type ? "error" : ""}`}
              value={service_type}
              onChange={(e) => {
                setServiceType(e.target.value);
                if (formErrors.service_type) {
                  setFormErrors({ ...formErrors, service_type: "" });
                }
              }}
            >
              <option value="">Select service type</option>
              <option value="website development">Website Development</option>
              <option value="mobile app development">
                Mobile App Development
              </option>
              <option value="desktop application">Desktop Application</option>
              <option value="cms buidling">(CMS) Building</option>
              <option value="custom plugin">Custom Plugin</option>
              <option value="search engin optimization">
                Search Engine Optimization
              </option>
              <option value="custom theme development">
                Custom Theme Development
              </option>
              <option value="graphics design">Graphics Design</option>
              <option value="ui/ux design">UI/UX Design</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="lead generation">Lead Generation</option>
              <option value="website maintenance">Website Maintenance</option>
            </select>
          </div>
          {formErrors.service_type && (
            <div className="error-message">{formErrors.service_type}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="provider">
            <span className="label-text">Meeting Platform</span>
          </label>
          <div className="platform-options">
            <div className="platform-option" title="Zoom">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/zoom.png"
                alt="zoom"
              />
            </div>
            <div className="platform-option" title="Microsoft Teams">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color-glass/48/microsoft-teams.png"
                alt="microsoft-teams"
              />
            </div>
            <div className="platform-option" title="Google Meet">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/google-meet--v1.png"
                alt="google-meet"
              />
            </div>
            <div className="platform-option" title="Skype">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/skype--v1.png"
                alt="skype"
              />
            </div>
            <div className="platform-option" title="Cisco Webex">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/color/48/cisco-webex-meetings.png"
                alt="cisco-webex"
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L19.553 7.724C19.7054 7.64784 19.8748 7.60871 20.0453 7.60986C20.2158 7.61102 20.3845 7.65244 20.5356 7.72969C20.6867 7.80694 20.8153 7.91784 20.9104 8.05313C21.0055 8.18841 21.0643 8.34367 21.082 8.506L22 19.506C22.0225 19.7139 21.9907 19.9243 21.9077 20.1162C21.8247 20.3081 21.6936 20.4747 21.5282 20.5986C21.3627 20.7225 21.1689 20.7991 20.9659 20.8203C20.7629 20.8415 20.5578 20.8066 20.371 20.719L15 18.506"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10V18.506"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10L5.5 5.5C5.33498 5.41673 5.15032 5.37775 4.96486 5.38719C4.7794 5.39662 4.60028 5.45409 4.44721 5.55279C4.29414 5.65148 4.17335 5.78788 4.09835 5.94899C4.02336 6.1101 3.99723 6.28956 4.024 6.466L5.5 17.5C5.53158 17.6964 5.61328 17.8805 5.73642 18.0349C5.85955 18.1893 6.02 18.3088 6.20233 18.3815C6.38466 18.4542 6.58271 18.4776 6.77709 18.4494C6.97147 18.4212 7.15418 18.3423 7.307 18.221L15 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="provider"
              className="form-input"
              placeholder="Enter meeting ID or URL (optional)"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            <span className="label-text">Message</span>
          </label>
          <div className="input-container textarea-container">
            <div className="input-icon textarea-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <textarea
              id="description"
              className="form-input"
              placeholder="Tell us more about your project or questions"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button className="back-button" onClick={prevView}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back</span>
          </button>
          <button className="next-button" onClick={nextView}>
            <span>Review</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  const renderReviewView = () => {
    return (
      <div className={`form-view ${animateIn ? "animate-in" : "animate-out"}`}>
        <div className="review-header">
          <div className="review-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 4L12 14.01L9 11.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Review Your Information</h3>
          <p>
            Please confirm that the details below are correct before submitting.
          </p>
        </div>

        <div className="review-details">
          <div className="review-item">
            <div className="review-label">Name:</div>
            <div className="review-value">{username}</div>
          </div>
          <div className="review-item">
            <div className="review-label">Email:</div>
            <div className="review-value">{email}</div>
          </div>
          <div className="review-item">
            <div className="review-label">Date & Time:</div>
            <div className="review-value">{start_date}</div>
          </div>
          <div className="review-item">
            <div className="review-label">Service:</div>
            <div className="review-value">{service_type}</div>
          </div>
          {provider && (
            <div className="review-item">
              <div className="review-label">Meeting Link:</div>
              <div className="review-value">{provider}</div>
            </div>
          )}
          {description && (
            <div className="review-item">
              <div className="review-label">Message:</div>
              <div className="review-value description-value">
                {description}
              </div>
            </div>
          )}
        </div>

        <div className="form-actions">
          <button className="back-button" onClick={prevView}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Edit Details</span>
          </button>
          <button
            className="submit-button"
            onClick={SubmitHandler}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Schedule Consultation</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <Header tags={location.href} />
      <Banner Img={supportImg} title="Get Free Consultation" />

      {/* Date & Time Modal */}
      <div className={`datetime-modal ${showModal ? "show" : ""}`}>
        <div className="datetime-modal-content">
          <div className="datetime-modal-header">
            <h3>Select Date and Time</h3>
            <button className="close-button" onClick={CloseModal}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="datetime-modal-body">
            <div className="datetime-picker-wrapper">
              <input
                type="datetime-local"
                id="meeting-time"
                name="meeting-time"
                className="datetime-picker"
                value={start_date}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="datetime-modal-footer">
            <button className="modal-cancel-btn" onClick={CloseModal}>
              Cancel
            </button>
            <button className="modal-confirm-btn" onClick={CloseModal}>
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section id="premium-calendar">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Schedule Your Free Consultation</h2>
            <p className="section-subtitle">
              Book a time with our experts to discuss your project needs and get
              personalized solutions
            </p>
          </div>

          <div className="calendar-container">
            <div className="calendar-content">
              <div className="video-container">
                <video
                  title="Free Consulting"
                  poster={scheduleVideo_banner}
                  autoPlay
                  muted
                  loop
                  className="consultation-video"
                >
                  <source src={schedule} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="overlay-content">
                    <h3>Why Choose Us?</h3>
                    <ul className="benefits-list">
                      <li>
                        <div className="benefit-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C
2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 4L12 14.01L9 11.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>Expert consultation tailored to your needs</span>
                      </li>
                      <li>
                        <div className="benefit-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 4L12 14.01L9 11.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>Cutting-edge solutions for your business</span>
                      </li>
                      <li>
                        <div className="benefit-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 4L12 14.01L9 11.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>Flexible scheduling options</span>
                      </li>
                      <li>
                        <div className="benefit-icon">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 4L12 14.01L9 11.01"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>Personalized strategy and roadmap</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="form-container">
                {renderProgressBar()}
                <div className="form-wrapper">
                  {activeView === "personal" && renderPersonalInfoView()}
                  {activeView === "meeting" && renderMeetingDetailsView()}
                  {activeView === "review" && renderReviewView()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* Ultra Premium Modern UX/UI Design - 8500 Style */
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap");

        /* Main Calendar Section */
        #premium-calendar {
          font-family: "Plus Jakarta Sans", sans-serif;
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%);
          position: relative;
          overflow: hidden;
        }

        #premium-calendar::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #ed8550, #f2994a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #ed8550, #f2994a);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
        }

        /* Calendar Container */
        .calendar-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .calendar-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          min-height: 600px;
        }

        /* Video Container */
        .video-container {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .consultation-video {
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
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .overlay-content {
          color: #fff;
          max-width: 400px;
        }

        .overlay-content h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .overlay-content h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: #ed8550;
          border-radius: 3px;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .benefit-icon {
          width: 24px;
          height: 24px;
          min-width: 24px;
          background: rgba(237, 133, 80, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
        }

        .benefit-icon svg {
          width: 16px;
          height: 16px;
          color: #ed8550;
        }

        /* Form Container */
        .form-container {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        /* Progress Bar */
        .progress-container {
          margin-bottom: 2rem;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          position: relative;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f1f3f5;
          border: 2px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #888;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .step-label {
          font-size: 0.85rem;
          color: #888;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .progress-step.active .step-number {
          background: #ed8550;
          border-color: #ed8550;
          color: #fff;
          box-shadow: 0 5px 15px rgba(237, 133, 80, 0.3);
        }

        .progress-step.active .step-label {
          color: #ed8550;
          font-weight: 600;
        }

        .progress-bar {
          height: 4px;
          background: #eee;
          border-radius: 2px;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, #ed8550, #f2994a);
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        /* Form Wrapper */
        .form-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .form-view {
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateX(20px);
        }

        .form-view.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .form-view.animate-out {
          opacity: 0;
          transform: translateX(-20px);
        }

        /* Form Groups */
        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
        }

        .label-text {
          margin-right: 0.25rem;
        }

        .required-mark {
          color: #e74c3c;
          font-size: 1.2rem;
          line-height: 1;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          width: 20px;
          height: 20px;
          color: #aaa;
          transition: all 0.3s ease;
        }

        .textarea-icon {
          top: 1rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          color: #333;
          transition: all 0.3s ease;
          background: #f9f9f9;
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .form-input:focus {
          border-color: #ed8550;
          box-shadow: 0 0 0 3px rgba(237, 133, 80, 0.2);
          outline: none;
          background: #fff;
        }

        .form-input:focus + .input-icon {
          color: #ed8550;
        }

        .form-input.error {
          border-color: #e74c3c;
          background-color: rgba(231, 76, 60, 0.05);
        }

        .form-input.error:focus {
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
        }

        .error-message {
          color: #e74c3c;
          font-size: 0.85rem;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
        }

        textarea.form-input {
          min-height: 120px;
          resize: vertical;
          padding-top: 1rem;
        }

        /* Date Picker Button */
        .date-picker-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
          background: #f0f0f0;
          border: none;
          border-radius: 8px;
          color: #555;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .date-picker-button:hover {
          background: #e0e0e0;
        }

        .date-picker-button svg {
          width: 18px;
          height: 18px;
        }

        /* Platform Options */
        .platform-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .platform-option {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .platform-option:hover {
          background: #e0e0e0;
          transform: translateY(-2px);
        }

        /* Form Actions */
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1.5rem;
        }

        .back-button,
        .next-button,
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .back-button {
          background: #f0f0f0;
          color: #555;
        }

        .back-button:hover {
          background: #e0e0e0;
        }

        .next-button {
          background: #ed8550;
          color: #fff;
        }

        .next-button:hover {
          background: #e67e42;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(237, 133, 80, 0.3);
        }

        .submit-button {
          background: #4caf50;
          color: #fff;
        }

        .submit-button:hover {
          background: #43a047;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
        }

        .back-button svg,
        .next-button svg,
        .submit-button svg {
          width: 18px;
          height: 18px;
        }

        /* Review View */
        .review-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .review-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: rgba(76, 175, 80, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .review-icon svg {
          width: 30px;
          height: 30px;
          color: #4caf50;
        }

        .review-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .review-header p {
          color: #666;
        }

        .review-details {
          background: #f9f9f9;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .review-item {
          display: flex;
          margin-bottom: 1rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }

        .review-item:last-child {
          margin-bottom: 0;
          border-bottom: none;
          padding-bottom: 0;
        }

        .review-label {
          font-weight: 600;
          color: #555;
          width: 120px;
          flex-shrink: 0;
        }

        .review-value {
          color: #333;
          flex: 1;
        }

        .description-value {
          white-space: pre-wrap;
        }

        /* Loading Spinner */
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 1s ease-in-out infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        /* Date Time Modal */
        .datetime-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .datetime-modal.show {
          opacity: 1;
          visibility: visible;
        }

        .datetime-modal-content {
          background: #fff;
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .datetime-modal.show .datetime-modal-content {
          transform: translateY(0);
        }

        .datetime-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .datetime-modal-header h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          color: #333;
        }

        .close-button svg {
          width: 20px;
          height: 20px;
        }

        .datetime-modal-body {
          padding: 1.5rem;
        }

        .datetime-picker-wrapper {
          display: flex;
          justify-content: center;
        }

        .datetime-picker {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          color: #333;
        }

        .datetime-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding: 1.5rem;
          border-top: 1px solid #eee;
        }

        .modal-cancel-btn,
        .modal-confirm-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .modal-cancel-btn {
          background: #f0f0f0;
          color: #555;
        }

        .modal-cancel-btn:hover {
          background: #e0e0e0;
        }

        .modal-confirm-btn {
          background: #ed8550;
          color: #fff;
        }

        .modal-confirm-btn:hover {
          background: #e67e42;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .calendar-content {
            grid-template-columns: 1fr;
          }

          .video-container {
            height: 300px;
          }

          .form-container {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          #premium-calendar {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .step-label {
            display: none;
          }

          .form-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .back-button,
          .next-button,
          .submit-button {
            width: 100%;
          }

          .review-item {
            flex-direction: column;
          }

          .review-label {
            width: 100%;
            margin-bottom: 0.25rem;
          }
        }

        @media (max-width: 576px) {
          .form-container {
            padding: 1.5rem;
          }

          .datetime-modal-body {
            padding: 1rem;
          }

          .platform-options {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Calenders;
