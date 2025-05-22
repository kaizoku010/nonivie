import React from 'react'
import "./ChristmasHero.css"
import ChristmasImage from "../imgs/noniviechristmas.png"
import TestImage from "../imgs/abby.jpg"
import { Link } from 'react-router-dom'

function ChristmasHero() {
  return (
    <div className='christmas-banner'>
        <img className='nonivie-christamas' src={ChristmasImage}/>
       
        <Link style={{alignSelf:"center"}} to="/menu">
        <button className='nonivie-button colorMe'>Book Now</button>
        </Link>
       <p className='our-chefs anime'>Our chef has crafted a special Christmas menu that blends traditional delights with a touch of contemporary flair.</p>     
   
    </div>
  )
}

export default ChristmasHero