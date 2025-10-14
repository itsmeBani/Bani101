import React from 'react';
import GITHUBLOGO from "../assets/GITHUBLOGO.svg"
import ANDROIDLOGO from  "../assets/ANDROIDLOGO.svg"
import {PhotoIcon} from "@heroicons/react/16/solid/index.js";

function ProjectCard({info}) {
    const {Project_Name, Logo, Description,MobileAppProjectLink, Github_Link, Tech_Stack,Project_URL,IsMobileApp} = info
    return (
        <div style={{background: "hsl(0, 0%, 12.2%)"}} className=" bg-[#1E1E1E] w-full h-full group border-[#2D2D2D] border-[1px] px-5 py-5 rounded-lg shadow-md">
            <div className="flex gap-2   place-items-center justify-between">
                <div className="flex place-items-center  ">
                    <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-lg  relative">
                        <img src={Logo} alt={""} className="object-contain w-full  img-no-bg rounded-lg overflow-hidden"/>
                    </div>
                   </div>
               <div className=" w-full">
                   <h1 className=" text-foreground-light text-[17px] font-bold capitalize">{Project_Name.toLowerCase()}</h1>

               </div>
                <div className="flex gap-2 ">
                 {IsMobileApp &&    <a href={MobileAppProjectLink} className={"p-1.5 w-10 h-10 rounded-md relative bg-[#191919]"}>
                      <img alt={""} src={ANDROIDLOGO} className="w-7"/>
                 </a> }
                 <a href={Github_Link} className={"p-1.5 w-10 h-10 rounded-md relative bg-[#191919]"}>
                     <img alt={"github "} src={GITHUBLOGO} className="w-7 h-7 "/>
                 </a>
             </div>
            </div>

            <p className="text-white/80 text-sm lg:text-[17px] pt-2 font-light ">
                {Description} </p>


            <div className="pt-3  ">
                <div className={"flex gap-1"}>
                    {Tech_Stack?.map((img, index) => {
                        return (
                            <img key={index} src={img} alt="" className="w-7 h-7 "/>
                        )
                    })}

                </div>
                <div className="flex w-full gap-2 justify-end">
                    <a href={Project_URL} target="_blank"
                        rel="noopener noreferrer"  className="text-white flex   bg-[#006239] btn-font px-3 rounded-md py-1">Take a look</a>

                </div>
            </div>


        </div>
    );
}

export default ProjectCard;