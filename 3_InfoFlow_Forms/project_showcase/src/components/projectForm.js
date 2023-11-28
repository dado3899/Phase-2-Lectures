import { useState } from "react";
function ProjectForm({addProj}){
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const [phase, setPhase] = useState("")
    const [checkbox, setCheckbox] = useState(false)
    console.log(checkbox)
    function submit(e){
        e.preventDefault()
        const new_project = {
            name: name,
            about: description,
            phase: phase,
            image: "",
            link: ""
        }
        addProj(new_project)
    }
    return(
        <form className = "form" onSubmit={submit}>
            <label>Name</label>
            <input name={"name"} value={name} onChange={(e)=>setName(e.target.value)}></input>
            {name.length > 0 ? <></> : <div>Need input</div>}
            <label>Description</label>
            <input name={"about"} value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <label>Phase</label>
            <input name={"phase"} value={phase} onChange={(e)=>setPhase(e.target.value)}></input>
            <input type={"checkbox"} onChange={(e)=>setCheckbox(!checkbox)}></input>
            {checkbox? 
            <>
                <label>Checked Input</label>
                <input></input>
            </>
            :
            <></>
            }
            <button type="submit">Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm