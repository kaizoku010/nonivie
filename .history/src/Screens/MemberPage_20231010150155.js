import React from 'react'
import "./MemberPage.css"
import Footer from "../components/Footer";
import NonniVieHeading from "../components/NonnivieHeading";
import ImageTest from "../imgs/rework/cigars.jpg"
import Swek from "../imgs/rework/Pattern.png"
import NvBtn from "../components/NoniVieButton"
import Header from '../components/Header';
import Card from "../imgs/card.png"
import NoniVieButton from '../components/NoniVieButton';
import CardVideo from "../video/card.mp4"
import MobileFooter from '../components/MobileFooter';
import MobileMenu from '../components/MobileMenu'
import BreadCrumb from '../components/BreadCrumb'

function MemberPage() {
  return (
    <div className="sasula">
            {/* <div className="yellow-line"></div> */}
            <div className='mobile-view'>
            <MobileMenu className="mobile-menu-mobile-about"/>
        <BreadCrumb title="Member"/>
            <div className='card-video'> 
          <video className='member-card-mobile' width="100%" height="100%" loop autoPlay >
            <source src={CardVideo} type='video/mp4' />
            </video>
            </div>
        
            <div className='member-content'>
            <p className='member-text'>Great! Here's some helpful
            information about credit card design 3D: Credit card
            design 3D refers to the process of creating
            software.</p>
            </div>
            <MobileFooter/>
            </div>


            <div className='web-view'>
            <Header className="header-about-us" />
            <BreadCrumb title={"Membership"} />

            <div className="content-member">
            <div className='member-left-content'>   
            <h1 className='member-title'>Membership Card.</h1>            
            <p className='member-text'>Great! Here's some helpful
            information about credit card design 3D: Credit card
            design 3D refers to the process of creating
            software.</p>
            <NoniVieButton/>
            </div>
            <video className='member-card' width="100%" height="100%" loop autoPlay >
            <source src={CardVideo} type='video/mp4' />

            </video>
           
           
            </div>         
            <Footer className='header-footer' />
            </div>
        </div>
  )
}

export default MemberPage