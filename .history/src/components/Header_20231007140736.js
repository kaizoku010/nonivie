import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import BottomMenu from "./BottomMenu";

function Header() {


    return (
        <div className="header">
                <BottomMenu/>
        </div>
    )
}

export default Header 