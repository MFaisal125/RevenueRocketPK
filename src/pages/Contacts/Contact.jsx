import React, { useState } from 'react'
import "./Contact.css"
import "../../assets/css/media-query.css"
import Banner from '../../Common/Banners/Banner'
import Header from '../../Common/Header/Headers'
import contact_video from "../../assets/video/contact-us.mp4"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Common/Footer/Footer'
import emailjs from '@emailjs/browser';
import contactVideo_banner from "../../assets/video/contact_video_banner.jpg";
const Contact = () => {
    var [username, setUsername] = useState('')
    var [email, setEmail] = useState('')
    var [subject, setSubject] = useState('')
    var [description, setDescription] = useState('')
    function alert_message(message) {
        toast(message);
    }
    const SubmitHandler = (e) => {

        // Get references to input and select elements
        const input1 = document.getElementById('username');
        const input2 = document.getElementById('email');
        const input3 = document.getElementById('subject');
        const input4 = document.getElementById('description');

        // Validate each input/select
        const isInput1Valid = input1.value.trim() !== '';
        const isInput2Valid = input2.value.trim() !== '';
        const isInput3Valid = input3.value.trim() !== '';
        const isInput4Valid = input4.value.trim() !== '';

        // Apply corresponding styling based on validation result
        input1.classList.toggle('valid', isInput1Valid);
        input1.classList.toggle('invalid', !isInput1Valid);

        input2.classList.toggle('valid', isInput2Valid);
        input2.classList.toggle('invalid', !isInput2Valid);

        input3.classList.toggle('valid', isInput3Valid);
        input3.classList.toggle('invalid', !isInput3Valid);

        input4.classList.toggle('valid', isInput4Valid);
        input4.classList.toggle('invalid', !isInput4Valid);

        // Check if all inputs are valid
        if (isInput1Valid && isInput2Valid && isInput3Valid && isInput4Valid) {
            // Perform further actions, such as form submission or displaying a success message
            // alert('All inputs are valid! Form can be submitted.');
            var data = {
                username: username,
                email: email,
                subject: subject,
                description: description,
                status: 1
            }
            console.log(data)
            try {
                fetch("https://api.lenexit.com/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json()).then((result) => {
                    alert_message("Thanks We Will Connect With You Very Soon")
                    var templateParams = {
                        to_name: 'username: '+username,
                        subject: subject,
                        from_name: 'Email: '+email,
                        message: 'Message: '+description
                    };
                    emailjs.init("lMgYQoX_cHOnwd6_K");
                    emailjs.send('service_ryvfsfd', 'template_6ifyqbf', templateParams)
                        .then(function (response) {
                            console.log('SUCCESS!', response.status, response.text);
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                    setUsername("");
                    setEmail("")
                    setSubject("")
                    setDescription("")
                })
            } catch (error) {
                console.error(error);
            }
        } else {
            // Display an error message or perform any necessary actions for invalid inputs
            alert_message('Please Fill In All Required Fields.');
        }
        document.getElementById("contact_submit").style.display = "none";
        setTimeout(() => {
            document.getElementById("contact_submit").style.display = "block"
        }, 2000);
    }

    return (
        <>
           <Header tags={location.href}/>
            <Banner title="Contact with us" color="#fff" Img='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1688301632~exp=1688302232~hmac=6bc6d60feace16570c4bc9a263ce9e8100c5a351a617aa34b6337e705eead88e' />
            <section id='contact-page'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-2">
                            <video poster={contactVideo_banner} autoPlay muted loop src={contact_video} style={{ height: "370px" }} className='img-fluid'></video>
                            <div className="contact_page_left_side_details">
                                <div className='shadow-sm p-4 border my-1 rounded'>
                                    <img title='phone-connected with lenexit' width="30" height="30" src="https://img.icons8.com/ios-filled/000000/phone-disconnected.png" alt="phone-connected with lenexit" />
                                    <span style={{ fontSize: '18px' }} className='pl-2 text-capitalize font-weight-bold ml-2'>contact us: </span>
                                    <span className='ml-2' style={{ fontSize: '16px' }}>+8801743714489</span>
                                </div>
                                <div className='shadow-sm p-4 border my-1 rounded'>
                                    <img title='mail-connected with lenexit' width="25" height="25" src="https://img.icons8.com/ios-filled/50/mail.png" alt="mail-connected with lenexit" />
                                    <span style={{ fontSize: '18px' }} className='pl-2 text-capitalize font-weight-bold ml-2'>E-mail: </span>
                                    <span className='ml-2' style={{ fontSize: '16px' }}>service@lenexit.com</span>
                                </div>
                                <div className='shadow-sm p-4 border my-1 rounded'>
                                    <img title='address-connect with lenexit' width="30" height="30" src="https://img.icons8.com/ios-filled/50/address--v1.png" alt="address-connect with lenexit" />
                                    <span style={{ fontSize: '18px' }} className='pl-2 text-capitalize font-weight-bold ml-2'>office: </span>
                                    <span className='ml-2' style={{ fontSize: '16px' }}>4/2, Block-A, Mirpur-2, Dhaka-1216</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-2">
                            <form className='card p-3'>
                                <div className="title pt-3 pb-2">
                                    <h3 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>
                                        Let's Start Growing Your Business Today
                                    </h3>
                                    <p style={{ fontSize: '14px' }}>
                                        Contact us today to grow your business with customized digital marketing solutions and dedicated support.
                                    </p>
                                </div>
                                <div id="alert" className="mb-3 p-2"></div>
                                <ToastContainer />
                                <div className="form-group">
                                    <label htmlFor="" className='text-capitalize'>your name</label>
                                    <input type="text" requied name='username' id='username' onChange={(e) => setUsername(e.target.value)} value={username} required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className='text-capitalize'>E-Mail</label>
                                    <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className='text-capitalize'>subject</label>
                                    <input type="text" name='subject' id='subject' onChange={(e) => setSubject(e.target.value)} value={subject} required className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className='text-capitalize'>message</label>
                                    <textarea className="form-control" id='description' name='description' rows="3" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                                </div>
                                <div className='mt-1'>
                                    <button type='button' id='contact_submit' onClick={SubmitHandler} style={{ backgroundColor: "blue", color: 'whitesmoke' }} className='btn text-capitalize m-0'>submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={{ padding: '40px 0', height: '50vh' }}>
                        <iframe width={"100%"} height={"100%"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.2158434414917!2d90.36412024204265!3d23.828313942115678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c139f78a8653%3A0x823d18dd4320d2b1!2s4%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1689914050252!5m2!1sen!2sbd" allowFullScreen="true" loading='lazy' frameborder="0" style={{ border: "10px solid #eee", borderRadius: '10px' }}></iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact