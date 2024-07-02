
import './App.css';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Header from './components/Header';
import SinglePost from './components/SinglePost';
import {useState,useEffect} from 'react'

function App() {
  const [user,setUser] = useState(null)
  const [allUsers,setAllUsers] = useState([])

  useEffect(()=>{
    fetch("http://localhost:5555/users")
    .then(r=>r.json())
    .then(data=>{
      setAllUsers(data)
    })
  } 
  ,[])

  return (
    <div>
      <BrowserRouter>
      <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          {
            user?
            <>
              <Route path="/profile/:username" element={
                <User user={user}/>
              }/>
              <Route path="/post/:postid" element={<SinglePost/>}/>
            </>
            :
            <Route path="/login" element={
              <Login allUsers={allUsers} setUser={setUser}/>
            }/>
          }
          <Route path="/:catch" element={
            <div>
              SORRY PAGE DOESN"T EXISTS
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
