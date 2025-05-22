import React from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import NonniVieHeading from "../components/NonnivieHeading";
import MobileFooter from '../components/MobileFooter'



function MobileReservations() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <MobileMenu style={} className="mobile-menu-mobile-about"/>
       <BreadCrumb title="Reservations"/>
       <div className='mobile-about-mobile-lower'>
         <NonniVieHeading heading={"Bookings"} iCarly={"More About Us"} />
        <NonivieForm/>

</div>
<MobileFooter/>
    </div>
  )
}

export default MobileReservations