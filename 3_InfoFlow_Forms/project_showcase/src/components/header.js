function Header({setProjList}){
    function fetchData(){
        fetch('/projects')
        .then(r=>r.json())
        .then(data=>setProjList(data))
    }
    
    return(
    <>
        <div>Header</div>
        <button onClick={fetchData}>Get Data</button>
        {/* <button className={"Dark"} onClick={handleClick}>Dark</button> */}
    </>
    )
}

export default Header