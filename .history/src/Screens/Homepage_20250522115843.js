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
      <Hero/>
      {/* <ParkComp/>
      <div className="new-park-slider">
        <img className="park-image" src={Area}/>
        <img className="park-image" src={Area}/>
        <div className="park-slider-content">
     <div className="park-slider-heading"> 
     <p style={{fontSize:"1rem"}}>Curious about the benefits of being at Nonivie</p> 

      <h3> <span className="nv-span-text">Knowledge</span></h3>
      <h3> <span className="nv-span-text">Guidance</span></h3>
      <h3> <span className="nv-span-text">Support</span></h3>
      </div>
    <div className="park-mini-content">
    <p style={{fontSize:"1.5rem", marginTop:"15px"}}>Expert guidance</p>
    <p className="font-width">From the outset, we’ll work in partnership with you to fully understand your needs and create the best, most cost-effective solution for you.
</p>
    </div>
      </div>
      </div>
      
      </div> 
{/* park ui */}
<div className="park-holder">

<div className="park-ui">
<div className="smart-section">
<p className="smart-menu">Smart EV charging solutions
for homes and businesses</p>
<DxButton/>
</div>
</div>
</div> */}

    </div>
    <div className="mobile-code">
    <MobileHome/>

    </div>
    </div>
  );
}

export default Homepage;
