import { useState } from 'react'
function ProjectForm({projectState, setProjectState}){
    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    // console.log(projectState)
    function handleSubmit(e){
        e.preventDefault()
        const newProject = 
        {
            name: name,
            about: image,
            phase: 8,
            link: "",
            image: description
        }
        // projectState.push(newProject)
        fetch("http://localhost:4000/projects",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProject)
        })
        .then(r=>r.json())
        .then(data=>{
            const newArray = [...projectState,data]
            setProjectState(newArray)
            // console.log(data)
        })
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <p>Name</p>
            <input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Image</p>
            <input placeholder="image" value={image} onChange={(e)=>setImage(e.target.value)}/>
            <p>Description</p>
            <input placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ProjectForm