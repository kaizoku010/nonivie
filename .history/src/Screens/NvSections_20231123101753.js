import React, {useEffect} from 'react'
import "./NvSections.css"
import Header from "../components/BottomMenu"
import Footer from "../components/Footer"
import HeaderImage from "../imgs/rest_header.jpg"
import SideFlexx from "../imgs/side_grow.png"
import Phone from "../imgs/mock.jpg"
import HelpDesk from "../imgs/headgear.png"
import BookNow from "../imgs/booknow.png"
import KimIc from "../imgs/kim_ic.png"
import NvSectionMobile from './NvSectionMobile'
import sectionData from '../dataPoint/sectionData'
import ElegentText from "../imgs/SVG/pure.svg"
import Welcome from "../imgs/SVG/welcome.svg"

import { Link, useNavigate } from 'react-router-dom'

function NvSections() {

const history = useNavigate();
  const passData =(sectionId)=>{
    history(`/section-page/${sectionId}`);
  }  

  return (
    <div> 

    {/* large view */}
    <div className='new-sections'>
      <Header />
      <div className='new-sections-holder'>
        <div className='center-new-sect'>
        <img src={Welcome} className='new-sect-title'/>

        </div>
        {/* middle element */}
      </div>
{/* middle content */}
      <div className='middle-child'>
        {/* 1st section */}
        <div>
          space  1
        </div>
        {/* 2nd Section */}
        <div className='middle-conntent'>
          <img className='left-flex' src={SideFlexx} />
          <div className='right-flex'>
            <h1 style={{marginBottom:"10px", fontSize:"3rem !important"}} className='right-flex-title'>The<br/>Champagne<br/>Club.</h1>
            <h4 className='right-flex-title'>Join Us For An Opulent</h4>
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
            <Link className='arrow-btn' to={`/section-page/${4}`}>Read More</Link>
          </div>


        </div>
        {/* 3rd section */}
        <div>
          space  3
        </div>
      </div>

{/* heading and subtitle */}
<div className='header-new-sect'>
  <div style={{width:"700px"}}>
    <img src={ElegentText}/>
< p>Enter our world of timeless elegance, where opulence speaks from every corner, and luxury emanates from every detail.</p>
  </div>
</div>
{/* 3 cards */}

<div className='three-cards'>
{/* first card */}

<ul className="single-section">
{sectionData.sectionsDataSet.slice(0, 3).map((section) =>(
    <li key={section.id} className="single-section">
      <div className='card-view'>
    <img src={section.image}/>
     <h3>{section.title}.</h3>
     <p>{section.excerpt}</p>
    <Link className='arrow-btn' to={`/section-page/${section.id}`}>Read More</Link>

</div> 
    </li> 
 ))}
</ul>
</div>

<div className='lower-element'>
  {/* lower element */}
<div className='lower-section'>
{/* lower-sect-1 */}
 <div className='lower-sect-one'>
<div className='coda-talent' style={{display:"flex", flexDirection:"column"}}>
  <div className='centerMe'>
 <h1>Grand Opening</h1>
 <p style={{color:"", width:"300px", marginTop:"20px", textAlign:"justify"}}>
 Welcome to the grand opening of Noni Vie, an exotic premium destination that promises to redefine luxury and indulgence. Step into a world where opulence meets tranquility, and every detail is meticulously crafted to elevate your experience.
 </p>
 <ul style={{marginTop:"20px"}}>
<li>Elegant Ambiance</li>
<p style={{width:"300px", marginTop:"10px", marginBottom:"10px"}}>Immerse yourself in the sophisticated ambiance of Noni Vie. From the moment you enter, you'll be greeted by a fusion of contemporary design and exotic elements that create a truly enchanting atmosphere. </p>
<li>Culinary Delights</li>
<p style={{width:"300px", marginTop:"10px", marginBottom:"10px"}}>Indulge your senses with an extraordinary culinary journey at Noni Vie. Our world-class chefs have curated a menu that seamlessly blends exotic flavors and premium ingredients.</p>
<li>Exclusive Experiences</li>
<p style={{width:"300px", marginTop:"10px", marginBottom:"10px"}}>Noni Vie offers a range of exclusive experiences that set it apart from the ordinary. Whether it's a private cabana by the pool, personalized concierge services, or curated events featuring world-class entertainment, every moment at Noni Vie is designed to be extraordinary.</p>

 </ul>
 <Link to="/gallery" style={{color:"black"}} className='nonivie-button reColor'>Dive In</Link>
</div>

</div>
 
</div>
{/* lower-sect-2 */}
<div className='lower-sect-two'>
<div style={{marginBottom:"-35px"}}  src={Phone}></div>

</div>
{/* end of lower elements */}
</div>
{/*  */}
</div>
{/* call to action */}
<div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>
  To delve deeper into the realm of any of our sections, kindly pursue the link Provided below for a more comprehensive understanding.
  </p>

    <Link to="/contact-us" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 2 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic kim-ic' src={KimIc}/>


<div className='call-to-action-content'>
  <h3>View Our Menu</h3>
  <p className='call-to-action-txt'>
  Our menu features a wide range of exquiste dishes made with culnary mastery.

  </p>

  <Link to="/coming-soon" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 3 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={BookNow}/>
<div className='call-to-action-content'>
  <h3>Book Now</h3>
  <p className='call-to-action-txt'>
  Imagine yourself embarking on an unforgettable journey, exploring a new realm of luxury, book your opulent today!

  </p>

    <Link to="/reservations" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>

</div>

      <div className='new-sections-footer'>
        <Footer />
      </div>


    </div>
    {/* mobile view */}
    <div className='new-sections-mobile'>
      <NvSectionMobile/>
    </div>
    </div>
  )
}

export default NvSections