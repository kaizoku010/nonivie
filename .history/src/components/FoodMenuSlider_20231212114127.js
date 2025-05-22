import React from 'react'
import "./FoodMenuSlider.css"
import { Carousel } from 'react-responsive-carousel';

import FoodOne from "../imgs/menu/food1.png"
import FoodTwo from "../imgs/menu/food2.png"
import FoodThree from "../imgs/menu/food3.png"
import { Link } from 'react-router-dom';

function FoodMenuSlider() {
  return (
    <div className='food-slider'>
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
  <Link to="/menu" rel='noopener noreferrer'><button  className='kim-btn' style={{marginTop:"50%", marginBottom:"50px", backgroundColor:"salmon", color:"black", fontWeight:"500"}} >Our Menu</button></Link>  
    </div>
  )
}

export default FoodMenuSlider