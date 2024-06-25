function ProjectCard({project, projects,setProjects}){
    const {id,name,about,phase} = project
    // does project.name exists? if so name = project.name
    
    function handleDelete(){
        const filteredArr = projects.filter((indvProject)=>{
            if(indvProject.id === project.id){
                return false
            }
            return true
        })
        setProjects(filteredArr)
    }
    return(
    <li className="card">
        <h3>{name}</h3>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        
        <p>{about}</p>
        <button onClick={()=>handleDelete()}>Delete Me</button>
    </li>)
}
export default ProjectCard