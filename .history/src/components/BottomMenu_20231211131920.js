import React from "react";
import "./BottomMenu.css";
import TripAd from "../icons/trip-ad.png";
import SnapChat from "../icons/snap.png";
import Instagram from "../icons/IG.png";
import LOGO from "../imgs/nvLogo.png";
import Tick from "../imgs/oba1.svg"
import Tube1 from "../imgs/oba2.svg"
import { Link } from "react-router-dom";
// about-us
function BottomMenu() {
  return (
    <div className="menu-holder">
      <div className="menu-logo-pattern">
        <Link to='/'><img className="header-ic" src={LOGO} /></Link>
        <Link to="/" className="dom-links header-link">Home</Link>
        <Link to="/bookings" rel='noopener noreferrer' className="dom-links header-link">Bookings</Link>
        <Link to="/about-us" rel='noopener noreferrer' className="dom-links header-link">About</Link>
        <Link to="/menu" rel='noopener noreferrer' className="dom-links header-link">Gallery</Link>
        <Link to="/gallery" rel='noopener noreferrer' className="dom-links header-link">Gallery</Link>
        <Link to="/contact-us" rel='noopener noreferrer' className="header-link">Contact</Link>     
        <Link to="/coming-soon"rel='noopener noreferrer' className="header-link">BLOG</Link>
    
      </div>
      {/* right menu section */}
      <div className="right-options">
        {/* <div className="header-link">
          Plot 5, Forest Mall, Lugogo
        </div>
        <div className="header-link phone-number">+256-753-433-333</div> */}

        {/* Icons */}
        <div className="ic-holder">
          {/* <img className="header-ic " src={TripAd} /> */}
          <Link className="hoverMe" target="_blank" to="https://www.tiktok.com/@noniviekampala"><img className="header-ic social-links" src={Tick}/></Link>
          <Link target="_blank" to="https://www.instagram.com/noniviekampala/"><img className="header-ic social-links" src={Instagram}/></Link>
          <Link target="_blank" to="https://www.snapchat.com/add/noniviekampala"><img className="header-ic social-links" src={SnapChat}/></Link>
          <Link target="_blank" to="https://www.youtube.com/channel/UCcO_wYP9WQYjpiKfQI_ySfQ"><img className="header-ic social-links" src={Tube1}/></Link>
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;
