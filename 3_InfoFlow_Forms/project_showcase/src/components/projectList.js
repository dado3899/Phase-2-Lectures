import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects}){
    const [search,setSearch] = useState("")
    // console.log(projects)
    
    // console.log(projectsCards)
    const filteredProjects = projects.filter((individualProject)=>{
        if(search === "all"){
            return true
        }
        if(individualProject.name.toLowerCase().includes(search.toLowerCase()) || individualProject.about.toLowerCase().includes(search.toLowerCase()) ){
            return true
        }
    })
    console.log(filteredProjects)

    const projectsCards = filteredProjects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })

    console.log(projectsCards)

    function handleChange(e){
        setSearch(e.target.value)
        // search = e.target.value
        console.log(search)
    }

    return (
    <>
        <h3>Search</h3>
        <input onChange={handleChange}></input>
        <ul className = "cards">{projectsCards}</ul>
    </>
    )
}
export default ProjectList