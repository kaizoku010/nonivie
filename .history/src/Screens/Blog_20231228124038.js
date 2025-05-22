import React from "react";
import "./Blog.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import Post from "../components/Post"
import postData from "../dataPoint/BlogData"
import MobileMenu from "../components/MobileMenu";


function Blog(){

    return(
        <div className="blog-section">
        <Header />
        <div className="mobile-menu">
            <MobileMenu/>
        </div>
        {/* <BreadCrumb title={"BLOG"}/> */}
        <div className="blog-content">
            <div className="post-holder">
            <Post posts={postData}/>
            {/* <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/> */}
            </div>


        </div>
        <Footer/>
        </div>
    )
}


export default Blog