import {Link,useParams,Routes,Route } from "react-router-dom";

function User({username}){
    return (
    <div>
        {username}
        <Link to="sendHelp">My Profile</Link>
        <Routes>
            <Route path ="test" element ={<div>Test</div>}/>
            <Route path="sendHelp" element={<div>Hello I need help</div>}/>
        </Routes>
    </div>
    )
}
export default User