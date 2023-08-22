function ProjectForm({bringToApp,hide}){
    function submit(e){
        e.preventDefault()
        console.log("In Submit")
        const newobj = {
            name: e.target.name.value,
            phase: e.target.phase.value,
            about: e.target.about.value
        }
        bringToApp(newobj)
    }
    return(
        <>
        {
            hide ? 
            <>Form was here</> 
            :
            <form className = "form" onSubmit={submit}>
                <label>Name</label>
                <input name="name"></input>
                <label>Phase</label>
                <input name="phase"></input>
                <label>About</label>
                <input name="about"></input>
                <button type="submit" onClick={()=>{console.log("Click")}}>Button</button>
            </form>
        }
        </>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm