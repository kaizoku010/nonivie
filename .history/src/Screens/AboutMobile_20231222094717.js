import React from 'react'
import "./AboutMobile.css"
import MobileFooter from "../components/MobileFooter"
import NoScroll from '../components/NoScroll'
import Swek from "../imgs/nonivieMobileTheme.png"
import Swek2 from '../imgs/Pattern.png'


function AboutMobile() {
  return (
    <div className='mobile-about-mobile'>
        <NoScroll className="mobile-menu-mobile-about"/>
        <div className='test-div'>
            
        <div className="content-mobile-about-us">

                <div className="mobile-about-content-holder">
                   <div className="mobile-about-top-content mobile-about-content-holder">
                    <div className="first-child">
                        <img className="mobile-about-ic" src={Swek} />

                    </div>
                    <div className="mobile-middle-child">
                    <div className="kim-left-mobile">
                        <h1 className="lux-title-mobile">A Sanctuary Of Luxury</h1>
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
                    </div>
                    <div className="first-child">
                        <img className="mobile-about-ic swek" src={Swek2} />
                    </div>
                    </div>
                </div>
                <div className='footerAbout'>
                <MobileFooter/>
                </div>
            </div>    
        </div>
    </div>

  )
}

export default AboutMobile