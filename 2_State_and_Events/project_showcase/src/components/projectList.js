import ProjectCard from "./projectCard"
import ProjectForm from "./projectForm"
import { useState } from "react"

function ProjectList({projects}){
    const [projectList, setProjectList] = useState(projects)
    const [filterString, setFilterString] = useState("")
    const [hide,setHide] = useState(false)
    console.log(filterString)

    const projectsFiltered = projectList.filter((individualProject)=>{
        return individualProject.name.toLowerCase().includes(filterString.toLowerCase())
    })

    const projectsCards = projectsFiltered.map(individualProject=>{
        return <ProjectCard key={individualProject.id} project={individualProject}/>
    })

    function bringToApp(newProject){
        console.log(newProject)
        const newArray = [...projectList,newProject]
        console.log(newArray)
        setProjectList(newArray)
      }

    // console.log(projectsCards)
    return (
        <>
            <input onChange={(e)=>setFilterString(e.target.value)}></input>
            <button onClick={()=>setHide(!hide)}> 
                {
                    hide? "Show Cards" : "Hide Cards"
                }
            </button>
            {
               hide? <></> : <ul className = "cards">{projectsCards}</ul>
            }
            <ProjectForm bringToApp={bringToApp} hide={hide}/>
        </>
    )
}
export default ProjectList