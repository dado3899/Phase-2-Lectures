function ProjectForm({projectState, setProjectState}){
    // console.log(projectState)
    function handleSubmit(e){
        e.preventDefault()
        const newProject = 
        {
            name: e.target.name.value,
            about: e.target.description.value,
            phase: 8,
            link: "",
            image: e.target.image.value
        }
        // projectState.push(newProject)
        const newArray = [...projectState,newProject]
        setProjectState(newArray)
        // setProjectState(newProject)
        // console.log(newProject)
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <p>Name</p>
            <input name="name"/>
            <p>Image</p>
            <input name="image"/>
            <p>Description</p>
            <input name="description"/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ProjectForm