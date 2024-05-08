import React, { useState, useEffect } from "react";
import {
    Container,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";

import CatalyzonLogo from "../../assets/images/catalyzon-logo.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const NavbarGeneral = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled]);

    return (

        <Navbar className={scrolled ? "navbar-scrolled" : "navbar"} expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="#">
                    <Image src={CatalyzonLogo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className={scrolled ? "nav-link-scrolled" : "nav-link"}>About Us</Nav.Link>
                        <Nav.Link className={scrolled ? "nav-link-scrolled" : "nav-link"}>Solutions</Nav.Link>
                        <Nav.Link className={scrolled ? "nav-link-scrolled" : "nav-link"}>Portfolio</Nav.Link>
                        <Nav.Link className={scrolled ? "nav-link-scrolled" : "nav-link"}>Media</Nav.Link>
                        <Nav.Link className={scrolled ? "nav-link-scrolled" : "nav-link"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};

export default NavbarGeneral;