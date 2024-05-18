import React from "react";
import {
    Row,
    Col,
    Container,
    Button,
    Image
} from "react-bootstrap";

import CatalyzonLogoImage from "../../assets/images/catalyzon-logo.png";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const FooterComponent = () => {

    const handleClickButton = () => {
        const url = `https://web.whatsapp.com/send?phone=+6285811539501`;
        window.open(url)
    };

    return (

        <>

            <div id="contact-content">
                <Container className="contact-describe">
                    <Row>
                        <Col xs={12} xl={{ span: 10, offset: 1 }}>
                            <h1>Join with us in to save the environment through our waste-to-energy solution</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xl={{ span: 10, offset: 1 }} className="d-flex justify-content-center">
                            <Button className="btn-contact" onClick={handleClickButton}>
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="footer-content">
                <Container className="footer-describe">
                    <Row>
                        <Col xs={12} xl={4} className="company-describe">
                            <div>
                                <Image src={CatalyzonLogoImage} />
                                <span>Catalyzon</span>
                            </div>
                            <div>
                                <h5>PT. SINERGI EKOSISTEM NUSANTARA</h5>
                                <p>Jl. Kol. Hadijanto, Banaran, Sekaran, Gunungpati, Kota Semarang, 50229</p>
                            </div>
                        </Col>
                        <Col xs={6} xl={2} className="quicklink-describe">
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <h5>Quick Links</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <p onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>About Us</p>
                                        <p onClick={() => window.location.href = '/solution'} style={{ cursor: 'pointer' }}>Solutions</p>
                                        <p onClick={() => window.location.href = '/#impact-content'} style={{ cursor: 'pointer' }}>Portfolio</p>
                                        <p onClick={() => window.location.href = '/#media-content'} style={{ cursor: 'pointer' }}>Media</p>
                                        <p onClick={() => window.location.href = '/#contact-content'} style={{ cursor: 'pointer' }}>Contact</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} xl={2} className="solution-describe">
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <h5>Solutions</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <div onClick={() => window.location.href = '/solution/detail/1'} style={{ cursor: 'pointer' }}>
                                            <p>Waste Management Service</p>
                                        </div>
                                        <div onClick={() => window.location.href = '/solution/detail/2'} style={{ cursor: 'pointer' }}>
                                            <p>Waste to Energy Project</p>
                                        </div>
                                        <div onClick={() => window.location.href = '/solution/detail/3'} style={{ cursor: 'pointer' }}>
                                            <p>Training and Community Development</p>
                                        </div>
                                        <div onClick={() => window.location.href = '/solution/detail/4'} style={{ cursor: 'pointer' }}>
                                            <p>Digital Decarbonization</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} xl={2} className="socialmedia-describe">
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <h5>Social Media</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <a href="https://www.instagram.com/catalyzon/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                            <p >Instagram</p>
                                        </a>
                                        <a href="https://www.linkedin.com/company/catalyzon/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                            <p >LinkedIn</p>
                                        </a>
                                        <a href="https://www.youtube.com/@catalyzon" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                                            <p >YouTube</p>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} xl={2} className="getin-touch-describe">
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <h5>Get in Touch</h5>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} xl={12}>
                                    <div>
                                        <p>+62-858-1153-9501</p>
                                        <p>admin@catalyzon.com</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Row className="cp-describe">
                    <Col xs={12} xl={12}>
                        <h6>©2024 by Catalyzon.</h6>
                    </Col>
                </Row>
            </div>

        </>

    );

};

export default FooterComponent;