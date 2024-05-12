import React, { useState } from "react";
import {
    Image,
    Row,
    Col,
    Button
} from "react-bootstrap";

import KUIAImage from "../../assets/images/kuia.png";
import IntoqImage from "../../assets/images/intoc.png";
import ShellImage from "../../assets/images/shell.png";
import MIICAImage from "../../assets/images/miica.png";
import TummiadImage from "../../assets/images/tummiad.png";
import PertamudaImage from "../../assets/images/pertamuda-2.png";
import GSMAImage from "../../assets/images/gsma-2.png";
import ApecImage from "../../assets/images/apec-2.png";

import "../../assets/css/home.css";
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
                <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                    <h6>01</h6>
                </Col>
                <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                    <h1>Gold Medal World Invention Creativity Olympic, Korea</h1>
                </Col>
                <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                    <Image src={KUIAImage} />
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                    <h6>02</h6>
                </Col>
                <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                    <h1>Gold Medal International Science Project Competition, Turkey</h1>
                </Col>
                <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                    <Image src={IntoqImage} />
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                    <h6>03</h6>
                </Col>
                <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                    <h1>Gold Medal WICE Malaysia Invention, Malaysia</h1>
                </Col>
                <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                    <Image src={MIICAImage} />
                </Col>
            </Row>
            <hr />
            <Row className="awards-describe">
                <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                    <h6>04</h6>
                </Col>
                <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                    <h1>Gold Medal 1 Idea 1 World Competition, Turkey</h1>
                </Col>
                <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                    <Image src={TummiadImage} />
                </Col>
            </Row>
            {showMore && (
                <>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                            <h6>05</h6>
                        </Col>
                        <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                            <h1>Top 10 Shell Live Wire Energy Solutions, Indonesia</h1>
                        </Col>
                        <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                            <Image src={ShellImage} />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                            <h6>06</h6>
                        </Col>
                        <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                            <h1>Top 30 Pertamina Muda, Indonesia</h1>
                        </Col>
                        <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                            <Image src={PertamudaImage} />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                            <h6>07</h6>
                        </Col>
                        <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                            <h1>Top 3 Digital Solution of GSMA Mobile Inonovtion Hub - Energy Action for Sustainable Transformation</h1>
                        </Col>
                        <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                            <Image src={GSMAImage} />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="awards-describe">
                        <Col xs={2} xl={1} className="d-flex justify-content-start align-items-center">
                            <h6>08</h6>
                        </Col>
                        <Col xs={6} xl={8} className="d-flex justify-content-start align-items-center">
                            <h1>3rd Place Award Green Synergy Solutions for Green Energy, Australia</h1>
                        </Col>
                        <Col xs={4} xl={3} className="d-flex justify-content-end align-items-center">
                            <Image src={ApecImage} />
                        </Col>
                    </Row>
                </>
            )}
            {!showMore && (
                <Row>
                    <Col xs={12} xl={12} className="d-flex justify-content-end">
                        <Button onClick={handleToggleView}>
                            View More
                        </Button>
                    </Col>
                </Row>
            )}
            {showMore && (
                <Row>
                    <Col xs={12} xl={12} className="d-flex justify-content-end">
                        <Button onClick={handleToggleView}>
                            View Less
                        </Button>
                    </Col>
                </Row>
            )}
        </>

    );

};

export default AwardsRecognitions;