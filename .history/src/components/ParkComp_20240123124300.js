import React from 'react'
import "./ParkComp.css"
import patternIc from "../imgs/Pattern.png"

function ParkComp() {
  return (
    <div className='park-holder'>
       
        <div className='upper-park-element'>
        <h3 className='par'>Future-proof your home or business with our tailored and affordable smart EV charge point solutions.</h3>
        <img className='park-ic' src={patternIc}/>       
        </div>

    </div>
  )
}

export default ParkComp