import ProblemOneIcon from "../images/icon/problem-icon-one.png";
import ProblemTwoIcon from "../images/icon/problem-icon-two.png";
import ProblemThreeIcon from "../images/icon/problem-icon-three.png";

export const ProblemCollectionData = {
    "type": "ProblemCollection",
    "Collections": [
        {
            type: "Problem",
            id: "1",
            properties:
            {
                image: ProblemOneIcon,
                alt: "Problem One Image",
                title: "Effective Emission Reduction",
                description: "High-quality projects ensure verifiable reductions in greenhouse gas emissions, aiding in achieving global climate targets."
            }
        },
        {
            type: "Problem",
            id: "2",
            properties:
            {
                image: ProblemTwoIcon,
                alt: "Problem Two Image",
                title: "Support for Sustainable Development",
                description: "These projects benefit communities, protect biodiversity, and enhance air and water quality."
            }
        },
        {
            type: "Problem",
            id: "3",
            properties:
            {
                image: ProblemThreeIcon,
                alt: "Problem Three Image",
                title: "Building Credibility and Trust",
                description: "Adhering to international standards ensures transparency, attracts investment, and builds stakeholder trust."
            }
        },
    ]
};