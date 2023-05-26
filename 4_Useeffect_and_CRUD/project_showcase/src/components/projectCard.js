function ProjectCard({project, handleDelete}){
    const {id,name,about, phase, link, image} = project
    console.log(image)
    
    return(
    <li className="card">
        <h3>{name}</h3>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        {/* <img src={image}></img> */}
        <p>{about}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </li>)
}
export default ProjectCard