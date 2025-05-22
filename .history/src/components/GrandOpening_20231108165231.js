import React from 'react'
import "./GrandOPening.css"
import Crystals from "../imgs/kim/crystals.png"
import Opulent from "../imgs/kim/opu.jpg"
import Line from "../imgs/kim/line.png"


function GrandOpening() {
  return (
    <div className='grand-bg'>
    <img className='opulent-text' src={Opulent}/>
    <img className='line' />
    <img src={Crystals} className='crystals'/>
    </div>
  )
}

export default GrandOpening