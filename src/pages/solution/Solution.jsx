import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card
} from "react-bootstrap";
import AOS from 'aos';

import SolutionLayout from "../../layouts/solution/SolutionLayout";
import ModalContact from "../../components/modal/ModalContact";

import { SolutionsCollectionData } from "../../assets/data/solutionPageData";
import { SolutionsPointCollectionData } from "../../assets/data/solutionPoint";

import 'aos/dist/aos.css';
import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const Solution = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <SolutionLayout>

            <div id="solution-title-content">
                <Container>
                    <Row
                        data-aos="fade-up" 
                        data-aos-anchor-placement="top-bottom"
                    >
                        <Col xs={12} xl={{ span: 8, offset: 2 }}>
                            <h1>
                                Driving  <span>Sustainable</span> Change with Catalyzon Solutions
                            </h1>
                        </Col>
                    </Row>
                    <Row
                        data-aos="fade-up" 
                        data-aos-anchor-placement="top-bottom"
                    >
                        <Col xs={12} xl={{ span: 6, offset: 3 }}>
                            <p>
                                We collaborate closely with our clients to understand their unique needs and develop sustainable, eco-friendly solutions.
                            </p>
                        </Col>
                    </Row>
                    <Row className="btn-additional">
                        <Col 
                            xs={6} xl={6} 
                            className="d-flex justify-content-end" 
                            data-aos="fade-up" 
                            data-aos-anchor-placement="top-bottom"
                        >
                            <Button href="#partner-content" className="btn-chooseus">
                                Why Choose Us
                            </Button>
                        </Col>
                        <Col 
                            xs={6} xl={6} 
                            className="d-flex justify-content-start"
                            data-aos="fade-up" 
                            data-aos-anchor-placement="top-bottom"
                        >
                            <Button className="btn-contactus" onClick={handleShow}>
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                    <ModalContact
                        show={show}
                        handleClose={handleClose}
                    />
                </Container>
            </div>

            <div id="card-solution-content">
                <Container>
                    <Row>
                        {
                            SolutionsCollectionData.Collections.map((solution) => {
                                return (
                                    <Col xs={12} xl={6} className="card-solution-describe" key={solution.id} data-aos="zoom-in-up">
                                        <Card>
                                            <Card.Img variant="top" className="solution-icon" src={solution.properties.icon} />
                                            <Card.Body>
                                                <Card.Title>{solution.properties.title}</Card.Title>
                                                <Card.Text>
                                                    {solution.properties.decription}
                                                </Card.Text>
                                                <Card.Link onClick={() => window.location.href = `/solution/detail/${solution.id}`}>See Solution</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

            <div id="partner-content">
                <Container>
                    <Row
                        data-aos="fade-up" 
                        data-aos-anchor-placement="top-bottom"
                    >
                        <Col xs={12} xl={12}>
                            <h1>Why Should You Partner With Us?</h1>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="card-point-solution">
                <Container>
                    <Row>
                        {
                            SolutionsPointCollectionData.Collections.map((solution) => {
                                return (
                                    <Col xs={12} xl={3} key={solution.id} className="point-describe" data-aos="zoom-in-up">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{solution.properties.title}</Card.Title>
                                                <Card.Text>
                                                    {solution.properties.decription}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

        </SolutionLayout>

    );

};

export default Solution;