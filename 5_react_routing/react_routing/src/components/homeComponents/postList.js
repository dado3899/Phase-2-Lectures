import {Link} from 'react-router-dom'
function PostList({posts}){
    const postTitles = posts.map((post)=>{
        return (
        <div>
            <Link to={`/post/${post.id}`}>{post.title}</Link> 
        </div>
    )
    })
    return(
        <div>
            {postTitles}
        </div>
    )
}
export default PostList