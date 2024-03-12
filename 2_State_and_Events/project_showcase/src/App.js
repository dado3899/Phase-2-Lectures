import Header from "./Header"
import ProjectContainer from "./projects_componenets/ProjectContainer";
import Test from "./components/test_component";
import {useState} from 'react'

function App() {
  const [mode, setMode] = useState("dark")

  return(
    <div className={`App ${mode}`}>
      <Header name={"David"} name2={"Sam"} name3={"Jackson"} mode={mode} setMode={setMode}/>
      <ProjectContainer/>
      {/* <Test toDisplay={"Display THis"} consoleLog={"Hello World"}/> */}
    </div>
  )
}

export default App;

