import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Nav,
    Navbar,
    Image
} from "react-bootstrap";

import CatalyzonLogo from "../../assets/images/catalyzon-logo.png";

import "../../assets/css/navbar-solution.css";
import "../../assets/css/responsive.css";

const NavbarSolution = () => {

    const navigate = useNavigate();

    return (

        <Navbar className="navbar navbar-solution" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="#">
                    <Image src={CatalyzonLogo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => navigate('/')}>About Us</Nav.Link>
                        <Nav.Link onClick={() => navigate('/solution')}>Solutions</Nav.Link>
                        <Nav.Link href="/#impact-content">Portfolio</Nav.Link>
                        <Nav.Link href="/#media-content">Media</Nav.Link>
                        <Nav.Link href="/#contact-content">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};

export default NavbarSolution;