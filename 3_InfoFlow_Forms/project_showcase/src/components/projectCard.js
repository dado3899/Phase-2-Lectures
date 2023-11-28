function ProjectCard({project,deleteProj,patchProj}){
    const {id,name,about, phase, link, image} = project
    
    function submit(e){
        e.preventDefault()
        project.name = e.target.newname.value
        patchProj(project)
    }

    return(
    <li className="card">
        <h1>{name}</h1>
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        {/* <img src={image}></img> */}
        <p>{about}</p>
        <button onClick={()=>deleteProj(id)}>DELETE</button>
        <form onSubmit={(e)=>submit(e)}>
            <input name={"newname"} placeholder="New Name"></input>
        </form>
    </li>)
}
export default ProjectCard