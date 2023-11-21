function ProjectCard({project,deleteProject}){
    const {id,name,about, phase, link, image} = project
    return(
    <li className="card">
        <h3>{name}</h3>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        <p>{about}</p>
        <button onClick={()=> deleteProject(id)}>Delete</button>
    </li>)
}
export default ProjectCard