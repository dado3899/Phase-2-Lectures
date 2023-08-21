function ProjectForm({addToArray}){
    function onSubmit(e){
        e.preventDefault()
        const newProjectObject = {
            name: e.target.name.value,
            about: e.target.about.value,
            phase: e.target.phase.value
        }
        addToArray(newProjectObject)
    }

    return(
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text" name="name"></input>
            <input type="text" name="about"></input>
            <input type="text" name="phase"></input>
            <button type="submit">Submit Form</button>
        </form>
    )
}

export default ProjectForm