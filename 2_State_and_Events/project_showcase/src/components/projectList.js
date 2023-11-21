import ProjectCard from "./projectCard"
import {useState} from 'react'
function ProjectList({projectsArray,deleteProject}){
    const [search,setSearch]= useState("")
    // console.log(projectsArray)
    const projListFiltered = projectsArray.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase())
    })

    const projListComponent = projListFiltered.map((project)=>{
        return <ProjectCard key={project.id} project={project} deleteProject={deleteProject}/>
    })

    return (
        <>
            <input onChange={(e)=>setSearch(e.target.value)}></input>
            <ul className = "cards">
                {projListComponent}
            </ul>
        </>
    )
}
export default ProjectList