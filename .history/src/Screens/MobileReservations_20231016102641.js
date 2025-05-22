import React from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import NonniVieHeading from "../components/NonnivieHeading";
import MobileFooter from '../components/MobileFooter'
import ResIC from "../imgs/ResSvg.svg"
import NoScroll from '../components/NoScroll'



function MobileReservations() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <NoScroll />
       {/* <BreadCrumb title="Reservations"/> */}
       <div className='mobile-about-mobile-lower'>
         <img className='res_ic' src={ResIC} />
        <NonivieForm/>

</div>
<MobileFooter/>
    </div>
  )
}

export default MobileReservations