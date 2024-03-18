
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
import {useState} from 'react'
import ProjectCard from './components/ProjectCard';

function App() {
  const [user,setUser] = useState(undefined)
  console.log(user)
  console.log("App loaded")
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        {user?
        <Route path="/user/*" element={<User username = {user.username}/>}/>
        :<></>}
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectCard/>}/>
        {/* </Route> */}
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="*" element={<div>404 NOT FOUND</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
