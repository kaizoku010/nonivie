import React from "react";
import "./About.css"
import Footer from "../components/Footer";
import AboutMobile from "./AboutMobile";
import ABoutText from "../imgs/abtText.svg"
import AboutHorse from "../imgs/abtHorse.png"
import BottomMenu from "../components/BottomMenu";


function About() {
    return (
        <div className="about-page">
        <div className="about-us">
          
            <BottomMenu className="header-about-us" />
              <div className="content-about-us">
                <div className="about-content-holder">
                   <div className="kim-layout">
                    <div className="kim-left">
                        <h1 className="lux-title">A Sanctuary Of Luxury</h1>
                        <p>Nonivie is not just a place; but a sanctuary where luxury takes center stage.Our purpose is clear; to create a luxurious and transcendent experience that seemlessly blends opulence, culinary mastery, and vibrant nightlife.</p>
                       {/* vision-mission */}
                       <div className="vision-mission">

                        <div className="vision">
                        <h2 className="our-vision">Our Vision</h2>
                        <p className="vm-text">Our Vision is clear; to create a luxurious and transcendent experience that seemlessly blends opulence, culinary mastery, and vibrant nightlife.</p>
                    
                        </div>
                        <div className="mission">
                        <h2 className="our-vision">Our Mission</h2>
                        <p className="vm-text">Our Mission is to be the ultimate destination for those who seek to indulge in exquisite flavors, immerse themselves in a dynamic nocturnal ambiance, and bask in the lap of luxury.</p>
                   
                        </div>

                       </div>
                       {/* end of vision-mission */}
                       <h3 className="more-on-us">More About Us</h3>
                       <p>
                       We are the ultimate destination for those seeking a luxurious and transcendent experience.
                       </p>
<p style={{marginTop:"10px"}}>
With a commitment to excellence, innovation, hospitality, and elegance, Noni-vie creates a sanctuary where luxury takes center stage. 
Discover NoniVie and become a discerning connoisseur of indulgent luxury.  
</p>

                         </div>

                               <div className="divider"></div>
                    <div className="kim-right">
                        <img style={{width:"500px"}} src={AboutHorse}/>
                    </div>
                    </div>
                </div>
            </div>   
    
            <Footer className='header-footer' />
        </div>
        <AboutMobile className="mobile-about"/>
        </div>
    )

}

export default About