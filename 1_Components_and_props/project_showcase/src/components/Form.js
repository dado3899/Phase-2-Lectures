// Project form:
// Create a form (class form)
// Label/input combo for the inputs
function Form(){
    function submit(e){
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
    }

    return(
        <form onSubmit={(e)=>submit(e)}>
            <input name='username' placeholder='username'/>
            <input name='password' placeholder='password'/>
            <button type="submit">submit</button>
        </form>
    )
}
export default Form