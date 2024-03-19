
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import User from './components/User';
import Projects from './components/Projects';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {useState, useRef} from 'react'
import ProjectCard from './components/ProjectCard';
import UserContext from './context/UserContext';
import Component1 from './components/comp1';

function App() {
  const [user,setUser] = useState(undefined)
  const previousUser = useRef(undefined)

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        {/* <button onClick={()=> counter.current-=1}>{counter.current}</button> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          {user?
          <>
            <Route path="/user/*" element={<User username = {user.username}/>}/>
            <Route path="/logout" element={<button onClick={()=>{
              setUser(undefined)
              previousUser.current = user
              }}>LOGOUT</button>}/>
          </>
          :<></>}
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectCard/>}/>
          {/* </Route> */}
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/nested" element={<Component1/>}/>
          <Route path="*" element={<div>404 NOT FOUND</div>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
