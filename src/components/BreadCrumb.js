import React from "react";
import "./BreadCrumb.css"
import BlogTitle from "../imgs/blog-title.png"

function BreadCrumb(props){
return (
    <div className="bread-crumb-div">
        <img src={BlogTitle}className="bread-text-mobile "/>
    </div>
)

}

export default BreadCrumb