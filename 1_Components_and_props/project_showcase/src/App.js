import Header from "./Header"
import ProjectContainer from "./projects_componenets/ProjectContainer";

function App() {
  // Lets create a basic react component and bring it in!
  // Lets go ahead and create all the components mentioned starting
  // with the header!
  // Next the project form
  // Now the project list, we'll pass the projects into it
  // const var1 = <Header name={"David"} name2={"Sam"} name3={"Jackson"}/>
  // const h1 = <h1> This is the text! </h1>


  return(
    <div className="App">
      <Header name={"David"} name2={"Sam"} name3={"Jackson"}/>
      <ProjectContainer/>
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
