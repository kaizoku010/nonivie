import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';
import Ballerz from "../imgs/ballerz.jpg"
import Val from "../imgs/valvet.jpg"
import Pan from "../imgs/abby.jpg" 
import { Link } from 'react-router-dom'

function FoodMenuSlider() {
  return (
    <div className='food-slider'>

<Carousel autoPlay>
{/* slide one */}
  <div className='nvSection-main2'>
  <img className='main-img-carousel' src={Pan}/>
        <h2 className='main-title'>Pantheon Sun Deck.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        We ere thrilled to announce that our exclusive spaces are filling up fast! Join us for an opulent experience, but act quickly. Click below to make your reservations or call us to assist you throughtout the process.        </p>
        <Link className='arrow-btn' to={`/section-page/${22}`}>Book Now</Link>

    
     </div>
     {/* slide two */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={Ballerz}/>
        <h2 className='main-title'>Ballerz End.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment  
        </p>
<Lin className='arrow-btn' to={`/section-page/${2}`}>Book Now</Link>

    
     </div>
     {/* slide three */}
     <div className='nvSection-main2'>
  <img className='main-img-carousel' src={Val}/>
        <h2 className='main-title'>Valvet Terrace.</h2>
        <h3 className='main-sub-title'>Join Us For An Opulent</h3>
        <p className='right-flex-text '>
        Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up        </p>
        <Link className='arrow-btn' to={`/section-page/${3}`}>Book Now</Link>

    
     </div>
  </Carousel>
  
    </div>
  )
}

export default FoodMenuSlider