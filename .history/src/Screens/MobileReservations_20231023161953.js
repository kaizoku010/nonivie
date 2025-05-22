import React from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileFooter from '../components/MobileFooter'
import ResIC from "../imgs/ResSvg.svg"
import NoScroll from '../components/NoScroll'
import MetaPixel from '../utils/metaPixel/metaPixel'



function MobileReservations(props) {


  componentDidMount(){
    const ReactPixel = require('')
  }
  
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      {/* <MetaPixel/> */}
        <NoScroll />
       {/* <BreadCrumb title="Reservations"/> */}
       <div className='mobile-about-mobile-lower'>
         <img className='res_ic' src={ResIC} />
        <NonivieForm bookings={props} />

</div>
<MobileFooter/>
    </div>
  )
}

export default MobileReservations