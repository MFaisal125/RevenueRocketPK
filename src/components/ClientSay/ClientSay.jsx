import React from 'react'
import "./ClientSay.css";
import "../../assets/css/media-query.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStarHalf, faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { clientSayData } from '../../services/static/clientSayData';
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

const ClientSay = () => {

    return (
        <section id='client-say'>
            <div className="container">
                <div className="title">
                    <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>what our client say</p>
                    <h3 className='text-capitalize py-2'><span style={{ color: "green" }}>Lenexit</span>'s Service Praised for Exceptional Results </h3>
                </div>

                <div className="">
                    <div className="">
                        <div className="client_card">
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
                                    clientSayData.map((item) => (
                                        <div className='client_item shadow-sm m-2 p-3 text-center' key={item.id}>
                                            <div className='pl-2 text-left'>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className='text-left client_wrapper pl-2'>
                                                <div className='d-flex'>
                                                    <img src={item.img} className='rounded-circle shadow-sm border client_image' style={{ width: "30px", height: "30px" }} title={item.description.slice(0,20)} alt={item.description.slice(0,20)} />
                                                    <h5 className='text-capitalize text-left client_name' style={{ fontSize: '16px' }}>{item.name}</h5>
                                                </div>
                                                <span className="client_rating_box">
                                                    {
                                                        item.rating == 1.5 ?
                                                            <>
                                                                <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                <FontAwesomeIcon icon={faStarHalfAlt} color='#ff9c12' />
                                                            </>
                                                            : item.rating == 2.5 ?
                                                                <>
                                                                    <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                    <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                    <FontAwesomeIcon icon={faStarHalfAlt} color='#ff9c12' />
                                                                </>
                                                                : item.rating == 3.5 ?
                                                                    <>
                                                                        <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                        <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                        <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                        <FontAwesomeIcon icon={faStarHalfAlt} color='#ff9c12' />
                                                                    </>
                                                                    : item.rating == 4.5 ?
                                                                        <>
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStarHalfAlt} color='#ff9c12' />
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                            <FontAwesomeIcon icon={faStar} color='#ff9c12' />
                                                                        </>
                                                    }

                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }

                                {/* <div className='client_item shadow-sm m-2 p-3 text-center'>
                                    <div className='pl-2 text-left'>
                                        <p>
                                            Hi, I am habashi, Now I am telling about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
                                        </p>
                                    </div>
                                    <div className='text-left d-flex pl-2'>
                                        <img src={client2} className='rounded-circle shadow-sm border' style={{ userSelect: 'none', width: "30px", height: "30px" }} alt="" />
                                        <h5 className='text-capitalize text-left m-0 p-0 pt-2 pl-3' style={{ fontSize: '16px' }}>Mr: habashi</h5>
                                        <span className="mt-1 pl-3">
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/222222/star--v1.png" alt="star--v1" />
                                        </span>
                                    </div>
                                </div>
                                <div className='client_item shadow-sm m-2 p-3 text-center'>
                                    <div className='pl-2 text-left'>
                                        <p>
                                            Hi, I am habashi, Now I am telling about Lenexit's impeccable service, attention to detail, and ability to turn their vision into reality. They consistently deliver top-notch solutions that drive our clients' success in the digital realm.
                                        </p>
                                    </div>
                                    <div className='client_rating text-left d-flex pl-2'>
                                        <img src={client3} className='rounded-circle shadow-sm border' style={{ width: "30px", height: "30px" }} alt="" />
                                        <h5 className='text-capitalize text-left m-0 p-0 pt-2 pl-3' style={{ fontSize: '16px' }}>Mr: belal bin</h5>
                                        <span className="mt-1 pl-3 client_rating">
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/1BD000/star--v1.png" alt="star--v1" />
                                            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/222222/star--v1.png" alt="star--v1" />
                                        </span>
                                    </div>
                                </div> */}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSay