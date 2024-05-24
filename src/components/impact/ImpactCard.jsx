import React, { useEffect } from "react";
import {
    Row,
    Col,
    Card
} from "react-bootstrap";
import AOS from 'aos';

import Impact1IconImage from "../../assets/images/impact/impact1-icon.png";
import Impact2IconImage from "../../assets/images/impact/impact2-icon.png";
import Impact3IconImage from "../../assets/images/impact/impact3-icon.png";
import Impact4IconImage from "../../assets/images/impact/impact4-icon.png";
import Impact5IconImage from "../../assets/images/impact/impact5-icon.png";
import Impact6IconImage from "../../assets/images/impact/impact6-icon.png";

import 'aos/dist/aos.css';
import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const ImpactCard = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <Col xs={12} xl={7} className="card-impact">
            <Row>
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-right">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact1IconImage}/>
                        <Card.Body>
                            <Card.Title>1,500 +</Card.Title>
                            <Card.Text>
                            Tons of Waste Processed
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-left">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact2IconImage}/>
                        <Card.Body>
                            <Card.Title>5 +</Card.Title>
                            <Card.Text>
                            Waste to Energy Project Deployed
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-right">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact3IconImage}/>
                        <Card.Body>
                            <Card.Title>315 +</Card.Title>
                            <Card.Text>
                                People Educated & Empowered
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-left">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact4IconImage}/>
                        <Card.Body>
                            <Card.Title>15 +</Card.Title>
                            <Card.Text>
                                Clients & Partners Collaborated
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-right">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact5IconImage}/>
                        <Card.Body>
                            <Card.Title>6,120 +</Card.Title>
                            <Card.Text>
                                CO <span>2</span> Reduced
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail" data-aos="fade-up-left">
                    <Card>
                        <Card.Img variant="top" className="rounded-0 impact-icon" src={Impact6IconImage}/>
                        <Card.Body>
                            <Card.Title>1,000 +</Card.Title>
                            <Card.Text>
                                Trees Equivalent Planted
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Col>

    );

};

export default ImpactCard;