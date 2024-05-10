import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Image,
    Button
} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FacilitiesCollectionData } from "../../assets/data/facilities";
import { SolutionsCollectionData } from "../../assets/data/solutions";

import HomeLayout from "../../layouts/home/HomeLayout";
import MarqueeClient from "../../components/marquee/Client";
import CircularEconomy from "../../components/outlook/CircularEconomy";
import RenewableEnergy from "../../components/outlook/RenewableEnergy";
import ClimateEmpowerment from "../../components/outlook/ClimateEmpowerment";
import DigitalTransformation from "../../components/outlook/DigitalTransformation";

import BackgroundImage from "../../assets/images/bg-main-content.png";
import TitleVector from "../../assets/images/o-vector.png";

import "../../assets/css/style.css";
import "../../assets/css/swiper.css";
import "../../assets/css/responsive.css";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {

    const [selectedOutlookButton, setSelectedOutlookButton] = useState(null);

    useEffect(() => {
        if (selectedOutlookButton === null) {
            setSelectedOutlookButton('Circular Economy');
        }
    }, [selectedOutlookButton]);

    const showOutlookDetail = (outlookName) => {
        setSelectedOutlookButton(outlookName);
    };

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
                            <Col xs={12} xl={5}>
                                <h1>saving</h1>
                            </Col>
                            <Col xs={12} xl={7}>
                                <Image className="main-title-vector" src={TitleVector} />
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

            <div id="vision-missions-content">
                <Container>
                    <Row className="vision-missions-describe">
                        <Col xs={12} xl={5}>
                            <h5>Our Vision</h5>
                            <p>We accelerate sustainable net zero emissions through circular economy, renewable energy, climate-empowerment, and digital transformation</p>
                        </Col>
                        {selectedOutlookButton && (
                            <Col xs={12} xl={4}>
                                {selectedOutlookButton === 'Circular Economy' && (
                                    <CircularEconomy />
                                )}
                                {selectedOutlookButton === 'Renewable Energy' && (
                                    <RenewableEnergy />
                                )}
                                {selectedOutlookButton === 'Climate Empowerment' && (
                                    <ClimateEmpowerment />
                                )}
                                {selectedOutlookButton === 'Digital Transformation' && (
                                    <DigitalTransformation />
                                )}
                            </Col>
                        )}
                        <Col xs={12} xl={3}>
                            <Row className="selected-button-outlook">
                                <Col xs={12} xl={12} className="d-flex justify-content-end">
                                    <Button
                                        onClick={() => showOutlookDetail('Circular Economy')}
                                        className={selectedOutlookButton === 'Circular Economy' ? 'active' : ''}
                                    >
                                        <span>01</span> Circular Economy
                                    </Button>
                                </Col>
                                <Col xs={12} xl={12} className="d-flex justify-content-end">
                                    <Button
                                        onClick={() => showOutlookDetail('Renewable Energy')}
                                        className={selectedOutlookButton === 'Renewable Energy' ? 'active' : ''}
                                    >
                                        <span>02</span> Renewable Energy
                                    </Button>
                                </Col>
                                <Col xs={12} xl={12} className="d-flex justify-content-end">
                                    <Button
                                        onClick={() => showOutlookDetail('Climate Empowerment')}
                                        className={selectedOutlookButton === 'Climate Empowerment' ? 'active' : ''}
                                    >
                                        <span>03</span> Climate Empowerment
                                    </Button>
                                </Col>
                                <Col xs={12} xl={12} className="d-flex justify-content-end">
                                    <Button
                                        onClick={() => showOutlookDetail('Digital Transformation')}
                                        className={selectedOutlookButton === 'Digital Transformation' ? 'active' : ''}
                                    >
                                        <span>04</span> Digital Transformation
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="solutions-facilities-content">
                <Container>
                    <Row className="solutions-facilities-describe">
                        <Col xs={12} xl={6} className="solutions-content">
                            <Row>
                                <Col xs={12} xl={6}>
                                    <Button>
                                        solutions
                                    </Button>
                                    <h5>Our solutions.</h5>
                                    <h4>What we solutions.</h4>
                                    <p>We provide the best quality products through well process control and laboratory tested.</p>
                                </Col>
                                <Col xs={12} xl={6}>
                                    <Swiper
                                        spaceBetween={20}
                                        slidesPerView={2}
                                        direction="vertical"
                                        scrollbar={{ draggable: true }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        style={{ height: '325px' }}
                                        className="swiper"
                                    >
                                        {
                                            SolutionsCollectionData.Collections.map((solutions) => {
                                                return (
                                                    <SwiperSlide key={solutions.id} className="swiper-slide">
                                                        <Image src={solutions.properties.image} alt={solutions.properties.alt} />
                                                        <div className="overlay">{solutions.properties.title}</div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} xl={6} className="facilities-content">
                            <Row>
                                <Col xs={12} xl={6}>
                                    <Button>
                                        facilities
                                    </Button>
                                    <h5>Our facilities.</h5>
                                    <h4>What we facilities.</h4>
                                    <p>We provide the best facitilies to assist you in facing this solution.</p>
                                </Col>
                                <Col xs={12} xl={6}>
                                    <Swiper
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                    >
                                        {
                                            FacilitiesCollectionData.Collections.map((facilities) => {
                                                return (
                                                    <SwiperSlide key={facilities.id} className="swiper-slide">
                                                        <Image src={facilities.properties.image} alt={facilities.properties.alt} className="image-with-overlay" />
                                                        <div className="overlay">{facilities.properties.title}</div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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
                        <MarqueeClient />
                    </Marquee>
                </Container>
            </div>

        </HomeLayout>

    );

};

export default Home;