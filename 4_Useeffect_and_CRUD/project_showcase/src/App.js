import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
// import projects from "./projects";
import { useState, useEffect } from "react";

function App() {
  const [search,setSearch] = useState("")
  const [mode, setMode] = useState(true)
  const [projects, setProjects] = useState([])
  const [checkUpdate,setCheckUpdate] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:3001/projects')
    .then(r=>r.json())
    .then(data=>{
      setProjects(data)
    })
  },[])


  function addToData(newData){
    fetch('http://localhost:3001/projects',{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(r=>r.json())
    .then(data=>setProjects([...projects,data]))
  }

  function handleDelete(id){
    fetch(`http://localhost:3001/projects/${id}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      const newProjArr = projects.filter((project)=>{
        return project.id !== id
      })
      setProjects(newProjArr)
    })
  }

  function handlePatch(newObj){
    fetch(`http://localhost:3001/projects/${newObj.id}`,{
      method:"PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    .then(r=>{
      // const newArr = projects.map((project)=>{
      //   if (project.id === newObj.id){
      //     return newObj
      //   }
      //   return project
      // })
      // setProjects(newArr)
      setCheckUpdate(!checkUpdate)
    })
  }

  function handleChange(searchValue){
    setSearch(searchValue)
    // search = e.target.value
  }

  function handleClick(){
    console.log("Changing mode")
    setMode(!mode)
  }

  return (
  <div className="App">
    <Header mode = {mode} handleClick={handleClick}/>
    <ProjectForm addToData={addToData}/>
    <ProjectList search={search} projects ={projects} handleChange={handleChange} handleDelete={handleDelete} handlePatch={handlePatch}/>
  </div>
  );
}

export default App;
