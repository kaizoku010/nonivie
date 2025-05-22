import React, { useState } from 'react'
import "./MobileMenu.css"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Bg from "../imgs/mobile_bg.jpg"
import NVWhiteLogo from "../imgs/nonivie-logo.png"


function MobileMenu() {

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [headerColor, setHeaderColor] = useState("nav-bar");

  // state = {
  //   color: '#000000a8'
  // }

  const listenScrollEvent = e => {
    // window.screenY > 10 ? setHeaderColor("red") : setHeaderColor("blue")

    if (window.scrollY > 20) {
      return setHeaderColor("black")
    } else if (window.scrollY < 60) {
      return setHeaderColor("#00000000")

      // this.setState({color: "red"})
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    // return ()=>{
    //   window.removeEventListener('scroll',listenScrollEvent)
    // }

  })


  return (
    <header className='mobile-menu-holder'>
      <nav style={{ backgroundColor: headerColor }} className={`nav-bar ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-branding">
          <img src={NVWhiteLogo} alt="Logo" className="nav-branding" />
        </Link>

        <div style={{ backgroundImage: { Bg } }} className={`kim-backgrounds nav-menu ${menuOpen ? 'active' : ''}`}>

          <div className='kim-backgrounds'>
            <h2 className="nav-item big-kim">
              <Link to="/" style={{ color: "black" }} className="nav-link salmonColor" onClick={closeMenu}>
                Home
              </Link>
            </h2>


            <h2 className="nav-item big-kim">
              <Link to="/about-us" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                About
              </Link>
            </h2>

            <h2 className="nav-item big-kim">
              <Link to="/gallery" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                Gallery        </Link>
            </h2>
            <h2 className="nav-item big-kim">
              <Link to="/bookings" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                Bookings
              </Link>
            </h2>

            <h2 className="nav-item big-kim">
              <Link to="/menu" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                Food Menu        </Link>
            </h2>

        
            <h2 className="nav-item big-kim">
              <Link to="/contact-us" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                Contact Us
              </Link>
            </h2>

           

          </div>
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}

export default MobileMenu