import React, { useEffect, useState } from 'react'
import "./Details.css";
import "../../assets/css/media-query.css"
import Headers from '../../Common/Header/Headers';
import Banner from '../../Common/Banners/Banner';
import { serviceData } from '../../services/static/serviceData';
import Footer from '../../Common/Footer/Footer';
import {useParams} from "react-router-dom"
const Details = () => {
  var [Service_data, setData] = useState([0])
  const { id } = useParams();
  const filteredService = serviceData.find(service => service.service_id === id);
  const { card_icons, card_title, card_description, stps_title, service_title, action_title, action_desc, service_sub_title, service__img, service_details, stps_sub_title, steps } = filteredService;

  useEffect(() => {
    const service = serviceData.find((item) => item.service_id === id);
    setData(service)
  }, [])
  return (
    <>
      <Headers tags={location.href}/>
      <Banner Img={service__img} title={Service_data.service_title} />
      <section id='service_details_page'>
        <div className="container">
          <div className="s_details_wrapper">
            <div className="actions_sections">
              <div className="action_left">
                <img src={service__img} className='img-fluid rounded' alt="" />
              </div>
              <div className="action_right">
                <h3 className='actions_title'>{action_title}</h3>
                <p className='actions_desc'>{action_desc}</p>
              </div>
            </div>
            <div className='technology_details'>
              <p>{service_details}</p>
            </div>
            <div className='work_stratigy'>
              <div className="title">
                <h3 className='text-center'>{stps_title}</h3>
                <p className='p-0 m-0 text-center'>{stps_sub_title}</p>
              </div>
              <div className="step_wrapper">
                <div className="step_item_box">
                  {steps.map((step, index) => (
                    <div className="steps_item" key={index}>
                      <img width="45" height="45" src={step.steps_card_icons} alt={step.stps_card_title} title={step.stps_card_title} />
                      <h4 className='text-center'>{step.stps_card_title}</h4>
                      <p className='p-0 m-0'>{step.stps_desc || step.stps_card_desc}</p>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Details