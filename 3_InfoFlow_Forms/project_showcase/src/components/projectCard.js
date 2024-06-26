import {useState} from 'react'
function ProjectCard({project, handleDelete,handleEdit}){
    const {id,about,phase} = project
    const [toggleEdit,setToggleEdit] = useState(false)
    const [name,setName] = useState(project.name)
    // does project.name exists? if so name = project.name
    function handleSubmit(e){
        e.preventDefault()
        handleEdit(id,name)
        setToggleEdit(false)
    }
    
    
    return(
    <li className="card">
        {
            toggleEdit? 
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input value={name} onChange={(e)=>setName(e.target.value)}/> 
            </form> :
            <h3 onClick={()=>setToggleEdit(true)}>{name}</h3>
        
        }
        {phase ? <p>Phase: {phase }</p>:<p>Personal Project</p>}
        
        <p>{about}</p>
        <button onClick={()=>handleDelete(id)}>Delete Me</button>
    </li>)
}
export default ProjectCard