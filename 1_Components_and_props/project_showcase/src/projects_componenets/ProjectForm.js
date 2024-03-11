function ProjectForm(){

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.image.value)
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <p>Name</p>
            <input name="name"/>
            <p>Image</p>
            <input name="image"/>
            <p>Description</p>
            <input/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ProjectForm