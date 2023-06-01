import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import projects from "./projects";
import { useState, useEffect } from "react";

function App() {
  const [search,setSearch] = useState("")
  const [mode, setMode] = useState(true)
  const [projects, setProjects] = useState([])
  const newstring = "New String"
  const test = <ComponentTest hello = {"Hello"}/>


  function testUseEffect(){
    console.log("Seperate Function")
  }

  useEffect(()=>{
    fetch("http://localhost:4000/projects")
    .then(r=>r.json())
    .then(data=>setProjects(data))
    }
  ,[])

  console.log(projects)
  function handleChange(searchValue){
    setSearch(searchValue)
    // search = e.target.value
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

  return (
  <div className="App">
    {/* <BrowserRouter>
      <Header mode = {mode} handleClick={handleClick}/>
      <Switch>
        <Route exact path="/">
          <ProjectList search={search} projects ={projects} handleChange={handleChange} setProjects={setProjects}/>
        </Route>
        <Route exact path="/form">
          <ProjectForm addToProject = {addToProject}/>
        </Route>
        <Route exact path="/form/:id">
          <ProjectForm addToProject = {addToProject}/>
        </Route>
        <Route path="">
          <div>Page does not exist</div>
        </Route>
      </Switch>
      
    </BrowserRouter> */}
    <BrowserRouter>
      <Header mode = {mode} handleClick={handleClick}/>
      <Routes>
        <Route path="/" element = {<ProjectList search={search} projects ={projects} handleChange={handleChange} setProjects={setProjects}/>}/>
        <Route path = "/form" element = {<ProjectForm addToProject = {addToProject}/>}/>
        <Route path = "/form/:id" element = {<ProjectForm addToProject = {addToProject}/>}/>
      </Routes>

    </BrowserRouter>
  </div>
  );
}

export default App;
