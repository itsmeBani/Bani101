import React from 'react';
import {ProjectData} from "../ProjectData.js";
import ProjectCard from "../Component/ProjectCard.jsx";
import {motion} from "motion/react";
import {spring} from "motion";
import Header from "../Component/Header.jsx";
function Projects(props) {
    return (
      <div id="projects" className="flex flex-col    h-full w-full ">
          <Header title={"My Projects"} description={"These are a collection of projects I’ve built to learn, solve problems, and explore new ideas"}/>
          <div className="grid-cols-1 w-full  px-5  lg:px-[8rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid gap-3 place-items-start">
              {ProjectData?.map((info, index)=>{
                  return (
                    <motion.div className={"w-full h-full"} initial={{opacity:0, y:-10}}
                                viewport={{ once: true }}
                                transition={{delay : index * 0.3, type: "spring",
                                visualDuration: 0.5, bounce: 0.25}}
                                whileInView={{opacity:1, y:0}}>
                        <ProjectCard key={info.id} info={info}/>
                    </motion.div>

                  )
              })}
          </div>
      </div>
    );
}

export default Projects;