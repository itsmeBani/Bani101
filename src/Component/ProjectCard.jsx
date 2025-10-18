import React from 'react';
import GITHUBLOGO from "../assets/GITHUBLOGO.svg"
import ANDROIDLOGO from "../assets/ANDROIDLOGO.svg"

import IsLive from "./isLive.js";

function ProjectCard({info,onProjectClick}) {
    const {
        Project_Name, Logo, Description, MobileAppProjectLink, Github_Link, Tech_Stack, Project_URL, IsMobileApp
    } = info
    return (<div style={{background: "hsl(0, 0%, 12.2%)"}}
                 className="flex flex-col gap-3 bg-[#1E1E1E] justify-between w-full h-full group border-[#2D2D2D] border-[1px] px-5 py-5 rounded-lg shadow-md">
        <div className="flex gap-2   place-items-center justify-between">
            <div className="flex place-items-center relative ">
                <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-lg  relative">
                    <img src={Logo} alt={""}
                         className="object-contain w-full  img-no-bg rounded-lg overflow-hidden"/>
                   <IsLive isLive={!!Project_URL}/>
                </div>
            </div>
            <div className=" w-full">
                <h1 className=" text-foreground-light text-[17px] font-bold capitalize line-clamp-2 ">{Project_Name.toLowerCase()}</h1>

            </div>
            <div className="flex gap-2 ">
                {IsMobileApp &&
                    <a href={MobileAppProjectLink} className={"p-1.5 w-10 h-10 rounded-md relative bg-[#191919]"}>
                        <img alt={""} src={ANDROIDLOGO} className="w-7"/>
                    </a>}
                <a href={Github_Link} className={"p-1.5 w-10 h-10 rounded-md relative bg-[#191919]"}>
                    <img alt={"github "} src={GITHUBLOGO} className="w-7 h-7 "/>
                </a>
            </div>
        </div>

        <p className="text-white/80 text-sm lg:text-[17px]  font-light line-clamp-2 leading-6">
            {Description}
        </p>



        <div className="  flex flex-col gap-3">
            <div className={"flex gap-1"}>
                {Tech_Stack?.map((img, index) => {
                    return (<img key={index} src={img} alt="" className="w-7 h-7 "/>)
                })}

            </div>
            <div className="flex w-full gap-2 justify-end relative">
                <button  onClick={onProjectClick} className="text-white flex   btn-font px-3 rounded-md py-1">Description</button>
                <a
                    href={Project_URL ? Project_URL : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white flex btn-font px-3 rounded-md py-1 ${
                        Project_URL
                            ? "bg-[#006239] hover:bg-[#00522a] cursor-pointer"
                            : "bg-[#006239]/50 cursor-not-allowed opacity-50"
                    }`}
                    onClick={(e) => {
                        if (!Project_URL) e.preventDefault();
                    }}
                >
                    Take a look
                </a>

            </div>
        </div>


    </div>);
}

export default ProjectCard;