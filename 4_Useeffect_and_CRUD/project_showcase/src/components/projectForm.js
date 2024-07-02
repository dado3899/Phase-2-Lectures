import Footer from "./footer"
import {useState} from "react"

function ProjectForm({handleSubmit}){
    const [name,setName] = useState("")
    const [about,setAbout] = useState("")
    const [phase,setPhase] = useState("")

    function submit(e){
        e.preventDefault()
        const newProj={
            name: name,
            about: about,
            phase: phase
        }
        handleSubmit(newProj)
        // Add a project to the end of the state
    }
    // name: "Locksley To Do",
    // about: "A todo list and calendar app",
    // phase: 4,
    // link: "https://www.locksleyr.com",
    // image: "https://i.imgur.com/XOnaclL.png",
    return(
        <form className = "form" onSubmit={(e)=>submit(e)}>
            <label className={name.length<3?"redText":""}>Name</label>
            <input name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>About</label>
            <input name="about" value={about} onChange={(e)=>setAbout(e.target.value)}/>
            { about.length< 10 ? <label>NOT LONG ENOUGH</label>:<></>}
            <label>Phase</label>
            <input name="phase" value={phase} onChange={(e)=>setPhase(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm






// function addTwo(a,b){
//     return a+b
// }

// addTwo(1,2)