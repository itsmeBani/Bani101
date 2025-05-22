import React from 'react';
import SocialMedia from "../Component/SocialMedia.jsx";
function Introduction(props) {


    return (
        <div className="flex h-[100dvh] place-items-center justify-center flex-col">

         <div className="flex  flex-col p-5 gap-5">
             <div className="">
                 <p className="lg:text-2xl text-lg  text-white font-mono drop-shadow-sm"> Hello, they call me Bani</p>
                 <h1 className="text-white text-4xl lg:text-6xl Kerif drop-shadow-sm"> As a <span className="text-[#00e673]">Hobby</span>, I <span className="text-[#00e673]"> design</span> and < span className="text-[#00e673]">develop</span></h1>
                 <h1 className="text-white text-4xl lg:text-6xl Kerif drop-shadow-sm">  things for the web</h1>
             </div>
           <SocialMedia/>
         </div>
        </div>
    );
}

export default Introduction;