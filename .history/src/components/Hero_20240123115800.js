import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import BottomMenu from "./BottomMenu"
import DxButton from './DxButton'
import OpulentTitle from "../imgs/stack/hero_content/opu_lux.png"


function Hero() {
  return (
    <div className='hero-element'>
      {/* element one */}
      <div className='top-hero-content'>
        <img className='opu-title' src={OpulentTitle} />
        <DxButton link={`bookings`} text={"Book Now"}/>
      </div>
      <div className='bottom-div'>
      <div className='left-pane'>
        <h2 className='ex-join-title'>Experience pure elegance</h2>
        <h2 className='ex-join-title'>Join us for an Opulent</h2>
        </div>
        {/* right */}
        <div className='right-pane'>
        <Link to="/gallery"> 
          <p className='exp-more-text' >Explore More</p>
        </Link>

        </div>
              </div>

      {/* home menu */}
  
    </div>
  )
}

export default Hero