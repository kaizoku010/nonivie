import React from 'react'
import "./ViewPost.css"
import BlogData from '../dataPoint/BlogData'
import { useParams } from 'react-router-dom';

function ViewPost() {

    const blogArray = BlogData.postData;
    const {postId} = useParams();
    const postId_ = parseInt(postId)
    console.log("test 1 + 2", );

  return (
    <div className='single-post-page'>
    Hello
    </div>
  )
}

export default ViewPost