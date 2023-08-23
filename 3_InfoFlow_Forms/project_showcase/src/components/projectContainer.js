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

    function postData(newData){
        fetch("http://localhost:4000/projects",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData)
        })
        .then(r=>r.json())
        .then(postdata=> setProjects([...projects,postdata]))
    }
    function deleteData(id){
        console.log(id)
        fetch(`http://localhost:4000/projects/${id}`,
        {
            method: "DELETE"
        })
        .then(r=>r.json())
        .then(data=>{
            const newProjectsList=projects.filter(project=>project.id!==id)
            setProjects(newProjectsList)
        })
    }
    

    return(
        <>
            <button onClick={()=>fetchData()}>Fetch Data</button>
            <ProjectForm postData={postData}/>
            <ProjectList projects ={projects} deleteData={deleteData}/>
        </>
    )
}
export default ProjectContainer