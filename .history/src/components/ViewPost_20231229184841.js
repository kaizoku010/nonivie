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

    const postTilte

    return (
        <div className='single-post-page'>

            <div className='mobile-menu'>
                <MobileMenu />
            </div>

            <div className='single-post-data'>

                <div className='post-data'>
                <img className='single-post-img' src={TestImg}/>
                <div className='post-text-data'>
                <h2 className='post-title'>High Tech Car Wash</h2>
                <p className='post-date'>28/12/2023</p>
                <p className='post-content'>Nonivie is not just a place; but a sanctuary where luxury takes center stage.Our purpose is clear; to create a luxurious and transcendent experience that seemlessly blends opulence, culinary mastery, and vibrant nightlife.</p>
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