import React from 'react'
import "./MemberShip.css"
import Carousel from 're-carousel'
import Drinks from "../imgs/abby.jpg"

// import IndicatorDots from './indicator-dots'
// import Buttons from './buttons'
 



function MemberShip() {
  return (
    <div className='memebership-page'>
<Carousel loop auto>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>
      <div></div>
        
        </div>
    <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
    <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
  </Carousel>
    </div>
  )
}

export default MemberShip