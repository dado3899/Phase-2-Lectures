import ProjectCard from "./projectCard"
function ProjectList({projects}){
    const projectsCards = projects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })
    return <ul className = "cards">{projectsCards}</ul>
}
export default ProjectList