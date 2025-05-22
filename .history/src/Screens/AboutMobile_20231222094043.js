import React from 'react'
import "./AboutMobile.css"
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'
// import "./About.css"
import NvBtn from "../components/NoniVieButton"
import ImageTest from "../imgs/rework/cigars.jpg"
// import Swek from "../imgs/rework/Pattern.png"
import NonniVieHeading from "../components/NonnivieHeading";
import MobileFooter from "../components/MobileFooter"
import NoScroll from '../components/NoScroll'
import Swek from "../imgs/nonivieMobileTheme.png"
import AboutText from "../imgs/abtText.png"
import Swek2 from '../imgs/Pattern.png'


function AboutMobile() {
  return (
    <div className='mobile-about-mobile'>
        <NoScroll className="mobile-menu-mobile-about"/>
        <div className='mobile-about-mobile-lower'>
            
        <div className="content-mobile-about-us">

                <div className="mobile-about-content-holder">
                   <div className="mobile-about-top-content mobile-about-content-holder">
                    <div className="first-child">
                        <img className="mobile-about-ic" src={Swek} />

                    </div>
                    <div className="mobile-middle-child">
<img src={AboutText}  className="mobile-about-text"/>
                           
                    </div>
                    <div className="first-child">
                        <img className="mobile-about-ic swek" src={Swek2} />
                    </div>
                    </div>
                </div>
                <div className='footerAbout'>
                <MobileFooter/>
                </div>
            </div>    
        </div>
    </div>

  )
}

export default AboutMobile