import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects, search, handleChange,handleDelete,handlePatch}){

    
    const filteredProjects = projects.filter((individualProject)=>{
        if(search === "all"){
            return true
        }
        if(individualProject.name.toLowerCase().includes(search.toLowerCase()) || individualProject.about.toLowerCase().includes(search.toLowerCase()) ){
            return true
        }
    })
    // console.log(filteredProjects)

    const projectsCards = filteredProjects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject} handleDelete={handleDelete} handlePatch={handlePatch}/>
    })

    // console.log(projectsCards)

    

    return (
    <>
        <h3>Search</h3>
        <input onChange={e=>handleChange(e.target.value)} value={search}></input>
        <ul className = "cards">{projectsCards}</ul>
    </>
    )
}
export default ProjectList