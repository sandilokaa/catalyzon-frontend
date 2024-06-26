import React from "react";

import NavbarGeneral from "../../components/navbar/Navbar";
import FooterComponent from "../../components/footer/Footer";

const HomeLayout = ({ children }) => {
    return (
        <>
            <div>
                <NavbarGeneral />
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

export default HomeLayout;