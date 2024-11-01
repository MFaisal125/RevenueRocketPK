import React, { useState } from 'react';
import "./Calenders.css"
import "../../assets/css/media-query.css";
import supportImg from "../../assets/image/12084798_20943953.jpg"
import 'react-calendar/dist/Calendar.css';
import Header from "../../Common/Header/Headers"
import Banner from '../../Common/Banners/Banner';
import schedule from "../../assets/video/schedule.mp4"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Common/Footer/Footer';
import emailjs from '@emailjs/browser';
import scheduleVideo_banner from "../../assets/video/scheduling_video_banner.jpg"
const Calenders = () => {
    var [showModal, setShow] = useState(false);
    var [start_date, setStartDate] = useState('');
    var [username, setUsername] = useState('')
    var [email, setEmail] = useState('')
    var [service_type, setServiceType] = useState('')
    var [description, setDescription] = useState('')
    var [provider, setProvider] = useState('')
    function alert_message(message) {
        toast(message);
    }

    const SubmitHandler = () => {
        document.getElementById("schedule_submit").style.display = 'none'
        setTimeout(() => {
            document.getElementById("schedule_submit").style.display = 'block'
        }, 2000);

        // Get references to input and select elements
        const input1 = document.getElementById('username');
        const input2 = document.getElementById('email');
        const input3 = document.getElementById('startDate');
        const selectBox = document.getElementById('serviceType');

        // Validate each input/select
        const isInput1Valid = input1.value.trim() !== '';
        const isInput2Valid = input2.value.trim() !== '';
        const isInput3Valid = input3.value.trim() !== '';
        const isSelectBoxValid = selectBox.value !== '';

        // Apply corresponding styling based on validation result
        input1.classList.toggle('valid', isInput1Valid);
        input1.classList.toggle('invalid', !isInput1Valid);

        input2.classList.toggle('valid', isInput2Valid);
        input2.classList.toggle('invalid', !isInput2Valid);

        input3.classList.toggle('valid', isInput3Valid);
        input3.classList.toggle('invalid', !isInput3Valid);

        selectBox.classList.toggle('valid', isSelectBoxValid);
        selectBox.classList.toggle('invalid', !isSelectBoxValid);

        // Check if all inputs are valid
        if (isInput1Valid && isInput2Valid && isInput3Valid && isSelectBoxValid) {
            // Perform further actions, such as form submission or displaying a success message
            // alert_message('All inputs are valid! Form can be submitted.');
            var data = {
                start_date: start_date,
                location: navigator.userAgent,
                username: username,
                email: email,
                service_type: service_type,
                description: description !== "" ? description : "empty description",
                provider: provider !== "" ? provider : "empty provider",
                status: 1,
            }
            try {
                fetch("https://api.lenexit.com/api/schedule", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data),
                }).then((response) => response.json()).then((result) => {
                    alert_message("Please Check Your Mail For Response:)");
                    var templateParams = {
                        to_name: 'username: ' + username,
                        subject: service_type,
                        from_name: 'Email: ' + email,
                        start_date: 'meeting start At: ' + start_date,
                        location: 'User Location: ' + navigator.userAgent,
                        service_type: 'service Type: ' + service_type,
                        message: 'message: ' + description
                    };
                    emailjs.init("lMgYQoX_cHOnwd6_K");
                    emailjs.send('service_ryvfsfd', 'template_drmpp6x', templateParams)
                        .then(function (response) {
                            console.log('SUCCESS!', response.status, response.text);
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                    setUsername("")
                    setEmail("")
                    setStartDate("")
                    setProvider("")
                    setServiceType("")
                    setDescription("")
                })
            } catch (error) {
                console.error(error);
            }
        } else {
            // Display an error message or perform any necessary actions for invalid inputs
            alert_message('Please fill in all required fields.');
        }
    }

    const modalShow = () => {
        setShow(true)
    }
    const CloseModal = () => {
        setShow(false)
    }

    return (
        <>
            <ToastContainer />
            <Header tags={location.href} />
            <Banner Img={supportImg} title="get free consultation" />
            <section id='calender'>
                <div className="container">
                    <div className='wrapper py-3'>
                        <div className=''>
                            <div className="meeting_form_wrapper">
                                <div className="">
                                    <video title='free consulting' poster={scheduleVideo_banner} autoPlay muted loop security='true' className='img-fluid'>
                                        <source src={schedule} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="meeting_form">
                                    <div className="title">
                                        <h4 className='text-capitalize text-left font-weight-bold'>send your message</h4>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>your name</label>
                                        <input type="text" id='username' required onChange={(e) => setUsername(e.target.value)} value={username} className="form-control" name="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>E-mail</label>
                                        <input type="text" id='email' required onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" name="email" />
                                    </div>
                                    <div style={{ display: showModal == true ? "block" : "none" }} className={showModal == true ? "modal fade show" : "modal fade"} id={showModal == true ? "modelId" : ""}>
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Select Date And Time</h5>
                                                    <button type="button" onClick={CloseModal} className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body" style={{ width: '400px', height: "400px" }}>
                                                    <input type="datetime-local" id="meeting-time"
                                                        name="meeting-time" className="form-control" value={start_date} required onChange={(e) => setStartDate(e.target.value)} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button style={{ backgroundColor: "blue" }} onClick={CloseModal} type="button" className="btn text-white" data-dismiss="modal">Done</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>set Date and time</label>
                                        <input type="text" id='startDate' required className='form-control' value={start_date} />
                                        <button style={{ width: '100%', backgroundColor: 'blue' }} onClick={modalShow} type="button" className="btn m-0 my-2 text-white" data-toggle="modal" data-target="#modelId">
                                            Date & Time
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className='text-capitalize'>service type</label>
                                        <select id='serviceType' required className="form-control service_type" onChange={(e) => setServiceType(e.target.value)} value={service_type}>
                                            <option value="">select service type</option>
                                            <option className='text-capitalize' value={"website development"}>website development</option>
                                            <option className='text-capitalize' value={"mobile app development"}>mobile app development</option>
                                            <option className='text-capitalize' value={"desktop application"}>desktop application</option>
                                            <option className='text-capitalize' value={"cms buidling"}>(CMS) Building</option>
                                            <option className='text-capitalize' value={"custom plugin"}>custom plugin</option>
                                            <option className='text-capitalize' value={"search engin optimization"}>search engine optimization</option>
                                            <option className='text-capitalize' value="custom theme development">custom theme development</option>
                                            <option className='text-capitalize' value="graphics design">graphics design</option>
                                            <option className='text-capitalize' value="ui/ux design">UI/UX design</option>
                                            <option className='text-capitalize' value="digital marketing">digital marketing</option>
                                            <option className='text-capitalize' value="lead generation">lead generation</option>
                                            <option className='text-capitalize' value="website maintenance">website maintenance</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <span>
                                            <img title='Meet With zoom' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/zoom.png" alt="zoom" />
                                            <img title='Meet With ms team' className='p-1' width="30" height="30" src="https://img.icons8.com/color-glass/48/microsoft-teams.png" alt="microsoft-teams" />
                                            <img title='Meet With Google Meet' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/google-meet--v1.png" alt="google-meet" />
                                            <img title='Meet With Skype' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/skype--v1.png" alt="skype--v1" />
                                            <img title='Meet With Cisco' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/cisco-webex-meetings.png" alt="cisco-webex-meetings" />
                                            <img title='Meet With Goto' className='p-1' width="30" height="30" src="https://img.icons8.com/fluency/48/video-call.png" alt="video-call" />
                                            <img title='Meet With Jitsi' className='p-1' style={{ borderRadius: "30px" }} width="30" height="30" src="https://play-lh.googleusercontent.com/1ckxjos_oOGSNOFyUE-cp7xSCoKLVgMOEAGVCgb6WDhObTlDDnyLohgtI8o1TI2c7A" alt="video-call" />
                                            <img title='Meet With Hangout' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/hangout.png" alt="hangout" />
                                            <img title='Meet With Discord' className='p-1' width="30" height="30" src="https://img.icons8.com/fluency/48/discord-logo.png" alt="discord-logo" />
                                            <img title='Meet With Viber' className='p-1' width="30" height="30" src="https://img.icons8.com/color/48/viber.png" alt="viber" />
                                        </span>
                                        <input title='Enter Your Zoom, Microshoft Team, Google Meet, Skyp, Cisco, Goto, Jiti, Hangout, Discord, Viber, (Meeting Url), or {Meeting ID}' type="url" required onChange={(e) => setProvider(e.target.value)} value={provider} className="form-control meeting_url_input" name="url" placeholder='Please Enter Your Meeting ID Or Meeting Url!' />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="" className='text-capitalize'>message</label>
                                            <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} name="" id="" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" style={{ background: "blue", color: "white" }} id='schedule_submit' onClick={SubmitHandler} className='btn btn-outline-success m-0'>Submit</button>
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

export default Calenders