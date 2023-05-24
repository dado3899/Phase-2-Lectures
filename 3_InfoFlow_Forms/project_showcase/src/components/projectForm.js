function ProjectForm(){
    function submit(e){
        e.preventDefault()
        console.log("In Submit")
    }
    return(
        <form className = "form" onSubmit={submit}>
            <label>Test1</label>
            <input onChange ={()=>console.log("Changing")}></input>
            <label>Test2</label>
            <input></input>
            <button type="submit" onClick={()=>{console.log("Click")}}>Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm