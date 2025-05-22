import React from 'react'
import "./ViewPost.css"
import BlogData from '../dataPoint/BlogData'
import { useParams } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import TestImg from "../imgs/SVG/welcome-to-nonivie.svg"
import MobileFooter from './MobileFooter';

function ViewPost() {

    const blogArray = BlogData.postData;
    const { postId } = useParams();
    const postId_ = parseInt(postId)
    console.log("test 1..2", postId_);

    return (
        <div className='single-post-page'>

            <div className='mobile-menu'>
                <MobileMenu />
            </div>

            <div className='single-post-data'>

                <div className='post-data'>
                <img src={}/>
                </div>
            </div>


            <div className='mobile-footer'>
                <MobileFooter />
            </div>
        </div>
    )
}

export default ViewPost