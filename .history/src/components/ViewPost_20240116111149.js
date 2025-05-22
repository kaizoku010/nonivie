import React from 'react'
import "./ViewPost.css"
import BlogData from '../dataPoint/BlogData'
import { useParams } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Header from "./Header"
import MobileFooter from './MobileFooter';

function ViewPost() {
 
    const blogArray = BlogData.postData;
    const { postId } = useParams();
    const postId_ = parseInt(postId)
    // console.log("test 1..2", postId_);
    const postTitle = blogArray.find(post => post.postId === postId_);
    const sentences = postTitle.content.replace(/[\.]/g, '\n', <br/>,<br/>);
    // const sentences = postTitle.content.replace(/\n/g, '<br/>');

    console.log("test split", sentences);


    return (
        <div className='single-post-page'>

<div className="post-menu">
        <Header />
        </div>

            <div className='mobile-menu'>
                <MobileMenu />
            </div>

            <div className='single-post-data'>

                <div className='post-data'>
                <h2 className='post-title'>{postTitle.title}</h2>
                <img className='single-post-img' src={postTitle.image}/>
                <div className='post-text-data'>
                <p className='post-date'>{postTitle.postTime}</p>
                <p className='post-content'>{sentences}</p>
                </div>
                </div>
            </div>


            <div className='mobile-footer'>
                <MobileFooter />
            </div>
        </div>
    )
}

export default ViewPost