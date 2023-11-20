import { useState } from "react";
function ProjectForm({postProject}){
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [phase,setPhase] = useState("")
    // console.log(name)
    //Create a state for each of these values
    function submit(e){
        e.preventDefault()
        const newData = {
            name: name,
            about: description,
            phase: phase
        }
        postProject(newData)
        setName("")
        setDescription("")
        setPhase("")
    }

    return(
        <form className = "form" onSubmit={(e)=>submit(e)} >
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name}></input>
            <label>Description</label>
            <input onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <label>Phase</label>
            <input onChange={(e)=>setPhase(e.target.value)} value={phase}></input>
            <button type="submit">Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm