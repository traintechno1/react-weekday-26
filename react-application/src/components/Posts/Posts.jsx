import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Post } from "./Post";
import '../../css/Posts.css'

export const Posts = () =>{

    const {id} = useParams();
    let [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((posts)=>{
                let filteredPosts = posts?.data?.filter((post)=>post.userId == id)
                console.log(filteredPosts);
                setPosts(filteredPosts);
            })
            .catch((e)=>{
                console.log(e);
            })
    }, [])

    return(
        <>
            <h3>Posts</h3>
            <div className="posts-container">
                {
                    posts.map(post=> <Post 
                        key={post.id} 
                        post={post} />)
                }
            </div>
        </>
    )
}