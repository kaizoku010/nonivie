import comingSoon from '../imgs/coming-soon.jpg'
import fullLogo from "../imgs/logo-full.png"
import React from 'react'

function ComingSoon() {
  return (
        <header className="App-header">
        <div className='pc-coming-soon'>
        <Link className='nonivie-button  indexMe'>Home</Link>
        <img src={comingSoon} className="comingSoon" alt="coming soon" />
        </div>

        <div className="mobile-coming-soon" alt="coming soon mobile">
          <img src={fullLogo} className="top-logo"/>
          <h3 className="coming-soon-text">coming soon</h3>           
    </div>
      </header>
  )
}

export default ComingSoon