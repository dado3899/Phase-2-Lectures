import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"
import {useState,useEffect} from 'react'
import Search from "../components/Search"

function ProjectContainer(){
    const [search,setSearch] = useState("")
    const [projectState,setProjectState] = useState([])
    // const [reFetch, setReFetch] = useState(false)
    // console.log("Out of use effect")
    // console.log("in use effect")

    useEffect(()=>{
        fetch('http://localhost:4000/projects')
        .then(r=>r.json())
        .then(data=>{
            setProjectState(data)
        })
    }
    ,[])
    

    const projectsFilter = projectState.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase()) || project.about.toLowerCase().includes(search.toLowerCase())
    })
    const projComp = projectsFilter.map((project)=>{
        return <ProjectCard key={project.id} project={project} handlePatch={handlePatch} handleDelete={handleDelete}/>
    })

    function handleDelete(idToDelete){
        const newArray = projectState.filter((project=>{
            return project.id !== idToDelete
        }))
        fetch(`http://localhost:4000/projects/${idToDelete}`,{
            method: "DELETE"
        })
        .then(r=>r.json())
        .then(data => {
            setProjectState(newArray)
        })
    }

    function handlePatch(updatedProject){
        fetch(`http://localhost:4000/projects/${updatedProject.id}`,{
            method: "PATCH",
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify(updatedProject)
        })
        .then(r=>r.json())
        .then(updatedProj=>{
            // console.log(data)
            // LOOK THROUGH TO FIND THE ONE BEING PATCHED
            // CHANGE ONLY THAT ONE
            const newArray = projectState.map((originalProject)=>{
                if(originalProject.id === updatedProj.id){
                    return updatedProj
                }
                return originalProject
            })
            setProjectState(newArray)
        })
    }


    return(
        <div>
            <ProjectForm projectState={projectState} setProjectState={setProjectState}/>
            <h1>PROJECTS:</h1>
            <Search setSearch={setSearch}/>
            <ul className="cards">
                {projComp}
            </ul>
        </div>
    )
}
export default ProjectContainer