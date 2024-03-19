import {Link,useParams,useNavigate, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import {useContext} from 'react'


function Navbar(){
    const user = useContext(UserContext)
    const navigate = useNavigate()
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <NavLink to="/projects"> NL Projects</NavLink>
        {
            user?
            <>
                <a>{user.username}</a>
                <Link to="/user">User</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/nested">Nested</Link>
                {/* <a onClick={()=>navigate('/projects')}>NAVIGATE TO PROJECT</a> */}
            </>
            :
            <Link to="/login">Login</Link>
        }
    </div>
    )
}
export default Navbar