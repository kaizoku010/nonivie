import React from 'react'
import "./MobileFooter.css"
import FooterIcon from "../imgs/footer_ic.png"
import { Link } from 'react-router-dom'

function MobileFooter() {
  return (
    <div style={{backgroundColor:"red"}} className="mobile-footer">
    <div className="top-mobile-footer">

    
    <div className="mobile-footer-section-one">
        <img className="mobile-footer-header footer_icon" src={FooterIcon} />
        <p className="mobile-footer-content" style={{marginTop:"20px", display:"none"}}>At Noni Vie you are someone with impeccable
            taste and a knack for discovering the finest.
            We believe that true luxury isn't just about extravagance, It's about creating remarkable
            moments that elevate your senses and leave a mark on your soul.</p>
    </div>

<div className='footer_grid' style={{display:"grid", gridTemplateColumns:"auto auto", marginTop:"20px", padding:"20px"}}>
    <div className="mobile-footer-section-two">
        <h2 className="mobile-footer-header">Useful Links</h2>
        <Link to="/coming-soon"><p className="mobile-footer-links">Events</p></Link>
        <Link><p className="mobile-footer-links">Blog</p></Link>
        <Link><p className="mobile-footer-links">Contact page</p></Link>

    </div>

    <div className="mobile-footer-section-two">
    <Link to="/coming-soon"><h2 className="mobile-footer-header">Contact us</h2></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links">+256-756-433-333</p></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links">info@nonivie.com</p></Link>

    </div>


    <div className="mobile-footer-section-two">
        <h2 className="mobile-footer-header">Reservations</h2>
        <Link to="/coming-soon"><p className="mobile-footer-links">reservations@nonivie.com</p></Link>
        <Link to="/coming-soon"><p className="mobile-footer-links">Events</p></Link>
        <Link to="/coming-soon"><p className="mobile-footer-links">Blog</p></Link>

    </div>

    <div className="mobile-footer-section-tatu">
    <Link to="/coming-soon"><h2 className="mobile-footer-header">Reach Out</h2></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links-tatu">Sports Line, Lugogo</p></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links-tatu">Membership</p></Link>
    </div>


    </div>
    </div>
    <div className="lower-mobile-footer">
        <p>Copyright © 2023 <Link style={{color:"white"}} to="/coming-soon">Nonive</Link></p>
    </div>

</div>
  )
}

export default MobileFooter