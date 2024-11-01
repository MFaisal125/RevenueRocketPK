import React from 'react'
import "./Services.css"
import { NavLink } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import codeIcon from "../../assets/image/code.png";
import monitorIcon from "../../assets/image/monitor.png";
import mobileappIcon from "../../assets/image/mobile-app.png";
import windowbugIcon from "../../assets/image/window.png";
import designIcon from "../../assets/image/design.png";
import seoIcon from "../../assets/image/seo.png";
import pluginIcon from "../../assets/image/plugin.png";
import wordpressIcon from "../../assets/image/wordpress.png";
import cmsIcon from "../../assets/image/cms.png";
const Responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <div className="title">
                    <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>our high services</p>
                    <h3 className='text-capitalize py-2'>our Premium Services <span style={{ color: "green" }}>Lenexit</span></h3>
                </div>
                <div className="service-box pt-4">
                    <div className="row">
                        <div className="col-md-12 mb-2">
                            <Carousel responsive={Responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlaySpeed={100}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img title='full-stack web development' width="50" height="50" src={codeIcon} alt=" full-stack web development services" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>full-stack web development</h4>
                                    </div>
                                    <p className='pt-3'>
                                        Lenexit offers full-stack web development services, delivering end-to-end solutions that encompass front-end and back-end expertise for seamless digital experiences.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img title='Desktop application development' width="50" height="50" src={monitorIcon} alt="desktop app development" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>Desktop application development</h4>
                                    </div>
                                    <p className='pt-3'>
                                        Lenexit specializes in desktop app development, delivering comprehensive solutions that encompass both front-end and back-end expertise for optimal user experiences.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img title='android & ios mobile app development' width="50" height="50" src={mobileappIcon} alt="Android and iOS mobile app development" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>android & ios mobile app development</h4>
                                    </div>
                                    <p className='pt-3'>
                                        Lenexit excels in Android and iOS mobile app development, delivering intuitive and engaging applications that captivate users and drive business growth.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img title='website penetration testing' width="50" height="50" src={windowbugIcon} alt="penetration testing services" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>website penetration testing</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit offers professional penetration testing services to identify and address vulnerabilities, ensuring the security and resilience of your digital assets.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img width="50" title='graphics design' height="50" src={designIcon} alt="graphics design services" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>graphics design</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit provides captivating graphics design services that enhance brand identity and create visually appealing designs for a lasting impression.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img width="64" height="64" title='search engine optimization (SEO)' src={seoIcon} alt="external-seo-design-amp-thinking-process-justicon-lineal-justicon" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>search engine optimization (SEO)</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit offers effective SEO services to boost online visibility, increase organic traffic, and improve search engine rankings for long-term success.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img width="50" height="50" src={pluginIcon} title='custom plugin development' alt="custom plugin development" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>custom plugin development</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit specializes in custom plugin development, creating tailored solutions that seamlessly integrate with your existing systems and enhance the functionality of your website or application.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img width="50" height="50" src={wordpressIcon} title='custom theme development' alt="custom WordPress theme development" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>custom theme development</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit excels in custom WordPress theme development, crafting unique and visually captivating designs that align with your brand and provide a seamless user experience.
                                    </p>
                                </div>
                                <div className="service-card shadow">
                                    <div className='d-flex'>
                                        <img width="50" height="50" src={cmsIcon} title='ecommerce cms website development' alt="ecommerce website development" />
                                        <h4 className='pl-4 text-capitalize service_card_title'>ecommerce cms website development</h4>
                                    </div>
                                    <p className='pt-3' style={{ fontSize: '14px' }}>
                                        Lenexit specializes in ecommerce website development, creating robust and user-friendly online stores that drive sales and provide a seamless shopping experience for customers.
                                    </p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='mt-5 ml-3'>
                        <button class="btn text-capitalize" style={{ background: 'blue', margin: '0' }} role="button">
                            <NavLink className='text-white' style={{ textDecoration: 'none' }} to={"/service"} >learn more</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services