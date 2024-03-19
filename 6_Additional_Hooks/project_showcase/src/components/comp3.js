import UserContext from "../context/UserContext"
import {useContext} from 'react'

function Component3(){
    const user = useContext(UserContext)
    return(
        <div>
            <h3>Component3</h3>
            <p>{user.password}</p>
        </div>
    )
}
export default Component3