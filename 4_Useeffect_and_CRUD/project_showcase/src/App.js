import Header from "./Header"
import ProjectContainer from "./projects_componenets/ProjectContainer";
import Test from "./components/test_component";
import {useState,useEffect} from 'react'
import Countdown from "./components/Countdown";
import Login from "./components/Login";

function App() {
  const [mode, setMode] = useState("dark")
  const [countFinished, setCountFinished] = useState(false)
  const [allUsers,setAllUsers] = useState([])
  const [user, setUser] = useState(undefined)

  function fetchUsers(){
    fetch('http://localhost:4000/users')
    .then(r=>r.json())
    .then(data => {
      setAllUsers(data)
    })
  }

  

  function addUsers(newUser){
    fetch('http://localhost:4000/users',{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(r=>r.json())
    .then(data=>{
      const newUsers = [...allUsers,data]
      setAllUsers(newUsers)
      setUser(data)
    })
  }

  return(
    <div className={`App ${mode}`}>

      {countFinished ? <div>COUNTDOWN FINISHED</div>:<></>}
      <button onClick={()=> fetchUsers()}>FetchUsers</button>
      <Header user={user} mode={mode} setMode={setMode}/>
      {user?<button onClick={()=>setUser(undefined)}>Logout</button>:<Login addUsers={addUsers} setUser={setUser}/>}
      <ProjectContainer/>
      <Countdown setCountFinished={setCountFinished} mode={mode}/>
      
      {/* <Test toDisplay={"Display THis"} consoleLog={"Hello World"}/> */}
    </div>
  )
}

export default App;

