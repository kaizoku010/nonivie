import React, {useEffect} from 'react'
import "./ReservationsPage.css"
import BottomMenu from '../components/BottomMenu'
import RS_IC from "../icons/left-menu.png" 
import NonivieForm from '../components/NonivieForm'
import SideWays from "../imgs/side-ways.png"
import Header from "../components/Header"
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'
import MobileReservations from './MobileReservations'
import RescIc from "../imgs/ResSvg.svg"
import { useLocation } from 'react-router-dom'
// import MetaPixel from '../utils/metaPixel/metaPixel'


function ReservationsPage() {

const {state} = useLocation();
console.log("STATE FROM SECTIONS PAGE", state)


useEffect(() =>{
  const ReactPixel = require('react-facebook-pixel')
  ReactPixel.default.init('698101745573244')
}, []);


  return (
    <div className='reservations-page'>
      {/* reservations header */}
      <div className='reservations-holder'>
      <div style={{position:'', top:"0", width:"100%"}}>
      <BottomMenu/>
      </div>
  
     <div className='reservations-form' >
      <div style={{marginTop:"80px"}} className='rs-title-holder no-height'>
      <img className='rs-ic' src={RescIc}/>
  
      </div>
      <NonivieForm booking={state}/>
      <div></div>
      <Footer/> 

     </div>
      </div>

      <div className='mobile-view'>
        <MobileReservations bookings={state}/>
      </div>

      </div>
  )
}

export default ReservationsPage