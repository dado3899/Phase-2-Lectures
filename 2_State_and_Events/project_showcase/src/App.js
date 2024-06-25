import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projectsOG from "./projects";
import Footer from "./components/footer"
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState("dark")
  console.log(mode)
  const [name,setName] = useState("David")
  const [projects,setProjects] = useState(projectsOG)
  
  // console.log(projects)

  // function addTwo(a,b){
  //   return a+b
  // }
  // a = 3, b=4
  // addTwo(3,4)

  return (
  <div className={`App ${mode}`}>
    <Header name={name} setName={setName} mode={mode} setMode={setMode}/>
    <ProjectForm projects={projects} setProjects={setProjects}/>
    <ProjectList name={name} projects={projects} setProjects={setProjects}/>
    <Footer/>
  </div>
  );
}

export default App;
