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
import  TANSTACKLOGO from "./assets/TANSTACKLOGO.png"
import VERCELLOGO from "./assets/vercel-svgrepo-com.svg"
import VSCODELOGO from "./assets/vscode-svgrepo-com.svg"
import WEBSTORMLOGO from "./assets/webstorm-svgrepo-com.svg"
import MAPBOX from "./assets/MAPBOX.svg"
export const ProjectData = [
    {
        id: 1,
        Logo: DYIPSPOTLOGO,
        Project_Name: "DyipSpot",
        Description: "A real-time jeep tracking app that monitors both jeep and passenger locations",
        Tech_Stack: [REACTICON, EXPOICON, FIREBASELOGO,MAPBOX],
        Project_URL: "",
        Github_Link: "https://github.com/itsmeBani/DYIPSPOT",
        IsMobileApp: true,
        MobileAppProjectLink: "https://github.com/itsmeBani/DYIPSPOT",
        details: {
            keyFeatures: [
                "Built a real-time mobile application for tracking public jeeps using React Native, Expo, and Mapbox",
                "Implemented live GPS tracking so passengers can view the jeep's location, route, and estimated arrival time on an interactive map",
                "Enabled drivers to set custom routes and see nearby passengers based on real-time location data",
                "Used Firebase Authentication with Google OAuth for secure login and role-based access (driver/passenger)",
                "Implemented background location tracking for continuous updates even when the app is minimized",
                "Ensured real-time synchronization of route, location, and passenger data between drivers and commuters",

            ],
            images: []
        }
    },
    {
        id: 10,
        Logo: VITE,
        Project_Name: "Talkio",
        Description: "A real-time messaging app that lets users connect, chat, and share updates instantly with friends",
        Tech_Stack: [
            REACTICON, TYPESCRIPTLOGO, SHADCNUILOGO,SUPABASE,TANSTACKLOGO
        ],
        Project_URL: "https://talkio-xd2v.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/talkio",
        IsMobileApp: false,
        details: {
            keyFeatures: [
                "Developed a real-time chat application using Supabase Realtime for instant message delivery and synchronization.",
                "Enabled users to send and receive files such as images and PDFs with secure Supabase Storage integration.",
                "Implemented online presence tracking, typing indicators, and message read status for better engagement.",
                "Designed a responsive and modern chat UI using React and Tailwind CSS for seamless user interaction.",
                "Ensured data privacy and authentication through Supabase Auth, providing secure user sessions.",
                "Optimized real-time event handling to maintain consistent performance across devices and networks.",
            ],

            images: []
        }
    },
    {
        id: 2,
        Logo: VITE,
        Project_Name: "4Ps Monitoring System",
        Description: "A web application to track the educational status of 4Ps beneficiaries",
        Tech_Stack: [REACTICON, TYPESCRIPTLOGO, SUPABASE, SHADCNUILOGO, TANSTACKLOGO],
        Project_URL: "https://4ps-monitoring.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/PudocWestChildrenMonitoring",
        IsMobileApp: false,
        details: {
            keyFeatures: [
                "Built a web application to track the educational status of 4Ps (Pantawid Pamilyang Pilipino Program) beneficiaries, categorizing students as undergraduate, graduated, or stopped",
                "Implemented PDF export functionality for student records",
                "Used Supabase for storing and managing student records, enabling real-time data updates and retrieval",
                "Implemented secure login with Supabase Auth",
                "Designed a clean UI using Shadcn UI and TanStack Table for efficient filtering, sorting, and tracking of student statuses",

            ],
            images: []
        }
    },
    {
        id: 3,
        Logo: VITE,
        Project_Name: "Pudoc West Children Monitoring",
        Description: "A web-based application to track and monitor the nutritional status of children in Pudoc West",
        Tech_Stack: [REACTICON, FIREBASELOGO, TAILWINDLOGO, SUPABASE,MAPBOX],
        Project_URL: "https://pudoc-west-children-monitoring.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/PudocWestChildrenMonitoring",
        IsMobileApp: false,
        details: {
            keyFeatures: [
                "Built a web-based application to track and monitor the nutritional status of children in Pudoc West using ReactJS and Firebase Firestore",
                "Automatically determines the health status of each child (underweight, normal, or overweight) based on inputted height and weight",
                "Used Firebase Firestore to securely store and manage health records with real-time updates",
                "Integrated Google OAuth via Firebase Authentication for secure and simplified login",
            ],
            images: []
        }
    },
    {
        id: 4,
        Logo: MUSICPLAYERLOGO,
        Project_Name: "Music-Player",
        Description: "A music player for Android and Web, integrated with the Spotify API for browsing and streaming",
        Tech_Stack: [REACTICON, EXPOICON, SUPABASE, SHADCNUILOGO],
        Project_URL: "https://music-player-web-sigma.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/music-player-web",
        IsMobileApp: true,
        MobileAppProjectLink: "https://github.com/itsmeBani/music-player-react-native",
        details: {
            keyFeatures: [
                "Browse and stream Spotify music",
                "Android and Web support",
                "Playlist management and favorites",
                "User authentication and secure login"
            ],
            images: []
        }
    },
    {
        id: 5,
        Logo: FRESHGROUPLOGO,
        Project_Name: "FreshGroup",
        Description: "A website that clusters first-year students using unsupervised learning to help schools personalize support and boost outcomes",
        Tech_Stack: [REACTICON, TYPESCRIPTLOGO, TAILWINDLOGO, SUPABASE, SHADCNUILOGO, FASTAPILOGO],
        Project_URL: "https://freshgroup.vercel.app/login",
        Github_Link: "https://github.com/itsmeBani/FRESHGROUP",
        IsMobileApp: false,
        details: {
            keyFeatures: [
                "Student clustering using unsupervised learning",
                "Personalized support suggestions",
                "Admin dashboard with data visualization",
                "Real-time updates and analytics"
            ],
            images: []
        }
    },
    {
        id: 6,
        Logo: SAMSANGTECHLOGO,
        Project_Name: "SAMSANG TECH",
        Description: "A simple app where users can browse and buy gadgets easily",
        Tech_Stack: [REACTICON, PHPLOGO, TAILWINDLOGO],
        Project_URL: "https://shop-ruddy-eta.vercel.app/",
        Github_Link: "https://github.com/itsmeBani/shop",
        IsMobileApp: false,
        details: {
            keyFeatures: [
                "Browse gadgets and products",
                "Easy online purchase",
                "User-friendly interface",
                "Product filtering and sorting"
            ],
            images: []
        }
    }
];


export const SocialMediaLink = [
    {href: 'https://web.facebook.com/jiovani.fabro.6/', src: FACEBOOKLOGO, alt: 'Facebook'},
    {href: 'https://github.com/itsmeBani', src: GITHUBLOGO, alt: 'Github'},
    {href: 'https://drive.google.com/file/d/1Ttj4G4KMB2w1K4jXHyMp_ItUYaDStcCV/view?usp=sharing', src: CVLOGO, alt: 'CV'},
    {href: 'https://www.linkedin.com/in/jiovani-fabro-97953a359/', src: LINKEDINLOGO, alt: "LinkedIn"},
    {href: 'https://www.upwork.com/freelancers/~012ccca59257d34b4b?mp_source=share', src: UPWORKLOGO, alt: "UPWORKLOGO"},
    {href: 'https://ph.jobstreet.com/profile/jiovani-fabro-4n0ScNYqKr', src: JOBSTREETLOGO, alt: "JOBSTREETLOGO"}

];

export const Technology = [
    {
        id: "frontend",
        title: "Frontend",
        description:
            "Technologies and frameworks I use to build user interfaces, interactive layouts, and responsive web experiences.",
        items: [
            { logo: HTMLLOGO, name: "HTML" },
            { logo: CSSLOGO, name: "CSS" },
            { logo: JSLOGO, name: "JavaScript" },
            { logo: TSLOGO, name: "TypeScript" },
        ],
    },
    {
        id: "backend",
        title: "Backend & Databases",
        description:
            "Backend technologies and database services I use to build reliable, secure, and scalable server-side applications.",
        items: [
            { logo: PHPLOGO, name: "PHP" },
            { logo: SUPABASE, name: "Supabase" },
            { logo: FIREBASELOGO, name: "Firebase" },
        ],
    },
    {
        id: "frameworks",
        title: "Frameworks & Libraries",
        description:
            "Frameworks and libraries I use to create scalable, efficient, and interactive web and mobile applications.",
        items: [
            { logo: REACTICON, name: "React" },
            { logo: NATIVE, name: "React Native" },
            { logo: EXPOICON, name: "Expo" },
            { logo: TANSTACKLOGO, name: "TanStack" },
            { logo: TAILWINDLOGO, name: "Tailwind CSS" },
            { logo: MATERIALTAILWINDLOGO, name: "Material Tailwind" },
            { logo: SHADCNUILOGO, name: "shadcn/ui" },
        ],
    },
    {
        id: "developerTools",
        title: "Developer Tools",
        description:
            "Tools I use for development, version control, debugging, and API testing to ensure efficient workflows.",
        items: [
            { logo: VSCODELOGO, name: "VS Code" },
            { logo: GITHUBLOGO, name: "GitHub" },
            { logo: WEBSTORMLOGO, name: "WebStorm" },
            { logo: POSTMANLOGO, name: "Postman" },
        ],
    },
    {
        id: "designTools",
        title: "Design Tools",
        description:
            "UI/UX design tools I use to create modern, responsive, and visually appealing designs.",
        items: [{ logo: FIGMALOGO, name: "Figma" }],
    },
];




export const EducationalAttainment = [
    {
        name: "Ilocos Sur Polytechnic State College",
        description: "Awarded Best Capstone Project and Best Mobile Developer of the Year for excellence in mobile application development",
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