import {Link,useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function SingleUser({currentUser}){
    const [user,setUser] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/users/${id}`)
    //     .then(r=>r.json())
    //     .then(data=>setUser(data))
    // },[])
    

    return(
        <>
            <div>User is {currentUser?.name}</div>
            {currentUser.reviews?.map((review)=><p>{review}</p>)}
            <button onClick={()=>navigate('/users')}>Back</button>
        </>
    )
}

export default SingleUser