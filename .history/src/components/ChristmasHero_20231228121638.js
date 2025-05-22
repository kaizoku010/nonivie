import React from 'react'
import "./ChristmasHero.css"
import WelcomeHeading from "../imgs/SVG/welcome-to-nonivie.svg"
import { Link } from 'react-router-dom'

function ChristmasHero() {
  return (
    <div className='christmas-banner'>
        <div className='hero-title'>
        <img className='nonivie-christamas' src={WelcomeHeading}/>
       
        <Link style={{alignSelf:"center"}} to="/menu">
        <button className='nonivie-button colorMe anime emma'>Book Now</button>
        </Link>
        </div>
       {/* <p className='our-chefs anime'>Our chef has crafted a special Christmas menu that blends traditional delights with a touch of contemporary flair.</p>      */}
   
    </div>
  )
}

export default ChristmasHero