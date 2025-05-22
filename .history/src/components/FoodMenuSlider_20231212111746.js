import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';

import FoodOne from "../imgs/menu/food1.png"
import FoodTwo from "../imgs/menu/food2.png"
import FoodThree from "../imgs/menu/food3.png"

function FoodMenuSlider() {
  return (
    <div className='food-slider'>
<p className='carousle'>Savor the freshness of high-quality ingredients and experience culinary excellence at its finest. Elevate your dining experience with this signature dish, embodying the essence of sophistication and taste.</p>
<Carousel autoPlay infiniteLoop centerMode> 
{/* slide one */}
  <div className='food-section'>
  <img className='main-img-carousel2' src={FoodOne}/>
     
    
     </div>
     {/* slide two */}
     <div className='food-section'>
  <img className='main-img-carousel2' src={FoodTwo}/>
     
     </div>
     {/* slide three */}
     <div className='food-section'>
  <img className='main-img-carousel2' src={FoodThree}/>
     
     </div>

     
  </Carousel>
  
    </div>
  )
}

export default FoodMenuSlider