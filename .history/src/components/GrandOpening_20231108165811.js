import React from 'react'
import "./GrandOPening.css"
import Crystals from "../imgs/kim/crystals.png"
import Opulent from "../imgs/kim/opu.png"
import Line from "../imgs/kim/line.png"


function GrandOpening() {
  return (
    <div className='grand-bg'>
        <div className=''>

        </div>
    <img className='opulent-text' src={Opulent}/>
    <img className='line' src={Line} />
    <img src={Crystals} className='crystals'/>
    </div>
  )
}

export default GrandOpening