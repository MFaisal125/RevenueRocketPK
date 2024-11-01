import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TeamSlider.css"
import { TeamData } from '../../services/static/TeamData';
const Responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
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
const TeamSlider = () => {

    return (
        <section id='team-slider'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="team-slider-card">
                            <Carousel responsive={Responsive}
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                ssr={true} // means to render carousel on server-side.
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
                                {
                                    TeamData.map((item) => (
                                        <div className='team-item' key={item.id}>
                                            <img title={item.designation} src={item.image} className='img-fluid' alt={item.designation} />
                                            <h5 className='text-capitalize text-dark text-center m-0 p-0 pt-3'>{item.name}</h5>
                                            <p className='text-capitalize text-dark text-center m-0 p-0 pb-3'>{item.designation}</p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="title">
                            <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>our teams</p>
                            <h3 className='text-capitalize py-2'> <span style={{ color: "green" }}>Lenexit</span>'s Dynamic Team Driving Digital Success</h3>
                        </div>
                        <p className='pt-3'>
                            Lenexit's team is a talented group of technology experts who excel in web and mobile app development, desktop applications, SEO, graphics design, and penetration testing. With their diverse skill set and innovative mindset, they deliver exceptional results and bring digital visions to life. Trust our team to drive your success in the digital landscape.
                        </p>
                        {/* <button className='btn m-0 p-2 text-capitalize btn-success'>our team</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSlider