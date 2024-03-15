function Search({setSearch}){

    // function handleSearchChange(e){
    //     e.preventDefault()
    //     setSearch(e.target.search.value)

    // }
    return(
        <input name='search' onChange={(e)=>setSearch(e.target.value)}></input>
    )
}
export default Search