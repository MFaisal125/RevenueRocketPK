/* eslint-disable no-unused-vars */
import React from "react";
import Header from '../../Common/Header/Headers'
import "./Home.css";
import "../../assets/css/media-query.css";
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Responsive from '../../components/Res/Responsive';
import TimeLine from '../../components/TimeLine/TimeLine';
import TeamSlider from '../../components/TeamSlider/TeamSlider';
import ClientSay from '../../components/ClientSay/ClientSay';
import Blogs from '../../components/Blogs/Blogs';
import Visitor from "../../components/Visitors/Visitor";
import Background from "../../components/ReactParticles/Background";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "../../Common/Footer/Footer";
export const Home = () => {

return (
    <div>
      <Header tags={location.href}/>
      <div className="banner">
        <div className=''>
          <Background />
          <div className="row">
            <div className="col-md-6 offset-1 col-sm">
              <div className="banner_left">
                <h1 className='text-uppercase text-left'>
                  <span>Your Digital Success Starts Here In world wide</span>
                  <span className="typeWriter">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Your success fuels our mission.")
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("Together, we achieve greatness.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Your goals are our priority.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Inspiring your triumph drives us.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("We believe in your potential.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Your success is our motivation.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Empowering you to reach new heights.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Your achievements inspire our dedication.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Unleash your potential with our support.")
                          .pauseFor(500)
                          .deleteAll()
                          .typeString("Your success is our unwavering commitment.")
                          .pauseFor(1000)
                          .start();
                      }}
                    />
                  </span></h1>
                <p>
                  We Specialize In Creating Customized Solutions Tailored To Your Specific Goals.
                  With Our Expert Team, You Can Expect Innovative Strategies And Cutting-Edge Tactics
                  Designed To Deliver The Results You Need To Succeed In Today's Digital Landscape.
                </p>
                <button className='btn text-uppercase text-center banner_left_btn'>
                  <NavLink style={{ textDecoration: 'none' }} className="text-dark" to={"/calender"}>send proposal</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <Visitor /> */}
      <About />
      <Services />
      <Responsive />
      <TimeLine />
      <TeamSlider />
      <ClientSay />
      <Blogs />
      <Footer />
    </div>
  )
}
