import React from "react";

import NavbarSolution from "../../components/navbar/NavbarSolution";
import FooterComponent from "../../components/footer/Footer";

const SolutionLayout = ({ children }) => {
    return (
        <>
            <div>
                <NavbarSolution />
            </div>
            <div>
                {children}
            </div>
            <div>
                <FooterComponent/>
            </div>
        </>
    );
};

export default SolutionLayout;