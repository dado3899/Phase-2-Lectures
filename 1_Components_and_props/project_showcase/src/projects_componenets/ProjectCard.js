function projectCard({project}){
    console.log(project.obj?.test)
    const card = 'card'
    return(
        <li className={card}>
            <h1>{project.name ? project.name : "NO NAME GIVEN"}</h1>
            <img className="image" src={project.image}/>
            <p>{project.about}</p>
        </li>
    )
}
export default projectCard