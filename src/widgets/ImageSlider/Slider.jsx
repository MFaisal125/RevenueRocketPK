import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slider.css"
const fadeImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Boost Your Online Presence with Lenexit: Expert SEO Services for Enhanced Visibility and Growth'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: "Unlock Digital Success with Lenexit: SEO Solutions to Skyrocket Your Website's Ranking"
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Dominate Search Engines with Lenexit: Effective SEO Strategies Tailored to Your Business Needs'
    },
];
var captionStyle={
    position:'relative',
    top:"-20vh",
    left:"30px",
    zIndex:'1',
    color:'#fff'
}
const Slider = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <img style={{ width: '100%' }} src={fadeImage.url} />
                        <h2 style={captionStyle}>{fadeImage.caption}</h2>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slider