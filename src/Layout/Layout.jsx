import React from 'react';
import ProjectCard from "../Component/ProjectCard.jsx";
import {ProjectData} from "../ProjectData.js";
import Projects from "./Projects.jsx";
import Introduction from "./Introduction.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
function Layout(props) {
    return (
       <section className="flex flex-col h-full  ">
           <Introduction/>
       <Projects/>
           <AboutMe/>
           <Contact/>
       </section>
    );
}

export default Layout;