import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {


    return (
        <div className="header">
            {/* <div className="header-link-holder">
                <Link to="/" className="header-links">HOME</Link>
                <Link to="/about-us" className="header-links">ABOUT US</Link>
                {/* <Link to="/events" className="header-links">EVENTS</Link> */}
                <Link to="/blog" className="header-links">BLOG</Link>
                <Link to="/membership" className="header-links">MEMBERSHIP</Link>
                <Link to="/contact-us" className="header-links">CONTACT US</Link>

                <Link to="/reservations" className="header-links">RERSERVATIONS</Link>


            </div> */}
        </div>
    )
}

export default Header 