function ProjectCard({project}){
    return(
        <li>
            <h1> { project.name !== "" ? project.name : "Untitled Project" } </h1>
            <img className="projectImage" src={project.image}/>
            {/* .addEventListener("click",()=>{}) */}
            <p onClick={()=>console.log("THis is the about")}>{project.about}</p>
            <button onClick={()=>console.log("Click me!")}>CLICK ME</button>
        </li>
    )
}
export default ProjectCard