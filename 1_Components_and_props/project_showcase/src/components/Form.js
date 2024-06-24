function ProjectForm(){

    function submitForm(e){
        e.preventDefault()
        console.log(e.target.image.value)
    }

    return(
        <form onSubmit={(e)=>submitForm(e)}>
            <input placeholder="name" name="name"/>
            <input placeholder="image" name="image"/>
            <input placeholder="about" name="about"/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ProjectForm