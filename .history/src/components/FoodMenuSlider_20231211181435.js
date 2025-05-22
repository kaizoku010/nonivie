import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';

import FoodOne from "../imgs/menu/food1.png"
import FoodTwo from "../imgs/menu/food2.png"
import FoodThree from "../imgs/menu/food3.png"

function FoodMenuSlider() {
  return (
    <div className='food-slider'>

<Carousel autoPlay infiniteLoop centerMode> `1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  q1```````````````````````````````````````````````````````````````````````````````````````````````````````````qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
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