import React from 'react';
import welcomeVideo from "../../assets/video/welcome-plants.mp4";
import aboutusVideo from "../../assets/video/about-us.mp4";
import welcomeVideo_Banner from "../../assets/video/welcome_video_banner.jpg";
import teamVideo_banner from "../../assets/video/team_video_banner.jpg";
import "./About.css"
import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm col-lg-4">
                        <video poster={welcomeVideo_Banner} autoPlay muted loop src={welcomeVideo} className="img-fluid" title='the power of technology lenexit.com'></video>
                        <video poster={teamVideo_banner} autoPlay muted loop src={aboutusVideo} className="img-fluid" title='the power of technology lenexit.com'></video>
                    </div>
                    <div className="col-md-8 col-sm col-lg-8">
                        <div className="title">
                            <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>who we are</p>
                            <h3 className='text-capitalize py-2' style={{ fontSize:"3rem",fontWeight:"bold" }}>welcome to the <span  style={{color:'green'}}>Lenexit</span></h3>
                        </div>
                        <p style={{fontSize:"14px",padding:'5px'}}>
                            Lenexit is a leading technology company that specializes in web and mobile app development, desktop application development, SEO, graphics design, penetration testing, and more. With a focus on innovation and client satisfaction, we provide tailored solutions to businesses of all sizes.
                            Our web and mobile app development services combine creativity and functionality to deliver user-friendly experiences across platforms. We excel in building responsive websites and feature-rich mobile apps that engage users and drive business growth.
                            In the realm of desktop application development, we create robust software solutions that streamline processes and improve productivity. Our team of skilled developers uses cutting-edge technologies to deliver customized applications that meet specific business requirements.
                        </p>
                        <p style={{fontSize:"14px",padding:'5px'}}>
                            Lenexit also offers SEO services to boost online visibility and improve search engine rankings. We employ effective strategies, including keyword research, content optimization, and performance tracking, to drive organic traffic and increase brand visibility.
                            With our graphics design expertise, we create visually appealing designs that enhance brand identity. From logos and branding materials to UI/UX design, we craft compelling visuals that leave a lasting impression on customers.
                            Additionally, our penetration testing services ensure the security of systems and networks. We identify vulnerabilities and provide recommendations to fortify digital assets against potential cyber threats.
                            Lenexit is dedicated to delivering high-quality solutions that empower businesses to thrive in the digital landscape. With our diverse range of services, we are your trusted partner for all your technology needs.
                        </p>
                        <button class="btn text-capitalize about_btn" role="button"><NavLink className='text-white' to={"/about"} >read more</NavLink></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About