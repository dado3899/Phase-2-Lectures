function ProjectForm({addtoProjects}){
    function submit(e){
        e.preventDefault()
        const newProj ={
            name: e.target.name.value,
            about: e.target.about.value,
            phase: e.target.phase.value,
            link: e.target.link.value,
            image: e.target.image.value
        }
        addtoProjects(newProj)
    }

    // id: 1,
    // name: "Great Outdoors Guide",
    // about: "Plan your next adventure to in the U.S. National Parks!",
    // phase: 4,
    // link: "https://great-outdoors-guide.netlify.app",
    // image: "https://i.imgur.com/8GnP2Uw.png",

    return(
        <form className = "form" onSubmit={submit}>
            <label>Name</label>
            <input name="name"></input>
            <label>About</label>
            <input name= "about"></input>
            <label>Phase</label>
            <input name= "phase"></input>
            <label>Link</label>
            <input name= "link"></input>
            <label>Image</label>
            <input name= "image"></input>
            <button type="submit">Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm