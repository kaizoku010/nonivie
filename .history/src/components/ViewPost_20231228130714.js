import React from 'react'
import "./ViewPost.css"
import BlogData from '../dataPoint/BlogData'
import { useParams } from 'react-router-dom';

function ViewPost() {

    const blogArray = BlogData.postData;
    const {} = useParams();
    

  return (
    <div className='single-post-page'>
    Hello
    </div>
  )
}

export default ViewPost