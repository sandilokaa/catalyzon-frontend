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
                description: 'Our Waste Management Service is an integral part of our commitment to advancing sustainability in business. This service is designed to help organizations manage their waste effectively and sustainably, ensuring minimal environmental impact.',
                alt: "Waste Management Service Image",
                link: '/solution/waste-management-service'
            }
        },
        {
            type: "Solutions",
            id: "2",
            properties:
            {
                image: SolutionTwoImage,
                title: "Waste to Energy Project",
                description: 'Our Waste to Energy Project is a pivotal element of our commitment to advancing sustainability in business. This project focuses on transforming waste materials into valuable energy resources, thereby reducing environmental impact and promoting resource efficiency.',
                alt: "Waste to Energy Project Image",
                link: '/solution/waste-to-energy-project'
            }
        },
        {
            type: "Solutions",
            id: "3",
            properties:
            {
                image: SolutionThreeImage,
                title: "Event, Training, and Community Development",
                description: 'Our Event, Training, and Community Development Service is an essential part of our commitment to advancing sustainability in business. This service is designed to empower businesses and communities through educational initiatives, engagement events, and development programs.',
                alt: "Training and Community Development Image",
                link: '/solution/event-training-community-development'
            }
        },
        {
            type: "Solutions",
            id: "4",
            properties:
            {
                image: SolutionFourImage,
                title: "Digital Decarbonization",
                description: 'Our Digital Decarbonization Service is a critical component of our commitment to advancing sustainability in business. This service leverages cutting-edge digital technologies to help organizations reduce their carbon footprint and achieve their decarbonization goals.',
                alt: "Environmental & Energy Consulting Image",
                link: '/solution/digital-decarbonization'
            }
        }
    ]
};