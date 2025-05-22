import React from "react";
import "./Homepage.css";
import "./MobileHome.css"
import Hero from "../components/Hero.js";
import MobileHome from "./MobileHome";
import BottomMenu from "../components/BottomMenu.js";
import ParkComp from "../components/ParkComp.js";
import Area from "../imgs/nonivie-lounge.jpg"
import DxButton from "../components/DxButton.js";

function Homepage() {
  return (
    <div style={{backgroundColor:"black"}} className="home-page">
      {/* <MetaPixel/> */}
{/* desktops code */}
    <div className="homepage-holder">
    <div className="box">
        <BottomMenu />
      </div>    
      <div  className="dixon-carousel">
      {/* <MemberShip/> */}
      <Hero
      
      </div> 

    </div>
    <div className="mobile-code">
    <MobileHome/>

    </div>
    </div>
  );
}

export default Homepage;
