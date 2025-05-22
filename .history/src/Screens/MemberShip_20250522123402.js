import React from 'react';
import "./MemberShip.css";
import Drinks from "../imgs/slide-4.jpg";
import DjPlayers from "../imgs/rework/jay3-9.jpg";
import Nvlogo from "../imgs/rework/jay3-6.jpg";
import J37 from "../imgs/rework/jay3-7.jpg";
import { Link } from 'react-router-dom';
import Opulance from '../video/teaser2.mp4'



function MemberShip() {
  return (
    <div style={{ backgroundColor: "black" }} className='memebership-page'>
      <video className='home-video' width="100%" height="100%"loop muted autoPlay>
        <source src={Opulance} type="video/mp4" />


      </video>
    </div>
  )
}

export default MemberShip