function TestComponent({render,anotherString,tiernary}){
    console.log(tiernary)
    const test = tiernary>15?tiernary:"Tiernary doesn't exist"
    
    return(
        <>
            <h1>This is our component {anotherString}</h1>
            <h1>{render}</h1>
            <h1>{tiernary>15?tiernary:"Tiernary doesn't exist"}</h1>
        </>
    )
}
export default TestComponent