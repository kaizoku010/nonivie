import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"


function ConfirmationPage() {
  return (
    <div className='kim-page'>
         <img className='kimIc' src={ConfirmationIc}/>
         <p> Your Reservation Has Been Confirmed</p>
    </div>
  )
}

export default ConfirmationPage