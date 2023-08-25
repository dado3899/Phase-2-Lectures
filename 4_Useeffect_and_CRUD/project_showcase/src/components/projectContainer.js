import ProjectForm from "./projectForm"
import ProjectList from "./projectList"
import {useState} from "react"
function ProjectContainer({}){
    const [projects,setProjects] = useState([])

    function fetchData(){
        fetch("http://localhost:4000/projects")
        .then(r=>r.json())
        .then(data=>setProjects(data))
    }
    

    return(
        <>
            <button onClick={()=>fetchData()}>Fetch Data</button>
            <ProjectForm/>
            <ProjectList projects ={projects}/>
        </>
    )
}
export default ProjectContainer