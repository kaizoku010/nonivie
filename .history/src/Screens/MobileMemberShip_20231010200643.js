import React from 'react'
import "./MobileMemberShip.css"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
import CardVideo from "../video/card_name.mp4"

import MobileFooter from '../components/MobileFooter'

function MobileMemberShip() {
  return (
    <div className=''>
            <div className='mobile-view'>
            <MobileMenu className="mobile-menu-mobile-about"/>
            <BreadCrumb title="MemberShip"/>
            <div className='card-video'> 
            <video className='member-card-mobile' width="100%" height="100%" loop autoPlay >
            <source src={CardVideo} type='video/mp4' />
            </video>
            </div>
            <MobileFooter/>
            </div>
        
    </div>
  )
}

export default MobileMemberShip