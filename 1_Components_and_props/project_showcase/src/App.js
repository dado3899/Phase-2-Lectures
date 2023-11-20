import Header from "./components/Header";
import Form from "./components/Form";
import projects from "./projects";
import ProjectCard from "./components/projectCard";
import {useState} from 'react'

function App() {
  // const x = 0
  const [x,setX] = useState(0)
  const [darkMode,setDarkMode] = useState("Dark")
  
  // let x = 0
  console.log(x)
  console.log("Refresh")
  // Lets create a basic react component and bring it in!
  // Lets go ahead and create all the components mentioned starting
  // with the header!
  // Next the project form
  // Now the project list, we'll pass the projects into it
  // const darkmode = "Light"
  const helloh1 = <h1>Hello</h1>
  const projectName = "THIS IS A NEW PROJECT"
  
  const projectCardComponents = projects.map((project)=>{
    return <ProjectCard key={project.id} project={project}/>
  })
  console.log(projectCardComponents)
  return(
  <>
    <Header darkMode={darkMode} x={10} y={20} setDarkMode={setDarkMode}/>
    <div className="App" id="uid">
      Project thing
      {projectName}
      {helloh1}
      <Form/>
      <button onClick={()=>setX(x+1)}>X: {x}</button>
      {projectCardComponents}
    </div>
  </>
  );
}

export default App;





// Project list
