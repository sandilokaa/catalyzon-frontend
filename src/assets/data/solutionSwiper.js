import SolutionOneImage from "../images/background/solution-one.png"; 
import SolutionTwoImage from "../images/background/solution-two.png"; 
import SolutionThreeImage from "../images/background/solution-three.png"; 
import SolutionFourImage from "../images/background/solution-four.png"; 

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
                alt: "Waste Management Service Image",
                link: '/solution/detail/1'
            }
        },
        {
            type: "Solutions",
            id: "2",
            properties:
            {
                image: SolutionTwoImage,
                title: "Waste to Energy Technology",
                alt: "Waste to Energy Technology Image",
                link: '/solution/detail/2'
            }
        },
        {
            type: "Solutions",
            id: "3",
            properties:
            {
                image: SolutionThreeImage,
                title: "Event, Training, and Community Development",
                alt: "Training and Community Development Image",
                link: '/solution/detail/3'
            }
        },
        {
            type: "Solutions",
            id: "4",
            properties:
            {
                image: SolutionFourImage,
                title: "Digital Decarbonization Solution",
                alt: "Environmental & Energy Consulting Image",
                link: '/solution/detail/4'
            }
        }
    ]
};