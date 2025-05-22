import React from 'react'
import "./MemberShip.css"
import Carousel from 're-carousel'
import Drinks from "../imgs/slide-4.jpg"
import DjPlayers from "../imgs/rework/jay3-7.jpg"
import Glass from "../imgs/rework/jay3-8.jpg"
import Nvlogo from "../imgs/rework/jay3-6.jpg"
import NoniVieButton from '../components/NoniVieButton'



function MemberShip() {
  return (
    <div className='memebership-page'>
<Carousel loop auto>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
      <div className='slide-1'>
        <img src={Drinks}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Food, Recipes</h1>
            <h3 className='slider-des'>Mollit anim id est laborum. Sed ut perspiciatis unde omnis</h3>
            <p className='slider-para'>iste natus error sit voluptatem accusant tium doloremque laudan tiumotam</p>
            <button className='slider-button re-color-slide-btn'>Book Now</button>
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img className='slider-img' src={DjPlayers}/>
        <div className='center-text'>
            <h1 className='center-title'>Food, Recipes</h1>
            <h3 className='center-des'>Mollit anim id est laborum. Sed ut perspiciatis unde omnis</h3>
            <p className='slider-para'>iste natus error sit voluptatem accusant tium doloremque laudan tiumotam</p>
          <Nv
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img src={Glass}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Food, Recipes</h1>
            <h3 className='slider-des'>Mollit anim id est laborum. Sed ut perspiciatis unde omnis</h3>
            <p className='slider-para'>iste natus error sit voluptatem accusant tium doloremque laudan tiumotam</p>

            <button className='slider-button'>Book Now</button>
        </div>
      </div>     
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img className='slider-img' src={DjPlayers}/>
        <div className='center-text'>
            <h1 className='center-title'>Food, Recipes</h1>
            <h3 className='center-des'>Mollit anim id est laborum. Sed ut perspiciatis unde omnis</h3>
            <p className='slider-para'>iste natus error sit voluptatem accusant tium doloremque laudan tiumotam</p>
            <button className='center-button'>Book Now</button>
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img className='slider-img' src={Nvlogo}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Food, Recipes</h1>
            <h3 className='slider-des'>Mollit anim id est laborum. Sed ut perspiciatis unde omnis</h3>
            <p className='slider-para'>iste natus error sit voluptatem accusant tium doloremque laudan tiumotam</p>
            <button className='slider-button'>Book Now</button>
        </div>
      </div>
        
    </div>
   
    
  </Carousel>
    </div>
  )
}

export default MemberShip