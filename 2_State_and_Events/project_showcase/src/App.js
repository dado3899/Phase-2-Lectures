import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";
import TestComponent from "./components/testcomponent";
import {useState} from 'react'


function App() {
  const [darkMode,setDarkMode] = useState("Dark")
  const [projectsArray, setProjectsArray] = useState(projects)
  console.log(projectsArray)
  const x = "Hello"
  const h1 = <h1>Another hello</h1>
  // const tcVar = <TestComponent/>
  function addtoProjects(newProj){
    setProjectsArray([...projectsArray,newProj])
  }
  function deleteProject(id){
    const newArray = projectsArray.filter((project)=>{
      return project.id!==id
    })
    setProjectsArray(newArray)
  }
  return (
    <div className="App">
      {/* <TestComponent render = {"Render this"} anotherString ={"string"} tiernary={16}/> */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ProjectForm addtoProjects={addtoProjects}/>
      <ProjectList projectsArray = {projectsArray} deleteProject={deleteProject}/>
    </div>
  );
}

export default App;
