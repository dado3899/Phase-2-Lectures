import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import projects from "./projects";

function App() {
  // Lets create a basic react component and bring it in!
  // Lets go ahead and create all the components mentioned starting
  // with the header!
  // Next the project form
  // Now the project list, we'll pass the projects into it
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
// Create a ul with cards classname
// Create an li card that displays relevent info
// What happens if our data doesn't have what we need?
