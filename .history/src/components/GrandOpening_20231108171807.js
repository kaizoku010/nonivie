import React from 'react'
import "./GrandOPening.css"
import Crystals from "../imgs/kim/crystals.png"
import Opulent from "../imgs/kim/opu.png"
import Line from "../imgs/kim/line.png"
import GrandText from "../imgs/kim/grand.png"
import Time from "../imgs/kim/lux.png"


function GrandOpening() {
    return (
        <div className='grand-bg'>
            <div className='op-line'>
                <img className='opulent-text' src={Opulent} />
                <img className='line' src={Line} />
            </div>
            <div className='grand-title'>
                <img className='grand-title' src={GrandText} />
                <img

            </div>

            <img src={Crystals} className='crystals' />


        </div>
    )
}

export default GrandOpening