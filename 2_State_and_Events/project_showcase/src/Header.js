import { useState } from 'react'
function Header({name,name2,name3,mode,setMode}){
    // console.log(name3)
    // let var = ""
    // const [var,setVar] = useState("")
    const [count,setCount] = useState(0)
    
    const [currentName, setCurrentName] = useState(name)
    function handleClick(x){
        setCount(count+1)
    }
    function switchMode(){
        if (mode ==="dark"){
            setMode("light")
        }
        else{
            setMode("dark")
        }
    }
    console.log("Count: ", count)
    // .addEventlistiner
    return(
        <header>
            <p onClick={()=>{
                if (currentName===name){
                    setCurrentName(name2)
                }
                else if(currentName===name2){
                    setCurrentName(name3)
                }
                else{
                    setCurrentName(name)
                }
            }}>{currentName}</p>
            <button onClick={switchMode} >{mode==='light'?"Dark":"Light"}</button>
            <button onClick={()=>handleClick("This is x")}>Number: {count}</button>
        </header>
    )
}
export default Header