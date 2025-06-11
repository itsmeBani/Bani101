import React from 'react';
import CODING from  "../assets/CODINGPIC.jpeg"
import {PhotoCollageData} from  "../ProjectData.js"
import {motion} from "motion/react";
import {HomeModernIcon} from "@heroicons/react/16/solid/index.js";
import {Image} from "lucide-react";
function PhotoCollage(props) {
    return (
        <section className="w-full   px-5    lg:px-[12rem] ">

            <div className="w-full h-full group  p-5  rounded-lg border-[#2D2D2D] border-[1px] ">
                <h1 className="text-lg lg:text-[25px] flex place-items-center gap-3 font-semibold text-foreground-light  mb-2">
                    <div  className="p-2  bg-[#00311D] rounded-md">
                        <Image className="w-5 text-brand-600 " />
                    </div>
                    Team Moments</h1>
                <p className="text-foreground-light-description leading-5 mb-6">
                    Some fun and memorable moments with my group — collaborating on projects, sharing ideas, and building strong friendships along the way. These photos capture the teamwork, dedication, and experiences that have shaped our journey together.
                </p>


                <div className="   grid gap-3 grid-cols-1 lg:grid-cols-3">
               {PhotoCollageData.map((url, index)=>{
                   return (
                       <motion.div initial={{opacity:0, y:-10,}}
                                   viewport={{ once: true }}
                                   whileHover={{ scale: 1.3, zIndex:1111, transition: {type:"spring",duration:0.2 ,delay:0.1}}}
                                   whileInView={{opacity:1, y:0,transition:{delay : index * 0.3, type: "spring",
                                           visualDuration: 0.5, bounce: 0.25}}} key={index} className="w-full  overflow-hidden rounded-md h-[200px]">
                           <img src={url} className="object-cover  h-full w-full grayscale hover:grayscale-0"/>
                       </motion.div>
                   )
               })}
           </div>
            </div>

        </section>
    );
}

export default PhotoCollage;