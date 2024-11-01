import React, { useEffect, useState } from "react";
import "./Header.css"
import logo1 from "../../assets/vai/logo.png"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
// import { Helmet, HelmetProvider } from 'react-helmet-async';

const Headers = ({ tags }) => {
    var [Sticky, setSticky] = useState(0);
    window.onscroll = () => {
        setSticky(window.scrollY > 200)
    }
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = location.href;
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, []);
    return (
        <>
            <header id="header" style={{ opacity: Sticky ? "0" : "1" }}>
                {/* <HelmetProvider>
                    <Helmet>
                        <link rel="canonical" href={tags} />
                    </Helmet>
                </HelmetProvider> */}
                <div className="container">
                    <Navbar expand="lg" className="bg-body-tertiary react_navbar">
                        <Container>
                            <Navbar.Brand>
                                <Nav.Link href="/" className="navbar-brand">
                                    <img src={logo1} style={{ width: '100%', height: '55px' }} className="img-fluid" title="lenexit" alt="lenexit.com logo" />
                                </Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><NavLink to={"/"}>Home</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/about"}>About</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/service"}>Services</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/portfolio"}>Our Works</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/blogs"}>Blogs</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/contact"}>Contact Us</NavLink></Nav.Link>
                                </Nav>
                                <NavLink to={"/calender"} className="consulting_btn text-white">Book A Consultation</NavLink>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>
        </>
    )
}

export default Headers