import React from "react";
import {
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";
import Marquee from "react-fast-marquee";

import HomeLayout from "../../layouts/home/HomeLayout";
import MarqueeClient from "../../components/marquee/Client";

import BackgroundImage from "../../assets/images/bg-main-content.png";
import TitleVector from "../../assets/images/o-vector.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Home = () => {

    return (

        <HomeLayout>

            <div id="main-content">
                <div className="background-main-content" src={BackgroundImage}></div>
                <Container className="heading-title">
                    <div className="head-title-main-content">
                        <Row className="title-one">
                            <Col xs={12} xl={3}>
                                <h5>Movement towards a sustainable prosperity</h5>
                            </Col>
                        </Row>
                        <Row className="title-two">
                            <Col xs={12} xl={6}>
                                <h1>saving</h1>
                            </Col>
                            <Col xs={12} xl={6}>
                                <Image className="main-title-vector" src={TitleVector}/>
                                <h1>nature </h1>
                            </Col>
                        </Row>
                        <Row className="title-three">
                            <Col xs={12} xl={4}>
                                <h5>We are on a mission to provide a comprehensive waste-to-energy solution.</h5>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div id="client-content">
                <Container>
                    <h5>Trusted by</h5>
                    <Marquee
                        className="client-logo"
                        speed={50}
                        gradient={true}
                    >
                        <MarqueeClient/>
                    </Marquee>
                </Container>
            </div>

        </HomeLayout>

    );

};

export default Home;