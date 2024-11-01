import React from 'react'
import "./error.css"
import errorVideo from "../../assets/image/error-unscreen.gif"
import { NavLink } from 'react-router-dom'
const Error = () => {
    window.onmousemove = (e) => {
        let error_wrapper = document.getElementById('error_wrapper');
        console.log(e.pageX, e.pageY)
        error_wrapper.style.left = e.pageY / 25 + 'px';
        error_wrapper.style.top = e.pageX / 25 + 'px';
    }
    return (
        <section id='error_page'>
            <div className="container">
                <div className="error_wrapper" id='error_wrapper'>
                    <img title='error page lenexit' src={errorVideo} id='error_video' className='img-fluid' alt='error page ' />
                    <div>
                        <button>
                            <NavLink to={"/"}>Back Home</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error