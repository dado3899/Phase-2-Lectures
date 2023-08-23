import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";
import { useState } from "react";

function App() {
  // Review: useState

  // Let us fetch the data and set it to a usestate

  console.log(projects)
  return (
  <div className="App">
    <Header/>
    <ProjectForm/>
    <ProjectList projects ={projects}/>
  </div>
  );
}

export default App;
