import {useState,useEffect} from 'react'
function Countdown({setCountFinished,mode}){
    const [counter,setCounter] = useState(10)
    // console.log("Not use Effect")
    useEffect(()=>{
        console.log("useeffect counter: ", counter)
    },[counter])

    
    function counting(){
        if(counter-1===0){
            setCountFinished(true)
        }
        setCounter(counter-1)
    }

    return(
        <button onClick={()=>counting()}>{counter}</button>
    )
}
export default Countdown