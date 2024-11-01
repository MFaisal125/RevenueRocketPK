import React from 'react';
import "./Service.css";
import "../../assets/css/media-query.css";
import Header from '../../Common/Header/Headers';
import Banner from '../../Common/Banners/Banner';
import { serviceData } from '../../services/static/serviceData';
import ServiceImg from "../../assets/image/Services_Banner.jpeg"
import { NavLink } from 'react-router-dom';
import Footer from '../../Common/Footer/Footer';

const Service = () => {
    function Slugs(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9-]/g, '')
            .replace(/--+/g, '-')
    }
    return (
        <>
            <Header tags={location.href}/>
            <section id='services-page'>
                <div className="services_banner pb-5">
                    <Banner Img={ServiceImg} title="what our services ?" color="#fff" />
                </div>
                <div className="container">
                    <div className='wrapper'>
                        <div className="title py-2">
                            <h3 className="text-uppercase text-left font-weight-bold">our all service stack</h3>
                        </div>
                        <div className="service-box pt-4">
                            <div className="service-box">
                                {
                                    serviceData.map((item) => (
                                        <div className="service-card" key={item.service_id}>
                                            <div className='d-flex'>
                                                <img width="50" height="50" src={item.card_icons} alt={item.card_title} title={item.card_title} />
                                                <h4 className='pl-4 text-capitalize' style={{ fontSize: "18px", fontWeight: 'bold' }}>{item.card_title}</h4>
                                            </div>
                                            <p className='pt-3' style={{ fontSize: '14px' }}> <NavLink to={"/serivices/" + item.service_id + '/' + Slugs(item.card_title)} className="text-dark">{item.card_description}</NavLink></p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Service