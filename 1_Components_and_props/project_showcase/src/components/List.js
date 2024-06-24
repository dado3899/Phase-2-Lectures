import ProjectCard from "./ProjectCard"
function ProjectList({projects}){
    const pl = projects.map((project)=>{
        return <ProjectCard key={project.id} project={project}/>
    })

    return(
        <ul>
            {pl}
        </ul>
    )
}
export default ProjectList