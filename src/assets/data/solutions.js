import SolutionOneImage from "../images/service-one.png"; 
import SolutionTwoImage from "../images/service-two.png"; 
import SolutionThreeImage from "../images/service-three.png"; 
import SolutionFourImage from "../images/service-four.png"; 

export const SolutionsCollectionData = {
    "type": "SolutionsCollection",
    "Collections": [
        {
            type: "Solutions",
            id: "1",
            properties:
            {
                image: SolutionOneImage,
                title: "Waste Management Service",
                alt: "Waste Management Service Image"
            }
        },
        {
            type: "Solutions",
            id: "2",
            properties:
            {
                image: SolutionTwoImage,
                title: "Waste to Energy Project",
                alt: "Waste to Energy Project Image"
            }
        },
        {
            type: "Solutions",
            id: "3",
            properties:
            {
                image: SolutionThreeImage,
                title: "Training and Community Development",
                alt: "Training and Community Development Image"
            }
        },
        {
            type: "Solutions",
            id: "4",
            properties:
            {
                image: SolutionFourImage,
                title: "Digital Decarbonization",
                alt: "Environmental & Energy Consulting Image"
            }
        }
    ]
};