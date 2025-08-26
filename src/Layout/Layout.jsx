import React from 'react';
import Projects from "./Projects.jsx";
import Introduction from "./Introduction.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import {Toaster} from "sonner";
import Navbar from "../Component/Navbar.jsx";
import {AnimatedBackground} from "../Component/AnimatedBackground.jsx";
function Layout(props) {
    return (
       <section className="flex flex-col h-full  overflow-hidden">
           <div className="absolute inset-0  h-full w-full z-23  bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

           <Navbar/>
           <Introduction/>

           <Projects/>
           <AboutMe/>
           <Contact/>
           <Toaster richColors />
       </section>
    );
}

export default Layout;