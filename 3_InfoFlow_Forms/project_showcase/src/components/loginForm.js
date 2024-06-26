function LoginForm({setName}){

    function handleSubmit(e){
        e.preventDefault()
        setName(e.target.name.value)
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="name" name="name"/>
        </form>
    )
}

export default LoginForm