function ProjectCard({project}){
    //Destructure the project
    const {id,name,about, phase, link, image} = project
    
    return(
    <li className="card">
        <h3>{name}</h3>
        <p>{phase}</p>
        <p>{about}</p>
    </li>)
}
export default ProjectCard