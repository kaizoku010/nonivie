import React from "react";
import "./BreadCrumb.css"
import BlogTitle from "../imgs/"

function BreadCrumb(props){
return (
    <div className="bread-crumb-div">
        <h1 className="bread-text">{props.title}</h1>
    </div>



)

}

export default BreadCrumb