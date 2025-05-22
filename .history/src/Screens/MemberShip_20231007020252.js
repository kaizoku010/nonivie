import React from 'react'
import "./MemberShip.css"
import Carousel from 're-carousel'
import Drinks from "../imgs/abby.jpg"
import DjPlayers from "../imgs/rework/jay3-7.jpg"
import Glass from "../"

// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
 



function MemberShip() {
  return (
    <div className='memebership-page'>
<Carousel loop auto>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
      <div className='slide-1'>
        <img src={Drinks}/>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img src={Drinks}/>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img src={Drinks}/>
      </div>
        
    </div>
    
  </Carousel>
    </div>
  )
}

export default MemberShip