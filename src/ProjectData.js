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
import FIGMALOGO from "./assets/FIGMALOGO.svg"
import JSLOGO from "./assets/js-svgrepo-com.svg"
import POSTMANLOGO from "./assets/postman-icon-svgrepo-com.svg"
import CapstoneBook from "./assets/d9a78b74-79ba-481e-af04-3269ec6767ba.jpg"
import RESEARCHCONGRESSPIC from "./assets/researchcongresspic.jpg"
import CodingPic2 from "./assets/f5f575e3-8c43-4bab-afaa-c3bab8df9c7f.jpg"
import MOBILEDEVELOPEROFTHEYEAR from "./assets/mobiledeveloperoftheyear.png"
import DEFENSEPIC from "./assets/849d6138-dc2b-434b-8a22-71fd46ba262f.jpg"
import CapstoneDefense from "./assets/8ba1b397-0713-4350-a2ea-7e3fe51fcebd (1).jpg"
import IOTPIC from "./assets/ba407c9e-c7c0-4bd1-a452-5d546076daa5.jpg"
import BESTCAPSTONECERTIFICATE from "./assets/bestcapstone.png"
import BESTMOBILEDEVELOPERPDF from  "././assets/cert/bestmobiledev.pdf"
import  UPWORKLOGO from  "./assets/UPWORKLOGO.svg"
import JOBSTREETLOGO from "./assets/JOBSTREETLOGO.svg"
import FASTAPILOGO from "./assets/FAST-API-LOGO.svg"
import MUSICPLAYERLOGO from "./assets/MUSICPLAYERLOGO.png"
import FRESHGROUPLOGO from "./assets/FRESHGROUPLOGO.svg"
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
        id: 3,
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
        Project_URL: "https://4ps-monitoring.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/PudocWestChildrenMonitoring",
        IsMobileApp: false,
    },
    {
        id: 7,
        Logo: MUSICPLAYERLOGO,
        Project_Name: "Music-Player",
        Description: "A simple music player for android app that uses spotify api",
        Tech_Stack: [
            REACTICON, EXPOICON,SUPABASE,SHADCNUILOGO
        ],
        Project_URL: "https://music-player-web-sigma.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/music-player-web",
        IsMobileApp: false,
    },

    {
        id: 6,
        Logo: FRESHGROUPLOGO,
        Project_Name: "FreshGroup",
        Description: "A website clusters first-year students using unsupervised learning to help schools personalize support and boost outcomes.",
        Tech_Stack: [
            REACTICON,TYPESCRIPTLOGO, TAILWINDLOGO,SUPABASE,SHADCNUILOGO,FASTAPILOGO
        ],
        Project_URL: "https://freshgroup.vercel.app/login",
        Github_Link: "https://github.com/itsmeBani/FRESHGROUP",
        IsMobileApp: false,
    },
    // {
    //     id: 5,
    //     Logo: TERMINALABLELOGO,
    //     Project_Name: "Terminalable",
    //     Description: "OJT Documentation with image and description attachment, exportable as PDF ",
    //     Tech_Stack: [
    //         REACTICON, FIREBASELOGO, TAILWINDLOGO
    //     ],
    //     Project_URL: "https://terminalable.vercel.app/",
    //     Github_Link: "https://github.com/itsmeBani/DYIPSPOT",
    //     IsMobileApp: false,
    // },
    {
        id: 2,
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
   
]


export const SocialMediaLink = [
    {href: 'https://web.facebook.com/jiovani.fabro.6/', src: FACEBOOKLOGO, alt: 'Facebook'},
    {href: 'https://github.com/itsmeBani', src: GITHUBLOGO, alt: 'Github'},
    {href: 'https://drive.google.com/file/d/1Ttj4G4KMB2w1K4jXHyMp_ItUYaDStcCV/view?usp=sharing', src: CVLOGO, alt: 'CV'},
    {href: 'https://www.linkedin.com/in/jiovani-fabro-97953a359/', src: LINKEDINLOGO, alt: "LinkedIn"},
    {href: 'https://www.upwork.com/freelancers/~012ccca59257d34b4b?mp_source=share', src: UPWORKLOGO, alt: "UPWORKLOGO"},
    {href: 'https://ph.jobstreet.com/profile/jiovani-fabro-4n0ScNYqKr', src: JOBSTREETLOGO, alt: "JOBSTREETLOGO"}

];

export const Technology = [
    JSLOGO,
    HTMLLOGO,
    CSSLOGO,
    REACTICON,
    TSLOGO,
    TAILWINDLOGO,
    EXPOICON,
    FIREBASELOGO,
    SUPABASE,
    PHPLOGO,
    GITHUBLOGO,
    MATERIALTAILWINDLOGO,
    NATIVE,
    SHADCNUILOGO,
    FIGMALOGO,
    POSTMANLOGO

]


export const EducationalAttainment = [
    {
        name: "Ilocos Sur Polytechnic State College",
        description: "Earned my Bachelor of Science in Information Technology (BSIT), where I gained strong academic knowledge and further advanced my skills through self-taught software development. During my final year, I was honored with the Best Capstone Project Award and recognized as the Best Mobile Developer of the Year, highlighting my commitment to innovation and excellence in mobile application development.",
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
];


export const PhotoCollageData = [
    CapstoneBook,

    CodingPic2,
    DEFENSEPIC,
    RESEARCHCONGRESSPIC,
    CapstoneDefense,
    IOTPIC
]


export const CertificateData = [
    {
        url: MOBILEDEVELOPEROFTHEYEAR,
        fileDownload: BESTMOBILEDEVELOPERPDF,
        description:"BEST_MOBILE_DEVELOPER"
    },
    {
        url:BESTCAPSTONECERTIFICATE,
        fileDownload: BESTMOBILEDEVELOPERPDF,
        description:"BEST_CAPSTONE_PROJECT"
    }
]