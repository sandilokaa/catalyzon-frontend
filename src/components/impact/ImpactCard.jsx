import React from "react";
import {
    Row,
    Col,
    Card
} from "react-bootstrap";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const ImpactCard = () => {

    return (

        <Col xs={12} xl={7} className="card-impact">
            <Row>
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
                        <Card.Body>
                            <Card.Title>1,500 +</Card.Title>
                            <Card.Text>
                            Tons of Waste Processed
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
                        <Card.Body>
                            <Card.Title>5 +</Card.Title>
                            <Card.Text>
                            Waste to Energy Project Deployed
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
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
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
                        <Card.Body>
                            <Card.Title>15 +</Card.Title>
                            <Card.Text>
                                Clients & Partners Collaborated
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
                        <Card.Body>
                            <Card.Title>6,120 +</Card.Title>
                            <Card.Text>
                                CO <span>2</span> Reduced
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} xl={4} className="card-impact-detail">
                    <Card>
                        <Card.Img variant="top" className="rounded-0" />
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