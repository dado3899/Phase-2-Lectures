import ProjectCard from "./ProjectCard"
import projects from "../projects"
import ProjectForm from "./ProjectForm"

function ProjectContainer(){
    console.log(projects)

    const projComp = projects.map((project)=>{
        return <ProjectCard key={project.id} project={project}/>
    })
    return(
        <div>
            <ProjectForm/>
            <h1>PROJECTS:</h1>
            <ul className="cards">
                {projComp}
            </ul>
        </div>
    )
}
export default ProjectContainer