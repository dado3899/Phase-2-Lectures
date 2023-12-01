import { useNavigate } from "react-router-dom"
function Login({users,setCurrentUser}){
    const navigate = useNavigate()
    function loginUser(e){
        e.preventDefault()
        const findUser = users.filter((user)=>{
            console.log(e.target.name.value)
            if(user.name===e.target.name.value){
                return true
            }
            return false
        })
        console.log(findUser)
        if(findUser.length>0){
            setCurrentUser(findUser[0])
            navigate('/')
        }
        else{
            console.log("Not a user")
        }
    }
    return(
        <form onSubmit={(e)=> loginUser(e)}>
            <input name='name'  placeholder="user"></input>
        </form>
    )
}
export default Login