import React,{useEffect} from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileFooter from '../components/MobileFooter'
import ResIC from "../imgs/ResSvg.svg"
import NoScroll from '../components/NoScroll'
import MetaPixel from '../utils/metaPixel/metaPixel'

function MobileReservations(props) {

  return (
          // {/* <MetaPixel/> */}

    <div style={{display:"flex", flexDirection:"column"}}>
              {/* <MetaPixel/> */}

        <NoScroll />
       {/* <BreadCrumb title="Reservations"/> */}
       <div className='mobile-about-mobile-lower'>
         <img className='res_ic' src={ResIC} />
        <NonivieForm bookings={props} />

</div>
<div className='sections-mobile-footer indexMe'>
<MobileFooter/>
</div>
    </div>
  )
}

export default MobileReservations