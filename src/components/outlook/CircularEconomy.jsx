import React from "react";
import {
    Image,
    Button
} from "react-bootstrap";

import ArrowButton from "../../assets/images/arrow-button.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const CircularEconomy = () => {

    return (

        <>
            <h5>Our Missions</h5>
            <p>Providing a waste management service that enables  company to manage waste efficiently and responsible.</p>
            <Button> about us <Image src={ArrowButton} /> </Button>
        </>

    );

};

export default CircularEconomy;