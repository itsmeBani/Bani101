import React from 'react';
import {ProjectData} from "../ProjectData.js";
import ProjectCard from "../Component/ProjectCard.jsx";
import Header from "../Component/Header.jsx";
function Projects() {
    return (
      <div id="projects" className="flex flex-col  z-50  h-full w-full ">
          <Header title={"My Projects"} description={"These are a collection of projects I’ve built to learn, solve problems, and explore new ideas"}/>
          <div className="w-full grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-items-start">
              {ProjectData?.map((info) => (
                  <div key={info.id} className="w-full h-full">
                      <ProjectCard info={info} />
                  </div>
              ))}
          </div>

      </div>
    );
}

export default Projects;