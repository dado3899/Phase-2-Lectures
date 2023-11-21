function ProjectCard({project}){
    const {id,name,about, phase, link, image} = project
    
    return(
    <li className="card">
        <h3>{name}</h3>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        {/* <img src={image}></img> */}
        <p>{about}</p>
    </li>)
}
export default ProjectCard