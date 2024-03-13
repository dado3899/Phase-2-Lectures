import {useState} from 'react'
function Countdown({setCountFinished}){
    const [counter,setCounter] = useState(10)

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