import React, {useState} from 'react'
import "./MobileMenu.css"
import NvLogo from "../imgs/nvLogo.png"
import { Link } from 'react-router-dom'
import Carol from "../imgs/carol.png"
import Gold from "../video/gold.mp4"
import { useEffect } from 'react'



function NoScroll() {
    const [menuOpen, setMenuOpen] = useState(false);
    
  
    const toggleMenu = () => {
      setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

  
    const closeMenu = () => {
      setMenuOpen(false);
    };

  return (
    <header className='mobile-menu-holder'>
        <nav style={{backgroundColor:"black"}} className={`nav-bar ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-branding">
            <img src={NvLogo} alt="Logo" className="nav-branding" />
          </Link>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>


          <div className='kim-backgrounds'>
            <h2 className="nav-item big-kim">
              <Link to="/" style={{color:"black"}} className="nav-link" onClick={closeMenu}>
                Home

              </Link>
            </h2>


            <h2 className="nav-item big-kim">
              <Link to="/about-us" rel='noopener noreferrer' className="nav-link" onClick={closeMenu}>
                About
              </Link>
            </h2>

            <h2 className="nav-item big-kim">
              <Link to="/reservations" rel='noopener noreferrer' className="nav-link" onClick={closeMenu}>
                Bookings
              </Link>
            </h2>

            <h2 className="nav-item big-kim">
              <Link to="/contact-us" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
                Contact Us
              </Link>
            </h2>
            <h2 className="nav-item big-kim">
              <Link to="/gallery" rel='noopener noreferrer' className="nav-link salmonColor" onClick={closeMenu}>
Gallery        </Link>
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

export default NoScroll