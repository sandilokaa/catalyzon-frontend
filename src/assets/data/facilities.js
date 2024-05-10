import W2EImage from "../../assets/images/w2e.png";
import WasteTransportationImage from "../../assets/images/waste-transportation.png";
import CatalyzonCommunityImage from "../../assets/images/community.png";
import EndtoEndPlatformImage from "../../assets/images/e2e-platform.png"; 

export const FacilitiesCollectionData = {
    "type": "FacilitiesCollection",
    "Collections": [
        {
            type: "Facilities",
            id: "1",
            properties:
            {
                image: W2EImage,
                title: "W2E Center",
                alt: "W2E Center Image"
            }
        },
        {
            type: "Facilities",
            id: "2",
            properties:
            {
                image: WasteTransportationImage,
                title: "Waste Transportation",
                alt: "Waste Transportation Image"
            }
        },
        {
            type: "Facilities",
            id: "3",
            properties:
            {
                image: EndtoEndPlatformImage,
                title: "End-to-End Platform",
                alt: "End-to-End Platform Image"
            }
        },
        {
            type: "Facilities",
            id: "4",
            properties:
            {
                image: CatalyzonCommunityImage,
                title: "300+ Active Community",
                alt: "300+ Active Community Image"
            }
        }
    ]
};