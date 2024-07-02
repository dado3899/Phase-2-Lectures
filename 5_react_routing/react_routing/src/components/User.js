import { useParams } from "react-router-dom"

function User(){
    const {username} = useParams()
    console.log(username)
    return(
        <div>Hello {username}</div>
    )
}
export default User