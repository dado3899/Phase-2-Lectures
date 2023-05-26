function Header({mode,handleClick, fetchData}){
    
    return(
    <>
        <div>Header</div>
        <button onClick={fetchData}>Get Data</button>
        {mode?  <button className={"Dark"} onClick={handleClick}>Dark</button>:  <button className={"Light"} onClick={handleClick}>Light</button>}
    </>
    )
}

export default Header