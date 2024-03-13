import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"
import {useState} from 'react'
import Search from "../components/Search"

function ProjectContainer(){
    const [search,setSearch] = useState("")
    const [projectState,setProjectState] = useState([])

    function fetchData(){
        fetch('http://localhost:4000/projects')
        .then(r=>r.json())
        .then(data=>{
            setProjectState(data)
        })
    }

    const projectsFilter = projectState.filter((project)=>{
        return project.name.toLowerCase().includes(search.toLowerCase()) || project.about.toLowerCase().includes(search.toLowerCase())
    })
    const projComp = projectsFilter.map((project)=>{
        return <ProjectCard key={project.id} project={project} handleDelete={handleDelete}/>
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

    return(
        <div>
            <button onClick={()=>fetchData()}>Fetch Data</button>
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