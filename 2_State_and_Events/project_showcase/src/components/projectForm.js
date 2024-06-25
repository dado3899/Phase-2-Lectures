import Footer from "./footer"
function ProjectForm({projects,setProjects}){
    console.log("Form Rerendering")
    function submit(e){
        e.preventDefault()
        const newProj={
            name: e.target.name.value,
            about: e.target.about.value,
            phase: e.target.phase.value
        }

        const newArr = [...projects,newProj]
        
        setProjects(newArr)
        // console.log(projects)
        // Add a project to the end of the state
    }
    // name: "Locksley To Do",
    // about: "A todo list and calendar app",
    // phase: 4,
    // link: "https://www.locksleyr.com",
    // image: "https://i.imgur.com/XOnaclL.png",
    return(
        <form className = "form" onSubmit={(e)=>submit(e)}>
            <label>Name</label>
            <input name="name"/>
            <label>About</label>
            <input name="about"/>
            <label>Phase</label>
            <input name="phase"/>
            <button type="submit">Submit</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm