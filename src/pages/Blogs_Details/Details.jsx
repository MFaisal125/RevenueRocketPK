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

import React from "react";

import { useState, useEffect, useCallback, useMemo } from "react";
import "./Details.css";
import "../../assets/css/media-query.css";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faEnvelope,
  faPaperPlane,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/image/software-engineer.jpeg";
import "react-toastify/dist/ReactToastify.css";

// Import API from premium-blog.jsx
import { API } from "../Blogs/Blogs.jsx";

// Memoized Comment Component for better performance
const Comment = React.memo(({ item }) => {
  return (
    <div className="comment-item">
      <div className="comment-avatar">
        <img src={item.avatar || img} alt={item.author} loading="lazy" />
      </div>
      <div className="comment-content">
        <div className="comment-header">
          <div className="comment-author">{item.author}</div>
          <div className="comment-date">{item.date}</div>
        </div>
        <div className="comment-text">{item.text}</div>
      </div>
    </div>
  );
});

// Memoized Related Post Component
const RelatedPost = React.memo(({ post, createSlug, extractSidebarTitle }) => {
  return (
    <div className="recent-post">
      <div className="recent-post-image">
        <img
          src={post.thumbnail || "/placeholder.svg"}
          alt={post.title}
          loading="lazy"
        />
      </div>
      <div className="recent-post-content">
        <div className="recent-post-date">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span>{post.createAt}</span>
        </div>
        <h5 className="recent-post-title">
          <NavLink to={`/blog/${post.id}/${createSlug(post.title)}`}>
            {extractSidebarTitle(post.title)}
          </NavLink>
        </h5>
      </div>
    </div>
  );
});

// Memoized Category Item Component
const CategoryItem = React.memo(({ category, count, createSlug }) => {
  return (
    <li className="category-item">
      <NavLink
        to={`/blog/category/${createSlug(category)}`}
        className="category-link"
      >
        <span>
          <FontAwesomeIcon icon={faTag} className="mr-2" />
          {category}
        </span>
        <span className="category-count">{count}</span>
      </NavLink>
    </li>
  );
});

// Social Share Button Component
const ShareButton = React.memo(({ icon, onClick }) => {
  return (
    <div className="share-button" onClick={onClick}>
      <img src={icon || "/placeholder.svg"} alt="Share" loading="lazy" />
    </div>
  );
});

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Comments state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Add custom CSS for premium design with black background - optimized to run only once
  useEffect(() => {
    // Create style element
    const styleElement = document.createElement("style");
    styleElement.id = "premium-blog-details-styles";

    // Check if styles already exist to prevent duplication
    if (document.getElementById("premium-blog-details-styles")) {
      return;
    }

    // Add premium CSS with dark theme - optimized
    styleElement.innerHTML = `
      :root {
        --primary: #ff5e14;
        --primary-light: #ff7a3d;
        --primary-dark: #e04d00;
        --dark-bg: #121212;
        --dark-surface: #1e1e1e;
        --dark-card: #252525;
        --dark-border: #333333;
        --text-primary: #ffffff;
        --text-secondary: rgba(255, 255, 255, 0.7);
        --text-tertiary: rgba(255, 255, 255, 0.5);
        --box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        --box-shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.4);
        --transition: all 0.3s ease;
      }
      
      body {
        background-color: var(--dark-bg);
        color: var(--text-primary);
      }
      
      /* Article Header */
      .article-header {
        position: relative;
        margin-bottom: 40px;
      }
      
      .article-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--text-primary);
        margin-bottom: 1.5rem;
        line-height: 1.2;
      }
      
      .article-meta {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 25px;
      }
      
      .article-meta-item {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      
      .article-meta-item svg {
        margin-right: 8px;
        color: var(--primary);
      }
      
      .article-featured-image {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 30px;
        box-shadow: var(--box-shadow);
      }
      
      .article-featured-image img {
        width: 100%;
        object-fit: cover;
        max-height: 500px;
        will-change: transform;
      }
      
      /* Article Content */
      .article-container {
        background: var(--dark-surface);
        border-radius: 12px;
        padding: 40px;
        margin-bottom: 40px;
        box-shadow: var(--box-shadow);
        border: 1px solid var(--dark-border);
      }
      
      .article-content {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
      }
      
      .article-content p {
        margin-bottom: 1.5rem;
      }
      
      .article-content h2,
      .article-content h3,
      .article-content h4 {
        color: var(--text-primary);
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      
      .article-content a {
        color: var(--primary);
        text-decoration: none;
        border-bottom: 1px dotted var(--primary);
        transition: color 0.3s ease;
      }
      
      .article-content a:hover {
        color: var(--primary-light);
      }
      
      .article-content ul,
      .article-content ol {
        margin-bottom: 1.5rem;
        padding-left: 2rem;
      }
      
      .article-content li {
        margin-bottom: 0.5rem;
      }
      
      /* Article Author */
      .article-author {
        display: flex;
        align-items: center;
        padding: 25px;
        background: var(--dark-card);
        border-radius: 12px;
        margin: 40px 0;
        border: 1px solid var(--dark-border);
      }
      
      .author-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
        border: 3px solid var(--primary);
      }
      
      .author-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .author-info h4 {
        margin: 0 0 5px;
        font-size: 1.2rem;
        color: var(--text-primary);
      }
      
      .author-info p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.6;
      }
      
      /* Social Sharing */
      .social-sharing {
        display: flex;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
        gap: 10px;
      }
      
      .share-label {
        font-weight: 600;
        margin-right: 15px;
        color: var(--text-primary);
      }
      
      .share-buttons {
        display: flex;
        gap: 10px;
      }
      
      .share-button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--dark-card);
        border: 1px solid var(--dark-border);
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        will-change: transform;
      }
      
      .share-button:hover {
        transform: translateY(-3px);
        box-shadow: var(--box-shadow);
      }
      
      .share-button img {
        width: 20px;
        height: 20px;
      }
      
      /* Comments Section */
      .comments-section {
        background: var(--dark-surface);
        border-radius: 12px;
        padding: 40px;
        margin-bottom: 40px;
        box-shadow: var(--box-shadow);
        border: 1px solid var(--dark-border);
      }
      
      .comments-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 30px;
        color: var(--text-primary);
        position: relative;
        padding-bottom: 15px;
      }
      
      .comments-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--primary-light));
        border-radius: 3px;
      }
      
      .comment-list {
        margin-bottom: 40px;
      }
      
      .comment-item {
        display: flex;
        padding: 20px;
        background: var(--dark-card);
        border-radius: 12px;
        margin-bottom: 20px;
        border: 1px solid var(--dark-border);
      }
      
      .comment-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;
        flex-shrink: 0;
      }
      
      .comment-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .comment-content {
        flex: 1;
      }
      
      .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      
      .comment-author {
        font-weight: 600;
        color: var(--text-primary);
      }
      
      .comment-date {
        font-size: 0.85rem;
        color: var(--text-tertiary);
      }
      
      .comment-text {
        color: var(--text-secondary);
        line-height: 1.6;
      }
      
      /* Comment Form */
      .comment-form {
        background: var(--dark-card);
        border-radius: 12px;
        padding: 30px;
        border: 1px solid var(--dark-border);
      }
      
      .comment-form-title {
        font-size: 1.5rem;
        margin-bottom: 25px;
        color: var(--text-primary);
        font-weight: 600;
      }
      
      .form-group {
        margin-bottom: 20px;
      }
      
      .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--text-secondary);
      }
      
      .form-control {
        width: 100%;
        padding: 12px 15px;
        background-color: var(--dark-surface);
        border: 1px solid var(--dark-border);
        border-radius: 8px;
        color: var(--text-primary);
        font-size: 1rem;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      
      .form-control:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(255, 94, 20, 0.1);
      }
      
      .form-control::placeholder {
        color: var(--text-tertiary);
      }
      
      textarea.form-control {
        min-height: 120px;
        resize: vertical;
      }
      
      .submit-button {
        display: inline-flex;
        align-items: center;
        padding: 12px 25px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
        will-change: transform;
      }
      
      .submit-button:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
      }
      
      .submit-button svg {
        margin-left: 8px;
      }
      
      /* Sidebar */
      .blog-sidebar {
        position: sticky;
        top: 100px;
      }
      
      .sidebar-widget {
        background: var(--dark-surface);
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 30px;
        box-shadow: var(--box-shadow);
        border: 1px solid var(--dark-border);
      }
      
      .widget-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 25px;
        position: relative;
        padding-bottom: 15px;
      }
      
      .widget-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--primary-light));
        border-radius: 3px;
      }
      
      .recent-post {
        display: flex;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--dark-border);
      }
      
      .recent-post:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
      
      .recent-post-image {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        overflow: hidden;
        flex-shrink: 0;
      }
      
      .recent-post-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        will-change: transform;
      }
      
      .recent-post:hover .recent-post-image img {
        transform: scale(1.05);
      }
      
      .recent-post-content {
        padding-left: 15px;
      }
      
      .recent-post-date {
        font-size: 0.8rem;
        color: var(--text-tertiary);
        margin-bottom: 5px;
        display: flex;
        align-items: center;
      }
      
      .recent-post-date svg {
        margin-right: 5px;
        color: var(--primary);
      }
      
      .recent-post-title {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.4;
        margin: 0;
      }
      
      .recent-post-title a {
        color: var(--text-primary);
        text-decoration: none;
        transition: color 0.3s ease;
      }
      
      .recent-post-title a:hover {
        color: var(--primary);
      }
      
      /* Category widget */
      .category-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .category-item {
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--dark-border);
      }
      
      .category-item:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
      }
      
      .category-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;
        font-weight: 500;
      }
      
      .category-link:hover {
        color: var(--primary);
      }
      
      .category-count {
        background: var(--dark-card);
        color: var(--text-tertiary);
        padding: 2px 10px;
        border-radius: 30px;
        font-size: 0.8rem;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      .category-link:hover .category-count {
        background: var(--primary);
        color: white;
      }
      
      /* Loading State */
      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
      }
      
      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid var(--dark-border);
        border-top: 3px solid var(--primary);
        border-radius: 50%;
        margin-bottom: 20px;
        animation: spin 1s linear infinite;
        will-change: transform;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .loading-text {
        color: var(--text-secondary);
        font-size: 1.1rem;
      }
      
      /* Responsive */
      @media (max-width: 991px) {
        .article-container,
        .comments-section {
          padding: 30px;
        }
        
        .article-title {
          font-size: 2rem;
        }
        
        .blog-sidebar {
          margin-top: 50px;
          position: static;
        }
      }
      
      @media (max-width: 767px) {
        .article-container,
        .comments-section {
          padding: 25px;
        }
        
        .article-title {
          font-size: 1.8rem;
        }
        
        .article-author {
          flex-direction: column;
          align-items: flex-start;
        }
        
        .author-avatar {
          margin-bottom: 15px;
        }
        
        .sidebar-widget {
          padding: 20px;
        }
      }
      
      @media (max-width: 575px) {
        .article-container,
        .comments-section {
          padding: 20px;
        }
        
        .article-title {
          font-size: 1.5rem;
        }
        
        .article-meta {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        
        .comment-item {
          flex-direction: column;
        }
        
        .comment-avatar {
          margin-bottom: 15px;
        }
      }
    `;

    // Append style to head
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      const existingStyle = document.getElementById(
        "premium-blog-details-styles"
      );
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  // Fetch post details - optimized with useCallback
  const fetchPostDetails = useCallback(async () => {
    setLoading(true);
    try {
      // Use the API you created in premium-blog.jsx
      const postData = await API.getBlogPostById(Number.parseInt(id));

      if (!postData) {
        throw new Error("Post not found");
      }

      setPost(postData);

      // Fetch all posts for related content
      const allPosts = await API.getAllBlogPosts();

      // Filter for related posts (same category, excluding current post)
      const related = allPosts
        .filter(
          (p) =>
            p.id !== Number.parseInt(id) && p.category === postData.category
        )
        .slice(0, 3);

      // If not enough related posts by category, add some recent posts
      if (related.length < 3) {
        const recentPosts = allPosts
          .filter(
            (p) =>
              p.id !== Number.parseInt(id) &&
              !related.some((r) => r.id === p.id)
          )
          .slice(0, 3 - related.length);

        setRelatedPosts([...related, ...recentPosts]);
      } else {
        setRelatedPosts(related);
      }

      // Fetch comments for this post
      fetchComments();

      setError(null);
    } catch (err) {
      console.error("Error fetching post details:", err);
      setError("Failed to load blog post. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Initial data fetch
  useEffect(() => {
    fetchPostDetails();

    // Clean up function
    return () => {
      // Reset any timers or subscriptions if needed
    };
  }, [fetchPostDetails]);

  // Function to fetch comments - memoized
  const fetchComments = useCallback(async () => {
    try {
      // For now, we'll create some mock comments
      // Replace with your actual API call when ready
      const mockComments = [
        {
          id: 1,
          author: "Sarah Johnson",
          date: "June 12, 2023",
          text: "This article was incredibly insightful. I've been struggling with revenue optimization for my business, and these strategies offer a fresh perspective that I hadn't considered before.",
          avatar: img,
        },
        {
          id: 2,
          author: "David Chen",
          date: "June 15, 2023",
          text: "I implemented the third strategy mentioned in this article last month and have already seen a 15% increase in our recurring revenue. Thank you for sharing such actionable advice!",
          avatar: img,
        },
      ];

      setComments(mockComments);
    } catch (err) {
      console.error("Error fetching comments:", err);
      // We don't want to show error for comments failing to load
      // as the main content is more important
    }
  }, []);

  // Function to handle comment submission - memoized
  const handleCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!username.trim() || !comment.trim()) {
        toast.error("Please enter your name and comment");
        return;
      }

      // For demo purposes, we'll just add the comment to local state
      // In a real app, you would send this to your API
      const newComment = {
        id: comments.length + 1,
        author: username,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        text: comment,
        avatar: img, // Default avatar
      };

      setComments((prevComments) => [...prevComments, newComment]);
      toast.success("Comment added successfully!");

      // Reset form
      setUsername("");
      setEmail("");
      setComment("");
    },
    [username, email, comment, comments]
  );

  // Function to create URL-friendly slugs - memoized
  const createSlug = useCallback((text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .replace(/--+/g, "-");
  }, []);

  // Extract title for sidebar - memoized
  const extractSidebarTitle = useCallback((title) => {
    const words = title.split(" ");
    if (words.length <= 4) return title;
    return `${words.slice(0, 3).join(" ")}...`;
  }, []);

  // Social sharing functions - memoized
  const pageUrl = useMemo(() => window.location.href, []);

  const handleWhatsAppShare = useCallback(() => {
    window.open(`https://wa.me/?text=${pageUrl} ${post?.title}`);
  }, [pageUrl, post?.title]);

  const handleTwitterShare = useCallback(() => {
    window.open(
      `https://twitter.com/intent/tweet?text=${pageUrl}. ${post?.title}`
    );
  }, [pageUrl, post?.title]);

  const handleFacebookShare = useCallback(() => {
    const encodedURL = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      "_blank"
    );
  }, []);

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.description,
        url: pageUrl,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      handleFacebookShare();
    }
  }, [post, pageUrl, handleFacebookShare]);

  // Calculate reading time - memoized
  const getReadingTime = useCallback((text) => {
    // Average reading speed: 200 words per minute
    const wordCount = text?.split(/\s+/).length || 0;
    const readingTime = Math.ceil(wordCount / 200);
    return Math.max(readingTime, 2); // Minimum 2 minutes
  }, []);

  // Memoized categories for sidebar
  const categories = useMemo(() => {
    return [
      "Business Growth",
      "Revenue Strategy",
      "Marketing",
      "Technology",
      "Financial Tips",
    ];
  }, []);

  if (loading) {
    return (
      <>
        <Header tags={window.location.href} />
        <section className="py-5">
          <div className="container">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading article...</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header tags={window.location.href} />
        <section className="py-5">
          <div className="container">
            <div className="error-container">
              <p className="error-message">{error || "Post not found"}</p>
              <NavLink to="/blog" className="btn btn-primary mt-3">
                Back to Blog
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header tags={window.location.href} />

      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Article Container */}
              <article className="article-container">
                {/* Article Header */}
                <header className="article-header">
                  <h1 className="article-title">{post.title}</h1>

                  <div className="article-meta">
                    <div className="article-meta-item">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{post.createAt}</span>
                    </div>

                    <div className="article-meta-item">
                      <FontAwesomeIcon icon={faClock} />
                      <span>{getReadingTime(post.description)} min read</span>
                    </div>

                    <div className="article-meta-item">
                      <FontAwesomeIcon icon={faTag} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="article-featured-image">
                  <img
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    title={post.title}
                    loading="lazy"
                  />
                </div>

                {/* Article Content */}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></div>

                {/* Author Section */}
                <div className="article-author">
                  <div className="author-avatar">
                    <img
                      src={post.author?.image || img}
                      alt={post.author?.name || "Author"}
                      loading="lazy"
                    />
                  </div>
                  <div className="author-info">
                    <h4>{post.author?.name || "Author"}</h4>
                    <p>
                      Content specialist with expertise in business growth
                      strategies and revenue optimization. Passionate about
                      helping businesses reach their full potential through
                      data-driven approaches.
                    </p>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="social-sharing">
                  <div className="share-label">Share this article:</div>
                  <div className="share-buttons">
                    <ShareButton
                      icon="https://img.icons8.com/ios-glyphs/30/53CE55/whatsapp.png"
                      onClick={handleWhatsAppShare}
                    />
                    <ShareButton
                      icon="https://img.icons8.com/color/48/facebook-new.png"
                      onClick={handleFacebookShare}
                    />
                    <ShareButton
                      icon="https://img.icons8.com/color/48/twitter--v1.png"
                      onClick={handleTwitterShare}
                    />
                    <ShareButton
                      icon="https://img.icons8.com/color/48/share--v1.png"
                      onClick={handleShare}
                    />
                  </div>
                </div>
              </article>

              {/* Comments Section */}
              <section className="comments-section">
                <h3 className="comments-title">Comments ({comments.length})</h3>

                {comments.length > 0 ? (
                  <div className="comment-list">
                    {comments.map((item) => (
                      <Comment key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center my-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}

                {/* Comment Form */}
                <div className="comment-form">
                  <h4 className="comment-form-title">Leave a Comment</h4>
                  <ToastContainer position="top-right" theme="dark" />

                  <form onSubmit={handleCommentSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email (optional)"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="comment">
                        Comment <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="comment"
                        className="form-control"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Your comment"
                        required
                        rows="4"
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      Post Comment <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                  </form>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                {/* Related Posts Widget */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Related Posts</h4>
                  {relatedPosts.map((post) => (
                    <RelatedPost
                      key={`recent-${post.id}`}
                      post={post}
                      createSlug={createSlug}
                      extractSidebarTitle={extractSidebarTitle}
                    />
                  ))}
                </div>

                {/* Categories Widget */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="category-list">
                    {categories.map((category, index) => (
                      <CategoryItem
                        key={index}
                        category={category}
                        count={Math.floor(Math.random() * 10) + 2}
                        createSlug={createSlug}
                      />
                    ))}
                  </ul>
                </div>

                {/* Newsletter Widget */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">Subscribe</h4>
                  <p className="mb-3">
                    Get the latest articles and business updates that you care
                    about
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-button w-100">
                      Subscribe <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Details;
