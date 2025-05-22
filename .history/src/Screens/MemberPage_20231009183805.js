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
import CardVideo from "../imgs/useThis.mp4"

function MemberPage() {
  return (
    <div className="sasula">
            {/* <div className="yellow-line"></div> */}
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
            <Video className='member-card' src={Card}>
            <source src={CardVideo} />

            </Video>
           
           
            </div>         
            <Footer className='header-footer' />
        </div>
  )
}

export default MemberPage