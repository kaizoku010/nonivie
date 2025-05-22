import React from "react"
import Drinks from"../imgs/cocktails.jpg"
import "./Post.css"
import posts from "../dataPoint/BlogData.js"
import { Link, useParams } from "react-router-dom"

function Post(){

    //  const {postId} = useParams();
    // const post = posts.find(post => post.postId === parseInt(postId))
// if(!post) return <div>post test teliwo</div>



    return(
        <ul className="posts">
{posts.postData.map((post) =>(
    <li className="single-blog-post">
        <img src={post.image} className="post-image"/>
        <div className="blog-lower-content">
        <p className="post-time">{post.postTime}</p>
        <h3 className="blog-title">{post.title}</h3>
        <p className="post-overview">{post.excerpt}</p>
        <Link className="read-post nonivie">Read More</Link>
         </div>
    </li> 
 ))} 
    </ul>
    )
}


export default Post

// const BlogPost = ({ posts }) => {
//     const { postId } = useParams();
//     const post = posts.find(post => post.id === parseInt(postId));
  
//     if (!post) return <div>Post not found</div>;
  
//     return (
//       <div>
//         <h1>{post.title}</h1>
//         <img src={post.image} alt={post.title} />
//         <p>{post.content}</p>
//       </div>
//     );