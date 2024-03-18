import {Link,useParams } from "react-router-dom";
import {useEffect, useState} from 'react'

function ProjectCard({}){

    const {id} = useParams()
    const [project,setProject] = useState(undefined)
    useEffect(()=>{
        fetch(`http://localhost:4000/projects/${id}`)
        .then(r=>r.json())
        .then(data=>{
            setProject(data)
        })
    },[])
    return (
    <div>
        <h1>{project?.name}</h1>
        <img src={project?.image}/>
    </div>
    )
}
export default ProjectCard