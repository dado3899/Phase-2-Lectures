import {Link,useParams, Routes, Route,useNavigate} from "react-router-dom";
import {useEffect,useState} from 'react'
import ProjectCard from "./ProjectCard";

function Projects({}){
    const [projects,setProjects] =useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        console.log("Projects")
        fetch('http://localhost:4000/projects')
        .then(r=>r.json())
        .then(data=> {
            setProjects(data)
        })
    },[])

    const projComp = projects.map((project)=>{
        return <div onClick={()=>navigate(`${project.id}`)}>{project.name}</div>
    })

    return (
    <div>
        {projComp}
        {/* <Route path="/a" element = {<p>"Nested"</p>}/> */}
    </div>
    )
}
export default Projects