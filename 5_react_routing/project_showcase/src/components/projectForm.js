import { useState } from "react";
function ProjectForm({addToProject}){
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const [phase, setPhase] = useState("")
    // const [projObject,setProjObject] = useState({})

    function submit(e){
        e.preventDefault()
        console.log("In Submit")
        const new_project = {
            name: name,
            about:description,
            phase: phase,
            image: "",
            link: ""
        }
        console.log(new_project)
        setName("")
        setPhase("")
        setDescription("")
        addToProject(new_project)
    }
    return(
        <form className = "form" onSubmit={submit}>
            <label>Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name}></input>
            <label>Description</label>
            <input onChange={(e)=>setDescription(e.target.value)} value={description}></input>
            <label>Phase</label>
            <input onChange={(e)=>setPhase(e.target.value)} value={phase}></input>
            <button type="submit" onClick={submit}>Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm