function Header({darkMode, setDarkMode}){
    //Create a dark light mode using a state and classname Dark and Light
    return(
    <>
        <div>Header</div>
        {
            darkMode?
            <button className="Dark" onClick={()=>setDarkMode(!darkMode)}>Light Mode</button>
            :
            <button className="Light" onClick={()=>setDarkMode(!darkMode)}>Dark Mode</button>
        }

    </>
    )
}

export default Header