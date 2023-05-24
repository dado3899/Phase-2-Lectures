import { useState } from "react";
function Header(){
    const [mode, setMode] = useState(true)
    function handleClick(){
        setMode(!mode)
    }
    return(
    <>
        <div>Header</div>
        {mode?  <button className={"Dark"} onClick={()=>setMode(!mode)}>Dark</button>:  <button className={"Light"} onClick={handleClick}>Light</button>}
    </>
    )
}

export default Header