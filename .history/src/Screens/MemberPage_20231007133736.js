import React from 'react'
import "./MemberPage.css"
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import NonniVieHeading from "../components/NonnivieHeading";
import ImageTest from "../imgs/rework/cigars.jpg"
import Swek from "../imgs/rework/Pattern.png"
import NvBtn from "../components/NoniVieButton"
import Header from '../components/Header';


function MemberPage() {
  return (
    <div className="sasula">
            {/* <div className="yellow-line"></div> */}
            <Header className="header-about-us" />
            <BreadCrumb title={"Membership"} />

            <div className="content-about-us">
            <p></p>
            </div>
         
            <Footer className='header-footer' />
        </div>
  )
}

export default MemberPage