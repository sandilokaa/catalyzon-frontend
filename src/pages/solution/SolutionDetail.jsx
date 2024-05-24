import React, { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Image
} from "react-bootstrap";
import AOS from 'aos';

import { useLocation } from "react-router-dom";

import { SolutionsDetailData } from "../../assets/data/solutionDetail";

import SolutionLayout from "../../layouts/solution/SolutionLayout";
import ModalContact from "../../components/modal/ModalContact";

import 'aos/dist/aos.css';
import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const SolutionDetail = () => {

    const params = useLocation();

    const id = (params.pathname).split('/')[3];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        AOS.init();
    }, []);

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
                                        <Col xs={12} xl={6} className="solution-head-main" data-aos="fade-right">
                                            <h6>Our Solution</h6>
                                            <h1>{solution.properties.title}</h1>
                                            <h5>{solution.properties.decription}</h5>
                                            <Button className="btn-learn-more" href="#solution-detail-product-content">
                                                Learn More
                                            </Button>
                                        </Col>
                                        <Col xs={12} xl={6} className="d-flex justify-content-end" data-aos="fade-left">
                                            <Image src={solution.properties.mainImage} alt={solution.properties.alt} style={{ borderRadius: '30px', height: '100%', width: '90%' }} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            {solution.properties.products.map((product, index) => {

                                const isLastProduct = index === solution.properties.products.length - 1;

                                return (
                                    <div id="solution-detail-product-content" key={product.id}>
                                        <Container>
                                            <Row className="product-title">
                                                <Col xs={12} xl={{ span: 8, offset: 2 }}
                                                    data-aos="fade-up" 
                                                    data-aos-anchor-placement="top-bottom"
                                                >
                                                    <h1>{product.question}</h1>
                                                </Col>
                                            </Row>
                                            <Row className="product-detail">
                                                <Col xs={12} xl={6} data-aos="fade-right">
                                                    <Image src={product.productImage} />
                                                </Col>
                                                <Col xs={12} xl={6} className="product-detail-head">
                                                    <h3 
                                                        data-aos="fade-up" 
                                                        data-aos-anchor-placement="top-bottom"
                                                    >
                                                        {product.productName}
                                                    </h3>
                                                    <h5 
                                                        data-aos="fade-up" 
                                                        data-aos-anchor-placement="top-bottom"
                                                    >
                                                        {product.productDescribe}
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row className="product-title-benefit">
                                                <Col 
                                                    xs={12} xl={{ span: 8, offset: 2 }} 
                                                    data-aos="fade-up" 
                                                    data-aos-anchor-placement="top-bottom"
                                                >
                                                    <h1>What benefits do you gain from the products we offer in our solutions?</h1>
                                                </Col>
                                            </Row>
                                            <Row className="product-excellence">
                                                {product.excellence.map((excellenceDetail) => (
                                                    <Col xs={12} xl={6} key={excellenceDetail.id} className="product-excellence-card" data-aos="zoom-in-up">
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
                                        {!isLastProduct && product.excellence.length > 0 && (
                                            <div className="consultant-content" data-aos="fade-right">
                                                <Container>
                                                    <Row>
                                                        <Col xs={12} xl={6}>
                                                            <h1>Enchance Your Sustainability Story with {product.productName}.</h1>
                                                        </Col>
                                                        <Col xs={12} xl={6}>
                                                            <Button className="btn-consultation" onClick={handleShow}>
                                                                Free Consultation
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                    <ModalContact
                                                        show={show}
                                                        handleClose={handleClose}
                                                    />
                                                </Container>
                                            </div>
                                        )}
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