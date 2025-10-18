import React, { useState } from "react";
import { ProjectData } from "../ProjectData.js";
import ProjectCard from "../Component/ProjectCard.jsx";
import Header from "../Component/Header.jsx";
import ProjectModal from "../Component/ProjectModal.jsx";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects" className={`flex flex-col  ${selectedProject && "no-doc-scroll"} z-50 h-full w-full`}>
            <Header
                title={"My Projects"}
                description={
                    "These are a collection of projects I’ve built to learn, solve problems, and explore new ideas"
                }
            />

            <div className="w-full grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-items-start">
                {ProjectData?.map((project) => (
                    <div key={project.id} className="w-full h-full">
                        <div >
                            <ProjectCard onProjectClick={()=>setSelectedProject(project)} info={project} />
                        </div>
                    </div>
                ))}
            </div>


            <ProjectModal
                show={!!selectedProject}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}

export default Projects;
