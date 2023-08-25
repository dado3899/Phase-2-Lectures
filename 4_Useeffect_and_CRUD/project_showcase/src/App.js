import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectContainer from "./components/projectContainer";
// import projects from "./projects";
import { useState } from "react";

function App() {
  // Review: useState
  const [darkMode, setDarkMode]= useState(false)

  // Let us fetch the data and set it to a usestate

  // console.log(projects)
  return (
  <div className="App">
    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <ProjectContainer darkMode={darkMode}/>
  </div>
  );
}

export default App;
