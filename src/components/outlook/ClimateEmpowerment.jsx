import React from "react";
import {
    Image,
    Button
} from "react-bootstrap";

import ArrowButton from "../../assets/images/arrow-button.png";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const ClimateEmpowerment = () => {

    return (

        <>
            <h5>Our Missions</h5>
            <p>Developing waste community through education, empowerment, and climate action movement in a sustainable ecosystem.</p>
            <Button> about us <Image src={ArrowButton} /> </Button>
        </>

    );

};

export default ClimateEmpowerment;