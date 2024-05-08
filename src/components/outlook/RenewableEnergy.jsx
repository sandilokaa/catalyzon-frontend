import React from "react";
import {
    Image,
    Button
} from "react-bootstrap";

import ArrowButton from "../../assets/images/arrow-button.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const RenewableEnergy = () => {

    return (

        <>
            <h5>Our Missions</h5>
            <p>Deploying waste to energy project to convert waste into the best quality of renewable energy and high-value materials.</p>
            <Button> about us <Image src={ArrowButton} /> </Button>
        </>

    );

};

export default RenewableEnergy;