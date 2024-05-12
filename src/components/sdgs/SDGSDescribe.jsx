import React from "react";
import {
    Row,
    Col,
    Card
} from "react-bootstrap";

import SDGS7Image from "../../assets/images/7-sdgs.png";
import SDGS8Image from "../../assets/images/8-sdgs.png";
import SDGS9Image from "../../assets/images/9-sdgs.png";
import SDGS10Image from "../../assets/images/10-sdgs.png";
import SDGS11Image from "../../assets/images/11-sdgs.png";
import SDGS12Image from "../../assets/images/12-sdgs.png";
import SDGS13Image from "../../assets/images/13-sdgs.png";
import SDGS17Image from "../../assets/images/17-sdgs.png";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const SDGSDescribe = () => {

    return (

        <>

        <Row>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS7Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Providing waste-to-energy solution  that is affordable and accessible to communities and industries.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS8Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Providing waste-to-energy solution  that is affordable and accessible to communities and industries.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS9Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Creating an efficient and sustainable infrastructure for waste-to-energy production.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS10Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Creating an efficient and sustainable infrastructure for waste-to-energy production.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
        <Row className="mt-4">
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS11Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Providing environmentally friendly and innovative waste-to-energy solutions in urban environment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS12Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Promoting circular economy principles, minimizing waste, and maximizing the value of resources through our ecosystem
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS13Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Promoting circular economy principles, minimizing waste, and maximizing the value of resources through our ecosystem
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} xl={3}>
                <Card className="border-0 mt-4">
                    <Card.Img variant="top" src={SDGS17Image} className="rounded-0"/>
                    <Card.Body>
                        <Card.Text>
                            Promoting circular economy principles, minimizing waste, and maximizing the value of resources through our ecosystem
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        </>

    );

};

export default SDGSDescribe;