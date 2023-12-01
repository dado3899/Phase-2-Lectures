function Home({currentUser}){
    return(
        <div>{currentUser? `Hello ${currentUser.name}`: "No ones Logged in"}</div>
    )
}
export default Home