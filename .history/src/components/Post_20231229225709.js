import React from "react"
import Drinks from "../imgs/cocktails.jpg"
import "./Post.css"
import posts from "../dataPoint/BlogData.js"
import { Link} from "react-router-dom"

function Post() {

    const sentences = longString.split('.');


    return (
        <ul className="posts">
            {posts.postData.map((sentences,post) => (
                <li className="single-blog-post">
                    <img src={post.image} className="post-image" />
                    <div className="blog-lower-content">
                        <p className="post-time">{post.postTime}</p>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="post-overview">{post.excerpt}</p>
                        <Link to="/post/1" className="read-post nonivie-button">Read More</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default Post
