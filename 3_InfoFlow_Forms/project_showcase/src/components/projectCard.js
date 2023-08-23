function ProjectCard({project,deleteData}){
    //Destructure the project
    const {id,name,about, phase} = project
    
    return(
    <li className="card">
        <h3>{name}</h3>
        <p>{phase}</p>
        <p>{about}</p>
        <button onClick={()=>deleteData(id)}>Delete</button>
    </li>)
}
export default ProjectCard