import React, { useState } from "react";
import {
    Image,
    Row,
    Col,
    Button
} from "react-bootstrap";

import ArrowButton from "../../assets/images/arrow-button.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const AwardsRecognitions = () => {

    const [showMore, setShowMore] = useState(false);

    const handleToggleView = () => {
        setShowMore(!showMore);
    };

    return (

        <>
            <hr />
            <Row className="awards-describe">
                <Col xs={10} xl={10}>
                    <h1>Gold Medal World Invention Creativity Olympic, Korea</h1>
                </Col>
                <Col xs={2} xl={2} className="d-flex justify-content-end">
                    <h6>01</h6>
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={10} xl={10}>
                    <h1>Gold Medal International Science Project Competition, Turkey</h1>
                </Col>
                <Col xs={2} xl={2} className="d-flex justify-content-end">
                    <h6>02</h6>
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={10} xl={10}>
                    <h1>Gold Medal WICE Malaysia Invention, Malaysia</h1>
                </Col>
                <Col xs={2} xl={2} className="d-flex justify-content-end">
                    <h6>03</h6>
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={10} xl={10}>
                    <h1>Gold Medal 1 Idea 1 World Competition, Turkey</h1>
                </Col>
                <Col xs={2} xl={2} className="d-flex justify-content-end">
                    <h6>04</h6>
                </Col>
            </Row>
            {showMore && (
                <>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={10} xl={10}>
                            <h1>Top 10 Shell Live Wire Energy Solutions, Indonesia</h1>
                        </Col>
                        <Col xs={2} xl={2} className="d-flex justify-content-end">
                            <h6>05</h6>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={10} xl={10}>
                            <h1>Top 30 Pertamina Muda, Indonesia</h1>
                        </Col>
                        <Col xs={2} xl={2} className="d-flex justify-content-end">
                            <h6>06</h6>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={10} xl={10}>
                            <h1>Top 3 Digital Solution of GSMA Mobile Inonovtion Hub - Energy Action for Sustainable Transformation</h1>
                        </Col>
                        <Col xs={2} xl={2} className="d-flex justify-content-end">
                            <h6>07</h6>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={10} xl={10}>
                            <h1>3rd Place Award Green Synergy Solutions for Green Energy, Australia</h1>
                        </Col>
                        <Col xs={2} xl={2} className="d-flex justify-content-end">
                            <h6>08</h6>
                        </Col>
                    </Row>
                </>
            )}
            {!showMore && (
                <Row>
                    <Col xs={12} xl={12} className="d-flex justify-content-end">
                        <Button onClick={handleToggleView}>
                            View More <Image src={ArrowButton} />
                        </Button>
                    </Col>
                </Row>
            )}
            {showMore && (
                <Row>
                    <Col xs={12} xl={12} className="d-flex justify-content-end">
                        <Button onClick={handleToggleView}>
                            View Less <Image src={ArrowButton} />
                        </Button>
                    </Col>
                </Row>
            )}
        </>

    );

};

export default AwardsRecognitions;