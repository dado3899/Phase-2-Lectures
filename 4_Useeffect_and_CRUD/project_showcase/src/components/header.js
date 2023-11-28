function Header({mode,handleClick}){
    
    return(
    <>
        <div>Header</div>
        {/* <button onClick={getData}>Get Data</button> */}
        {mode?  <button className={"Dark"} onClick={handleClick}>Dark</button>:  <button className={"Light"} onClick={handleClick}>Light</button>}
    </>
    )
}

export default Header