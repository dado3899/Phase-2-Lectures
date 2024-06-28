import {useState,useEffect} from 'react'
function LoginForm({setName, setShowLogin}){
    const [mouseX,setMouseX] = useState(0)
    const [mouseY,setMouseY] = useState(0)
    console.log(mouseX,mouseY)
    // console.log(mouseX)
    useEffect(()=>{
        function handleEvent(event) {
            setMouseX(event.clientX);
            setMouseY(event.clientY)
          }
        
        window.addEventListener("mousemove", handleEvent);
        return function cleanup() {
            window.removeEventListener("mousemove", handleEvent);
          };
    },[])

    function handleSubmit(e){
        e.preventDefault()
        setName(e.target.name.value)
        setShowLogin(false)
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="name" name="name"/>
        </form>
    )
}

export default LoginForm