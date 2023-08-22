import { useState } from "react";
import ComponentTest from "./component";

function Counter(){
    // const count = 0
    // setCount => changes above const
    const [count,setCount] = useState(0)

    // let count2 = 0

    // console.log("In Counter")
    // console.log(count)

    // function settingCount(){
    //     setCount(count+1)
    // }
    // function settingCount2(){
    //     count2 += 1
    //     console.log(count2)
    // }
    
    return (
        <>
            <h1>Counter: {count}</h1>
            {/* <button onClick={()=>settingCount2()}>count2 button</button> */}
            <ComponentTest count={count} setCount={setCount}/>
        </>
    )
}

export default Counter