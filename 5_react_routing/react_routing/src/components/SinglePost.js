import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'

function SinglePost(){
    const {postid} = useParams()
    const [currPost,setCurrPost] = useState(null)
    console.log(currPost)
    useEffect(()=>{
        fetch(`http://localhost:5555/posts/${postid}`)
        .then(r=>r.json())
        .then(data=>{
            setCurrPost(data)
        })
      } 
      ,[])

    return(
        <div>
            <header>{currPost?.title}</header>
            <p>{currPost?.content}</p>
        </div>
    )
}
export default SinglePost