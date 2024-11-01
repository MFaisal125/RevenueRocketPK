import React, { useState, useEffect } from "react";
import "./Details.css";
import "../../assets/css/media-query.css";
import Header from "../../Common/Header/Headers";
import Footer from "../../Common/Footer/Footer";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/image/software-engineer.jpeg";
import "react-toastify/dist/ReactToastify.css";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const Details = () => {
  const { id } = useParams();
  let [Data, setData] = useState([]);
  let [AllData, setAllData] = useState([]);
  let [username, setUserName] = useState("");
  let [Email, setEmail] = useState("");
  let [Comment, setComment] = useState("");
  let [CommentData, setCommentData] = useState([0]);

  let xhr = new XMLHttpRequest();
  let url = "https://api.lenexit.com/api/post/" + id;
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      for (var i = 0; i < response.length; i++) {
        var elements = response[i];
        // console.log(id + '' + elements['id'])
        if (id === elements["id"]) {
          setData(response);
          location.reload(true);
          console.log(response);
        } else {
          setData(response);
        }
      }
    }
  };
  xhr.send();

  function allBlogs() {
    let xhr = new XMLHttpRequest();
    let url = "https://api.lenexit.com/api/post/";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        setAllData(response);
      }
    };
    xhr.send();
  }
  useEffect(() => {
    allBlogs();
  }, []);
  // social sharing function here
  const pageUrl = location.href;
  const whatsappShare = async (title, text) => {
    window.open(`https://wa.me/?text=${pageUrl} ${text}`);
  };
  const ManualShare = async (title, text) => {
    navigator.share({
      title: title,
      text: text,
      url: pageUrl,
    });
  };
  const twitterShare = async (title, text) => {
    window.open(`https://twitter.com/intent/tweet?text=${pageUrl}. ${text}`);
  };
  const FaceBookShare = async (title, text) => {
    const encodedURL = encodeURIComponent(document.URL);
    const navUrl =
      "https://www.facebook.com/sharer/sharer.php?u=" + `${encodedURL}`;
    window.open(navUrl, "_blank");
  };
  function alert_message(message) {
    toast(message);
  }
  const CommentHandler = (id) => {
    var d = new Date();
    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getFullYear();
    var createat = day + "-" + month + "-" + year;
    var data = {
      author: "0",
      description: Comment,
      createAt: createat,
      rcomment: "",
      comment_post: id,
      status: "1",
    };
    if (username == "" || Comment == "") {
      alert("Please Enter Your Name & comment!");
    } else {
      fetch("https://api.lenexit.com/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result['message'])
          alert_message("Thanks For Your Comment");
          setUserName("");
          setEmail("");
          setComment("");
          getAllComments();
        });
    }
  };
  function getAllComments() {
    fetch("https://api.lenexit.com/api/comment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setCommentData(result);
      });
  }
  useEffect(() => {
    getAllComments();
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
  function extractWordsFromTitle1(title) {
    // Split the title into an array of words using space as the delimiter
    const words = title.split(' ');
    // Extract the first 2 to 4 words
    const firstWords = words.slice(0, Math.min(words.length - 1, 2)).join(' ');
    // Get the last word separately
    const lastWord = words[words.length - 1];
    // Concatenate the first words and the last word
    const extractedTitle = `${firstWords} ${lastWord}`;
    return extractedTitle;
  }
  return (
    <>
      <Header tags={location.href}/>
      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm col-lg-8">
              {Data.map((item) => (
                <div key={item.id} className="blog-details py-5">
                  <h3 className="blog_details_title">{item.title}</h3>
                  <div className="py-2">
                    <img
                      src={item.thumbnail}
                      style={{ width: "100%" }}
                      alt={item.title}
                      title={item.title}
                    />
                    <div className="blog-author">
                      <div className="d-flex">
                        <img
                          src={img}
                          className="img-fluid rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                          alt={item.title}
                          title={item.title}
                        />
                        <div className="blog_author_name pl-2">
                          <p className="p-0 m-0 blog_author_name">
                            Mustafa Khan
                          </p>
                        </div>
                      </div>
                      <div className="blog_share">
                        <span
                          onClick={() =>
                            whatsappShare(item.title, item.descrioption.replace(/<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm, '').slice(0, 150))
                          }
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/ios-glyphs/30/53CE55/whatsapp.png"
                            alt="whatsapp"
                          />
                        </span>
                        <span
                          onClick={() =>
                            FaceBookShare(item.title, item.descrioption.replace(/<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm, '').slice(0, 150))
                          }
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/color/48/facebook-new.png"
                            alt="facebook-new"
                          />
                        </span>
                        <span
                          onClick={() =>
                            twitterShare(item.title, item.descrioption.replace(/<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm, '').slice(0, 150))
                          }
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/color/48/twitter--v1.png"
                            alt="twitter"
                          />
                        </span>
                        <span
                          onClick={() =>
                            ManualShare(item.title, item.descrioption)
                          }
                        >
                          <img
                            width="30"
                            height="30"
                            src="https://img.icons8.com/color/48/share--v1.png"
                            alt="share"
                            title={item.title}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="py-3 blog_description">
                      {
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.descrioption,
                          }}
                        />
                      }
                    </p>
                  </div>

                  {/* <hr className="bg-dark rounded" /> */}
                  <div clssName="comments">
                    <div className="title">
                      <h3>Leave A Comments</h3>
                    </div>
                    <ToastContainer />
                    <div className="comment_form mt-5 pt-5">
                      <div className="form-group">
                        <label htmlFor="username" className="text-capitalize">
                          username<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                          name="username"
                          id="username"
                          aria-describedby="helpId"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="Email" className="text-capitalize">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          id="email"
                          aria-describedby="helpId"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="comments" className="text-capitalize">
                          comment<span className="text-danger">*</span>
                        </label>
                        <textarea
                          required
                          value={Comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="form-control"
                          name="comment"
                          id="comment"
                          rows="3"
                        ></textarea>
                      </div>
                      <button
                        id="comment_btn"
                        onClick={() => CommentHandler(item.id)}
                        className="btn btn-success text-uppercase px-2 m-0"
                        role="button"
                      >
                        send
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 col-sm col-lg-4">
              <div className="blog-sidebar mt-5 p-3">
                {Data.map((items) => (
                  <div className="title shadow-sm rounded p-3">
                    <h3
                      className="text-left text-uppercase"
                      style={{ fontSize: "20px" }}
                    >
                      recent post
                    </h3>
                    <div className="">
                      <img className="img-fluid" src={items.thumbnail} alt={items.title} title={items.title} />
                    </div>
                  </div>
                ))}
                {AllData.map((item) => (
                  <div className="card_block mt-1" key={item.id}>
                    <div className="news_card  shadow-sm py-3 px-2 d-flex">
                      <div className="">
                        <img
                          className="rounded"
                          style={{ width: "100px", height: "100%" }}
                          src={item.thumbnail}
                          alt={item.title}
                          title={item.title}
                        />
                      </div>
                      <div className="pl-3">
                        <p className="p-0 m-0 blog_details_right_side_card_date">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-2"
                          />
                          {new Date(
                            item.createAt.split("-")[2],
                            item.createAt.split("-")[1] - 1,
                            item.createAt.split("-")[0]
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p clssName="m-0 p-0">
                          <NavLink 
                            className="text-dark"
                            to={"/blog/" + item.id + '/' + Slugs(item.title)}
                          >
                            <b className="blog_details_right_side_card_title">{extractWordsFromTitle1(item.title)}</b>
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Details;
