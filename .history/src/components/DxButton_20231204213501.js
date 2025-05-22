import React from 'react'
import "./DxButton.css"
import IC from "../imgs/stack/hero_content/salmonIC.png"

function DxButton() {
  return (
    <div className='dx-button-new'>
        Book Now
        <img className='hero_ic' src={IC}/>
    </div>
  )
}

export default DxButton