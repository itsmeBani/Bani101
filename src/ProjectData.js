import DYIPSPOTLOGO from "./assets/dyipSpotLogo.png"
import REACTICON from "./assets/react.svg"
import EXPOICON from "./assets/EXPOICON.svg"
import FIREBASELOGO from "./assets/FIREBASELOGO.svg"
import TERMINALABLELOGO from "./assets/TERMINALLOGO.svg"
import PHPLOGO from "./assets/PHPLOGO.svg"
import TAILWINDLOGO from "./assets/TAILWINDLOGO.svg"
import VITE from "./../public/vite.svg"
import FACEBOOKLOGO from "./assets/FACEBOOKLOGO.svg";
import INSTAGRAMLOGO from "./assets/INSTAGRAMLOGO.svg";
import GITHUBLOGO from "./assets/GITHUBLOGO.svg";
import CVLOGO from "./assets/CVLOGO.svg";
import SUPABASE from './assets/supabase.svg'
import SAMSANGTECHLOGO from "./assets/SAMSANGTECHLOGO.svg"
import TSLOGO from "./assets/TSLOGO.svg"
import SHADCNUILOGO from "./assets/shadcnLogo.svg"
import NATIVE from "./assets/nativeLogo.svg"
import HTMLLOGO from "./assets/html-5-svgrepo-com.svg"
import CSSLOGO from "./assets/css-svgrepo-com.svg"
import MATERIALTAILWINDLOGO from "./assets/MATERIALTAILWINDLOGO.svg"
import LINKEDINLOGO from "./assets/linkedin-svgrepo-com.svg"
import TYPESCRIPTLOGO from "./assets/TSLOGO.svg"

export const ProjectData = [
    {
        id: 1,
        Logo: DYIPSPOTLOGO,
        Project_Name: "DyipSpot",
        Description: "A real-time jeep tracking app that monitors both jeep and passenger locations",
        Tech_Stack: [
            REACTICON, EXPOICON, FIREBASELOGO
        ],
        Project_URL: "",
        Github_Link: "https://github.com/itsmeBani/DYIPSPOT",
        IsMobileApp: true,
    },
    {
        id: 2,
        Logo: TERMINALABLELOGO,
        Project_Name: "Terminalable",
        Description: "OJT Documentation with image and description attachment, exportable as PDF ",
        Tech_Stack: [
            REACTICON, FIREBASELOGO, TAILWINDLOGO
        ],
        Project_URL: "https://terminalable.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/DYIPSPOT",
        IsMobileApp: false,
    },
    {
        id: 3,
        Logo: SAMSANGTECHLOGO,
        Project_Name: "SAMSANG TECH",
        Description: "A simple app where users can browse and buy gadgets easily ",
        Tech_Stack: [
            REACTICON, PHPLOGO, TAILWINDLOGO
        ],
        Project_URL: "https://shop-ruddy-eta.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/shop",
        IsMobileApp: false,
    },
    {
        id: 4,
        Logo: VITE,
        Project_Name: "Pudoc West Nutrition Monitoring",
        Description: "An app designed to help monitor and manage the nutrition status of individuals in Pudoc West",
        Tech_Stack: [
            REACTICON, FIREBASELOGO, TAILWINDLOGO, SUPABASE
        ],
        Project_URL: "https://pudoc-west-children-monitoring.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/PudocWestChildrenMonitoring",
        IsMobileApp: false,
    },
    {
        id: 4,
        Logo: VITE,
        Project_Name: "4ps Monitoring",
        Description: "An app designed to help monitor and manage the 4ps member",
        Tech_Stack: [
            REACTICON, TYPESCRIPTLOGO, TAILWINDLOGO, SUPABASE, SHADCNUILOGO
        ],
        Project_URL: "https://pudoc-west-children-monitoring.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/PudocWestChildrenMonitoring",
        IsMobileApp: false,
    }

]


export const SocialMediaLink = [
    {href: 'https://web.facebook.com/jiovani.fabro.6/', src: FACEBOOKLOGO, alt: 'Facebook'},
    {href: '#', src: INSTAGRAMLOGO, alt: 'Instagram'},
    {href: 'https://github.com/itsmeBani', src: GITHUBLOGO, alt: 'Github'},
    {href: '#', src: CVLOGO, alt: 'CV'},
    {href: 'https://www.linkedin.com/in/jiovani-fabro-97953a359/', src: LINKEDINLOGO, alt: "LinkedIn"}

];


export const Technology = [
    REACTICON,
    TSLOGO,
    TAILWINDLOGO,
    EXPOICON,
    FIREBASELOGO,
    SUPABASE,
    PHPLOGO,
    GITHUBLOGO,
    MATERIALTAILWINDLOGO,
    HTMLLOGO,
    CSSLOGO,
    NATIVE,
    SHADCNUILOGO
]


export const EducationalAttainment = [
    {
        name: "Ilocos Sur Polytechnic State College",
        description: "Earned my Bachelor of Science in Information Technology (BSIT), where I not only gained academic knowledge but also pursued self-taught skills in software development.",
        major: "Bachelor of Science in Information Technology (BSIT",
        address: "",
        year: "2025",
        present: true
    },
    {
        name: "Tagudin National High School",
        description: "Completed my secondary education with a specialization in Electrical Installation and Maintenance (EIM).",
        major: "Electrical Installation and Maintenance (EIM)",
        address: "Quirino, Tagudin, Ilocos Sur",
        year: "2021",
        present: true
    },
    {
        name: "Tagudin Central School",
        description: "My academic journey began here, where I built essential skills in communication, collaboration, and curiosity that laid the groundwork for my future studies.",
        major: "Elementary Education",
        address: "Del Pilar, Tagudin, Ilocos Sur",
        year: "2016",
        present: true
    }
];
