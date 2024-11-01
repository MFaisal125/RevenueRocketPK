import React from 'react'
import "./About.css"
import "../../assets/css/media-query.css";
import Footer from '../../Common/Footer/Footer'
import Header from '../../Common/Header/Headers'
import Banners from "../../Common/Banners/Banner";
import company_logo from "../../assets/vai/company_logo.png"
import ourVission from "../../assets/image/our-vision-01.png"
import ourMission from "../../assets/image/our-mission-01.png"
import about_image from "../../assets/image/about_image.png"
import touhid from "../../assets/image/touhid.jpg"

import monabbirhasan from "../../assets/image/monabbirhasan.jpg"
const About = () => {
    return (
        <>
            <Header tags={location.href}/>
            <section id='about-page'>
                <Banners Img={about_image} title={"who we are  ?"} />
                <div className="container">
                    <div className="about_wrapper">
                        <div className="title mt-5">
                            {/* <h3 className='text-uppercase font-weight-bold text-center'>about our company</h3> */}
                        </div>
                        <div id='wrape_section'>
                            <div className='founder_box'>
                                <div className="founder_info">
                                    <div className="founder_one">
                                        <img title='founder and CEO' src={touhid} className='img-fluid' alt="touhidul islam" />
                                        <h3 className='founder_name'>SM Touhidul Islam</h3>
                                        <h4 className='designation'>founder and CEO</h4>
                                    </div>
                                    <div className="my-sm-3 middle_image">
                                        <img title='Co-founder and CTO' src={company_logo} className='img-fluid' alt="Monabbir Hasan" />
                                        <h3 hidden className='founder_name'>MD. Monabbir Hasan</h3>
                                        <h4 hidden className='designation'>Co-founder and CTO</h4>
                                    </div>
                                    <div className="founder_tow">
                                        <img title='Co-founder and CTO' src={monabbirhasan} className='img-fluid' alt="Monabbir Hasan" />
                                        <h3 className='founder_name'>MD Monabbir Hasan</h3>
                                        <h4 className='designation'>Co-founder and CTO</h4>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='about_article'>
                                <div className='aboutfounder'>
                                    <p>
                                        The journey of our company began in 2019 with the vision and determination of our founders, <b>SM Touhidul Islam</b> and <b>MD. Monabbir Hasan</b>. They embarked on an entrepreneurial adventure, driven by their passion for innovation and their desire to make a meaningful impact in the industry.
                                        With a shared vision, Touhidul and Monabbir started laying the foundation of the company, carefully crafting a business plan and identifying the market opportunities. They conducted extensive research, analyzed industry trends, and outlined a strategic roadmap to guide the company's growth and success.
                                        As they navigated the challenges and uncertainties of starting a new venture, Touhidul and Monabbir demonstrated resilience, perseverance, and a relentless pursuit of excellence. They assembled a talented team of professionals, who shared their passion and commitment to delivering exceptional services.
                                        Through strategic partnerships, continuous learning, and a customer-centric approach, the company began to establish its presence in the market. Touhidul and Monabbir leveraged their expertise and industry insights to provide innovative solutions that addressed the unique needs of their clients.
                                    </p>
                                    <p>
                                        The early days were marked by hard work, dedication, and an unwavering focus on building a strong foundation for the company's success. Touhidul and Monabbir embraced every opportunity for growth, constantly pushing the boundaries of their capabilities and exploring new avenues for expansion.
                                        Over time, the company gained recognition for its high-quality services, customer satisfaction, and its ability to deliver results. Touhidul and Monabbir fostered a culture of collaboration, innovation, and continuous improvement, ensuring that the company remained at the forefront of industry advancements.
                                        Today, the company stands as a testament to the vision, hard work, and determination of its founders. Touhidul and Monabbir's journey from the inception of the company to its current success exemplifies the entrepreneurial spirit and serves as an inspiration for aspiring entrepreneurs.
                                        As the company continues to evolve and grow, Touhidul and Monabbir remain dedicated to their initial vision, driving the company forward with a focus on excellence, innovation, and delivering exceptional value to their clients.
                                    </p>
                                    <p>
                                        The journey of our company is a testament to the power of passion, perseverance, and the unwavering belief in the transformative potential of a dream. We are proud of our accomplishments thus far and look forward to shaping a brighter future for our company, our team, and the clients we serve.
                                    </p>
                                </div>
                                <div className='misionVision'>
                                    <div className='visionmision_image_wraper'>
                                        <p>
                                            At our company, our mission is to empower businesses with innovative and transformative technology solutions that drive growth, enhance efficiency, and create lasting value. We are committed to being a trusted partner, delivering exceptional services and leveraging our expertise to help our clients achieve their business objectives and succeed in the digital era. With a customer-centric approach, we strive to understand our clients' unique needs and challenges, providing tailored solutions that meet and exceed their expectations. Through continuous learning, collaboration, and a passion for innovation, we aim to make a positive impact on the businesses we serve, enabling them to thrive in a competitive landscape.
                                        </p>
                                        <img src={ourMission} title='our mission is to empower businesses' style={{ background: "white", filter: 'hue-rotate(173deg)' }} className='img-fluid' alt="our mission" />
                                    </div>
                                    <div className='visionmision_image_wraper'>
                                        <img title='Our vision is to be a leading provider' src={ourVission} style={{ background: "white", filter: 'hue-rotate(173deg)' }} className='img-fluid' alt="Our vision" />
                                        <p>
                                            Our vision is to be a leading provider of cutting-edge technology solutions, recognized for our commitment to excellence, customer-centric approach, and impactful results. We aspire to be at the forefront of industry advancements, driving innovation and shaping the future of technology. By staying ahead of emerging trends, embracing new technologies, and fostering a culture of continuous improvement, we aim to empower businesses globally, enabling them to leverage technology as a strategic advantage. Our vision is to create long-term partnerships with our clients, helping them navigate the digital transformation journey and achieve sustainable growth. We envision a future where businesses harness the power of technology to drive innovation, improve efficiency, and create meaningful value for their customers.
                                        </p>
                                    </div>
                                </div>
                                <div className='about_compnay_info'>
                                    <p>
                                        Our company, founded by Touhidul Islam and Monabbir Hasan, is a dynamic and innovative technology solutions provider. With a passion for excellence and a customer-centric approach, we strive to deliver exceptional services that drive business growth and success. Our team of highly skilled professionals brings a wealth of expertise in various domains, allowing us to offer a comprehensive range of services, including web and mobile app development, SEO, UI/UX design, penetration testing, and more.
                                        We are dedicated to understanding our clients' unique needs and challenges, tailoring our solutions to meet their specific requirements. By staying abreast of the latest industry trends and leveraging cutting-edge technologies, we ensure that our clients are equipped with the most effective and forward-thinking solutions.
                                        At our company, we pride ourselves on our commitment to quality, timely delivery, and utmost professionalism. We believe in fostering long-term partnerships with our clients, working closely with them to build lasting relationships based on trust and mutual success. By combining our technical expertise with a deep understanding of business dynamics, we provide strategic guidance and solutions that propel our clients' businesses forward.
                                    </p>
                                    <p>
                                        What sets us apart is our relentless pursuit of innovation and our unwavering dedication to client satisfaction. We continually push the boundaries, challenging ourselves to find new and creative ways to address complex business problems. Our passion for excellence drives us to go above and beyond, delivering solutions that not only meet expectations but exceed them.
                                        As a company, we are driven by a strong set of values, including integrity, transparency, and continuous learning. We value open communication, collaboration, and a culture of teamwork, which enables us to foster an environment of creativity and innovation.
                                        Our success is measured by the success of our clients. We take great pride in seeing our clients thrive and achieve their goals with the solutions we provide. It is our mission to be a trusted partner and a catalyst for growth, helping businesses leverage technology to unlock their full potential.
                                        In an ever-evolving digital landscape, our company stands as a reliable and forward-thinking technology partner. We invite businesses to join us on this transformative journey, where together, we can achieve remarkable results and create a future defined by innovation and success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="about-sec-2">
                        <div className="title mt-5">
                            <h3 className='text-uppercase font-weight-bold text-center'>about our company</h3>
                        </div>
                        <div id='wrape_section'>
                        <div className='circle circle2'>
                                <video src={aboutVideo} autoPlay muted loop></video>
                            </div>
                            <p className='text-capitalize text-left'>
                                Welcome to Lenexit, a leading technology company at the forefront of digital innovation. With a strong focus on providing exceptional solutions, we specialize in web and mobile app development, desktop application development, SEO, graphics design, penetration testing, and more.
                            </p>
                            <p className='text-capitalize text-left'>
                                At Lenexit, we believe in the power of technology to transform businesses and drive growth. Our mission is to empower our clients with cutting-edge digital solutions that enhance their online presence and streamline their operations. With a team of highly skilled professionals, we are committed to delivering excellence in every project we undertake.
                            </p>
                            <p className='text-capitalize text-left'>
                                Our web and mobile app development services are tailored to meet the unique needs of our clients. We create intuitive and visually appealing designs, combined with robust functionality, to provide seamless user experiences across devices. Whether it's a responsive website or a feature-rich mobile app, we leverage the latest technologies to ensure our clients stay ahead in the digital landscape.
                            </p>
                            <p className='text-capitalize text-left'>
                                In the realm of desktop application development, we design and build powerful software solutions that optimize business processes. Our expertise lies in creating custom desktop applications that are scalable, user-friendly, and aligned with our clients' specific requirements. We employ agile methodologies to ensure efficient development and timely delivery.
                            </p>
                            <p className='text-capitalize text-left'>
                                Lenexit also excels in SEO services, helping businesses improve their online visibility and reach their target audience. Our strategies are designed to boost search engine rankings, increase organic traffic, and drive conversions. With thorough keyword research, content optimization, and performance tracking, we help our clients achieve long-term success in the competitive digital realm.
                            </p>
                            <p className='text-capitalize text-left'>
                                Our talented graphics design team creates visually stunning designs that effectively communicate our clients' brand identity. From logos and branding materials to UI/UX design, we ensure every visual element resonates with the target audience, leaving a lasting impact.
                            </p>
                            <p className='text-capitalize text-left'>
                                At Lenexit, we understand the critical importance of security in today's digital landscape. Our penetration testing services identify vulnerabilities in systems and networks, allowing us to fortify digital assets against potential cyber threats. We prioritize the protection of our clients' sensitive data and ensure their systems are robust and secure.
                            </p>
                            <p className='text-capitalize text-left'>
                                What sets us apart is our client-centric approach and commitment to delivering exceptional results. We value collaboration and open communication, working closely with our clients throughout the project lifecycle to ensure their needs are met and expectations are exceeded. Our team's technical expertise, creativity, and dedication to innovation drive the success of our projects.
                            </p>
                            <p className='text-capitalize text-left'>
                                We invite you to explore the possibilities with Lenexit and discover how our comprehensive range of services can transform your business. Partner with us to harness the power of technology and achieve your digital goals.
                            </p>
                            
                        </div>

                    </div> */}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About