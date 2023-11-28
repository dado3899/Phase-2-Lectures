import { useState,useEffect } from "react";
function ProjectCard({project, handleDelete,handlePatch}){
    const {id,name,about, phase, link, image} = project
    const [newName,setNewName] = useState(name)
    const [newAbout,setNewAbout] = useState(about)
    const [newPhase,setNewPhase] = useState(phase)

    useEffect(()=>{
        console.log("mounted: ", name)

        return ()=>{
            console.log("unmounted: ", name)
        }
    },[])

    function handleInput(e){
        e.preventDefault()
        const newProj = {...project}
        newProj.name = e.target.name.value
        handlePatch(newProj)
        setNewName(e.target.name.value)

    }

    return(
    <li className="card">
        <h3>{newName}</h3>
        {phase ? <p>Phase: {newPhase}</p>:<p>Personal Project</p>}
        {/* <img src={image}></img> */}
        <p>{newAbout}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <form onSubmit={(e)=>handleInput(e)}>
            <input name={"name"}></input>
        </form>
    </li>
    )
}
export default ProjectCard