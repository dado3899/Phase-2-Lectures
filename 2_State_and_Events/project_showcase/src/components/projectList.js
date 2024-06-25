import ProjectCard from "./projectCard"
import {useState} from "react"
function ProjectList({projects,name, setProjects}){
    const [search,setSearch] = useState("")
    // console.log(projects)
    const filteredProjects = projects.filter(individualProject=>{
        if(individualProject.name.toLowerCase().includes(search.toLowerCase())){
            return true
        }
        return false
    })
    console.log(filteredProjects)

    const projectsCards = filteredProjects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject} projects={projects} setProjects={setProjects}/>
    })

    return( 
        <>
            {name}'s Projects
            <input placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
            <ul className = "cards">
                {projectsCards}
            </ul>

        </>
    )
}
export default ProjectList