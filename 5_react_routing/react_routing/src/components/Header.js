import {Link, useNavigate} from 'react-router-dom'
function Header({user,setUser}){
    const navigate = useNavigate()
    // console.log("Loading")
    return(
        <div>
            <Link to="/">Home</Link>
            {/* <Link to="/user">User</Link> */}
            {
                user?
                <>
                    <Link to="/login" onClick={()=>setUser(null)}>logout</Link>
                    <p>
                        Logged In: {user}
                    </p>
                </>
                :
                <Link to="/login">Login</Link>
            }

            {/* <button onClick={()=>navigate("/login")}> Login </button> */}
        </div>
    )
}
export default Header