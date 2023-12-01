import {Link,useParams } from "react-router-dom";

function Navbar({currentUser}){
    return(
        <div>
            <nav>
            {/* <Link/> */}
            <Link to="/">Home</Link>
            <Link to="users">Users</Link>
            <Link to="/posts">Posts</Link>
            {currentUser?<Link>Logout</Link> :<Link to="/login">Login</Link>}
            </nav>

        </div>
    )
}
export default Navbar