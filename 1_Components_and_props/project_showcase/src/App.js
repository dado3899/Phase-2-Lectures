import projects from "./projects"
import Component1 from "./components/component1"
import Header from "./components/header"
import ProjectCard from "./components/projectCard"
import ProjectForm from "./components/projectForm"

function App() {
  // console.log(projects)
  const header = "THIS IS A HEADER"
  const componentParagraph = "Lets create a basic react component and bring it in!"

  let phase = 4
  const filteredProjects = projects.filter(project => project.phase === phase)

  const projectList = filteredProjects.map((project)=> {
    // console.log(project)
    return <ProjectCard key={project.id} individualProject={project} function1={consoleLogsSomething}/>
  })
  console.log(projectList)

  function consoleLogsSomething(something){
    console.log(something)
  }

  function addToArray(newProject){
    projects.push(newProject)
    console.log(projects)
  }

  return(
    <div className="App">
      <button onClick = {()=>{
        phase = 3
        console.log(phase)
        }
      }>
        change to 3
      </button>
      <Header/>
      {projectList}
      <ProjectForm addToArray={addToArray}/>
      <Component1 componentParagraph = {componentParagraph} x = "hello" y = "Goodbye"/>
      <div>Test showcase</div>
    </div>
  )
} 

export default App;

// Header:
// Header with h1
// span with class logo!
// Button

// Project form:
// Create a form (class form)
// Label/input combo for the inputs

// Project list
// map through the list and return name in div
// Display that!
// Lets create a smaller card component for each of these
// Destructure the data using {...}
// Create an li card that displays relevent info
// What happens if our data doesn't have what we need?
