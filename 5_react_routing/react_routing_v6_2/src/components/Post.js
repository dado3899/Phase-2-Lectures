import {Link,useParams } from "react-router-dom";
import {useState, useEffect} from 'react'

function Posts({}){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3001/posts')
        .then(r=>r.json())
        .then(data=>setPosts(data))
    },[])

    return (
    <div>
        {posts.map((post)=>{
            return <p>{post.post}</p>
        })}
    </div>
    )
}
export default Posts