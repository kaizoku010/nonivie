import React from 'react'
import "./NvSectionsMobile.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MobileMenu from "../components/MobileMenu"
import MobileHeaderImg from "../imgs/main_img.jpg"
import MobileFooter from "../components/MobileFooter"
import MobileView from "../imgs/mock.jpg"
import Phone from "../imgs/mock.jpg"
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
    <p className='breadcrumb-text'>Our personality is made up of our essence and our tone of voice.It determines how we think and what we say and, therefore, how we’re understood by those around us.We make sure our personality is clearly present in every oneof our touchpoints.</p>
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
<li><p>Best For Birthdays Parties(Celebrations).</p></li>
            <li><p>One Of The Best Places in The House.</p></li>
            <li><p>8 - 12 Seater Booths @ 500,000ugx.</p></li>
            <li><p>Best For Business Men & C.E.Os</p></li>
              <li><p>Strictly Bottle Services</p></li>
              <li><p>Overhead Screens.</p></li>
 </ul>
 <Link className='nonivie-button' to={`/section-page/${4}`}>Read More</Link>

    
     </div>

{/* carousel */}
<div className='carousel-mobile'>
  <h2 >Experience Pure Elegance</h2>
  < p style={{marginBottom:"20px"}}>Enter our world of timeless elegance, where opulence speaks from every corner, and luxury emanates from every detail.</p>
  


  <Carousel autoPlay>
{/* slide one */}
  <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Pantheon Sun Deck.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        We ere thrilled to announce that our exclusive spaces are filling up fast! Join us for an opulent experience, but act quickly. Click below to make your reservations or call us to assist you throughtout the process.        </p>
        <Link className='arrow-btn' to={`/section-page/${22}`}>Read More</Link>

    
     </div>
     {/* slide two */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Ballerz End.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment  
        </p>
<Link className='arrow-btn' to={`/section-page/${2}`}>Read More</Link>

    
     </div>
     {/* slide three */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={MobileHeaderImg}/>
        <h2 className='main-title'>Valvet Terrace.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up        </p>
        <Link className='arrow-btn' to={`/section-page/${3}`}>Read More</Link>

    
     </div>
  </Carousel>
  
  </div>

  <div style={{width:""}} className='nvSection-para'>
  </div>

  <div className='nvSection-para' style={{}}>
    <h2 style={{marginTop:"20px"}}>More About <span style={{color:"white"}}>Us</span></h2>
    <p>In support of “opulent & splendid”, our values deﬁne how we speak, look and act. Whatever we’re doing, no matter who we’re with or where we re, if we keep these values close we’ll stay true to who we are.
    </p>

    <button  className='nonivie-button'>Read More</button>

    <div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>To delve deeper into the realm of any of our sections, kindly pursue the link Provided below for a more comprehensive understanding.</p>

    <Link className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 2 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic kim-ic' src={KimIc}/>


<div className='call-to-action-content'>
  <h3>View Our Menu</h3>
  <p className='call-to-action-txt'>Our menu features a wide range of exquiste dishes made with culnary mastery.</p>

    <Link to="/coming-soon" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 3 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={BookNow}/>
<div className='call-to-action-content'>
  <h3>Book Now</h3>
  <p className='call-to-action-txt'>Imagine yourself embarking on an unforgettable journey, exploring a new realm of luxury, book your opulent today!</p>

    <Link to="/reservations" className='call-to-action-link'>Explore more{" >"}</Link>
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