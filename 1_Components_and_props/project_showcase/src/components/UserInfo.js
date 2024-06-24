function UserInfo({user}){
    console.log(user)
    
    return(
        <>
            <img className="profileImage" src={user.userImage}/>
            <h4>{user.username}</h4>
        </>
    )
}
export default UserInfo 