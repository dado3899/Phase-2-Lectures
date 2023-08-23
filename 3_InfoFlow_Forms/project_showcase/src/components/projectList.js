import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects}){

    const projectsCards = projects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })

    // console.log(projectsCards)

    

    return (
    <>
        <h3>Search</h3>
        {/* Add a search */}
        <ul className = "cards">{projectsCards}</ul>
    </>
    )
}
export default ProjectList