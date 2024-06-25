import { useState } from 'react'
import LoginForm from './loginForm'

function Header({name,setName, mode,setMode}){
    const [count,setCount] = useState(0)
    // let count = 0
    // const [state, stateSetter] = useState(initialState)
    
    console.log("Rerender Header")

    function click(){
        // count+=1
        const newCount = count+1
        setCount(newCount)
        if(newCount === 10){
            alert("YAYYYYYY")
        }
        // Continue, I'm doing something
    }
    
    return (
        <div>
            {name}'s Page
            <button onClick={()=>click()}>{count} Likes</button>
            <button onClick={()=>{
                mode == "dark" ? setMode("light") : setMode("dark")
            }}>{mode=="dark" ? "Light" : "Dark"} Mode</button>
            <LoginForm setName={setName} />
        </div>
)
}

export default Header