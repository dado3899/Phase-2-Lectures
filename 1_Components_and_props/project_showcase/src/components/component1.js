// import 'react'
import Component2 from "./component2"

function Component1({componentParagraph,x,y}){
    console.log(componentParagraph)
    console.log(x,y)
    return (
    <div>
        <div>THIS IS COMPONENT1</div>
        <p>{componentParagraph}</p>
        <Component2/>
    </div>
    )
}

export default Component1