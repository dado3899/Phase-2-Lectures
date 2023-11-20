import {Link, useHistory} from "react-router-dom";

function Header({darkMode, setDarkMode}){
    const history = useHistory()
    //Create a dark light mode using a state and classname Dark and Light
    return(
    <>
        <div>Header</div>
        {/* <Link to={"/home"}>Home</Link>
         */}
        <button onClick={()=>history.push("/home")}> Home </button>
        {
            darkMode?
            <button className="Dark" onClick={()=>setDarkMode(!darkMode)}>Light Mode</button>
            :
            <button className="Light" onClick={()=>setDarkMode(!darkMode)}>Dark Mode</button>
        }

    </>
    )
}

export default Header