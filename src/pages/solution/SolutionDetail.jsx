import React from "react";
import { useLocation } from "react-router-dom";

import { SolutionsCollectionData } from "../../assets/data/solutionPageData";

import SolutionLayout from "../../layouts/solution/SolutionLayout";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const SolutionDetail = () => {

    const params = useLocation();

    const id = (params.pathname).split('/')[3];

    return (

        <SolutionLayout>

            {SolutionsCollectionData.Collections
                .filter((solution) => solution.id === id)
                .map((solution) => {
                    return (
                        <div key={solution.id} style={{marginTop: '16%'}}>
                            <h1>{solution.properties.title}</h1>
                            <h1>{solution.properties.decription}</h1>
                        </div>
                    )
                })
            }

        </SolutionLayout>

    );

};

export default SolutionDetail;