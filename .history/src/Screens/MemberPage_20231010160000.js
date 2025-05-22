import React from 'react'
import "./MemberPage.css"
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import NonniVieHeading from "../components/NonnivieHeading";
import ImageTest from "../imgs/rework/cigars.jpg"
import Swek from "../imgs/rework/Pattern.png"
import NvBtn from "../components/NoniVieButton"
import Header from '../components/Header';
import Card from "../imgs/card.png"
import NoniVieButton from '../components/NoniVieButton';
import CardVideo from "../video/card.mp4"
import MobileMemberShip from './MobileMemberShip';

function MemberPage() {
  return (
    <div className="sasula">
              <MobileMemberShip style={{display:"block"}}/>
            <div className='hideMe'>
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