import ProjectCard from "./projectCard"
function ProjectList({projects}){
    console.log(projects)
    const projectsCards = projects.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })
    console.log(projectsCards)
    // Project list
    // map through the list and return name in div
    // Display that!
    // Lets create a smaller card component for each of these
    // Destructure the data using {...}
    // Create a ul with cards classname
    // Create an li card that displays relevent info
    // What happens if our data doesn't have what we need?
    return <ul className = "cards">{projectsCards}</ul>
}
export default ProjectList