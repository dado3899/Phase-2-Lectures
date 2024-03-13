import Header from "./Header"
import ProjectContainer from "./projects_componenets/ProjectContainer";
import Test from "./components/test_component";
import {useState} from 'react'
import Countdown from "./components/Countdown";
import Login from "./components/Login";

function App() {
  const [mode, setMode] = useState("dark")
  const [countFinished, setCountFinished] = useState(false)
  const [user, setUser] = useState(undefined)


  return(
    <div className={`App ${mode}`}>

      {countFinished ? <div>COUNTDOWN FINISHED</div>:<></>}
      <Header user={user} mode={mode} setMode={setMode}/>
      {user?<button onClick={()=>setUser(undefined)}>Logout</button>:<Login setUser={setUser}/>}
      <ProjectContainer/>
      <Countdown setCountFinished={setCountFinished}/>
      
      {/* <Test toDisplay={"Display THis"} consoleLog={"Hello World"}/> */}
    </div>
  )
}

export default App;

