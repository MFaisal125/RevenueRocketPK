import React from 'react'
import "./TimeLine.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const spanStyle = {
    padding: '20px',
    background: '#fff',
    color: '#000000'
}

const divStyle = {
    display: 'grid',
    height: '250px',
    width: '100%',
    margin: '10px 0',
}
const shadow = {
    boxShadow: "-2px -2px 5px #eee,2px 2px 5px #eee",
}
const slideImage = [
    {
        title: "step-1: Discovery and Requirement Gathering",
        caption: `We begin by thoroughly understanding your business goals, target audience, and specific requirements. Through detailed discussions and research, we gather valuable insights that lay the foundation for our work.`
    },
    {
        title: "step-2: Design and Prototyping",
        caption: `Our talented design team creates visually stunning and user-friendly mockups and prototypes based on the gathered requirements. We focus on creating a captivating visual experience while ensuring seamless navigation and functionality.`
    },
    {
        title: "step-3: Development and Testing",
        caption: `Once the designs are approved, our expert developers bring them to life using the latest technologies and coding standards. We follow an agile development approach, allowing for regular client feedback and incorporating necessary adjustments. Rigorous testing ensures that the final product meets the highest quality standards.`
    },
    {
        title: "step-4: Deployment and Launch",
        caption: `After thorough testing and client approval, we deploy the developed solution to the desired platforms, ensuring a smooth and error-free transition. We take care of all technical aspects to ensure a seamless launch, be it a website, mobile app, or desktop application.`
    },
    {
        title: "step-5: Ongoing Support and Maintenance",
        caption: `Our commitment doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital solution remains up-to-date, secure, and optimized for performance. Our team is always available to address any concerns and make necessary updates as your business evolves.`
    },

];
const TimeLine = () => {
    return (
        <section id='timeline'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm col-lg-6">
                        <div className="title">
                            <p className='title-badge text-white text-uppercase bg-success p-1 d-inline' style={{ fontSize: "12px" }}>5 Steps To Success</p>
                            <h3 className='text-capitalize py-2'>Efficient Workflow: 5 Steps to Success with  Comprehensive Development Process </h3>
                        </div>
                        <p>
                            Seamless Journey: Lenexit's 5-Step Workflow Delivers a Smooth and Efficient Development Process. From in-depth discovery and requirement gathering to captivating design and rigorous testing, our expert team ensures every aspect is meticulously executed. With deployment and launch handled seamlessly, we provide ongoing support and maintenance to keep your digital solution optimized. Our streamlined approach prioritizes efficiency and effectiveness, allowing us to deliver exceptional results. Trust Lenexit to guide you through this structured workflow, ensuring a successful and satisfying development experience from start to finish.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm col-lg-6">
                        <div className="slide-container mt-5">
                            <Slide>
                                {slideImage.map((slideImage, index) => (
                                    <div key={index} className='p-3' style={shadow}>
                                        <div style={divStyle}>
                                            <h2 className='text-capitalize text-dark' style={{ fontSize: '20px', paddingLeft: "20px" }}>{slideImage.title}</h2>
                                            <span style={spanStyle}>{slideImage.caption}</span>
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLine