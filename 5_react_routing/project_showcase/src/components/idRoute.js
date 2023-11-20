import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import ProjectCard from "./projectCard";

function IdRoute({}){
    const {id, id2} = useParams()
    // console.log(projects)
    console.log(id,id2)
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/projects/${id}`)
        .then(r=>r.json())
        .then(data=>setProjects([data]))
    },[])
    const card = projects.map(project=><ProjectCard project = {project} deleteProject={()=>{console.log("hi")}} updateProject={()=>{console.log("hi")}}/>)
    return (
        card
    )
}

export default IdRoute