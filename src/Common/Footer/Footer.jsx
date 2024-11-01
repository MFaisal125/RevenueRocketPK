import React, { useState } from 'react';
import "./Footer.css";
import "../../assets/css/media-query.css";
import FooterImg from "../../assets/vai/logo1.png";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import payoneerIcon from "../../assets/image/pay_method_image/payoneer.png";
import stripeIcon from "../../assets/image/pay_method_image/stripe.png";
import paypalIcon from "../../assets/image/pay_method_image/paypal.png";
import visaIcon from "../../assets/image/pay_method_image/visa.png";
import mastercardIcon from "../../assets/image/pay_method_image/mastercard.png";
import googlepayIcon from "../../assets/image/pay_method_image/google-pay.png";
import bitcoinIcon from "../../assets/image/pay_method_image/bitcoin.png";
import BinanceIcon from "../../assets/image/pay_method_image/Binance.png";
import rezorpyIcon from "../../assets/image/pay_method_image/rezorpy.png";
import linkedinIcon from "../../assets/image/social_image/linkedin.png";
import facebookIcon from "../../assets/image/social_image/facebook.png";
import instagramIcon from "../../assets/image/social_image/instagram.png";
import twitterIcon from "../../assets/image/social_image/twitter.png";
import emailIcon from "../../assets/image/social_image/email.png";
import fiverrIcon from "../../assets/image/social_image/fiverr.png";
import upworkIcon from "../../assets/image/social_image/upwork.png";
const Footer = () => {
    var [FooterEmail, setFooterEmail] = useState();
    function LinkedInWindow(link) { window.open(link); }
    function FacebookWindow(link) { window.open(link); }
    function InstagramWindow(link) { window.open(link); }
    function TwitterWindow(link) { window.open(link); }
    function FiverrWindow(link) { window.open(link); }
    function UpworkWindow(link) { window.open(link); }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /**-------------------cookei */
    const [CookieShow, setCookieShow] = useState(false);
    const cookieeClose = () => setCookieShow(false);
    const cookieeShow = () => setCookieShow(true);
    /**-------------------privacy */
    const [HelpShow, setHelpShow] = useState(false);
    const helpsClose = () => setHelpShow(false);
    const helpsShow = () => setHelpShow(true);
    /**-------------------faq */
    const [FaqShow, setFaqShow] = useState(false);
    const faqsClose = () => setFaqShow(false);
    const faqsShow = () => setFaqShow(true);
    function FooterEmailSubmitHandler() {
        var templateParams = {
            to_name: 'username: ' + navigator.userAgent,
            subject: 'Email Subscriber',
            from_name: 'Email: ' + FooterEmail,
            message: 'Message: Email Subscriber On The Website'
        };
        emailjs.init("lMgYQoX_cHOnwd6_K");
        emailjs.send('service_ryvfsfd', 'template_6ifyqbf', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <footer className='m-0 p-0'>
            <div className="container-fluid">
                <div className="footer_wrapper">
                    <div className="footer_box row">
                        <div className="footer-item col-md-5">
                            <div className='py-4'>
                                <img className='footer_logo' src={FooterImg} style={{ width: '300px', height: "100%", filter: "brightness(1.5) saturate(14.5)" }} alt="Desktop Application Development" />
                                <p className='text-white text-capitalize pt-3' style={{ fontSize: '14px' }}>
                                    Lenexit Is A Leading Technology Company That Specializes In Web And Mobile App Development, Desktop Application Development, SEO, Graphics Design, Penetration Testing, And More. With A Focus On Innovation And Client Satisfaction, We Provide Tailored Solutions To Businesses Of All Sizes.
                                </p>
                            </div>
                            <div className='payment_methods'>
                                <span><img title='pay with payoneer' width="30" height="30" src={payoneerIcon} alt="payoneer" /></span>
                                <span><img title='pay with stripe' width="30" height="30" src={stripeIcon} alt="stripe" /></span>
                                <span><img title='pay with paypal' width="30" height="30" src={paypalIcon} alt="paypal" /></span>
                                <span><img title='pay with visa' width="30" height="30" src={visaIcon} alt="visa" /></span>
                                <span><img title='pay with mastercard' width="30" height="30" src={mastercardIcon} alt="mastercard" /></span>
                                <span><img title='pay with google-pay' width="30" height="30" src={googlepayIcon} alt="google-pay-india" /></span>
                                <span><img title='pay with bitcoin' width="30" height="30" src={bitcoinIcon} alt="bitcoin" /></span>
                                <span><img title='pay with Binance' width="30" height="30" src={BinanceIcon} alt="Binance" /></span>
                                <span><img title='pay with rezorpy' width="30" height="30" src={rezorpyIcon} alt="rezorpy" /></span>
                            </div>
                        </div>
                        <div className="footer-item col-md-3">
                            <div className="title">
                                <h3>Services</h3>
                            </div>
                            <ul>
                                <li className='text-capitalize'><NavLink to={"/"}>Home</NavLink></li>
                                <li className='text-capitalize'><NavLink to={"/about"}>about</NavLink></li>
                                <li className='text-capitalize'><NavLink to={"/service"}>service</NavLink></li>
                                <li className='text-capitalize'><NavLink to={"/blogs"}>blogs</NavLink></li>
                                <li className='text-capitalize'><NavLink to={"/portfolio"}>our work</NavLink></li>
                                <li className='text-capitalize'><NavLink to={"/calender"}>free consultation</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-item col-md-4">
                            <div className="title pb-3">
                                <h3>contact us</h3>
                            </div>
                            <div className='d-flex'>
                                <input type="email" required value={FooterEmail} onChange={(e) => setFooterEmail(e.target.value)} className='form-control' placeholder='Please Enter Your Email' />
                                <button className='btn text-white' onClick={FooterEmailSubmitHandler} style={{ background: "blue" }}>Submit</button>
                            </div>
                            <div className='social pt-3'>
                                <div className="title">
                                    <h5 className='text-capitalize text-white font-weight-bold'>follow up</h5>
                                    <p className='text-white text-capitalize' style={{ fontSize: '14px' }}>
                                        follow up our community with our updated service
                                    </p>
                                </div>
                                <div className='pt-3 footer_social_link'>
                                    <span title='lenexit linkedin' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => LinkedInWindow("https://www.linkedin.com/company/lenexit")}>
                                        <img width="30" height="30" src={linkedinIcon} alt="linkedin" />
                                    </span>
                                    <span title='lenexit facebook' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => FacebookWindow("https://www.facebook.com/itlenex")}>
                                        <img width="30" height="30" src={facebookIcon} alt="facebook" />
                                    </span>
                                    <span title='lenexit instagram' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => InstagramWindow("https://www.instagram.com/lenex.it")}>
                                        <img width="30" height="30" src={instagramIcon} alt="instagram" />
                                    </span>
                                    <span title='lenexit twitter' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => TwitterWindow("https://twitter.com/itLenex")}>
                                        <img width="30" height="30" src={twitterIcon} alt="twitter" />
                                    </span>
                                    <span title='lenexit lenexIT' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item'><a href="mailto:itlenex@gmail.com">
                                        <img width="25" height="25" src={emailIcon} alt="email" />
                                    </a></span>
                                    <span title='lenexit fiverr' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => FiverrWindow("https://www.fiverr.com/users/touhid4646")}>
                                        <img width="30" height="30" src={fiverrIcon} alt="fiverr" />
                                    </span>
                                    <span title='lenexit upwork' style={{ cursor: "pointer" }} className='p-2 footer_last_social_item' onClick={() => UpworkWindow("https://www.upwork.com/freelancers/~01458bdf759deab25f")}>
                                        <img width="30" height="30" src={upworkIcon} alt="upwork" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-ilen'>
                <div>
                    <p>© 2023 <a className='text-white' href="/">lenexit</a>  All Rights Reserved </p>
                    <ul>
                        <li security='true' style={{ cursor: 'pointer', padding: '0 5px' }} onClick={cookieeShow}>Cookies</li>
                        <li security='true' style={{ cursor: 'pointer', padding: '0 5px' }} onClick={helpsShow}>Help</li>
                        <li security='true' style={{ cursor: 'pointer', padding: '0 5px' }} onClick={handleShow}>Terms</li>
                        <li security='true' style={{ cursor: 'pointer', padding: '0 5px' }} onClick={faqsShow}>FAQs</li>
                    </ul>
                </div>
            </div>
            {/* TARMS AND CONDITIONS STATMENT MODAL HERE */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>our Terms & conditions</Modal.Title>
                        {/* <Button variant='secondary' onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </Button> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div class="container-fluid">
                            <div>
                                <b>Acceptance of Terms</b>
                                <p>
                                    By accessing and using Lenexit's services, including but not limited to website development, mobile app development, and digital marketing, you agree to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our services.
                                </p>
                            </div>
                            <div>
                                <b>Services</b>
                                <p>
                                    Lenexit provides web and mobile application development, digital marketing, and related services. The specifics of the services provided, including deliverables, timelines, and pricing, will be outlined in a separate agreement or project proposal.
                                </p>
                            </div>
                            <div>
                                <b>Intellectual Property</b>
                                <p>
                                    All intellectual property rights, including trademarks, copyrights, and patents, related to Lenexit's services and deliverables remain the property of Lenexit unless otherwise stated in a separate agreement. Unauthorized use, reproduction, or distribution of Lenexit's intellectual property is strictly prohibited.
                                </p>
                            </div>
                            <div>
                                <b>Client Responsibilities</b>
                                <p>
                                    Clients are responsible for providing accurate and complete information, materials, and necessary access required for the provision of services by Lenexit. Clients also bear responsibility for ensuring that any content provided does not infringe upon any third-party rights.
                                </p>
                            </div>
                            <div>
                                <b>Payment and Fees</b>
                                <p>
                                    Payment terms and fees for Lenexit's services will be outlined in a separate agreement or project proposal. Clients agree to make timely payments according to the agreed-upon terms. Failure to make payments may result in project delays or termination of services.
                                </p>
                            </div>
                            <div>
                                <b>Confidentiality</b>
                                <p>
                                    Lenexit and clients agree to treat any confidential information shared during the course of the project as strictly confidential. Both parties shall take appropriate measures to maintain the confidentiality and protect sensitive information from unauthorized access or disclosure.
                                </p>
                            </div>
                            <div>
                                <b>Limitation of Liability</b>
                                <p>
                                    Lenexit shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services. We make no guarantees or warranties regarding the performance, accuracy, or suitability of the services provided.
                                </p>
                            </div>
                            <div>
                                <b>Termination</b>
                                <p>
                                    Either party may terminate the agreement for services upon providing written notice. Termination may result in additional fees, depending on the stage of the project and the work completed. Any outstanding payments or obligations shall be settled upon termination.
                                </p>
                            </div>
                            <div>
                                <b>Governing Law and Jurisdiction</b>
                                <p>
                                    These terms and conditions shall be governed by and construed in accordance with the laws of [jurisdiction]. Any disputes arising from these terms and conditions shall be subject to the exclusive jurisdiction of the courts in [jurisdiction].
                                </p>
                            </div>
                            <div>
                                <b>Amendments</b>
                                <p>
                                    Lenexit reserves the right to modify or update these terms and conditions at any time. Clients will be notified of any changes, and continued use of our services after the notification constitutes acceptance of the modified terms.
                                    These terms and conditions constitute the entire agreement between Lenexit and its clients and supersede any prior agreements or understandings.
                                    If you have any questions or concerns about these terms and conditions, please contact Lenexit for clarification.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* TARMS AND CONDITIONS STATMENT MODAL HERE */}
            {/* COOKIE POLICIY STATMENT MODAL HERE */}
            <>
                <Modal show={CookieShow} onHide={cookieeClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cookie Policy of Lenexit</Modal.Title>
                        {/* <Button variant='secondary' onClick={cookieeClose}><span aria-hidden="true">&times;</span></Button> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div class="container-fluid">
                            <div>
                                <b>What are Cookies?</b>
                                <p>
                                    Cookies are small text files that are stored on your device (computer, mobile device, or tablet) when you visit our website. These files contain information that helps improve your browsing experience and allows us to analyze website traffic and usage.
                                </p>
                            </div>
                            <div>
                                <b>Types of Cookies Used</b>
                                <p>
                                    a. Necessary Cookies: These cookies are essential for the functioning of our website and cannot be disabled. They enable core functionality, such as accessing secure areas and remembering user preferences.
                                </p>
                                <p>
                                    b. Analytical Cookies: We use analytical cookies to collect information about how visitors use our website. This helps us analyze website traffic, identify trends, and improve our website's performance and functionality.
                                </p>
                                <p>
                                    c. Marketing Cookies: Marketing cookies are used to track visitors across websites. The information collected is used to deliver personalized advertisements and measure the effectiveness of our marketing campaigns.
                                </p>
                            </div>
                            <div>
                                <b>Cookie Management</b>
                                <p>
                                    By using our website, you consent to the use of cookies as described in this policy. You can manage and control cookies through your browser settings. Most web browsers allow you to delete or block cookies, and you can also set preferences for how cookies are handled. However, please note that blocking or deleting cookies may impact your browsing experience and certain website functionality.
                                </p>
                            </div>
                            <div>
                                <b>Third-Party Cookies</b>
                                <p>
                                    We may use third-party services on our website that may also place cookies on your device. These third-party services include analytics tools, advertising networks, and social media platforms. We do not have control over the cookies placed by these third parties and recommend reviewing their respective cookie policies for more information.
                                </p>
                            </div>
                            <div>
                                <b>Data Privacy and Security</b>
                                <p>
                                    We are committed to protecting your privacy and ensuring the security of your personal data. The use of cookies does not enable us to collect personally identifiable information unless you voluntarily provide it. For more information on how we handle and protect your personal data, please refer to our Privacy Policy.
                                </p>
                            </div>
                            <div>
                                <b>Updates to the Cookie Policy</b>
                                <p>
                                    We may update our Cookie Policy from time to time to reflect any changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed about how we use cookies.
                                    If you have any questions or concerns about our Cookie Policy, please <NavLink to={"/contact"}>contact</NavLink> us for more information.
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cookieeClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* COOKIE POLICIY STATMENT MODAL HERE */}
            {/* HELP * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
            <>
                <Modal show={HelpShow} onHide={helpsClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Our Help & Support</Modal.Title>
                        {/* <Button variant='secondary' onClick={helpsClose}> <span aria-hidden="true">&times;</span></Button> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p>
                                Our commitment to providing exceptional service goes beyond just the initial project delivery. We are dedicated to offering ongoing support and assistance to our clients whenever they need it. Our help and support services are designed to ensure that you have a seamless experience throughout your journey with us.
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>(1)</b> Dedicated Support Team: We have a dedicated team of support professionals who are ready to assist you with any queries or issues you may encounter. Our knowledgeable team members are well-versed in our services and can provide prompt and reliable assistance.
                            </p>
                            <p>
                                <b>(2)</b> Timely Responses: We understand the importance of timely responses when you need help. Our support team strives to provide quick and efficient responses to your inquiries, ensuring that you receive the assistance you need in a timely manner.
                            </p>
                            <p>
                                <b>(3)</b> Problem Resolution: If you encounter any technical issues or challenges, our support team will work diligently to diagnose and resolve them. We leverage our expertise and experience to find effective solutions, minimizing any disruption to your operations.
                            </p>
                            <p>
                                <b>(4)</b> Training and Guidance: We believe in empowering our clients to make the most of our services. If you require guidance or training on how to use our solutions effectively, our team is here to provide comprehensive training sessions and step-by-step guidance to help you navigate through our offerings.
                            </p>
                            <p>
                                <b>(5)</b> Continuous Improvement: We are committed to continuously improving our services and addressing any feedback or suggestions you may have. Your input is invaluable to us, and we take your feedback seriously to enhance our offerings and deliver an even better experience.
                            </p>
                            <p>
                                <b>(6)</b> Knowledge Base and Documentation: To facilitate self-help and easy access to information, we maintain a comprehensive knowledge base and documentation. This resource hub includes FAQs, tutorials, and guides that cover various aspects of our services, enabling you to find answers and solutions independently.
                            </p>
                            <p>
                                <b>(7)</b> Regular Updates and Enhancements: As technology evolves, we strive to stay ahead of the curve and keep our services up-to-date. We regularly release updates and enhancements to improve functionality, security, and performance, ensuring that you benefit from the latest advancements.
                            </p>
                            <p>
                                <b>(8)</b> Our goal is to be your trusted partner and provide comprehensive support at every step. Whether you need assistance with technical issues, guidance on utilizing our services effectively, or simply have questions, our help and support services are designed to provide the support you need to succeed.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={helpsClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* HELP * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
            {/* FAQ * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
            <>
                <Modal show={FaqShow} onHide={faqsClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>FAQs</Modal.Title>
                        {/* <Button variant='secondary' onClick={faqsClose}><span aria-hidden="true">&times;</span></Button> */}
                    </Modal.Header>
                    <Modal.Body>
                        <div id="accordianId" role="tablist" aria-multiselectable="true">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='accordion-header'>What services does Lenexit provide?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Lenexit offers a range of services including web and mobile app development, custom plugin and theme development, SEO, UI/UX design, penetration testing, and more. We provide comprehensive solutions to meet your business needs.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='accordion-header'>How experienced is the team at Lenexit?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Our team consists of highly skilled professionals with years of experience in their respective domains. We have a diverse team of experts in web development, mobile app development, design, SEO, and more, ensuring that we can deliver top-quality solutions tailored to your requirements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className='accordion-header'>Can you handle projects of any size?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Yes, we have the capabilities to handle projects of varying sizes and complexities. Whether you need a small website or a large-scale enterprise application, we can provide the expertise and resources to ensure successful project delivery.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className='accordion-header'>How long does it take to complete a project?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        The project timeline depends on the specific requirements and scope of work. We work closely with our clients to establish realistic timelines and milestones. We strive to deliver projects on time, ensuring quality and customer satisfaction.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header className='accordion-header'>How involved will I be in the development process?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        We believe in close collaboration with our clients throughout the development process. Your input and feedback are invaluable to us. We encourage regular communication to ensure that the project aligns with your vision and requirements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header className='accordion-header'>Do you offer post-development support and maintenance?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Yes, we provide post-development support and maintenance services to ensure that your website or application continues to perform optimally. We offer different support packages tailored to your needs, including bug fixes, updates, and enhancements.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header className='accordion-header'>How do you ensure the security of my project?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        At Lenexit, we prioritize the security of our clients' projects. We follow industry best practices and implement robust security measures to protect your data and ensure a secure development environment. We conduct regular security audits and follow strict protocols to safeguard your project.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header className='accordion-header'>Can you assist with website optimization and SEO?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Absolutely! We have expertise in SEO and website optimization techniques. We can help improve your website's visibility, organic rankings, and overall performance through strategic SEO practices and optimization strategies.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header className='accordion-header'> Can you integrate third-party services into my project?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        Yes, we have experience integrating various third-party services, APIs, and platforms into projects. Whether it's payment gateways, social media integrations, or CRM systems, we can seamlessly incorporate them into your project to enhance its functionality.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header className='accordion-header'>What is the process to start a project with Lenexit?</Accordion.Header>
                                    <Accordion.Body className='accordion_body'>
                                        To start a project with Lenexit, simply reach out to us with your requirements. We'll schedule an initial consultation to discuss your project in detail. From there, we'll provide you with a proposal outlining the project scope, timeline, and cost. Once you approve the proposal, we'll initiate the project development process.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={faqsClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            {/* FAQ * AND SUPPORT SYSTEM STATMENT MODAL HERE */}
        </footer>
    )
}

export default Footer