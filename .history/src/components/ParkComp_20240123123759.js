import React from 'react'
import "./ParkComp.css"
import patternIc from "../imgs/Pattern.png"

function ParkComp() {
  return (
    <div className='park-holder'>
       
        <div className='upper-park-element'>
        <h3 className=''></h3>
        <img className='park-ic' src={patternIc}/>       
        </div>

    </div>
  )
}

export default ParkComp