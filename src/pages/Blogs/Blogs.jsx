// import React, { useEffect, useState } from "react";
// import "./Blogs.css";
// import "../../assets/css/media-query.css";
// import img from "../../assets/image/software-developer.jpg";
// import blog_banner from "../../assets/image/blog_banner.jpg";
// import { NavLink } from "react-router-dom";
// import Header from "../../Common/Header/Headers";
// import Footer from "../../Common/Footer/Footer";
// import Banner from "../../Common/Banners/Banner";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

// const Blogs = () => {
//   let [Data, setData] = useState([]);

//   let xhr = new XMLHttpRequest();
//   let url = "https://www.revenuerocket.site/api/post/";
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       let response = JSON.parse(xhr.responseText);
//       setData(response);
//     }
//   };
//   xhr.send();
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
//     const firstWords = words.slice(0, Math.min(words.length - 1, 7)).join(" ");
//     // Get the last word separately
//     const lastWord = words[words.length - 1];
//     // Concatenate the first words and the last word
//     const extractedTitle = `${firstWords} ${lastWord}`;
//     return extractedTitle;
//   }
//   function extractWordsFromTitle2(title) {
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
//       <Banner Img={blog_banner} title="our latest blogs" color="#fff" />
//       <section id="blogs-page">
//         <div className="container">
//           <div className="title mt-3">
//             <h3 className="text-uppercase text-left font-weight-bold">Blogs</h3>
//           </div>
//           <div className="blogs-container">
//             <div className="row">
//               <div className="col-md-8 col-sm col-lg-8 blog_item">
//                 <div className="row">
//                   {Data.map((item) => (
//                     <div className="col-md-6 col-sm-8 blog_item" key={item.id}>
//                       <div className="blog-card my-3 shadow p-3">
//                         <img
//                           title={item.title}
//                           src={item.thumbnail}
//                           style={{ width: "100%", height: "200px" }}
//                           alt={item.title}
//                         />
//                         <div className="author d-flex py-3">
//                           <img
//                             title={item.title}
//                             src={img}
//                             className="img-fluid rounded-circle border border-success"
//                             style={{ width: "30px", height: "30px" }}
//                             alt={item.title}
//                           />
//                           <div className="d-flex">
//                             <div className="blog_author_name pl-3">
//                               <p className="p-0 m-0 blog_author_name">
//                                 Mustafa Khan
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="blog-content py-2">
//                           <p>
//                             <NavLink
//                               to={"/blog/" + item.id + "/" + Slugs(item.title)}
//                               className="text-dark"
//                               style={{
//                                 fontSize: "16px",
//                                 fontWeight: "bold",
//                                 textTransform: "capitalize",
//                               }}
//                             >
//                               {extractWordsFromTitle1(item.title)}
//                             </NavLink>
//                           </p>
//                           <p>
//                             {item.descrioption
//                               .replace(
//                                 /<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm,
//                                 ""
//                               )
//                               .slice(0, 150)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="col-md-4 col-sm col-lg-4 card">
//                 <div className="blog-right-sidebar">
//                   <hr />
//                   <div className="recent-news">
//                     <div className="title">
//                       <h5 className="text-uppercase text-left text-dark">
//                         recent blogs
//                       </h5>
//                     </div>
//                     {Data.map((item) => (
//                       <div
//                         className="recent-blog-card p-3 my-2 shadow-sm border border"
//                         key={item.id}
//                       >
//                         <div className="d-flex">
//                           <img
//                             title={item.title}
//                             src={item.thumbnail}
//                             className="img-fluid w-25 rounded"
//                             style={{ height: "auto" }}
//                             alt={item.title}
//                           />
//                           <div className="pl-3">
//                             <span>
//                               <FontAwesomeIcon icon={faCalendarAlt} />{" "}
//                               {item.createAt}
//                             </span>
//                             <p className="p-0 m-0">
//                               <NavLink
//                                 to={
//                                   "/blog/" + item.id + "/" + Slugs(item.title)
//                                 }
//                                 className="text-dark"
//                               >
//                                 {extractWordsFromTitle2(item.title)}
//                               </NavLink>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
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

// export default Blogs;

"use client";

import { useEffect, useState } from "react";
import "./Blogs.css"; // Keep original CSS import
import "../../assets/css/media-query.css";
import img from "../../assets/image/software-developer.jpg";
import blog_banner from "../../assets/image/blog_banner.jpg";
import { NavLink } from "react-router-dom";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faSearch,
  faChevronRight,
  faTag,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

// Custom Premium Banner Component
const PremiumBanner = ({ Img, title, color }) => {
  return (
    <div className="premium-blog-banner">
      <div className="banner-overlay"></div>
      <div
        className="banner-background"
        style={{ backgroundImage: `url(${Img})` }}
      ></div>

      <div className="banner-content container">
        <div className="banner-title-container">
          <h1 className="banner-title" style={{ color: color || "#fff" }}>
            {title}
          </h1>
          <div className="banner-accent"></div>
        </div>

        <div className="banner-breadcrumb">
          <span>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="active">Blog</span>
        </div>
      </div>

      <div className="banner-shape-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#121212"
            fillOpacity="1"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

// Internal API - Mock Data with Website Related Content
export const API = {
  getAllBlogPosts: async () => {
    // Simulate network delay for realistic API feeling
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Generate current date and dates in the past for blog posts
    const currentDate = new Date();
    const formatDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    };

    // Website related blog categories
    const categories = [
      "Revenue Strategy",
      "Marketing",
      "Business Growth",
      "Financial Tips",
      "Technology",
      "Sales Optimization",
      "Market Analysis",
    ];

    // Website related author information
    const authors = [
      { name: "Mustafa Khan", image: img },
      { name: "Sarah Johnson", image: img },
      { name: "David Chen", image: img },
      { name: "Priya Sharma", image: img },
    ];

    // Generate random reading time between 3-15 minutes
    const getRandomReadingTime = () => Math.floor(Math.random() * 12) + 3;

    // Custom mock blog data related to the website theme (Revenue Rocket)
    const mockBlogPosts = [
      {
        id: 1,
        title: "7 Proven Strategies to Boost Your Revenue in 2023",
        description:
          "<p>Discover the latest strategies that top companies are using to increase their revenue streams and improve profitability. This comprehensive guide breaks down actionable tactics that you can implement immediately.</p><p>We'll cover diversification of income channels, pricing optimization, customer retention programs, and much more. Our data-driven approach ensures you can measure results effectively.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Revenue Strategy",
        createAt: formatDate(
          new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[0],
      },
      {
        id: 2,
        title: "Digital Marketing Trends That Will Transform Your Business",
        description:
          "<p>Stay ahead of the curve with these cutting-edge digital marketing trends that are reshaping how businesses connect with their audiences. From AI-powered personalization to interactive content experiences.</p><p>We dive deep into practical applications of these trends with real-world case studies and implementation strategies tailored for businesses of all sizes.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Marketing",
        createAt: formatDate(
          new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[1],
      },
      {
        id: 3,
        title: "How to Scale Your Business Without Scaling Your Costs",
        description:
          "<p>Scaling efficiently is the holy grail of business growth. This article explores strategic approaches to expanding your business operations while keeping costs under control.</p><p>Learn how to leverage technology, automation, and strategic outsourcing to create sustainable growth models that maximize your return on investment and position your company for long-term success.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Business Growth",
        createAt: formatDate(
          new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[2],
      },
      {
        id: 4,
        title: "Financial Planning Essentials for Growing Businesses",
        description:
          "<p>Solid financial planning is the backbone of any successful business growth strategy. This guide provides a step-by-step approach to creating robust financial plans that support your business objectives.</p><p>We cover cash flow management, capital allocation, investment prioritization, and risk mitigation techniques designed specifically for businesses in growth phases.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Financial Tips",
        createAt: formatDate(
          new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[3],
      },
      {
        id: 5,
        title: "Revolutionize Your Sales Process with These Tech Solutions",
        description:
          "<p>Technology is transforming how businesses approach sales. From AI-powered lead scoring to automated follow-up systems, the right tech stack can dramatically improve your conversion rates.</p><p>This comprehensive overview highlights the most effective sales technologies, with practical advice on implementation and integration with your existing systems.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Technology",
        createAt: formatDate(
          new Date(currentDate.getTime() - 12 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[0],
      },
      {
        id: 6,
        title: "Customer Retention Strategies That Maximize Lifetime Value",
        description:
          "<p>Acquiring new customers costs significantly more than retaining existing ones. This in-depth article explores proven strategies for building customer loyalty and maximizing lifetime value.</p><p>Learn how to implement effective loyalty programs, personalized communication strategies, and exceptional customer service protocols that keep customers coming back and spending more.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Revenue Strategy",
        createAt: formatDate(
          new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[1],
      },
      {
        id: 7,
        title: "Building a High-Performance Team for Sustainable Growth",
        description:
          "<p>Your team is the engine that drives your business forward. This guide provides actionable insights on recruiting, developing, and retaining top talent that aligns with your company's vision and culture.</p><p>Discover frameworks for effective team structure, performance management, and creating an environment that fosters innovation and continuous improvement.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Business Growth",
        createAt: formatDate(
          new Date(currentDate.getTime() - 18 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[2],
      },
      {
        id: 8,
        title: "Data-Driven Decision Making: A Guide for Modern Businesses",
        description:
          "<p>In today's competitive landscape, making decisions based on data rather than intuition can be the difference between success and failure. This comprehensive guide walks you through the process of implementing data-driven decision-making in your organization.</p><p>Learn about key metrics to track, tools for data collection and analysis, and frameworks for turning insights into actionable business strategies.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Technology",
        createAt: formatDate(
          new Date(currentDate.getTime() - 21 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[3],
      },
      {
        id: 9,
        title: "Market Expansion: Identifying and Capturing New Opportunities",
        description:
          "<p>Expanding into new markets is a critical growth strategy, but it comes with significant challenges. This article provides a structured approach to identifying, evaluating, and successfully entering new market segments.</p><p>Explore techniques for market research, competitive analysis, and developing entry strategies that minimize risk while maximizing growth potential.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Market Analysis",
        createAt: formatDate(
          new Date(currentDate.getTime() - 24 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[0],
      },
      {
        id: 10,
        title: "Creating a Recession-Proof Revenue Model for Your Business",
        description:
          "<p>Economic downturns are inevitable, but their impact on your business doesn't have to be devastating. This strategic guide shows how to build resilience into your revenue model to withstand economic fluctuations.</p><p>Learn about diversifying revenue streams, creating predictable recurring revenue, and implementing flexible pricing strategies that can adapt to changing market conditions.</p>",
        thumbnail:
          "https://images.unsplash.com/photo-1612550761236-e813928f7271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: "Revenue Strategy",
        createAt: formatDate(
          new Date(currentDate.getTime() - 28 * 24 * 60 * 60 * 1000)
        ),
        readTime: getRandomReadingTime(),
        author: authors[1],
      },
    ];

    return mockBlogPosts;
  },

  // Get a single blog post by ID
  getBlogPostById: async (id) => {
    const allPosts = await API.getAllBlogPosts();
    return allPosts.find((post) => post.id === Number.parseInt(id)) || null;
  },

  // Search blog posts
  searchBlogPosts: async (query) => {
    const allPosts = await API.getAllBlogPosts();
    query = query.toLowerCase();

    return allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    );
  },

  // Get posts by category
  getBlogPostsByCategory: async (category) => {
    const allPosts = await API.getAllBlogPosts();
    return allPosts.filter((post) => post.category === category);
  },
};

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Add custom CSS for premium design
  useEffect(() => {
    // Create style element
    const styleElement = document.createElement("style");

    // Add premium CSS
    styleElement.innerHTML = `
    /* Premium Blog Styles with Dark Theme */
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
    
    /* Premium Banner Styles */
    .premium-blog-banner {
      position: relative;
      height: 400px;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .banner-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      transform: scale(1.05);
      filter: brightness(0.5);
    }
    
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 100%);
      z-index: 1;
    }
    
    .banner-content {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 0 20px;
    }
    
    .banner-title-container {
      margin-bottom: 20px;
    }
    
    .banner-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: #ffffff;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      letter-spacing: -1px;
      margin: 0;
      padding: 0;
      position: relative;
      text-transform: capitalize;
    }
    
    .banner-accent {
      height: 4px;
      width: 80px;
      background: linear-gradient(90deg, var(--primary), var(--primary-light));
      margin: 20px auto 0;
      border-radius: 2px;
    }
    
    .banner-breadcrumb {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1rem;
    }
    
    .banner-breadcrumb span {
      margin: 0 5px;
    }
    
    .breadcrumb-separator {
      color: var(--primary);
    }
    
    .banner-breadcrumb .active {
      color: var(--primary-light);
    }
    
    .banner-shape-divider {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 2;
    }
    
    /* Blog Page Styles */
    #blogs-page {
      background-color: var(--dark-bg);
      padding: 80px 0;
      position: relative;
    }
    
    .section-title {
      position: relative;
      margin-bottom: 50px;
    }
    
    .section-title h3 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-primary);
      position: relative;
      display: inline-block;
      margin-bottom: 15px;
    }
    
    .section-title h3::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--primary-light));
      border-radius: 3px;
    }
    
    .section-title p {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
    }
    
    /* Blog Cards */
    .blog-card {
      background: var(--dark-surface);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--box-shadow);
      transition: var(--transition);
      height: 100%;
      border: 1px solid var(--dark-border);
    }
    
    .blog-card:hover {
      box-shadow: var(--box-shadow-hover);
      transform: translateY(-5px);
    }
    
    .blog-image {
      position: relative;
      overflow: hidden;
    }
    
    .blog-image img {
      transition: var(--transition);
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
    
    .blog-card:hover .blog-image img {
      transform: scale(1.05);
    }
    
    .blog-category {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--primary);
      color: white;
      padding: 5px 15px;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 600;
      z-index: 2;
    }
    
    .blog-content {
      padding: 25px;
    }
    
    .blog-meta {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      flex-wrap: wrap;
    }
    
    .blog-meta-item {
      display: flex;
      align-items: center;
      margin-right: 20px;
      color: var(--text-secondary);
      font-size: 0.85rem;
    }
    
    .blog-meta-item svg {
      margin-right: 5px;
      color: var(--primary);
    }
    
    .blog-title {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 15px;
    }
    
    .blog-title a {
      color: var(--text-primary);
      text-decoration: none;
      transition: var(--transition);
    }
    
    .blog-title a:hover {
      color: var(--primary);
    }
    
    .blog-excerpt {
      color: var(--text-secondary);
      margin-bottom: 20px;
      line-height: 1.6;
    }
    
    .blog-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      border-top: 1px solid var(--dark-border);
    }
    
    .blog-author {
      display: flex;
      align-items: center;
    }
    
    .blog-author img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary);
    }
    
    .blog-author-info {
      margin-left: 10px;
    }
    
    .blog-author-name {
      font-weight: 600;
      color: var(--text-primary);
      font-size: 0.9rem;
      margin: 0;
    }
    
    .read-more {
      display: inline-flex;
      align-items: center;
      color: var(--primary);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: var(--transition);
    }
    
    .read-more svg {
      margin-left: 5px;
      transition: var(--transition);
    }
    
    .read-more:hover {
      color: var(--primary-light);
    }
    
    .read-more:hover svg {
      transform: translateX(3px);
    }
    
    /* Sidebar Styles */
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
    
    .search-form {
      position: relative;
    }
    
    .search-input {
      width: 100%;
      padding: 12px 20px;
      padding-right: 50px;
      border: 1px solid var(--dark-border);
      border-radius: 8px;
      font-size: 1rem;
      transition: var(--transition);
      background-color: var(--dark-card);
      color: var(--text-primary);
    }
    
    .search-input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(255, 94, 20, 0.1);
    }
    
    .search-button {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      transition: var(--transition);
    }
    
    .search-button:hover {
      color: var(--primary);
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
      transition: var(--transition);
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
      transition: var(--transition);
    }
    
    .recent-post-title a:hover {
      color: var(--primary);
    }
    
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
      transition: var(--transition);
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
      transition: var(--transition);
    }
    
    .category-link:hover .category-count {
      background: var(--primary);
      color: white;
    }
    
    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .tag {
      padding: 5px 15px;
      background: var(--dark-card);
      color: var(--text-secondary);
      border-radius: 30px;
      font-size: 0.85rem;
      text-decoration: none;
      transition: var(--transition);
    }
    
    .tag:hover {
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
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .loading-text {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }
    
    /* Error State */
    .error-container {
      background: rgba(220, 38, 38, 0.1);
      border-left: 4px solid #dc2626;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    
    .error-message {
      color: #ef4444;
      font-weight: 500;
    }
    
    /* Responsive Styles */
    @media (max-width: 1199px) {
      .banner-title {
        font-size: 3rem;
      }
    }
    
    @media (max-width: 991px) {
      .premium-blog-banner {
        height: 350px;
      }
      
      .banner-title {
        font-size: 2.5rem;
      }
      
      .section-title h3 {
        font-size: 2.2rem;
      }
      
      .blog-sidebar {
        margin-top: 50px;
        position: static;
      }
    }
    
    @media (max-width: 767px) {
      .premium-blog-banner {
        height: 300px;
      }
      
      .banner-title {
        font-size: 2rem;
      }
      
      #blogs-page {
        padding: 60px 0;
      }
      
      .section-title {
        margin-bottom: 30px;
      }
      
      .section-title h3 {
        font-size: 1.8rem;
      }
      
      .blog-title {
        font-size: 1.2rem;
      }
      
      .blog-content {
        padding: 20px;
      }
      
      .sidebar-widget {
        padding: 20px;
      }
    }
    
    @media (max-width: 575px) {
      .premium-blog-banner {
        height: 250px;
      }
      
      .banner-title {
        font-size: 1.8rem;
      }
      
      .banner-accent {
        width: 60px;
        margin-top: 15px;
      }
      
      .blog-meta {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .blog-meta-item {
        margin-bottom: 5px;
      }
      
      .blog-footer {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .read-more {
        margin-top: 15px;
      }
    }
  `;

    // Append style to head
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    // Fetch blog posts from our internal API
    const fetchBlogPosts = async () => {
      setIsLoading(true);
      try {
        // Use our internal API instead of external fetch
        const data = await API.getAllBlogPosts();
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Function to create URL-friendly slugs
  const createSlug = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .replace(/--+/g, "-");
  };

  // Function to extract first few words from title for main listing
  const extractMainTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 8) return title;
    const firstWords = words.slice(0, 7).join(" ");
    return `${firstWords}...`;
  };

  // Function to extract fewer words for sidebar listing
  const extractSidebarTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 4) return title;
    const firstWords = words.slice(0, 3).join(" ");
    return `${firstWords}...`;
  };

  // Function to sanitize HTML content
  const sanitizeHtml = (html) => {
    // Define allowed HTML tags
    const allowedTags = [
      "p",
      "br",
      "strong",
      "em",
      "u",
      "ul",
      "ol",
      "li",
      "a",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ];

    // Create a regex pattern to match all tags except allowed ones
    const pattern = new RegExp(
      `<(?!\/?(?:${allowedTags.join("|")})\\b)[^>]*\/?>`,
      "gi"
    );
    return html.replace(pattern, "");
  };

  // Function to truncate text with ellipsis
  const truncateText = (text, maxLength) => {
    const sanitized = sanitizeHtml(text);
    if (sanitized.length <= maxLength) return sanitized;
    return sanitized.slice(0, maxLength) + "...";
  };

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      (post.category && post.category === activeCategory);

    return matchesSearch && matchesCategory;
  });

  // Get categories from posts
  const categories = [
    "All",
    ...new Set(
      blogPosts.map((post) => post.category || "Technology").filter(Boolean)
    ),
  ];

  return (
    <>
      <Header tags={window.location.href} />

      {/* Using our custom PremiumBanner component */}
      <PremiumBanner Img={blog_banner} title="Explore Our Blog" color="#fff" />

      <section id="blogs-page">
        <div className="container">
          <div className="section-title">
            <h3>Latest Articles</h3>
            <p>
              Discover insights, tips, and the latest trends in our collection
              of thought-provoking articles about revenue strategies and
              business growth.
            </p>
          </div>

          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading premium content...</p>
            </div>
          )}

          {error && (
            <div className="error-container">
              <p className="error-message">{error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <div className="row">
              {/* Main Blog Listing */}
              <div className="col-lg-8">
                <div className="row">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <div className="col-md-6 mb-4" key={post.id}>
                        <article className="blog-card">
                          <div className="blog-image">
                            <img
                              src={post.thumbnail || "/placeholder.svg"}
                              alt={post.title}
                              title={post.title}
                            />
                            <div className="blog-category">{post.category}</div>
                          </div>

                          <div className="blog-content">
                            <div className="blog-meta">
                              <div className="blog-meta-item">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <span>{post.createAt}</span>
                              </div>
                              <div className="blog-meta-item">
                                <FontAwesomeIcon icon={faClock} />
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>

                            <h3 className="blog-title">
                              <NavLink
                                to={`/blog/${post.id}/${createSlug(
                                  post.title
                                )}`}
                              >
                                {extractMainTitle(post.title)}
                              </NavLink>
                            </h3>

                            <p
                              className="blog-excerpt"
                              dangerouslySetInnerHTML={{
                                __html: truncateText(post.description, 120),
                              }}
                            ></p>

                            <div className="blog-footer">
                              <div className="blog-author">
                                <img
                                  src={post.author?.image || img}
                                  alt="Author"
                                  title={post.author?.name}
                                />
                                <div className="blog-author-info">
                                  <p className="blog-author-name">
                                    {post.author?.name}
                                  </p>
                                </div>
                              </div>

                              <NavLink
                                to={`/blog/${post.id}/${createSlug(
                                  post.title
                                )}`}
                                className="read-more"
                              >
                                Read More{" "}
                                <FontAwesomeIcon icon={faChevronRight} />
                              </NavLink>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <h4>No posts found matching your criteria</h4>
                        <p>
                          Try adjusting your search or browse all categories
                        </p>
                        <button
                          className="btn btn-primary mt-3"
                          onClick={() => {
                            setSearchTerm("");
                            setActiveCategory("All");
                          }}
                        >
                          View All Posts
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  {/* Search Widget */}
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Search</h4>
                    <div className="search-form">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>

                  {/* Recent Posts Widget */}
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Recent Posts</h4>
                    {blogPosts.slice(0, 4).map((post) => (
                      <div className="recent-post" key={`recent-${post.id}`}>
                        <div className="recent-post-image">
                          <img
                            src={post.thumbnail || "/placeholder.svg"}
                            alt={post.title}
                          />
                        </div>
                        <div className="recent-post-content">
                          <div className="recent-post-date">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>{post.createAt}</span>
                          </div>
                          <h5 className="recent-post-title">
                            <NavLink
                              to={`/blog/${post.id}/${createSlug(post.title)}`}
                            >
                              {extractSidebarTitle(post.title)}
                            </NavLink>
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Categories Widget */}
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="category-list">
                      {categories.map((category, index) => (
                        <li className="category-item" key={index}>
                          <a
                            href="#"
                            className="category-link"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveCategory(category);
                            }}
                          >
                            <span>
                              <FontAwesomeIcon icon={faTag} className="mr-2" />
                              {category}
                            </span>
                            <span className="category-count">
                              {category === "All"
                                ? blogPosts.length
                                : blogPosts.filter(
                                    (post) => post.category === category
                                  ).length}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags Widget */}
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Popular Tags</h4>
                    <div className="tag-cloud">
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("revenue");
                        }}
                      >
                        Revenue
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("business");
                        }}
                      >
                        Business
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("marketing");
                        }}
                      >
                        Marketing
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("finance");
                        }}
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("growth");
                        }}
                      >
                        Growth
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("strategy");
                        }}
                      >
                        Strategy
                      </a>
                      <a
                        href="#"
                        className="tag"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchTerm("technology");
                        }}
                      >
                        Technology
                      </a>
                    </div>
                  </div>

                  {/* Share Widget */}
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Share</h4>
                    <div className="d-flex">
                      <a href="#" className="btn btn-outline-primary mr-2">
                        <FontAwesomeIcon icon={faShareAlt} /> Share
                      </a>
                      <a href="#" className="btn btn-outline-secondary">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
