import {useState} from 'react'
function Header({darkMode, setDarkMode}){
    const [count, setCount] = useState(0)
    // console.log("Hi")
    function switchDM(){
        if(darkMode==="Dark"){
            setDarkMode("Light")
        }
        else{
            setDarkMode("Dark")
        }
    }
    return (
    <div>
        Header
        <button onClick={()=>switchDM()}>{darkMode}</button>
        <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
    )
}

export default Header