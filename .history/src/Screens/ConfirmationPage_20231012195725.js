import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"
import MobileFooter from "../components/MobileFooter"
import MobileHeader from 


function ConfirmationPage() {
  return (
    <div className='kim-page'>
         <img className='kimIc' src={ConfirmationIc}/>
         <p className='kim-text'>Your Reservation Has Been Confirmed</p>
         <button className='kim-btn'>Home</button>

         
    </div>
  )
}

export default ConfirmationPage