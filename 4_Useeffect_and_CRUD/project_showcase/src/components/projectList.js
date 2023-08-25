import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects}){
    const [search, setSearch] = useState("")

    const filteredProjects = projects.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase())
    })

    const projectsCards = filteredProjects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })

    // console.log(projectsCards)

    

    return (
    <>
        <h3>Search</h3>
        {/* Add a search */}
        <input onChange={(e)=>setSearch(e.target.value)}></input>
        <ul className = "cards">{projectsCards}</ul>
    </>
    )
}
export default ProjectList