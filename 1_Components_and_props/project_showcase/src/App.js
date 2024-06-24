import Header from "./components/Header";
import ProjectForm from "./components/Form"
import ProjectList from "./components/List";
import projects from "./projects";

function App() {
  // Lets create a basic react component and bring it in!
  // Lets go ahead and create all the components mentioned starting
  // with the header!
  // Next the project form
  // Now the project list, we'll pass the projects into it
  const user = {
    username: "Bill",
    userImage: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHUyMzMxNzg4LWltYWdlLXJtNTAzLTAxXzEtbDBqOXFyYzMucG5n.png"
  }

  const notherDiv = (
    <div className="divRed">
      And another one
    </div>
  )

  const userHeader = (
    <div>
      Hello there {user}
    </div>
  )

  return(
    <div className="App">
      <Header user={user} mode="Dark"/>
      <ProjectForm/>
      <ProjectList projects={projects}/>
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
// Create an li card that displays relevent info
// What happens if our data doesn't have what we need?
