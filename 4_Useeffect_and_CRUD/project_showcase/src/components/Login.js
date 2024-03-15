import {useState,useEffect} from 'react'
function Login({addUsers,setUser}){
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [newUsername,setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [signup, setSignup] = useState(false)

    const [mouseX,setMouseX] = useState(0)
    
  
    // useEffect(()=>{
    //   function handleEvent(event) {
    //     console.log(event.clientX)
    //     setMouseX({x: event.clientX, y:event.clientY});
    //   }
    
    //   window.addEventListener("mousemove", handleEvent);
    //   return(()=>{
    //     window.removeEventListener("mousemove",handleEvent)
    //   })
    // },[])

    function handleLogin(e){
        e.preventDefault()
        fetch('http://localhost:4000/users')
        .then(r=>r.json())
        .then(data=>{
            const usersFound = data.filter((user)=>{
                if(user.username===username && user.password===password){
                    return user
                }
                return false
            })
            if(usersFound.length===1){
                setUser(usersFound[0])
            }
            else{
                alert("Not valid credentials")
            }
        })
    }

    function handleSignup(e){
        e.preventDefault()
        const newUser = {
            username: newUsername,
            password: newPassword
        }
        addUsers(newUser)
    }

    return(
        <>
            <button onClick={()=>setSignup(!signup)}>To {signup?"Login":"Signup"}</button>
            {
                signup ? 
                <form onSubmit={(e)=>handleSignup(e)}>
                    <input placeholder="Username" value={newUsername} onChange={(e)=>setNewUsername(e.target.value)} />
                    <input placeholder="Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                    <button type="submit">Signup</button>
                </form>
                :
                <form onSubmit={(e)=>handleLogin(e)}>
                    <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            }
        </>
    )
}
export default Login