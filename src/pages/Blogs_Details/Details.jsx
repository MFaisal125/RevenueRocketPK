// import React, { useState, useEffect } from "react";
// import "./Details.css";
// import "../../assets/css/media-query.css";
// import Header from "../../Common/Header/Headers";
// import Footer from "../../Common/Footer/Footer";
// import { NavLink, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img from "../../assets/image/software-engineer.jpeg";
// import "react-toastify/dist/ReactToastify.css";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
// const Details = () => {
//   const { id } = useParams();
//   let [Data, setData] = useState([]);
//   let [AllData, setAllData] = useState([]);
//   let [username, setUserName] = useState("");
//   let [Email, setEmail] = useState("");
//   let [Comment, setComment] = useState("");
//   let [CommentData, setCommentData] = useState([0]);

//   let xhr = new XMLHttpRequest();
//   let url = "https://api.lenexit.com/api/post/" + id;
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let response = JSON.parse(xhr.responseText);
//       for (var i = 0; i < response.length; i++) {
//         var elements = response[i];
//         // console.log(id + '' + elements['id'])
//         if (id === elements["id"]) {
//           setData(response);
//           location.reload(true);
//           console.log(response);
//         } else {
//           setData(response);
//         }
//       }
//     }
//   };
//   xhr.send();

//   function allBlogs() {
//     let xhr = new XMLHttpRequest();
//     let url = "https://api.lenexit.com/api/post/";
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         let response = JSON.parse(xhr.responseText);
//         setAllData(response);
//       }
//     };
//     xhr.send();
//   }
//   useEffect(() => {
//     allBlogs();
//   }, []);
//   // social sharing function here
//   const pageUrl = location.href;
//   const whatsappShare = async (title, text) => {
//     window.open(`https://wa.me/?text=${pageUrl} ${text}`);
//   };
//   const ManualShare = async (title, text) => {
//     navigator.share({
//       title: title,
//       text: text,
//       url: pageUrl,
//     });
//   };
//   const twitterShare = async (title, text) => {
//     window.open(`https://twitter.com/intent/tweet?text=${pageUrl}. ${text}`);
//   };
//   const FaceBookShare = async (title, text) => {
//     const encodedURL = encodeURIComponent(document.URL);
//     const navUrl =
//       "https://www.facebook.com/sharer/sharer.php?u=" + `${encodedURL}`;
//     window.open(navUrl, "_blank");
//   };
//   function alert_message(message) {
//     toast(message);
//   }
//   const CommentHandler = (id) => {
//     var d = new Date();
//     var day = d.getDay();
//     var month = d.getMonth();
//     var year = d.getFullYear();
//     var createat = day + "-" + month + "-" + year;
//     var data = {
//       author: "0",
//       description: Comment,
//       createAt: createat,
//       rcomment: "",
//       comment_post: id,
//       status: "1",
//     };
//     if (username == "" || Comment == "") {
//       alert("Please Enter Your Name & comment!");
//     } else {
//       fetch("https://api.lenexit.com/api/comment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
//         .then((result) => {
//           console.log(result["message"]);
//           alert_message("Thanks For Your Comment");
//           setUserName("");
//           setEmail("");
//           setComment("");
//           getAllComments();
//         });
//     }
//   };
//   function getAllComments() {
//     fetch("https://api.lenexit.com/api/comment", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         setCommentData(result);
//       });
//   }
//   useEffect(() => {
//     getAllComments();
//   }, []);
//   function Slugs(text) {
//     return text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/\s+/g, "-")
//       .replace(/[^a-zA-Z0-9-]/g, "")
//       .replace(/--+/g, "-");
//   }
//   function extractWordsFromTitle1(title) {
//     // Split the title into an array of words using space as the delimiter
//     const words = title.split(" ");
//     // Extract the first 2 to 4 words
//     const firstWords = words.slice(0, Math.min(words.length - 1, 2)).join(" ");
//     // Get the last word separately
//     const lastWord = words[words.length - 1];
//     // Concatenate the first words and the last word
//     const extractedTitle = `${firstWords} ${lastWord}`;
//     return extractedTitle;
//   }
//   return (
//     <>
//       <Header tags={location.href} />
//       <section id="details">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 col-sm col-lg-8">
//               {Data.map((item) => (
//                 <div key={item.id} className="blog-details py-5">
//                   <h3 className="blog_details_title">{item.title}</h3>
//                   <div className="py-2">
//                     <img
//                       src={item.thumbnail}
//                       style={{ width: "100%" }}
//                       alt={item.title}
//                       title={item.title}
//                     />
//                     <div className="blog-author">
//                       <div className="d-flex">
//                         <img
//                           src={img}
//                           className="img-fluid rounded-circle"
//                           style={{ width: "30px", height: "30px" }}
//                           alt={item.title}
//                           title={item.title}
//                         />
//                         <div className="blog_author_name pl-2">
//                           <p className="p-0 m-0 blog_author_name">
//                             Muhammad Faisal
//                           </p>
//                         </div>
//                       </div>
//                       <div className="blog_share">
//                         <span
//                           onClick={() =>
//                             whatsappShare(
//                               item.title,
//                               item.descrioption
//                                 .replace(
//                                   /<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm,
//                                   ""
//                                 )
//                                 .slice(0, 150)
//                             )
//                           }
//                         >
//                           <img
//                             width="30"
//                             height="30"
//                             src="https://img.icons8.com/ios-glyphs/30/53CE55/whatsapp.png"
//                             alt="whatsapp"
//                           />
//                         </span>
//                         <span
//                           onClick={() =>
//                             FaceBookShare(
//                               item.title,
//                               item.descrioption
//                                 .replace(
//                                   /<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm,
//                                   ""
//                                 )
//                                 .slice(0, 150)
//                             )
//                           }
//                         >
//                           <img
//                             width="30"
//                             height="30"
//                             src="https://img.icons8.com/color/48/facebook-new.png"
//                             alt="facebook-new"
//                           />
//                         </span>
//                         <span
//                           onClick={() =>
//                             twitterShare(
//                               item.title,
//                               item.descrioption
//                                 .replace(
//                                   /<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm,
//                                   ""
//                                 )
//                                 .slice(0, 150)
//                             )
//                           }
//                         >
//                           <img
//                             width="30"
//                             height="30"
//                             src="https://img.icons8.com/color/48/twitter--v1.png"
//                             alt="twitter"
//                           />
//                         </span>
//                         <span
//                           onClick={() =>
//                             ManualShare(item.title, item.descrioption)
//                           }
//                         >
//                           <img
//                             width="30"
//                             height="30"
//                             src="https://img.icons8.com/color/48/share--v1.png"
//                             alt="share"
//                             title={item.title}
//                           />
//                         </span>
//                       </div>
//                     </div>
//                     <p className="py-3 blog_description">
//                       {
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: item.descrioption,
//                           }}
//                         />
//                       }
//                     </p>
//                   </div>

//                   {/* <hr className="bg-dark rounded" /> */}
//                   <div clssName="comments">
//                     <div className="title">
//                       <h3>Leave A Comments</h3>
//                     </div>
//                     <ToastContainer />
//                     <div className="comment_form mt-5 pt-5">
//                       <div className="form-group">
//                         <label htmlFor="username" className="text-capitalize">
//                           username<span className="text-danger">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           required
//                           className="form-control"
//                           value={username}
//                           onChange={(e) => setUserName(e.target.value)}
//                           name="username"
//                           id="username"
//                           aria-describedby="helpId"
//                           placeholder=""
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="Email" className="text-capitalize">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           value={Email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           name="email"
//                           id="email"
//                           aria-describedby="helpId"
//                           placeholder=""
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="comments" className="text-capitalize">
//                           comment<span className="text-danger">*</span>
//                         </label>
//                         <textarea
//                           required
//                           value={Comment}
//                           onChange={(e) => setComment(e.target.value)}
//                           className="form-control"
//                           name="comment"
//                           id="comment"
//                           rows="3"
//                         ></textarea>
//                       </div>
//                       <button
//                         id="comment_btn"
//                         onClick={() => CommentHandler(item.id)}
//                         className="btn btn-success text-uppercase px-2 m-0"
//                         role="button"
//                       >
//                         send
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="col-md-4 col-sm col-lg-4">
//               <div className="blog-sidebar mt-5 p-3">
//                 {Data.map((items) => (
//                   <div className="title shadow-sm rounded p-3">
//                     <h3
//                       className="text-left text-uppercase"
//                       style={{ fontSize: "20px" }}
//                     >
//                       recent post
//                     </h3>
//                     <div className="">
//                       <img
//                         className="img-fluid"
//                         src={items.thumbnail}
//                         alt={items.title}
//                         title={items.title}
//                       />
//                     </div>
//                   </div>
//                 ))}
//                 {AllData.map((item) => (
//                   <div className="card_block mt-1" key={item.id}>
//                     <div className="news_card  shadow-sm py-3 px-2 d-flex">
//                       <div className="">
//                         <img
//                           className="rounded"
//                           style={{ width: "100px", height: "100%" }}
//                           src={item.thumbnail}
//                           alt={item.title}
//                           title={item.title}
//                         />
//                       </div>
//                       <div className="pl-3">
//                         <p className="p-0 m-0 blog_details_right_side_card_date">
//                           <FontAwesomeIcon
//                             icon={faCalendarAlt}
//                             className="mr-2"
//                           />
//                           {new Date(
//                             item.createAt.split("-")[2],
//                             item.createAt.split("-")[1] - 1,
//                             item.createAt.split("-")[0]
//                           ).toLocaleDateString("en-US", {
//                             month: "short",
//                             day: "numeric",
//                             year: "numeric",
//                           })}
//                         </p>
//                         <p clssName="m-0 p-0">
//                           <NavLink
//                             className="text-dark"
//                             to={"/blog/" + item.id + "/" + Slugs(item.title)}
//                           >
//                             <b className="blog_details_right_side_card_title">
//                               {extractWordsFromTitle1(item.title)}
//                             </b>
//                           </NavLink>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Details;

"use client";

import { useState, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUser,
  faComment,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import img from "../../assets/image/software-engineer.jpeg";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [commentData, setCommentData] = useState([0]);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    content: false,
    sidebar: false,
    comments: false,
    form: false,
  });

  const bannerRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const commentsRef = useRef(null);
  const formRef = useRef(null);

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

  // Fetch blog post data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.lenexit.com/api/post/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, [id]);

  // Fetch all blog posts
  const allBlogs = async () => {
    try {
      const response = await fetch("https://api.lenexit.com/api/post/");
      const result = await response.json();
      setAllData(result);
    } catch (error) {
      console.error("Error fetching all posts:", error);
    }
  };

  useEffect(() => {
    allBlogs();
  }, []);

  // Social sharing functions
  const pageUrl = location.href;

  const whatsappShare = (title, text) => {
    window.open(`https://wa.me/?text=${pageUrl} ${text}`);
  };

  const manualShare = (title, text) => {
    navigator.share({
      title: title,
      text: text,
      url: pageUrl,
    });
  };

  const twitterShare = (title, text) => {
    window.open(`https://twitter.com/intent/tweet?text=${pageUrl}. ${text}`);
  };

  const facebookShare = (title, text) => {
    const encodedURL = encodeURIComponent(document.URL);
    const navUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" + `${encodedURL}`;
    window.open(navUrl, "_blank");
  };

  // Comment handling
  const commentHandler = (id) => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const createat = `${day}-${month}-${year}`;

    const commentData = {
      author: "0",
      description: comment,
      createAt: createat,
      rcomment: "",
      comment_post: id,
      status: "1",
    };

    if (username === "" || comment === "") {
      toast.error("Please enter your name and comment!");
      return;
    }

    fetch("https://api.lenexit.com/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((result) => {
        toast.success("Thanks for your comment!");
        setUserName("");
        setEmail("");
        setComment("");
        getAllComments();
      })
      .catch((error) => {
        toast.error("Error submitting comment. Please try again.");
        console.error("Error:", error);
      });
  };

  // Fetch all comments
  const getAllComments = async () => {
    try {
      const response = await fetch("https://api.lenexit.com/api/comment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setCommentData(result);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  // Helper functions
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .replace(/--+/g, "-");
  };

  const extractWordsFromTitle = (title) => {
    const words = title.split(" ");
    const firstWords = words.slice(0, Math.min(words.length - 1, 2)).join(" ");
    const lastWord = words[words.length - 1];
    return `${firstWords} ${lastWord}`;
  };

  const formatDate = (dateString) => {
    try {
      const [day, month, year] = dateString.split("-");
      return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Calculate reading time
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const textLength = text.split(" ").length;
    if (textLength > 0) {
      const readingTime = Math.ceil(textLength / wordsPerMinute);
      return readingTime < 1 ? "1 min read" : `${readingTime} min read`;
    }
    return "1 min read";
  };

  return (
    <>
      <Header tags={location.href} />

      <style jsx>{`
        /* Ultra Premium Dark Theme Styling */
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");

        #blog-details-page {
          font-family: "Montserrat", sans-serif;
          color: #1a1a1a;
          background-color: #f9f9f9;
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

        .details-wrapper {
          padding: 0 0 6rem;
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
              rgba(56, 189, 248, 0.04) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at 85% 30%,
              rgba(168, 85, 247, 0.04) 0%,
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
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          display: inline-block;
          font-family: "Playfair Display", serif;
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

        .banner-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 2.5rem;
          color: #d4d4d8;
        }

        .banner-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Main Content Area */
        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          position: relative;
        }

        /* Blog Content */
        .blog-content {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-content-inner {
          padding: 3rem;
        }

        .blog-content-header {
          margin-bottom: 2rem;
        }

        .blog-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          font-family: "Playfair Display", serif;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          color: #64748b;
          font-size: 0.9rem;
        }

        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .blog-featured-image {
          width: 100%;
          height: auto;
          border-radius: 6px;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .blog-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2rem 0;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .author-name {
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          font-size: 1rem;
        }

        .blog-share {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .share-button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .share-button img {
          width: 20px;
          height: 20px;
        }

        .blog-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 2rem;
        }

        .blog-description p {
          margin-bottom: 1.5rem;
        }

        .blog-description h2,
        .blog-description h3 {
          font-family: "Playfair Display", serif;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }

        .blog-description h2 {
          font-size: 1.8rem;
        }

        .blog-description h3 {
          font-size: 1.5rem;
        }

        .blog-description a {
          color: #6366f1;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }

        .blog-description a:hover {
          border-color: #6366f1;
        }

        .blog-description img {
          max-width: 100%;
          border-radius: 6px;
          margin: 2rem 0;
        }

        .blog-description ul,
        .blog-description ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-description li {
          margin-bottom: 0.5rem;
        }

        .blog-description blockquote {
          border-left: 4px solid #6366f1;
          padding-left: 1.5rem;
          margin-left: 0;
          margin-right: 0;
          font-style: italic;
          color: #4b5563;
        }

        /* Comments Section */
        .comments-section {
          margin-top: 4rem;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          padding: 3rem;
        }

        .comments-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2rem;
          position: relative;
          padding-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .comments-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }

        .comment-form {
          margin-top: 3rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #1a1a1a;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: #f8fafc;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
          background: #ffffff;
        }

        textarea.form-control {
          min-height: 120px;
          resize: vertical;
        }

        .submit-button {
          display: inline-block;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ffffff;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(99, 102, 241, 0.4);
        }

        .submit-button:active {
          transform: translateY(-1px);
        }

        /* Sidebar */
        .blog-sidebar {
          position: sticky;
          top: 2rem;
        }

        .sidebar-widget {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          margin-bottom: 2.5rem;
        }

        .widget-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          padding: 1.5rem;
          margin: 0;
          border-bottom: 1px solid #f1f5f9;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
        }

        .widget-title::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 1.5rem;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }

        .widget-content {
          padding: 1.5rem;
        }

        .featured-post {
          margin-bottom: 1.5rem;
        }

        .featured-post-image {
          width: 100%;
          height: auto;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .recent-posts {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .recent-post {
          display: flex;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .recent-post:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .recent-post-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .recent-post-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .recent-post-date {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .recent-post-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0.5rem 0 0;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .recent-post-title:hover {
          color: #6366f1;
        }

        /* Animation Classes */
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
            transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
            transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .fade-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
            transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1),
            transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .stagger-visible .stagger-item:nth-child(1) {
          transition-delay: 0.1s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-visible .stagger-item:nth-child(2) {
          transition-delay: 0.2s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-visible .stagger-item:nth-child(3) {
          transition-delay: 0.3s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-visible .stagger-item:nth-child(4) {
          transition-delay: 0.4s;
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-visible .stagger-item:nth-child(5) {
          transition-delay: 0.5s;
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .banner-title {
            font-size: 3rem;
          }

          .content-grid {
            gap: 2rem;
          }

          .blog-content-inner {
            padding: 2.5rem;
          }
        }

        @media (max-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .blog-sidebar {
            position: static;
            margin-top: 3rem;
          }

          .banner-title {
            font-size: 2.5rem;
          }

          .premium-banner {
            height: 60vh;
            min-height: 450px;
          }
        }

        @media (max-width: 768px) {
          .blog-content-inner,
          .comments-section {
            padding: 2rem;
          }

          .blog-title {
            font-size: 2rem;
          }

          .blog-meta {
            gap: 1rem;
          }

          .banner-title {
            font-size: 2.2rem;
          }

          .banner-meta {
            gap: 1.5rem;
          }

          .premium-banner {
            height: 50vh;
            min-height: 400px;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding: 0 1rem;
          }

          .blog-content-inner,
          .comments-section {
            padding: 1.5rem;
          }

          .blog-title {
            font-size: 1.75rem;
          }

          .blog-author {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .blog-share {
            margin-top: 1rem;
          }

          .banner-title {
            font-size: 1.8rem;
          }

          .banner-meta {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }

          .premium-banner {
            height: 40vh;
            min-height: 300px;
          }
        }
      `}</style>

      <section id="blog-details-page">
        {/* Background Gradient Overlay */}
        <div className="bg-gradient-overlay"></div>

        {data.length > 0 && (
          <>
            {/* Custom Premium Banner */}
            <div className="premium-banner" ref={bannerRef}>
              <img
                src={data[0].thumbnail || "/placeholder.svg"}
                alt={data[0].title}
                className="banner-image"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
              />
              <div className="banner-overlay"></div>
              <div className="banner-content">
                <h1 className="banner-title">{data[0].title}</h1>
                <div className="banner-meta">
                  <div className="banner-meta-item">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Muhammad Faisal</span>
                  </div>
                  <div className="banner-meta-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>{formatDate(data[0].createAt)}</span>
                  </div>
                  <div className="banner-meta-item">
                    <FontAwesomeIcon icon={faClock} />
                    <span>
                      {calculateReadingTime(
                        data[0].descrioption.replace(/<[^>]*>/g, "")
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="details-wrapper">
                <div className="content-grid">
                  {/* Main Content */}
                  <div
                    className="animate-section"
                    data-id="content"
                    ref={contentRef}
                  >
                    <div
                      className={`blog-content fade-in ${
                        isVisible.content ? "visible" : ""
                      }`}
                    >
                      <div className="blog-content-inner">
                        <div className="blog-content-header">
                          <h2 className="blog-title">{data[0].title}</h2>
                          <div className="blog-meta">
                            <div className="blog-meta-item">
                              <FontAwesomeIcon icon={faUser} />
                              <span>Muhammad Faisal</span>
                            </div>
                            <div className="blog-meta-item">
                              <FontAwesomeIcon icon={faCalendarAlt} />
                              <span>{formatDate(data[0].createAt)}</span>
                            </div>
                            <div className="blog-meta-item">
                              <FontAwesomeIcon icon={faClock} />
                              <span>
                                {calculateReadingTime(
                                  data[0].descrioption.replace(/<[^>]*>/g, "")
                                )}
                              </span>
                            </div>
                            <div className="blog-meta-item">
                              <FontAwesomeIcon icon={faComment} />
                              <span>{commentData.length} Comments</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-author">
                          <div className="author-info">
                            <img
                              src={img || "/placeholder.svg"}
                              className="author-avatar"
                              alt="Muhammad Faisal"
                              title="Muhammad Faisal"
                            />
                            <h4 className="author-name">Muhammad Faisal</h4>
                          </div>
                          <div className="blog-share">
                            <div
                              className="share-button"
                              onClick={() =>
                                whatsappShare(
                                  data[0].title,
                                  data[0].descrioption
                                    .replace(/<[^>]*>/g, "")
                                    .slice(0, 150)
                                )
                              }
                            >
                              <img
                                src="https://img.icons8.com/ios-glyphs/30/53CE55/whatsapp.png"
                                alt="whatsapp"
                              />
                            </div>
                            <div
                              className="share-button"
                              onClick={() =>
                                facebookShare(
                                  data[0].title,
                                  data[0].descrioption
                                    .replace(/<[^>]*>/g, "")
                                    .slice(0, 150)
                                )
                              }
                            >
                              <img
                                src="https://img.icons8.com/color/48/facebook-new.png"
                                alt="facebook-new"
                              />
                            </div>
                            <div
                              className="share-button"
                              onClick={() =>
                                twitterShare(
                                  data[0].title,
                                  data[0].descrioption
                                    .replace(/<[^>]*>/g, "")
                                    .slice(0, 150)
                                )
                              }
                            >
                              <img
                                src="https://img.icons8.com/color/48/twitter--v1.png"
                                alt="twitter"
                              />
                            </div>
                            <div
                              className="share-button"
                              onClick={() =>
                                manualShare(data[0].title, data[0].descrioption)
                              }
                            >
                              <img
                                src="https://img.icons8.com/color/48/share--v1.png"
                                alt="share"
                                title={data[0].title}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="blog-description">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: data[0].descrioption,
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div
                      className="animate-section"
                      data-id="comments"
                      ref={commentsRef}
                    >
                      <div
                        className={`comments-section fade-in ${
                          isVisible.comments ? "visible" : ""
                        }`}
                      >
                        <h3 className="comments-title">Leave A Comment</h3>
                        <ToastContainer position="top-right" autoClose={3000} />

                        <div
                          className="animate-section"
                          data-id="form"
                          ref={formRef}
                        >
                          <div
                            className={`comment-form fade-in ${
                              isVisible.form ? "visible" : ""
                            } stagger-visible`}
                          >
                            <div className="form-group stagger-item">
                              <label htmlFor="username">
                                Username<span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                className="form-control"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                name="username"
                                id="username"
                                placeholder="Your name"
                              />
                            </div>
                            <div className="form-group stagger-item">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                id="email"
                                placeholder="Your email address"
                              />
                            </div>
                            <div className="form-group stagger-item">
                              <label htmlFor="comment">
                                Comment<span className="text-danger">*</span>
                              </label>
                              <textarea
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="form-control"
                                name="comment"
                                id="comment"
                                rows="3"
                                placeholder="Your comment"
                              ></textarea>
                            </div>
                            <button
                              className="submit-button stagger-item"
                              onClick={() => commentHandler(data[0].id)}
                            >
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div
                    className="animate-section"
                    data-id="sidebar"
                    ref={sidebarRef}
                  >
                    <div
                      className={`blog-sidebar fade-in-right ${
                        isVisible.sidebar ? "visible" : ""
                      }`}
                    >
                      {/* Featured Post Widget */}
                      <div className="sidebar-widget">
                        <h3 className="widget-title">Featured Post</h3>
                        <div className="widget-content">
                          <div className="featured-post">
                            <img
                              src={data[0].thumbnail || "/placeholder.svg"}
                              className="featured-post-image"
                              alt={data[0].title}
                              title={data[0].title}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Recent Posts Widget */}
                      <div className="sidebar-widget">
                        <h3 className="widget-title">Recent Posts</h3>
                        <div className="widget-content">
                          <div className="recent-posts">
                            {allData.slice(0, 5).map((item) => (
                              <div className="recent-post" key={item.id}>
                                <img
                                  src={item.thumbnail || "/placeholder.svg"}
                                  className="recent-post-image"
                                  alt={item.title}
                                  title={item.title}
                                />
                                <div className="recent-post-content">
                                  <p className="recent-post-date">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    {formatDate(item.createAt)}
                                  </p>
                                  <NavLink
                                    to={`/blog/${item.id}/${slugify(
                                      item.title
                                    )}`}
                                  >
                                    <h4 className="recent-post-title">
                                      {extractWordsFromTitle(item.title)}
                                    </h4>
                                  </NavLink>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Details;
