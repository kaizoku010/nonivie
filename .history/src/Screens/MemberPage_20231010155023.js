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
            <div className='mobile-view-member'>
              <MobileMemberShip/>
            </div>
        </div>
  )
}

export default MemberPage