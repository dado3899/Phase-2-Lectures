import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";

function App() {
  console.log(projects)
  const newstring = "New String"
  const test = <ComponentTest hello = {"Hello"}/>
  return (
  <div className="App">
    <Header/>
    <ProjectForm/>
    <ProjectList projects ={projects}/>
  </div>
  );
}

export default App;
