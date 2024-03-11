function Header({name,name2,name3}){
    console.log(name3)
    let count = 0

    function handleClick(x){
        console.log("Count: ", count)
        count+=1
    }

    return(
        <header>
            <p>{name}</p>
            <button onClick={()=>handleClick("This is x")}>Dark {count}</button>
        </header>
    )
}
export default Header