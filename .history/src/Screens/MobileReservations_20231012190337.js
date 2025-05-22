import React from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import NonniVieHeading from "../components/NonnivieHeading";
import MobileFooter from '../components/MobileFooter'\
import ResIC from 



function MobileReservations() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <MobileMenu style={{backgroundColor:"red"}} className="mobile-menu-mobile-about"/>
       {/* <BreadCrumb title="Reservations"/> */}
       <div className='mobile-about-mobile-lower'>
         <img className='' src />
        <NonivieForm/>

</div>
<MobileFooter/>
    </div>
  )
}

export default MobileReservations