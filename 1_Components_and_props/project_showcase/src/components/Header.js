// Header:
// Header with h1
// span with class logo!
// Button
import Form from './Form'
import {useState} from 'react'
function Header({darkMode,x,y,setDarkMode}){
    
    // console.log(darkMode,x,y)
    // const {darkMode,x,y}  = props
    function click(){
        if (darkMode == "Dark"){
            setDarkMode("Light")
        }
        else{
            setDarkMode("Dark")
        }
        console.log(darkMode)
    }
    return(
      <h1>
        Header:
        <button onClick={()=>click()}>{darkMode}</button>
        <Form/>
      </h1>
    )
  }

export default Header