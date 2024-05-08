import React from "react";
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

    return (
        <Navbar className="navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="#">
                    <Image src={CatalyzonLogo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>About Us</Nav.Link>
                        <Nav.Link>Solutions</Nav.Link>
                        <Nav.Link>Portfolio</Nav.Link>
                        <Nav.Link>Media</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavbarGeneral;