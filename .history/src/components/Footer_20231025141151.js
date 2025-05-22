import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function footer() {
    return (
        <div className="footer">
            <div className="top-footer">

            <div className="footer-section-two">
               <Link to="/coming-soon"> <h5 className="footer-header">Useful Links</h5></Link>
               <Link to="/coming-soon"><p className="footer-links">Events</p></Link>
               <Link to="/coming-soon"><p className="footer-links">Blog</p></Link>

            </div>

            <div className="footer-section-two">
                <Link to="/reservations"><h5 className="footer-header">Reservations</h5></Link>
                <Link to="/coming-soon"><p className="footer-links">Home</p></Link>
                <Link to="/coming-soon"><p className="footer-links">Blog</p></Link>

            </div>


            <div className="footer-section-two">
            <Link to="/coming-soon"><h5 className="footer-header">Socail Media</h5></Link>
            <Link to="/coming-soon"><p className="footer-links">Reservations</p></Link>
                <Link to="/coming-soon"><p className="footer-links">Events</p></Link>
                <Link to="/coming-soon"><p className="footer-links">Blog</p></Link>

            </div>

            <div className="footer-section-two">
            <Link to="/coming-soon"><h5 className="footer-header">Reach Out</h5></Link>
            <Link to="/coming-soon"> <p className="footer-links-tatu">Write To Us</p></Link>
                <Link to="/coming"><p className="footer-links-tatu">Membership</p></Link>
            </div>
            </div>
            <div className="lower-footer">
                <p>Copyright © 2023 Nonive</p>
            </div>

        </div>
    )
}

export default footer