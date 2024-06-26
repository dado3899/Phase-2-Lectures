import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import Footer from "./components/footer"
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState("dark")
  const [name,setName] = useState("David")
  const [projects,setProjects] = useState([])

  function fetchData(){
    fetch('http://localhost:5555/projects')
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setProjects(data)
    })
  }

  function handleDelete(idToDelete){
    fetch(`http://localhost:5555/projects/${idToDelete}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      const filteredArr = projects.filter((indvProject)=>{
        if(indvProject.id === idToDelete){
            return false
        }
        return true
      })
      setProjects(filteredArr)
    })
  }

  function handleSubmit(newProj){
    fetch("http://localhost:5555/projects",{
      method:"POST",
      headers:{
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newProj)
    })
    .then(r=>r.json())
    .then(data=>{
      const newArr = [...projects,data]
      setProjects(newArr)
    })
  }

  function handleEdit(idToEdit,newName){
    fetch(`http://localhost:5555/projects/${idToEdit}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name: newName
      })
    })
    .then(r=>r.json())
    .then(updatedProject=>{
      const newArr = projects.map(project => {
        if(project.id === updatedProject.id){
          return updatedProject
        }
        return project
      })
      setProjects(newArr)
    })
  }


  

  return (
  <div className={`App ${mode}`}>
    <Header name={name} setName={setName} mode={mode} setMode={setMode} fetchData={fetchData}/>
    <ProjectForm handleSubmit={handleSubmit}/>
    <ProjectList name={name} projects={projects} handleDelete={handleDelete} handleEdit={handleEdit}/>
    <Footer/>
  </div>
  );
}

export default App;
