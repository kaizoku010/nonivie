import React from 'react'
import "./ReadPost.css"
import TestImage from "../imgs/abby.jpg"

export default function ReadPost(props) {
  return (
    <div>
        <div className='single-post-holder'>
        <img className='single-post-img' src={TestImage} />
        <p className='singlepost-author'> ByJeremey<span>06/10/2023 10:30pm</span> </p>
        <p className='post-body'></p>    

        </div>
    </div>
  )
}
