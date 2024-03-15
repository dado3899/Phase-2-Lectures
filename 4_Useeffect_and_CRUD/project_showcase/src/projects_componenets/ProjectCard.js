import {useEffect,useState} from 'react'
function ProjectCard({project,handleDelete,handlePatch}){
    // console.log(project.obj?.test)
    const [editMode, setEditMode] = useState(false)
    const [editName, setEditName] = useState(project.name)

    useEffect(()=>{
        console.log("Loaded card")

        return(()=>{
            console.log("Unloaded card")
        })
    },[])
    function handleSubmit(e){
        e.preventDefault()
        const updatedProj = {...project,name:editName}
        handlePatch(updatedProj)
        setEditMode(false)
    }
    // console.log(project)
    const card = 'card'
    return(
        <li className={card}>
            {
                editMode
                ?
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                </form>
                :
                <h1 onClick={()=>setEditMode(true)}>{project.name}</h1>
            }
            <img className="image" src={project.image} onClick={()=>console.log(project)}/>
            <p>{project.about}</p>
            <p>Views: {project.views}</p>
            <button onClick={()=>handleDelete(project.id)}>DELETE</button>
        </li>
    )
}
export default ProjectCard