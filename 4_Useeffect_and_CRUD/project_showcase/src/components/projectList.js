import ProjectCard from "./projectCard"
import { useState } from "react";

function ProjectList({projects, search, handleChange,setProjects}){
    // const [search,setSearch] = useState("")
    // console.log(projects)
    function handleDelete(id){
        fetch(`http://localhost:4000/projects/${id}`,{
        method:'DELETE'
        })
        .then(r=>r.json())
        .then(data=> console.log("Deleted: ",data))

        const removed = projects.filter(individualProject=>{
            if(individualProject.id == id){
                return false
            }
            return true
        })
        console.log(removed)
        setProjects(removed)
    }
    
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
        return <ProjectCard key={individualProject.id} project={individualProject} handleDelete={handleDelete}/>
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