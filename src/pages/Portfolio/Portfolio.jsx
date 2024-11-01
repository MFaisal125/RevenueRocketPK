import React, { useEffect, useState } from 'react';
import "./Portfolio.css";
import "../../assets/css/media-query.css";
import img from "../../assets/image/meet.jpeg";
import { NavLink } from 'react-router-dom';
import { portfolioData } from '../../services/static/portfolioData';
import Banner from '../../Common/Banners/Banner';
import Header from '../../Common/Header/Headers';
import Footer from '../../Common/Footer/Footer';
import githubIcon from "../../assets/image/social_image/github.png";
import domainIcon from "../../assets/image/social_image/domain.png";
export const Portfolio = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(portfolioData)
        setCollection([... new Set(portfolioData.map((item) => item.category))])
    }, [])

    const GellaryFilter = (itemData) => {
        const FiterData = portfolioData.filter((item) => item.category == itemData);
        setData(FiterData)
    }
    return (
        <>
            <Header tags={location.href}/>
            <Banner Img={img} title="about Our Work" color="#fff" />
            <section id='portfolio-page'>
                <div className="container">
                    <div className="title">
                        <h2 className='text-uppercase text-center'>our project</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="filter-container">
                        <ul className="categories">
                            <li className='filter_item active' onClick={() => setData(portfolioData)}>all</li>
                            {
                                collection.map((item) => <li className='filter_item active' onClick={() => { GellaryFilter(item) }}>{item}</li>)
                            }
                        </ul>
                    </div>
                    <div className="card-container">
                        <div className="portfolio_item_box">
                            {
                                data.map((item) => {
                                    return (
                                        <div className="item p-3">
                                            <div className='social_link pb-3 px-2' style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span><NavLink to={item.github_url}><img width="30" height="30" src={githubIcon} alt="github" /></NavLink></span>
                                                <span><NavLink to={item.live_url}><img width="30" height="30" src={domainIcon} alt="domain" /></NavLink></span>
                                            </div>
                                            <img title={item.title}  className='portfolio_thumb' src={item.thumbnail} style={{ width: '100%', height: "200px" }} alt={item.title} />
                                            <div className="details">
                                                <div className="description">
                                                    <p style={{ fontSize: '16px' }} className='m-0 p-0 p-1 font-weight-bold pt-3 text-left text-capitalize'>{item.title.slice(0, 50)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
