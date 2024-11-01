import React from 'react'
import "./Responsive.css"
import responsive_video from "../../assets/video/responsive-xperience.mp4"
import thumbnail from "../../assets/image/12084798_20943953.jpg";
import responsiveVideo_banner from "../../assets/video/responsive_video_banner.jpg";
const Responsive = () => {
    return (
        <section id='responsive'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm col-lg-6">
                        <div className='py-3'>
                            <div className="title">
                                <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>Our Design</p>
                                <h3 className='text-capitalize py-2'>Engaging, Adaptive, and User-Friendly Solutions by <span style={{ color: "green" }}>Lenexit</span></h3>
                            </div>
                            <p className='text-capitalize pt-3'>
                                Lenexit specializes in crafting responsive website designs that deliver a seamless and engaging user experience across multiple devices. Our expert team understands the importance of catering to the growing mobile user base. With our mobile-first approach, we design websites that automatically adapt to different screen sizes, ensuring optimal functionality and visual appeal. By eliminating the need for separate mobile versions, we save time and resources while providing a consistent brand experience. Our responsive designs are built with the latest technologies, focusing on speed and performance optimization. With Lenexit's responsive website design, you can captivate your audience, boost user engagement, and drive conversions effectively.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm col-lg-6">
                        <div className='py-3 res-video'>
                            <video title='Engaging, Adaptive, and User-Friendly Solutions' poster={responsiveVideo_banner} autoPlay muted loop security='true' className='img-fluid'>
                                <source src={responsive_video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responsive