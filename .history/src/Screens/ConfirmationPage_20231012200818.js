import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"
import MobileFooter from "../components/MobileFooter"
import MobileHeader from "../components/MobileMenu"
import { Link } from 'react-router-dom'


function ConfirmationPage() {
  return (
    <div className='kim-page'>

        <MobileHeader/>
        
         <img className='kimIc' src={ConfirmationIc}/>
         <p className='kim-text'>Your Reservation Has Been Confirmed</p>
         <Link<button className='gani-btn'>Home</button>

         <MobileFooter className="gani-btn"/>
    </div>
  )
}

export default ConfirmationPage