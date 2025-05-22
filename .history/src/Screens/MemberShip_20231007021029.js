import React from 'react'
import "./MemberShip.css"
import Carousel from 're-carousel'
import Drinks from "../imgs/rework/jay3-6.jpg"
import DjPlayers from "../imgs/rework/jay3-7.jpg"
import Glass from "../imgs/rework/jay3-8.jpg"

// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
 



function MemberShip() {
  return (
    <div className='memebership-page'>
<Carousel loop auto>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
      <div className='slide-1'>
        <img src={Drinks}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Title</h1>
            <h3 className='slider-des'>Description</h3>
            <button className='slider-button'>Book Now</button>
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img src={DjPlayers}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Title</h1>
            <h3 className='slider-des'>Description</h3>
            <button className='slider-button'>Book Now</button>
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img src={Glass}/>
      </div>
        
    </div>
    
  </Carousel>
    </div>
  )
}

export default MemberShip