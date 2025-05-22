import React from 'react'
import "./DxButton.css"
import IC from "../imgs/stack/hero_content/salmonIC.png"
import { Link } from 'react-router-dom'

function DxButton() {
  return (
<Link to="/bookings">
    <div className='dx-button-new'>
        <p>Book Now</p>
        <img className='hero_ic' src={IC}/>
    </div>
    </Link>
  )
}

export default DxButton