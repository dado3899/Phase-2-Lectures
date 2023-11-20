import ProjectForm from "./projectForm"
import ProjectList from "./projectList"
import {useState, useEffect} from "react"
function ProjectContainer({darkMode}){
    const [projects,setProjects] = useState([])
    const [counter,setCounter] = useState(0)
    
    let counterVar = 0

    useEffect(()=>{
        console.log("in useeffect")
        fetch("http://localhost:3000/projects")
        .then(r => r.json())
        .then(data =>setProjects(data))
    },[])
    

    function postProject(newProj){
        console.log(newProj)
        fetch("http://localhost:3000/projects",
        {
            method: "POST",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProj)
        })
        .then(r=> r.json())
        .then(data=>setProjects([...projects,data]))
    }

    function deleteProject(id){
        fetch(`http://localhost:3000/projects/${id}`,
        {
            method: "DELETE",
        })
        .then(r=>r.json())
        .then(data => {
            const newProjList = projects.filter(
                (project)=>{
                    return project.id !== id
                }
            )
            setProjects(newProjList)
        })
    }

    function updateProject(updatedProject){
        fetch(`http://localhost:3000/projects/${updatedProject.id}`,
        {
            method: "PATCH",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProject)
        })
        .then(r=> r.json())
        .then(data=>{
            const newProjArray = projects.map((project)=>{
                if(project.id===data.id){
                    return data
                }
                return project
            })
            setProjects(newProjArray)
        })
    }
    // useEffect(()=>{
    //     console.log(counter)
    // },[counter])

    return(
        <>
            <button onClick={()=>setCounter(counter+1)}>Update Counter {counter}</button>
            <ProjectForm postProject={postProject}/>
            <ProjectList projects ={projects} deleteProject={deleteProject} updateProject={updateProject}/>
        </>
    )
}
export default ProjectContainer