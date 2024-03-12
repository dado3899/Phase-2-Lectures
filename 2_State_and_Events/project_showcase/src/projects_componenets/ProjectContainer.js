import ProjectCard from "./ProjectCard"
import projects from "../projects"
import ProjectForm from "./ProjectForm"
import {useState} from 'react'
import Search from "../components/Search"

function ProjectContainer(){
    // console.log("In project Container")
    const [search,setSearch] = useState("")
    // console.log(search)
    const [projectState,setProjectState] = useState(projects)

    const projectsFilter = projectState.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase()) || project.about.toLowerCase().includes(search.toLowerCase())
    })
    const projComp = projectsFilter.map((project)=>{
        return <ProjectCard key={project.id} project={project}/>
    })
    return(
        <div>
            <ProjectForm projectState={projectState} setProjectState={setProjectState}/>
            <h1>PROJECTS:</h1>
            <Search setSearch={setSearch}/>
            <ul className="cards">
                {projComp}
            </ul>
        </div>
    )
}
export default ProjectContainer