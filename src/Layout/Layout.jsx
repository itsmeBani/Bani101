import React from 'react';
import Projects from "./Projects.jsx";
import Introduction from "./Introduction.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import {Toaster} from "sonner";
function Layout(props) {
    return (
       <section className="flex flex-col h-full  overflow-hidden">
           {/*<Navbar/>*/}
           <Introduction/>
           <Projects/>
           <AboutMe/>
           <Contact/>
           <Toaster richColors />
       </section>
    );
}

export default Layout;