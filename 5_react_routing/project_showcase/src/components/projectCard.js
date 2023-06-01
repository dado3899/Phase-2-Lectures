import { useState } from "react";
function ProjectCard({project, handleDelete,handleEdit}){
    const {id,name,about, phase, link, image} = project
    const [editMode, setEditMode] = useState(false)
    const [newName,setNewName] = useState(name)
    const [newAbout,setNewAbout] = useState(about)
    const [newPhase,setNewPhase] = useState(phase)
    // console.log(image)
    
    function editForm(e){
        console.log("editing")
        const editedItem = {
            name: newName,
            phase: newPhase,
            about: newAbout
        }
        setEditMode(!editMode)
        handleEdit(id,editedItem)
    }

    return(
    <>
    {editMode ?
    <li className="card">
        <form className = "form" onSubmit={editForm}>
            <label>Name</label>
            <input onChange={(e)=>setNewName(e.target.value)} value={newName}></input>
            <label>Description</label>
            <input onChange={(e)=>setNewAbout(e.target.value)} value={newAbout}></input>
            <label>Phase</label>
            <input onChange={(e)=>setNewPhase(e.target.value)} value={newPhase}></input>
            <button type="submit">unEdit</button>
        </form>
    </li>
    :
    <li className="card">
        <h3>{newName}</h3>
        {phase ? <p>Phase: {newPhase}</p>:<p>Personal Project</p>}
        {/* <img src={image}></img> */}
        <p>{newAbout}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <button onClick={()=>setEditMode(!editMode)}>Edit</button>
    </li>
    }
    </>
    )
}
export default ProjectCard