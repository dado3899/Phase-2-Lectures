import {useState,useEffect} from 'react'
function ProjectCard({project,deleteProject,updateProject}){
    //Destructure the project
    const {id} = project
    const [name,setName] = useState(project.name)
    const [phase,setPhase] = useState(project.phase)
    const [about,setAbout] = useState(project.about)
    const [updateName, setUpdateName] = useState(false)
    const [updatePhase, setUpdatePhase] = useState(false)
    const [updateAbout, setUpdateAbout] = useState(false)

    // useEffect(()=>{
    //     console.log("Mounted")
    //     return () => {
    //         console.log("Unmounted");
    //     };
    // },
    // [])
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
    <li className="card">
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