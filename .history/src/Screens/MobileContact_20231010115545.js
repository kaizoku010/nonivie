import React from 'react'
import "./MobileContact.css"
import "./AboutMobile.css"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import NonniVieHeading from "../components/NonnivieHeading";


function MobileContact() {
  return (
    <div className='mobile-about-mobile '>
<MobileMenu className="mobile-menu-mobile-about"/>
<BreadCrumb title="About Us"/>
<div className='mobile-about-mobile-lower'>
<NonniVieHeading heading={"ABOUT US"} iCarly={"More About Us"} />

</div>
</div>
  )
}

export default MobileContact