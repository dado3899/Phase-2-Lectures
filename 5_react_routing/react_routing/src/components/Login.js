import {Link, useNavigate} from 'react-router-dom'

function Login({setUser,allUsers}){
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const foundUser = allUsers.filter((user)=>{
            if(user.username === e.target.username.value){
                return true
            }
            return false
        })
        if(foundUser.length > 0){
            setUser(e.target.username.value)
            navigate("/")
        }
        else{
            alert("Not valid user")
        }
    }

    return(
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input name="username"/>
            </form>
        </div>
    )
}
export default Login