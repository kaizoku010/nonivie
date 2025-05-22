import React from 'react'
import "./ParkComp.css"
import patternIc from "../imgs/Pattern.png"

function ParkComp() {
  return (
    <div className='park-holder'>
       
        <div className='upper-park-element'>
        <h3 className='park-heading'>
        Our goal is create a luxurious and transcendent experience that redefines premium hospitality by seamlessly blending opulence, culinary mastery, and vibrant nightlife.<br/><br/>Noni-Vie provides an unforgettable and exclusive experience, making you feel like a discerning connoisseur and allowing you to revel in the ultimate luxury and culinary mastery.</h3>
        <img className='park-ic' src={patternIc}/>       
        </div>


        <div className='lower-park-element'>
        <p>Browse our sections</p>
        <div></div>
        </div>

    </div>
  )
}

export default ParkComp