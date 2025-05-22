import React from 'react'
import "./MemberPage.css"
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import NonniVieHeading from "../components/NonnivieHeading";
import ImageTest from "../imgs/rework/cigars.jpg"
import Swek from "../imgs/rework/Pattern.png"
import NvBtn from "../components/NoniVieButton"


function MemberPage() {
  return (
    <div className="sasula">
            {/* <div className="yellow-line"></div> */}
            <Header className="header-about-us" />
            <BreadCrumb title={"Membership"} />

            <div className="content-about-us">
            
            </div>
         
            <Footer className='header-footer' />
        </div>
  )
}

export default MemberPage