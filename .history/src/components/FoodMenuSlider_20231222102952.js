import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';

import FoodOne from "../imgs/menu/food1.jpg"
import FoodTwo from "../imgs/menu/food2.jpg"
import FoodThree from "../imgs/menu/food3.jpg"
import { Link } from 'react-router-dom';

function FoodMenuSlider() {
  return (
    <div className='food-slider'>
<p className='carousle-food-subtitle about-text-mobile'>Savor the freshness of our high-quality ingredients and experience culinary excellence at its finest. Elevate your dining experience with our signature dishes, embodying the essence of sophistication and taste.</p>
<Carousel auto infiniteLoop centerMode> 
{/* slide one */}
  <div className='food-section'>
  <img className='main-img-carousel2' src={FoodOne}/>

     </div>
     {/* slide two */}
     <div className='food-section'>
  <img className='main-img-carousel2' src={FoodTwo}/>
     </div>
     <div className='food-section'>
  <img className='main-img-carousel2' src={FoodThree}/>
     
     </div>     
  </Carousel>
  <div className='space-below'>
  <p className='food-text'>Savor the freshness of our high-quality ingredients and experience culinary excellence at its finest.</p>    
  <div className='food-btn-holder'>
  <Link to="/menu" rel='noopener noreferrer'><button  className='food-btn' style={{ fontWeight:"500"}} >Our Menu</button></Link>  
  </div>
    </div>
  
    </div>
  )
}

export default FoodMenuSlider