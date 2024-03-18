import {Link,useParams,useNavigate, NavLink } from "react-router-dom";


function Navbar({user}){
    const navigate = useNavigate()
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <NavLink to="/projects"> NL Projects</NavLink>
        {
            user?
            <>
                <Link to="/user">User</Link>
                {/* <a onClick={()=>navigate('/projects')}>NAVIGATE TO PROJECT</a> */}
            </>
            :
            <Link to="/login">Login</Link>
        }
    </div>
    )
}
export default Navbar