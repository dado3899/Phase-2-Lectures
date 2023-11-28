import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
// import projects from "./projects";
import { useState } from "react";

function App() {
  const [projList,setProjList] = useState([])

  function addProj(newProj){
    fetch('/projects',{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProj)
    })
    .then(r=>{
      if(r.ok){
        return r.json()
      }
      else{
        alert("Server failed")
      }
    })
    .then(data=>{
      if(data){
        setProjList([...projList,data])
      }
    })
  }

  function deleteProj(id){
    fetch(`/projects/${id}`,{
      method: "DELETE"
    })
    .then(r=>{
      if(r.ok){
        return r.json()
      }
      else{
        alert("Server failed")
      }
    })
    .then(data=>{
      if(data){
        const newArray = projList.filter((project)=>{
          return project.id !== id
        })
        setProjList(newArray)
      }
    })

  }

  function patchProj(toPatch){
    fetch(`/projects/${toPatch.id}`,{
      method: "PATCH",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(toPatch)
    })
    .then(r=>r.json())
    .then(data=>{
      fetch('/projects')
      .then(r=>r.json())
      .then(data=>setProjList(data))
    })
  }

  return (
  <div className="App">
    <Header setProjList={setProjList}/>
    <ProjectForm addProj={addProj}/>
    <ProjectList  projects ={projList} deleteProj={deleteProj} patchProj={patchProj}/>
  </div>
  );
}

export default App;
