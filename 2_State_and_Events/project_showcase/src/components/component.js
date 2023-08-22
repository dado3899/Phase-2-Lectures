function ComponentTest({count,setCount}){
    // console.log("hello")
    return (
        <>
            <div>component</div>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </>
    )
}

export default ComponentTest