import React from "react";
import {
    Image,
    Button
} from "react-bootstrap";

import ArrowButton from "../../assets/images/arrow-button.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const DigitalTransformation = () => {

    return (

        <>
            <h5>Our Missions</h5>
            <p>We help companies adopt environmentally friendly business practices to reduce their negative impact on the environment.</p>
            <Button> about us <Image src={ArrowButton} /> </Button>
        </>

    );

};

export default DigitalTransformation;