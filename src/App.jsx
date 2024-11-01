import React, { useEffect } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "../src/pages/Home/Home";
import Details from "../src/pages/Blogs_Details/Details";
import About from "../src/pages/About/About";
import Service from "../src/pages/Services/Service";
import Calenders from "../src/pages/Calenders/Calenders";
import Blogs from "../src/pages/Blogs/Blogs";
import { Portfolio } from "../src/pages/Portfolio/Portfolio";
import Contact from "../src/pages/Contacts/Contact";
import ServicDetails from "./pages/Service_Details/Details";
import Error from "./pages/Error/Error";

function App() {
  var count = 0;
  function user_visitor() {
    count++;
    fetch("https://api.lenexit.com/api/visitor", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ visitor: count })
    }).then((response) => response.json()).then((result) => {
      // console.log(result)
    })
  }
  var visitor_count = 0;
  useEffect(() => {
    const showCookieAlert = () => {
      visitor_count++;
      user_visitor()
    };
    showCookieAlert();
  }, [])
  return (
    <>
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/calender" element={<Calenders />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id/:title" element={<Details />} />
        <Route path="/serivices/:id/:title" element={<ServicDetails />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </>
  )
}

export default App
