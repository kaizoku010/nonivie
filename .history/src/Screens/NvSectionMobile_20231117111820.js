import React from 'react'
import "./NvSectionsMobile.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MobileMenu from "../components/MobileMenu"
import MobileHeaderImg from "../imgs/main_img.jpg"
import MobileFooter from "../components/MobileFooter"
import MobileView from "../imgs/mobileView.png"
import Phone from "../imgs/mobileView.png"
import HelpDesk from "../imgs/headgear.png"
import BookNow from "../imgs/booknow.png"
import KimIc from "../imgs/kim_ic.png"
import Welcome from "../imgs/SVG/welcome.svg"


import { Link } from 'react-router-dom'


function NvSectionMobile() {
  return (

    <div className='nv-sect-mobile'>
        <div className='nv-sect-mobile-header'>
        <MobileMenu/>
        </div>

    <div className='mobile-breadcrumb'>
    <img src={Welcome} className='breadcrumb-title'/>
    <p className='breadcrumb-text'>Indulge in a bottle of our finest champagne while
        reveling in the opulence of our champagne lounge.
        Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication,
        your experience promises to be truly exceptional.</p>
    </div>
    {/* main content */}
     <div className='nvSection-main'>
        <img className='main-img' src={MobileHeaderImg}/>
        <h2 className='main-title'>The Champagne Club.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text'>
            Indulge in a bottle of our finest champagne while reveling in the opulence of our champagne lounge.<br/><br/>Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication, your experience promises to be truly exceptional.
        </p>
        <p style={{textAlign:"left", marginTop:"10px"}}>What To Expect:</p>

<ul className='right-flex-list'>
  <li><p>1. Mobiele abonnementen.</p></li>
  <li><p>2. Mobiele abonnementen.</p></li>
  <li><p>3. Mobiele abonnementen.</p></li>
  <li><p>4. Mobiele abonnementen.</p></li>
  <li><p>5. Mobiele abonnementen.</p></li>
 </ul>
<div className='  '>
<button className='nonivie-button'>Book Now</button>
</div>
    
     </div>

{/* carousel */}
<div className='carousel-mobile'>
  <h2 >Experience Pure Elegance</h2>
  < p style={{marginBottom:"20px"}}>Enter our world of timeless elegance, where opulence speaks from every corner, and luxury emanates from every detail.</p>
  


  <Carousel autoPlay>
{/* slide one */}
  <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Ballerz End.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
            Indulge in a bottle of our finest champagne while reveling in the opulence of our champagne lounge.<br/>Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication, your experience promises to be truly exceptional.
        </p>
<button className='nonivie-button mobile-btn'>SOLD OUT</button>

    
     </div>
     {/* slide two */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Ballerz End.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
            Indulge in a bottle of our finest champagne while reveling in the opulence of our champagne lounge.<br/>Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication, your experience promises to be truly exceptional.
        </p>
<button className='nonivie-button mobile-btn'>Book Now</button>

    
     </div>
     {/* slide three */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Ballerz End.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
            Indulge in a bottle of our finest champagne while reveling in the opulence of our champagne lounge.<br/>Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication, your experience promises to be truly exceptional.
        </p>
<button className='nonivie-button mobile-btn'>Book Now</button>

    
     </div>
  </Carousel>
  
  </div>

  <div className='nvSection-para'>
    <img className='mock-up-image' src={MobileView}/>
  </div>

  <div className='nvSection-para' style={{}}>
    <h2 style={{marginTop:"20px"}}>Welkom To <span style={{color:"white"}}>Nonivie</span></h2>
    <p>
        Indulge in a bottle of our finest champagne while
        reveling in the opulence of our champagne lounge.
        Adorned with overhead screens, plush seating, and an ambiance that exudes sophistication,
        your experience promises to be truly exceptional.
    </p>

    <button className='nonivie-button'>Read More</button>

    <div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>We geven je graag persoonlijk advies. Voor een
    abonnement dat echt bij je past.
    Bel 0800-0092 of ga naar een Shop.</p>

    <Link className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 2 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic kim-ic' src={KimIc}/>


<div className='call-to-action-content'>
  <h3>View Our Menu</h3>
  <p className='call-to-action-txt'>Our menu features a wide range of exquiste dishes made with culnary mastery.</p>

    <Link to={} className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 3 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={BookNow}/>
<div className='call-to-action-content'>
  <h3>Book Now</h3>
  <p className='call-to-action-txt'>We geven je graag persoonlijk advies. Voor een
    abonnement dat echt bij je past.
    Bel 0800-0092 of ga naar een Shop.</p>

    <Link className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>

</div>
  </div>
  
    
    {/* footerContent */}
    <div className='mobile-footer'>
        <MobileFooter/>
    </div>
    </div>
  
    )
}

export default NvSectionMobile