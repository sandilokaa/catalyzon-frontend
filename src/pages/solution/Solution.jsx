import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Card
} from "react-bootstrap";

import SolutionLayout from "../../layouts/solution/SolutionLayout";

import { SolutionsCollectionData } from "../../assets/data/solutionPageData";
import { SolutionsPointCollectionData } from "../../assets/data/solutionPoint";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const Solution = () => {

    const navigate = useNavigate();

    const handleClickButtonContact = () => {
        const url = `https://web.whatsapp.com/send?phone=+6285811539501`;
        window.open(url)
    };

    return (

        <SolutionLayout>

            <div id="solution-title-content">
                <Container>
                    <Row>
                        <Col xs={12} xl={{ span: 8, offset: 2 }}>
                            <h1>
                                Driving  <span>Sustainable</span> Change with Catalyzon Solutions
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xl={{ span: 6, offset: 3 }}>
                            <p>
                                We collaborate closely with our clients to understand their unique needs and develop sustainable, eco-friendly solutions.
                            </p>
                        </Col>
                    </Row>
                    <Row className="btn-additional">
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button href="#partner-content" className="btn-chooseus">
                                Why Choose Us
                            </Button>
                        </Col>
                        <Col xs={6} xl={6} className="d-flex justify-content-start">
                            <Button onClick={handleClickButtonContact} className="btn-contactus">
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="card-solution-content">
                <Container>
                    <Row>
                        {
                            SolutionsCollectionData.Collections.map((solution) => {
                                return (
                                    <Col xs={12} xl={6} className="card-solution-describe" key={solution.id}>
                                        <Card>
                                            <Card.Img variant="top" className="solution-icon" src={solution.properties.icon} />
                                            <Card.Body>
                                                <Card.Title>{solution.properties.title}</Card.Title>
                                                <Card.Text>
                                                    {solution.properties.decription}
                                                </Card.Text>
                                                <Card.Link onClick={() => navigate(`/solution/detail/${solution.id}`)}>See Solution</Card.Link>
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
                    <Row>
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
                                    <Col xs={12} xl={3} key={solution.id} className="point-describe">
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