import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';
import Ballerz from "../imgs/ballerz.jpg"
import Val from "../imgs/valvet.jpg"
import Pan from "../imgs/abby.jpg" 
import FoodOne from "../imgs/menu/food1.png"
import FoodTwo from "../imgs/menu/food2.png"
import FoodThree from "../imgs/menu/food3.png"

function FoodMenuSlider() {
  return (
    <div className='food-slider'>

<Carousel autoPlay>
{/* slide one */}
  <div className='food-section'>
  <img className='main-img-carousel2' src={foo}/>
     
    
     </div>
     {/* slide two */}
     <div className='food-section'>
  <img className='main-img-carousel2' src={Ballerz}/>
     
     </div>
     {/* slide three */}
     <div className='food-section'>
  <img className='main-img-carousel2' src={Val}/>
     
     </div>
  </Carousel>
  
    </div>
  )
}

export default FoodMenuSlider