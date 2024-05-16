import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Image
} from "react-bootstrap";

import { useLocation } from "react-router-dom";

import { SolutionsDetailData } from "../../assets/data/solutionDetail";

import SolutionLayout from "../../layouts/solution/SolutionLayout";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const SolutionDetail = () => {

    const params = useLocation();

    const id = (params.pathname).split('/')[3];

    return (

        <SolutionLayout>
            {SolutionsDetailData.Collections
                .filter((solution) => solution.id === id)
                .map((solution) => {
                    return (
                        <>
                            <div id="solution-detail-title-content" key={solution.id}>
                                <Container>
                                    <Row>
                                        <Col xs={12} xl={6} className="solution-head-main">
                                            <h6>Our Solution</h6>
                                            <h1>{solution.properties.title}</h1>
                                            <h5>{solution.properties.decription}</h5>
                                            <Button className="btn-learn-more">
                                                Learn More
                                            </Button>
                                        </Col>
                                        <Col xs={12} xl={6} className="d-flex justify-content-end">
                                            <Image src={solution.properties.mainImage} alt={solution.properties.alt} style={{borderRadius:'30px', height: '100%', width: '90%'}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            {solution.properties.products.map((product) => {

                                return (
                                    <div id="solution-detail-product-content" key={product.id}>
                                        <Container>
                                            <Row className="product-title">
                                                <Col xs={12} xl={{ span: 8, offset: 2 }}>
                                                    <h1>{product.question}</h1>
                                                </Col>
                                            </Row>
                                            <Row className="product-detail">
                                                <Col xs={12} xl={6}>
                                                </Col>
                                                <Col xs={12} xl={6}>
                                                    <h3>{product.productName}</h3>
                                                    <h5>{product.productDescribe}</h5>
                                                </Col>
                                            </Row>
                                            <Row className="product-title-benefit">
                                                <Col xs={12} xl={{ span: 8, offset: 2 }}>
                                                    <h1>What benefits do you gain from the products we offer in our solutions?</h1>
                                                </Col>
                                            </Row>
                                            <Row className="product-excellence">
                                                {product.excellence.map((excellenceDetail) => (
                                                    <Col xs={12} xl={6} key={excellenceDetail.id} className="product-excellence-card">
                                                        <Card>
                                                            <Card.Body>
                                                                <Card.Title>{excellenceDetail.title}</Card.Title>
                                                                <Card.Text>
                                                                    {excellenceDetail.description}
                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Container>
                                    </div>
                                )
                            })}
                        </>
                    )
                })
            }

        </SolutionLayout >

    );

};

export default SolutionDetail;