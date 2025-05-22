import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"
import MobileFooter from "../components/MobileFooter"
import MobileHeader from "../components/MobileMenu"


function ConfirmationPage() {
  return (
    <div className='kim-page'>

        <MobileHeader/>
        
         <img className='kimIc' src={ConfirmationIc}/>
         <p className='kim-text'>Your Reservation Has Been Confirmed</p>

         <button className="gani-btn"></button> 
             </div>
  )
}

export default ConfirmationPage