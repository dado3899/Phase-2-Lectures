import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects, deleteProj,patchProj}){
    const [search,setSearch] = useState("")
    // console.log("search".includes("z"))
    // console.log("hi")
    const projectFilter = projects.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase()) || project.about.toLowerCase().includes(search.toLowerCase())
    })
    const projectsCards = projectFilter.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject} deleteProj={deleteProj} patchProj={patchProj}/>
    })

    // console.log(projectsCards)

    

    return (
    <>
        <h3>Search</h3>
        <input onChange={(e)=>setSearch(e.target.value)}></input>
        <ul className = "cards">{projectsCards}</ul>
    </>
    )
}
export default ProjectList