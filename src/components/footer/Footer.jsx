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
                                        <p>About Us</p>
                                        <p>Solutions</p>
                                        <p>Portfolio</p>
                                        <p>Media</p>
                                        <p>Contact</p>
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
                                        <p>Waste Management Service</p>
                                        <p>Waste to Energy Project</p>
                                        <p>Training and Community Development</p>
                                        <p>Digital Decarbonization</p>
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
                                        <p>Instagram</p>
                                        <p>LinkedIn</p>
                                        <p>YouTube</p>
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