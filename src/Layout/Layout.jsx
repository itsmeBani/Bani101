import React from 'react';
import Projects from "./Projects.jsx";
import Introduction from "./Introduction.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import {Toaster} from "sonner";
import Navbar from "../Component/Navbar.jsx";
import {AnimatedBackground} from "../Component/AnimatedBackground.jsx";
import Profile from "../Component/Profile.jsx";
import ProfileOverview from "../Component/ProfileOverview.jsx";
function Layout(props) {
    return (
       <section className="flex lg:flex-row flex-col  h-full lg:gap-10 p-3 lg:p-8   overflow-hidden">

           {/*<Navbar/>*/}

           <div>
               <Profile/>
           </div>

        <div className="flex flex-col">
            <ProfileOverview/>
            <Projects/>
            <AboutMe/>
            <Contact/>
            <Toaster richColors />
        </div>
       </section>
    );
}

export default Layout;