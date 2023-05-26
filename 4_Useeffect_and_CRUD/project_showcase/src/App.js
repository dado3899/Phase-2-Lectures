import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
// import projects from "./projects";
import { useState } from "react";

function App() {
  const [search,setSearch] = useState("")
  const [mode, setMode] = useState(true)
  // console.log(projects)
  const [projects, setProjects] = useState([])
  const newstring = "New String"
  const test = <ComponentTest hello = {"Hello"}/>

  function fetchData(){
    fetch("http://localhost:4000/projects")
    .then(r=>r.json())
    .then(data=>setProjects(data))
  }

  function handleChange(searchValue){
    setSearch(searchValue)
    // search = e.target.value
    console.log(search)
  }

  function handleClick(){
    console.log("Changing mode")
    setMode(!mode)
  }

  function addToProject(newData){
    // const newArray = [...projects,newData]
    // console.log(newArray)
    fetch("http://localhost:4000/projects",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(newData)
    })
    .then(r=>r.json())
    .then(data=>  setProjects([...projects,data]))
    
  
  }

  console.log(projects)
  return (
  <div className="App">
    <Header mode = {mode} handleClick={handleClick} fetchData={fetchData}/>
    <ProjectForm addToProject = {addToProject}/>
    <ProjectList search={search} projects ={projects} handleChange={handleChange} setProjects={setProjects}/>
  </div>
  );
}

export default App;
