
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import User from './components/User';
import Posts from './components/Post';
import Navbar from './components/Navbar';
import SingleUser from './components/singleUser';
import Login from './components/Login'
import {useState, useEffect} from 'react'
import Home from './components/Home';

function App() {
  const [users,setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  // const navigate = useNavigate()
  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(r=>r.json())
    .then(data=>setUsers(data))
  },[])

  return (
    <BrowserRouter>
        <Navbar currentUser={currentUser}/>
        <Routes>
            <Route path="/" element={<Home currentUser={currentUser}/>}/>
            <Route path="/posts" element={
                <Posts/>
            }/>
            <Route path="/users" element={<User users={users} setCurrentUser={setCurrentUser}/>}/>
            <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser}/>}/>
            <Route path="/users/:id" element={<SingleUser currentUser={currentUser}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
