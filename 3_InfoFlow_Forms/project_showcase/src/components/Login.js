import {useState} from 'react'
function Login({setUser}){
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
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
    return(
        <form onSubmit={(e)=>handleLogin(e)}>
            <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            {password.length>3?<></>:<p>PLEASE PUT IN A VALID PASSWORD!!!</p>}
            <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login