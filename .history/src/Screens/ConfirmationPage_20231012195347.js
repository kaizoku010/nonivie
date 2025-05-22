import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"


function ConfirmationPage() {
  return (
    <div className='kim-page'>
         <img className='kimIc' src={ConfirmationIc}/>
         <p>Your reservation has been conf</p>
    </div>
  )
}

export default ConfirmationPage