export const Post = ({post}) =>{
    return(
        <div className="post-container">
            <h6>{post.title}</h6>
            <div>{post.body}</div>
        </div>
    )
}