import React from 'react'
import "./ViewPost.css"
import BlogData from '../dataPoint/BlogData'
import { useParams } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import TestImg from "../imgs/abby.jpg"
import MobileFooter from './MobileFooter';

function ViewPost() {

    const blogArray = BlogData.postData;
    const { postId } = useParams();
    const postId_ = parseInt(postId)
    console.log("test 1..2", postId_);
    const sentences = postTitle.content.split('.');
    const trimed = 
    const postTitle = blogArray.find(post => post.postId === postId_);

    return (
        <div className='single-post-page'>

            <div className='mobile-menu'>
                <MobileMenu />
            </div>

            <div className='single-post-data'>

                <div className='post-data'>
                <img className='single-post-img' src={postTitle.image}/>
                <div className='post-text-data'>
                <h2 className='post-title'>{postTitle.title}</h2>
                <p className='post-date'>{postTitle.postTime}</p>
                <p className='post-content'>{postTitle.content}</p>
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