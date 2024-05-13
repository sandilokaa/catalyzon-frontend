import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Row,
    Col,
    Container,
    Image,
    Button,
    Card
} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FacilitiesCollectionData } from "../../assets/data/facilities";
import { SolutionsCollectionData } from "../../assets/data/solutions";
import { MediaCollectionData } from "../../assets/data/media";

import HomeLayout from "../../layouts/home/HomeLayout";
import MarqueeClient from "../../components/marquee/Client";
import CircularEconomy from "../../components/outlook/CircularEconomy";
import RenewableEnergy from "../../components/outlook/RenewableEnergy";
import ClimateEmpowerment from "../../components/outlook/ClimateEmpowerment";
import DigitalTransformation from "../../components/outlook/DigitalTransformation";
import AwardsRecognitions from "../../components/award/AwardComponent";
import SDGSDescribe from "../../components/sdgs/SDGSDescribe";
import ImpactCard from "../../components/impact/ImpactCard";

import SearchImpactIcon from "../../assets/images/search-impact-icon.png";

import "../../assets/css/home.css";
import "../../assets/css/swiper.css";
import "../../assets/css/responsive.css";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {

    const navigate = useNavigate();

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
                <div className="background-main-content"></div>
                <Container className="heading-title">
                    <div className="head-title-main-content">
                        <Row className="title-one">
                            <Col xs={12} xl={12}>
                                <h1>Empowering Businesses for Environmental Improvement</h1>
                            </Col>
                        </Row>
                        <Row className="title-two">
                            <Col xs={12} xl={12}>
                                <h5>Your Movement Towards Sustainability of Businesses Starts Here</h5>
                            </Col>
                        </Row>
                        <Row className="title-three">
                            <Col xs={12} xl={8}>
                                <h5>We are dedicated to advancing sustainability in business through comprehensive solutions,
                                    encompassing decarbonization projects and digital innovations. Our approach involves
                                    thorough analysis of customer requirements to effectively reduce emissions throughout their operations.
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} xl={2}>
                                <Button className="btn-solution" onClick={() => navigate('/solution')}>
                                    Our Solution
                                </Button>
                            </Col>
                            <Col xs={6} xl={2}>
                                <Button className="btn-explore" href="#vision-missions-content">
                                    Explore Now
                                </Button>
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

            <div id="awards-recognitions-content">
                <Container>
                    <Row className="awards-recognitions-title">
                        <Col xs={12} xl={9}>
                            <h1>Our awards & recognitions</h1>
                        </Col>
                        <Col xs={12} xl={3}>
                            <p>Find out what awards and recognitisions we are.</p>
                        </Col>
                    </Row>
                    <AwardsRecognitions />
                </Container>
            </div>

            <div id="sdgs-title-content">
                <div className="sdgs-title-background"></div>
                <Container>
                    <Row>
                        <Col xs={12} xl={12}>
                            <h1>Catalyzon advances global inclusion, sustainability, and growth.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xl={{ span: 8, offset: 2 }}>
                            <p>We are deeply committed to advancing the United Nations
                                Sustainable Development Goals (SDGs) through waste-to-energy solutions.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} xl={6} className="d-flex justify-content-end">
                            <Button className="btn-sdgs-title-solutions" onClick={() => navigate('/solution')}>
                                View Solutions
                            </Button>
                        </Col>
                        <Col xs={6} xl={6} className="d-flex justify-content-start">
                            <Button className="btn-sdgs-title-learn-more">
                                Learn More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="sdgs-describe-content">
                <Container>
                    <SDGSDescribe />
                </Container>
            </div>

            <div id="impact-content">
                <Container>
                    <Row className="impact-title-describe">
                        <Col xs={12} xl={5}>
                            <h1>Since 2022 the Catalyzon Program has had an Impact in Indonesia</h1>
                            <p>See How Catalyzon Impacts 15 Clients and Partners. </p>
                            <div className="btn-see-impact">
                                <Image className="search-icon-impact" src={SearchImpactIcon} alt="search-impact-icon" /> <span>See Catalyzon Impact Through 2024</span>
                            </div>
                        </Col>
                        <ImpactCard />
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

            <div id="media-content">
                <Container>
                    <Row>
                        <Col xs={12} xl={12}>
                            <h1>WE PROUD OF</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} xl={{ span: 4, offset: 4 }}>
                            <p>Our media who have covered our results and achievements so far.</p>
                        </Col>
                    </Row>
                    <Row className="media-card">
                        {
                            MediaCollectionData.Collections.map((media) => {
                                return (
                                    <Col xs={12} xl={3} key={media.id} className="media-describe">
                                        <Card className="border-0">
                                            <Card.Img className="media-image" variant="top" src={media.properties.image} alt={media.properties.alt} />
                                            <Card.Body>
                                                <Card.Title>{media.properties.title}</Card.Title>
                                                <Card.Link href={media.properties.link} target="_blank" rel="noopener noreferrer">Read More</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

        </HomeLayout>

    );

};

export default Home;