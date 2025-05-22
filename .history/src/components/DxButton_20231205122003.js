import React from 'react'
import "./DxButton.css"
import IC from "../imgs/stack/hero_content/salmonIC.png"

function DxButton() {
  return (
<Link to="/reserva">
    <div className='dx-button-new'>
        <p>Book Now</p>
        <img className='hero_ic' src={IC}/>
    </div>
    </Link>
  )
}

export default DxButton