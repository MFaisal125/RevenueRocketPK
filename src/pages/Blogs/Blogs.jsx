import React, { useEffect, useState } from 'react'
import "./Blogs.css"
import "../../assets/css/media-query.css";
import img from "../../assets/image/software-developer.jpg";
import blog_banner from "../../assets/image/blog_banner.jpg";
import { NavLink } from 'react-router-dom';
import Header from '../../Common/Header/Headers';
import Footer from '../../Common/Footer/Footer';
import Banner from '../../Common/Banners/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    let [Data, setData] = useState([])

    let xhr = new XMLHttpRequest();
    let url = "https://api.lenexit.com/api/post/";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText)
            setData(response);
        }
    }
    xhr.send()
    function Slugs(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-]/g, '')
            .replace(/--+/g, '-')
    }
    function extractWordsFromTitle1(title) {
        // Split the title into an array of words using space as the delimiter
        const words = title.split(' ');
        // Extract the first 2 to 4 words
        const firstWords = words.slice(0, Math.min(words.length - 1, 7)).join(' ');
        // Get the last word separately
        const lastWord = words[words.length - 1];
        // Concatenate the first words and the last word
        const extractedTitle = `${firstWords} ${lastWord}`;
        return extractedTitle;
    }
    function extractWordsFromTitle2(title) {
        // Split the title into an array of words using space as the delimiter
        const words = title.split(' ');
        // Extract the first 2 to 4 words
        const firstWords = words.slice(0, Math.min(words.length - 1, 2)).join(' ');
        // Get the last word separately
        const lastWord = words[words.length - 1];
        // Concatenate the first words and the last word
        const extractedTitle = `${firstWords} ${lastWord}`;
        return extractedTitle;
    }

    return (
        <>
           <Header tags={location.href}/>
            <Banner Img={blog_banner} title="our latest blogs" color="#fff" />
            <section id='blogs-page'>
                <div className="container">
                    <div className="title mt-3">
                        <h3 className='text-uppercase text-left font-weight-bold'>Blogs</h3>
                    </div>
                    <div className='blogs-container'>
                        <div className="row">
                            <div className="col-md-8 col-sm col-lg-8 blog_item">
                                <div className="row">
                                    {
                                        Data.map((item) => (
                                            <div className="col-md-6 col-sm-8 blog_item" key={item.id}>
                                                <div className="blog-card my-3 shadow p-3">
                                                    <img title={item.title} src={item.thumbnail} style={{ width: '100%', height: '200px' }} alt={item.title} />
                                                    <div className="author d-flex py-3">
                                                        <img title={item.title} src={img} className='img-fluid rounded-circle border border-success' style={{ width: "30px", height: "30px" }} alt={item.title} />
                                                        <div className='d-flex'>
                                                            <div className='blog_author_name pl-3'>
                                                                <p className='p-0 m-0 blog_author_name'>Mustafa Khan</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='blog-content py-2'>
                                                        <p>
                                                            <NavLink to={"/blog/" + item.id + '/' + Slugs(item.title)} className="text-dark" style={{ fontSize: '16px', fontWeight: "bold", textTransform: "capitalize", }}>{extractWordsFromTitle1(item.title)}</NavLink>
                                                        </p>
                                                        <p>
                                                            {item.descrioption.replace(/<\/?(?!\/?(?:${allowedTags.join('|')}))[^>]*\/?>/gm, '').slice(0, 150)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-4 col-sm col-lg-4 card">
                                <div className='blog-right-sidebar'>
                                    <hr />
                                    <div className='recent-news'>
                                        <div className="title">
                                            <h5 className='text-uppercase text-left'>recent blogs</h5>
                                        </div>
                                        {
                                            Data.map((item) => (
                                                <div className="recent-blog-card p-3 my-2 shadow-sm border border" key={item.id}>
                                                    <div className="d-flex">
                                                        <img title={item.title} src={item.thumbnail} className='img-fluid w-25 rounded' style={{height:'auto'}} alt={item.title} />
                                                        <div className='pl-3'>
                                                            <span><FontAwesomeIcon icon={faCalendarAlt} /> {item.createAt}</span>
                                                            <p className='p-0 m-0'><NavLink to={"/blog/" + item.id + '/' + Slugs(item.title)} className="text-dark">{extractWordsFromTitle2(item.title)}</NavLink></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blogs