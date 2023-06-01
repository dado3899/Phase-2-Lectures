import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
function Header({mode,handleClick, fetchData}){
    // let match = useMatch()
    // console.log(match)
    return(
    <>
        <div>Header</div>
        <button onClick={fetchData}>Get Data</button>
        {mode?  <button className={"Dark"} onClick={handleClick}>Dark</button>:  <button className={"Light"} onClick={handleClick}>Light</button>}
        <nav>
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
            {/* <Link to={`/${match.url}/hello`}>Form</Link> */}
        </nav>
        {/* <Switch>
            <Route path={`/${match.path}/hello`}>
                <div>Hello</div>
            </Route>
        </Switch> */}
    </>
    )
}

export default Header