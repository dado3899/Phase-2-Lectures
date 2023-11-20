import {useState,useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";

function ProjectCard({project,deleteProject,updateProject}){
    //Destructure the project
    const history = useHistory()
    // console.log(project)
    const {id} = project
    const [name,setName] = useState(project.name)
    const [phase,setPhase] = useState(project.phase)
    const [about,setAbout] = useState(project.about)
    const [updateName, setUpdateName] = useState(false)
    const [updatePhase, setUpdatePhase] = useState(false)
    const [updateAbout, setUpdateAbout] = useState(false)
    const [timer, setTimer] = useState(10)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
                setTimer(timer-1)
            },1000)
        return(
            ()=>clearTimeout(timeout)
        )
    },[timer])
    useEffect(()=>{
        const updatedProjObj ={
            id:id,
            name:name,
            phase:phase,
            about:about
        }
        updateProject(updatedProjObj)
    },[name,phase,about])



    return(
    <li className="card" onClick={()=>history.push(`/home/${id}`)}>
        <h1>{timer}</h1>
        {/* <Link to={`/home/${id}`}> Link To</Link> */}
        {
            updateName? 
            <input 
                onChange={(e)=>setName(e.target.value)}
                onBlur={()=>setUpdateName(false)} value={name}>
            </input>
            :
            <h3 onClick={()=>setUpdateName(true)}> {name}</h3>
        }
        {
            updatePhase?
            <input 
                onChange={(e)=>setPhase(e.target.value)} 
                onBlur={()=>setUpdatePhase(false)} value={phase}>
            </input>
            :
            <h3 onClick={()=>setUpdatePhase(true)}> {phase}</h3>
        }
        {
            updateAbout?
            <input 
                onChange={(e)=>setAbout(e.target.value)} 
                onBlur={()=>setUpdateAbout(false)} value={about}>
            </input>
            :
            <h3 onClick={()=>setUpdateAbout(true)}> {about}</h3>
        }
        <button onClick={()=>deleteProject(id)}>Delete</button>
    </li>)
}
export default ProjectCard