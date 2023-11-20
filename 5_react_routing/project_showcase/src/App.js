import ComponentTest from "./components/component";
import Header from "./components/header"
import ProjectContainer from "./components/projectContainer";
import IdRoute from "./components/idRoute";
// import projects from "./projects";
// import css1
// import css2
import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";


function App() {
  // Review: useState
  const [darkMode, setDarkMode]= useState(false)
  
  // Let us fetch the data and set it to a usestate

  // console.log(projects)
  return (
    <BrowserRouter>
      <div className="App">
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Switch>
          <Route exact path = "/test">
            <div>Hello</div>
          </Route>
          <Route exact path = "/home">
            <ProjectContainer darkMode={darkMode}/>
          </Route>
          <Route exact path = "/home/:id/:id2">
            <IdRoute projects = {[]}/>
          </Route>
          <Route path = "/">
            <div>PAGE NOT FOUND</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
