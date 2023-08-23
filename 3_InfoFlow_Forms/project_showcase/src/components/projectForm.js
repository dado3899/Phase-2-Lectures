import { useState } from "react";
function ProjectForm({}){
    //Create a state for each of these values
    return(
        <form className = "form">
            <label>Name</label>
            <input onChange={(e)=>console.log(e.target.value)} value={""}></input>
            <label>Description</label>
            <input onChange={(e)=>console.log(e.target.value)} value={""}></input>
            <label>Phase</label>
            <input onChange={(e)=>console.log(e.target.value)} value={""}></input>
            <button type="submit">Button</button>
        </form>
    )
}
// Project form:
// Create a form (class form)
// Label/input combo for the inputs
export default ProjectForm