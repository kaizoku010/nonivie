import React, {useState, useEffect}  from 'react'
import "./MobileHome.css"
import MobileMenu from '../components/MobileMenu'
import Footer from "../components/MobileFooter"
import DummyImage from "../imgs/horse.png"
import Lounge from "../imgs/lounge.jpg"
import Pattern from "../icons/center_ic.png"
import Chef from "../imgs/chef2.jpg"
import { Link } from 'react-router-dom'
import StoryTitle from "../imgs/ourStory.svg"
import Phil_ic from "../imgs/OurPhil.svg"
import ReserveSections from '../components/ReserveSections'
import Delights from "../imgs/menu/delights.png"
import Food from "../imgs/tech.png"
import ChristmasHero from '../components/ChristmasHero'
import FoodMenuSlider from '../components/FoodMenuSlider'

function MobileHome() {

  const [isVisible, setIsVisable] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  

  const handleVideoLoad = ()=>{
    setIsVideoLoaded(true)
  }



  useEffect(()=>{
    const ReactPixel = require('react-facebook-pixel')
    ReactPixel.default.init('698101745573244')
  },[])

  return (
    <div className='mobile-holder'>
      <MobileMenu />
      {/* <div className='fullscreen-video'>
        <div className='grnd-mobile'>
        <div className='hero-content'>

<img className='op-title'  src={OpTitle}/>
<img className='op-title-bottom' src={CalMas}/>

        </div>

       
        </div>
      </div> */}
<ChristmasHero/>

      <div className='mobile-container'>
        <div className='mobile-bg-start'>
          <img className="carly anime" src={StoryTitle} />
          <div className='about-text-home'>
            <p className='about-text-mobile anime'>
              Nestled at the crossroads of opulence and nightlife,
              we are an upcoming establishment that embodies
              the essence of premium hospitality, We seamlessly
              blend the finest flavours with a vibrant nocturnal
              ambiance, creating a haven where luxury takes centre stage.
            </p>
          </div>
          <img src={DummyImage} className='home-img-about roundMe' />
          <img src={Pattern} className='mobile-pattern home-img-about' />
          <img src={Lounge} className='home-img-about roundMe' />
        </div>
        <div className='join-us'>
          <img className="carly" src={Phil_ic} />
          <p className='about-text-mobile weightMe anime'>
            To create a luxurious and transcendent experience that
            redefines premium hospitality by seamlessly blending
            opulence, culinary mastery, and vibrant nightlife.
            Noni-Vie provides an unforgettable and
            exclusive experience, making you feel
            like a discerning connoisseur and
            allowing you to revel in the ultimate
            luxury and culinary mastery.
          </p>

          <img src={Chef} className='home-img-about roundMe' />
          {/* <img src={Shrimp} className='home-img-about roundMe' /> */}
          <div className='kim-div'>
        {/* <img className='kim-image' src={KimImage}/> */}
        <div className='food-slider-holder'> 

          <img style={{marginTop:"20%"}} className='delights-home-title' src={Delights}/>
          <p className='carousle-food-subtitle about-text-mobile'>Savor the freshness of our high-quality ingredients and experience culinary excellence at its finest. Elevate your dining experience with our signature dishes, embodying the essence of sophistication and taste.</p>
         <div>
          
         </div>
          <FoodMenuSlider/>
        </div>
        
        <div className='food-holder roundMe'>
         <div className='food-div'>
         <img src={Food} className='zindex'/>
          <button style={{backgroundColor:"", marginTop:"10px"}} className='kim-btn'>Exlore</button>
          </div> 
         </div>
        <ReserveSections />
        <Link to="/bookings" rel='noopener noreferrer'><button  className='kim-btn'>Book Now</button></Link>
        </div>  {/* <Heading className="carly" heading="Book A Table" iCarly="Reservations" /> */}
        </div>
   
      <Footer/>
     </div>
    </div>
  );
}

export default MobileHome