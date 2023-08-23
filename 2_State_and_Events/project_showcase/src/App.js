import { useState } from "react";
import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";
import NewComponent from "./components/newcomponent";
import Counter from "./components/counter"

function App() {
  // console.log(projects)
  

  // console.log(projectList)

  const newstring = "Header"
  const test = <ComponentTest hello = {"Hello"}/>
  const multiComp = [<NewComponent key={1}/>,<NewComponent key={2}/>,<NewComponent key={3}/>]
  console.log(test.props.hello)
  // function bringToApp(newProject){
  //   console.log(newProject)
  //   const newArray = [...projectList,newProject]
  //   console.log(newArray)
  //   setProjectList(newArray)
  // }

  return (
  <div className="App">
    <Header newstring={newstring}/>
    <Counter/>
    {multiComp}
    {/* {test} */}
    {/* <ProjectForm bringToApp={bringToApp}/> */}
    {/* <ProjectList projectList ={projectList}/> */}
    <ProjectList projects ={projects}/>
  </div>
  );
}

export default App;
