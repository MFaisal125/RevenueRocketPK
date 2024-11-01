import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/image/graphics-designer.jpeg";
const Responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Blogs = () => {
  let [Data, setData] = useState([]);
  useEffect(() => {
    let xhr = new XMLHttpRequest();
    let url = "https://api.lenexit.com/api/post/";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        setData(response);
        console.log(response);
      }
    };
    xhr.send();
  }, []);
  function Slugs(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace(/--+/g, '-')
  }
  function extractWordsFromTitle(title) {
    // Split the title into an array of words using space as the delimiter
    const words = title.split(' ');

    // Extract the first 2 to 4 words
    const firstWords = words.slice(0, Math.min(words.length - 1, 7)).join(' ');

    // Get the last word separately
    const lastWord = words[words.length - 1];

    // Concatenate the first words and the last word
    const extractedTitle = `${firstWords} ${lastWord}`;

    return extractedTitle;
  }
  return (
    <section id="blogs">
      <div className="container">
        <div className="title">
          <p
            className="title-badge text-white text-uppercase bg-success p-1 d-inline"
            style={{ fontSize: "12px" }}
          >
            our latest blogs
          </p>
          <h3 className="text-capitalize py-2">
            <span style={{ color: "green" }}>Lenexit</span>'s Our latest blogs
          </h3>
        </div>
        <div className="blogs-wrapper">
          <div className="">
            <div className="">
              <Carousel
                responsive={Responsive}
                swipeable={true}
                draggable={true}
                showDots={false}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {Data.slice(0, 3).map((item) => (
                  <div className="blog-card shadow p-3 m-3" key={item.id}>
                    <div className="blog-thumbnail">
                      <img src={item.thumbnail} className="img-fluid " title={item.title} alt={item.title} />
                      <div
                        className="blog-author mt-3 d-flex"
                        style={{ justifyContent: "start" }}
                      >
                        <img
                          src={img}
                          className="img-fluid rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                          title={item.title}
                          alt={item.title}
                        />
                        <div className="">
                          <p className="pl-2 blog_author_name">Mustafa Khan</p>
                        </div>
                      </div>
                      <h3 style={{ fontSize: "18px", marginTop: "15px" }}>
                        <NavLink
                          className="text-dark text-dark"
                          to={"blog/" + item.id + '/' + Slugs(item.title)}
                        >
                          {extractWordsFromTitle(item.title)}
                        </NavLink>
                      </h3>
                    </div>
                    <div className="content">
                      <p>
                        {
                          item.descrioption.replace(/<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm, '').slice(0, 150)
                        }
                        {/* <div
                          dangerouslySetInnerHTML={{
                            __html: item.descrioption.slice(50, 150),
                          }}
                        /> */}
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
