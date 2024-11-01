import React from 'react'
import "./Bnn.css";
import "../../assets/css/media-query.css"
const Banner = (props) => {
    return (
        <div id='props-banner' style={{
            backgroundImage: `linear-gradient(to top, rgb(0 23 245 / 45%), #bbb), url(${props.Img})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}>
            {/* style={{ width: "100%", height: "70vh" }} */}
            <div className="page-header d-flex flex-column align-items-center justify-content-center pt-0  mb-5" >
                {/* <img src={props.Img} style={{ height: "75vh", width: "100%" }} className='img-fluid' alt="" /> */}
                <h3 style={{ color: props.color }}>{props.title}</h3>
                <p>{props.SubTitle}</p>
            </div>
        </div>
    )
}

export default Banner