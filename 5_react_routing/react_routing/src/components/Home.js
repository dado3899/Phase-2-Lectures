import Post from "./Post"
import {useState,useEffect} from 'react'
import PostList from "./homeComponents/postList"
import Search from "./homeComponents/search"
function Home(){
    const [posts,setPosts]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5555/posts")
        .then(r=>r.json())
        .then(data=>{
            setPosts(data)
        })
      } 
      ,[])
    return(
        <div>
            <Search/>
            <PostList posts={posts}/>
        </div>
    )
}
export default Home