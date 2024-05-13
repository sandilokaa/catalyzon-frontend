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

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const Solution = () => {

    const navigate = useNavigate();

    return (

        <SolutionLayout>

            <div id="solution-title-content">
                <Container>
                    <Row>
                        <Col xs={12} xl={{ span: 8, offset: 2 }}>
                            <h1>
                                Driving  <span>Sustainable</span> Change with Catalyzon Premium Solutions
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xl={{ span: 6, offset: 3 }}>
                            <p>
                                We provide the best quality products through well process control and laboratory tested.
                            </p>
                        </Col>
                    </Row>
                    <Row className="btn-additional">
                        <Col xs={6} xl={6} className="d-flex justify-content-end btn-aboutus">
                            <Button>
                                About Us
                            </Button>
                        </Col>
                        <Col xs={6} xl={6} className="d-flex justify-content-start btn-contactus">
                            <Button>
                                Contact Us
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="partner-content">
                <Container>
                    <Row>
                        <Col xs={12} xl={7}>
                            <h1>Why Should You Partner?</h1>
                        </Col>
                        <Col xs={12} xl={5}>
                            <p>
                                Catalyzon is a trusted partner in driving curiosity, offering
                                innovative and sustainable solutions through a collaborative partnership approach.
                            </p>
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
                                            <Card.Img variant="top" className="solution-icon" src={solution.properties.image}/>
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

        </SolutionLayout>

    );

};

export default Solution;