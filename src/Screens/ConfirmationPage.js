import React from 'react'
import "./ConfirmationPage.css"
import ConfirmationIc from "../icons/confirmation.png"
import MobileFooter from "../components/MobileFooter"
import MobileHeader from "../components/MobileMenu"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'




function ConfirmationPage() {

  return (

    <div>

      <div className='large-view'>
      <div style={{position:'', top:"0", width:"100%"}}>
      <BottomMenu/>
      <img className='kimIc large-ic' src={ConfirmationIc} />
      <p className='kim-text'>Your Reservation Has Been Confirmed</p>
      <Link to="/"><button className='gani-btn large-button'>Home</button></Link>
      <Footer/>
      </div>   
      
      
    </div>
      
    <div className='kim-page'>
      <MobileHeader />
      <img className='kimIc' src={ConfirmationIc} />
      <p className='kim-text'>Your Reservation Has Been Confirmed</p>
      <Link to="/"><button className='gani-btn'>Home</button></Link>
      <MobileFooter className="gani-btn" />
    </div>

    </div>
  )
}

export default ConfirmationPage