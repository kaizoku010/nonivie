import React,{useEffect} from 'react'
import "./MobileReservations.css"
import NonivieForm from "../components/MobileForm"
import MobileFooter from '../components/MobileFooter'
import ResIC from "../imgs/ResSvg.svg"
import NoScroll from '../components/NoScroll'
import MetaPixel from '../utils/metaPixel/metaPixel'



function MobileReservations(props) {


useEffect(() =>{
    const ReactPixel = require('react-facebook-pixel')
    ReactPixel.default.init('698101745573244')
  }, []);
  
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