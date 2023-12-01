import {Link,useParams,useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react'


function User({setCurrentUser,users}){
    
    const navigate = useNavigate()
    
    console.log(users)

    return (
    <div>
        {users.map((user)=>{
            return <p onClick={()=>{
                setCurrentUser(user)
                navigate(`${user.id}`)
            }}>{user.name}</p>
        })}
    </div>
    )
}
export default User