// import React from "react";
// import "./ClientSay.css";
// import "../../assets/css/media-query.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCoffee,
//   faStarHalf,
//   faStarHalfAlt,
//   faStar,
// } from "@fortawesome/free-solid-svg-icons";
// import { clientSayData } from "../../services/static/clientSayData";
// const Responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const ClientSay = () => {
//   return (
//     <section id="client-say">
//       <div className="container">
//         <div className="title">
//           <p
//             className="title-badge text-white text-uppercase rounded-lg bg-success p-1 d-inline"
//             style={{ fontSize: "12px" }}
//           >
//             what our client say
//           </p>
//           <h3 className="text-capitalize py-2">
//             <span style={{ color: "#ed854f" }}>Revenue Rocket</span>'s Service
//             Praised for Exceptional Results{" "}
//           </h3>
//         </div>

//         <div className="">
//           <div className="">
//             <div className="client_card">
//               <Carousel
//                 responsive={Responsive}
//                 swipeable={true}
//                 draggable={true}
//                 showDots={true}
//                 ssr={true} // means to render carousel on server-side.
//                 infinite={true}
//                 autoPlaySpeed={1000}
//                 keyBoardControl={true}
//                 customTransition="all .5"
//                 transitionDuration={500}
//                 containerClass="carousel-container"
//                 removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
//                 dotListClass="custom-dot-list-style"
//                 itemClass="carousel-item-padding-40-px"
//               >
//                 {clientSayData.map((item) => (
//                   <div
//                     className="client_item shadow-sm m-2 p-3 text-center"
//                     key={item.id}
//                   >
//                     <div className="pl-2 text-left">
//                       <p>{item.description}</p>
//                     </div>
//                     <div className="text-left client_wrapper pl-2">
//                       <div className="d-flex">
//                         <img
//                           src={item.img}
//                           className="rounded-circle shadow-sm border client_image"
//                           style={{ width: "30px", height: "30px" }}
//                           title={item.description.slice(0, 20)}
//                           alt={item.description.slice(0, 20)}
//                         />
//                         <h5
//                           className="text-capitalize text-left client_name"
//                           style={{ fontSize: "16px" }}
//                         >
//                           {item.name}
//                         </h5>
//                       </div>
//                       <span className="client_rating_box">
//                         {item.rating == 1.5 ? (
//                           <>
//                             <FontAwesomeIcon icon={faStar} color="#ed854f" />
//                             <FontAwesomeIcon
//                               icon={faStarHalfAlt}
//                               color="#ed854f"
//                             />
//                           </>
//                         ) : item.rating == 2.5 ? (
//                           <>
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon
//                               icon={faStarHalfAlt}
//                               color="#ff9c12"
//                             />
//                           </>
//                         ) : item.rating == 3.5 ? (
//                           <>
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon
//                               icon={faStarHalfAlt}
//                               color="#ff9c12"
//                             />
//                           </>
//                         ) : item.rating == 4.5 ? (
//                           <>
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon
//                               icon={faStarHalfAlt}
//                               color="#ff9c12"
//                             />
//                           </>
//                         ) : (
//                           <>
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                             <FontAwesomeIcon icon={faStar} color="#ff9c12" />
//                           </>
//                         )}
//                       </span>
//                     </div>
//                   </div>
//                 ))}

//                 {/* <div className='client_item shadow-sm m-2 p-3 text-center'>
//                                     <div className='pl-2 text-left'>
//                                         <p>
//                                             Hi, I am habashi, Now I am telling about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
//                                         </p>
//                                     </div>
//                                     <div className='text-left d-flex pl-2'>
//                                         <img src={client2} className='rounded-circle shadow-sm border' style={{ userSelect: 'none', width: "30px", height: "30px" }} alt="" />
//                                         <h5 className='text-capitalize text-left m-0 p-0 pt-2 pl-3' style={{ fontSize: '16px' }}>Mr: habashi</h5>
//                                         <span className="mt-1 pl-3">
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/222222/star--v1.png" alt="star--v1" />
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div className='client_item shadow-sm m-2 p-3 text-center'>
//                                     <div className='pl-2 text-left'>
//                                         <p>
//                                             Hi, I am habashi, Now I am telling about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
//                                         </p>
//                                     </div>
//                                     <div className='client_rating text-left d-flex pl-2'>
//                                         <img src={client3} className='rounded-circle shadow-sm border' style={{ width: "30px", height: "30px" }} alt="" />
//                                         <h5 className='text-capitalize text-left m-0 p-0 pt-2 pl-3' style={{ fontSize: '16px' }}>Mr: belal bin</h5>
//                                         <span className="mt-1 pl-3 client_rating">
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
//                                             <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/222222/star--v1.png" alt="star--v1" />
//                                         </span>
//                                     </div>
//                                 </div> */}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientSay;

"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ClientSay = () => {
  // Client testimonial data
  const clientSayData = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, TechCorp",
      description:
        "Revenue Rocket has transformed our business! We've seen a significant increase in leads and sales since we started working with them. Their team's expertise in digital marketing is unmatched.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Marketing Director, InnovateCo",
      description:
        "The team at Revenue Rocket is incredibly knowledgeable and responsive. They truly care about our success and go above and beyond to deliver results. I'm impressed with their strategic approach.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Peter Jones",
      designation: "Founder, StartupX",
      description:
        "We were struggling to get our marketing efforts off the ground, but Revenue Rocket came in and completely turned things around. Their insights and execution have been invaluable to our growth.",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
    },
    {
      id: 4,
      name: "Alice Brown",
      designation: "COO, GrowthLabs",
      description:
        "Exceptional service and outstanding results! Revenue Rocket is the best marketing agency we've ever worked with. They understand our business goals and consistently exceed our expectations.",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "Michael Chen",
      designation: "E-commerce Manager, ShopDirect",
      description:
        "Revenue Rocket's strategies have doubled our conversion rates in just three months. Their data-driven approach and attention to detail make them stand out from other agencies we've worked with.",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      rating: 4.5,
    },
  ];

  // State for testimonial slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const testimonialRef = useRef(null);

  // Check if mobile and handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Handle navigation
  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientSayData.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === clientSayData.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`star-${i}`}
          icon={faStar}
          className="star-icon"
        />
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half-star"
          icon={faStarHalfAlt}
          className="star-icon"
        />
      );
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-star-${i}`}
          icon={faStar}
          className="star-icon empty"
        />
      );
    }

    return stars;
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [clientSayData[currentIndex]];
    } else {
      // For desktop, show 3 testimonials (or fewer if not enough)
      const result = [];
      const totalItems = clientSayData.length;

      // Current testimonial
      result.push(clientSayData[currentIndex]);

      // Next testimonial
      const nextIndex = (currentIndex + 1) % totalItems;
      result.push(clientSayData[nextIndex]);

      // Next next testimonial
      const nextNextIndex = (currentIndex + 2) % totalItems;
      result.push(clientSayData[nextNextIndex]);

      return result;
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      id="client-testimonials"
      className={`testimonials-section ${isVisible ? "visible" : ""}`}
      ref={testimonialRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="luxury-bg"></div>
      <div className="gold-accent top-left"></div>
      <div className="gold-accent bottom-right"></div>

      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section-badge">Our Clients Say</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-track">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`visible-${testimonial.id}`}
                className={`testimonial-card ${
                  index === 0 ? "primary" : "secondary"
                }`}
              >
                <div className="card-content">
                  <div className="quote-icon">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </div>

                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="testimonial-text">{testimonial.description}</p>

                  <div className="testimonial-author">
                    <div className="author-image">
                      <img
                        src={testimonial.img || "/placeholder.svg"}
                        alt={testimonial.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/60?text=Client";
                        }}
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-title">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-navigation">
            <button
              className="nav-button prev"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="testimonials-indicators">
              {clientSayData.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  className={`indicator ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span></span>
                </button>
              ))}
            </div>

            <button
              className="nav-button next"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main section styles */
        .testimonials-section {
          padding: 80px 0;
          background: #0a0c14;
          position: relative;
          overflow: hidden;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          color: white;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .testimonials-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .luxury-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
              135deg,
              rgba(10, 12, 20, 0.9) 0%,
              rgba(20, 24, 40, 0.9) 100%
            ),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 0;
        }

        .gold-accent {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.15) 0%,
            rgba(212, 175, 55, 0) 70%
          );
          z-index: 0;
        }

        .top-left {
          top: -100px;
          left: -100px;
          width: 300px;
          height: 300px;
        }

        .bottom-right {
          bottom: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
        }

        .testimonials-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Header styles */
        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(90deg, #d4af37, #f5d76e);
          color: #0a0c14;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 30px;
          margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(90deg, #ffffff, #d4af37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, #f5d76e);
        }

        /* Testimonials slider */
        .testimonials-slider {
          position: relative;
          margin-bottom: 30px;
        }

        .testimonials-track {
          display: flex;
          gap: 24px;
          margin-bottom: 30px;
          transition: transform 0.5s ease;
        }

        /* Testimonial cards */
        .testimonial-card {
          flex: 1;
          min-width: 0;
          transition: all 0.5s ease;
          transform-origin: center;
        }

        .testimonial-card.primary {
          flex: 1.2;
          transform: scale(1);
          z-index: 2;
        }

        .testimonial-card.secondary {
          flex: 0.9;
          transform: scale(0.9);
          opacity: 0.6;
          z-index: 1;
        }

        .card-content {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 30px;
          height: 100%;
          border: 1px solid rgba(212, 175, 55, 0.1);
          box-shadow: 0 15px 25px -10px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(212, 175, 55, 0.05) inset;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .card-content::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d4af37, #f5d76e);
        }

        .card-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(212, 175, 55, 0.1) inset;
          border-color: rgba(212, 175, 55, 0.2);
        }

        .quote-icon {
          font-size: 20px;
          color: #d4af37;
          margin-bottom: 16px;
          opacity: 0.7;
        }

        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        :global(.star-icon) {
          color: #d4af37;
          font-size: 14px;
        }

        :global(.star-icon.empty) {
          color: rgba(212, 175, 55, 0.2);
        }

        .testimonial-text {
          font-size: 15px;
          line-height: 1.6;
          color: #e2e8f0;
          margin: 0 0 20px;
          flex-grow: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .author-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 16px;
          font-weight: 600;
          color: white;
          margin-bottom: 2px;
        }

        .author-title {
          font-size: 12px;
          color: rgba(212, 175, 55, 0.7);
        }

        /* Navigation */
        .testimonials-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .nav-button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(212, 175, 55, 0.2);
          border-color: rgba(212, 175, 55, 0.3);
        }

        .testimonials-indicators {
          display: flex;
          gap: 8px;
        }

        .indicator {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 24px;
          height: 3px;
          position: relative;
        }

        .indicator span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(212, 175, 55, 0.2);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .indicator.active span {
          background: #d4af37;
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 32px;
          }

          .testimonial-card.secondary {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 50px 0;
          }

          .section-title {
            font-size: 28px;
          }

          .testimonials-track {
            flex-direction: column;
            gap: 0;
          }

          .testimonial-card.secondary {
            display: none;
          }

          .testimonial-card.primary {
            flex: 1;
            transform: scale(1);
          }

          .card-content {
            padding: 24px;
          }

          .testimonial-text {
            font-size: 14px;
          }

          .author-image {
            width: 40px;
            height: 40px;
          }

          .author-name {
            font-size: 15px;
          }

          .author-title {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 40px 0;
          }

          .section-title {
            font-size: 24px;
          }

          .section-badge {
            font-size: 10px;
            padding: 5px 10px;
          }

          .testimonial-text {
            font-size: 13px;
          }

          .nav-button {
            width: 32px;
            height: 32px;
          }

          .indicator {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientSay;
