import React from 'react'
import "./GrandOPening.css"
import Crystals from "../imgs/kim/crystals.png"
import Opulent from "../imgs/kim/opu.jpg"

function GrandOpening() {
  return (
    <div className='grand-bg'>
    <img className='opulent-text' src={Opulent}/>
    <img className=''/>
    <img src={Crystals} className='crystals'/>
    </div>
  )
}

export default GrandOpening