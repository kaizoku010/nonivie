import React from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import NonniVieHeading from "../components/NonnivieHeading";



function MobileReservations() {
  return (
    <div>
        <MobileMenu className="mobile-menu-mobile-about"/>
       <BreadCrumb title="About Us"/>
       <div className='mobile-about-mobile-lower'>
<NonniVieHeading heading={"Bookings"} iCarly={"More About Us"} />

</div>
    <NonivieForm/>

    </div>
  )
}

export default MobileReservations