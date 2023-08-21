// Take individual projects
// render name, desc, and img

function ProjectCard({individualProject, function1}){
    console.log(individualProject)
    return (
        <div className="card">
            <h1>{individualProject.name}</h1>
            <p>{individualProject.about}</p>
            <img src={individualProject.image} className="image"/>
            <button onClick={()=>function1(individualProject.link)}>Click For Link</button>
        </div>
    )
}

export default ProjectCard