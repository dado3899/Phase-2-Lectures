import UserInfo from "./UserInfo"
import Settings from "./Settings"
function Header({user,mode}){
    console.log(user, mode)
    const test = "This is a test"

    return(
        <>
            <UserInfo user={user}/>
            <Settings/>
        </>
    )
}

export default Header